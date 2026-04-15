import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ReachOut } from "@/components/reach-out";
import { pageHero } from "@/lib/imagery";
import { LEGACY_SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a showroom visit",
  description:
    "Plan a showroom appointment — call, email, or use the legacy site until online booking is connected.",
};

function getSchedulerUrl() {
  const url = process.env.NEXT_PUBLIC_SCHEDULER_URL?.trim();
  return url && url.length > 0 ? url : null;
}

export default function BookPage() {
  const schedulerUrl = getSchedulerUrl();

  return (
    <PageShell
      heroImage={pageHero.book}
      eyebrow="Showroom"
      title="Plan a visit"
      intro={
        <>
          The shop does not use a shared calendar yet — call or email and
          we&apos;ll coordinate a time. When we wire Calendly or Lightspeed
          booking, the same page will gain a one-click scheduler.
        </>
      }
    >
      <ReachOut emailSubject="Showroom visit request" />

      {schedulerUrl ? (
        <div className="rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface-warm)]/50 px-5 py-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--sl-muted)]">
            Online booking
          </p>
          <p className="mt-2 text-sm text-[var(--sl-muted)]">
            Scheduler is configured — use this if you prefer self-serve.
          </p>
          <a
            href={schedulerUrl}
            className="sl-btn-secondary mt-4 inline-flex h-11 items-center justify-center px-6 text-sm font-semibold"
          >
            Open scheduler
          </a>
        </div>
      ) : null}

      <div className="rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface-warm)]/40 px-5 py-5 text-sm leading-relaxed text-[var(--sl-muted)] sm:px-6">
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
      </div>
    </PageShell>
  );
}
