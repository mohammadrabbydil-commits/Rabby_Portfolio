import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="flex min-h-[80dvh] items-center pt-24 pb-16"
    >
      <Container>
        <div className="border-t border-ink pt-6">
          <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
            <span className="text-accent">404</span>
            <span aria-hidden="true"> / </span>
            Not found
          </p>
          <h1
            id="not-found-heading"
            className="mt-6 max-w-3xl font-display text-5xl leading-[1] tracking-tight text-balance sm:text-7xl"
          >
            This page doesn’t <em className="text-accent italic">exist.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            The link may be broken, or the page may have moved. Everything lives on the home page.
          </p>
          <Link
            href="/"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Back to the home page
          </Link>
        </div>
      </Container>
    </section>
  );
}
