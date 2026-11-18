"use client";

import Image from "next/image";
import { useState } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/services";

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="leistungen" aria-labelledby="leistungen-title" className="container-x mt-28 md:mt-40">
      <SectionHeading
        index="01"
        label="Leistungen"
        id="leistungen-title"
        title="Alles für die Gebäudehülle. Und für den Innenraum."
      />

      <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-6">
        <ol className="lg:col-span-7">
          {services.map((service, index) => (
            <li
              key={service.id}
              onPointerEnter={() => setActive(index)}
              data-active={index === active ? "" : undefined}
              className="group border-t border-line py-8 last:border-b md:py-10"
            >
              <div className="grid grid-cols-[2.75rem_1fr] md:grid-cols-[5rem_1fr]">
                <span className="pt-[0.55em] font-mono text-xs text-muted transition-colors duration-300 group-data-active:text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[clamp(1.625rem,1.2rem+1.6vw,2.5rem)] leading-[1.08] font-medium tracking-[-0.035em] transition-colors duration-300 lg:text-ink/50 lg:group-data-active:text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-pretty text-muted">{service.text}</p>
                  <div className="relative mt-6 aspect-[3/2] overflow-hidden bg-paper-2 lg:hidden">
                    <Image
                      src={service.photo.src}
                      alt={service.photo.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 768px) calc(100vw - 144px), calc(100vw - 84px)"
                      className="object-cover"
                      style={{ objectPosition: service.photo.position }}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
              {services.map((service, index) => (
                <Image
                  key={service.id}
                  src={service.photo.src}
                  alt={index === active ? service.photo.alt : ""}
                  aria-hidden={index === active ? undefined : true}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1360px) 520px, 38vw"
                  className={`object-cover transition-[opacity,scale] duration-700 ease-soft ${
                    index === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                  }`}
                  style={{ objectPosition: service.photo.position }}
                />
              ))}
            </div>
            <p className="eyebrow mt-3 flex justify-between gap-4">
              <span>{current.photo.caption}</span>
              <span>
                {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
