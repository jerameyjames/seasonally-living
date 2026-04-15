import Link from "next/link";
import { LEGACY_SITE_URL, site } from "@/lib/site";
import { primaryNav } from "@/lib/nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--sl-border)] bg-[color-mix(in_srgb,var(--sl-bg)_78%,transparent)] shadow-[0_12px_40px_-36px_color-mix(in_srgb,var(--sl-primary)_35%,transparent)] backdrop-blur-xl supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--sl-bg)_64%,transparent)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 sm:h-[4.25rem] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0">
        <div className="flex items-center justify-between gap-4 sm:justify-start">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight text-[var(--sl-ink)] transition-opacity hover:opacity-90"
          >
            {site.name}
          </Link>
          <Link
            href="/book"
            className="sl-btn-primary inline-flex h-10 shrink-0 items-center justify-center px-4 text-xs font-semibold sm:hidden"
          >
            Book
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-x-1 gap-y-2 text-sm sm:gap-x-0.5">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 whitespace-nowrap text-[var(--sl-muted)] transition-colors hover:bg-[color-mix(in_srgb,var(--sl-primary)_6%,transparent)] hover:text-[var(--sl-ink)]"
            >
              {item.label}
            </Link>
          ))}
          <span
            className="mx-1 hidden h-4 w-px bg-[var(--sl-border)] sm:inline-block"
            aria-hidden="true"
          />
          <a
            href={LEGACY_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-2.5 py-2 whitespace-nowrap text-[var(--sl-muted)] transition-colors hover:bg-[color-mix(in_srgb,var(--sl-primary)_6%,transparent)] hover:text-[var(--sl-ink)]"
          >
            Current site
          </a>
          <Link
            href="/book"
            className="sl-btn-primary ml-auto hidden h-10 items-center justify-center px-4 text-xs font-semibold sm:inline-flex"
          >
            Book a visit
          </Link>
        </nav>
      </div>
    </header>
  );
}
