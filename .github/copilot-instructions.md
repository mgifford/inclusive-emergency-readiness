# GitHub Copilot Instructions

Welcome to **Inclusive Emergency Readiness** — a low-bandwidth, high-accessibility "Golden Record" of emergency preparedness information, built for people with disabilities and emergency management professionals.

## Primary Reference Documents

Before making any changes, read these root-level files in order:

1. **[AGENTS.md](../AGENTS.md)** — The authoritative governance document for AI agents and contributors. It defines the project persona, technical mandates, autonomous workflows, and disability-specific alignment requirements. **Start here.**

2. **[ACCESSIBILITY.md](../ACCESSIBILITY.md)** — The project's accessibility statement. Covers the standards we follow (WCAG 2.2 Level AA, EN 301 549, CAN-ASC-6.4, Plain Language/Easy Read), how accessibility is applied, and how to report barriers.

3. **[SUSTAINABILITY.md](../SUSTAINABILITY.md)** — The project's sustainability and resilience statement. Covers the W3C Web Sustainability Guidelines (WSG 1.0), the Crisis Mode ultra-low-bandwidth mirror, payload limits, and energy preservation rules.

## Repository Overview

| Path | Purpose |
|------|---------|
| `framework/` | In-depth guides: Ready-Willing-Able (RWA) scorecard, data-driven readiness, maps, physical-digital intersection, LLM prompts, seniors |
| `_disabilities/` | Per-disability emergency guidance (vision, hearing, cognitive, situational) |
| `_toolkits/` | Ready-to-use toolkits: plain language, multi-platform outreach, digital egress |
| `_templates/` | Alert and content templates |
| `assets/css/` | SCSS stylesheets including dark-mode and print (`@media print`) rules |
| `.github/workflows/` | CI workflows: link-rot guard, accessibility linter |
| `CONTRIBUTING.md` | Contribution guidelines, "Start Now, Improve Always" philosophy |
| `CRISIS_MODE.md` | Crisis Mode: the 5–11 KB, zero-dependency, network-agnostic mirror |

## Key Rules for Every Change

- **Payload limit:** Every page must stay under 500 KB total. Crisis Mode pages must stay under 14 KB (the TCP slow-start threshold); typical Crisis Mode pages are 5–11 KB.
- **Plain language:** Content must target a Grade 6 reading level (Flesch-Kincaid ≤ 7.0). Use active voice and common words.
- **Accessibility first:** All HTML/CSS changes must maintain WCAG 2.2 Level AA. Check colour contrast ratios before changing colours.
- **No tracking:** Do not introduce third-party analytics, tracking pixels, or auto-playing media.
- **Print readiness:** Survival guides must include a `@media print` CSS block for high-contrast, ink-saving output.
- **Alt text:** Every image must have descriptive `alt` text; prefer SVG or CSS alternatives over raster images.
- **Easy Read:** For evacuation, medical, or shelter content, create or update the "Easy Read" version (one idea per line).
- **Framework frontmatter:** New framework pages must include `layout: default`, `title`, `category: framework`, `summary`, `reading_level: Grade 6`, and `last_updated` fields.

## Build & Test

```bash
# Install dependencies
bundle install
npm install

# Serve locally (Jekyll)
bundle exec jekyll serve

# Run accessibility checks (if configured)
npm test
```

## Common Errors & Workarounds

- **Jekyll build fails on missing `_config.yml` key:** Check `_config.yml` for typos; the site uses Jekyll with GitHub Pages defaults.
- **SCSS compile error:** Run `bundle exec jekyll build --verbose` for detailed output; ensure `sassc` gem is installed.
- **Link-rot workflow failures:** The weekly `check-links.yml` workflow pings all URLs in `data/resources.json`. If a URL returns 404/500, the workflow queries the Wayback Machine and updates the link to the Archive.org snapshot.
