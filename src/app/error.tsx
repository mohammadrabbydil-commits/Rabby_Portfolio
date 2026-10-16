"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Container } from "@/components/ui/Container";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      aria-labelledby="error-heading"
      className="flex min-h-[80dvh] items-center pt-24 pb-16"
    >
      <Container>
        <div className="border-t border-ink pt-6">
          <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
            <span className="text-accent">Error</span>
          </p>
          <h1
            id="error-heading"
            className="mt-6 max-w-3xl font-display text-5xl leading-[1] tracking-tight text-balance sm:text-7xl"
          >
            Something went wrong.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            The page hit an unexpected error. Try again, or head back to the home page.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              Home page
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
