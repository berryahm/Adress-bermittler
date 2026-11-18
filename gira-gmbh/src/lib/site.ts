/**
 * Zentrale Firmenangaben der Gira GmbH.
 *
 * TODO vor dem Livegang: Die mit «Platzhalter» markierten Werte durch die
 * echten Angaben ersetzen. Sie erscheinen im Kontaktbereich, im Footer, im
 * Impressum, in der Datenschutzerklärung und in den Daten für Suchmaschinen.
 */
export const site = {
  name: "Gira GmbH",
  brand: "Gira",
  tagline: "Gipser & Fassadenbau",
  region: "Deutschschweiz",
  description:
    "Aussenwärmedämmung, Fassadenputz, Sockelputz, Innenputz und Mosaik – sauber ausgeführt von der Gira GmbH. Für Neubauten und Sanierungen in der Deutschschweiz.",

  contact: {
    street: "Musterstrasse 1", // Platzhalter
    zip: "0000", // Platzhalter
    city: "Musterort", // Platzhalter
    country: "Schweiz",
    phone: "+41 00 000 00 00", // Platzhalter
    email: "info@ihre-domain.ch", // Platzhalter
  },

  legal: {
    management: "Vorname Nachname", // Platzhalter: vertretungsberechtigte Person(en)
    register: "Handelsregister des Kantons …", // Platzhalter
    uid: "CHE-000.000.000", // Platzhalter
  },

  /** Hosting-Anbieter, wird in der Datenschutzerklärung genannt. */
  hosting: "Vercel Inc., USA",
} as const;

export const navigation = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#ueber-uns", label: "Über uns" },
] as const;

export const phoneHref = `tel:${site.contact.phone.replace(/[^\d+]/g, "")}`;
export const mailHref = `mailto:${site.contact.email}`;

/** E-Mail mit vorausgefüllter Offertanfrage. */
export const offerMailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  "Offertanfrage",
)}&body=${encodeURIComponent(
  [
    "Guten Tag",
    "",
    "Ich interessiere mich für eine Offerte.",
    "",
    "Objekt / Adresse:",
    "Gewünschte Arbeiten:",
    "Gewünschter Zeitraum:",
    "Telefon für Rückfragen:",
    "",
    "Freundliche Grüsse",
  ].join("\r\n"),
)}`;

/** Basis-URL für Metadaten, Sitemap und robots.txt. */
export function siteUrl(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }
  return new URL("http://localhost:3000");
}
