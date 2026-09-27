import Link from "next/link";
import { Trace } from "@/components/Trace";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-ink sm:text-xl"
          aria-label={`${site.name} – Startseite`}
        >
          Computer Zimmerer
        </Link>
        <a href={`tel:${site.phone}`} className="btn-primary shrink-0 px-4 py-2.5 text-sm sm:px-5 sm:text-base">
          Anrufen
          <span className="sr-only">: {site.phoneDisplay}</span>
        </a>
      </div>
      <Trace />
    </header>
  );
}
