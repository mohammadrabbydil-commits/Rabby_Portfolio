import { Container } from "@/components/ui/Container";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { profile, socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-ink text-paper/70">
      <Container>
        <div className="flex flex-col gap-6 border-t border-paper/15 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {profile.name}. {profile.location}.
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <ExternalLink href={link.href} className="hover:text-paper">
                    {link.label}
                  </ExternalLink>
                </li>
              ))}
              <li>
                <a
                  href="#top"
                  className="underline decoration-current/25 underline-offset-4 hover:text-paper hover:decoration-current"
                >
                  Back to top
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
