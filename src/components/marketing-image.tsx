import Image from "next/image";

type Aspect = "banner" | "card" | "landscape" | "video";

const aspectClass: Record<Aspect, string> = {
  banner:
    "aspect-[21/9] min-h-[180px] max-h-[min(380px,42vh)] sm:min-h-[220px]",
  card: "aspect-[16/10] sm:aspect-[2/1]",
  landscape: "aspect-[4/3]",
  video: "aspect-video",
};

type MarketingImageProps = {
  src: string;
  alt: string;
  aspect?: Aspect;
  priority?: boolean;
  className?: string;
  /** Parent should set rounded-*; default adds overflow clip */
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
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px",
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
        className={`object-cover ${imageClassName}`}
      />
    </div>
  );
}
