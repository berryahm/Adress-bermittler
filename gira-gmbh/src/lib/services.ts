import { photos, type Photo } from "@/lib/projects";

export type Service = {
  id: string;
  title: string;
  text: string;
  photo: Photo;
};

export const services: Service[] = [
  {
    id: "aussenwaermedaemmung",
    title: "Aussenwärmedämmung",
    text: "Verputzte Aussenwärmedämmung für Neubau und Sanierung. Sie senkt den Energieverbrauch, schützt die Bausubstanz und sorgt für ein angenehmes Raumklima.",
    photo: photos.grenchen2,
  },
  {
    id: "fassadenputz",
    title: "Fassadenputz & Anstrich",
    text: "Grundputz, Deckputz und Anstrich – in der Struktur und Farbe, die zu Ihrem Gebäude passt. Für neue Fassaden ebenso wie für Renovationen.",
    photo: photos.triengen2,
  },
  {
    id: "sockel",
    title: "Sockelputz & Sockeldämmung",
    text: "Der robuste Abschluss zwischen Fassade und Terrain: Sockel- und Perimeterdämmung, Sockelputz und saubere Anschlüsse.",
    photo: photos.oberkirch,
  },
  {
    id: "innen",
    title: "Innenputz & Malerarbeiten",
    text: "Grundputz, Weissputz, Spachtel- und Malerarbeiten für Wohn- und Gewerberäume – bei sauber abgedeckter Umgebung.",
    photo: photos.widen,
  },
  {
    id: "mosaik",
    title: "Mosaik & Spezialarbeiten",
    text: "Mosaik und besondere Oberflächen, präzise von Hand verlegt – für Fassaden und Räume mit Charakter.",
    photo: photos.benkenDetail,
  },
];
