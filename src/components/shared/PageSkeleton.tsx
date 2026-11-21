import { Container } from "@/components/layout/Container";

/**
 * Skeleton matching the page hero + card grid layout. Used by
 * `loading.tsx` files so client navigations render an instant placeholder.
 */
export function PageSkeleton() {
  return (
    <div aria-busy="true">
      <div className="border-b border-border bg-spotlight pt-[calc(var(--header-height)+3.5rem)] pb-20">
        <Container>
          <div role="status" className="max-w-3xl animate-pulse">
            <span className="sr-only">Loading…</span>
            <div className="h-12 w-full rounded-xl bg-background" />
            <div className="mt-3 h-12 w-2/3 rounded-xl bg-background" />
            <div className="mt-6 h-5 w-5/6 rounded-lg bg-background" />
          </div>
        </Container>
      </div>
      <Container className="grid gap-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="h-56 animate-pulse rounded-2xl bg-card" />
        ))}
      </Container>
    </div>
  );
}
