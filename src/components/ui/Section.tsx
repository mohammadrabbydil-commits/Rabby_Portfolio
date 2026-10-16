import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types/portfolio";

interface SectionProps {
  id: SectionId;
  /** Two-digit index shown in the section label, e.g. "01". */
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

/**
 * A ruled, editorial page section: label column on the left, heading and
 * content on the right. Every section on the home page uses this layout so the
 * columns line up down the page.
 */
export function Section({ id, index, eyebrow, title, intro, children, className }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={cn("py-20 sm:py-28", className)}>
      <Container>
        <Reveal>
          <div className="grid gap-4 border-t border-ink pt-6 lg:grid-cols-[13rem_1fr] lg:gap-10">
            <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
              <span className="text-accent">{index}</span>
              <span aria-hidden="true"> / </span>
              {eyebrow}
            </p>
            <div className="max-w-3xl">
              <h2
                id={headingId}
                className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl"
              >
                {title}
              </h2>
              {intro ? (
                <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">{intro}</p>
              ) : null}
            </div>
          </div>
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </Container>
    </section>
  );
}
