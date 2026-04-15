import type { Metadata } from "next";
import Link from "next/link";
import { LegacyCta } from "@/components/legacy-cta";
import { PageShell } from "@/components/page-shell";
import { legacy } from "@/lib/legacy-routes";

export const metadata: Metadata = {
  title: "Grills & outdoor kitchens",
  description:
    "Premium grills and outdoor kitchen layouts for memorable backyard gatherings.",
};

export default function OutdoorKitchensPage() {
  return (
    <PageShell
      eyebrow="Entertaining"
      title="Grills & outdoor kitchens"
      intro={
        <>
          Build an outdoor cooking space that performs like a kitchen and feels
          like a resort. We&apos;ll help you choose layout, materials, and
          appliances for how you host.
        </>
      }
    >
      <ul className="list-inside list-disc space-y-2 text-[var(--sl-muted)]">
        <li>Grill sizing, fuel, and feature sets that match real cooking habits</li>
        <li>Outdoor kitchen modules, storage, and weather-smart finishes</li>
        <li>Showroom walkthrough before you commit</li>
      </ul>

      <div className="flex flex-col gap-4">
        <Link
          href="/book"
          className="sl-btn-primary inline-flex h-12 min-h-12 w-fit items-center justify-center px-8 text-sm font-semibold"
        >
          Book a visit
        </Link>
        <LegacyCta
          href={legacy.outdoorKitchens}
          label="Explore grills &amp; outdoor kitchens"
        />
      </div>
    </PageShell>
  );
}
