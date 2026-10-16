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
          <Reveal className="grid gap-4 lg:grid-cols-[13rem_1fr] lg:gap-10">
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase lg:pt-1">
              Certifications
            </h3>
            <ul className="grid max-w-3xl gap-3 sm:grid-cols-2">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-col justify-between gap-4 rounded-sm border border-rule bg-card p-5"
                >
                  <p className="leading-snug font-medium">{cert.name}</p>
                  <p className="flex items-center justify-between font-mono text-xs text-muted">
                    <span>{cert.issuer ?? ""}</span>
                    <span>{cert.year}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}
