import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="container-x pt-14 pb-28 md:pt-20 md:pb-40">
      <div className="grid gap-y-6 border-t border-line pt-6 md:grid-cols-12 md:gap-x-6">
        <p className="eyebrow md:col-span-3 md:pt-1">Rechtliches</p>
        <div className="md:col-span-9 lg:col-span-7">
          <h1 className="h2">{title}</h1>
          <div className="prose-legal mt-10">{children}</div>
        </div>
      </div>
    </article>
  );
}
