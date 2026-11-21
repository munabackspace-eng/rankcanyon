import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

type BreadcrumbSchemaProps = {
  /** Trail excluding "Home" (added automatically). Last item is the current page. */
  items: BreadcrumbItem[];
};

/**
 * BreadcrumbList structured data (no visible UI). Helps search engines show
 * the page hierarchy in results.
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, ...items])} />;
}
