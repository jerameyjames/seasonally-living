import type { Metadata } from "next";
import Link from "next/link";
import { LegacyCta } from "@/components/legacy-cta";
import { PageShell } from "@/components/page-shell";
import { legacy } from "@/lib/legacy-routes";

export const metadata: Metadata = {
  title: "Fireplaces & stoves",
  description:
    "Gas, wood, and electric hearth products — efficient heat and timeless style for North Central Washington homes.",
};

export default function FireplacesPage() {
  return (
    <PageShell
      eyebrow="Hearth"
      title="Fireplaces & stoves"
      intro={
        <>
          From efficient stoves to statement fireplaces, we help you balance
          heat output, clearance requirements, and the look you want — without
          the jargon.
        </>
      }
    >
      <ul className="list-inside list-disc space-y-2 text-[var(--sl-muted)]">
        <li>See live displays and finishes in the showroom</li>
        <li>Talk through fuel type, venting, and realistic timelines</li>
        <li>Coordinate with your contractor or our trusted partners</li>
      </ul>

      <div className="flex flex-col gap-4">
        <Link
          href="/book"
          className="sl-btn-primary inline-flex h-12 min-h-12 w-fit items-center justify-center px-8 text-sm font-semibold"
        >
          Book a visit
        </Link>
        <LegacyCta href={legacy.fireplaces} label="Explore fireplaces &amp; stoves" />
      </div>
    </PageShell>
  );
}
