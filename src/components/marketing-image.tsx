import Image from "next/image";

/** Layout presets tuned so photography fills space confidently without letterboxing. */
type Aspect =
  | "banner"
  | "card"
  | "cardFeature"
  | "cinematic"
  | "coverBand"
  | "landscape"
  | "video";

const aspectClass: Record<Aspect, string> = {
  /** Wide editorial strip — atmosphere bands inside max-width containers */
  banner:
    "aspect-[21/9] min-h-[220px] max-h-[min(560px,62vh)] sm:min-h-[260px]",
  /** Default card thumb */
  card: "aspect-[16/10] sm:aspect-[2/1]",
  /** Explore cards — fixed tall bands so images dominate the card */
  cardFeature: "h-52 w-full sm:h-60 lg:h-64",
  /** Inner-page heroes — viewport-relative height, full bleed friendly */
  cinematic: "h-[clamp(300px,52vh,640px)] w-full",
  /** Home atmosphere — full-bleed landscape band */
  coverBand: "h-[clamp(280px,42vh,560px)] w-full",
  landscape: "aspect-[4/3]",
  video: "aspect-video",
};

type MarketingImageProps = {
  src: string;
  alt: string;
  aspect?: Aspect;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

export function MarketingImage({
  src,
  alt,
  aspect = "landscape",
  priority = false,
  className = "",
  imageClassName = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px",
}: MarketingImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[var(--sl-surface-tonal)] ${aspectClass[aspect]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover object-center ${imageClassName}`}
      />
    </div>
  );
}
