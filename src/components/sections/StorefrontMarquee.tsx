import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type StorefrontProject = {
  brand: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  scrollDurationClass: string;
};

const storefrontProjects: StorefrontProject[] = [
  {
    brand: "Bravo Pets",
    image: "/images/storefronts/bravo-pets.jpg",
    width: 768,
    height: 1290,
    alt: "Bravo Pets custom Amazon Brand Storefront design",
    scrollDurationClass: "group-hover:duration-[3800ms]",
  },
  {
    brand: "Northpeak",
    image: "/images/storefronts/northpeak.jpg",
    width: 768,
    height: 1308,
    alt: "Northpeak resistance training Amazon Brand Storefront design",
    scrollDurationClass: "group-hover:duration-[3800ms]",
  },
  {
    brand: "OWKAR",
    image: "/images/transformation/owkar-aplus.jpg",
    width: 415,
    height: 1024,
    alt: "OWKAR Handheld Vacuum Sealer full-page Premium A+ showcase",
    scrollDurationClass: "group-hover:duration-[5400ms]",
  },
  {
    brand: "Solace Sleep",
    image: "/images/storefronts/solace-sleep.jpg",
    width: 768,
    height: 1294,
    alt: "Solace Sleep cooling bedding Amazon Brand Storefront design",
    scrollDurationClass: "group-hover:duration-[3800ms]",
  },
  {
    brand: "Atlas Outdoor",
    image: "/images/storefronts/atlas-outdoor.jpg",
    width: 768,
    height: 1280,
    alt: "Atlas Outdoor insulated drinkware Amazon Brand Storefront design",
    scrollDurationClass: "group-hover:duration-[3800ms]",
  },
  {
    brand: "Lumora",
    image: "/images/storefronts/lumora.jpg",
    width: 768,
    height: 1260,
    alt: "Lumora clinical peptide skincare Amazon Brand Storefront design",
    scrollDurationClass: "group-hover:duration-[3800ms]",
  },
];

export function StorefrontMarquee() {
  return (
    <section
      aria-labelledby="storefront-marquee-heading"
      className="relative overflow-x-clip bg-background pt-14 pb-16 text-foreground sm:pt-20 sm:pb-24"
    >
      {/* Charcoal-glass backdrop matching the navbar surface on the left half of the section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-full bg-[#4d4d4f] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] lg:w-1/2 lg:rounded-r-[2rem]"
      />

      <Container className="relative z-10">
        <div className="max-w-xl lg:max-w-[46%]">
          <h2
            id="storefront-marquee-heading"
            className="text-3xl leading-[1.08] font-extrabold tracking-tight text-wrap text-white sm:text-5xl lg:text-[3.6rem]"
          >
            A whole store.{" "}
            <span className="mt-1 block text-brand-400">One clear brand.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/88 sm:text-lg">
            Custom Amazon Brand Stores and Premium A+ modules built to turn single-product
            browsers into multi-ASIN buyers.
          </p>
        </div>
      </Container>

      {/* Full-bleed horizontal project marquee; pauses track & auto-scrolls full image on card hover */}
      <div className="group/marquee relative z-10 mt-10 w-full overflow-hidden py-4 sm:mt-14">
        <div className="flex w-max animate-marquee items-start gap-6 pr-6 [animation-duration:42s] group-hover/marquee:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex shrink-0 items-start gap-6"
            >
              {storefrontProjects.map((project) => (
                <li
                  key={`${copy}-${project.brand}`}
                  className="group w-[17.5rem] shrink-0 sm:w-[19.5rem] lg:w-[21rem]"
                >
                  <div
                    style={{ containerType: "size" }}
                    className="relative h-[22rem] w-full overflow-hidden rounded-2xl border border-black/8 bg-background shadow-[0_14px_34px_-10px_rgba(0,0,0,0.22)] sm:h-[24.5rem] lg:h-[26rem]"
                  >
                    <Image
                      src={project.image}
                      alt={copy === 1 ? "" : project.alt}
                      width={project.width}
                      height={project.height}
                      sizes="(min-width: 1024px) 336px, (min-width: 640px) 312px, 280px"
                      className={cn(
                        "block h-auto w-full [transform:translateY(0)] transition-transform duration-700 ease-out will-change-transform group-hover:[transform:translateY(calc(-100%+100cqh))] group-hover:ease-in-out",
                        project.scrollDurationClass,
                      )}
                    />
                  </div>

                  <p className="mt-3.5 font-display text-sm font-bold text-white/90 lg:opacity-0">
                    {project.brand}
                  </p>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Desktop split-tone brand captions: crisp white over the left black half, dark ink over the right white half */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-4 hidden overflow-hidden [clip-path:inset(0_50%_0_0)] lg:block"
        >
          <div className="flex w-max animate-marquee items-start gap-6 pr-6 [animation-duration:42s] group-hover/marquee:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-start gap-6">
                {storefrontProjects.map((project) => (
                  <span
                    key={`${copy}-${project.brand}`}
                    className="w-[21rem] shrink-0 font-display text-sm font-bold text-white/92"
                  >
                    {project.brand}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-4 hidden overflow-hidden [clip-path:inset(0_0_0_50%)] lg:block"
        >
          <div className="flex w-max animate-marquee items-start gap-6 pr-6 [animation-duration:42s] group-hover/marquee:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-start gap-6">
                {storefrontProjects.map((project) => (
                  <span
                    key={`${copy}-${project.brand}`}
                    className="w-[21rem] shrink-0 font-display text-sm font-bold text-navy-950"
                  >
                    {project.brand}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
