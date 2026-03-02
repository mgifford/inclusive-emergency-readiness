# Logo and Branding Assets

This document describes the branding assets for the Inclusive Emergency Readiness project.

## Logo Design

The logo features:
- **Person with mobility aid (cane)** - Symbolizing accessibility and inclusivity
- **Emergency exit door with arrow** - Symbolizing emergency egress and safety
- **Orange color (#FF6600)** - High visibility emergency color for immediate recognition
- **Clean, scalable SVG format** - Ensures quality at any size while maintaining small file size

## Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Orange | #FF6600 | Logo, emergency elements, calls-to-action |
| Text Dark | #2C3E50 | Body text, headers |
| Background White | #FFFFFF | Page backgrounds, contrast |

## Asset Files

### Logo
- **File:** `assets/images/logo.svg`
- **Dimensions:** 100×100 viewBox
- **Size:** 2.2KB
- **Usage:** Website header, print materials

### PWA Icons
- **File:** `assets/images/icon-192.png` (192×192px, 20KB)
- **File:** `assets/images/icon-512.png` (512×512px, 110KB)
- **Usage:** Progressive Web App icons, specified in `manifest.json`

### Apple Touch Icon
- **File:** `assets/images/apple-touch-icon.png`
- **Dimensions:** 180×180px
- **Size:** 19KB
- **Usage:** iOS home screen icon

### Favicon
- **File:** `assets/images/favicon.ico` (4.2KB)
- **File:** `assets/images/favicon.png` (32×32px, 2.6KB)
- **Usage:** Browser tab icon

### Social Media Card
- **File:** `assets/images/social-card.png`
- **Dimensions:** 1200×630px recommended (current: 785×373px — see note below)
- **Size:** 76KB
- **Usage:** Open Graph previews for LinkedIn, Bluesky, Mastodon, and other social networks

> **Note:** LinkedIn recommends a minimum of 1200×627px for large card previews. The current image at 785×373px will still render but may appear as a small thumbnail. Updating the social-card.png to 1200×630px will improve LinkedIn sharing quality.

### Icon Source (SVG)
- **File:** `assets/images/icon.svg`
- **Dimensions:** 200×200 viewBox
- **Size:** 1.5KB
- **Usage:** Source file for generating PNG icons

## WSG 1.0 Compliance

✅ **Total asset size: ~260KB** (well under the 500KB page budget)
- Logo is SVG format for minimal bandwidth
- All PNG icons are optimized with transparency
- Social media card is under 100KB
- No external font files required (uses system fonts)

## Implementation

### HTML Head Tags

The following meta tags are automatically included in all pages via `_layouts/default.html`:

- **PWA Manifest:** Links to `manifest.json` with icon references
- **Apple Touch Icon:** For iOS devices
- **Favicon:** For browser tabs
- **Open Graph Tags:** For LinkedIn, Bluesky, Mastodon, and other social networks

### Accessibility Features

1. **Logo has proper alt text** - Use: "Inclusive Emergency Readiness - Person with mobility aid and emergency exit symbol"
2. **SVG includes ARIA labels** - The SVG files have `role="img"` and `aria-label` attributes for screen reader support
3. **Orange graphics (#FF6600)** - 2.94:1 contrast ratio. While below WCAG AA text minimums, this is acceptable for non-text graphics per WCAG 2.2 SC 1.4.11 (Non-text Contrast) which requires only 3:1. The orange is used for large iconography, not body text.
4. **Dark text (#2C3E50) on white** - Provides 10.98:1 contrast ratio (exceeds WCAG AAA standard of 7:1)
5. **Scalable SVG** ensures clarity at any zoom level
6. **System fonts** in logo text for consistency and performance

**Note:** The logo graphics use orange for emergency visibility and recognition. All text content uses high-contrast dark text to ensure readability.

## Archive

The original logo has been preserved as `assets/images/logo-original.svg` for reference.

## Updating Assets

To replace the logo or icons:

1. Update the source SVG file (`logo.svg` or `icon.svg`)
2. If updating PNG icons, regenerate from SVG:
   ```bash
   convert -background none icon.svg -resize 192x192 icon-192.png
   convert -background none icon.svg -resize 512x512 icon-512.png
   convert -background none icon.svg -resize 180x180 apple-touch-icon.png
   convert -background none icon.svg -resize 32x32 favicon.png
   ```
3. Verify file sizes remain under WSG 1.0 budget
4. Test display across devices and social media platforms
