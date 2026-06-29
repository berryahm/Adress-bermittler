/**
 * Versicherungsbereiche, die der Adressübermittler-Flow gemäss
 * "Adressvermittlung (abschliessend)" abdeckt.
 *
 * Die Auswahl entspricht den Versicherungs-Sparten aus dem
 * Provisionsreglement (Kap. 2 Ziff. 7) sowie den im Stammdatenblatt
 * üblichen Sparten (MF, Hausrat).
 */
export const INSURANCE_CATEGORIES = [
  { id: "okp", label: "Grundversicherung (Krankenkasse / OKP)" },
  { id: "vvg", label: "Zusatzversicherung (VVG)" },
  { id: "leben", label: "Lebensversicherung / Vorsorge" },
  { id: "rechtsschutz", label: "Rechtsschutzversicherung" },
  { id: "mf", label: "Motorfahrzeug-Versicherung" },
  { id: "hausrat", label: "Hausrat- & Privathaftpflicht" },
  { id: "sach", label: "Sach- und Vermögensversicherung" },
  { id: "andere", label: "Andere / noch unklar" },
] as const;

export type InsuranceCategoryId = (typeof INSURANCE_CATEGORIES)[number]["id"];

export const COMPANY = {
  name: "Finsion GmbH",
  street: "Im Schossacher 12",
  zip: "8600",
  city: "Dübendorf",
  country: "Schweiz",
  email: "info@finsion.ch",
  phone: "+41 44 000 00 00",
  website: "https://finsion.ch",
} as const;

/** Maximale Reaktionszeit gemäss Vereinbarung Ziff. 4.1 */
export const RESPONSE_DAYS = 7;
