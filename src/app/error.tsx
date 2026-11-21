"use client"; // Error boundaries must be Client Components

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Button, ButtonLink } from "@/components/ui/Button";

export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    // Hook up an error reporting service (Sentry, etc.) here.
    console.error(error);
  }, [error]);

  const digest =
    error instanceof Error && "digest" in error
      ? (error as Error & { digest?: string }).digest
      : undefined;

  return (
    <main
      id="main-content"
      className="relative isolate flex flex-1 items-center bg-spotlight pt-(--header-height)"
    >
      <Container size="narrow" className="py-24 text-center sm:py-32">
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl border border-border bg-sheen text-navy-950 shadow-card">
          <AlertTriangle aria-hidden="true" className="size-6" />
        </span>
        <h1 className="mt-6 text-3xl font-bold sm:text-5xl">Something went wrong</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          An unexpected error occurred while loading this page. Please try again — if the
          problem persists, contact our team.
        </p>
        {digest && (
          <p className="mt-3 font-mono text-xs text-muted">Error ID: {digest}</p>
        )}
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" onClick={() => retry()}>
            <RefreshCw aria-hidden="true" />
            Try Again
          </Button>
          <ButtonLink href="/" variant="secondary" size="lg">
            <Home aria-hidden="true" />
            Back to Home
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
