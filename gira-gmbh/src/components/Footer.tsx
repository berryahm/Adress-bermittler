import Link from "next/link";

import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-x">
        <div className="flex flex-col gap-8 border-t border-white/12 py-10 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label={`${site.name} – zur Startseite`} className="[--logo-fg:var(--color-ink)]">
            <Logo />
          </Link>
          <p className="text-sm text-paper/60">
            © {new Date().getFullYear()} {site.name} · {site.tagline}
          </p>
          <nav aria-label="Rechtliches" className="flex gap-6 text-sm text-paper/80">
            <Link href="/impressum" className="link hover:text-paper">
              Impressum
            </Link>
            <Link href="/datenschutz" className="link hover:text-paper">
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
