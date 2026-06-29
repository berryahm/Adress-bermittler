import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-[0.18em] text-brand-900"
        >
          FINSION
        </Link>
        <a
          href="#kontakt"
          className="inline-flex h-10 items-center rounded-md bg-brand-900 px-4 text-sm font-semibold text-white hover:bg-brand-800"
        >
          Beratung anfordern
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-brand-100 bg-brand-50/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold tracking-[0.18em] text-brand-900">
            FINSION
          </p>
          <p className="mt-3 text-sm text-brand-900/70">
            {COMPANY.name}
            <br />
            {COMPANY.street}
            <br />
            {COMPANY.zip} {COMPANY.city}
            <br />
            {COMPANY.country}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-900">Kontakt</p>
          <ul className="mt-3 space-y-1 text-sm text-brand-900/70">
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover:text-brand-900"
              >
                {COMPANY.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="hover:text-brand-900"
              >
                {COMPANY.phone}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-900">Rechtliches</p>
          <ul className="mt-3 space-y-1 text-sm text-brand-900/70">
            <li>
              <Link href="/datenschutz" className="hover:text-brand-900">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="hover:text-brand-900">
                Impressum
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-100">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-brand-900/60 sm:px-6">
          © {new Date().getFullYear()} {COMPANY.name}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
