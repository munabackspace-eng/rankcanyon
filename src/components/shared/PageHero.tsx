import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import type { BreadcrumbItem } from "@/lib/seo";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: ReactNode;
  description?: ReactNode;
  /** Page trail (excluding Home) — emitted as BreadcrumbList structured data only. */
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
  className?: string;
};

/** Clean hero used at the top of interior pages. Renders the page's single <h1>. */
export function PageHero({
  title,
  description,
  breadcrumbs,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative border-b border-border bg-spotlight pt-[calc(var(--header-height)+3.5rem)] pb-16 sm:pb-20 lg:pt-[calc(var(--header-height)+5rem)] lg:pb-24",
        className,
      )}
    >
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl leading-[1.1] font-bold text-navy-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
      {breadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}
    </section>
  );
}
