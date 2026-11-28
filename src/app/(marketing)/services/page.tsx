import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Process } from "@/components/sections/Process";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PageHero } from "@/components/shared/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { homeFaqs } from "@/data/home";
import { PRIMARY_CTA } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Amazon & Marketplace Services: Management, PPC, SEO, Creative & Video",
  description:
    "Explore RankCanyon's full-funnel services: Marketplace Account Management, Marketplace PPC & Advertising Management, Organic Ranking & Sales Growth, Product Image & Creative Design, A+ Content & Brand Store Design, and Product Video Production.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Full-funnel Amazon services, one accountable team"
        description="From the first click to the repeat purchase, we manage every lever that drives profitable growth on Amazon — advertising, content, operations and expansion."
        breadcrumbs={[{ name: "Services", href: "/services" }]}
      >
        <ButtonLink href={PRIMARY_CTA.href} size="lg">
          {PRIMARY_CTA.label}
        </ButtonLink>
      </PageHero>

      <ServicesGrid
        tone="light"
        title="Choose a focused service — or the full growth stack"
        description="Each service stands on its own, and they're even more powerful together under a single strategy."
        detailed
        showAllLink={false}
      />
      <Process />
      <FaqSection faqs={homeFaqs} tone="surface" />
      <FinalCta />
    </>
  );
}
