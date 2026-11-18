"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

import { ArrowLeft, ArrowRight, Close, Expand } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, type Project } from "@/lib/projects";

type Layout = { item: string; media: string; sizes: string };

/** Die ersten beiden Projekte werden gross gezeigt, der Rest im 3er-Raster. */
const featured: Layout[] = [
  {
    item: "md:col-span-2 lg:col-span-8",
    media: "aspect-[4/3] md:aspect-[16/10] lg:aspect-auto lg:h-[clamp(26rem,40vw,35rem)]",
    sizes:
      "(min-width: 1360px) 840px, (min-width: 1024px) 64vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)",
  },
  {
    item: "md:col-span-2 lg:col-span-4",
    media: "aspect-[4/3] md:aspect-[16/10] lg:aspect-auto lg:h-[clamp(26rem,40vw,35rem)]",
    sizes:
      "(min-width: 1360px) 410px, (min-width: 1024px) 32vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)",
  },
];

const regular: Layout = {
  item: "lg:col-span-4",
  media: "aspect-[4/3]",
  sizes: "(min-width: 1360px) 410px, (min-width: 1024px) 32vw, (min-width: 768px) 46vw, calc(100vw - 40px)",
};

const pictureCount = (count: number) => (count === 1 ? "1 Bild" : `${count} Bilder`);

export function Projects() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const swipeStart = useRef<number | null>(null);
  const [view, setView] = useState<{ project: Project; index: number } | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (view && dialog && !dialog.open) dialog.showModal();
  }, [view]);

  const close = () => dialogRef.current?.close();

  const step = (delta: number) =>
    setView((current) => {
      if (!current) return current;
      const total = current.project.photos.length;
      return { ...current, index: (current.index + delta + total) % total };
    });

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    swipeStart.current = event.clientX;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (swipeStart.current === null) return;
    const distance = event.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(distance) > 48) step(distance < 0 ? 1 : -1);
  };

  const photo = view ? view.project.photos[view.index] : null;
  const total = view ? view.project.photos.length : 0;

  return (
    <section id="referenzen" aria-labelledby="referenzen-title" className="container-x mt-28 md:mt-40">
      <SectionHeading
        index="02"
        label="Referenzen"
        id="referenzen-title"
        title="Ausgewählte Projekte."
        intro="Ein Auszug aus unseren Arbeiten – vom verputzten Sockel bis zur kompletten Gebäudehülle. Für mehr Bilder ein Projekt anklicken."
      />

      <ul className="mt-12 grid gap-x-6 gap-y-14 md:mt-16 md:grid-cols-2 lg:grid-cols-12">
        {projects.map((project, index) => {
          const layout = featured[index] ?? regular;
          const cover = project.photos[0];
          return (
            <li key={project.id} className={layout.item}>
              <button
                type="button"
                aria-haspopup="dialog"
                aria-label={`${project.title}, ${project.place} ${project.canton}: ${pictureCount(project.photos.length)} ansehen`}
                onClick={() => setView({ project, index: 0 })}
                className="group block w-full cursor-zoom-in text-left"
              >
                <span className={`relative block overflow-hidden bg-paper-2 ${layout.media}`}>
                  <Image
                    src={cover.src}
                    alt={cover.alt}
                    fill
                    placeholder="blur"
                    sizes={layout.sizes}
                    className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.035]"
                    style={{ objectPosition: cover.position }}
                  />
                  <span className="absolute right-3 bottom-3 inline-flex items-center gap-2 bg-paper px-2.5 py-1.5 font-mono text-[0.6875rem] tracking-[0.1em] uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Expand className="size-3" />
                    Ansehen
                  </span>
                </span>
                <span className="mt-4 flex items-start justify-between gap-6">
                  <span className="block">
                    <span className="eyebrow block">
                      {project.place} {project.canton} · {project.date}
                    </span>
                    <span className="mt-2 block text-xl leading-snug font-medium tracking-[-0.02em] md:text-[1.375rem]">
                      {project.title}
                    </span>
                  </span>
                  <span className="eyebrow shrink-0 pt-px">{pictureCount(project.photos.length)}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="lightbox-title"
        onClose={() => setView(null)}
        onKeyDown={onKeyDown}
        className="lightbox fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-[#0e0e0d] p-0 text-paper"
      >
        {view && photo ? (
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-6 px-5 pt-5 md:px-8 md:pt-7">
              <div>
                <p className="eyebrow text-paper/55">
                  {view.project.place} {view.project.canton} · {view.project.date}
                </p>
                <p id="lightbox-title" className="mt-2 text-xl font-medium tracking-[-0.02em] md:text-2xl">
                  {view.project.title}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Galerie schliessen"
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/70"
              >
                <Close />
              </button>
            </div>

            <div
              className="relative mx-5 my-5 min-h-0 flex-1 touch-pan-y select-none md:mx-8 md:my-6"
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerCancel={() => {
                swipeStart.current = null;
              }}
            >
              <Image
                key={photo.src.src}
                src={photo.src}
                alt={photo.alt}
                fill
                quality={85}
                placeholder="blur"
                sizes="100vw"
                draggable={false}
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-6 px-5 pb-5 md:px-8 md:pb-7">
              <p className="text-sm text-paper/70" aria-live="polite">
                {photo.caption}
              </p>
              <div className="flex shrink-0 items-center gap-3">
                <span className="font-mono text-xs text-paper/55 tabular-nums">
                  {view.index + 1} / {total}
                </span>
                {total > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() => step(-1)}
                      aria-label="Vorheriges Bild"
                      className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/70"
                    >
                      <ArrowLeft />
                    </button>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      aria-label="Nächstes Bild"
                      className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/70"
                    >
                      <ArrowRight />
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
