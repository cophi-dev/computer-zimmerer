import type { Metadata } from "next";
import { site } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Hände mit einem Schraubendreher an einem geöffneten Notebook",
} as const;

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
