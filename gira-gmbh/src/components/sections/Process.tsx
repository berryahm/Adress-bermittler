import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    title: "Besichtigung",
    text: "Wir sehen uns das Objekt vor Ort an, nehmen Mass und beraten Sie zu Systemen, Materialien und Farben.",
  },
  {
    title: "Offerte",
    text: "Sie erhalten eine klare, nachvollziehbare Offerte – mit allen Positionen und ohne Überraschungen.",
  },
  {
    title: "Ausführung",
    text: "Abdecken, ausführen, aufräumen: Wir arbeiten sauber, abgestimmt mit den anderen Gewerken und termingerecht.",
  },
  {
    title: "Abnahme",
    text: "Zum Schluss nehmen wir die Arbeit gemeinsam mit Ihnen ab. Und sind auch danach für Sie erreichbar.",
  },
];

export function Process() {
  return (
    <section id="ablauf" aria-labelledby="ablauf-title" className="container-x mt-28 md:mt-40">
      <SectionHeading
        index="04"
        label="Ablauf"
        id="ablauf-title"
        title="Klar geregelt – vom ersten Termin bis zur Abnahme."
      />

      <ol className="mt-12 grid gap-x-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="border-t border-line pt-5 pb-9 md:pt-6 lg:pb-0">
            <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] md:mt-12">{step.title}</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-pretty text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
