import { ContactForm } from "@/components/ContactForm";
import { services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
          {site.district} · {site.zip} {site.city}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          Computer, Netzwerk und EDV — persönlich aus Hannesried.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
          Computer Zimmerer ist der Computerbetrieb von {site.owner} in Hannesried — für Computer, Notebook,
          Handy, Netzwerke, Internet und Software. Termine nach telefonischer Vereinbarung.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href={`tel:${site.phone}`} className="btn-primary text-base">
            Anrufen: {site.phoneDisplay}
          </a>
          <a href="#kontakt" className="text-sm font-medium text-ink-soft underline-offset-4 hover:text-accent hover:underline">
            Lieber schreiben? Zum Kontaktformular
          </a>
        </div>
      </section>

      <section aria-labelledby="leistungen" className="border-t border-line bg-card">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 id="leistungen" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Leistungen
            </h2>
            <p className="mt-4 leading-7 text-ink-soft">
              Was genau Sie brauchen, klären wir am besten kurz am Telefon.
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {services.map((s) => (
              <li key={s.title} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                <h3 className="w-56 shrink-0 font-semibold">{s.title}</h3>
                <p className="leading-7 text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="termin" className="border-t border-line">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_2fr]">
          <h2 id="termin" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            So erreichen Sie uns
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-soft">Adresse</h3>
              <p className="mt-2 text-lg leading-8">
                {site.name}
                <br />
                {site.street}
                <br />
                {site.zip} {site.city}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-soft">Termine</h3>
              <p className="mt-2 text-lg leading-8">
                Nach telefonischer Vereinbarung.
                <br />
                <a href={`tel:${site.phone}`} className="text-accent hover:underline">
                  Tel. {site.phoneDisplay}
                </a>
                <br />
                <span className="text-ink-soft">Fax {site.faxDisplay}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" aria-labelledby="kontakt-titel" className="scroll-mt-8 border-t border-line bg-card">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 id="kontakt-titel" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Kontakt
            </h2>
            <p className="mt-4 leading-7 text-ink-soft">
              Schreiben Sie kurz, worum es geht — wir melden uns bei Ihnen.
            </p>
            <p className="mt-6 leading-7">
              <a href={`tel:${site.phone}`} className="font-medium text-accent hover:underline">
                {site.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="font-medium text-accent hover:underline">
                {site.email}
              </a>
            </p>
          </div>
          <div className="max-w-xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
