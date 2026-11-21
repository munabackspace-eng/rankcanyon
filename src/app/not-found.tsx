import type { Metadata } from "next";
import { ArrowRight, Home } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or has moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="relative isolate flex flex-1 items-center overflow-hidden bg-spotlight pt-(--header-height)"
    >
      <Container size="narrow" className="py-24 text-center sm:py-32">
        <p className="text-gradient font-display text-7xl font-extrabold sm:text-8xl">
          404
        </p>
        <h1 className="mt-6 text-3xl font-bold sm:text-5xl">
          This page went off the map
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            <Home aria-hidden="true" />
            Back to Home
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary" size="lg">
            Explore Services
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
