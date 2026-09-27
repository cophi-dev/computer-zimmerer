import type { Metadata } from "next";
import { site } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
    },
    twitter: {
      card: "summary",
      title: `${title} | ${site.name}`,
      description,
    },
  };
}
