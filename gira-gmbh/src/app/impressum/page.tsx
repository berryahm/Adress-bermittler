import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { mailHref, phoneHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
};

// Mustertext – vor dem Livegang bitte mit den Angaben aus dem Handelsregister
// ergänzen und prüfen.
export default function ImpressumPage() {
  const { contact, legal } = site;

  return (
    <LegalPage title="Impressum">
      <h2>Kontaktadresse</h2>
      <p>
        {site.name}
        <br />
        {contact.street}
        <br />
        {contact.zip} {contact.city}
        <br />
        {contact.country}
      </p>
      <p>
        Telefon: <a href={phoneHref}>{contact.phone}</a>
        <br />
        E-Mail: <a href={mailHref}>{contact.email}</a>
      </p>

      <h2>Vertretungsberechtigte Person(en)</h2>
      <p>{legal.management}</p>

      <h2>Handelsregistereintrag</h2>
      <p>
        Eingetragener Firmenname: {site.name}
        <br />
        Registeramt: {legal.register}
        <br />
        Unternehmens-Identifikationsnummer (UID): {legal.uid}
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Wir prüfen die Inhalte dieser Website sorgfältig. Für die Richtigkeit, Vollständigkeit und Aktualität der
        Informationen übernehmen wir dennoch keine Gewähr. Haftungsansprüche wegen Schäden materieller oder
        immaterieller Art, die aus dem Zugriff auf die veröffentlichten Informationen, aus deren Nutzung oder
        Nichtnutzung oder durch technische Störungen entstanden sind, werden ausgeschlossen, soweit gesetzlich
        zulässig.
      </p>
      <p>
        Alle Angebote sind unverbindlich. Wir behalten uns vor, Teile der Seiten oder das gesamte Angebot ohne
        gesonderte Ankündigung zu verändern, zu ergänzen oder zu löschen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Verweise auf Websites Dritter liegen ausserhalb unseres Verantwortungsbereichs. Der Zugriff und die Nutzung
        solcher Websites erfolgen auf eigene Gefahr.
      </p>

      <h2>Urheberrechte</h2>
      <p>
        Texte, Fotos und Grafiken auf dieser Website gehören der {site.name} oder den ausdrücklich genannten
        Rechteinhabern. Für jede Verwendung ist vorab die schriftliche Zustimmung der Rechteinhaber einzuholen.
      </p>
    </LegalPage>
  );
}
