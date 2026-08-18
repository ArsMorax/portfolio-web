/**
 * TODO(aji): `organization` and `period` are intentionally left undefined —
 * I did not want to invent an employer name or dates. Fill them in and the
 * timeline will render the extra metadata automatically; leave them out and
 * it degrades cleanly to just the role and the work.
 */
export interface Engagement {
  name: string;
  detail: string;
}

export interface Role {
  title: string;
  organization?: string;
  period?: string;
  /** "Professional" roles get the accent marker on the timeline. */
  kind: "Professional" | "Independent";
  summary: string;
  engagements?: Engagement[];
  highlights: string[];
  stack: string[];
}

export const roles: Role[] = [
  {
    title: "Software Engineer",
    // organization: "TODO — company name",
    // period: "TODO — e.g. 2023 — Present",
    kind: "Professional",
    summary:
      "Built and collaborated on multiple large-scale systems in teams of five or more, including software delivered for government institutions. My work spans the full depth of a system rather than a single layer — application logic and backend architecture through to the interfaces, integrations and automation that surround them.",
    engagements: [
      {
        name: "Government institution systems",
        detail:
          "Large-scale software delivered for public-sector institutions, built collaboratively across multi-person engineering teams.",
      },
      {
        name: "QGIS geospatial platform",
        detail:
          "A recent engagement built around QGIS used as the on-screen mapping tool operators work against, with the application and backend layers feeding it.",
      },
    ],
    highlights: [
      "Delivered multiple 5+ person, large-scale projects end to end",
      "Contributed to software systems built for government institutions",
      "Designed application logic and backend architecture, not just endpoints",
      "Built the interfaces, integrations and automation workflows around core systems",
      "Worked across C#, Node.js, React, TypeScript and Python depending on what the system needed",
    ],
    stack: [
      "C#",
      "Node.js",
      "React.js",
      "TypeScript",
      "Python",
      "SQL",
      "REST APIs",
      "QGIS",
    ],
  },
  {
    title: "Independent Projects & AI Research",
    period: "Ongoing",
    kind: "Independent",
    summary:
      "Alongside client work I build my own projects, deliberately choosing stacks I have not had the chance to use professionally. A growing share of that time goes to open-source language models — evaluating them, comparing them against each other, and trying to understand how they actually reason rather than just what they output.",
    highlights: [
      "Shipped full-stack projects across Laravel, the T3 Stack, Vue, Go and Python",
      "Run open-source models such as Qwen head to head to map their real strengths",
      "Experiment with prompting strategies, agentic workflows and fine-tuning",
      "Design evaluation metrics that measure consistency, not just one good answer",
      "Pick a new stack per project on purpose, to keep widening the range",
    ],
    stack: [
      "Qwen",
      "Python",
      "TypeScript",
      "Laravel",
      "Vue.js",
      "Go",
      "Playwright",
      "Astro",
    ],
  },
];
