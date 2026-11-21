// import { BeforeAfterShowcase } from "@/components/sections/BeforeAfterShowcase";
import { AgencyProofStats } from "@/components/sections/AgencyProofStats";
import { BlogInsightsSection } from "@/components/sections/BlogInsightsSection";
import { CaseStudiesTeaser } from "@/components/sections/CaseStudiesTeaser";
import { FaqSection } from "@/components/sections/FaqSection";
// import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { PpcPhasesShowcase } from "@/components/sections/PpcPhasesShowcase";
import { Process } from "@/components/sections/Process";
import { ResearchBenchmarks } from "@/components/sections/ResearchBenchmarks";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
// import { StorefrontMarquee } from "@/components/sections/StorefrontMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { homeFaqs } from "@/data/home";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${SITE.name} — Amazon Growth Agency | PPC, DSP & Listing Optimization`,
  absoluteTitle: true,
  description:
    "Scale your Amazon brand profitably. RankCanyon is a full-service Amazon agency delivering PPC management, Amazon DSP, listing optimization,  creative and account management.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CaseStudiesTeaser />
      <ResearchBenchmarks />
      <ServicesGrid />
      {/* <AgencyProofStats /> */}
      <Process />
      <PpcPhasesShowcase />

      <Testimonials />
      <BlogInsightsSection />
      <FaqSection faqs={homeFaqs} tone="ice" />
      {/* <FinalCta /> */}
    </>
  );
}
