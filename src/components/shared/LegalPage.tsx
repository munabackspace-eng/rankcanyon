import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/shared/PageHero";
import { formatDate } from "@/lib/utils";

type LegalPageProps = {
  title: string;
  path: string;
  updated: string;
  children: ReactNode;
};

/** Shared layout for legal/policy pages. */
export function LegalPage({ title, path, updated, children }: LegalPageProps) {
  return (
    <>
      <PageHero
        title={title}
        description={`Last updated ${formatDate(updated)}`}
        breadcrumbs={[{ name: title, href: path }]}
      />
      <Container size="narrow" className="py-16 sm:py-20">
        <div className="max-w-prose space-y-5 text-lg leading-relaxed text-navy-800 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy-950">
          {children}
        </div>
      </Container>
    </>
  );
}
