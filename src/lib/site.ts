/** Canonical public URLs — legacy site remains live until DNS cutover. */
export const LEGACY_SITE_URL = "https://www.seasonallyliving.com/" as const;

export const site = {
  name: "Seasonally Living",
  description:
    "Outdoor living, hot tubs, and showroom experiences in the Pacific Northwest.",
  /** City/region line for footer + SEO locality hint. */
  region: "Pacific Northwest",
  showroom: {
    name: "Seasonally Living by Chim Chimney",
    addressLine1: "1407 Maiden Ln",
    city: "Wenatchee",
    state: "WA",
    postalCode: "98801",
    note: "Next to Home Depot",
  },
} as const;

export function getShowroomAddressBlock(): string {
  const s = site.showroom;
  return `${s.addressLine1}, ${s.city}, ${s.state} ${s.postalCode}`;
}

export function getGoogleMapsPlaceUrl(): string {
  const q = encodeURIComponent(`${site.showroom.name} ${getShowroomAddressBlock()}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

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

function readPublicEnv(name: string): string | undefined {
  const v = process.env[name]?.trim();
  return v && v.length > 0 ? v : undefined;
}

/** Display string, e.g. (509) 662-0123 — from NEXT_PUBLIC_CONTACT_PHONE */
export function getContactPhoneDisplay(): string | undefined {
  return readPublicEnv("NEXT_PUBLIC_CONTACT_PHONE");
}

/**
 * tel: href — use NEXT_PUBLIC_CONTACT_PHONE_TEL for E.164 (e.g. +15096620123),
 * else derived from display digits when possible.
 */
export function getContactPhoneTelHref(): string | undefined {
  const direct = readPublicEnv("NEXT_PUBLIC_CONTACT_PHONE_TEL");
  if (direct) {
    const n = direct.replace(/^tel:/i, "");
    return `tel:${n}`;
  }
  const display = getContactPhoneDisplay();
  if (!display) return undefined;
  const digits = display.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `tel:+${digits}`;
  if (digits.length >= 10) return `tel:+${digits}`;
  return `tel:${display.replace(/\s/g, "")}`;
}

/** From NEXT_PUBLIC_CONTACT_EMAIL */
export function getContactEmail(): string | undefined {
  return readPublicEnv("NEXT_PUBLIC_CONTACT_EMAIL");
}

export function getContactMailtoHref(subject?: string): string | undefined {
  const email = getContactEmail();
  if (!email) return undefined;
  const q = new URLSearchParams();
  if (subject) q.set("subject", subject);
  const qs = q.toString();
  return `mailto:${email}${qs ? `?${qs}` : ""}`;
}

export function hasContactChannels(): boolean {
  return Boolean(getContactPhoneDisplay() || getContactEmail());
}
