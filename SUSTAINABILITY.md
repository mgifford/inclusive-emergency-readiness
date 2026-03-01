# Sustainability & Resilience Statement (SUSTAINABILITY.md)

## Our Philosophy: Digital Resilience
Sustainability in emergency communications is about **performance under stress**. A "heavy" website consumes more energy, drains user batteries, and fails to load on congested networks. By following the **W3C Web Sustainability Guidelines (WSG) 1.0**, we ensure our information survives "Digital Famine."

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
