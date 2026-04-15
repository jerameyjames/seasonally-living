import Link from "next/link";
import { primaryNav } from "@/lib/nav";
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
    body: "We help you pick what fits your space and budget — without runaround.",
  },
];

function exploreSpanClass(i: number) {
  if (i === 0) return "lg:col-span-7";
  if (i === 1) return "lg:col-span-5";
  if (i === 2) return "lg:col-span-5";
  if (i === 3) return "lg:col-span-7";
  return "lg:col-span-12 lg:max-w-xl";
}

export default function Home() {
  return (
    <>
      <section className="sl-hero-surface shadow-[0_1px_0_color-mix(in_srgb,var(--sl-ink)_6%,transparent)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="sl-animate-hero lg:col-span-7">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--sl-muted)]">
                {site.region}
              </p>
              <h1 className="font-display mt-4 max-w-[14ch] text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-[var(--sl-ink)]">
                Outdoor living, done with intention.
              </h1>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-[var(--sl-muted)] sm:text-xl">
                {site.description} Start with a showroom visit — we&apos;ll help
                you plan a backyard you&apos;ll actually use.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/book"
                  className="sl-btn-primary inline-flex h-12 min-h-12 items-center justify-center px-8 text-sm font-semibold"
                >
                  Plan a visit
                </Link>
                <a
                  href={LEGACY_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sl-btn-secondary inline-flex h-12 min-h-12 items-center justify-center px-8 text-sm font-medium"
                >
                  Current catalog
                </a>
              </div>
              <p className="mt-8 max-w-[52ch] text-sm leading-relaxed text-[var(--sl-muted)]">
                This site is on a new stack while we migrate pages from
                seasonallyliving.com — the link above stays the reference for
                full product detail until DNS cuts over.
              </p>
            </div>
            <div
              className="sl-hero-panel sl-animate-hero relative min-h-[220px] overflow-hidden rounded-[1.75rem] lg:col-span-5 lg:min-h-[340px]"
              aria-hidden="true"
            >
              <div className="absolute inset-0 opacity-[0.35]">
                <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[color-mix(in_srgb,var(--sl-primary)_12%,transparent)] blur-2xl" />
                <div className="absolute -bottom-12 left-4 h-56 w-56 rounded-full bg-[color-mix(in_srgb,#b1ccc0_35%,transparent)] blur-2xl" />
              </div>
              <div className="relative flex h-full flex-col justify-end p-8">
                <p className="font-display text-lg font-medium leading-snug text-[var(--sl-primary)]">
                  Wenatchee showroom — next to Home Depot.
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--sl-muted)]">
                  Walk the floor, talk through install realities, and leave with
                  a clear next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-[var(--sl-ink)] sm:text-3xl">
            Explore
          </h2>
          <p className="mt-3 text-[var(--sl-muted)]">
            Core pages on the new experience — deeper catalog content still links
            to the live site for now.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {primaryNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface)] p-6 shadow-[var(--sl-shadow-card)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--sl-muted)_28%,var(--sl-border))] hover:shadow-[var(--sl-shadow-card-hover)] motion-reduce:transform-none motion-reduce:transition-colors ${exploreSpanClass(i)}`}
            >
              <span className="font-display text-lg font-semibold tracking-tight text-[var(--sl-ink)] group-hover:text-[var(--sl-primary)]">
                {item.label}
              </span>
              <span className="mt-3 block text-sm text-[var(--sl-muted)]">
                View page
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="font-display text-2xl font-semibold text-[var(--sl-ink)] sm:text-3xl">
          Why visit us first
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface)] p-6 shadow-[var(--sl-shadow-card)] ${i === 0 ? "lg:row-span-1" : ""}`}
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

      <section className="border-t border-[var(--sl-border)] bg-[var(--sl-surface-tonal)]/50">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[var(--sl-ink)]">
              Ready to pick a time?
            </h2>
            <p className="mt-2 max-w-xl text-[var(--sl-muted)]">
              Call or email the shop for now — online scheduling is on the way.
            </p>
          </div>
          <Link
            href="/book"
            className="sl-btn-primary inline-flex h-12 min-h-12 shrink-0 items-center justify-center px-8 text-sm font-semibold"
          >
            Contact &amp; visit
          </Link>
        </div>
      </section>
    </>
  );
}
