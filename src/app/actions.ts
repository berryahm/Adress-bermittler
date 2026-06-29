"use server";

import { redirect } from "next/navigation";
import { INSURANCE_CATEGORIES, type InsuranceCategoryId } from "@/lib/constants";
import { createEcoreLead, EcoreError } from "@/lib/ecore";

export type ContactFormState = {
  ok: boolean;
  fieldErrors?: Partial<Record<ContactField, string>>;
  formError?: string;
};

type ContactField =
  | "gender"
  | "firstName"
  | "lastName"
  | "street"
  | "zip"
  | "city"
  | "phone"
  | "email"
  | "birthDate"
  | "vermittler"
  | "categories"
  | "consent";

const VALID_CATEGORY_IDS = new Set<InsuranceCategoryId>(
  INSURANCE_CATEGORIES.map((c) => c.id),
);

function asString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string): boolean {
  // Pragmatic, intentionally simple regex – we only need to weed out typos.
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function isValidPhoneCH(value: string): boolean {
  // Accept +41 / 0041 / 0 prefixed numbers, ignore spaces / dashes / parens.
  const digits = value.replace(/[\s().-]/g, "");
  return /^(\+41|0041|0)[1-9]\d{7,11}$/.test(digits);
}

function isValidBirthDate(value: string): boolean {
  // HTML date input gives ISO yyyy-mm-dd.
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return false;
  const now = new Date();
  const age =
    now.getFullYear() -
    d.getFullYear() -
    (now <
    new Date(now.getFullYear(), d.getMonth(), d.getDate())
      ? 1
      : 0);
  return age >= 18 && age <= 110;
}

export async function submitContactRequest(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const gender = asString(formData.get("gender"));
  const firstName = asString(formData.get("firstName"));
  const lastName = asString(formData.get("lastName"));
  const street = asString(formData.get("street"));
  const zip = asString(formData.get("zip"));
  const city = asString(formData.get("city"));
  const phone = asString(formData.get("phone"));
  const email = asString(formData.get("email"));
  const birthDate = asString(formData.get("birthDate"));
  const consent = formData.get("consent") === "on";
  const ref = asString(formData.get("ref"));
  const vermittler = asString(formData.get("vermittler")).slice(0, 120);

  const categoriesRaw = formData.getAll("categories").map((v) => String(v));
  const categories = categoriesRaw.filter((c): c is InsuranceCategoryId =>
    VALID_CATEGORY_IDS.has(c as InsuranceCategoryId),
  );

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (gender !== "männlich" && gender !== "weiblich")
    fieldErrors.gender = "Bitte Anrede auswählen.";
  if (firstName.length < 2) fieldErrors.firstName = "Bitte Vorname angeben.";
  if (lastName.length < 2) fieldErrors.lastName = "Bitte Nachname angeben.";
  if (street.length < 3) fieldErrors.street = "Bitte Strasse und Nr. angeben.";
  if (!/^\d{4}$/.test(zip)) fieldErrors.zip = "Bitte gültige PLZ angeben.";
  if (city.length < 2) fieldErrors.city = "Bitte Ort angeben.";
  if (!isValidPhoneCH(phone))
    fieldErrors.phone = "Bitte gültige Telefonnummer angeben.";
  if (!isValidEmail(email))
    fieldErrors.email = "Bitte gültige E-Mail-Adresse angeben.";
  if (!isValidBirthDate(birthDate))
    fieldErrors.birthDate =
      "Bitte ein gültiges Geburtsdatum angeben (volljährig).";
  if (categories.length === 0)
    fieldErrors.categories =
      "Bitte mindestens einen Versicherungsbereich auswählen.";
  if (!consent)
    fieldErrors.consent =
      "Ohne Ihre Einwilligung dürfen wir Sie leider nicht kontaktieren.";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  // Strasse/Nr. aufsplitten: trailing Hausnummer ins addressNo-Feld.
  const streetMatch = street.match(/^(.*?)[\s,]+(\d+\s*[a-zA-Z]?)$/);
  const addressStreet = streetMatch ? streetMatch[1].trim() : street;
  const addressNo = streetMatch ? streetMatch[2].trim() : undefined;

  const interests = categories
    .map((id) => INSURANCE_CATEGORIES.find((c) => c.id === id)?.label ?? id)
    .join(", ");
  const note = `Adressübermittler-Landingpage – Interesse: ${interests}.`;

  const recommendedBy = vermittler || ref || undefined;

  try {
    await createEcoreLead({
      customerType: "Privat",
      gender: gender as "männlich" | "weiblich",
      firstName,
      lastName,
      dob: birthDate,
      email,
      phone1: phone,
      addressStreet,
      addressNo,
      addressZip: zip,
      addressCity: city,
      source: "Kooperationspartner",
      sourceLabel: recommendedBy,
      recommendedBy,
      advisorNo: process.env.ECORE_ADVISOR_NO || undefined,
      note,
    });
  } catch (err) {
    if (err instanceof EcoreError && err.fieldErrors) {
      // CRM-Validierungsfehler – generisch zurückmelden, ohne CRM-Interna.
      return {
        ok: false,
        formError:
          "Ihre Angaben konnten nicht übermittelt werden. Bitte prüfen Sie Name, E-Mail und Telefon.",
      };
    }
    console.error("[finsion-lead] CRM-Übermittlung fehlgeschlagen:", err);
    return {
      ok: false,
      formError:
        "Leider ist ein technischer Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    };
  }

  redirect("/danke");
}
