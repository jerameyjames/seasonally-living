type LegacyCtaProps = {
  href: string;
  label: string;
};

/** Deep-link to legacy site while IA migrates — Cascadia secondary panel. */
export function LegacyCta({ href, label }: LegacyCtaProps) {
  return (
    <div className="rounded-2xl border border-[var(--sl-border)] bg-[color-mix(in_srgb,var(--sl-surface-tonal)_65%,var(--sl-surface))] p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--sl-muted)]">
        Full catalog on current site
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--sl-muted)]">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[var(--sl-ink)] underline decoration-[color-mix(in_srgb,var(--sl-accent)_35%,transparent)] underline-offset-4 transition-colors hover:text-[var(--sl-accent)]"
        >
          {label}
        </a>{" "}
        — specifications, photos, and live inventory stay on seasonallyliving.com
        until each category moves over.
      </p>
    </div>
  );
}
