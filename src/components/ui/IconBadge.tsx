import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBadgeProps = {
  icon: LucideIcon;
  className?: string;
};

/** Rounded square holding a decorative icon — ivory surface tile with ink icon. */
export function IconBadge({ icon: Icon, className }: IconBadgeProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-navy-950 shadow-card",
        className,
      )}
    >
      <Icon className="size-5" strokeWidth={1.75} />
    </span>
  );
}
