/**
 * Curated Unsplash assets (stable photo IDs). Alt text is localized; credit Unsplash
 * in UI via PhotoCredit — see https://unsplash.com/license
 */
export function unsplash(photoId: string, w: number): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&q=80`;
}

/** Home hero — right panel: modern home / outdoor living */
export const homeHeroSide = {
  src: unsplash("photo-1600585154340-be6161a56a0c", 1200),
  alt: "Evening light on a contemporary home with patio and landscaping",
};

/** Full-width band — Pacific Northwest landscape mood */
export const homeAtmosphere = {
  src: unsplash("photo-1506905925346-21bda4d32df4", 2000),
  alt: "Layered mountain ridges at sunrise, Pacific Northwest",
};

/** Explore cards on the home page — keyed by route */
export const exploreCardByHref: Record<
  string,
  { src: string; alt: string }
> = {
  "/showroom": {
    src: unsplash("photo-1586023492125-27b2c045efd7", 900),
    alt: "Bright furniture showroom with sofas and display lighting",
  },
  "/hot-tubs": {
    src: unsplash("photo-1576013551627-0cc20b96c2a7", 900),
    alt: "Outdoor hot tub on a deck with trees in the background",
  },
  "/fireplaces": {
    src: unsplash("photo-1578662996442-48f60103fc96", 900),
    alt: "Cozy living room with sofa and warm fireplace glow",
  },
  "/outdoor-kitchens": {
    src: unsplash("photo-1600566753086-00f18fb6b3ea", 900),
    alt: "Covered outdoor patio with seating and open layout",
  },
  "/contact": {
    src: unsplash("photo-1423666639041-f56000c27a9a", 900),
    alt: "Hands holding a phone over a wooden table",
  },
};

/** Wide banners for PageShell hero slots */
export const pageHero = {
  showroom: {
    src: unsplash("photo-1586023492125-27b2c045efd7", 1600),
    alt: "Spacious retail floor with furniture displays and natural light",
  },
  hotTubs: {
    src: unsplash("photo-1576013551627-0cc20b96c2a7", 1600),
    alt: "Hot tub installation on a residential deck surrounded by greenery",
  },
  fireplaces: {
    src: unsplash("photo-1578662996442-48f60103fc96", 1600),
    alt: "Interior living space with fireplace and comfortable seating",
  },
  outdoorKitchens: {
    src: unsplash("photo-1600566753086-00f18fb6b3ea", 1600),
    alt: "Outdoor living area with roof cover and patio furniture",
  },
  contact: {
    src: unsplash("photo-1423666639041-f56000c27a9a", 1600),
    alt: "Person using a smartphone at a table",
  },
  book: {
    src: unsplash("photo-1484480974693-6ca0a78fb36b", 1600),
    alt: "Notebook, pen, and glasses on a desk, planning a visit",
  },
  campaign: {
    src: unsplash("photo-1517248135467-4c7edcad34c4", 1600),
    alt: "Warm restaurant interior with seating and ambient lighting",
  },
} as const;
