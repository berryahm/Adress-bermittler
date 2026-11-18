import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { mailHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  alternates: { canonical: "/datenschutz" },
};

// Mustertext auf Basis des Schweizer Datenschutzgesetzes (DSG). Vor dem
// Livegang prüfen – insbesondere Hosting-Anbieter und allfällige weitere
// Dienste (z. B. Kontaktformular, Statistik), falls solche ergänzt werden.
export default function DatenschutzPage() {
  const { contact } = site;

  return (
    <LegalPage title="Datenschutz">
      <p>
        Mit dieser Datenschutzerklärung informieren wir darüber, welche Personendaten wir im Zusammenhang mit dieser
        Website und unseren Leistungen bearbeiten. Wir halten uns dabei an das Schweizer Datenschutzgesetz (DSG).
      </p>

      <h2>Verantwortliche Stelle</h2>
      <p>
        {site.name}
        <br />
        {contact.street}
        <br />
        {contact.zip} {contact.city}
        <br />
        E-Mail: <a href={mailHref}>{contact.email}</a>
      </p>

      <h2>Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail oder Telefon kontaktieren, bearbeiten wir die Angaben, die Sie uns mitteilen (z. B.
        Name, Kontaktdaten, Adresse des Objekts und Inhalt Ihrer Anfrage). Wir verwenden diese Daten ausschliesslich,
        um Ihre Anfrage zu beantworten, eine Offerte zu erstellen und einen allfälligen Auftrag abzuwickeln.
      </p>

      <h2>Besuch der Website</h2>
      <p>
        Diese Website wird bei {site.hosting} betrieben. Beim Aufruf der Seiten werden technisch notwendige Daten
        wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite sowie Browser- und Geräteinformationen in Server-Logfiles
        erfasst. Diese Daten dienen dem sicheren und stabilen Betrieb der Website und werden nicht mit anderen Daten
        zusammengeführt.
      </p>
      <p>
        Dabei können Daten in die USA bekanntgegeben werden. Wir stützen uns auf die vom Anbieter vorgesehenen
        Garantien für einen angemessenen Datenschutz (insbesondere Standardvertragsklauseln bzw. die Zertifizierung
        nach dem Swiss-U.S. Data Privacy Framework).
      </p>

      <h2>Keine Cookies und kein Tracking</h2>
      <p>
        Diese Website verwendet keine Cookies zu Analyse- oder Werbezwecken und setzt keine Tracking-Dienste ein.
        Schriften werden von unserem eigenen Server ausgeliefert; dabei werden keine Daten an Dritte übermittelt.
      </p>

      <h2>Aufbewahrung</h2>
      <p>
        Wir bewahren Personendaten nur so lange auf, wie es für den jeweiligen Zweck erforderlich ist oder wir
        gesetzlich dazu verpflichtet sind (z. B. Aufbewahrungspflichten für Geschäftsunterlagen).
      </p>

      <h2>Ihre Rechte</h2>
      <p>
        Sie können jederzeit Auskunft über die zu Ihrer Person bearbeiteten Daten verlangen sowie deren Berichtigung
        oder Löschung beantragen und einer Bearbeitung widersprechen, soweit keine gesetzlichen Pflichten
        entgegenstehen. Wenden Sie sich dazu an <a href={mailHref}>{contact.email}</a>. Zudem können Sie sich beim
        Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) beschweren.
      </p>

      <h2>Änderungen</h2>
      <p>
        Wir können diese Datenschutzerklärung jederzeit anpassen. Es gilt die jeweils auf dieser Website
        veröffentlichte Fassung.
      </p>
      <p>Stand: November 2026</p>
    </LegalPage>
  );
}
