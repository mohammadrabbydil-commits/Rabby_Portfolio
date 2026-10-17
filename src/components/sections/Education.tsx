import { Certificates } from "@/components/sections/Certificates";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { certifications, education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education" title="Education & certifications.">
      <div className="space-y-16">
        {education.map((item) => (
          <Reveal key={item.institution} className="grid gap-4 lg:grid-cols-[13rem_1fr] lg:gap-10">
            <p className="font-mono text-sm text-muted">
              {item.start}
              <span aria-hidden="true"> — </span>
              <span className="sr-only"> to </span>
              {item.end}
            </p>
            <div className="max-w-3xl">
              <h3 className="font-display text-3xl leading-tight tracking-tight">
                {item.institution}
              </h3>
              <p className="mt-1 text-ink-soft">{item.degree}</p>
              <p className="mt-1 text-sm text-muted">
                {item.location}
                {item.gpa ? (
                  <>
                    <span aria-hidden="true"> · </span>
                    <span className="sr-only">, </span>
                    GPA {item.gpa}
                  </>
                ) : null}
              </p>
              {item.coursework.length > 0 ? (
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  <span className="font-medium text-ink">Relevant coursework: </span>
                  {item.coursework.join(", ")}.
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}

        {certifications.length > 0 ? (
          <Reveal>
            <Certificates />
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}
