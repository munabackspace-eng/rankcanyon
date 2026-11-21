import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Heading level — keep the document outline valid (one h1 per page). */
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <Heading
        id={id}
        className="text-3xl leading-tight font-bold text-navy-950 sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
