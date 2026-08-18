/**
 * ─────────────────────────────────────────────────────────────────────────
 * TODO(aji) — before you share this link, fill in the fields marked below:
 *
 *   1. `repoUrl` / `liveUrl` are undefined on every project. Any project
 *      that gets a URL automatically grows a "Code" / "Live" button on its
 *      card and detail page. Projects without one render fine, just quieter.
 *   2. `geospatial-mapping` and `model-lab` are new entries written from
 *      what you described rather than from the code. Everything in them is
 *      deliberately kept at the level of detail you gave me — go in and add
 *      the specifics (client type, stack versions, real numbers).
 *   3. `year` values are best guesses on the older projects. Correct them.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type ProjectCategory = "professional" | "fullstack" | "ai" | "tool";

export type ProjectContext = "Professional" | "Personal";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectChallenge {
  problem: string;
  approach: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: ProjectCategory;
  context: ProjectContext;
  /** Featured projects surface on the home page, in array order. */
  featured: boolean;
  /** One or two sentences. Card copy and meta description. */
  summary: string;
  /** Paragraphs for the detail page. */
  overview: string[];
  role?: string;
  team?: string;
  stack: string[];
  metrics: ProjectMetric[];
  features: string[];
  /** What was actually hard. This is the part people read closely. */
  challenges?: ProjectChallenge[];
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  professional: "Professional",
  fullstack: "Full-stack",
  ai: "AI / Research",
  tool: "Tooling",
};

export const projects: Project[] = [
  {
    id: "geospatial-mapping",
    title: "Geospatial Mapping Platform",
    subtitle: "QGIS as an on-screen operational mapping surface",
    year: "2025",
    category: "professional",
    context: "Professional",
    featured: true,
    summary:
      "A delivered client project built around QGIS, used as the on-screen mapping tool that operators work against. I worked across the application logic and backend that feed and surround the map.",
    overview: [
      "This is the most recent project I shipped as part of a delivery team. The brief centred on QGIS — rather than treating it as a desktop GIS tool used off to the side, we brought it in as the on-screen mapping surface that operators actually work against day to day.",
      "That framing changes the engineering problem. The map stops being a report you generate and becomes a live view that has to stay in step with the rest of the system: the records behind each feature, the state of a workflow, and whatever the operator did thirty seconds ago. Most of my work sat in the layer that keeps those things consistent.",
      "Working on a geospatial system was a genuinely different shape of problem from the CRUD-and-dashboard work I had done before. Coordinate systems, layer management and the sheer size of spatial datasets all impose constraints you do not hit in an ordinary web app, and getting comfortable with them was the most valuable part of the project for me.",
    ],
    role: "Software Engineer — application logic, backend and integration",
    team: "5+ person delivery team",
    stack: ["QGIS", "Python", "Spatial data", "REST APIs", "SQL"],
    metrics: [
      { label: "Context", value: "Client delivery" },
      { label: "Team", value: "5+ engineers" },
      { label: "Domain", value: "Geospatial" },
    ],
    features: [
      "QGIS integrated as the primary on-screen mapping surface",
      "Application logic and backend services behind the map view",
      "Spatial data handling and layer management",
      "Integration between mapping output and the surrounding system",
      "Delivered collaboratively in a 5+ person team",
    ],
    challenges: [
      {
        problem:
          "Geospatial work carries constraints that ordinary web development never surfaces — projections, layer state and dataset sizes that do not fit the usual request/response assumptions.",
        approach:
          "I treated the GIS layer as its own subsystem with a clear boundary, rather than trying to make it behave like another CRUD resource, and learned the domain properly instead of working around it.",
      },
      {
        problem:
          "A map used as a live operational surface has to agree with the records behind it. Stale or divergent state is worse than a slow map.",
        approach:
          "Kept the flow of truth one-directional and explicit, so the map renders from the same source the rest of the application reads rather than maintaining a parallel copy.",
      },
    ],
  },
  {
    id: "luxura",
    title: "Luxura",
    subtitle: "Full-scale e-commerce platform",
    year: "2025",
    category: "fullstack",
    context: "Personal",
    featured: true,
    summary:
      "A complete e-commerce platform on Laravel and React, wired together with Inertia.js — 10 Eloquent models, role-based access, catalogue, cart, checkout, orders, wishlists and reviews.",
    overview: [
      "Luxura is the largest thing I have built end to end on my own. Laravel handles the backend, React handles the interface, and Inertia.js sits between them so the app feels like an SPA without giving up Laravel's server-side model.",
      "The data layer is where most of the design work went: 10 Eloquent models across 12 migrations, with relationships tying users, products, categories, orders, wishlists and reviews together. Authentication runs on Laravel Breeze with Sanctum, and role-based access splits the admin surface from the customer one.",
      "On the frontend I used Radix UI so the dialogs, menus and form controls are accessible by default rather than by afterthought, and Framer Motion for transitions. Product pages carry image galleries, the cart reflects changes immediately, and checkout runs the full path from address entry through to order confirmation.",
    ],
    role: "Sole developer — architecture, backend, frontend",
    stack: [
      "Laravel 12",
      "PHP 8.2",
      "React 18",
      "TypeScript",
      "Inertia.js",
      "Tailwind CSS",
      "MySQL",
      "Sanctum",
      "Radix UI",
      "Framer Motion",
    ],
    metrics: [
      { label: "Models", value: "10" },
      { label: "Migrations", value: "12" },
      { label: "Controllers", value: "8+" },
    ],
    features: [
      "Authentication with role-based access control",
      "Product catalogue with categories and image galleries",
      "Shopping cart with immediate state updates",
      "Checkout and order management flow",
      "Wishlist and product review systems",
      "12 database migrations with seeders",
    ],
    challenges: [
      {
        problem:
          "Inertia sits in an unusual position: it is neither a REST API nor traditional server rendering, so the usual answers about where state should live do not apply cleanly.",
        approach:
          "Settled on Laravel owning all authoritative state and React owning only interaction state. Anything that survives a refresh comes from the server; anything that does not stays local.",
      },
      {
        problem:
          "Ten models with overlapping relationships makes it very easy to write queries that quietly fan out into hundreds of round trips.",
        approach:
          "Leaned on eager loading at the controller boundary and kept relationship definitions strict, so the cost of a page is visible in one place rather than scattered through the views.",
      },
    ],
    image: "/images/luxura_img.jpeg",
  },
  {
    id: "model-lab",
    title: "Model Lab",
    subtitle: "Evaluating and comparing open-source LLMs",
    year: "2025",
    category: "ai",
    context: "Personal",
    featured: true,
    summary:
      "An ongoing personal practice of running open-source models like Qwen head to head — probing prompting strategies, agentic workflows, fine-tuning and evaluation metrics to work out where each model genuinely earns its place.",
    overview: [
      "This is less a single repository than a standing habit. I keep a set of open-source models — Qwen and others — on hand and put them through the same problems to see how their reasoning diverges, not just whether their answers match.",
      "The questions I keep returning to are behavioural rather than functional: how a model learns, where its reasoning holds and where it quietly stops holding, how it adapts under different framings, and what actually improves it on a specific hard domain. That means spending time on prompting strategies, agentic workflow design, fine-tuning, and — most importantly — evaluation metrics, because without those you are just collecting anecdotes.",
      "The comparison work is the part I enjoy most. Putting two systems on the same task surfaces things that neither one reveals alone. Claude Code and Codex are the pair I have spent the most time with: Claude Code's strengths show on large or computationally heavy work, while Codex can genuinely surprise me in how it analyses and reasons its way toward an implementation. The interesting signal is not which one wins, it is where they diverge.",
    ],
    role: "Independent research and experimentation",
    stack: [
      "Qwen",
      "Open-source LLMs",
      "Python",
      "Fine-tuning",
      "Prompt engineering",
      "Agentic workflows",
      "Evaluation metrics",
    ],
    metrics: [
      { label: "Focus", value: "Model behaviour" },
      { label: "Method", value: "Head-to-head" },
      { label: "Status", value: "Ongoing" },
    ],
    features: [
      "Head-to-head evaluation of open-source models on shared tasks",
      "Prompting strategy experiments across framings",
      "Agentic workflow design and failure analysis",
      "Fine-tuning experiments on narrow, difficult domains",
      "Evaluation metrics for consistency and reliability, not just accuracy",
      "Documented comparison of coding agents (Claude Code vs. Codex)",
    ],
    challenges: [
      {
        problem:
          "Model comparison collapses into vibes very quickly. Two answers can both look plausible while one is reliably better on the axis you actually care about.",
        approach:
          "Push everything through explicit evaluation criteria defined before the run, and treat consistency across repeated attempts as a first-class metric rather than a footnote.",
      },
      {
        problem:
          "A single strong result says almost nothing — models are non-deterministic, and the impressive outputs are the ones you remember.",
        approach:
          "Judge on repeated runs and on the shape of the failures, which turns out to be far more diagnostic of a model's actual reasoning than any individual success.",
      },
    ],
  },
  {
    id: "t3-ecommerce",
    title: "T3 E-Commerce",
    subtitle: "End-to-end type-safe online store",
    year: "2025",
    category: "fullstack",
    context: "Personal",
    featured: false,
    summary:
      "A full e-commerce application on the T3 Stack, built specifically to find out what end-to-end type safety feels like when the types actually reach all the way from database to component.",
    overview: [
      "I built this to properly experience end-to-end type safety rather than read about it, and a full e-commerce app seemed like the right amount of surface area to test the claim.",
      "tRPC handles the API layer, so every call is typed from server to client with no code generation step in between. Prisma covers the database, and NextAuth provides authentication over both credentials and OAuth. The schema spans products, categories, carts, orders and users.",
      "The frontend runs on Next.js 15 and React 19, with Radix UI for accessible dialogs and dropdowns, Framer Motion for transitions, and Zod for runtime validation at the form boundary. A seed script populates demo products so the app is immediately usable after a clone.",
    ],
    role: "Sole developer",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "tRPC",
      "Prisma",
      "NextAuth",
      "MySQL",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Zod",
    ],
    metrics: [
      { label: "Stack", value: "T3" },
      { label: "API", value: "tRPC" },
      { label: "Codegen", value: "None" },
    ],
    features: [
      "End-to-end type safety through tRPC",
      "Authentication over credentials and OAuth",
      "Product browsing with categories and featured items",
      "Cart sheet with immediate state management",
      "Complete checkout-to-order flow",
      "Prisma seed script for demo data",
    ],
    challenges: [
      {
        problem:
          "Static types stop at the network edge. Anything arriving from a form or a third party is still unknown at runtime, however good the compile-time story looks.",
        approach:
          "Used Zod at every external boundary so runtime validation and the static types are derived from one schema instead of drifting apart over time.",
      },
    ],
    image: "/images/t3_img.jpeg",
  },
  {
    id: "fintrack",
    title: "FinTrack",
    subtitle: "Personal finance dashboard",
    year: "2024",
    category: "fullstack",
    context: "Personal",
    featured: false,
    summary:
      "A monorepo finance dashboard — Vue 3 frontend, Express backend, JWT auth, transaction CRUD with search and filtering, and interactive charts over monthly trends and category breakdowns.",
    overview: [
      "FinTrack is a personal finance dashboard structured as a monorepo, with a Vue 3 frontend and an Express backend. The goal was a complete full-stack application with real authentication and real data visualisation rather than a toy.",
      "The backend uses JWT for authentication and LokiJS as an in-memory store, exposing a REST API with full CRUD over transactions plus dedicated analytics endpoints. New registrations are seeded with 60 demo transactions so the dashboard has something meaningful in it from the first login.",
      "The frontend uses Pinia for state, Chart.js for the bar and doughnut charts, and Tailwind for the interface. Transactions can be searched and filtered, and the analytics views cover monthly spending trends and category breakdowns. Zod validates input on both sides of the wire.",
    ],
    role: "Sole developer",
    stack: [
      "Vue.js 3",
      "TypeScript",
      "Pinia",
      "Chart.js",
      "Tailwind CSS",
      "Express.js",
      "JWT",
      "LokiJS",
      "Zod",
      "Axios",
    ],
    metrics: [
      { label: "Structure", value: "Monorepo" },
      { label: "API", value: "REST" },
      { label: "Seeded", value: "60 txns" },
    ],
    features: [
      "JWT authentication with register and login flow",
      "Transaction CRUD with search and filtering",
      "Interactive bar and doughnut charts",
      "Monthly trend and category analytics",
      "Auto-seeded demo data on registration",
      "Shared validation schema across client and server",
    ],
    challenges: [
      {
        problem:
          "An empty dashboard is a useless dashboard. A new user logging in to blank charts cannot tell whether the product works.",
        approach:
          "Seeded 60 representative transactions at registration, so every analytics view is meaningful from the very first session.",
      },
    ],
    image: "/images/vue_img.jpeg",
  },
  {
    id: "storehub",
    title: "StoreHub",
    subtitle: "Product inventory manager in Go",
    year: "2024",
    category: "fullstack",
    context: "Personal",
    featured: false,
    summary:
      "An inventory management application written in Go against MySQL, with server-rendered views, dashboard statistics, search filtering, full CRUD and multi-currency formatting.",
    overview: [
      "StoreHub was my way into Go for web work. The backend is a Go HTTP server talking to MySQL, and the frontend is server-rendered HTML with Tailwind and plain JavaScript — no framework, deliberately.",
      "The dashboard reports total products, total stock and total inventory value. Below it sits a product list with search filtering and complete CRUD, including confirmation modals on destructive actions.",
      "The piece I enjoyed most was multi-currency formatting: prices render in both Rupiah and USD, which turned out to be a better lesson in locale handling than I expected going in.",
    ],
    role: "Sole developer",
    stack: ["Go", "MySQL", "HTML/CSS", "Tailwind CSS", "JavaScript"],
    metrics: [
      { label: "Backend", value: "Go" },
      { label: "Rendering", value: "Server-side" },
      { label: "Framework", value: "None" },
    ],
    features: [
      "Go HTTP server with MySQL integration",
      "Dashboard with aggregate statistics",
      "Product search and filtering",
      "Full CRUD with confirmation modals",
      "Multi-currency (IDR / USD) formatting",
      "Server-rendered views, no frontend framework",
    ],
    challenges: [
      {
        problem:
          "Coming from framework-heavy stacks, Go's standard library gives you far less scaffolding and expects you to make the structural decisions yourself.",
        approach:
          "Took that as the point of the exercise and built the routing and handler layout by hand, which made the request lifecycle much more legible than it had been to me before.",
      },
    ],
    image: "/images/go_img.jpeg",
  },
  {
    id: "manhwa-scraper",
    title: "Manhwa Scraper",
    subtitle: "Browser-automation CLI for offline reading",
    year: "2024",
    category: "tool",
    context: "Personal",
    featured: false,
    summary:
      "A 600+ line Python CLI that drives headless Chromium through Playwright to batch-download chapters, then runs every image through an upscaling and sharpening pipeline.",
    overview: [
      "This started as a tool for myself — I read a lot of manhwa and wanted a better way to keep chapters for offline reading. It grew past 600 lines of Python and taught me most of what I know about browser automation.",
      "Playwright drives a headless Chromium instance, with a custom user agent and resource blocking to keep the session lightweight and stable. The tool can browse popular titles, let you pick a series, and batch-download across a flexible chapter range.",
      "Every downloaded image then goes through a Pillow pipeline that upscales low-resolution panels and applies sharpening, so the archived result is actually pleasant to read. The whole thing runs behind an interactive CLI with progress reporting and retry logic for unreliable connections.",
    ],
    role: "Sole developer",
    stack: ["Python", "Playwright", "Pillow", "Requests", "Regex"],
    metrics: [
      { label: "Size", value: "600+ LOC" },
      { label: "Driver", value: "Playwright" },
      { label: "Pipeline", value: "Pillow" },
    ],
    features: [
      "Headless Chromium automation via Playwright",
      "Custom user agent and resource blocking",
      "Image upscaling and sharpening pipeline",
      "Flexible chapter range selection",
      "Interactive CLI with progress reporting",
      "Retry logic and error handling for flaky connections",
    ],
    challenges: [
      {
        problem:
          "Network requests across a long batch download fail intermittently, and a naive script loses the whole run to a single timeout.",
        approach:
          "Built retry logic and per-chapter error handling in from the start, so one bad response costs a retry rather than the entire session.",
      },
    ],
    image: "/images/scrapper_img.jpeg",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
