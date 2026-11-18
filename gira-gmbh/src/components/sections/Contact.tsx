import { ArrowRight } from "@/components/icons";
import { mailHref, offerMailHref, phoneHref, site } from "@/lib/site";

export function Contact() {
  const { contact } = site;

  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="mt-28 bg-ink text-paper md:mt-40">
      <div className="container-x pt-24 pb-20 md:pt-32 md:pb-28">
        <p className="eyebrow text-paper/55">06 — Kontakt</p>
        <h2
          id="kontakt-title"
          className="mt-8 text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.94] font-medium tracking-[-0.05em]"
        >
          Planen Sie
          <br />
          ein Projekt?
        </h2>

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-6">
            <p className="max-w-md text-lg leading-relaxed text-pretty text-paper/75">
              Erzählen Sie uns davon. Wir melden uns rasch, sehen uns das Objekt an und erstellen Ihnen eine
              unverbindliche Offerte.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={offerMailHref} className="btn btn-light">
                Offerte anfragen
                <ArrowRight />
              </a>
              <a href={phoneHref} className="btn btn-outline-light">
                Anrufen
              </a>
            </div>
          </div>

          <dl className="border-t border-white/15 md:col-span-6 lg:col-span-5 lg:col-start-8">
            <div className="grid gap-1 border-b border-white/15 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
              <dt className="eyebrow pt-1 text-paper/55">Telefon</dt>
              <dd className="text-lg">
                <a href={phoneHref} className="link">
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div className="grid gap-1 border-b border-white/15 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
              <dt className="eyebrow pt-1 text-paper/55">E-Mail</dt>
              <dd className="text-lg break-all">
                <a href={mailHref} className="link">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className="grid gap-1 border-b border-white/15 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
              <dt className="eyebrow pt-1 text-paper/55">Adresse</dt>
              <dd className="text-lg leading-snug not-italic">
                {site.name}
                <br />
                {contact.street}
                <br />
                {contact.zip} {contact.city}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
