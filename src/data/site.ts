/**
 * Single source of truth for identity, links and SEO defaults.
 * Change a value here and it updates everywhere on the site.
 */
export const site = {
  name: "Muhammad Budi Aji",
  shortName: "Budi Aji",
  initials: "BA",
  role: "Software Engineer",
  /** One line. Used in the hero, meta description fallback and JSON-LD. */
  tagline:
    "Software engineer building backend systems and interfaces end to end — and taking language models apart to understand how they reason.",
  location: "Indonesia",
  email: "aji.work.mails@gmail.com",

  /** Deployment target. Must match `site` + `base` in astro.config.mjs. */
  url: "https://arsmorax.github.io/portfolio-web",

  socials: {
    github: "https://github.com/ArsMorax",
    linkedin: "https://www.linkedin.com/in/budi-aji-b7849b372/",
  },

  /**
   * TODO(aji): drop a PDF at `public/budi-aji-cv.pdf` to switch the résumé
   * button on. While this is null the button simply is not rendered.
   */
  resumeUrl: null as string | null,

  /** Open to work / not looking. Drives the status pill in the header. */
  availability: {
    open: true,
    label: "Open to opportunities",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
] as const;
