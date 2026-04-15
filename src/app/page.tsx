import Image from "next/image";
import Link from "next/link";
import { MarketingImage } from "@/components/marketing-image";
import {
  exploreCardByHref,
  homeAtmosphere,
  homeHeroSide,
} from "@/lib/imagery";
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
            <div className="sl-animate-hero relative min-h-[220px] overflow-hidden rounded-[1.75rem] border border-[var(--sl-border)] shadow-[var(--sl-shadow-card)] lg:col-span-5 lg:min-h-[340px]">
              <Image
                src={homeHeroSide.src}
                alt={homeHeroSide.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--sl-bg)] via-[color-mix(in_srgb,var(--sl-bg)_50%,transparent)] to-[color-mix(in_srgb,var(--sl-bg)_15%,transparent)]" />
              <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-end p-8">
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
          {primaryNav.map((item, i) => {
            const shot = exploreCardByHref[item.href];
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface)] shadow-[var(--sl-shadow-card)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--sl-muted)_28%,var(--sl-border))] hover:shadow-[var(--sl-shadow-card-hover)] motion-reduce:transform-none motion-reduce:transition-colors ${exploreSpanClass(i)}`}
              >
                {shot ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[2/1]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-display text-lg font-semibold tracking-tight text-[var(--sl-ink)] group-hover:text-[var(--sl-primary)]">
                    {item.label}
                  </span>
                  <span className="mt-3 block text-sm text-[var(--sl-muted)]">
                    View page
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[var(--sl-border)] bg-[var(--sl-surface-warm)]/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-[1.75rem] border border-[var(--sl-border)] shadow-[var(--sl-shadow-card)]">
            <MarketingImage
              src={homeAtmosphere.src}
              alt={homeAtmosphere.alt}
              aspect="banner"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--sl-muted)]">
            Built for long summers and real winters — we help you choose outdoor
            pieces that feel right for North Central Washington.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-2xl font-semibold text-[var(--sl-ink)] sm:text-3xl">
          Why visit us first
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface)] p-6 shadow-[var(--sl-shadow-card)]"
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
