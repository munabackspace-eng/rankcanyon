import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div"> & {
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  narrow: "max-w-5xl",
  default: "max-w-container",
  wide: "max-w-[96rem]",
} as const;

/** Horizontally centers content with responsive gutters. */
export function Container({ size = "default", className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizes[size], className)}
      {...props}
    />
  );
}
