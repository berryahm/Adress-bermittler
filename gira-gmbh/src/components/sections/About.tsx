import Image from "next/image";

import team from "@/assets/fotos/team.jpg";
import { site } from "@/lib/site";

const values = [
  { label: "Sauber", text: "Abdecken, schützen, aufräumen – jeden Tag." },
  { label: "Verlässlich", text: "Klare Offerten und Termine, die halten." },
  { label: "Persönlich", text: "Ein fester Ansprechpartner für Ihr Projekt." },
];

export function About() {
  return (
    <section id="ueber-uns" aria-labelledby="ueber-uns-title" className="container-x mt-28 md:mt-40">
      <div className="grid gap-12 border-t border-line pt-6 lg:grid-cols-12 lg:gap-6">
        <figure className="order-2 lg:order-1 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
            <Image
              src={team}
              alt="Mitarbeitende verputzen die Fassade eines mehrgeschossigen Neubaus"
              fill
              placeholder="blur"
              sizes="(min-width: 1360px) 520px, (min-width: 1024px) 38vw, calc(100vw - 40px)"
              className="object-cover object-[50%_65%]"
            />
          </div>
          <figcaption className="eyebrow mt-3">Unser Team im Einsatz</figcaption>
        </figure>

        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <p className="eyebrow">05 — Über uns</p>
          <h2 id="ueber-uns-title" className="h2 mt-6 max-w-[14ch] md:mt-8">
            Ein Team, das anpackt.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft">
            Die {site.name} steht für solides Gipser- und Fassadenhandwerk. Wir arbeiten für Bauherrschaften,
            Architekturbüros und Generalunternehmungen – beim Neubau ebenso wie bei der Sanierung.
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-pretty text-muted">
            Unser Anspruch ist einfach: saubere Arbeit, verlässliche Termine und eine Baustelle, die wir so verlassen,
            wie wir sie selbst gerne antreffen würden.
          </p>

          <ul className="mt-10 border-t border-line md:mt-14">
            {values.map((value) => (
              <li
                key={value.label}
                className="grid gap-1 border-b border-line py-5 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-6"
              >
                <span className="eyebrow">{value.label}</span>
                <span className="text-lg tracking-[-0.01em]">{value.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
