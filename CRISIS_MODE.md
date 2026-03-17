---
layout: default
title: "Crisis Mode"
summary: "Ultra-low-bandwidth support built into the main site. Pages load on 2G, satellite, and congested networks."
reading_level: "Grade 6"
last_updated: 2026-03-17
---

# Crisis Mode Documentation

## Overview

**Low-bandwidth support** is built directly into the main site rather than maintained as a
separate set of pages. The site uses the CSS `prefers-reduced-data` media query and a matching
JavaScript check to automatically strip non-essential elements when the user's browser or OS
signals a preference for reduced data usage.

Users can also enable **Low Data Mode** manually using the accessibility toggle in the site header.

## Design Philosophy: "Degrade Gracefully"

We follow a **"Degrade Gracefully"** philosophy: stripping away aesthetics automatically when
bandwidth is constrained, so a person with one bar of signal has the same access as someone on
fiber.

**Information is infrastructure.** The site is **network-agnostic**: it degrades gracefully
when cell towers are congested or damaged.

### The Conditional Resilience Layer

Low-data support implements a **Conditional Resilience Layer** aligned with Web Sustainability
Guidelines (WSG 1.0). This ensures life-saving information loads on 2G networks where standard
web overhead causes timeouts and failures.

**Performance vs. Survival:** Most websites prioritize appearance. Low Data Mode prioritizes
reach. Every byte removed is another person who can access critical information when
infrastructure is stressed.

## How It Works

### CSS: `@media (prefers-reduced-data: reduce)`

> **Browser support note:** `prefers-reduced-data` is an experimental media feature with
> limited browser adoption (primarily available in some mobile browsers behind a flag as of
> 2025). The CSS rules are forward-looking — they will activate automatically as browsers adopt
> the feature. In the meantime, **manual Low Data Mode** (via the header toggle) is the
> primary mechanism for users who need reduced-data rendering.

When the user's browser reports the `prefers-reduced-data: reduce` preference, the stylesheet
automatically:

- Hides the decorative logo image (site title text remains)
- Removes background images and box shadows
- Simplifies gradient backgrounds
- Hides supplementary footer columns (reducing DOM size)

### JavaScript: auto-detect and respect preference

`assets/js/mode-toggle.js` checks `window.matchMedia('(prefers-reduced-data: reduce)')` on
page load and, if matched, adds the `low-data` class to `<body>`. This class is also applied
when a user manually enables Low Data Mode via the header toggle. It disables background images,
decorative borders, and custom fonts.

The Service Worker (for offline use) is skipped when `prefers-reduced-data` is active, saving
an extra network round-trip.

### Page Weight Indicator

A small inline script in `_layouts/default.html` reads
`performance.getEntriesByType('resource')` after the page loads and displays the total
transferred kilobytes as a fixed badge in the bottom-right corner. This gives authors and testers
immediate feedback on page weight without needing external tools.

### Manual Override

Users can still toggle Low Data Mode manually via the header accessibility controls regardless
of their OS/browser setting.

## The Problem

During disasters and emergencies:
- Cell towers become overloaded with traffic
- Satellite links experience high latency (500-700ms per round-trip)
- 2G may be the only available network (50-250 Kbps)
- Battery life is critical
- Every kilobyte and every round-trip matters

**Standard web pages:**
- Average size: 2-3MB
- Requires: 10-30 seconds on 2G
- External requests: 50-100+ resources
- Result: Timeouts, failed loads, drained batteries

## The Solution: The 14KB Rule

**TCP Slow-Start:** The internet's transport protocol (TCP) uses a congestion control mechanism
called "slow-start":
- First packet: Limited to ~14KB (10 TCP segments × 1460 bytes)
- Each round-trip: Window doubles (if no packet loss)
- On congested/damaged networks: Packet loss forces restart

**Design Principle:**
> Keep each page under 14KB where possible so it loads in a single round-trip on stressed networks.

## Technical Architecture

### Supplementary Crisis Pages

The site still includes Markdown-based supplementary pages for low-bandwidth use:

| Page | Description |
|------|-------------|
| `/crisis.html` | Landing page with quick access links |
| `/crisis-templates.html` | Emergency alert templates |
| `/crisis-disabilities.html` | Disability considerations |

These pages use the `crisis` layout which inlines all CSS and has zero external requests,
zero JavaScript, and zero images.

**Note:** These pages are kept as a lightweight fallback. The main site's built-in
`prefers-reduced-data` support is the primary bandwidth-saving mechanism.



### Zero Dependencies

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Crisis Mode - Emergency Information</title>
  <style>
    /* All CSS inlined - minified for size - ~1.7KB */
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:sans-serif;line-height:1.6;color:#000;background:#fff}
  </style>
</head>
<body>
  <!-- Pure semantic HTML -->
  <!-- No JavaScript -->
  <!-- No images -->
  <!-- System fonts only -->
</body>
</html>
```

### Design Constraints

**CSS:**
- Inline only (no external files)
- Minified (removed whitespace)
- Essential styles only
- System fonts only (no web fonts)
- No images or background images
- High contrast black/white

**HTML:**
- Semantic HTML5 structure
- No decorative elements
- Text-only content
- Unicode characters instead of images
- Minimal markup

**JavaScript:**
- None - Zero bytes

**Images:**
- None - Zero bytes

**Fonts:**
- System fonts only (sans-serif)

## Performance Metrics

### Payload Reduction

| Metric | Full Site | Crisis Mode | Reduction |
|--------|-----------|-------------|-----------|
| Page weight | ~500KB | 5-11KB | 98% |
| CSS | 18KB external | 3KB inline | 83% |
| JavaScript | 9KB | 0KB | 100% |
| Images | 676KB | 0KB | 100% |
| External requests | 10+ | 0 | 100% |

### Network Performance

**2G Network (100 Kbps, 500ms latency):**
- Full site: 30-60 seconds (often fails)
- Crisis mode: 1-2 seconds (single round-trip)

**Satellite (50ms latency, 1 Mbps):**
- Full site: 5-10 seconds (multiple round-trips)
- Crisis mode: <1 second (single round-trip)

**Congested 4G (packet loss):**
- Full site: Variable, frequent failures
- Crisis mode: Reliable (fits in initial window)

## Accessibility

Crisis Mode maintains **WCAG 2.2 Level AA** compliance:

### Visual
- ✅ High contrast (black text on white background)
- ✅ Minimum 18px base font size
- ✅ No reliance on color alone
- ✅ Clear visual hierarchy

### Screen Readers
- ✅ Semantic HTML5 structure
- ✅ Proper heading hierarchy
- ✅ Skip links for keyboard navigation
- ✅ ARIA landmarks (banner, main, navigation, contentinfo)

### Cognitive
- ✅ Plain language (grade 6 reading level)
- ✅ Simple layouts
- ✅ Consistent navigation
- ✅ Clear calls to action

### Print
- ✅ Print-optimized styles
- ✅ No color dependency
- ✅ Clear text hierarchy
- ✅ Page break controls

## Content Strategy

### Priority 1: Life-Safety Information
- Evacuation procedures
- Shelter-in-place instructions
- Medical emergency guidance
- Weather warnings

### Priority 2: Accessibility Requirements
- Vision disability considerations
- Hearing disability considerations
- Cognitive disability considerations
- Mobility disability considerations

### Priority 3: Practical Implementation
- Alert templates (copy-paste ready)
- Multi-channel distribution guidance
- Testing checklists
- Standards compliance

## Use Cases

### Natural Disasters
- **Scenario:** Hurricane damage to cell towers
- **Network:** 2G only, heavily congested
- **Crisis Mode:** Loads in 1-2 seconds, provides critical safety info

### Rural/Remote Areas
- **Scenario:** Wildfire in area with poor coverage
- **Network:** Edge of 2G coverage
- **Crisis Mode:** Minimal bandwidth required, reliable loading

### International Deployment
- **Scenario:** Emergency manager in developing country
- **Network:** Limited infrastructure
- **Crisis Mode:** Works on global minimum infrastructure

### Battery Conservation
- **Scenario:** Multi-day power outage
- **Network:** Any network
- **Crisis Mode:** Minimal rendering = extended battery life

### Backup/Redundancy
- **Scenario:** Primary site overloaded or down
- **Network:** Any network
- **Crisis Mode:** Always available, always fast

## Testing Crisis Mode

### Browser Testing
```bash
# Test in text-only browser (if available)
lynx /crisis.html
w3m /crisis.html

# Test with images disabled in regular browser
# Chrome: Settings > Privacy > Content Settings > Images > Block all
# Firefox: about:config > permissions.default.image = 2

# Test with JavaScript disabled
# Chrome: Settings > Privacy > Site Settings > JavaScript > Block
# Firefox: about:config > javascript.enabled = false
```

### Network Throttling
```javascript
// Chrome DevTools: Network tab
// Presets:
// - Slow 3G: 400 Kbps, 400ms RTT
// - Fast 3G: 1.5 Mbps, 560ms RTT
// Custom: 100 Kbps, 500ms RTT (simulates 2G)
```

### Size Verification
```bash
# Calculate total page size
curl -s https://yourdomain.com/crisis.html | wc -c

# Should be under 14,000 bytes (14KB)
# Target: 5,000-11,000 bytes (5-11KB)
```

### Accessibility Testing
```bash
# Run accessibility checks
npm run pa11y crisis.html

# Verify semantic structure
# Check heading hierarchy
# Test with screen reader
```

## Deployment

### GitHub Pages
Crisis Mode pages are automatically deployed with the main site:
```yaml
# .github/workflows/deploy.yml already handles this
```

### CDN Distribution
For maximum resilience, consider:
1. CloudFlare CDN (free tier available)
2. Archive.org snapshot (automatic backup)
3. Multiple geographic regions

### Offline Access
Crisis Mode works with:
- Browser "Save Page As" (saves everything needed)
- Print to PDF (maintains structure)
- PWA offline cache (if main site visited first)

## Maintenance

### Content Updates
1. Edit `.md` files in repository root (`crisis.md`, `crisis-templates.md`, `crisis-disabilities.md`)
2. Keep content concise and essential
3. Monitor page sizes: `wc -c crisis*.md`
4. Target: Keep under 11KB per page

### CSS Updates
Edit inline styles in `_layouts/crisis.html`:
```html
<style>
/* Keep minified */
/* Remove all non-essential rules */
/* Test thoroughly */
</style>
```

### Testing Checklist
- [ ] Page loads in <2 seconds on 2G simulation
- [ ] Total size under 14KB
- [ ] Works with images disabled
- [ ] Works with JavaScript disabled
- [ ] Works with CSS disabled
- [ ] Prints cleanly
- [ ] Passes WCAG 2.2 AA
- [ ] Screen reader compatible
- [ ] Keyboard navigable

## Future Enhancements

### Potential Additions
- [ ] More language translations (inline)
- [ ] Additional emergency templates
- [ ] Regional customization guide
- [ ] ASCII art navigation diagram
- [ ] Morse code version reference

### Constraints to Maintain
- ❌ No images (keep text-only)
- ❌ No JavaScript (maintain zero-dependency)
- ❌ No external CSS (keep inline)
- ❌ No web fonts (system fonts only)
- ✅ Keep each page under 14KB

## Standards Compliance

### WSG 1.0 (Web Sustainability Guidelines)
- ✅ Minimal page weight
- ✅ No unnecessary resources
- ✅ Efficient rendering
- ✅ Long-term maintainability

### WCAG 2.2 Level AA
- ✅ Perceivable (semantic structure, high contrast)
- ✅ Operable (keyboard navigation, skip links)
- ✅ Understandable (plain language, consistent navigation)
- ✅ Robust (semantic HTML, no dependencies)

### CAN-ASC-6.4 (Emergency Accessibility)
- ✅ Multi-modal content delivery
- ✅ Plain language
- ✅ Disability considerations included
- ✅ Resilient infrastructure

## Success Metrics

Crisis Mode is successful when:
1. ✅ Every page loads in <2 seconds on simulated 2G
2. ✅ Every page is under 14KB total
3. ✅ Works in text-only browsers
4. ✅ Passes WCAG 2.2 Level AA
5. ✅ Contains critical life-safety information
6. ✅ Accessible to people with disabilities
7. ✅ Used during actual emergencies

## Questions & Support

**Documentation:** See also SURVIVAL_WEB_DESIGN.md and SUSTAINABILITY.md

**Issues:** Report problems at https://github.com/mgifford/inclusive-emergency-readiness/issues

**Contributing:** See CONTRIBUTING.md for guidelines

---

**Remember:** In a crisis, bandwidth is a luxury. Crisis Mode ensures information is infrastructure - reliable, resilient, and reaches everyone.
