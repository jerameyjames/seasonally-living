/** Canonical public URLs — legacy site remains live until DNS cutover. */
export const LEGACY_SITE_URL = "https://www.seasonallyliving.com/" as const;

export const site = {
  name: "Seasonally Living",
  description:
    "Outdoor living, hot tubs, and showroom experiences in the Pacific Northwest.",
  /** Shown in footer; replace with store line when ready. */
  phoneDisplay: null as string | null,
  /** City/region line for footer + SEO locality hint. */
  region: "Pacific Northwest",
} as const;

/**
 * Canonical site URL for metadata, sitemap, and OG.
 * Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://seasonally-living.vercel.app or production domain).
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }
  return "http://localhost:3040";
}
