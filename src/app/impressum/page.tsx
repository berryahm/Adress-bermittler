import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Impressum
          </h1>

          <section className="mt-8 space-y-2 text-base text-brand-900/80 leading-relaxed">
            <p>
              <strong>{COMPANY.name}</strong>
              <br />
              {COMPANY.street}
              <br />
              {COMPANY.zip} {COMPANY.city}
              <br />
              {COMPANY.country}
            </p>
            <p>
              E-Mail:{" "}
              <a className="underline" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
              <br />
              Telefon:{" "}
              <a
                className="underline"
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              >
                {COMPANY.phone}
              </a>
            </p>
          </section>

          <section className="mt-8 space-y-2 text-sm text-brand-900/70">
            <p>
              Verantwortlich für den Inhalt dieser Webseite ist die {COMPANY.name}.
            </p>
            <p>
              Alle Texte, Bilder und das Logo „Finsion“ sowie „Finsion GmbH“
              sind markenrechtlich bzw. urheberrechtlich geschützt. Eine
              Verwendung – insbesondere durch Dritte – bedarf der vorherigen
              schriftlichen Zustimmung der {COMPANY.name}.
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
