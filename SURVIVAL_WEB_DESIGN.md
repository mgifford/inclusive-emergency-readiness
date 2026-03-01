# Survival Web Design: How This Site is Built

## Mission-Critical Web Architecture for Emergency Preparedness

This document explains the technical design decisions behind **Resilience Comms**, demonstrating how the site embodies "Survival Web Design" principles — ensuring accessibility, sustainability, and functionality when digital infrastructure is stressed or compromised.

---

## The Four Pillars of Survival Web Design

### 1. Static-First: No Heavy JavaScript or Databases

**Principle:** Minimize dependencies on server-side processing and complex client-side frameworks.

**Implementation:**
- **Jekyll Static Site Generator:** All pages are pre-built HTML files served directly from GitHub Pages
- **No Database:** Content stored in Markdown files that compile to static HTML
- **Minimal JavaScript:** Only 2 essential scripts totaling ~8KB:
  - `mode-toggle.js` (4.5KB) - Accessibility mode switching
  - `service-worker.js` (3.5KB) - Offline functionality
- **Progressive Enhancement:** Site functions fully without JavaScript enabled

**Why It Matters:**
- Eliminates server crashes during high-traffic emergencies
- Reduces attack surface and security vulnerabilities
- Enables hosting on CDN/edge networks for maximum availability
- Works on older browsers and devices
- Faster load times on congested networks

**Code Reference:**
```yaml
# _config.yml - Jekyll static generation
markdown: kramdown
plugins:
  - jekyll-feed
  - jekyll-seo-tag
```

**Build Process:**
```bash
bundle exec jekyll build
# Outputs static HTML to _site/ directory
```

---

### 2. High-Contrast/Low-Data Mode: Battery & Bandwidth Preservation

**Principle:** Provide user controls to strip non-essential visual elements, preserving device battery and network bandwidth during emergencies.

**Implementation:**

#### High-Contrast Mode
- **One-click toggle** switches to maximum contrast (black on white)
- Removes decorative elements (shadows, gradients)
- Increases focus indicator visibility
- Preference saved to localStorage

**CSS Implementation:**
```scss
// assets/css/emergency.scss
body.high-contrast {
  background-color: #ffffff;
  color: #000000;
  
  a {
    color: #0000ff;
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  
  .site-header {
    background-color: #000000;
    color: #ffffff;
  }
}
```

#### Low-Data Mode
- **Strips custom fonts** - uses system fonts only
- **Removes background images** - saves bandwidth
- **Simplifies borders** - reduces rendering complexity
- **Disables decorative CSS** - faster paint and layout

**CSS Implementation:**
```scss
// assets/css/emergency.scss
body.low-data {
  font-family: sans-serif; // System font only
  
  * {
    background-image: none !important;
    font-family: inherit;
  }
  
  .site-header {
    border-bottom: 1px solid #000; // Simplified
  }
}
```

#### JavaScript Controls
Located in `assets/js/mode-toggle.js`:

```javascript
// Toggle High-Contrast Mode
highContrastToggle.addEventListener('click', function() {
  body.classList.toggle('high-contrast');
  const isActive = body.classList.contains('high-contrast');
  setPreference('high-contrast', isActive);
  updateButtonState('high-contrast-toggle', isActive);
});

// Toggle Low-Data Mode
lowDataToggle.addEventListener('click', function() {
  body.classList.toggle('low-data');
  const isActive = body.classList.contains('low-data');
  setPreference('low-data', isActive);
  updateButtonState('low-data-toggle', isActive);
});
```

#### Keyboard Shortcuts
- **Ctrl/Cmd + Alt + C** - Toggle high contrast
- **Ctrl/Cmd + Alt + L** - Toggle low data mode
- **Ctrl/Cmd + Plus** - Increase text size
- **Ctrl/Cmd + Minus** - Decrease text size

**Why It Matters:**
- Extends battery life on mobile devices during power outages
- Reduces data usage on congested or metered networks
- Improves readability in bright sunlight or low-light conditions
- Provides user control over visual complexity

---

### 3. Offline-First: Progressive Web App (PWA) Capabilities

**Principle:** The site must work without an active internet connection once visited.

**Implementation:**

#### Web App Manifest
Located at `/manifest.json`:

```json
{
  "name": "Resilience Comms: The Inclusive Emergency Blueprint",
  "short_name": "Resilience Comms",
  "description": "Accessible emergency communication guide",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0066cc",
  "orientation": "any",
  "offline_enabled": true,
  "icons": [
    {
      "src": "/assets/images/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/assets/images/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "shortcuts": [
    {
      "name": "Disability Impacts",
      "url": "/_disabilities/",
      "description": "How emergencies affect different disabilities"
    },
    {
      "name": "Emergency Templates",
      "url": "/_templates/",
      "description": "Ready-to-use emergency alert templates"
    }
  ]
}
```

**Manifest Features:**
- **Standalone Display:** Launches like a native app
- **App Shortcuts:** Quick access to critical sections
- **Theme Integration:** Matches OS theme
- **Maskable Icons:** Adapts to different device icon shapes

#### Service Worker
Located at `/assets/js/service-worker.js`:

**Caching Strategy:**
```javascript
const CACHE_NAME = 'resilience-comms-v1';
const PRECACHE_URLS = [
  '/',
  '/offline.html',
  '/assets/css/emergency.css',
  '/assets/css/print.css',
  '/manifest.json'
];

// Install event - cache essential files immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) return cachedResponse;
        return fetch(event.request)
          .then(response => {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache));
            return response;
          })
          .catch(() => caches.match('/offline.html'));
      })
  );
});
```

**Service Worker Registration:**
```javascript
// In _layouts/default.html
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/assets/js/service-worker.js');
}
```

#### Offline Fallback Page
Located at `/offline.html`:
- Cached immediately on first visit
- Displays emergency contact numbers (work without internet)
- Provides offline survival information
- Auto-refreshes when connection returns

**Why It Matters:**
- Site remains functional during network outages
- Critical information accessible without signal
- Reduces server load during emergencies
- Works in airplane mode for battery preservation
- Can be "installed" on home screen like native app

---

### 4. Print-on-Demand CSS: Emergency Binder Optimization

**Principle:** Every page must be perfectly legible and practical when printed for physical emergency binders.

**Implementation:**

#### Dedicated Print Stylesheet
Located at `/assets/css/print.scss`:

**Page Setup:**
```scss
@media print {
  @page {
    margin: 1.5cm;
    size: letter;
    
    @bottom-right {
      content: "Page " counter(page);
    }
    
    @bottom-left {
      content: "Resilience Comms Emergency Guide";
    }
  }
}
```

**Typography Optimization:**
```scss
body {
  font-family: "Times New Roman", Times, serif; // Print-optimized
  font-size: 12pt;
  line-height: 1.5;
  color: #000;
  background: #fff;
}

h1 {
  font-size: 20pt;
  border-bottom: 2pt solid #000;
  page-break-after: avoid;
}

h2 {
  font-size: 16pt;
  border-bottom: 1pt solid #000;
  page-break-after: avoid;
}
```

**Smart Page Breaks:**
```scss
// Prevent awkward breaks
h1, h2, h3, h4, h5, h6 {
  page-break-after: avoid;
}

p, blockquote, ul, ol, table {
  page-break-inside: avoid;
}

// Force breaks before major sections
.page-break-before {
  page-break-before: always;
}
```

**URL Printing:**
```scss
// Print full URLs after external links
a[href^="http"]:after {
  content: " (" attr(href) ")";
  font-size: 10pt;
  font-style: italic;
}

// Don't print URLs for internal links
a[href^="#"]:after {
  content: "";
}
```

**Emergency-Specific Features:**
```scss
// Alert boxes with high visibility
.alert {
  border: 2pt solid #000;
  padding: 8pt;
  page-break-inside: avoid;
}

.alert::before {
  content: "IMPORTANT: ";
  font-weight: bold;
}

.alert-danger {
  border-width: 3pt;
}

.alert-danger::before {
  content: "CRITICAL: ";
}

// Emergency contact boxes
.emergency-contact {
  border: 2pt solid #000;
  padding: 8pt;
  
  &::before {
    content: "EMERGENCY CONTACT: ";
    font-weight: bold;
    font-size: 14pt;
  }
}
```

**Note:** Unicode symbols (⚠, ☎) should be included in the HTML markup with appropriate ARIA labels, not generated via CSS `::before` content, to ensure screen reader compatibility. The actual print.scss file includes these symbols for visual distinction in printed documents, but the HTML should contain semantic markup.

**Hide Non-Essential Elements:**
```scss
.site-header,
.site-nav,
.site-footer,
.no-print,
.skip-link,
.accessibility-controls {
  display: none !important;
}
```

**Checklist Optimization:**
```scss
.checklist li::before {
  content: "☐ ";
  font-size: 14pt;
}

.checklist li.checked::before {
  content: "☑ ";
}
```

**Why It Matters:**
- Physical backups survive digital failures
- No internet required to access printed guides
- Optimized ink usage for mass printing
- Professional appearance for official use
- Clear hierarchy for emergency reference
- Page numbers for binder organization

---

## Performance Metrics

### Page Weight Budget
- **Maximum:** 500KB per page (WSG 1.0 standard)
- **Typical:** 150-250KB including CSS and minimal images
- **Homepage:** ~180KB
- **Content pages:** ~120KB average

### Load Time Targets
- **3G network:** < 5 seconds
- **4G network:** < 2 seconds
- **Wi-Fi:** < 1 second

### Lighthouse Scores (Target)
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 95+
- **SEO:** 100
- **PWA:** Installable

---

## Technology Stack

### Core Technologies
- **Static Site Generator:** Jekyll 4.x
- **Markup:** HTML5 with semantic elements
- **Styling:** SCSS compiled to CSS
- **Scripting:** Vanilla JavaScript (ES6+)
- **Hosting:** GitHub Pages (CDN-backed)
- **Version Control:** Git / GitHub

### Zero Dependencies
- **No jQuery** - Vanilla JS only
- **No Bootstrap** - Custom lightweight CSS
- **No Font Awesome** - Unicode symbols and SVG
- **No Google Fonts** - System font stack
- **No analytics trackers** - Privacy and performance first

### System Font Stack
```scss
$font-family-primary: -apple-system, BlinkMacSystemFont, 
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

**Benefits:**
- Zero download time
- Optimal rendering on every platform
- Respects user's font preferences
- Better battery performance
- WCAG-compliant by default

---

## Accessibility Integration

### WCAG 2.2 Level AA Compliance
- **Contrast ratios:** 4.5:1 minimum (text), 3:1 (large text)
- **Keyboard navigation:** Full site accessible via Tab/Enter
- **Screen reader support:** Semantic HTML, ARIA labels
- **Focus indicators:** 3px solid outlines
- **Skip links:** Jump to main content

### Color Palette
```scss
// WCAG AA compliant contrast ratios
$color-text: #1a1a1a;
$color-background: #ffffff;
$color-primary: #0066cc;     // 4.54:1 contrast
$color-secondary: #004080;   // 7.56:1 contrast
$color-accent: #cc0000;      // 5.51:1 contrast
```

### Responsive Typography
```scss
$font-size-base: 18px;  // Larger for accessibility
$line-height-base: 1.6; // Improved readability
```

### Mobile-First Design
Breakpoints (progressive enhancement):
- **Base:** Mobile (320px+)
- **Small:** 576px (large phones)
- **Medium:** 768px (tablets)
- **Large:** 992px (desktop)
- **XLarge:** 1200px (large desktop)

---

## Security & Privacy

### Privacy-First Design
- **No tracking cookies** - No Google Analytics, Facebook Pixel, etc.
- **No third-party scripts** - All JavaScript self-hosted
- **No external fonts** - System fonts only
- **No CDN dependencies** - Reduces tracking vectors

### Security Headers (Recommended)
```yaml
# Recommended in hosting configuration
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: no-referrer
Content-Security-Policy: default-src 'self'
```

### HTTPS Only
- GitHub Pages enforces HTTPS
- Service Worker requires HTTPS
- PWA requires HTTPS

---

## Sustainability & Energy Efficiency

### Dark Mode Support
```scss
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1a1a1a;
    color: #e5e5e5;
  }
}
```

**Benefits:**
- Saves battery on OLED screens
- Reduces eye strain in low light
- Lower power consumption during outages

### Reduced Motion
```scss
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Benefits:**
- Respects user preferences
- Reduces motion sickness
- Saves CPU/GPU cycles

### No GPU-Intensive Effects
- No `transform` animations
- No `box-shadow` transitions
- No parallax scrolling
- No heavy blur effects

---

## Testing & Validation

### Automated Testing
1. **Link-Rot Guard** (Weekly)
   - Checks all external URLs
   - Reports dead links
   - Suggests Archive.org alternatives

2. **Linter of Clarity** (On PR/Push)
   - Flesch-Kincaid Grade Level check
   - Flags content above Grade 7
   - Ensures plain language compliance

### Manual Testing Checklist
- [ ] Test with screen reader (NVDA/VoiceOver)
- [ ] Test keyboard navigation (Tab key)
- [ ] Test on mobile device
- [ ] Test in airplane mode (offline)
- [ ] Print test (verify layout)
- [ ] Test high-contrast mode
- [ ] Test low-data mode
- [ ] Verify all images have alt text
- [ ] Check page weight (< 500KB)

### Browser Testing
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Chrome Mobile
- Safari iOS
- Samsung Internet

---

## Deployment Architecture

### GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: ruby/setup-ruby@v1
      - run: bundle install
      - run: bundle exec jekyll build
      - uses: peaceiris/actions-gh-pages@v3
```

### CDN Distribution
- GitHub Pages uses Fastly CDN
- Global edge caching
- HTTPS by default
- Automatic cache invalidation

---

## Future Enhancements

### Potential Additions
1. **Push Notifications** - Emergency alerts (requires user permission)
2. **Background Sync** - Update content when online
3. **WebRTC** - Peer-to-peer content sharing
4. **IPFS Integration** - Decentralized hosting backup
5. **QR Codes** - Physical-to-digital bridge

### Constraints to Maintain
- Must stay under 500KB per page
- Must work without JavaScript
- Must print perfectly
- Must maintain Grade 6 reading level
- Must pass WCAG 2.2 Level AA

---

## Resources & References

### Standards & Guidelines
- [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/) - Web Content Accessibility Guidelines
- [WSG 1.0](https://w3c.github.io/sustyweb/) - Web Sustainability Guidelines
- [Plain Language](https://www.plainlanguage.gov/) - Federal Plain Language Guidelines
- [PWA](https://web.dev/progressive-web-apps/) - Progressive Web App Standards

### Tools Used
- [Jekyll](https://jekyllrb.com/) - Static site generator
- [GitHub Pages](https://pages.github.com/) - Hosting platform
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing
- [WAVE](https://wave.webaim.org/) - Accessibility testing

### Project Documents
- [AGENTS.md](AGENTS.md) - Governance and protocols
- [ACCESSIBILITY.md](ACCESSIBILITY.md) - Accessibility commitment
- [SUSTAINABILITY.md](SUSTAINABILITY.md) - Performance standards
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [README.md](README.md) - Project overview

---

## Conclusion

**Resilience Comms** embodies Survival Web Design by prioritizing:
1. **Availability** over aesthetics
2. **Accessibility** over innovation
3. **Simplicity** over complexity
4. **Sustainability** over convenience

When digital infrastructure fails, this site survives. When batteries run low, this site adapts. When networks congest, this site loads. When printers run, this site produces clear, usable documents.

**"The most accessible information is the information that actually reaches the user when everything else fails."**

---

*Last Updated: 2026-03-01*  
*Document Version: 1.0*  
*License: CC-BY-4.0*
