import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Impressum",
  description: "Impressum von Computer Zimmerer, Bernd Zimmerer, Hannesried 37, 93464 Tiefenbach.",
  path: "/impressum",
});

export default function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Impressum</h1>
      <div className="mt-5 h-px w-16 bg-copper" aria-hidden="true" />
      <div className="prose-legal mt-6">
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {site.name}
          <br />
          Inhaber: {site.owner}
          <br />
          {site.street}
          <br />
          {site.zip} {site.city}
        </p>
        <h2>Kontakt</h2>
        <p>
          Telefon: {site.phoneDisplay}
          <br />
          Telefax: {site.faxDisplay}
          <br />
          E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          {site.owner}
          <br />
          {site.street}, {site.zip} {site.city}
        </p>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </div>
  );
}
