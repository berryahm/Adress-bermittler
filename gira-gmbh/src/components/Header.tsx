"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ArrowRight } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { mailHref, navigation, phoneHref, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 48rem)").matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="header-bar sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
        <Link href="/" onClick={close} aria-label={`${site.name} – zur Startseite`} className="text-ink">
          <Logo />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="link text-[0.9375rem] text-ink-soft hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/#kontakt" className="btn btn-dark hidden h-10 px-5 text-sm md:inline-flex">
          Offerte anfragen
          <ArrowRight className="size-3.5" />
        </Link>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 items-center gap-2 px-2 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Schliessen" : "Menü"}</span>
          <span aria-hidden="true" className="relative block h-2.5 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ${
                open ? "top-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper md:hidden"
      >
        <nav aria-label="Mobile Navigation" className="container-x flex flex-col pt-4">
          {[...navigation, { href: "/#kontakt", label: "Kontakt" }].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="flex items-baseline justify-between border-b border-line py-5 text-[2rem] leading-none font-medium tracking-[-0.03em]"
            >
              {item.label}
              <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
            </Link>
          ))}
        </nav>
        <div className="container-x mt-10 flex flex-col gap-3 pb-10">
          <a href={phoneHref} className="btn btn-dark">
            {site.contact.phone}
          </a>
          <a href={mailHref} className="btn btn-ghost">
            {site.contact.email}
          </a>
        </div>
      </div>
    </header>
  );
}
