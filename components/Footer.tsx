import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm leading-6 text-ink-soft sm:px-8">
        <p>
          <span className="font-medium text-ink">{site.name}</span>
          {" · "}
          {site.street}, {site.zip} {site.city}
        </p>
        <p className="flex flex-wrap gap-x-5 gap-y-1">
          <a href={`tel:${site.phone}`} className="hover:text-copper-deep">
            Tel. {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-copper-deep">
            {site.email}
          </a>
        </p>
        <p>
          <Link href="/impressum" className="hover:text-copper-deep">
            Impressum
          </Link>
          <span aria-hidden="true"> | </span>
          <Link href="/datenschutz" className="hover:text-copper-deep">
            Datenschutz
          </Link>
        </p>
      </div>
    </footer>
  );
}
