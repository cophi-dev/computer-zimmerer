import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink" aria-label={`${site.name} – Startseite`}>
          Computer <span className="text-accent">Zimmerer</span>
        </Link>
        <a href={`tel:${site.phone}`} className="text-sm font-medium text-ink-soft hover:text-accent">
          {site.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
