import Link from "next/link";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /**
   * "adaptive" switches from #232020 in the transparent hero header to white on dark glass;
   * "dark" / "light" force a static tone.
   */
  tone?: "adaptive" | "dark" | "light";
  size?: "default" | "lg";
};

export function Logo({ className, tone = "adaptive", size = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} home`}
      className={cn("inline-flex items-center", className)}
    >
      <span
        className={cn(
          "font-display leading-none font-extrabold tracking-tight transition-colors duration-300",
          size === "default" && "text-xl sm:text-[1.7rem] lg:text-[1.95rem]",
          size === "lg" && "text-[2.1rem] sm:text-[2.5rem] lg:text-[2.85rem]",
          tone === "adaptive" &&
            "text-navy-950 group-data-[surface=glass]/header:text-white",
          tone === "dark" && "text-white",
          tone === "light" && "text-navy-950",
        )}
      >
        rankcanyon
      </span>
    </Link>
  );
}
