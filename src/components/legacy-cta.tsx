type LegacyCtaProps = {
  href: string;
  label: string;
};

/** Deep-link to legacy site while IA migrates. */
export function LegacyCta({ href, label }: LegacyCtaProps) {
  return (
    <p className="text-sm text-[var(--sl-muted)]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[var(--sl-accent)] underline-offset-4 hover:underline"
      >
        {label}
      </a>{" "}
      on our current site (full catalog &amp; specs).
    </p>
  );
}
