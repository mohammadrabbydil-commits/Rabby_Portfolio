import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { about } from "@/data/portfolio";

export function About() {
  const [lead, ...rest] = about.paragraphs;

  return (
    <Section id="about" index="01" eyebrow="About" title="Data engineering meets applied AI.">
      <div className="grid gap-12 lg:grid-cols-[13rem_1fr] lg:gap-10">
        <div aria-hidden="true" className="hidden lg:block" />
        <div className="grid gap-14 xl:grid-cols-[1.35fr_1fr] xl:gap-16">
          <Reveal className="space-y-6 text-lg leading-relaxed text-pretty text-ink-soft">
            {lead ? (
              <p className="text-xl leading-relaxed text-ink sm:text-[1.375rem]">{lead}</p>
            ) : null}
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
              What I focus on
            </h3>
            <ol className="mt-5 divide-y divide-rule border-y border-rule">
              {about.focusAreas.map((area, index) => (
                <li key={area.title} className="grid grid-cols-[2.25rem_1fr] gap-2 py-5">
                  <span aria-hidden="true" className="font-mono text-sm text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium">{area.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{area.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
