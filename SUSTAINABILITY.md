# Sustainability & Resilience Statement (SUSTAINABILITY.md)

## Our Philosophy: Digital Resilience
Sustainability in emergency communications is about **performance under stress**. A "heavy" website consumes more energy, drains user batteries, and fails to load on congested networks. By following the **W3C Web Sustainability Guidelines (WSG) 1.0**, we ensure our information survives "Digital Famine."

## Crisis Mode: Network-Agnostic Information Delivery

**NEW:** We have implemented a **Crisis Mode** - an ultra-low-bandwidth mirror that reduces data payload by 98%.

### The Infrastructure as Policy Statement
Information is a form of infrastructure. To ensure our readiness guide is truly inclusive, it is built to be Network Agnostic. We practice what we preach by maintaining a text-primary mirror that remains functional even when local cellular towers are congested or damaged.

### Technical Specifications
- **Payload:** 5-11KB per page (vs. typical 500KB limit)
- **The 14KB Rule:** Entire pages fit within a single TCP slow-start packet
- **Dependencies:** Zero external resources (no CSS files, no JS, no images, no fonts)
- **Networks:** Works on 2G, satellite, congested mesh networks
- **Accessibility:** WCAG 2.2 Level AA compliant

**Access Crisis Mode:** [/crisis.html]({{ '/crisis.html' | relative_url }})

## Technical Constraints (The Survival UX)
To minimize our environmental footprint and maximize disaster resilience, we adhere to the following:

### 1. Low-Bandwidth Mandate
* **Payload Limit:** Aim for <500KB total page weight.
* **Asset Shedding:** We use system fonts and SVG icons instead of custom web fonts and heavy raster images.
* **No Tracking:** We do not use third-party analytics or tracking pixels that waste data and power.

### 2. Energy Preservation
* **Static-First:** Hosted via **GitHub Pages** to eliminate server-side processing and database energy consumption.
* **Dark Mode & High Contrast:** Optimized for OLED screens to save battery life during power outages.

### 3. Persistence & Maintenance
* **Link Rot Prevention:** We use automated GitHub Actions to monitor link health. 
* **Archive.org Integration:** We ensure critical resources are backed up to the Internet Archive so that information remains available even if the original source hosting fails during a disaster.

## Infrastructure
Our primary hosting is provided by GitHub. We monitor our digital carbon footprint and prioritize "Green Hosting" principles as defined by the **Green Web Foundation**.

## How You Can Help
* **Keep it Small:** When contributing, optimize all assets.
* **Plain Text First:** If a message can be conveyed in Markdown rather than a PDF, use Markdown.
* **Offline-First:** Test your contributions to ensure they work via our PWA (Progressive Web App) manifest without an active internet connection.

---
*Adapted from the [mgifford/sustainability.md](https://mgifford.github.io/SUSTAINABILITY.md) template.*
