import type { ReactNode } from "react";

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
};

/** Abschnittskopf: Haarlinie, Index-Label links, Titel rechts. */
export function SectionHeading({ index, label, title, intro, id }: Props) {
  return (
    <div className="grid gap-y-6 border-t border-line pt-6 md:grid-cols-12 md:gap-x-6">
      <p className="eyebrow md:col-span-3 md:pt-1">
        {index} — {label}
      </p>
      <div className="md:col-span-9">
        <h2 id={id} className="h2 max-w-[18ch]">
          {title}
        </h2>
        {intro ? <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">{intro}</p> : null}
      </div>
    </div>
  );
}
