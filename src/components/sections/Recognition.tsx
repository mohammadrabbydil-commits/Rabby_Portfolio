import { Award } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { achievements, spokenLanguages } from "@/data/portfolio";

/** Achievements and spoken languages. Not in the main navigation. */
export function Recognition() {
  if (achievements.length === 0 && spokenLanguages.length === 0) return null;

  return (
    <section aria-labelledby="recognition-heading" className="bg-paper-deep py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 border-t border-ink pt-6 lg:grid-cols-[13rem_1fr] lg:gap-10">
          <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
            <span className="text-accent">06</span>
            <span aria-hidden="true"> / </span>
            Recognition
          </p>

          <div className="grid gap-14 xl:grid-cols-[1.4fr_1fr] xl:gap-16">
            <Reveal>
              <h2
                id="recognition-heading"
                className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl"
              >
                Achievements.
              </h2>
              <ul className="mt-8 space-y-6">
                {achievements.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-rule bg-paper text-accent"
                    >
                      <Award className="size-4" />
                    </span>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-1 leading-relaxed text-muted">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            {spokenLanguages.length > 0 ? (
              <Reveal delay={0.1}>
                <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
                  Languages
                </h3>
                <dl className="mt-5 divide-y divide-rule border-y border-rule">
                  {spokenLanguages.map((language) => (
                    <div
                      key={language.name}
                      className="flex items-baseline justify-between gap-6 py-4"
                    >
                      <dt className="font-display text-2xl">{language.name}</dt>
                      <dd className="text-right text-sm text-muted">{language.level}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
