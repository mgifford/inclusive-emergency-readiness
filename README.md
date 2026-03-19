# Inclusive Emergency Readiness Guide
### A community resource for accessible emergency communications

[![Accessibility: WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-blue)](./ACCESSIBILITY.md)
[![Sustainability: WSG 1.0](https://img.shields.io/badge/Sustainability-WSG%201.0-green)](./SUSTAINABILITY.md)
[![License: CC-BY-4.0](https://img.shields.io/badge/License-CC--BY--4.0-lightgrey)](https://creativecommons.org/licenses/by/4.0/)

> ⚠️ **EXPERIMENTAL — AI-Generated Content, Needs Real-World Validation**
>
> Most of this site was generated with AI assistance. **All content must be validated in real-life situations before being relied upon.** Guidance here may be incomplete, inaccurate, or untested in actual emergencies.
>
> **Your feedback is essential.** If you have tried anything from this guide — with positive or negative results — please [open an issue](https://github.com/mgifford/inclusive-emergency-readiness/issues) and share what happened. Provide links and references so claims can be discussed and improved by the community.

**Emergency alerts miss too many people.** People with disabilities are disproportionately harmed in disasters — not because of their disability, but because communications systems fail them. This guide helps you fix that.

Use this guide to write emergency communications that everyone can receive, read, and act on — including people using screen readers, people on slow networks, and people under severe stress.

**New here?** [Start in 30 minutes with the Bronze level](./framework/start-now.html) — no prior knowledge needed.

**Have lived experience?** [Your contribution is essential](./CONTRIBUTING.md) — share what worked (or didn't) in a real emergency.

---

## 🚀 Four Pillars for Reaching Everyone
This project implements four principles that together ensure no one is left behind:

1.  **Accessibility (WCAG 2.2 / EN 301 549):** Technical compliance for screen readers and assistive tech
2.  **Sustainability (WSG 1.0):** "Survival UX" that minimizes data and battery drain on stressed networks
3.  **Plain Language & Easy Read:** Cognitive accessibility to counter the "situational disability" of high-stress trauma
4.  **National Standards:** Alignment with **[CAN-ASC-6.4 (Emergency Measures)](https://accessible.canada.ca/creating-accessibility-standards/can-asc-64-emergency-measures)**

We strive to implement these standards based on real-world testing and community feedback.

### 🚦 Start Now Framework
Feeling overwhelmed by the documentation? **[Start Now](./framework/start-now.html)** provides three progressive levels:
* **🥉 Bronze (30 minutes):** Send your first accessible alert today
* **🥈 Silver (5 hours):** Build your alert toolkit this week
* **🥇 Gold (20 hours):** Meet basic accessibility standards this month

**In disasters, progress matters more than perfection.** Start where you are, use what you have, do what you can.

### 🏗️ Survival Web Design
This site is built using **[Survival Web Design](./SURVIVAL_WEB_DESIGN.md)** principles:
* **Static-First:** No heavy JavaScript or databases
* **High-Contrast/Low-Data Mode:** Battery and bandwidth preservation
* **Offline-First:** Progressive Web App (PWA) for offline access
* **Print-Ready:** Emergency binder optimization
* **Crisis Mode:** Ultra-low-bandwidth mirror for 2G networks (14KB rule)

👉 **[How this site is built for resilience — Survival Web Design](./SURVIVAL_WEB_DESIGN.md)**

👉 **[How the site stays accessible on 2G networks — Crisis Mode](./CRISIS_MODE.md)**

### 📊 Ready-Willing-Able Framework
Assess your organization's readiness for inclusive emergency communications using the **[RWA Framework](./framework/rwa-framework.html)**:
* **Willing:** Leadership commitment and prioritization
* **Ready:** Pre-built infrastructure and templates
* **Able:** Staff skills and training

This self-assessment tool helps identify gaps and prioritize improvements.

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

👉 **[How automated checks work — Workflow documentation](./.github/README.md)**

---

## 🤖 AI Disclosure

Transparency about AI use is important to this project. This section records how AI tools have been used.

> This disclosure is a living record. See [AGENTS.md](./AGENTS.md) for the policy requiring all contributors to keep it up to date.

### AI Used to Build This Project

| Tool | Provider | How It Was Used |
| :--- | :--- | :--- |
| **GitHub Copilot** | Microsoft / OpenAI | Used throughout development to draft and refine Markdown content, write Jekyll templates, generate CSS, create GitHub Actions workflows, and review pull requests via Copilot coding agents. |

### AI Used at Runtime

**None.** This is a static website. No AI model runs on the server or is invoked when a user loads a page.

### Browser-Based AI

**Not enabled.** No browser-based AI features (e.g., client-side LLM inference, AI chatbots, or AI-powered widgets) are embedded in or loaded by this site.

### Using AI to Improve This Content

Community members are encouraged to use AI tools (ChatGPT, Claude, Gemini, etc.) with the prompts in the **[LLM Prompts guide](./framework/llm-prompts.html)** to draft or improve content. Any significant AI-assisted contribution should be disclosed in a pull request and, if it represents a major use of a new tool, added to the table above.

---

## 🤝 How to Contribute

**We need your help to make this guide comprehensive, accurate, and trustworthy.**

This is a community-driven project that welcomes contributions from:
* **People with disabilities** - Your lived experience is essential
* **Emergency management professionals** - Share what works in real disasters
* **Accessibility specialists** - Help us meet and exceed standards
* **Municipal teams** - Tell us what you need for implementation
* **Anyone** who wants to help make emergency communications more inclusive

👉 **[How to contribute — Contributing Guide](./CONTRIBUTING.md)**

We are building this to be forked and adapted by municipalities worldwide:
* [**ACCESSIBILITY.md**](./ACCESSIBILITY.md) - Our accessibility commitment and standards
* [**CONTENT_DESIGN.md**](./CONTENT_DESIGN.md) - How we apply content design best practices
* [**SUSTAINABILITY.md**](./SUSTAINABILITY.md) - Our performance requirements
* [**SURVIVAL_WEB_DESIGN.md**](./SURVIVAL_WEB_DESIGN.md) - How this site is built for resilience
* [**CRISIS_MODE.md**](./CRISIS_MODE.md) - Ultra-low-bandwidth emergency access
* [**AGENTS.md**](./AGENTS.md) - Protocols for AI and human contributors
* [**DEPLOYMENT.md**](./DEPLOYMENT.md) - Deployment and testing guide

### Key Implementation Resources

**Framework & Assessment:**
* [**RWA Framework**](./framework/rwa-framework.html) - Self-assess your organization's readiness
* [**Physical-Digital Intersection**](./framework/physical-digital.html) - Bridge digital and physical accessibility
* [**Maps, Disasters, and Accessibility**](./framework/maps-accessibility.html) - How mapping tools coordinate disaster response
* [**LLM Prompts**](./framework/llm-prompts.html) - Use AI tools to improve communications

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
