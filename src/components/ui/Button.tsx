import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[7px] font-display font-extrabold tracking-tight whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[2.25]";

const primaryStyle =
  "border-0 bg-brand-500 bg-none text-white shadow-[0_8px_18px_-4px_rgb(42_171_226/0.45),0_3px_6px_-2px_rgb(35_32_32/0.1)] hover:-translate-y-0.5 hover:bg-[#1f98cd] hover:shadow-[0_12px_22px_-4px_rgb(42_171_226/0.55),0_4px_8px_-2px_rgb(35_32_32/0.12)] active:translate-y-px";

const secondaryStyle =
  "border-0 bg-background bg-none text-navy-950 shadow-[0_0_0_1px_rgb(35_32_32/0.06),0_10px_20px_-5px_rgb(28_62_96/0.16),0_3px_7px_-2px_rgb(28_62_96/0.08)] hover:-translate-y-0.5 hover:bg-background hover:shadow-[0_0_0_1px_rgb(42_171_226/0.2),0_14px_26px_-5px_rgb(42_171_226/0.22),0_4px_10px_-2px_rgb(28_62_96/0.1)] active:translate-y-px";

const variants = {
  /** Solid #2AABE2 blue pill CTA (no gradient, no border). */
  primary: primaryStyle,
  default: primaryStyle,
  /** Raised white pillow CTA with #232020 charcoal text — paired secondary action. */
  secondary: secondaryStyle,
  outline: secondaryStyle,
  /** Text-like button with a subtle ice-blue hover. */
  ghost: "text-navy-950 hover:bg-ice",
} as const;

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  default: "h-11 px-6 text-sm",
  lg: "h-13 px-7 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type StyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: StyleProps = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

export type ButtonProps = ComponentProps<"button"> & StyleProps;

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & StyleProps;

/** A link styled as a button. Uses next/link for prefetching + client navigation. */
export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonStyles({ variant, size, className })} {...props} />;
}
