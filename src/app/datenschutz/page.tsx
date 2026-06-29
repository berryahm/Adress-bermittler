import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { COMPANY, RESPONSE_DAYS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-3 text-sm text-brand-900/60">
            Stand: {new Date().toLocaleDateString("de-CH")}
          </p>

          <Section title="1. Verantwortliche Stelle">
            <p>
              Verantwortlich für die Bearbeitung Ihrer Personendaten im Sinne
              des Schweizer Datenschutzgesetzes (DSG) ist:
            </p>
            <p className="mt-3">
              <strong>{COMPANY.name}</strong>
              <br />
              {COMPANY.street}
              <br />
              {COMPANY.zip} {COMPANY.city}
              <br />
              {COMPANY.country}
              <br />
              E-Mail:{" "}
              <a className="underline" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
            </p>
          </Section>

          <Section title="2. Welche Daten werden über das Kontaktformular bearbeitet?">
            <p>
              Über das Kontaktformular auf dieser Landingpage bearbeiten wir
              ausschliesslich folgende Personendaten:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Kontaktangaben (Vorname, Nachname, Adresse, Telefon, E-Mail)</li>
              <li>Geburtsdatum (zur eindeutigen Identifikation)</li>
              <li>
                Versicherungsbereich(e), zu dem/denen Sie beraten werden möchten
              </li>
              <li>
                Ihre Einwilligung, von uns kontaktiert werden zu wollen
              </li>
              <li>
                Optional: eine Partner-/Adressübermittler-Kennung (Empfehlungs­quelle),
                sofern Sie über einen Partner-Link oder QR-Code zu uns gelangt
                sind
              </li>
            </ul>
          </Section>

          <Section title="3. Zweck der Bearbeitung">
            <p>
              Wir verwenden Ihre Daten ausschliesslich dazu, Sie innert{" "}
              {RESPONSE_DAYS} Kalender­tagen für eine unverbindliche
              Versicherungs­beratung zu kontaktieren sowie zur Durchführung und
              Nachbearbeitung dieser Beratung.
            </p>
          </Section>

          <Section title="4. Weitergabe an Dritte">
            <p>
              Eine Weitergabe an Dritte erfolgt grundsätzlich nicht. Eine
              Weitergabe an Versicherungs­gesell­schaften erfolgt erst dann,
              wenn Sie im Rahmen der Beratung den Abschluss eines konkreten
              Vertrags wünschen, und nur im hierfür erforderlichen Umfang.
            </p>
            <p className="mt-3">
              Adressübermittler oder Partner, über deren Empfehlung Sie zu uns
              gelangt sind, erhalten keine Inhalte Ihrer Anfrage und keine
              Kontaktdaten.
            </p>
          </Section>

          <Section title="5. Aufbewahrungsdauer">
            <p>
              Wir bewahren Ihre Daten so lange auf, wie es für die
              beschriebenen Zwecke erforderlich ist, und solange gesetzliche
              Aufbewahrungs­pflichten dies verlangen. Anschliessend werden Ihre
              Daten gelöscht oder anonymisiert.
            </p>
          </Section>

          <Section title="6. Ihre Rechte">
            <p>
              Sie haben das Recht auf Auskunft über die zu Ihrer Person
              bearbeiteten Daten, auf Berichtigung unrichtiger Daten sowie –
              unter den gesetzlichen Voraussetzungen – auf Löschung,
              Einschränkung und Widerspruch gegen die Bearbeitung. Eine
              erteilte Einwilligung können Sie jederzeit mit Wirkung für die
              Zukunft widerrufen.
            </p>
            <p className="mt-3">
              Für die Wahrnehmung Ihrer Rechte genügt eine formlose Nachricht
              an{" "}
              <a className="underline" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
              .
            </p>
          </Section>

          <Section title="7. Datensicherheit">
            <p>
              Die Übertragung der Formular­daten erfolgt verschlüsselt (TLS).
              Wir treffen angemessene technische und organisatorische
              Massnahmen, um Ihre Daten gegen Verlust, Manipulation und
              unberechtigten Zugriff zu schützen.
            </p>
          </Section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-brand-900">{title}</h2>
      <div className="mt-3 space-y-2 text-base text-brand-900/80 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
