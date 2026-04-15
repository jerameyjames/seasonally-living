import type { Metadata } from "next";
import Link from "next/link";
import { LEGACY_SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a showroom visit",
  description:
    "Schedule a showroom appointment — primary CTA for Seasonally Living.",
};

function getSchedulerUrl() {
  const url = process.env.NEXT_PUBLIC_SCHEDULER_URL?.trim();
  return url && url.length > 0 ? url : null;
}

function getLeadFormUrl() {
  const url = process.env.NEXT_PUBLIC_LEAD_FORM_URL?.trim();
  return url && url.length > 0 ? url : null;
}

export default function BookPage() {
  const schedulerUrl = getSchedulerUrl();
  const leadFormUrl = getLeadFormUrl();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--sl-muted)]">
        Showroom
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-[var(--sl-ink)]">
        Book a visit
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--sl-muted)]">
        Reserve time with our team. Bring measurements, photos of your space,
        and questions — we&apos;ll help you narrow options fast.
      </p>

      <ul className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {schedulerUrl ? (
          <li>
            <a
              href={schedulerUrl}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--sl-accent)] px-8 text-sm font-semibold text-white transition-colors hover:bg-[var(--sl-accent-hover)]"
            >
              Open scheduler
            </a>
          </li>
        ) : (
          <li className="max-w-lg rounded-2xl border border-amber-200/80 bg-amber-50 px-5 py-4 text-sm text-amber-950">
            <strong className="font-semibold">Next step for launch:</strong> set{" "}
            <code className="rounded bg-amber-100/80 px-1.5 py-0.5 text-xs">
              NEXT_PUBLIC_SCHEDULER_URL
            </code>{" "}
            in Vercel so this button goes live.
          </li>
        )}
        {leadFormUrl ? (
          <li>
            <a
              href={leadFormUrl}
              className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--sl-border)] bg-[var(--sl-surface)] px-8 text-sm font-medium text-[var(--sl-ink)] transition-colors hover:border-[var(--sl-muted)]"
            >
              Request a call back
            </a>
          </li>
        ) : (
          <li className="flex items-center text-sm text-[var(--sl-muted)]">
            <span>
              Optional form fallback:{" "}
              <code className="rounded bg-[var(--sl-surface-warm)] px-1.5 py-0.5 text-xs">
                NEXT_PUBLIC_LEAD_FORM_URL
              </code>
            </span>
          </li>
        )}
      </ul>

      <div className="mt-14 rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface)] p-6">
        <p className="text-sm leading-relaxed text-[var(--sl-muted)]">
          Prefer the current site while we migrate?{" "}
          <a
            href={LEGACY_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--sl-accent)] underline-offset-4 hover:underline"
          >
            Open seasonallyliving.com
          </a>
          <span className="text-[var(--sl-border)]"> · </span>
          <Link
            href="/"
            className="font-medium text-[var(--sl-accent)] underline-offset-4 hover:underline"
          >
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
