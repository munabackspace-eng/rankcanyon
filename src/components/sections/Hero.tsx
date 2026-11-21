import { ArrowRight, Calendar } from "lucide-react";
import HeroSection from "@/components/ui/hero-section-9";
import { PRIMARY_CTA } from "@/lib/constants";

/**
 * Full-viewport (100vh) homepage hero powered by `hero-section-9`, featuring
 * popping & looping Amazon service SVGs and a seamless bottom brand marquee.
 */
export function Hero() {
  return (
    <HeroSection
      title={
        <>
          Scale Your E-commerce Brand with{" "}
          <span className="text-brand-500">Profitable Growth</span>
        </>
      }
      subtitle="Ready to take your e-commerce brand further? RankCanyon combines strategic marketplace management, SEO, PPC advertising, and listing optimization to help sellers reach more customers, improve performance, and turn growth opportunities into measurable business results."
      actions={[
        {
          text: (
            <>
              {PRIMARY_CTA.label}
              <ArrowRight aria-hidden="true" />
            </>
          ),
          href: PRIMARY_CTA.href,
          variant: "default",
        },
        {
          text: (
            <>
              <Calendar aria-hidden="true" />
              Book a Consultation
            </>
          ),
          href: "/contact",
          variant: "outline",
        },
      ]}
    />
  );
}
