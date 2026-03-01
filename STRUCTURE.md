# Project Structure

## Resilience Comms: The Inclusive Emergency Blueprint

This document explains the organization of files and directories in this project.

## Directory Structure

```
inclusive-emergency-readiness/
├── _config.yml                 # Jekyll configuration
├── _disabilities/              # Collection: Disability impact pages
│   ├── cognitive.md           # Cognitive disabilities guide
│   ├── hearing.md             # Hearing disabilities guide
│   ├── situational.md         # Situational disabilities guide
│   └── vision.md              # Vision disabilities guide
├── _includes/                  # Reusable HTML components
│   ├── footer.html            # Site footer
│   ├── header.html            # Site header with navigation
│   └── navigation.html        # Main navigation menu
├── _layouts/                   # Page layouts
│   ├── default.html           # Base page layout
│   └── disability.html        # Layout for disability pages
├── _templates/                 # Collection: Emergency alert templates
│   └── alert-template.md      # Evacuation order template
├── _toolkits/                  # Collection: Tactical guides
│   ├── digital-egress.md      # Website survival checklist
│   ├── multi-platform.md      # Multi-platform distribution guide
│   └── plain-language.md      # Plain language writing guide
├── .github/
│   └── workflows/             # GitHub Actions workflows
│       ├── deploy.yml         # Jekyll deployment to GitHub Pages
│       ├── link-checker.yml   # Weekly link rot checking
│       └── readability-check.yml # Readability validation
├── assets/
│   ├── css/                   # Stylesheets
│   │   ├── emergency.scss     # Main survival UX styles
│   │   └── print.scss         # Print-optimized styles
│   └── js/                    # JavaScript (minimal)
│       ├── mode-toggle.js     # Accessibility mode switching
│       └── service-worker.js  # PWA offline functionality
├── disabilities/              # Section: Disability spectrum
│   └── index.md              # Disability overview page
├── framework/                 # Section: Framework documentation
│   └── matrix.md             # WCAG/WSG/Plain Language crosswalk
├── templates/                 # Section: Templates
│   └── index.md              # Templates overview page
├── toolkits/                  # Section: Toolkits
│   └── index.md              # Toolkits overview page
├── .gitignore                 # Git ignore rules
├── DEPLOYMENT.md              # Deployment guide
├── Gemfile                    # Ruby dependencies
├── LICENSE                    # MIT License
├── README.md                  # Project manifesto and guide
├── index.md                   # Home page
├── manifest.json              # PWA manifest
└── offline.html               # Offline fallback page
```

## File Types

### Configuration Files

- **_config.yml**: Jekyll site configuration, collections, defaults
- **Gemfile**: Ruby gem dependencies
- **manifest.json**: Progressive Web App configuration
- **.gitignore**: Files to exclude from version control

### Content Files

All content is written in Markdown (.md) with YAML front matter.

#### Collections (prefixed with underscore)

- **_disabilities/**: Disability impact guides (output: true)
- **_toolkits/**: Practical implementation guides (output: true)
- **_templates/**: Emergency alert templates (output: true)

#### Regular Pages

- **index.md**: Home page
- **disabilities/index.md**: Disability section overview
- **toolkits/index.md**: Toolkits section overview
- **templates/index.md**: Templates section overview
- **framework/matrix.md**: Framework crosswalk

### Layout Files

- **_layouts/default.html**: Base layout for all pages
- **_layouts/disability.html**: Enhanced layout for disability pages

### Include Files

- **_includes/header.html**: Site header with navigation and accessibility controls
- **_includes/footer.html**: Site footer with links and credits
- **_includes/navigation.html**: Main navigation menu

### Style Files

- **assets/css/emergency.scss**: Main stylesheet (Survival UX design)
- **assets/css/print.scss**: Print-optimized styles for emergency binders

### JavaScript Files (Progressive Enhancement)

- **assets/js/mode-toggle.js**: High contrast, low data, text size controls
- **assets/js/service-worker.js**: PWA offline capability

### Workflow Files

- **.github/workflows/deploy.yml**: Automatic deployment to GitHub Pages
- **.github/workflows/link-checker.yml**: Weekly external link validation
- **.github/workflows/readability-check.yml**: Content readability checks

## URL Structure

### Collections

Collections use custom permalinks defined in `_config.yml`:

- Disabilities: `/disabilities/cognitive/`, `/disabilities/vision/`, etc.
- Toolkits: `/toolkits/digital-egress/`, `/toolkits/plain-language/`, etc.
- Templates: `/templates/alert-template/`, etc.

### Regular Pages

Regular pages use file-based URLs:

- Home: `/`
- Disability index: `/disabilities/`
- Toolkit index: `/toolkits/`
- Template index: `/templates/`
- Framework matrix: `/framework/matrix.html`

## Design Patterns

### Front Matter

All Markdown files include YAML front matter:

```yaml
---
layout: default                # Layout to use
title: "Page Title"           # Page title
category: disability           # Category (for organization)
summary: "Brief description"   # Meta description
reading_level: "Grade 6"      # Readability target
last_updated: 2026-03-01      # Last update date
---
```

### Content Structure

#### Disability Pages

```markdown
# Title

## Types of [Disability]
## Emergency Impacts
## What Communicators Must Do
## WCAG 2.2 Requirements
## Emergency Communication Checklist
## Tools and Testing
## Case Studies
## The Bottom Line
```

#### Toolkit Pages

```markdown
# Title

## What It Is
## Why It Matters
## The Principles/Steps
## Examples
## Checklist
## Tools
## Common Mistakes
## The Bottom Line
```

### Naming Conventions

- **Files**: lowercase with hyphens (e.g., `digital-egress.md`)
- **Directories**: lowercase, no hyphens (e.g., `_disabilities`)
- **Collections**: underscore prefix (e.g., `_toolkits`)
- **CSS classes**: kebab-case (e.g., `site-header`)
- **IDs**: kebab-case (e.g., `main-content`)

## Adding New Content

### Adding a Disability Page

1. Create new file in `_disabilities/`
2. Use existing pages as template
3. Include all required sections
4. Add to navigation if needed

### Adding a Toolkit

1. Create new file in `_toolkits/`
2. Follow toolkit structure pattern
3. Include practical examples
4. Add to toolkits index page

### Adding a Template

1. Create new file in `_templates/`
2. Include plain language version
3. Include Easy Read version
4. Document customization
5. Add to templates index page

## Build Process

### Local Development

```bash
bundle exec jekyll serve
```

Generates site in `_site/` directory and serves at `http://localhost:4000`

### Production Build

```bash
bundle exec jekyll build
```

Generates production-ready static site in `_site/` directory

### GitHub Pages

Automatic deployment via GitHub Actions when pushing to `main` branch.

## Maintenance

### Regular Updates

- **Weekly**: Link rot checking (automated)
- **On commit**: Readability checking (automated)
- **Monthly**: Content review and updates
- **Quarterly**: Framework updates (WCAG, WSG)
- **Annually**: Major content refresh

### Content Guidelines

- Maintain Grade 6 reading level
- Follow WCAG 2.2 Level AA minimum
- Use plain language always
- Test with real users regularly
- Keep examples current

## Dependencies

### Ruby Gems

Defined in `Gemfile`:
- `jekyll` (~> 4.3.0) - Static site generator
- `minima` (~> 2.5) - Base theme
- `jekyll-feed` (~> 0.12) - RSS feed generation
- `jekyll-seo-tag` (~> 2.8) - SEO optimization

### External Resources

- GitHub Pages (hosting)
- GitHub Actions (CI/CD)
- Archive.org Wayback Machine (link preservation)

## Security

### Content Security

- No user input accepted
- No forms or databases
- Static HTML only
- HTTPS enforced (GitHub Pages)

### Dependency Updates

Run regularly:
```bash
bundle update
```

## Accessibility

### Built-in Features

- Skip links for keyboard navigation
- ARIA landmarks
- Semantic HTML5
- Alt text on all images
- High contrast mode toggle
- Low data mode toggle
- Text size controls
- Keyboard shortcuts

### Testing

- Screen reader: NVDA, JAWS, VoiceOver
- Keyboard: All functions work without mouse
- Contrast: WCAG AA/AAA ratios
- Print: Optimized for emergency binders
- Offline: PWA cached pages

## Performance

### Optimization

- Minimal JavaScript (works without)
- Efficient CSS (no frameworks)
- Optimized images (WebP recommended)
- Static site (no server processing)
- Cacheable (service worker)

### Metrics

Target performance:
- Load time: < 3 seconds on 3G
- Page weight: < 500KB
- Time to Interactive: < 5 seconds
- Lighthouse score: 90+ all categories

## License

MIT License - See LICENSE file for details.

## Contributing

See README.md for contribution guidelines.

---

**This structure is designed for:**
- Maximum accessibility
- Minimal maintenance
- Easy contribution
- Sustainable operation
- Emergency resilience
