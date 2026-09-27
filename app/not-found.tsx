import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Seite nicht gefunden</h1>
      <p className="mt-4 text-ink-soft">
        <Link href="/" className="text-accent underline">Zur Startseite von Computer Zimmerer</Link>
      </p>
    </div>
  );
}
