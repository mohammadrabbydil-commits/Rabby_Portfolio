import { ArrowDown, Download, MapPin } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { highlights, profile, socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * The hero uses a CSS entrance animation (not Motion) so the headline and
 * photo are server-rendered visible and never wait on JavaScript to appear.
 */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pt-28 pb-4 sm:pt-36 sm:pb-8">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="animate-rise">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-[0.18em] text-muted uppercase">
              <span className="text-accent">{profile.title}</span>
              <span aria-hidden="true" className="hidden h-px w-6 bg-rule sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="size-3.5" />
                {profile.location}
              </span>
            </p>

            <h1
              id="hero-heading"
              className="mt-6 font-display text-[3.25rem] leading-[0.95] tracking-tight sm:text-7xl lg:text-[6.25rem]"
            >
              {profile.name}
            </h1>

            <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-balance text-ink-soft sm:text-[2rem]">
              {profile.headline.lead}{" "}
              <em className="text-accent italic">{profile.headline.emphasis}</em>
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
              {profile.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#projects">
                View my work
                <ArrowDown aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Contact me
              </ButtonLink>
              <ButtonLink
                href={profile.resume.href}
                download={profile.resume.fileName}
                variant="secondary"
              >
                <Download aria-hidden="true" className="size-4" />
                Download résumé
                <span className="sr-only">(PDF)</span>
              </ButtonLink>
            </div>

            <ul
              aria-label="Profiles"
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted"
            >
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <ExternalLink href={link.href} className="hover:text-ink">
                    {link.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>

          <figure className="mx-auto w-full max-w-[18rem] animate-rise [animation-delay:120ms] sm:max-w-[20rem] lg:mx-0 lg:w-[20rem]">
            <div className="rounded-sm border border-rule bg-card p-3 shadow-[0_1px_0_rgba(18,20,23,0.04),0_24px_48px_-28px_rgba(18,20,23,0.35)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <Image
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                  fill
                  sizes="(min-width: 640px) 320px, 288px"
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover"
                  style={{ objectPosition: profile.photo.objectPosition }}
                />
              </div>
            </div>
            <figcaption className="mt-3 flex justify-between font-mono text-[0.6875rem] tracking-[0.14em] text-muted uppercase">
              <span>Fig. 01</span>
              <span>{profile.name}</span>
            </figcaption>
          </figure>
        </div>

        <dl className="mt-16 grid animate-rise grid-cols-2 border-t border-ink [animation-delay:240ms] sm:mt-24 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "flex flex-col-reverse justify-end py-6",
                index % 2 === 1
                  ? "border-l border-rule pl-4 sm:pl-6 lg:pr-6"
                  : "pr-4 sm:pr-6 lg:border-l lg:border-rule lg:pl-6 lg:first:border-l-0 lg:first:pl-0",
              )}
            >
              <dt className="mt-3 max-w-[16rem] text-sm leading-snug text-muted">{item.label}</dt>
              <dd className="font-display text-4xl leading-none tracking-tight sm:text-5xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
