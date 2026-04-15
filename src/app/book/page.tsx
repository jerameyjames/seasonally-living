import type { Metadata } from "next";
import Link from "next/link";
import { LEGACY_SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Book a showroom visit · ${site.name}`,
  description:
    "Schedule a showroom appointment — primary CTA for Seasonally Living campaigns.",
};

function getSchedulerUrl() {
  const url = process.env.NEXT_PUBLIC_SCHEDULER_URL?.trim();
  return url && url.length > 0 ? url : null;
}

function getLeadFormUrl() {
  const url = process.env.NEXT_PUBLIC_LEAD_FORM_URL?.trim();
  return url && url.length > 0 ? url : null;
}

export default function BookPage() {
  const schedulerUrl = getSchedulerUrl();
  const leadFormUrl = getLeadFormUrl();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        Showroom
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
        Book a visit
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        Reserve time at the showroom. This page is the campaign primary CTA
        destination; wire your scheduler and fallback form via environment
        variables for production.
      </p>

      <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {schedulerUrl ? (
          <li>
            <a
              href={schedulerUrl}
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Open scheduler
            </a>
          </li>
        ) : (
          <li className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-950 dark:text-amber-100">
            Set{" "}
            <code className="rounded bg-black/5 px-1 py-0.5 text-xs dark:bg-white/10">
              NEXT_PUBLIC_SCHEDULER_URL
            </code>{" "}
            to enable the primary button.
          </li>
        )}
        {leadFormUrl ? (
          <li>
            <a
              href={leadFormUrl}
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/15 px-8 text-sm font-medium dark:border-white/20"
            >
              Request a call back (form)
            </a>
          </li>
        ) : (
          <li className="text-sm text-zinc-500">
            Optional:{" "}
            <code className="rounded bg-black/5 px-1 py-0.5 text-xs dark:bg-white/10">
              NEXT_PUBLIC_LEAD_FORM_URL
            </code>{" "}
            for form fallback.
          </li>
        )}
      </ul>

      <p className="mt-12 text-sm text-zinc-500 dark:text-zinc-400">
        Need the previous site while we migrate content?{" "}
        <a
          href={LEGACY_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Open current seasonallyliving.com
        </a>
        {" · "}
        <Link href="/" className="font-medium hover:underline">
          Home
        </Link>
      </p>
    </div>
  );
}
