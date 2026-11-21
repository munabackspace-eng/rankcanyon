import { useId } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/shared/Reveal";

type ProofStat = {
  value: string;
  label: string;
};

type ReviewPlatform = {
  id: "google" | "clutch" | "glassdoor" | "featured-customers" | "trustpilot";
  name: string;
  score: number;
  scoreText: string;
  countText: string;
};

const proofStats: ProofStat[] = [
  {
    value: "87%",
    label: "Average Year-Over-Year Profit Growth for Partners",
  },
  {
    value: "12",
    label: "Awards Received",
  },
  {
    value: "$3.21B",
    label: "Revenue Managed",
  },
  {
    value: "99.1%",
    label: "Partner Retention Rate",
  },
];

const reviewPlatforms: ReviewPlatform[] = [
  {
    id: "google",
    name: "Google",
    score: 5.0,
    scoreText: "5.0/5",
    countText: "28 Ratings",
  },
  {
    id: "clutch",
    name: "Clutch",
    score: 4.9,
    scoreText: "4.9/5",
    countText: "37 Ratings",
  },
  {
    id: "glassdoor",
    name: "Glassdoor",
    score: 4.6,
    scoreText: "4.6/5",
    countText: "53 Ratings",
  },
  {
    id: "featured-customers",
    name: "Featured Customers",
    score: 4.8,
    scoreText: "4.8/5",
    countText: "381 Ratings",
  },
  {
    id: "trustpilot",
    name: "Trustpilot",
    score: 4.8,
    scoreText: "4.8/5",
    countText: "104 Reviews",
  },
];

function PlatformWordmark({ id }: { id: ReviewPlatform["id"] }) {
  switch (id) {
    case "google":
      return (
        <span className="font-display text-xl leading-none font-bold tracking-tight text-white">
          Google
        </span>
      );
    case "clutch":
      return (
        <span className="font-display text-xl leading-none font-extrabold tracking-tight text-white">
          Clutch
        </span>
      );
    case "glassdoor":
      return (
        <span className="font-display text-[1.15rem] leading-none font-extrabold tracking-tight text-white lowercase">
          glassdoor
        </span>
      );
    case "featured-customers":
      return (
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-500 font-display text-xs leading-none font-extrabold text-white"
          >
            “”
          </span>
          <span className="text-left font-display text-[11.5px] leading-[1.08] font-bold tracking-tight text-white">
            Featured
            <span className="block font-semibold text-white/85">Customers</span>
          </span>
        </span>
      );
    case "trustpilot":
      return (
        <span className="inline-flex items-center gap-1.5">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="size-5 shrink-0 text-brand-400"
          >
            <path
              d="M10 1.6L12.45 6.85L18.2 7.55L13.95 11.5L15.05 17.2L10 14.35L4.95 17.2L6.05 11.5L1.8 7.55L7.55 6.85L10 1.6Z"
              fill="currentColor"
            />
          </svg>
          <span className="font-display text-lg leading-none font-extrabold tracking-tight text-white">
            Trustpilot
          </span>
        </span>
      );
  }
}

function FractionalStars({ score }: { score: number }) {
  const uid = useId();

  return (
    <div
      className="flex items-center justify-center gap-1"
      aria-label={`${score} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((starIndex) => {
        const fillRatio = Math.max(0, Math.min(1, score - starIndex));
        const gradId = `${uid}-star-${starIndex}`;

        return (
          <svg
            key={starIndex}
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="size-4 shrink-0"
          >
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={`${fillRatio * 100}%`} stopColor="#2AABE2" />
                <stop offset={`${fillRatio * 100}%`} stopColor="rgba(255,255,255,0.22)" />
              </linearGradient>
            </defs>
            <path
              d="M10 1.75L12.55 6.92L18.25 7.75L14.12 11.77L15.1 17.45L10 14.77L4.9 17.45L5.88 11.77L1.75 7.75L7.45 6.92L10 1.75Z"
              fill={`url(#${gradId})`}
            />
          </svg>
        );
      })}
    </div>
  );
}

export function AgencyProofStats() {
  return (
    <section
      aria-labelledby="agency-proof-heading"
      className="relative w-full overflow-hidden bg-black py-16 text-white sm:py-24"
    >
      {/* Subtle RankCanyon cyan atmospheric glow in top-right & bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(48%_62%_at_92%_12%,rgba(42,171,226,0.2)_0%,rgba(0,0,0,0)_70%),radial-gradient(40%_50%_at_8%_90%,rgba(38,116,188,0.16)_0%,rgba(0,0,0,0)_70%)]"
      />

      <Container className="relative z-10">
        {/* Centered H2 heading */}
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2
              id="agency-proof-heading"
              className="text-3xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] xl:text-[3.6rem]"
            >
              Driving Growth Through{" "}
              <span className="mt-1 block text-brand-400">
                Expertise and Performance.
              </span>
            </h2>
          </div>
        </Reveal>

        {/* 4-column KPI stats with vertical hairline dividers on desktop */}
        <Reveal delay={0.06}>
          <dl className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-16 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15">
            {proofStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-2 text-center lg:px-6 xl:px-8"
              >
                <dt className="order-2 mt-3 max-w-[14.5rem] text-xs leading-relaxed font-medium text-white/80 sm:text-sm">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-4xl leading-none font-extrabold tracking-tight text-white tabular-nums sm:text-5xl xl:text-[3.5rem]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* 5-card review platform row */}
        <Reveal delay={0.12}>
          <ul className="mt-12 grid grid-cols-1 gap-3.5 min-[460px]:grid-cols-2 sm:mt-16 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {reviewPlatforms.map((platform, idx) => (
              <li
                key={platform.id}
                className={
                  idx === reviewPlatforms.length - 1
                    ? "min-[460px]:col-span-2 md:col-span-1"
                    : undefined
                }
              >
                <div className="flex h-full flex-col items-center justify-between rounded-xl border border-white/14 bg-white/[0.05] px-4 py-5 text-center backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400/45 hover:bg-white/[0.08]">
                  <div className="flex h-8 items-center justify-center">
                    <PlatformWordmark id={platform.id} />
                  </div>

                  <div className="mt-3">
                    <FractionalStars score={platform.score} />
                  </div>

                  <p className="mt-2.5 text-xs font-semibold text-white/80">
                    <span className="text-white">{platform.scoreText}</span>
                    <span className="mx-1.5 text-white/35">|</span>
                    <span>{platform.countText}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
