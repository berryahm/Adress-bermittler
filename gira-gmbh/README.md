# Gira GmbH – Website

Minimalistische One-Page-Website für die Gira GmbH (Gipser & Fassadenbau) mit
Leistungen, Referenzen inkl. Bildergalerie, Projekt im Fokus, Ablauf, Über uns,
Kontakt sowie Impressum und Datenschutz.

Technik: Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 ·
TypeScript. Alle Seiten werden statisch vorgerendert; es gibt keine Cookies und
kein Tracking.

> Dieses Projekt liegt im Unterordner `gira-gmbh/` und ist unabhängig von der
> Finsion-Landingpage im Hauptverzeichnis des Repositorys.

## Vor dem Livegang ausfüllen

Alle Firmenangaben stehen zentral in **`src/lib/site.ts`**:

- Adresse, Telefon, E-Mail (aktuell Platzhalter)
- vertretungsberechtigte Person, Handelsregister, UID (fürs Impressum)
- Einsatzgebiet und Slogan

Diese Werte erscheinen automatisch im Kontaktbereich, im Footer, im Impressum,
in der Datenschutzerklärung und in den strukturierten Daten für Google.

Impressum (`src/app/impressum/page.tsx`) und Datenschutzerklärung
(`src/app/datenschutz/page.tsx`) sind Mustertexte und sollten vor der
Veröffentlichung geprüft werden.

## Referenzen und Fotos

- Projekte, Bildtexte und Reihenfolge: `src/lib/projects.ts`
- Leistungen und deren Bilder: `src/lib/services.ts`
- Fotos: `src/assets/fotos/` (Zeitstempel und Adressen der Original-Fotos wurden
  entfernt, zwei gedrehte Aufnahmen aufgerichtet)

Neues Projekt hinzufügen: Foto nach `src/assets/fotos/` kopieren, in
`projects.ts` importieren und einen Eintrag in `projects` ergänzen. Die
Kantonsangabe im Hero und in der Kennzahl «Kantone» wird automatisch aus den
Referenzen berechnet.

## Lokal starten

```bash
cd gira-gmbh
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm run lint
```

## Deployment (Vercel)

1. In Vercel **Add New → Project** und dieses Repository importieren.
2. Bei **Root Directory** den Ordner `gira-gmbh` wählen.
3. Optional die Umgebungsvariable `NEXT_PUBLIC_SITE_URL` auf die finale Domain
   setzen (z. B. `https://www.ihre-domain.ch`). Ohne sie verwendet die Seite die
   Produktions-Domain von Vercel für Sitemap und Vorschaubilder.
4. Deploy – danach die eigene Domain im Vercel-Projekt verbinden.
