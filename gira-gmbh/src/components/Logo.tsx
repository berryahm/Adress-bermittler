/**
 * Wortmarke «Gira GmbH» mit G-Monogramm.
 * Das Monogramm übernimmt die Textfarbe (currentColor) für die Fläche;
 * die Farbe des «G» lässt sich über die CSS-Variable --logo-fg steuern.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="size-7" />
      <span className="text-[1.1875rem] leading-none font-semibold tracking-[-0.03em]">Gira</span>
      <span className="font-mono text-[0.625rem] leading-none tracking-[0.18em] uppercase opacity-60">
        GmbH
      </span>
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="7" fill="currentColor" />
      <path
        d="M21.3 10.7A7.5 7.5 0 1 0 23.5 16h-7"
        fill="none"
        stroke="var(--logo-fg, #f4f3ef)"
        strokeWidth="3.2"
      />
    </svg>
  );
}
