import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ReachOut } from "@/components/reach-out";
import { pageHero } from "@/lib/imagery";
import { LEGACY_SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hot tub CRM reactivation",
  description:
    "Campaign landing — plan a showroom visit. UTM parameters pass through on this URL.",
  robots: { index: false, follow: false },
};

export default function CrmReactivationCampaignPage() {
  return (
    <PageShell
      heroImage={pageHero.campaign}
      eyebrow="For recent customers"
      title="We saved you a spot in the showroom"
      intro={
        <>
          If you have been in recently, thank you — we would love to walk new
          models with you and answer follow-up questions. Use the buttons below
          or reply to your campaign email. UTM tags from email work on this URL
          as-is.
        </>
      }
    >
      <ReachOut emailSubject="CRM campaign — showroom follow-up" />

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/book"
          className="sl-btn-primary inline-flex h-12 min-h-12 items-center justify-center px-8 text-sm font-semibold"
        >
          Plan a showroom visit
        </Link>
      </div>

      <p className="text-sm text-[var(--sl-muted)]">
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
    </PageShell>
  );
}
