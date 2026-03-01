# Inclusive Emergency Readiness Guide
### A Community Resource Aspiring to Comprehensive Emergency Communications

[![Accessibility: WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-blue)](./ACCESSIBILITY.md)
[![Sustainability: WSG 1.0](https://img.shields.io/badge/Sustainability-WSG%201.0-green)](./SUSTAINABILITY.md)
[![License: CC-BY-4.0](https://img.shields.io/badge/License-CC--BY--4.0-lightgrey)](https://creativecommons.org/licenses/by/4.0/)

In a disaster, the "disability-disaster gap" is a failure of infrastructure, not individuals. This guide is a community-driven, open-source effort to bridge digital standards with physical survival needs through low-bandwidth, high-accessibility emergency communications.

**We are building this together.** Our aspiration is to create resources that empower communications teams to develop information that is **Reachable, Readable, and Resilient**—ensuring no one is left behind when the grid fails.

**This guide needs your expertise.** We especially value contributions from people with disabilities and emergency management professionals who have built tools for real disaster situations.

---

## 🚀 The Core Frameworks
This project aspires to be a living implementation of four critical pillars:

1.  **Accessibility (WCAG 2.2 / EN 301 549):** Technical compliance for screen readers and assistive tech
2.  **Sustainability (WSG 1.0):** "Survival UX" that minimizes data and battery drain on stressed networks
3.  **Plain Language & Easy Read:** Cognitive accessibility to counter the "situational disability" of high-stress trauma
4.  **National Standards:** Alignment with **[CAN-ASC-6.4 (Emergency Measures)](https://accessible.canada.ca/creating-accessibility-standards/can-asc-64-emergency-measures)**

We strive to implement these standards based on real-world testing and community feedback.

### 🏗️ Survival Web Design
This site is built using **[Survival Web Design](./SURVIVAL_WEB_DESIGN.md)** principles:
* **Static-First:** No heavy JavaScript or databases
* **High-Contrast/Low-Data Mode:** Battery and bandwidth preservation
* **Offline-First:** Progressive Web App (PWA) for offline access
* **Print-Ready:** Emergency binder optimization

👉 **[Read the full technical documentation](./SURVIVAL_WEB_DESIGN.md)** to understand how this site is architected for maximum resilience.

---

## 📂 Resource Highlights

### 🧠 Cognitive Accessibility (Plain Language & Easy Read)
* **[One Idea Per Line (ASAN)](https://autisticadvocacy.org/wp-content/uploads/2021/07/One-Idea-Per-Line.pdf):** The "survival layout" for neurodivergent users.
* **[18F Content Guide](https://guides.18f.org/content-guide/our-approach/plain-language/):** Tactical ways to strip "bureaucratic-speak" from alerts.
* **[Easy Read vs. Plain Language](https://informationaccessgroup.com/easy-read-versus-plain-language/):** Understanding the different levels of cognitive support.

### 📡 Digital Resilience & Multi-Platform Strategy
* **Beyond X/Twitter:** Strategies for decentralized outreach via **Mastodon, Bluesky, and SMS**.
* **[FEMA: Putting People First](https://web.archive.org/web/20250118002914/https://www.fema.gov/sites/default/files/documents/fema_npd_planning-considerations-putting-people-first_2024.pdf):** Integrating the "Whole Community" into digital response.
* **[King County Inclusive Comms](https://kingcounty.gov/en/dept/executive-services/governance-leadership/emergency-management/teams-committees/inclusive-communications):** A regional model for multi-channel, linguistically diverse alerts.

### 🖨 Digital-to-Physical (The Offline Bridge)
* **[Glia Open Source Medical Devices](https://glia.org/):** 3D-printing medical hardware when supply chains fail.
* **[TMAP (Tactile Map Automated Production)](https://lighthouse-sf.org/tmap/):** Generating physical navigation tools for the blind from digital data.

---

## 🤖 Automated Governance
This repository uses **GitHub Actions** to maintain the "Golden Record":
* **Link-Rot Guard:** Weekly automated checks of both source files and the deployed website (https://mgifford.github.io/inclusive-emergency-readiness/). Broken links are automatically reported with **Archive.org** snapshots as alternatives.
* **Clarity Linter:** Automated readability testing to ensure content stays at a **Grade 6** level.

👉 **[See workflow documentation](./.github/README.md)** for details on automated checks.

---

## 🤝 How to Contribute

**We need your help to make this guide comprehensive, accurate, and trustworthy.**

This is a community-driven project that welcomes contributions from:
* **People with disabilities** - Your lived experience is essential
* **Emergency management professionals** - Share what works in real disasters
* **Accessibility specialists** - Help us meet and exceed standards
* **Municipal teams** - Tell us what you need for implementation
* **Anyone** who wants to help make emergency communications more inclusive

👉 **[Read the full Contributing Guide](./CONTRIBUTING.md)** to get started.

We are building this to be forked and adapted by municipalities worldwide:
* [**ACCESSIBILITY.md**](./ACCESSIBILITY.md) - Our technical commitment
* [**SUSTAINABILITY.md**](./SUSTAINABILITY.md) - Our performance requirements
* [**SURVIVAL_WEB_DESIGN.md**](./SURVIVAL_WEB_DESIGN.md) - How this site is built for resilience
* [**AGENTS.md**](./AGENTS.md) - Protocols for AI and human contributors
* [**DEPLOYMENT.md**](./DEPLOYMENT.md) - Deployment and testing guide

### Contributing to Standards
We actively seek to support and implement the draft requirements of **Accessibility Standards Canada (CAN-ASC-6.4)**. This repository serves as a functional prototype and testing ground.

**Implementation Resources:**
* [**CAN-ASC-6.4 Case Study**](./framework/can-asc-case-study.html) - How this repository serves as a prototype for Emergency Measures standards
* [**Fork Guide for Municipalities**](./framework/fork-guide.html) - Step-by-step guide to adapt this for your local area
* [**Understanding Workflows**](./framework/workflows-guide.html) - Guide to automated checks and CI workflows

If you are a member of the standards committee or have expertise in emergency management, **please open an Issue** to discuss technical implementations and share your experience.

---

## 📜 License
Content for this project is licensed under the **Creative Commons Attribution 4.0 International (CC-BY-4.0)**. Code is licnesed under the AGPL.

***
*"The most accessible information is the information that actually reaches the user when everything else fails."*
