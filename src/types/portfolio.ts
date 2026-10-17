/** Section anchors on the home page. Used by the navigation and section ids. */
export type SectionId = "about" | "experience" | "projects" | "skills" | "education" | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface Photo {
  /** Path under /public, e.g. "/images/profile.png". */
  src: string;
  alt: string;
  /** CSS object-position used when the frame crops the photo, e.g. "50% 25%". */
  objectPosition: string;
}

export interface ResumeFile {
  /** Path under /public, e.g. "/resume/Mohammad_Rabby_Resume.pdf". */
  href: string;
  /** File name suggested to the browser when downloading. */
  fileName: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  location: string;
  email: string;
  /** Phone number: `display` is shown on the page, `tel` is the dialable E.164 form. */
  phone: { display: string; tel: string };
  /** Hero statement, split so the emphasised part can be styled. */
  headline: { lead: string; emphasis: string };
  intro: string;
  /** Used for <meta name="description"> and social sharing. */
  metaDescription: string;
  photo: Photo;
  resume: ResumeFile;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Short handle shown next to the label. */
  handle: string;
  /** Brand whose logo to show when it differs from `label`, e.g. "GitHub". */
  brand?: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  tools: string[];
}

export interface ProjectLink {
  kind: "live" | "github";
  href: string;
}

export interface ProjectImage {
  /** Path under /public, e.g. "/images/projects/lead-gen.png". */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  title: string;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  link?: ProjectLink;
  image?: ProjectImage;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  gpa?: string;
  coursework: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
  /** Platform that delivered the course, e.g. "Coursera". */
  platform?: string;
  /** Completion date as shown on the certificate, e.g. "Aug 2025". */
  date: string;
  /** Four-digit year, used for sorting. */
  year: string;
  /** Path under /public to the certificate PDF, e.g. "/certificates/agile.pdf". */
  file?: string;
  /** Public verification page for the credential. */
  verifyUrl?: string;
}

export interface Achievement {
  title: string;
  detail: string;
}

export interface SpokenLanguage {
  name: string;
  level: string;
}
