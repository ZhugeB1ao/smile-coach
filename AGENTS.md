<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **smile-coach** (52 symbols, 110 relationships, 1 execution flows).

> Index stale? Run `node .gitnexus/run.cjs analyze --index-only` from the project root — it auto-selects an available runner. No `.gitnexus/run.cjs` yet? Bootstrap with `npx`, `bunx`, or `pnpm dlx` — e.g. `bunx gitnexus@latest analyze` (npm 11 npx crash; #1939).

## Always Do

- **MUST run impact analysis before editing.** Use `impact({target: "symbolName", direction: "upstream"})` (MCP) or `node .gitnexus/run.cjs impact "symbolName" --direction upstream --repo .` (CLI fallback); report callers, processes, and risk. Never substitute grep for graph analysis.
- **MUST analyze graph changes before committing.** Use `detect_changes({scope: "all"})` (MCP) or `node .gitnexus/run.cjs detect-changes --scope all --repo .` (CLI fallback). `partial: true` or `truncated: true` is not a clean check — a zero means unseen, not unaffected; re-run it. For regression review: `detect_changes({scope: "compare", base_ref: "main"})` or `node .gitnexus/run.cjs detect-changes --scope compare --base-ref "main" --repo .`.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- **MUST treat `risk: UNKNOWN` as unresolved, not as low.** An empty caller set is not evidence the symbol is unused — it can also mean the callers are not resolvable by the index (plain-object property access, dynamic dispatch, cross-language calls). `impact` pairs `UNKNOWN` with a `riskNote` saying so. Confirm with a text search before treating the symbol as safe to change or delete; do not proceed on the strength of a zero.
- When exploring unfamiliar code, use `query({search_query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `context({name: "symbolName"})`.
- For security review, `explain({target: "fileOrSymbol"})` lists taint findings (source→sink flows; needs `analyze --pdg`).

## Never Do

- NEVER edit a function, class, or method before MCP/CLI impact analysis.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis, and never read `UNKNOWN` as an all-clear — it means the walk could not answer, which is the one verdict that requires confirming by other means.
- NEVER rename symbols with find-and-replace — use `rename` which understands the call graph.
- NEVER commit before MCP/CLI graph change analysis.

## Resources

| Resource | Use for |
| --- | --- |
| `gitnexus://repo/smile-coach/context` | Codebase overview, check index freshness |
| `gitnexus://repo/smile-coach/clusters` | All functional areas |
| `gitnexus://repo/smile-coach/processes` | All execution flows |
| `gitnexus://repo/smile-coach/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
| --- | --- |
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->

# SEO Optimization Guide for a One-Page React Landing Page

This document provides a set of lightweight, highly effective technical solutions and On-Page structures specifically tailored for a **One-Page Landing Page** built with React (Vite/CRA).

---

## 1. Fix the "Empty HTML File" Flaw (Pre-rendering)

By default, a Client-Side Rendered (CSR) React app outputs an almost empty `index.html` file. Search engine bots have to wait for JavaScript to load and execute before seeing your content, which harms your SEO ranking. Since you only have a single page, you should generate static HTML at build time.

* **If using Vite:** Install `vite-react-ssg` or configure a basic prerender script. When you run `npm run build`, it crawls your interface and injects the actual text and structure directly into `dist/index.html`.
* **Alternative Solution:** Use a service like **Prerender.io** (free tier available for small sites). It detects search engine crawlers and serves them a fully pre-rendered static HTML snapshot automatically.

---

## 2. Configure Hardcoded Meta Tags Directly in `index.html`

Because your landing page does not switch between different URLs or views, you **do not need** heavy runtime libraries like `react-helmet-async`. Simply open the `index.html` file at the root of your project and manually fill in these standard SEO tags:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Title and Description -->
  <title>Product/Service Name - The Biggest Benefit the User Gets</title>
  <meta name="description" content="A compelling summary under 160 characters containing your target focus keyword to maximize your click-through rate (CTR)." />
  
  <!-- Canonical Tag to prevent duplicate content penalties from Ad campaigns (FB/Google Ads) -->
  <link rel="canonical" href="https://yourdomain.com" />

  <!-- Open Graph / Facebook (Ensures beautiful rich previews when shared on Social Media) -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Catchy title for social media sharing" />
  <meta property="og:description" content="Engaging summary for social media previews" />
  <meta property="og:image" content="https://yourdomain.comthumbnail-share.jpg" />
</head>
```

---

## 3. Structure the Scrolling Flow Using Semantic HTML

Organize your React components into a logical hierarchy using meaningful HTML tags. Make sure there is **exactly one `<h1>` tag** on the entire page.

```jsx
function LandingPage() {
  return (
    <>
      {/* SECTION 1: Hero Section (Top of the page) */}
      <header> 
        {/* The single H1 tag containing your primary focus keyword */}
        <h1>The Ultimate Sales Management Solution for Small Businesses</h1>
        <button>Get Started Now</button>
      </header>

      <main>
        {/* SECTION 2: Key Features / Benefits */}
        <section id="features">
          <h2>Our Core Features</h2> {/* Use H2 for main section titles */}
          <div>
            <h3>Automated Reporting</h3> {/* Use H3 for sub-features or points */}
            <p>A detailed description highlighting how this feature solves a user pain point...</p>
          </div>
        </section>

        {/* SECTION 3: Social Proof (Testimonials) */}
        <section id="testimonials">
          <h2>What Our Customers Say</h2>
          {/* Always add descriptive alt attributes containing secondary keywords */}
          <img src="user-avatar.webp" alt="Review from customer John Doe about our service" />
        </section>

        {/* SECTION 4: Frequently Asked Questions (FAQ) */}
        <section id="faq">
          <h2>Frequently Asked Questions</h2>
          {/* Place your FAQ Accordion items here */}
        </section>
      </main>

      <footer>
        <p>© 2026 Your Brand Name. All rights reserved.</p>
      </footer>
    </>
  );
}
```

---

## 4. Boost Loading Speed (Optimize Core Web Vitals)

On a single-page site, all content lives on one page, meaning you must keep the initial JavaScript bundle as light as possible to score well on Largest Contentful Paint (LCP).

* **Lazy Load Below-the-Fold Components:** Sections that are hidden when the page first loads (like *Testimonials* or the *FAQ* at the bottom) shouldn't block the initial render. Use `React.lazy()` and `Suspense`:

  ```jsx
  import React, { Suspense } from 'react';
  const FAQSection = React.lazy(() => import('./components/FAQSection'));

  function App() {
    return (
      <div>
        {/* Critical top content loads instantly */}
        <HeroSection />
        
        {/* Non-critical bottom content defers loading */}
        <Suspense fallback={<div>Loading elements...</div>}>
          <FAQSection />
        </Suspense>
      </div>
    );
  }
  ```

* **Optimize Images:** Convert all generic images (`.png`/`.jpg`) into next-gen formats like `.webp` or `.avif`. Add the `loading="lazy"` attribute to every image located outside the initial viewport.

---

## 5. Deploy `robots.txt` and `sitemap.xml` Manually

Since your app contains exactly one URL, you do not need automated code scripts to build your sitemap. Write these two files by hand and drop them into the `public/` directory of your React project (Vite will move them to the root folder automatically upon building):

### File: `public/robots.txt`
```text
User-agent: *
Allow: /
Sitemap: https://yourdomain.comsitemap.xml
```

### File: `public/sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://sitemaps.org">
   <url>
      <loc>https://yourdomain.com</loc>
      <lastmod>2026-09-29</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
   </url>
</urlset>
```

---
