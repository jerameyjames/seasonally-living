import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ReachOut } from "@/components/reach-out";
import {
  LEGACY_SITE_URL,
  getGoogleMapsPlaceUrl,
  getShowroomAddressBlock,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} — showroom in Wenatchee, WA. Call, email, or book a visit.`,
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Hello"
      title="Contact us"
      intro={
        <>
          The fastest path is a quick call or email — we&apos;ll help you decide
          whether a showroom visit makes sense and what to bring.
        </>
      }
    >
      <ReachOut emailSubject="Question for Seasonally Living" />

      <div className="rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface-warm)]/50 p-6">
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
          className="sl-btn-primary inline-flex h-12 min-h-12 w-fit items-center justify-center px-8 text-sm font-semibold"
        >
          Plan a visit
        </Link>
        <a
          href={LEGACY_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="sl-btn-secondary inline-flex h-12 min-h-12 w-fit items-center justify-center px-8 text-sm font-medium"
        >
          Current site
        </a>
      </div>
    </PageShell>
  );
}
