import { serviceNames, site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: new URL("/og.jpg", site.url).toString(),
    email: site.email,
    telephone: site.phone,
    faxNumber: "+499673913312",
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.zip,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.countryCode,
    },
    knowsAbout: [...serviceNames],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
