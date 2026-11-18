import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return [
    { url: new URL("/", base).toString(), changeFrequency: "monthly", priority: 1 },
    { url: new URL("/impressum", base).toString(), changeFrequency: "yearly", priority: 0.2 },
    { url: new URL("/datenschutz", base).toString(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
