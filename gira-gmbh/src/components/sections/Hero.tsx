import Image from "next/image";

import { ArrowRight } from "@/components/icons";
import { photos, referenceCantons } from "@/lib/projects";
import { site } from "@/lib/site";

export function Hero() {
  const hero = photos.muenchensteinDaemmung;

  return (
    <section aria-labelledby="hero-title" className="container-x pt-8 md:pt-14">
      <div className="eyebrow flex items-center justify-between border-b border-line pb-4">
        <span>{site.tagline}</span>
        <span className="hidden sm:inline">Referenzen in {referenceCantons.join(" · ")}</span>
      </div>

      <h1
        id="hero-title"
        className="mt-10 text-[clamp(2.6rem,13.5vw,8.25rem)] leading-[0.94] font-medium tracking-[-0.05em] md:mt-14"
      >
        <span className="hero-line">
          <span>Handwerk,</span>
        </span>
        <span className="hero-line">
          <span>das man sieht.</span>
        </span>
      </h1>

      <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end md:gap-6">
        <p className="max-w-[34rem] text-lg leading-relaxed text-pretty text-ink-soft md:col-span-7 lg:col-span-6">
          Aussenwärmedämmung, Fassadenputz, Innenputz und Mosaik – präzise ausgeführt und sauber hinterlassen.
          Für Neubauten und Sanierungen in der ganzen {site.region}.
        </p>
        <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end lg:col-span-6">
          <a href="#kontakt" className="btn btn-dark">
            Offerte anfragen
            <ArrowRight />
          </a>
          <a href="#referenzen" className="btn btn-ghost">
            Referenzen ansehen
          </a>
        </div>
      </div>

      <figure className="mt-12 md:mt-16">
        <div className="relative aspect-[4/3] overflow-hidden bg-paper-2 sm:aspect-[16/9] lg:aspect-[21/10]">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            preload
            quality={85}
            placeholder="blur"
            sizes="(min-width: 1360px) 1264px, (min-width: 1024px) calc(100vw - 96px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
            className="object-cover object-[50%_58%]"
          />
        </div>
        <figcaption className="eyebrow mt-3 flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
          <span>Neubau, Münchenstein BL</span>
          <span>Aussenwärmedämmung</span>
        </figcaption>
      </figure>
    </section>
  );
}
