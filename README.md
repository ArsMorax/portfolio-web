# portfolio-web

Personal portfolio for **Muhammad Budi Aji** — software engineer.
Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com),
deployed as a static site to GitHub Pages.

**Live:** https://arsmorax.github.io/portfolio-web/

---

## Getting started

```sh
npm install
npm run dev        # http://localhost:4321/portfolio-web
```

| Command            | What it does                                        |
| :----------------- | :-------------------------------------------------- |
| `npm run dev`      | Dev server with HMR                                  |
| `npm run build`    | Type-check, then build to `dist/`                    |
| `npm run build:fast` | Build without the type-check pass                  |
| `npm run check`    | `astro check` — TypeScript + template diagnostics     |
| `npm run preview`  | Serve the production build locally                   |
| `npm run og`       | Re-render `design/og.svg` → `public/og.png`          |

`npm run build` runs `astro check` first, so a type error fails the build
rather than shipping.

---

## Editing content

All copy lives in `src/data/` as typed TypeScript. **You should not need to
touch a component to change what the site says.**

| File                     | Owns                                                        |
| :----------------------- | :---------------------------------------------------------- |
| `src/data/site.ts`       | Name, role, email, social links, résumé, availability pill   |
| `src/data/projects.ts`   | Every project — cards, case-study pages, filters, sitemap    |
| `src/data/experience.ts` | The experience timeline on `/about`                          |
| `src/data/skills.ts`     | Skill groups and proficiency tiers                           |
| `src/data/ai.ts`         | AI focus areas and the model comparison                      |

### Adding a project

Append an entry to `projects` in `src/data/projects.ts`. The route
(`/projects/<id>`), the card, the category filter and the sitemap entry are
all generated from it — nothing else to wire up.

The type is enforced, so `astro check` will tell you if a field is missing.
Optional fields degrade gracefully:

- no `image` → the card renders a hairline-grid panel with its index instead
- no `repoUrl` / `liveUrl` → those buttons are simply not rendered
- no `challenges` → the "What was hard" section is omitted

Set `featured: true` to surface a project on the home page (it shows three).

### Proficiency tiers, not percentages

`src/data/skills.ts` marks each skill `production` / `working` / `exploring`.
This is deliberate — percentage bars are unfalsifiable, and readers know it.
Tiers describe evidence: has this shipped, or am I still learning it?

---

## Outstanding TODOs

Search the repo for `TODO(aji)`. As of the last pass:

- `src/data/experience.ts` — `organization` and `period` are unset on the
  professional role. Fill them in and the timeline renders them automatically.
- `src/data/projects.ts` — no project has a `repoUrl` or `liveUrl` yet, and
  the `year` values on the older projects are estimates.
- `src/data/projects.ts` — **`geospatial-mapping` and `model-lab` each carry a
  `VERIFY BEFORE SHARING` block.** Both are written at full confidence from a
  verbal description rather than from source, so some claims are inferred.
  Walk the list above each entry and confirm, correct or cut every line. These
  are the two entries most likely to get probed in an interview.

The CV is intentionally *not* hosted — `site.resumeUrl` is `null`, and the
contact section invites people to ask for it instead. Set `resumeUrl` to a
path under `public/` if you ever want the direct-download button back.

---

## Project structure

```
public/            Static assets served as-is (images, favicon, og.png, robots.txt)
design/og.svg      Source for the social preview image — `npm run og` to re-render
src/
  data/            All site content (see table above)
  lib/url.ts       withBase() — prefixes the GitHub Pages base onto every path
  layouts/         Layout.astro — head, SEO, JSON-LD, scroll-reveal observer
  components/      Presentational components; no hardcoded copy
  pages/
    index.astro          /
    about.astro          /about
    projects/index.astro /projects
    projects/[id].astro  /projects/<id>   (generated per project)
    404.astro
  styles/global.css      Design tokens and component classes
```

### A note on paths

The site deploys to a *project* page, so every URL carries a `/portfolio-web`
prefix. Always build internal links with `withBase()` from `src/lib/url.ts` —
it handles the base prefix, trailing slashes for directory-style routes, and
`?query` / `#hash` suffixes. Hardcoding `/projects` will 404 in production.

---

## Design

Near-black surfaces with a single amber accent (`#e6b450`). Hierarchy comes
from weight, spacing and hairline borders rather than from colour — there is
deliberately only one accent in the palette. Tokens are defined once in the
`@theme` block of `src/styles/global.css`.

Motion is opt-in per element via `data-reveal`, driven by one
`IntersectionObserver` in `Layout.astro`. Elements are only hidden after JS
confirms it is running (`html.js`), so content stays visible if the script
fails, and `prefers-reduced-motion: reduce` reveals everything immediately.

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which type-checks,
builds, and publishes `dist/` to GitHub Pages.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
