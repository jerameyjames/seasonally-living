import type { Metadata } from "next";
import Link from "next/link";
import { LEGACY_SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hot tub CRM reactivation",
  description:
    "Campaign landing — book a showroom visit. UTM parameters pass through on this URL.",
  robots: { index: false, follow: false },
};

export default function CrmReactivationCampaignPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--sl-muted)]">
        For recent customers
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-[var(--sl-ink)]">
        We saved you a spot in the showroom
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--sl-muted)]">
        Swap in approved Wave copy here. Keep one primary action: book a
        showroom appointment. UTM tags from email work on this path as-is.
      </p>
      <div className="mt-10">
        <Link
          href="/book"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--sl-accent)] px-8 text-sm font-semibold text-white transition-colors hover:bg-[var(--sl-accent-hover)]"
        >
          Book a showroom visit
        </Link>
      </div>
      <p className="mt-12 text-sm text-[var(--sl-muted)]">
        Legacy reference:{" "}
        <a
          href={LEGACY_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--sl-accent)] underline-offset-4 hover:underline"
        >
          seasonallyliving.com
        </a>
      </p>
    </div>
  );
}
