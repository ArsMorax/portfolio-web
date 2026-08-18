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
   * Deliberately not hosting the CV. While this is null the site invites
   * people to ask for it instead, which keeps the document off a public URL
   * and turns the request into a conversation. Drop a PDF in `public/` and
   * set the path here if you ever want the direct-download button back.
   */
  resumeUrl: null as string | null,
  resumeOnRequest: "CV available on request — just ask.",

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
