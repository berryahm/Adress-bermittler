import type { StaticImageData } from "next/image";

import benkenDetail from "@/assets/fotos/benken-detail.jpg";
import benkenNachher from "@/assets/fotos/benken-nachher.jpg";
import benkenVerlegt from "@/assets/fotos/benken-verlegt.jpg";
import benkenVorher from "@/assets/fotos/benken-vorher.jpg";
import dottikon from "@/assets/fotos/dottikon.jpg";
import grenchen1 from "@/assets/fotos/grenchen-1.jpg";
import grenchen2 from "@/assets/fotos/grenchen-2.jpg";
import muenchensteinDaemmung from "@/assets/fotos/muenchenstein-daemmung.jpg";
import muenchensteinFassade from "@/assets/fotos/muenchenstein-fassade.jpg";
import oberkirch from "@/assets/fotos/oberkirch.jpg";
import rueschlikon from "@/assets/fotos/rueschlikon.jpg";
import triengen1 from "@/assets/fotos/triengen-1.jpg";
import triengen2 from "@/assets/fotos/triengen-2.jpg";
import widen from "@/assets/fotos/widen.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  /** Ort der Aufnahme, z. B. «Grenchen SO» */
  place?: string;
  /** CSS object-position, wenn das Bild zugeschnitten dargestellt wird. */
  position?: string;
};

export type Project = {
  id: string;
  title: string;
  place: string;
  canton: Canton;
  photos: Photo[];
};

export const cantonNames = {
  ZH: "Zürich",
  BE: "Bern",
  LU: "Luzern",
  UR: "Uri",
  SZ: "Schwyz",
  OW: "Obwalden",
  NW: "Nidwalden",
  GL: "Glarus",
  ZG: "Zug",
  FR: "Freiburg",
  SO: "Solothurn",
  BS: "Basel-Stadt",
  BL: "Basel-Landschaft",
  SH: "Schaffhausen",
  AR: "Appenzell Ausserrhoden",
  AI: "Appenzell Innerrhoden",
  SG: "St. Gallen",
  GR: "Graubünden",
  AG: "Aargau",
  TG: "Thurgau",
  TI: "Tessin",
  VD: "Waadt",
  VS: "Wallis",
  NE: "Neuenburg",
  GE: "Genf",
  JU: "Jura",
} as const;

export type Canton = keyof typeof cantonNames;

export const photos = {
  benkenDetail: {
    src: benkenDetail,
    alt: "Mitarbeiter setzt Mosaik in Kupfertönen an einer Gebäudeecke",
    caption: "Verlegung von Hand",
    place: "Benken ZH",
  },
  benkenNachher: {
    src: benkenNachher,
    alt: "Fertige Mosaikfassade an Garage und Eingang, ein Mitarbeiter reinigt den Vorplatz",
    caption: "Abschluss und Reinigung",
    place: "Benken ZH",
  },
  benkenVerlegt: {
    src: benkenVerlegt,
    alt: "Frisch verlegte Mosaikfassade mit Garage, Eingangstür und Fenster",
    caption: "Mosaik verlegt",
    place: "Benken ZH",
  },
  benkenVorher: {
    src: benkenVorher,
    alt: "Sichtbetonfront mit Garage und Eingang vor Beginn der Arbeiten, Fenster abgedeckt",
    caption: "Ausgangslage",
    place: "Benken ZH",
  },
  dottikon: {
    src: dottikon,
    alt: "XPS-Dämmplatten im Sockelbereich eines Holzbaus",
    caption: "Sockeldämmung mit XPS-Platten",
    place: "Dottikon AG",
  },
  grenchen1: {
    src: grenchen1,
    alt: "Eingerüsteter Neubau mit Dämmplatten an der Fassade",
    caption: "Aussenwärmedämmung",
    place: "Grenchen SO",
  },
  grenchen2: {
    src: grenchen2,
    alt: "Neubau mit Gerüst, die Fassade ist vollständig mit Dämmplatten belegt",
    caption: "Gesamtansicht",
    place: "Grenchen SO",
  },
  muenchensteinDaemmung: {
    src: muenchensteinDaemmung,
    alt: "Eingerüsteter Neubau in der Abendsonne während der Aussenwärmedämmung",
    caption: "Während der Dämmarbeiten",
    place: "Münchenstein BL",
  },
  muenchensteinFassade: {
    src: muenchensteinFassade,
    alt: "Neubau mit fertig verputzter, heller Fassade und Gerüst",
    caption: "Fassade fertig verputzt",
    place: "Münchenstein BL",
  },
  oberkirch: {
    src: oberkirch,
    alt: "Frisch verputzter, weisser Sockel unter einer Metallfassade",
    caption: "Verputzter Sockel unter Metallfassade",
    place: "Oberkirch LU",
    position: "85% 50%",
  },
  rueschlikon: {
    src: rueschlikon,
    alt: "Eingerüstetes Wohnhaus mit Satteldach während der Aussenwärmedämmung",
    caption: "Aussenwärmedämmung",
    place: "Rüschlikon ZH",
  },
  triengen1: {
    src: triengen1,
    alt: "Eingerüstetes Gebäude mit frisch verputzter Fassade, davor ein Mitarbeiter",
    caption: "Giebelseite",
    place: "Triengen LU",
  },
  triengen2: {
    src: triengen2,
    alt: "Seitenansicht eines eingerüsteten Gebäudes mit verputzter Fassade",
    caption: "Längsseite",
    place: "Triengen LU",
  },
  widen: {
    src: widen,
    alt: "Frisch gestrichener Innenraum mit abgedecktem Boden",
    caption: "Spachtel- und Malerarbeiten",
    place: "Widen AG",
  },
} satisfies Record<string, Photo>;

export const projects: Project[] = [
  {
    id: "benken",
    title: "Mosaikfassade",
    place: "Benken",
    canton: "ZH",
    photos: [photos.benkenNachher, photos.benkenVorher, photos.benkenDetail, photos.benkenVerlegt],
  },
  {
    id: "grenchen",
    title: "Aussenwärmedämmung, Neubau",
    place: "Grenchen",
    canton: "SO",
    photos: [photos.grenchen1, photos.grenchen2],
  },
  {
    id: "muenchenstein",
    title: "Dämmung und Fassadenputz, Neubau",
    place: "Münchenstein",
    canton: "BL",
    photos: [photos.muenchensteinFassade, photos.muenchensteinDaemmung],
  },
  {
    id: "triengen",
    title: "Fassadenputz",
    place: "Triengen",
    canton: "LU",
    photos: [photos.triengen1, photos.triengen2],
  },
  {
    id: "rueschlikon",
    title: "Aussenwärmedämmung",
    place: "Rüschlikon",
    canton: "ZH",
    photos: [photos.rueschlikon],
  },
  {
    id: "dottikon",
    title: "Sockeldämmung",
    place: "Dottikon",
    canton: "AG",
    photos: [photos.dottikon],
  },
  {
    id: "oberkirch",
    title: "Sockelputz",
    place: "Oberkirch",
    canton: "LU",
    photos: [photos.oberkirch],
  },
  {
    id: "widen",
    title: "Malerarbeiten innen",
    place: "Widen",
    canton: "AG",
    photos: [photos.widen],
  },
];

/** Kantone mit Referenzen, in der offiziellen Reihenfolge. */
export const referenceCantons: Canton[] = (Object.keys(cantonNames) as Canton[]).filter((c) =>
  projects.some((p) => p.canton === c),
);

export function joinGerman(items: readonly string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} und ${items[items.length - 1]}`;
}
