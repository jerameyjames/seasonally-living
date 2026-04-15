/** Unsplash attribution — https://unsplash.com/license */
export function PhotoCredit({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-[0.65rem] leading-snug tracking-wide text-[var(--sl-muted)]/75 ${className}`}
    >
      Photos from{" "}
      <a
        href="https://unsplash.com/?utm_source=seasonallyliving&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--sl-muted)] underline-offset-2 hover:text-[var(--sl-accent)] hover:underline"
      >
        Unsplash
      </a>
    </p>
  );
}
