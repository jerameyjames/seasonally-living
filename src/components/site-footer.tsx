import Link from "next/link";
import { LEGACY_SITE_URL, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--sl-border)] bg-[var(--sl-surface-warm)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-[var(--sl-ink)]">
              {site.name}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--sl-muted)]">
              {site.description}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-medium text-[var(--sl-ink)]">Visit</span>
            <Link
              href="/book"
              className="text-[var(--sl-muted)] transition-colors hover:text-[var(--sl-accent)]"
            >
              Book a showroom appointment
            </Link>
            <a
              href={LEGACY_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--sl-muted)] transition-colors hover:text-[var(--sl-accent)]"
            >
              Browse current seasonallyliving.com
            </a>
            <Link
              href="/campaign/crm-reactivation"
              className="mt-3 text-xs text-[var(--sl-muted)]/80 underline-offset-4 hover:text-[var(--sl-muted)] hover:underline"
            >
              Campaign landing (staging)
            </Link>
          </div>
        </div>
        <p className="mt-12 text-xs text-[var(--sl-muted)]/70">
          © {new Date().getFullYear()} {site.name}. Serving {site.region}.
        </p>
      </div>
    </footer>
  );
}
