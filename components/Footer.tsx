import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-ink-soft sm:px-8">
        <p>
          <span className="font-medium text-ink">{site.name}</span> · {site.street}, {site.zip} {site.city}
        </p>
        <p className="flex flex-wrap gap-x-5 gap-y-1">
          <a href={`tel:${site.phone}`} className="hover:text-accent">Tel. {site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
        </p>
        <p className="flex gap-4">
          <Link href="/impressum" className="hover:text-accent">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-accent">Datenschutz</Link>
        </p>
      </div>
    </footer>
  );
}
