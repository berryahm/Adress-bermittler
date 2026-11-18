import Link from "next/link";

import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="container-x pt-14 pb-28 md:pt-20 md:pb-40">
      <div className="border-t border-line pt-6">
        <p className="eyebrow">Fehler 404</p>
        <h1 className="h2 mt-8 max-w-[16ch]">Diese Seite gibt es leider nicht.</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
          Vielleicht wurde sie verschoben. Auf der Startseite finden Sie alle Leistungen und Referenzen.
        </p>
        <Link href="/" className="btn btn-dark mt-10">
          Zur Startseite
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
