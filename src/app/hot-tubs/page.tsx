import type { Metadata } from "next";
import Link from "next/link";
import { LegacyCta } from "@/components/legacy-cta";
import { PageShell } from "@/components/page-shell";
import { pageHero } from "@/lib/imagery";
import { legacy } from "@/lib/legacy-routes";

export const metadata: Metadata = {
  title: "Hot tubs & swim spas",
  description:
    "Therapeutic hydrotherapy, swim spas, and backyard retreats — visit our Wenatchee showroom.",
};

export default function HotTubsPage() {
  return (
    <PageShell
      heroImage={pageHero.hotTubs}
      eyebrow="Relaxation"
      title="Hot tubs & swim spas"
      intro={
        <>
          Refresh your backyard with hydrotherapy, year-round soaks, and models
          you can see before you buy. We&apos;ll match you to the right size,
          jet layout, and efficiency for how you actually live.
        </>
      }
    >
      <ul className="list-inside list-disc space-y-2 text-[var(--sl-muted)]">
        <li>Compare models side-by-side in the showroom</li>
        <li>Site checks: access, pad, electrical — plain-language guidance</li>
        <li>Delivery &amp; install questions answered upfront</li>
      </ul>

      <div className="flex flex-col gap-4">
        <Link
          href="/book"
          className="sl-btn-primary inline-flex h-12 min-h-12 w-fit items-center justify-center px-8 text-sm font-semibold"
        >
          Book a visit
        </Link>
        <LegacyCta href={legacy.hotTubs} label="Explore hot tubs &amp; swim spas" />
      </div>
    </PageShell>
  );
}
