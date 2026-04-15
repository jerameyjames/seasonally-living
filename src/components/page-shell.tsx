import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
};

/** Shared inner layout — Cascadia Refined floating article on tonal canvas. */
export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
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
  );
}
