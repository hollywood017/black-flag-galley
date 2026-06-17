import Image from "next/image";
import { cn } from "@/lib/cn";

type Variant = "nav" | "hero" | "footer";
type Tone = "dark" | "light";

// Real logo: circular emblem "BLACK FLAG GALLEY · FRESH BITES · LOCAL SEAFOOD"
// with pirate flag + skull + crossed fork/sword + B/G/F monogram.
// logo.png    — black-on-transparent (use on bone bg, or against light overlay)
// logo-bone.png — bone-on-transparent (use on ink-dark bg)
export default function Logo({
  variant = "nav",
  tone,
  className,
}: {
  variant?: Variant;
  tone?: Tone;
  className?: string;
}) {
  const t: Tone = tone ?? "light";
  const src = t === "light" ? "/logo-bone.png" : "/logo.png";

  // Sized so the fine print ("FRESH BITES" / "LOCAL SEAFOOD") is readable.
  const dims =
    variant === "hero"
      ? { box: "h-44 w-44 md:h-56 md:w-56", w: 560, h: 560 }
      : variant === "footer"
        ? { box: "h-28 w-28 md:h-32 md:w-32", w: 320, h: 320 }
        : { box: "h-14 w-14 md:h-16 md:w-16", w: 200, h: 200 };

  return (
    <div className={cn("relative", dims.box, className)} aria-label="Black Flag Galley">
      <Image
        src={src}
        alt="Black Flag Galley — Fresh Bites · Local Seafood"
        width={dims.w}
        height={dims.h}
        priority={variant === "hero" || variant === "nav"}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
