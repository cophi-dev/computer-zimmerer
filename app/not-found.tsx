import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description: "Die aufgerufene Seite gibt es bei Computer Zimmerer nicht.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Seite nicht gefunden</h1>
      <div className="mt-5 h-px w-16 bg-copper" aria-hidden="true" />
      <p className="mt-6 text-lg leading-8 text-ink-soft">
        <Link href="/" className="text-copper-deep underline underline-offset-4">
          Zur Startseite von Computer Zimmerer
        </Link>
      </p>
    </div>
  );
}
