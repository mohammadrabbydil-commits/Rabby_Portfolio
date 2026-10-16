import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Recognition } from "@/components/sections/Recognition";
import { Skills } from "@/components/sections/Skills";
import { education, experience, profile, skillGroups, socialLinks } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/utils";

/** schema.org Person data built only from facts on the résumé. */
function buildPersonJsonLd() {
  const siteUrl = getSiteUrl();
  const currentJob = experience.find((job) => job.end === "Present");
  const school = education[0];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    ...(currentJob ? { worksFor: { "@type": "Organization", name: currentJob.organization } } : {}),
    ...(school ? { alumniOf: { "@type": "CollegeOrUniversity", name: school.institution } } : {}),
    knowsAbout: skillGroups.map((group) => group.category),
    sameAs: socialLinks.map((link) => link.href),
    ...(siteUrl ? { url: siteUrl.href, image: new URL(profile.photo.src, siteUrl).href } : {}),
  };
}

export default function HomePage() {
  const jsonLd = JSON.stringify(buildPersonJsonLd()).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Recognition />
      <Contact />
    </>
  );
}
