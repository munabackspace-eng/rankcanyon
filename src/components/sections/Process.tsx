import { Container } from "@/components/layout/Container";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { processSteps } from "@/data/home";
import type { ProcessStep } from "@/types";

type ProcessProps = {
  steps?: ProcessStep[];
  title?: string;
  description?: string;
};

const DEFAULT_TITLE = "A Proven Process for Building Sustainable E-Commerce Growth";

/**
 * Scroll-reveal vertical timeline section inspired by clean alternating SaaS
 * step layouts, styled strictly in RankCanyon's #FFFFFF / #EBF5FB / #232020 / #2AABE2 palette.
 */
export function Process({
  steps = processSteps,
  title = DEFAULT_TITLE,
  description = "We turn business goals into actionable growth strategies. From identifying opportunities to implementing solutions and tracking performance, every step is designed to improve efficiency, maximize potential, and drive measurable results.",
}: ProcessProps) {
  const isDefaultTitle = title === DEFAULT_TITLE;
  const timelineSteps = steps.map(({ step, title: stepTitle, description: desc }) => ({
    step,
    title: stepTitle,
    description: desc,
  }));

  return (
    <section
      aria-labelledby="process-heading"
      className="relative overflow-x-clip bg-background pt-14 pb-10 text-foreground sm:pt-18 sm:pb-14"
    >
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h2
            id="process-heading"
            className="text-3xl leading-[1.1] font-extrabold tracking-tight text-navy-950 sm:text-5xl lg:text-[3.35rem] xl:text-[3.6rem]"
          >
            {isDefaultTitle ? (
              <>
                A Proven Process for Building{" "}
                <span className="mt-1 block text-brand-500">
                  Sustainable E-Commerce Growth
                </span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <ProcessTimeline steps={timelineSteps} />
        </div>
      </Container>
    </section>
  );
}
