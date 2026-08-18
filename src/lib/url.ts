/**
 * Join a site-root-relative path onto Astro's configured `base`.
 *
 * The site deploys to a project page (`/portfolio-web`), so every internal
 * href and asset src has to carry that prefix. Centralising it here keeps the
 * `.replace(/\/\//g, '/')` guesswork out of the templates.
 *
 * Page routes get a trailing slash because the build emits directory-style
 * output (`/projects/index.html`). Without it GitHub Pages answers every
 * internal link with a 301 to the slashed form. Paths that look like files
 * (anything with an extension) are left alone, and any `?query` or `#hash`
 * is preserved on the end rather than being swallowed into the path.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");

  const suffixAt = path.search(/[?#]/);
  const rawPath = suffixAt === -1 ? path : path.slice(0, suffixAt);
  const suffix = suffixAt === -1 ? "" : path.slice(suffixAt);

  const clean = rawPath.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!clean) return `${base}/${suffix}`;

  const isFile = /\.[a-z0-9]+$/i.test(clean);
  return `${base}/${clean}${isFile ? "" : "/"}${suffix}`;
}

/** Normalised, absolute URL for canonical tags and structured data. */
export function canonicalUrl(pathname: string, origin: URL | undefined): string {
  const withSlash = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return new URL(withSlash, origin ?? "https://arsmorax.github.io").href;
}
