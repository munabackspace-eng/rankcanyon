import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = ComponentProps<"span"> & {
  /** `light`: plain text label (default). `solid`: filled ink pill. */
  tone?: "light" | "solid";
};

const tones = {
  light: "text-brand-600",
  solid: "rounded-full bg-brand-600 px-3 py-1 text-white",
} as const;

/** Minimal uppercase label used for categories — no border, shadow or lines. */
export function Badge({ tone = "light", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-semibold tracking-[0.18em] uppercase",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
