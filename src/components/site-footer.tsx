import Link from "next/link";
import { LEGACY_SITE_URL, site } from "@/lib/site";
import { primaryNav } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--sl-border)] bg-[var(--sl-surface-warm)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-[var(--sl-ink)]">
              {site.name}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--sl-muted)]">
              {site.description}
            </p>
          </div>
          <div>
            <span className="text-sm font-medium text-[var(--sl-ink)]">
              Explore
            </span>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--sl-muted)] transition-colors hover:text-[var(--sl-accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-sm font-medium text-[var(--sl-ink)]">
              Visit
            </span>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <Link
                  href="/book"
                  className="text-[var(--sl-muted)] transition-colors hover:text-[var(--sl-accent)]"
                >
                  Book a showroom appointment
                </Link>
              </li>
              <li>
                <a
                  href={LEGACY_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sl-muted)] transition-colors hover:text-[var(--sl-accent)]"
                >
                  Browse current seasonallyliving.com
                </a>
              </li>
              <li>
                <Link
                  href="/campaign/crm-reactivation"
                  className="text-xs text-[var(--sl-muted)]/80 underline-offset-4 hover:text-[var(--sl-muted)] hover:underline"
                >
                  Campaign landing (staging)
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-xs text-[var(--sl-muted)]/70">
          © {new Date().getFullYear()} {site.name}. Serving {site.region}.
        </p>
      </div>
    </footer>
  );
}
