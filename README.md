# Mohammad Rabby — Portfolio

Personal portfolio for **Mohammad Rabby, AI Engineer & Data Engineer** (Dhaka, Bangladesh).
Built with Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4, Motion and
Lucide icons.

All content comes from Mohammad's résumé and lives in one typed file:
[`src/data/portfolio.ts`](src/data/portfolio.ts).

---

## Quick start

Requires **Node.js 20.9 or newer**.

```bash
npm install        # install dependencies (creates package-lock.json)
npm run dev        # start the dev server at http://localhost:3000
```

### Verify before you deploy

```bash
npm run typecheck  # TypeScript, strict mode
npm run lint       # ESLint (Next.js core-web-vitals + TypeScript rules)
npm run build      # production build
npm run check      # all three in sequence
npm run start      # serve the production build locally
npm run format     # format code and sort Tailwind classes with Prettier
```

---

## Common edits

### Change your photo

1. Put the new image in `public/images/` (PNG, JPG or WebP).
2. Either **name it `profile.png`** to replace the current one, or update `profile.photo.src`
   in `src/data/portfolio.ts` to the new file name (e.g. `"/images/profile.jpg"`).
3. If the crop isn't right, adjust `profile.photo.objectPosition` — e.g. `"50% 20%"` shows more
   of the top of the image, `"50% 50%"` centers it.

The frame crops automatically to a 4:5 portrait, so any size or aspect ratio works. For a crisp
result on high-resolution screens, use an image **at least 800 px wide** — the current photo is
300 × 281 px, so it looks slightly soft on Retina displays.

If the old photo still shows in `npm run dev`, restart the dev server and hard-refresh the browser
(Next.js caches optimized images by URL).

### Change the downloadable résumé

Replace `public/resume/Mohammad_Rabby_Resume.pdf` with the new PDF, keeping the same file name.
Every download button (navigation, hero, mobile menu, contact) links to it.

To use a different file name, update `profile.resume.href` and `profile.resume.fileName` in
`src/data/portfolio.ts`.

### Edit content

Everything lives in `src/data/portfolio.ts`:

| What                       | Export                            |
| -------------------------- | --------------------------------- |
| Name, title, intro, email  | `profile`                         |
| GitHub, LinkedIn, etc.     | `socialLinks`                     |
| Hero numbers               | `highlights`                      |
| About text and focus areas | `about`                           |
| Jobs                       | `experience`                      |
| Projects                   | `projects`                        |
| Skill categories           | `skillGroups`                     |
| Degree, certifications     | `education`, `certifications`     |
| Awards, spoken languages   | `achievements`, `spokenLanguages` |

**Adding a project:** add an object to `projects`. `link` is optional; use
`{ kind: "live", href }` or `{ kind: "github", href }`. To show a screenshot, put the image in
`public/images/projects/` and add
`image: { src: "/images/projects/name.png", alt: "…", width: 1600, height: 1000 }`.

TypeScript will flag any missing or misspelled fields when you run `npm run typecheck`.

---

## Project structure

```text
public/
  images/profile.png              Profile photo (swap freely, see above)
  resume/Mohammad_Rabby_Resume.pdf  Downloadable résumé
src/
  app/
    layout.tsx                    Fonts, metadata, skip link, navbar, footer
    page.tsx                      Home page sections + schema.org Person data
    globals.css                   Tailwind import and design tokens (colors, fonts)
    not-found.tsx                 404 page
    error.tsx                     Error boundary with "Try again"
    opengraph-image.tsx           Social sharing card (generated at build)
    icon.svg                      Favicon
  components/
    layout/                       Navbar (client), Footer
    sections/                     Hero, About, Experience, Projects, Skills,
                                  Education, Recognition, Contact
    ui/                           Container, Section, ButtonLink, Tag, ExternalLink,
                                  Reveal (client), CopyEmailButton (client), CurrentYear (client)
  data/portfolio.ts               All site content
  types/portfolio.ts              Types for the content
  lib/utils.ts                    cn() and site-URL helper
```

Components are Server Components by default. Only four need the browser: `Navbar` (mobile menu,
active-section highlight), `Reveal` (scroll animations), `CopyEmailButton` (clipboard) and
`CurrentYear`.

## Design notes

- **Palette:** warm paper (`#f5f3ee`), ink (`#121417`) and one vermilion accent (`#a63a1c`). All
  text pairings meet WCAG AA; measured ratios are noted in `globals.css`.
- **Type:** Instrument Serif for display, Geist for body text, Geist Mono for labels and dates —
  loaded with `next/font`, so they are self-hosted at build time.
- **Motion:** the hero uses a short CSS entrance so it never waits for JavaScript; sections below
  the fold fade in with Motion. Both respect `prefers-reduced-motion`.
- **Contact:** email link plus a copy-to-clipboard button. There is deliberately no contact form,
  because no submission backend is configured and a form that silently discarded messages would
  be worse than none.
- **Phone number:** shown in the downloadable PDF but not printed on the page, to limit scraping.

## Deployment

### Vercel (simplest)

1. Push this folder to a GitHub repository.
2. Import it at [vercel.com/new](https://vercel.com/new) — the defaults work.
3. Once you have a domain, add `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.com`) under
   **Settings → Environment Variables** and redeploy.

### Any Node host

```bash
npm install && npm run build && npm run start
```

### Site URL

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` once the site has a real
domain. It is used for the canonical URL, absolute social-sharing image URLs and the `url` field
in the structured data. Until it is set, those are left out rather than guessed. (Next.js may
print a `metadataBase` warning during the build until then; that is expected.)
