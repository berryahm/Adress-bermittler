import Image from "next/image";

import { SectionHeading } from "@/components/SectionHeading";
import { photos, type Photo } from "@/lib/projects";

function Stage({ photo, label, position }: { photo: Photo; label: string; position?: string }) {
  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden bg-paper-2">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1360px) 620px, (min-width: 768px) 48vw, calc(100vw - 40px)"
          className="object-cover"
          style={{ objectPosition: position }}
        />
        <span className="absolute top-3 left-3 bg-paper px-2.5 py-1.5 font-mono text-[0.6875rem] tracking-[0.12em] uppercase">
          {label}
        </span>
      </div>
      <figcaption className="eyebrow mt-3">{photo.caption}</figcaption>
    </figure>
  );
}

export function Focus() {
  return (
    <section id="fokus" aria-labelledby="fokus-title" className="container-x mt-28 md:mt-40">
      <SectionHeading index="03" label="Im Fokus" id="fokus-title" title="Vom Sichtbeton zur Mosaikfassade." />

      <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-6">
        <Stage photo={photos.benkenVorher} label="Vorher" position="30% 50%" />
        <Stage photo={photos.benkenNachher} label="Nachher" />
      </div>

      <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-6">
        <figure className="md:col-span-5 lg:col-span-4">
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
            <Image
              src={photos.benkenDetail.src}
              alt={photos.benkenDetail.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1360px) 410px, (min-width: 1024px) 32vw, (min-width: 768px) 40vw, calc(100vw - 40px)"
              className="object-cover"
            />
          </div>
          <figcaption className="eyebrow mt-3">{photos.benkenDetail.caption}</figcaption>
        </figure>

        <div className="md:col-span-7 md:self-end lg:col-span-7 lg:col-start-6">
          <p className="text-[clamp(1.5rem,1.1rem+1.4vw,2.25rem)] leading-[1.2] font-medium tracking-[-0.03em] text-balance">
            Die Sichtbetonfront von Garage und Eingang haben wir mit Mosaik in warmen Kupfertönen belegt.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-pretty text-muted">
            Untergrund vorbereiten, Fenster und Türen abdecken, jedes Mosaiknetz von Hand setzen, Ecken und Laibungen
            sauber ausbilden – und am Schluss alles gründlich reinigen. Das Ergebnis ist eine Fassade, die je nach
            Licht ihren Charakter ändert.
          </p>
          <dl className="mt-10 grid grid-cols-3 border-t border-line">
            <div className="py-5 pr-4">
              <dt className="eyebrow">Ort</dt>
              <dd className="mt-2">Benken ZH</dd>
            </div>
            <div className="border-l border-line px-4 py-5">
              <dt className="eyebrow">Untergrund</dt>
              <dd className="mt-2">Sichtbeton</dd>
            </div>
            <div className="border-l border-line py-5 pl-4">
              <dt className="eyebrow">Leistung</dt>
              <dd className="mt-2">Mosaik</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
