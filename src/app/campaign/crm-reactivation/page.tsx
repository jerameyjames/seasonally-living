import type { Metadata } from "next";
import Link from "next/link";
import { LEGACY_SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Hot tub CRM reactivation · ${site.name}`,
  description:
    "Campaign01 landing — showroom booking CTA with UTM-friendly entry.",
};

export default function CrmReactivationCampaignPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        Campaign 01
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
        We saved you a spot in the showroom
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        Replace this copy with the approved Wave creative. Keep a single primary
        action: book a showroom appointment. UTM parameters from email ads pass
        through automatically on this domain.
      </p>
      <div className="mt-10">
        <Link
          href="/book"
          className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Book a showroom visit
        </Link>
      </div>
      <p className="mt-12 text-sm text-zinc-500 dark:text-zinc-400">
        Legacy reference:{" "}
        <a
          href={LEGACY_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          seasonallyliving.com
        </a>
      </p>
    </div>
  );
}
