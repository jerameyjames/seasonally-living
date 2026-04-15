import type { ReactNode } from "react";
import { MarketingImage } from "@/components/marketing-image";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
  /** Optional wide photo above the article (Unsplash or other allowed remote). */
  heroImage?: { src: string; alt: string };
};

/** Shared inner layout — Cascadia Refined floating article on tonal canvas. */
export function PageShell({
  eyebrow,
  title,
  intro,
  children,
  heroImage,
}: PageShellProps) {
  const shellPad = heroImage
    ? "py-10 sm:py-12"
    : "py-14 sm:py-20";

  return (
    <>
      {heroImage ? (
        <div className="mx-auto max-w-6xl px-6 pt-14 sm:pt-20">
          <div className="overflow-hidden rounded-[1.75rem] border border-[var(--sl-border)] shadow-[var(--sl-shadow-card)]">
            <MarketingImage
              src={heroImage.src}
              alt={heroImage.alt}
              aspect="banner"
              sizes="(max-width: 768px) 100vw, 1152px"
              priority
            />
          </div>
        </div>
      ) : null}
      <div className={`mx-auto max-w-3xl px-6 ${shellPad}`}>
        <article className="rounded-[1.75rem] border border-[var(--sl-border)] bg-[color-mix(in_srgb,var(--sl-surface)_88%,transparent)] px-6 py-10 shadow-[var(--sl-shadow-card)] backdrop-blur-[2px] sm:px-10 sm:py-12 supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--sl-surface)_78%,transparent)]">
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
