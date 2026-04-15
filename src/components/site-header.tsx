import Link from "next/link";
import { LEGACY_SITE_URL, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-black/80">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/book" className="hover:text-foreground">
            Book a visit
          </Link>
          <Link href="/campaign/crm-reactivation" className="hover:text-foreground">
            Campaign
          </Link>
          <a
            href={LEGACY_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Current site
          </a>
        </nav>
      </div>
    </header>
  );
}
