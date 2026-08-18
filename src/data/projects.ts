/**
 * ─────────────────────────────────────────────────────────────────────────
 * TODO(aji) — before you share this link, fill in the fields marked below:
 *
 *   1. `repoUrl` / `liveUrl` are undefined on every project. Any project
 *      that gets a URL automatically grows a "Code" / "Live" button on its
 *      card and detail page. Projects without one render fine, just quieter.
 *   2. `geospatial-mapping` and `model-lab` are written at full confidence
 *      from what you described rather than from the code, so parts of them
 *      are inferred. Each has a VERIFY block above it listing exactly which
 *      claims to confirm, correct or cut. Do that pass before you send this
 *      link anywhere — these are the two entries most likely to get probed
 *      in an interview, and the write-up is stronger than my evidence for it.
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
  /**
   * VERIFY BEFORE SHARING — written up at full confidence from your
   * description, so some of this is inferred rather than known. Each of these
   * is a claim you would need to defend in an interview; keep the ones that
   * are true and cut or correct the rest:
   *   - "operators work against it daily" — is it really daily operational use?
   *   - vector + raster layers, CRS handling, feature-to-record binding
   *   - the metric values below (team size is yours; the other two are framing)
   *   - `year: "2025"` and the role description
   */
  {
    id: "geospatial-mapping",
    title: "Geospatial Mapping Platform",
    subtitle: "QGIS as a live operational mapping surface",
    year: "2025",
    category: "professional",
    context: "Professional",
    featured: true,
    summary:
      "A delivered client platform built around QGIS — not as a desktop tool used off to the side, but as the on-screen mapping surface operators work against, with the application logic, backend services and spatial data layer behind it keeping map and records in lockstep.",
    overview: [
      "This was the most recent platform I shipped as part of a delivery team, and the brief put QGIS at the centre of it. The distinction that mattered was how QGIS was used: not as a desktop GIS tool someone opens to produce a map, but as the on-screen mapping surface the product is operated through.",
      "That reframing changes the engineering problem completely. A map that is generated is a report — you build it, you export it, you are done. A map that is operated is a live view, and it has to agree at every moment with the records behind it, the state of the workflow it belongs to, and whatever the operator did seconds ago. Most of my work sat in exactly that layer: binding map features to domain records, keeping layer state coherent, and making sure the flow of truth ran one way so the map could never quietly diverge from the database.",
      "The spatial side imposed constraints that ordinary web work never surfaces. Coordinate reference systems have to be handled deliberately rather than assumed. Vector and raster layers have very different performance characteristics and have to be managed as such. And spatial datasets are large enough that the naive request/response assumptions you carry over from CRUD development stop holding — you end up thinking about what gets loaded, when, and at what resolution.",
      "Working on it end to end was the most valuable thing I have done for my own range. I came in from application and backend work and had to learn a genuinely different domain properly rather than route around it, which is the part I would want to repeat.",
    ],
    role: "Software Engineer — application logic, backend services and integration",
    team: "5+ person delivery team",
    stack: [
      "QGIS",
      "Python",
      "Spatial data",
      "Vector & raster layers",
      "REST APIs",
      "SQL",
    ],
    metrics: [
      { label: "Team", value: "5+" },
      { label: "Surface", value: "QGIS" },
      { label: "Context", value: "Client delivery" },
    ],
    features: [
      "QGIS integrated as the primary operator-facing mapping surface",
      "Map features bound to their underlying domain records",
      "Layer management across vector and raster sources",
      "Coordinate reference system handling as an explicit concern",
      "Backend services and application logic driving the map view",
      "Delivered collaboratively within a 5+ person engineering team",
    ],
    challenges: [
      {
        problem:
          "A map used as a live operational surface has to agree with the records behind it. A stale or divergent map is worse than a slow one, because the operator cannot tell it is wrong.",
        approach:
          "Kept the flow of truth one-directional and explicit: the map renders from the same source the rest of the application reads, rather than maintaining a parallel copy that has to be reconciled. Divergence stops being a bug class you chase and becomes structurally impossible.",
      },
      {
        problem:
          "Geospatial work carries constraints web development never surfaces — projections, layer state, and dataset sizes that break the assumptions you carry over from CRUD work.",
        approach:
          "Treated the GIS layer as its own subsystem with a clear boundary instead of forcing it to behave like another resource, and learned the domain properly rather than working around it.",
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
  /**
   * VERIFY BEFORE SHARING — this describes your practice at full confidence.
   * The method claims below are the ones to check against what you actually
   * do, because they are the ones an interviewer will ask you to walk through:
   *   - fixed task suites reused across models
   *   - rubric defined before the run rather than after
   *   - repeated runs, with variance treated as a result
   *   - a written failure taxonomy
   * If any of those is aspirational rather than current, either start doing it
   * or soften the wording — this is the section most likely to get probed.
   */
  {
    id: "model-lab",
    title: "Model Lab",
    subtitle: "A standing bench for evaluating and comparing LLMs",
    year: "2025",
    category: "ai",
    context: "Personal",
    featured: true,
    summary:
      "An ongoing evaluation practice: open-source models like Qwen run against fixed task suites, scored on criteria fixed before the run, judged across repeated attempts — so what comes out is a result rather than an anecdote.",
    overview: [
      "This is less a single repository than a standing habit with a method attached. I keep a set of open-source models — Qwen among others — and put them through the same problems, looking at how their reasoning diverges rather than only whether their final answers agree.",
      "The questions I keep returning to are behavioural rather than functional: how a model learns, where its reasoning holds and where it quietly stops holding, how it adapts under different framings, and what genuinely improves it on a specific hard domain. That pulls in prompting strategy, agentic workflow design, and fine-tuning — but the part that makes any of it mean something is the evaluation layer. Without criteria fixed before the run, model comparison collapses into taste.",
      "So the discipline is deliberately boring. Task suites stay fixed so results are comparable across models and across time. Scoring criteria get written down before anything runs, not chosen afterwards to fit a result I liked. Everything is judged across repeated attempts, because these systems are non-deterministic and a single strong output proves close to nothing. And I pay as much attention to the shape of the failures as to the successes — failure modes turn out to be far more diagnostic of how a model actually reasons than any individual win.",
      "The head-to-head work is the part I enjoy most. Putting two systems on the same task surfaces things neither reveals alone. Claude Code and Codex are the pair I have spent the most time with: Claude Code's strengths show on large or computationally heavy work, while Codex can genuinely surprise me in how it analyses a problem and reasons its way toward an implementation. The useful signal is not which one wins — it is precisely where they diverge, because that boundary is what tells you what each is for.",
    ],
    role: "Independent research, evaluation design and experimentation",
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
      { label: "Models", value: "Qwen +" },
      { label: "Method", value: "Head-to-head" },
      { label: "Judged on", value: "Repeat runs" },
    ],
    features: [
      "Fixed task suites, reused across models so results stay comparable",
      "Scoring criteria written before the run, not chosen to fit the result",
      "Repeated attempts per task — run-to-run variance treated as a finding",
      "Failure taxonomy, because failure modes are the more diagnostic signal",
      "Prompting strategy and agentic workflow experiments",
      "Fine-tuning experiments on narrow, difficult domains",
      "Documented head-to-head comparison of coding agents (Claude Code vs. Codex)",
    ],
    challenges: [
      {
        problem:
          "Model comparison collapses into vibes almost immediately. Two answers can both look plausible while one is reliably better on the axis you actually care about — and you will not notice which.",
        approach:
          "Fix the evaluation criteria before the run and treat consistency across repeated attempts as a first-class metric rather than a footnote. If the rubric is written afterwards, it is written to match whichever output impressed you.",
      },
      {
        problem:
          "A single strong result says almost nothing. These systems are non-deterministic, and the impressive outputs are exactly the ones you remember and the mediocre ones exactly the ones you forget.",
        approach:
          "Judge across repeated runs, and read the distribution rather than the best sample. The shape of the failures turns out to be far more diagnostic of a model's real reasoning than any individual success.",
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
