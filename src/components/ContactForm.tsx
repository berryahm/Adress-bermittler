"use client";

import { useActionState } from "react";
import {
  submitContactRequest,
  type ContactFormState,
} from "@/app/actions";
import { INSURANCE_CATEGORIES, RESPONSE_DAYS } from "@/lib/constants";

const initialState: ContactFormState = { ok: false };

type Props = {
  referrer?: string;
};

export function ContactForm({ referrer }: Props) {
  const [state, formAction, pending] = useActionState(
    submitContactRequest,
    initialState,
  );
  const errs = state.fieldErrors ?? {};

  return (
    <form
      action={formAction}
      noValidate
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <input type="hidden" name="ref" value={referrer ?? ""} />

      <div className="sm:col-span-2">
        <label
          htmlFor="gender"
          className="block text-sm font-semibold text-brand-900"
        >
          Anrede<span className="text-brand-600"> *</span>
        </label>
        <select
          id="gender"
          name="gender"
          required
          defaultValue=""
          aria-invalid={errs.gender ? true : undefined}
          className={`mt-1 block h-11 w-full rounded-md border bg-white px-3 text-base text-brand-900 focus:border-brand-700 ${
            errs.gender ? "border-red-500" : "border-brand-100"
          }`}
        >
          <option value="" disabled>
            Bitte wählen …
          </option>
          <option value="männlich">Herr</option>
          <option value="weiblich">Frau</option>
        </select>
        {errs.gender && (
          <p className="mt-1 text-sm text-red-700" role="alert">
            {errs.gender}
          </p>
        )}
      </div>

      <Field
        id="firstName"
        label="Vorname"
        autoComplete="given-name"
        required
        error={errs.firstName}
      />
      <Field
        id="lastName"
        label="Nachname"
        autoComplete="family-name"
        required
        error={errs.lastName}
      />

      <Field
        id="street"
        label="Strasse / Nr."
        autoComplete="street-address"
        required
        className="sm:col-span-2"
        error={errs.street}
      />
      <Field
        id="zip"
        label="PLZ"
        autoComplete="postal-code"
        inputMode="numeric"
        pattern="\d{4}"
        maxLength={4}
        required
        error={errs.zip}
      />
      <Field
        id="city"
        label="Ort"
        autoComplete="address-level2"
        required
        error={errs.city}
      />

      <Field
        id="phone"
        label="Telefon"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        placeholder="z. B. 079 123 45 67"
        required
        error={errs.phone}
      />
      <Field
        id="email"
        label="E-Mail"
        type="email"
        autoComplete="email"
        inputMode="email"
        required
        error={errs.email}
      />

      <Field
        id="birthDate"
        label="Geburtsdatum"
        type="date"
        autoComplete="bday"
        required
        hint="Zur Identifikation – wir behandeln Ihre Daten vertraulich."
        error={errs.birthDate}
      />

      <fieldset className="sm:col-span-2 mt-2">
        <legend className="text-sm font-semibold text-brand-900">
          Wofür interessieren Sie sich?
          <span className="text-brand-600"> *</span>
        </legend>
        <p className="mt-1 text-xs text-brand-900/60">
          Mehrfachauswahl möglich.
        </p>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {INSURANCE_CATEGORIES.map((cat) => (
            <label
              key={cat.id}
              className="flex items-start gap-3 rounded-md border border-brand-100 bg-white px-3 py-2.5 text-sm hover:border-brand-600/50 hover:bg-brand-50/60 cursor-pointer"
            >
              <input
                type="checkbox"
                name="categories"
                value={cat.id}
                className="mt-0.5 h-4 w-4 accent-brand-700"
              />
              <span className="text-brand-900">{cat.label}</span>
            </label>
          ))}
        </div>
        {errs.categories && (
          <p className="mt-2 text-sm text-red-700" role="alert">
            {errs.categories}
          </p>
        )}
      </fieldset>

      <div className="sm:col-span-2 mt-2">
        <label className="flex items-start gap-3 text-sm text-brand-900">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 h-4 w-4 accent-brand-700"
            required
          />
          <span>
            Ja, ich wünsche von der Finsion GmbH innert {RESPONSE_DAYS} Kalender­tagen
            telefonisch oder per E-Mail kontaktiert zu werden. Mit dem Absenden
            stimme ich der Bearbeitung meiner Daten gemäss{" "}
            <a
              href="/datenschutz"
              className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-900"
            >
              Datenschutzerklärung
            </a>{" "}
            zu. Die Einwilligung kann jederzeit widerrufen werden.
          </span>
        </label>
        {errs.consent && (
          <p className="mt-2 text-sm text-red-700" role="alert">
            {errs.consent}
          </p>
        )}
      </div>

      {state.formError && (
        <p
          className="sm:col-span-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-800"
          role="alert"
        >
          {state.formError}
        </p>
      )}

      <div className="sm:col-span-2 mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 w-full items-center justify-center rounded-md bg-brand-900 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Wird gesendet …" : "Beratung anfordern"}
        </button>
        <p className="text-xs text-brand-900/60">
          Kostenlos und unverbindlich. Wir melden uns innert {RESPONSE_DAYS} Tagen.
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string;
  pattern?: string;
  maxLength?: number;
  hint?: string;
  error?: string;
  className?: string;
};

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
  inputMode,
  placeholder,
  pattern,
  maxLength,
  hint,
  error,
  className,
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-brand-900"
      >
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        pattern={pattern}
        maxLength={maxLength}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        className={`mt-1 block h-11 w-full rounded-md border bg-white px-3 text-base text-brand-900 placeholder:text-brand-900/40 focus:border-brand-700 ${
          error ? "border-red-500" : "border-brand-100"
        }`}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-brand-900/60">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 text-sm text-red-700"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
