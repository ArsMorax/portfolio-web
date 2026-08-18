/**
 * Proficiency is expressed as a tier, not a percentage.
 *
 * Percentage bars are unfalsifiable — nobody can tell you what the difference
 * between 82% and 88% Go actually is, and readers know it. Tiers describe
 * evidence instead: has this shipped, or am I still learning it?
 */
export type Tier = "production" | "working" | "exploring";

export const tierMeta: Record<Tier, { label: string; description: string }> = {
  production: {
    label: "Production",
    description: "Shipped in delivered systems",
  },
  working: {
    label: "Working",
    description: "Comfortable — built real projects with it",
  },
  exploring: {
    label: "Exploring",
    description: "Actively learning",
  },
};

export interface Skill {
  name: string;
  tier: Tier;
}

export interface SkillGroup {
  title: string;
  blurb: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    blurb: "What I reach for depends on the system, not on habit.",
    skills: [
      { name: "TypeScript / JavaScript", tier: "production" },
      { name: "C#", tier: "production" },
      { name: "Python", tier: "production" },
      { name: "SQL", tier: "production" },
      { name: "PHP", tier: "working" },
      { name: "Go", tier: "working" },
    ],
  },
  {
    title: "Frontend",
    blurb: "Interfaces built on top of systems I also wrote the backend for.",
    skills: [
      { name: "React.js", tier: "production" },
      { name: "Tailwind CSS", tier: "production" },
      { name: "Vue.js", tier: "working" },
      { name: "Next.js", tier: "working" },
      { name: "Astro", tier: "working" },
      { name: "Inertia.js", tier: "working" },
    ],
  },
  {
    title: "Backend & Data",
    blurb: "Where most of my thinking goes — architecture before endpoints.",
    skills: [
      { name: "Node.js / Express", tier: "production" },
      { name: "REST API design", tier: "production" },
      { name: "Database design", tier: "production" },
      { name: "MySQL", tier: "production" },
      { name: "Laravel", tier: "working" },
      { name: "Prisma", tier: "working" },
      { name: "tRPC", tier: "working" },
    ],
  },
  {
    title: "AI & Automation",
    blurb: "The area I spend my own time on, deliberately.",
    skills: [
      { name: "LLM evaluation", tier: "working" },
      { name: "Prompting strategies", tier: "working" },
      { name: "Agentic workflows", tier: "working" },
      { name: "Playwright automation", tier: "working" },
      { name: "Fine-tuning", tier: "exploring" },
      { name: "Docker", tier: "exploring" },
    ],
  },
];

/** Shown in the hero strip — the shortest honest summary of the stack. */
export const heroStack = [
  "C#",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "SQL",
  "QGIS",
  "LLMs",
];
