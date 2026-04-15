import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
};

/**
 * Shared inner layout for marketing pages — adjust once when Stitch tokens land.
 */
export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--sl-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-[var(--sl-ink)] sm:text-5xl">
        {title}
      </h1>
      {intro ? (
        <div className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--sl-muted)]">
          {intro}
        </div>
      ) : null}
      {children ? <div className="mt-10 space-y-6">{children}</div> : null}
    </div>
  );
}
