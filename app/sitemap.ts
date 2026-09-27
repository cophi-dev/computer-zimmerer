import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/impressum", "/datenschutz"].map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.3,
  }));
}
