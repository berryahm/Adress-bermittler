import { ContactForm } from "@/components/ContactForm";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { RESPONSE_DAYS } from "@/lib/constants";

type SearchParams = Promise<{ ref?: string | string[] }>;

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const rawRef = Array.isArray(params.ref) ? params.ref[0] : params.ref;
  const referrer = (rawRef ?? "").trim().slice(0, 64) || undefined;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Steps />
        <Coverage />
        <ContactSection referrer={referrer} />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div className="absolute inset-0 -z-0 opacity-30 [background:radial-gradient(60%_60%_at_80%_0%,var(--color-brand-600)_0%,transparent_60%),radial-gradient(40%_40%_at_0%_100%,var(--color-brand-700)_0%,transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-3 inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90 uppercase">
            Kostenlos & unverbindlich
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Ihre persönliche
            <br />
            <span className="text-white/90">Versicherungsberatung</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            Hinterlassen Sie uns kurz Ihre Kontaktdaten – eine erfahrene
            Beraterin oder ein erfahrener Berater von Finsion meldet sich innert{" "}
            {RESPONSE_DAYS} Kalender­tagen bei Ihnen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-base font-semibold text-brand-900 shadow-sm transition hover:bg-brand-50"
            >
              Jetzt Kontaktdaten hinterlegen
            </a>
            <a
              href="#so-funktionierts"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 px-6 text-base font-semibold text-white hover:bg-white/10"
            >
              So funktionierts
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-2 text-sm text-white/80 sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <Dot /> Rückmeldung in {RESPONSE_DAYS} Tagen
            </li>
            <li className="flex items-center gap-2">
              <Dot /> Schweizweit
            </li>
            <li className="flex items-center gap-2">
              <Dot /> 100 % unverbindlich
            </li>
          </ul>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute inset-0 rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur" />
          <div className="relative grid h-full place-items-center p-8">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-brand-900 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                Was Sie erwartet
              </p>
              <h3 className="mt-2 text-xl font-bold">
                Ein Anruf. Ein Termin. Klarheit.
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <Check>Bedarfsanalyse zu Ihrer Lebenssituation</Check>
                <Check>Vergleich verschiedener Anbieter</Check>
                <Check>Konkrete, schriftliche Empfehlung</Check>
                <Check>Auf Wunsch Unterstützung beim Wechsel</Check>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      title: "Persönlich",
      text: "Eine feste Ansprech­person, die Ihre Situation versteht und Sie langfristig begleitet.",
    },
    {
      title: "Unabhängig",
      text: "Wir vergleichen Lösungen verschiedener Versicherer und empfehlen, was wirklich zu Ihnen passt.",
    },
    {
      title: "Transparent",
      text: "Klare Empfehlungen, verständlich aufbereitet – ohne Kleingedrucktes und ohne Druck.",
    },
    {
      title: `Schnell – ${RESPONSE_DAYS} Tage`,
      text: `Nach Ihrer Anfrage melden wir uns innert ${RESPONSE_DAYS} Kalender­tagen mit einem Terminvorschlag.`,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        Warum Finsion?
      </h2>
      <p className="mt-3 max-w-2xl text-base text-brand-900/70">
        Versicherungen sollen Ihr Leben einfacher machen – nicht komplizierter.
        Wir nehmen uns Zeit, hören zu und finden eine Lösung, die wirklich passt.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-xl border border-brand-100 bg-white p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold text-brand-900">
              {it.title}
            </h3>
            <p className="mt-2 text-sm text-brand-900/70">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    {
      n: "1",
      title: "Formular ausfüllen",
      text: "Nur ein paar Angaben – Name, Kontaktdaten und worum es geht.",
    },
    {
      n: "2",
      title: `Wir melden uns innert ${RESPONSE_DAYS} Tagen`,
      text: "Per Telefon oder E-Mail – ganz wie es Ihnen lieber ist.",
    },
    {
      n: "3",
      title: "Persönliche Beratung",
      text: "Kostenlos, unverbindlich und auf Ihre Situation zugeschnitten.",
    },
  ];

  return (
    <section
      id="so-funktionierts"
      className="bg-brand-50/60 border-y border-brand-100"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
          So funktionierts
        </h2>
        <p className="mt-3 max-w-2xl text-base text-brand-900/70">
          In drei einfachen Schritten zu Ihrer persönlichen Beratung.
        </p>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-xl bg-white p-6 shadow-sm ring-1 ring-brand-100"
            >
              <span className="absolute -top-4 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-900 text-base font-bold text-white shadow">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-brand-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-brand-900/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Coverage() {
  const items = [
    "Grundversicherung (OKP)",
    "Zusatzversicherung (VVG)",
    "Lebensversicherung & Vorsorge",
    "Rechtsschutz",
    "Motorfahrzeug",
    "Hausrat & Privathaftpflicht",
    "Sach- und Vermögensversicherung",
    "Reiseversicherung",
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        Wir beraten Sie zu allen Versicherungsbereichen
      </h2>
      <p className="mt-3 max-w-2xl text-base text-brand-900/70">
        Vom Krankenkassen­wechsel bis zur Lebensversicherung – wir haben den
        Überblick.
      </p>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((label) => (
          <li
            key={label}
            className="flex items-center gap-3 rounded-lg border border-brand-100 bg-white px-4 py-3 text-sm font-medium text-brand-900"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-600" />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContactSection({ referrer }: { referrer?: string }) {
  return (
    <section id="kontakt" className="bg-brand-50/60 border-t border-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Beratung anfordern
          </h2>
          <p className="mt-3 text-base text-brand-900/70">
            Füllen Sie das Formular aus – wir melden uns innert {RESPONSE_DAYS}{" "}
            Kalender­tagen mit einem Terminvorschlag bei Ihnen.
          </p>
          <div className="mt-8 rounded-xl border border-brand-100 bg-white p-6 text-sm text-brand-900/80">
            <p className="font-semibold text-brand-900">Datenschutz</p>
            <p className="mt-2">
              Ihre Daten werden ausschliesslich von der Finsion GmbH zur
              Kontaktaufnahme im Rahmen einer Versicherungs­beratung verwendet
              und nicht an Dritte weitergegeben.
            </p>
            <p className="mt-2">
              Mehr dazu in unserer{" "}
              <a
                href="/datenschutz"
                className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-900"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
            {referrer && (
              <p className="mt-3 text-xs text-brand-900/60">
                Empfohlen durch Partner-Nr.{" "}
                <span className="font-mono">{referrer}</span>
              </p>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
          <ContactForm referrer={referrer} />
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <span
      aria-hidden
      className="inline-block h-1.5 w-1.5 rounded-full bg-white/80"
    />
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="mt-0.5 h-4 w-4 flex-none text-brand-600"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
          clipRule="evenodd"
        />
      </svg>
      <span>{children}</span>
    </li>
  );
}
