import { PageSkeleton } from "@/components/shared/PageSkeleton";

/**
 * Suspense boundary for the dynamic segment: `params` is URL data, so client
 * navigations show this placeholder instantly while the prerendered page loads.
 */
export default function Loading() {
  return <PageSkeleton />;
}
