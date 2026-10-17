# Mohammad Rabby — Portfolio

Personal portfolio of **Mohammad Rabby**, AI Engineer & Data Engineer based in Dhaka, Bangladesh.

**Live site:** <https://rabby-portfolio-gules.vercel.app>

Built with Next.js 16 (App Router), React 19, TypeScript in strict mode, Tailwind CSS v4, Motion
and Lucide. Every piece of content lives in one typed data file, so updating the site never means
touching component code.

---

## Features

- **Single-page layout** with sections for About, Experience, Projects, Skills, Education,
  Certifications, Recognition and Contact, plus a sticky navigation bar that highlights the section
  in view and a mobile menu that closes with <kbd>Esc</kbd>.
- **Certificates with proof.** Ten certificates open in an in-page PDF viewer, can be downloaded,
  and link to their public verification pages. Certifications can be filtered by year.
- **Interactive touches:** reading-progress bar, count-up statistics, a portrait that tilts toward
  the pointer, and a soft spotlight that follows the cursor over project entries. All motion
  respects `prefers-reduced-motion`, and the pointer effects are mouse-only.
- **Brand logos** for GitHub, LinkedIn, LeetCode and HackerRank profile links.
- **Contact options:** email link, copy-to-clipboard button, tap-to-call phone link and a
  downloadable résumé. There is deliberately no contact form: with no submission backend, a form
  that silently dropped messages would be worse than none.
- **Search and sharing:** per-site canonical URL, generated Open Graph image, `sitemap.xml`,
  `robots.txt`, favicon, and schema.org `Person` structured data built from the same content file.
- **Accessibility:** skip-to-content link, semantic landmarks and headings, visible focus styles,
  labelled controls, and screen-reader hints on links that open in a new tab. Text colour pairings
  were checked against WCAG AA contrast (ratios are recorded in `src/app/globals.css`).
- **Visitor analytics** via Vercel Analytics (activates once enabled in the Vercel dashboard).

## Tech stack

| Area      | Choice                                                                             |
| --------- | ---------------------------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack), React 19                                       |
| Language  | TypeScript, strict mode                                                            |
| Styling   | Tailwind CSS v4 with design tokens in `globals.css`                                |
| Motion    | Motion (`motion/react`) for scroll and pointer effects, CSS for the hero entrance  |
| Icons     | Lucide for interface icons, `react-icons` for brand logos                          |
| Fonts     | Instrument Serif, Geist and Geist Mono via `next/font` (self-hosted at build time) |
| Quality   | ESLint (Next.js core-web-vitals + TypeScript rules), Prettier with Tailwind plugin |
| Hosting   | Vercel, deploying automatically from the `main` branch                             |

---

## Getting started

Requires **Node.js 20.9 or newer**.

```bash
git clone https://github.com/mohammadrabbydil-commits/Rabby_Portfolio.git
cd Rabby_Portfolio
npm install
npm run dev        # http://localhost:3000
```

### Scripts

| Command                | What it does                                                    |
| ---------------------- | --------------------------------------------------------------- |
| `npm run dev`          | Start the development server                                    |
| `npm run build`        | Create a production build                                       |
| `npm run start`        | Serve the production build locally                              |
| `npm run typecheck`    | Type-check with `tsc --noEmit`                                  |
| `npm run lint`         | Lint with ESLint                                                |
| `npm run check`        | Typecheck, lint and build in sequence — run this before pushing |
| `npm run format`       | Format everything with Prettier and sort Tailwind classes       |
| `npm run format:check` | Verify formatting without changing files                        |

### Environment variables

Copy `.env.example` to `.env.local` for local use. On Vercel, add the variable under
**Settings → Environment Variables** instead. `.env*` files are git-ignored, except `.env.example`.

| Variable               | Required | Purpose                                                                                                                                                                                        |
| ---------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | No       | Public site URL with no trailing slash, e.g. `https://example.com`. Used for the canonical link, absolute Open Graph URLs, `sitemap.xml`, `robots.txt` and structured data. Left out if unset. |

Next.js prints a `metadataBase` warning during local builds while this is unset; that is expected.

---

## Updating content

All content is in [`src/data/portfolio.ts`](src/data/portfolio.ts). TypeScript flags any missing
or misspelled field when you run `npm run typecheck`.

| What                        | Export                            |
| --------------------------- | --------------------------------- |
| Name, title, intro, contact | `profile`                         |
| Profile links (with logos)  | `socialLinks`                     |
| Hero statistics             | `highlights`                      |
| About text and focus areas  | `about`                           |
| Jobs                        | `experience`                      |
| Projects                    | `projects`                        |
| Skill categories            | `skillGroups`                     |
| Degree and coursework       | `education`                       |
| Certifications              | `certifications`                  |
| Awards and spoken languages | `achievements`, `spokenLanguages` |

### Add a project

Add an object to `projects`. `link` is optional and can be `{ kind: "live", href }` or
`{ kind: "github", href }`. To show a screenshot, put the image in `public/images/projects/` and add
`image: { src: "/images/projects/name.png", alt: "…", width: 1600, height: 1000 }`.

### Add a certificate

1. Save the PDF in `public/certificates/` with a descriptive, lowercase file name.
2. Add an entry to `certifications` with `name`, `issuer`, `date`, `year`, `file`
   (e.g. `"/certificates/my-course.pdf"`) and, if the issuer offers one, `verifyUrl`. Entries
   without a `file` still appear, just without the View and PDF buttons.

### Change the photo or résumé

- **Photo:** replace `public/images/profile.png`, or point `profile.photo.src` at another file. Any
  size works, but use at least 800 px wide for a crisp result on high-resolution screens. Tune the
  crop with `profile.photo.objectPosition`.
- **Résumé:** replace `public/resume/Mohammad_Rabby_Resume.pdf`, keeping the file name. Every
  download button points to it.
- **Phone number:** edit `profile.phone`. To hide it, delete the field and its two uses in
  `src/components/sections/Contact.tsx`.

---

## Project structure

```text
public/
  certificates/           Certificate PDFs shown in the viewer
  images/profile.png      Profile photo
  resume/                 Downloadable résumé
src/
  app/
    layout.tsx            Fonts, metadata, analytics, skip link, navbar, footer
    page.tsx              Home page sections and schema.org Person data
    globals.css           Tailwind import and design tokens
    sitemap.ts, robots.ts Search-engine files (need NEXT_PUBLIC_SITE_URL)
    opengraph-image.tsx   Social sharing card, generated at build
    icon.svg              Favicon
    not-found.tsx         Custom 404 page
    error.tsx             Error boundary with "Try again"
  components/
    layout/               Navbar (client), Footer
    sections/             Hero, About, Experience, Projects, Skills, Education,
                          Certificates (client), Recognition, Contact
    ui/                   Layout and interaction primitives (see below)
  data/portfolio.ts       All site content
  types/portfolio.ts      Types for the content
  lib/utils.ts            cn() and the site-URL helper
```

Components are Server Components by default. Only those that need the browser are Client
Components: the navbar, certificates section, and the `ui` helpers that handle scroll, pointer and
clipboard behaviour (`Reveal`, `ScrollProgress`, `AnimatedNumber`, `TiltFrame`, `Spotlight`,
`CopyEmailButton`, `CurrentYear`).

## Design notes

- **Palette:** warm paper (`#f5f3ee`), ink (`#121417`) and a single vermilion accent (`#a63a1c`),
  chosen to sit well beside a black-and-white portrait.
- **Type:** Instrument Serif for display, Geist for body text, Geist Mono for labels and dates.
- **Motion:** the hero uses a short CSS entrance so it never waits on JavaScript; sections below
  the fold fade in with Motion.
- **Light theme only.** There is no dark-mode toggle yet.

---

## Deployment

The site is deployed on **Vercel**, connected to this repository, so every push to `main` builds
and deploys automatically.

```text
edit → npm run check → git commit → git push
```

To deploy your own copy: import the repository at [vercel.com/new](https://vercel.com/new), accept
the detected Next.js defaults, then add `NEXT_PUBLIC_SITE_URL` for Production and redeploy so it
takes effect. To use a custom domain, add it under **Settings → Domains**, update
`NEXT_PUBLIC_SITE_URL` to match, and redeploy.

Any Node host also works:

```bash
npm install && npm run build && npm run start
```

---

## Contact

**Mohammad Rabby** — AI Engineer & Data Engineer · Dhaka, Bangladesh
[Email](mailto:mdrabbyu70@gmail.com) · [GitHub](https://github.com/rabbyece10) ·
[LinkedIn](https://www.linkedin.com/in/mohammad-rabby-6801aa1ba/)

All content on the site, including the photo, résumé and certificates, belongs to Mohammad Rabby.
The code is shared for reference; please don't reuse the personal content.
