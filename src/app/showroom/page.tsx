import type { Metadata } from "next";
import Link from "next/link";
import { LegacyCta } from "@/components/legacy-cta";
import { PageShell } from "@/components/page-shell";
import { legacy } from "@/lib/legacy-routes";
import {
  getGoogleMapsPlaceUrl,
  getShowroomAddressBlock,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Showroom",
  description: `Visit our Wenatchee showroom — ${getShowroomAddressBlock()}. Book an appointment online.`,
};

export default function ShowroomPage() {
  return (
    <PageShell
      eyebrow="Visit us"
      title="Our showroom"
      intro={
        <>
          See fireplaces, hot tubs, and outdoor living displays in a relaxed,
          no-pressure environment. We&apos;re here to help you plan a space
          you&apos;ll use for years.
        </>
      }
    >
      <div className="rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface)] p-6">
        <p className="font-medium text-[var(--sl-ink)]">{site.showroom.name}</p>
        <p className="mt-2 text-[var(--sl-muted)]">{getShowroomAddressBlock()}</p>
        <p className="mt-1 text-sm text-[var(--sl-muted)]">{site.showroom.note}</p>
        <a
          href={getGoogleMapsPlaceUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex text-sm font-medium text-[var(--sl-accent)] underline-offset-4 hover:underline"
        >
          Open in Google Maps
        </a>
      </div>

      <p className="text-sm leading-relaxed text-[var(--sl-muted)]">
        For posted hours and holiday changes, check the current site or call
        ahead — we&apos;ll confirm before you make the drive.
      </p>

      <div className="flex flex-col gap-4">
        <Link
          href="/book"
          className="sl-btn-primary inline-flex h-12 min-h-12 w-fit items-center justify-center px-8 text-sm font-semibold"
        >
          Plan a showroom visit
        </Link>
        <LegacyCta href={legacy.home} label="Browse the full current site" />
      </div>
    </PageShell>
  );
}
