# Crisis Mode Documentation

## Overview

**Crisis Mode** is an ultra-low-bandwidth mirror of the Inclusive Emergency Readiness guide, designed to function on 2G networks, satellite links, and congested mesh networks during emergency situations.

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

**TCP Slow-Start:** The internet's transport protocol (TCP) uses a congestion control mechanism called "slow-start":
- First packet: Limited to ~14KB (10 TCP segments × 1460 bytes)
- Each round-trip: Window doubles (if no packet loss)
- On congested/damaged networks: Packet loss forces restart

**Crisis Mode Design Principle:**
> If an entire emergency information page fits within 14KB, it loads in a single round-trip, dramatically improving reliability and speed on stressed networks.

## Technical Architecture

### Page Specifications

| Page | Size | Description |
|------|------|-------------|
| `/crisis.html` | 6.4KB | Landing page with quick access links |
| `/crisis-templates.html` | 8.1KB | Emergency alert templates |
| `/crisis-disabilities.html` | 11.1KB | Disability considerations |

**All pages include:**
- Complete HTML document
- Inline CSS (~1.7KB minified)
- Zero external requests
- Zero JavaScript
- Zero images

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
1. Edit `.html` files in repository root
2. Keep content concise and essential
3. Monitor page sizes: `wc -c crisis*.html`
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
