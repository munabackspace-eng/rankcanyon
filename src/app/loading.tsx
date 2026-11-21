import { PageSkeleton } from "@/components/shared/PageSkeleton";

/** Root route-level loading UI (rendered outside the marketing <main>). */
export default function Loading() {
  return (
    <main id="main-content" className="flex-1">
      <PageSkeleton />
    </main>
  );
}
