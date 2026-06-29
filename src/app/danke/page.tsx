import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { RESPONSE_DAYS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vielen Dank für Ihre Anfrage",
  robots: { index: false, follow: false },
};

export default function DankePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
          <div className="rounded-2xl border border-brand-100 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
              Vielen Dank!
            </h1>
            <p className="mt-4 text-base text-brand-900/70">
              Wir haben Ihre Anfrage erhalten. Eine Beraterin oder ein Berater
              der Finsion GmbH meldet sich innert {RESPONSE_DAYS} Kalender­tagen
              persönlich bei Ihnen.
            </p>
            <p className="mt-2 text-sm text-brand-900/60">
              Sollte Ihre Anfrage dringend sein, erreichen Sie uns telefonisch
              oder per E-Mail – die Kontaktdaten finden Sie im Fuss dieser
              Seite.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center rounded-md bg-brand-900 px-6 text-sm font-semibold text-white hover:bg-brand-800"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
