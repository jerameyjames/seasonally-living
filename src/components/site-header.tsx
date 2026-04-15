import Link from "next/link";
import { LEGACY_SITE_URL, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--sl-border)] bg-[var(--sl-surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-[var(--sl-ink)]"
        >
          {site.name}
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-sm text-[var(--sl-muted)]">
          <Link
            href="/book"
            className="font-medium text-[var(--sl-ink)] transition-colors hover:text-[var(--sl-accent)]"
          >
            Book a visit
          </Link>
          <a
            href={LEGACY_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--sl-ink)]"
          >
            Current site
          </a>
        </nav>
      </div>
    </header>
  );
}
