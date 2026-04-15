import Link from "next/link";
import { LEGACY_SITE_URL, site } from "@/lib/site";

const highlights = [
  {
    title: "Showroom-first",
    body: "See models in person, compare finishes, and get sizing right before you buy.",
  },
  {
    title: "Outdoor living",
    body: "Hot tubs, spas, and backyard pieces chosen for Pacific Northwest seasons.",
  },
  {
    title: "Straight answers",
    body: "No mystery pricing games — we help you pick what fits your space and budget.",
  },
];

export default function Home() {
  return (
    <>
      <section
        className="border-b border-[var(--sl-border)]"
        style={{ background: "var(--sl-hero-wash)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--sl-muted)]">
            {site.region}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--sl-ink)] sm:text-5xl sm:leading-[1.08] md:text-6xl">
            Outdoor living, done with intention.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--sl-muted)] sm:text-xl">
            {site.description} Start with a showroom visit — we&apos;ll help you
            plan a backyard you&apos;ll actually use.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/book"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--sl-accent)] px-8 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--sl-accent-hover)]"
            >
              Book a showroom visit
            </Link>
            <a
              href={LEGACY_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--sl-border)] bg-[var(--sl-surface)] px-8 text-sm font-medium text-[var(--sl-ink)] transition-colors hover:border-[var(--sl-muted)]"
            >
              View current site
            </a>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[var(--sl-muted)]">
            We&apos;re refreshing this website on a new stack. The live site
            above stays the reference for products and details until we cut over
            DNS.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-2xl font-semibold text-[var(--sl-ink)] sm:text-3xl">
          Why visit us first
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface)] p-6 shadow-[0_1px_0_rgba(30,27,24,0.04)]"
            >
              <h3 className="font-display text-lg font-semibold text-[var(--sl-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--sl-muted)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--sl-border)] bg-[var(--sl-surface-warm)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[var(--sl-ink)]">
              Ready to pick a time?
            </h2>
            <p className="mt-2 max-w-xl text-[var(--sl-muted)]">
              Book online when your scheduler is connected, or use the legacy
              site while we finish the migration.
            </p>
          </div>
          <Link
            href="/book"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[var(--sl-accent)] px-8 text-sm font-semibold text-white transition-colors hover:bg-[var(--sl-accent-hover)]"
          >
            Book a visit
          </Link>
        </div>
      </section>
    </>
  );
}
