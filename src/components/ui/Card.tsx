import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentProps<"div"> & {
  /** `tinted`: #EBF5FB (default). `flat`: #FFFFFF. `sheen`: #FFFFFF→#EBF5FB. `recessed`: #EBF5FB→#FFFFFF. */
  variant?: "tinted" | "sheen" | "flat" | "recessed";
  interactive?: boolean;
};

const variants = {
  tinted: "bg-card",
  sheen: "bg-sheen",
  flat: "bg-background",
  recessed: "bg-sheen-inverse",
} as const;

/** Surface container with hairline border, soft shadow and optional hover lift. */
export function Card({
  variant = "tinted",
  interactive = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border p-6 shadow-card sm:p-8",
        variants[variant],
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-card-hover",
        className,
      )}
      {...props}
    />
  );
}
