import type { ComponentProps } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/**
 * Section backgrounds built from #FFFFFF (background), #EBF5FB (ice), and
 * #F6F7FC (surface) — both solid tones and smooth gradients.
 */
const tones = {
  light: "bg-background",
  surface: "bg-surface",
  ice: "bg-ice",
  "fade-down": "bg-fade-down",
  "fade-up": "bg-fade-up",
  spotlight: "bg-spotlight",
} as const;

export type SectionTone = keyof typeof tones;

type SectionProps = ComponentProps<"section"> & {
  tone?: SectionTone;
  /** Vertical rhythm. */
  spacing?: "sm" | "md" | "lg";
  containerClassName?: string;
  /** Render children without the inner Container (for full-bleed layouts). */
  bleed?: boolean;
};

const spacings = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
} as const;

/** Page section with consistent tone, spacing and container. */
export function Section({
  tone = "light",
  spacing = "md",
  className,
  containerClassName,
  bleed = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-tone={tone}
      className={cn(
        "relative isolate text-foreground",
        tones[tone],
        spacings[spacing],
        className,
      )}
      {...props}
    >
      {bleed ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
