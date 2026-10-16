import { Download, Mail, MapPin } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Reveal } from "@/components/ui/Reveal";
import { profile, socialLinks } from "@/data/portfolio";

/**
 * Contact uses email links rather than a form: there is no configured
 * submission backend, and a form that silently drops messages would be worse
 * than none.
 */
export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-ink pt-20 pb-16 text-paper sm:pt-28"
    >
      <Container>
        <div className="grid gap-4 border-t border-paper/40 pt-6 lg:grid-cols-[13rem_1fr] lg:gap-10">
          <p className="font-mono text-xs tracking-[0.18em] text-paper/60 uppercase">
            <span className="text-accent-light">07</span>
            <span aria-hidden="true"> / </span>
            Contact
          </p>

          <Reveal className="max-w-4xl">
            <h2
              id="contact-heading"
              className="font-display text-5xl leading-[1] tracking-tight text-balance sm:text-7xl"
            >
              Let’s build something <em className="text-accent-light italic">reliable.</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-paper/70">
              Recruiters, hiring managers, and teams with an AI, data, or automation problem — email
              is the fastest way to reach me. My résumé has the full details.
            </p>

            <p className="mt-10">
              <a
                href={`mailto:${profile.email}`}
                className="font-display text-3xl [overflow-wrap:anywhere] underline decoration-paper/30 underline-offset-[0.2em] transition-colors hover:text-accent-light hover:decoration-accent-light sm:text-5xl"
              >
                {profile.email}
              </a>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={`mailto:${profile.email}`} variant="inverse">
                <Mail aria-hidden="true" className="size-4" />
                Email me
              </ButtonLink>
              <CopyEmailButton email={profile.email} />
              <ButtonLink
                href={profile.resume.href}
                download={profile.resume.fileName}
                variant="inverse-outline"
                className="py-2"
              >
                <Download aria-hidden="true" className="size-4" />
                Download résumé
                <span className="sr-only">(PDF)</span>
              </ButtonLink>
            </div>

            <div className="mt-14 grid gap-8 border-t border-paper/15 pt-8 sm:grid-cols-[auto_1fr] sm:gap-16">
              <div>
                <h3 className="font-mono text-xs tracking-[0.18em] text-paper/60 uppercase">
                  Based in
                </h3>
                <p className="mt-3 inline-flex items-center gap-2">
                  <MapPin aria-hidden="true" className="size-4 text-accent-light" />
                  {profile.location}
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs tracking-[0.18em] text-paper/60 uppercase">
                  Elsewhere
                </h3>
                <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 sm:flex sm:flex-wrap">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <ExternalLink href={link.href} className="hover:text-accent-light">
                        {link.label}
                      </ExternalLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
