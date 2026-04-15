import Link from "next/link";
import { LEGACY_SITE_URL, site } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {site.name}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {site.description} This is the new stack (Next.js on Vercel). Content
        and design will grow here; the{" "}
        <a
          href={LEGACY_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          current public site
        </a>{" "}
        stays the reference for parity until DNS cutover.
      </p>
      <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/book"
          className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Book a showroom visit
        </Link>
        <Link
          href="/campaign/crm-reactivation"
          className="inline-flex h-12 items-center justify-center rounded-full border border-black/15 px-8 text-sm font-medium dark:border-white/20"
        >
          Campaign landing
        </Link>
      </div>
    </div>
  );
}
