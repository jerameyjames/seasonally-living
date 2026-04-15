import type { ReactNode } from "react";
import { MarketingImage } from "@/components/marketing-image";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
  /** Full-bleed cinematic photo above the article (covers width + strong height). */
  heroImage?: { src: string; alt: string };
};

/** Shared inner layout — optional edge-to-edge hero, article overlaps slightly for depth. */
export function PageShell({
  eyebrow,
  title,
  intro,
  children,
  heroImage,
}: PageShellProps) {
  const articleWrap = heroImage
    ? "relative z-10 -mt-8 pb-14 sm:-mt-12 sm:pb-20"
    : "py-14 sm:py-20";

  return (
    <>
      {heroImage ? (
        <section className="relative w-full">
          <div className="sl-fullbleed">
            <div className="relative overflow-hidden shadow-[inset_0_-1px_0_color-mix(in_srgb,var(--sl-ink)_6%,transparent)]">
              <MarketingImage
                src={heroImage.src}
                alt={heroImage.alt}
                aspect="cinematic"
                sizes="100vw"
                priority
                imageClassName="object-cover object-[center_40%] sm:object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color-mix(in_srgb,var(--sl-ink)_12%,transparent)] via-transparent to-[var(--sl-bg)] sm:from-transparent sm:via-transparent"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--sl-bg)] via-[color-mix(in_srgb,var(--sl-bg)_85%,transparent)] to-transparent sm:h-36"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>
      ) : null}
      <div className={`mx-auto max-w-3xl px-6 ${articleWrap}`}>
        <article className="rounded-[1.75rem] border border-[var(--sl-border)] bg-[color-mix(in_srgb,var(--sl-surface)_94%,transparent)] px-6 py-10 shadow-[var(--sl-shadow-card)] backdrop-blur-[3px] sm:px-10 sm:py-12 supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--sl-surface)_88%,transparent)]">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--sl-muted)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display mt-3 text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-[var(--sl-ink)]">
            {title}
          </h1>
          {intro ? (
            <div className="mt-5 max-w-[52ch] text-lg leading-relaxed text-[var(--sl-muted)]">
              {intro}
            </div>
          ) : null}
          {children ? <div className="mt-10 space-y-8">{children}</div> : null}
        </article>
      </div>
    </>
  );
}
