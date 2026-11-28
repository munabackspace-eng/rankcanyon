import { Container } from "@/components/layout/Container";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { TestimonialVideoCard } from "@/components/sections/TestimonialVideoCard";
import type { SectionTone } from "@/components/ui/Section";
import { testimonials as allTestimonials } from "@/data/home";
import type { Testimonial } from "@/types";

type TestimonialsProps = {
  testimonials?: Testimonial[];
  tone?: SectionTone;
};

export function Testimonials({ testimonials = allTestimonials }: TestimonialsProps) {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="w-full overflow-x-clip bg-background pt-6 pb-16 text-foreground sm:pt-8 sm:pb-24"
    >
      <div className="relative isolate">
        {/* Charcoal split backdrop matching the navbar surface */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] rounded-3xl bg-[#4d4d4f] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] lg:inset-y-0 lg:right-0 lg:left-auto lg:h-auto lg:w-1/2 lg:rounded-none lg:rounded-l-[2rem]"
        />

        <Container className="relative z-10">
          {/* Header row: Title on the upper-left white band + subtitle centered in the upper-right charcoal band */}
          <div className="mb-7 grid gap-4 lg:mb-0 lg:grid-cols-12 lg:gap-8">
            <div className="max-w-xl lg:col-span-6 lg:max-w-none lg:pr-6 lg:pb-9">
              <h2
                id="testimonials-heading"
                className="text-3xl leading-[1.12] font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-[2.35rem] xl:text-[2.5rem]"
              >
                E-commerce Leaders Trust{" "}
                <span className="text-brand-500">Rank</span>Canyon{" "}
                <span className="text-brand-500">to Drive Growth</span>
              </h2>
            </div>

            <div className="lg:col-span-6 lg:flex lg:items-center lg:py-3 lg:pl-6 xl:pl-8">
              <p className="max-w-xl text-base leading-relaxed text-muted lg:text-white/95">
                From 7-figure challengers to category leaders, see how founders and
                e-commerce teams cut wasted ad spend, compound organic rank, and scale net
                profit.
              </p>
            </div>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-8">
            {/* Left column: Full-width & full-height founder reel video */}
            <div className="flex lg:col-span-5">
              <TestimonialVideoCard />
            </div>

            {/* Right column: Autoplaying client testimonial carousel */}
            <div className="flex lg:col-span-7">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
