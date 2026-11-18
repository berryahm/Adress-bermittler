import { joinGerman, referenceCantons } from "@/lib/projects";

const facts = [
  {
    label: "Einsatzgebiet",
    value: `${referenceCantons.length} Kantone`,
    text: `Referenzen in ${joinGerman(referenceCantons)}`,
  },
  {
    label: "Leistungen",
    value: "Aussen & innen",
    text: "Von der Dämmung bis zum Innenputz",
  },
  {
    label: "Ansprechpartner",
    value: "Einer für alles",
    text: "Von der Besichtigung bis zur Abnahme",
  },
  {
    label: "Arbeitsweise",
    value: "Sauber",
    text: "Wir decken ab, bevor wir anfangen",
  },
];

export function Facts() {
  return (
    <section aria-label="Auf einen Blick" className="container-x mt-20 md:mt-28">
      <dl className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="border-b border-line py-7 sm:odd:pr-6 sm:even:border-l sm:even:pl-6 lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0"
          >
            <dt className="eyebrow">{fact.label}</dt>
            <dd className="mt-5 text-[1.75rem] leading-tight font-medium tracking-[-0.03em]">{fact.value}</dd>
            <dd className="mt-2 text-[0.9375rem] text-muted">{fact.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
