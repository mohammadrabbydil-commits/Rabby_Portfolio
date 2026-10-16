import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";
import { experience } from "@/data/portfolio";

export function Experience() {
  if (experience.length === 0) return null;

  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I’ve been working."
      className="bg-paper-deep"
    >
      <ol>
        {experience.map((job) => (
          <li
            key={`${job.organization}-${job.start}`}
            className="border-t border-rule py-10 first:border-t-0 first:pt-0 last:pb-0"
          >
            <Reveal className="grid gap-4 lg:grid-cols-[13rem_1fr] lg:gap-10">
              <p className="font-mono text-sm text-muted">
                {job.start}
                <span aria-hidden="true"> — </span>
                <span className="sr-only"> to </span>
                <span className={job.end === "Present" ? "text-accent" : undefined}>{job.end}</span>
              </p>

              <div className="max-w-3xl">
                <h3 className="font-display text-3xl leading-tight tracking-tight">{job.role}</h3>
                <p className="mt-1 text-muted">
                  {job.organization}
                  <span aria-hidden="true"> · </span>
                  <span className="sr-only">, </span>
                  {job.location}
                </p>

                <ul className="mt-5 space-y-3 text-ink-soft">
                  {job.highlights.map((point) => (
                    <li key={point} className="relative pl-5 leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <TagList
                  items={job.tools}
                  label={`Tools used at ${job.organization}`}
                  className="mt-6"
                />
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
