import Link from "next/link";
import { LEGACY_SITE_URL, site } from "@/lib/site";
import { primaryNav } from "@/lib/nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--sl-border)] bg-[var(--sl-surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0 sm:h-16">
        <div className="flex items-center justify-between gap-4 sm:justify-start">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight text-[var(--sl-ink)]"
          >
            {site.name}
          </Link>
          <Link
            href="/book"
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-[var(--sl-accent)] px-4 text-xs font-semibold text-white sm:hidden"
          >
            Book
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--sl-muted)] sm:gap-x-5">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-[var(--sl-ink)]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={LEGACY_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap transition-colors hover:text-[var(--sl-ink)]"
          >
            Current site
          </a>
          <Link
            href="/book"
            className="ml-auto hidden h-9 items-center justify-center rounded-full bg-[var(--sl-accent)] px-4 text-xs font-semibold text-white transition-colors hover:bg-[var(--sl-accent-hover)] sm:inline-flex"
          >
            Book a visit
          </Link>
        </nav>
      </div>
    </header>
  );
}
