# Accessibility Statement

> **Summary:** This project meets WCAG 2.2 Level AA. All emergency guides use plain language and work offline. If you find an accessibility barrier, [open an issue](https://github.com/mgifford/inclusive-emergency-readiness/issues) with the label `accessibility-barrier`. We respond within 24 hours.

## What This Means for You

Emergency information must reach everyone — not just people on fast connections with perfect vision and no stress.

This project ensures that:

- People using screen readers can access all content
- Pages load on slow or failing networks
- Language is simple enough to understand under stress
- Content prints clearly for emergency binders
- Multi-platform delivery does not depend on voice or audio alone

## Standards We Follow

We align with four frameworks:

| Standard | What it covers | Why it matters |
|----------|---------------|----------------|
| **[WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/) Level AA** | Web accessibility rules | Screen readers and assistive tools work on every page |
| **[EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_302000/301549/03.02.01_60/en_301549v030201p.pdf)** | European ICT accessibility standard | Supports international implementations |
| **[CAN-ASC-6.4](https://accessible.canada.ca/creating-accessibility-standards/can-asc-64-emergency-measures)** | Canadian emergency measures | Tested against real disaster scenarios |
| **[Plain Language](https://guides.18f.org/content-guide/our-approach/plain-language/) & [Easy Read](https://autisticadvocacy.org/wp-content/uploads/2021/07/One-Idea-Per-Line.pdf)** | Reading level and layout | Understandable under trauma and stress |

We aim for **WCAG 2.2 Level AAA** for cognitive accessibility and contrast. Both are critical when people face high stress.

## How We Apply Accessibility

**One idea per line**
Critical survival instructions follow Easy Read protocols. One action. One line. Easier to follow under stress.

**Works offline and in print**
All content is optimized for printing and for Progressive Web App (PWA) offline access. Use it without internet.

**Tactile map support**
We include [TMAP](https://lighthouse-sf.org/tmap/)-compatible descriptions so blind users can navigate physical spaces.

**Multi-platform delivery**
We avoid voice-only systems. Content distributes via SMS, Mastodon, and Bluesky so Deaf users are not left out.

## Known Limitations

Some linked third-party resources (such as legacy government PDFs) may not be fully accessible.

When we find these gaps:

1. We note them openly
2. We link to accessible versions where available
3. We provide plain-language summaries as an alternative

See [AGENTS.md](./AGENTS.md) for how we handle broken links and inaccessible external resources.

## Report an Accessibility Barrier

Found something that could prevent someone from getting emergency information?

1. [Open a GitHub issue](https://github.com/mgifford/inclusive-emergency-readiness/issues) with the label `accessibility-barrier`
2. Describe the barrier and the emergency context — for example: "cannot read the evacuation map with a screen reader"
3. We triage these issues within 24 hours

Your report helps keep this guide life-saving for everyone.

---
*Adapted from the [ACCESSIBILITY.md template](https://mgifford.github.io/ACCESSIBILITY.md).*
