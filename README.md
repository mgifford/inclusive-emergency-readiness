# Resilience Comms: The Inclusive Emergency Blueprint

> **When the power goes out, will your message still get through?**

## The Manifesto

Emergency communication is not a feature—it's infrastructure. When disaster strikes, the digital divide becomes deadly. This project exists because **accessibility isn't a checkbox; it's survival architecture**.

We are building a resource for government and municipal communication teams that answers one critical question: *How do we ensure emergency information reaches everyone, regardless of disability, device, bandwidth, or battery life?*

### Why This Exists

Every year, emergency alerts fail:
- People who are Deaf miss audio-only sirens
- People with cognitive disabilities cannot parse bureaucratic language
- People with low vision cannot read tiny, low-contrast PDFs
- People in rural areas hit bandwidth limits loading image-heavy sites
- People in high-stress situations cannot process complex instructions

**This stops now.**

## Core Frameworks

This project integrates three critical frameworks:

1. **WCAG 2.2 Level AA/AAA** - Technical accessibility standards
2. **W3C Web Sustainability Guidelines (WSG) 1.0** - Low-bandwidth, high-resilience design
3. **CAN-ASC-6.4 (Emergency Measures)** - Strategic Canadian standards for inclusive disaster response

Plus:
- **Plain Language** - Cognitive accessibility for high-stress scenarios
- **Easy Read** - Visual-linguistic simplification for maximum comprehension

## What You'll Find Here

### The Disability Spectrum
Deep dives into how emergencies impact people with:
- **Vision** disabilities (blindness, low vision, color blindness)
- **Hearing** disabilities (Deaf, hard of hearing)
- **Mobility** disabilities (physical, motor control)
- **Cognitive** disabilities (learning, memory, processing)
- **Sensory** disabilities (neurodivergence, sensory processing)
- **Situational** disabilities (lost devices, high stress, foreign language)

Each section includes "Emergency Impacts" showing real-world failure scenarios.

### The Framework Matrix
A practical cross-walk between WCAG, WSG, and Plain Language specifically designed for emergency alerts.

### Tactical Toolkits
- **Digital Egress Checklist** - How to ensure a web page is "survival-ready"
- **Plain Language vs. Easy Read** - How-to guides for both approaches
- **The Multi-Platform Pivot** - Beyond X/Twitter: strategies for Mastodon, Bluesky, and SMS
- **Digital-to-Physical** - Creating "survival-ready" PDFs and 3D-printing medical spares via Glia

### Emergency Templates
Ready-to-use templates for:
- Evacuation orders
- Shelter-in-place alerts
- Boil water advisories
- Air quality warnings
- And more...

## Survival UX Design Principles

This site follows "Survival Web Design" principles:

### 1. Static-First
No heavy JavaScript or databases. The site must work on the oldest devices.

### 2. High-Contrast/Low-Data Mode
A toggle that strips custom fonts and images to save battery and bandwidth.

### 3. Offline-First
Progressive Web App (PWA) functionality means the site works without a signal once visited.

### 4. Print-on-Demand
Every page is perfectly legible when printed for an emergency binder.

### 5. Battery-Conscious
Minimal animations, optimized CSS, dark mode support to extend device life.

## Technical Architecture

### Built With
- **Jekyll** - Static site generator for maximum performance
- **Semantic HTML5** - No framework bloat
- **Progressive Enhancement** - Works without JavaScript
- **Service Workers** - Offline capability
- **SCSS** - Modular, maintainable styling

### Automated Quality Assurance

Two GitHub Actions ensure quality:

1. **Link-Rot Guard** - Weekly checks of all external URLs. Dead links are automatically replaced with Wayback Machine snapshots.

2. **Linter of Clarity** - Readability checks (Flesch-Kincaid) on all Markdown files. Grade 6+ reading level triggers warnings.

## Getting Started

### Prerequisites
- Ruby 2.7+
- Bundler
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/mgifford/inclusive-emergency-readiness.git
cd inclusive-emergency-readiness

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

### Building for Production

```bash
bundle exec jekyll build
```

The static site will be in `_site/`.

## Contributing

We welcome contributions! This project needs:

### Content Contributions
- Real-world emergency communication case studies
- Translations (especially Indigenous languages)
- Accessibility testing reports
- Plain language rewrites of government jargon

### Technical Contributions
- Performance optimizations
- Accessibility improvements
- Print stylesheet refinements
- Offline capability enhancements

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test accessibility (screen reader, keyboard navigation)
5. Test print output
6. Run readability checks
7. Commit your changes (`git commit -m 'Add amazing feature'`)
8. Push to the branch (`git push origin feature/amazing-feature`)
9. Open a Pull Request

### Contribution Guidelines

**Writing Style:**
- Use Plain Language (Grade 6 reading level)
- One idea per line
- Active voice only
- No jargon without definitions

**Code Style:**
- Semantic HTML5
- BEM CSS methodology
- No JavaScript unless progressive enhancement
- Comment complex accessibility features

**Accessibility Requirements:**
- WCAG 2.2 Level AA minimum
- Keyboard navigable
- Screen reader tested
- High contrast tested
- Print tested

## Project Structure

```
inclusive-emergency-readiness/
├── _config.yml                 # Jekyll configuration
├── _layouts/                   # Page layouts
│   ├── default.html           # Base layout
│   └── disability.html        # Disability page layout
├── _includes/                  # Reusable components
│   ├── header.html
│   ├── footer.html
│   └── navigation.html
├── _disabilities/              # Disability deep-dives
│   ├── cognitive.md
│   ├── vision.md
│   └── ...
├── _toolkits/                  # Tactical guides
│   ├── digital-egress.md
│   ├── plain-language.md
│   └── ...
├── _templates/                 # Emergency templates
│   └── alert-template.md
├── assets/
│   ├── css/
│   │   ├── emergency.scss     # Main stylesheet
│   │   ├── print.scss         # Print optimization
│   │   ├── high-contrast.scss # High contrast mode
│   │   └── low-data.scss      # Low data mode
│   └── js/
│       ├── service-worker.js  # Offline functionality
│       └── mode-toggle.js     # Mode switching
├── framework/
│   └── matrix.md              # WCAG/WSG crosswalk
├── .github/
│   └── workflows/
│       ├── link-checker.yml   # Link-Rot Guard
│       └── readability-check.yml # Linter of Clarity
├── manifest.json              # PWA manifest
└── index.md                   # Home page
```

## Roadmap

- [x] Initial project structure
- [ ] Core disability content pages
- [ ] Framework matrix
- [ ] Tactical toolkits
- [ ] Emergency templates
- [ ] GitHub Actions automation
- [ ] PWA implementation
- [ ] Multi-language support
- [ ] Community case studies
- [ ] Video content (with captions and transcripts)
- [ ] Sign language videos

## Recognition

### Standards Referenced
- W3C Web Content Accessibility Guidelines (WCAG) 2.2
- W3C Web Sustainability Guidelines (WSG) 1.0
- CAN-ASC-6.4 Emergency Preparedness and Response
- Plain Language Association International (PLAIN)
- Inclusion Europe Easy Read Standards

### Inspiration
- [Glia](https://glia.org/) - 3D-printable medical supplies
- [AbilityNet](https://abilitynet.org.uk/) - Digital inclusion experts
- [A11Y Project](https://www.a11yproject.com/) - Community accessibility resource

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/mgifford/inclusive-emergency-readiness](https://github.com/mgifford/inclusive-emergency-readiness)

## Acknowledgments

This project stands on the shoulders of accessibility advocates, emergency managers, and disability rights activists who have fought for inclusive emergency response.

**When lives are on the line, accessibility isn't optional—it's essential.**

---

*Built with urgency. Designed for resilience. Made for everyone.*
