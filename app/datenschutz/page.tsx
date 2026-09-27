import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung von Computer Zimmerer in Tiefenbach: Hosting, Kontaktformular und Ihre Rechte.",
  path: "/datenschutz",
});

export default function Datenschutz() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Datenschutzerklärung</h1>
      <div className="mt-5 h-px w-16 bg-copper" aria-hidden="true" />
      <div className="prose-legal mt-6">
        <h2>1. Verantwortlicher</h2>
        <p>
          {site.name}, {site.owner}
          <br />
          {site.street}, {site.zip} {site.city}
          <br />
          Telefon: {site.phoneDisplay} · E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>

        <h2>2. Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf
          der Seiten verarbeitet der Hoster technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit des
          Abrufs, aufgerufene Seite, Browsertyp) in Server-Logfiles. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
          (sicherer und stabiler Betrieb der Website). Die Datenübermittlung in die USA erfolgt auf Grundlage des
          EU-US Data Privacy Framework bzw. von Standardvertragsklauseln.
        </p>

        <h2>3. Kontaktformular und E-Mail</h2>
        <p>
          Wenn Sie uns über das Kontaktformular oder per E-Mail schreiben, verarbeiten wir Ihren Namen, Ihre
          E-Mail-Adresse und Ihre Nachricht, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Ihre Einwilligung
          (Art. 6 Abs. 1 lit. a DSGVO) bzw. die Anbahnung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO). Die Nachricht
          aus dem Formular wird über den E-Mail-Dienst Resend (Resend, Inc., USA) an uns zugestellt. Wir löschen
          Ihre Daten, sobald Ihre Anfrage erledigt ist und keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>

        <h2>4. Bilder, Schriften und Karte</h2>
        <p>
          Die Fotos liegen auf unserem eigenen Server und werden von dort ausgeliefert. Es wird kein Bilderdienst
          Dritter aufgerufen. Die Schriftarten werden ebenfalls von unserem Server ausgeliefert; beim Aufruf entsteht
          keine Verbindung zu einem Schriftanbieter. Die Lagekarte ist eine Grafik auf der Seite selbst. Ein
          Kartendienst wird nicht eingebunden.
        </p>

        <h2>5. Cookies und Tracking</h2>
        <p>
          Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken und verwendet keine Tracking-Tools. Es
          werden keine externen Karten, Schrift- oder Bilddienste geladen.
        </p>

        <h2>6. Ihre Rechte</h2>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO) und Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>
          Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, zum Beispiel beim
          Bayerischen Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
        </p>
      </div>
    </div>
  );
}
