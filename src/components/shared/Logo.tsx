import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /**
   * "adaptive" switches from the dark-text logo on light hero backgrounds to the
   * white-text logo on dark glass; "dark" (for dark backgrounds) / "light" (for light
   * backgrounds) force a static variant.
   */
  tone?: "adaptive" | "dark" | "light";
  size?: "default" | "lg";
};

const LOGO_WIDTH = 1248;
const LOGO_HEIGHT = 174;

export function Logo({ className, tone = "adaptive", size = "default" }: LogoProps) {
  const sizeClass =
    size === "lg"
      ? "h-[30px] sm:h-[34px] lg:h-[38px]"
      : "h-[22px] sm:h-[26px] lg:h-[29px]";

  const sizesAttr =
    size === "lg"
      ? "(min-width: 1024px) 275px, (min-width: 640px) 245px, 215px"
      : "(min-width: 1024px) 210px, (min-width: 640px) 190px, 160px";

  return (
    <Link
      href="/"
      aria-label={`${SITE.name} home`}
      className={cn("relative inline-flex shrink-0 items-center", sizeClass, className)}
    >
      {tone === "adaptive" && (
        <>
          <Image
            src="/logo-light-bg.png"
            alt={SITE.name}
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            preload
            sizes={sizesAttr}
            className="h-full w-auto object-contain transition-opacity duration-300 group-data-[surface=glass]/header:opacity-0"
          />
          <Image
            src="/logo-dark-bg.png"
            alt=""
            aria-hidden="true"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            preload
            sizes={sizesAttr}
            className="pointer-events-none absolute inset-0 h-full w-auto object-contain opacity-0 transition-opacity duration-300 group-data-[surface=glass]/header:opacity-100"
          />
        </>
      )}

      {tone === "dark" && (
        <Image
          src="/logo-dark-bg.png"
          alt={SITE.name}
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          sizes={sizesAttr}
          className="h-full w-auto object-contain"
        />
      )}

      {tone === "light" && (
        <Image
          src="/logo-light-bg.png"
          alt={SITE.name}
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          sizes={sizesAttr}
          className="h-full w-auto object-contain"
        />
      )}
    </Link>
  );
}
