import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import {
  LEGACY_SITE_URL,
  getGoogleMapsPlaceUrl,
  getShowroomAddressBlock,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} — showroom in Wenatchee, WA. Book a visit or reach the team.`,
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Hello"
      title="Contact us"
      intro={
        <>
          The fastest way to get help is to book a showroom visit. For general
          questions, use the legacy contact paths until this page is wired to
          your preferred form or phone tree.
        </>
      }
    >
      <div className="rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface)] p-6">
        <p className="font-medium text-[var(--sl-ink)]">Showroom</p>
        <p className="mt-2 text-[var(--sl-muted)]">{site.showroom.name}</p>
        <p className="mt-1 text-[var(--sl-muted)]">{getShowroomAddressBlock()}</p>
        <a
          href={getGoogleMapsPlaceUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex text-sm font-medium text-[var(--sl-accent)] underline-offset-4 hover:underline"
        >
          Directions
        </a>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/book"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--sl-accent)] px-8 text-sm font-semibold text-white transition-colors hover:bg-[var(--sl-accent-hover)]"
        >
          Book a visit
        </Link>
        <a
          href={LEGACY_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--sl-border)] bg-[var(--sl-surface)] px-8 text-sm font-medium text-[var(--sl-ink)] transition-colors hover:border-[var(--sl-muted)]"
        >
          Open current site
        </a>
      </div>

      <p className="text-sm text-[var(--sl-muted)]">
        <strong className="text-[var(--sl-ink)]">TODO:</strong> add public
        phone and monitored inbox when approved.
      </p>
    </PageShell>
  );
}
