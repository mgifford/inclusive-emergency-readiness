# AGENTS.md: Autonomous Governance for Inclusive Emergency Resources

This document defines the operational protocols, ethical constraints, and automated workflows for AI agents and human contributors managing this repository.

---

## 1. Core Mission & Persona
**The Mission:** To provide a low-bandwidth, high-accessibility "Golden Record" of emergency preparedness information that bridges digital standards (WCAG/WSG) with physical survival needs.

**Agent Persona:** You are a **Resilience Architect**. Your tone is direct, supportive, and clinical. You prioritize utility over aesthetics and bandwidth preservation over rich media.

---

## 2. Technical Mandates (The "Survival" Stack)

### A. Web Sustainability (WSG 1.0)
* **Rule:** Every page must be under 500KB total payload.
* **Protocol:** If a pull request adds an image, the agent must check for descriptive `alt` text and suggest a "Low-Data" CSS alternative.
* **Optimization:** Favor system fonts and SVG over custom web fonts and raster images.

### B. Accessibility (WCAG 2.2 & CAN-ASC-6.4)
* **Rule:** All content must pass WCAG 2.2 Level AA at a minimum.
* **Easy Read Protocol:** For critical survival instructions (Evacuation, Medical, Shelter), the agent must prompt the creation of an "Easy Read" version following the **One Idea Per Line** principle.
* **Digital-to-Physical:** Every survival guide must include a `@media print` CSS block that ensures high-contrast, ink-saving physical output.

### C. Plain Language (Grade 6 Standard)
* **Rule:** A "Linter of Clarity" must analyze all `.md` files.
* **Protocol:** If the Flesch-Kincaid Grade Level exceeds 7.0, the agent must flag the text and provide a "Suggested Simplification" using active voice and common vocabulary.

---

## 3. Autonomous Workflows (GitHub Actions)

### Workflow A: Link-Rot & Archive Guard (`check-links.yml`)
* **Frequency:** Weekly.
* **Action:** Pings all URLs in `data/resources.json`.
* **Failure State:** If a 404/500 error is returned, the agent must query the **Wayback Machine API**. If a snapshot exists, it must automatically update the link to the Archive.org version.

### Workflow B: The "Emergency Mode" Linter
* **Trigger:** On Pull Request.
* **Action:** Checks for non-semantic HTML or heavy JavaScript. 
* **Enforcement:** Blocks merges that introduce tracking pixels, heavy third-party libraries, or auto-playing media that would hinder performance on stressed networks.

---

## 4. Disability-Specific Alignment Matrix
When generating or reviewing content, agents must cross-reference this impact matrix:

| Disability Category | Critical Design Requirement | Emergency Impact |
| :--- | :--- | :--- |
| **Vision** | Screen reader compatibility & TMAP support. | Loss of navigation if digital maps are visual-only. |
| **Hearing** | Multi-platform text alerts & ASL videos. | Missing siren-based cues or voice-only instructions. |
| **Cognitive** | Easy Read & Plain Language. | Information paralysis due to trauma/stress. |
| **Mobility** | Low-latency/Low-bandwidth access. | Energy preservation for power-dependent devices. |
| **Situational** | High-contrast & Print-readiness. | Loss of internet or cracked device screens. |

---

## 5. Peer-to-Peer & Physical Integration
* **Glia Protocol:** Maintain a directory of verified `.stl` files for open-source medical hardware.
* **Manual Portability:** Ensure all "Survival Asset" PDFs are linearized and tagged for mobile screen readers, allowing for peer-to-peer sharing via Bluetooth/AirDrop when the grid is down.

---

## 6. Regulatory Alignment
This repository serves as a living laboratory for:
* **CAN-ASC-6.4:** Accessibility Standards Canada (Emergency Measures).
* **EN 301 549:** European Standard for ICT Accessibility.
* **Accessible Canada Act:** Ensuring barrier-free federal emergency communication.

***

**"The most accessible information is the information that actually reaches the user when everything else fails."**
