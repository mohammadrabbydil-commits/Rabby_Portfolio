import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { ExternalLink } from "@/components/ui/ExternalLink";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";
import { projects, socialLinks } from "@/data/portfolio";
import type { Project, ProjectLink } from "@/types/portfolio";

const linkLabels: Record<ProjectLink["kind"], string> = {
  live: "Visit live site",
  github: "View on GitHub",
};

function ProjectLinkButton({ link, title }: { link: ProjectLink; title: string }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-ink/20 px-4 py-2 text-sm font-medium transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper"
    >
      {linkLabels[link.kind]}
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      />
      <span className="sr-only">: {title} (opens in a new tab)</span>
    </a>
  );
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal className="grid gap-5 lg:grid-cols-[13rem_1fr] lg:gap-10">
      <div className="flex items-baseline gap-4 font-mono text-sm text-muted lg:flex-col lg:gap-1">
        <span aria-hidden="true" className="text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>{project.year}</span>
        {project.link?.kind === "live" ? (
          <span className="inline-flex items-center gap-1.5 text-ink">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            Live
          </span>
        ) : null}
      </div>

      <div className="max-w-3xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <h3 className="font-display text-3xl leading-tight tracking-tight text-balance sm:text-[2.125rem]">
            {project.title}
          </h3>
          {project.link ? <ProjectLinkButton link={project.link} title={project.title} /> : null}
        </div>

        <p className="mt-3 text-lg leading-relaxed text-pretty text-ink-soft">{project.summary}</p>

        {project.image ? (
          <div className="mt-6 overflow-hidden rounded-sm border border-rule bg-card">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 1024px) 768px, 100vw"
              className="h-auto w-full"
            />
          </div>
        ) : null}

        <ul className="mt-5 space-y-2.5 text-[0.9375rem] text-muted">
          {project.highlights.map((point) => (
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
          items={project.stack}
          label={`Technologies used in ${project.title}`}
          className="mt-6"
        />
      </div>
    </Reveal>
  );
}

export function Projects() {
  const githubProfile = socialLinks.find((link) => link.label === "GitHub");

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Selected work"
      title="Systems I’ve designed, built, and tested."
      intro="From a live lead-generation platform to an AI phone agent handling real customer calls — with automated test suites behind the production systems."
    >
      <ol>
        {projects.map((project, index) => (
          <li
            key={project.title}
            className="border-t border-rule py-12 first:border-t-0 first:pt-0 last:pb-0"
          >
            <Spotlight className="-mx-4 rounded-sm px-4 py-2 sm:-mx-6 sm:px-6">
              <ProjectEntry project={project} index={index} />
            </Spotlight>
          </li>
        ))}
      </ol>
      {githubProfile ? (
        <p className="mt-14 lg:pl-[calc(13rem+2.5rem)]">
          <ExternalLink href={githubProfile.href} className="font-medium">
            More projects on GitHub
          </ExternalLink>
        </p>
      ) : null}
    </Section>
  );
}
