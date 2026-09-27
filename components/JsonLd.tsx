import { services, site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ComputerStore"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: "+49 9673 913311",
    faxNumber: "+49 9673 913312",
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.zip,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.countryCode,
    },
    knowsAbout: services.map((s) => s.title),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
