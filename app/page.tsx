import Image from "next/image";
import { AreaMap } from "@/components/AreaMap";
import { ContactForm } from "@/components/ContactForm";
import { concerns, serviceNames, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pt-24">
        <div>
          <p className="text-sm font-medium tracking-wide text-copper-deep">
            Hannesried · Gemeinde Tiefenbach · Oberpfalz
          </p>
          <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            Computer und EDV aus Hannesried.
          </h1>
          <svg className="mt-4 h-3 w-44 text-copper sm:w-56" viewBox="0 0 220 14" fill="none" aria-hidden="true">
            <path
              d="M2 9 C 30 3, 48 13, 82 7 S 132 2, 168 9 S 198 13, 218 5"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
            Ich bin {site.owner}. Computer Zimmerer ist mein Betrieb in {site.street}, {site.zip} {site.city},{" "}
            {site.landkreis}. Termine nach telefonischer Vereinbarung.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a href={`tel:${site.phone}`} className="btn-primary text-base">
              Anrufen
              <span className="sr-only">: {site.phoneDisplay}</span>
            </a>
            <a href="#kontakt" className="font-medium text-forest underline decoration-copper decoration-2 underline-offset-4">
              Nachricht schreiben
            </a>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-xl lg:max-w-none">
          <picture>
            <source srcSet="/hero-illustration.webp" type="image/webp" />
            <img
              src="/hero-illustration.png"
              alt="Illustration: Laptop, PC und Schraubendreher vor einem kupferfarbenen Kreis"
              width={651}
              height={520}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full"
            />
          </picture>
        </figure>
      </section>

      <section aria-labelledby="anliegen" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <figure className="relative order-2 lg:order-1">
            <Image
              src="/images/gehaeuse-werkbank.jpg"
              alt="Geöffnetes Computergehäuse und ein Schraubendreher auf einem hellen Schreibtisch"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-auto w-full"
            />
          </figure>
          <div className="order-1 lg:order-2">
            <h2 id="anliegen" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Wobei ich helfen kann
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink">Sie rufen an, wir machen einen Termin aus.</p>
            <ul className="mt-8 space-y-5">
              {concerns.map((line) => (
                <li key={line} className="font-display text-xl leading-snug text-ink sm:text-2xl">
                  <span aria-hidden="true" className="text-copper">
                    —{" "}
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-lg leading-7 text-ink-soft">
              Dazu gehören {serviceNames.join(", ").replace(/, ([^,]+)$/, " und $1")}.
            </p>
            <figure className="mt-10 max-w-md">
              <Image
                src="/images/notebook-werkbank.jpg"
                alt="Hände mit einem Schraubendreher an einem geöffneten Notebook auf einem dunklen Tisch"
                width={1400}
                height={1750}
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="h-auto w-full"
              />
            </figure>
          </div>
        </div>
      </section>

      <section aria-labelledby="ort" className="border-t border-line bg-paper-deep/50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 id="ort" className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {site.street}
            </h2>
            <p className="mt-6 text-lg leading-8">
              {site.name}
              <br />
              {site.owner}
              <br />
              {site.street}
              <br />
              {site.zip} {site.city}
              <br />
              Oberpfalz, {site.landkreis}
            </p>
            <p className="mt-6 text-lg leading-8">
              <a
                href={`tel:${site.phone}`}
                className="font-display text-3xl text-forest underline decoration-copper decoration-2 underline-offset-[6px]"
              >
                {site.phoneDisplay}
              </a>
              <br />
              <span className="text-ink-soft">Fax {site.faxDisplay}</span>
              <br />
              <a href={`mailto:${site.email}`} className="text-copper-deep underline underline-offset-4">
                {site.email}
              </a>
            </p>
            <p className="mt-6 leading-7 text-ink-soft">Termine nach telefonischer Vereinbarung.</p>
          </div>
          <AreaMap />
        </div>
      </section>

      <section id="kontakt" aria-labelledby="kontakt-titel" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <h2 id="kontakt-titel" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Schreiben Sie mir
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-ink-soft">
              Wenn ein Anruf gerade nicht passt, schreiben Sie kurz, worum es geht.
            </p>
            <p className="mt-6 text-lg leading-8">
              <a href={`tel:${site.phone}`} className="font-semibold text-forest underline decoration-copper underline-offset-4">
                {site.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="font-semibold text-forest underline decoration-copper underline-offset-4">
                {site.email}
              </a>
            </p>
          </div>
          <div className="min-w-0">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
