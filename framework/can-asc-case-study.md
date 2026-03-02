---
layout: default
title: "CAN-ASC-6.4 Case Study: Sustainable ICT in Emergency Measures"
category: framework
summary: "How this repository serves as a functional prototype for Accessibility Standards Canada Emergency Measures (CAN-ASC-6.4)"
reading_level: "Grade 6"
last_updated: 2026-03-01
---

# CAN-ASC-6.4 Case Study

## What Is CAN-ASC-6.4?

**CAN-ASC-6.4** is a Canadian standard.

It focuses on **Emergency Measures**.

It ensures emergency information works for people with disabilities.

**Goal:** No one gets left behind during a crisis.

---

## Why This Repository Matters

This project is a **Functional Prototype**.

It shows what emergency systems should do for **all disabilities**.

### What We Demonstrate

1. **Accessible by design** - WCAG 2.2 Level AA minimum
2. **Sustainable by default** - WSG 1.0 for low bandwidth
3. **Clear in crisis** - Grade 6 plain language
4. **Available offline** - Works when the internet fails

---

## The Four Pillars (Evidence-Based)

### Pillar 1: Technical Accessibility

**Standard:** WCAG 2.2 Level AA

**Why:** Screen readers must work during evacuations.

**How We Do It:**
- Alt text on all images
- Keyboard navigation works everywhere
- High contrast (7:1 for critical content)
- Skip links for fast navigation

**Evidence:** See [ACCESSIBILITY.md](/ACCESSIBILITY.md)

### Pillar 2: Web Sustainability

**Standard:** WSG 1.0

**Why:** Sites must load on weak signals and dying batteries.

**How We Do It:**
- Pages under 500KB
- System fonts only (no downloads)
- No auto-playing videos
- Dark mode to save battery

**Evidence:** See [SUSTAINABILITY.md](/SUSTAINABILITY.md)

### Pillar 3: Cognitive Access

**Standard:** Plain Language (Grade 6)

**Why:** Stress makes thinking hard. Simple words save lives.

**How We Do It:**
- Short sentences (15 words or less)
- Active voice ("Do this" not "This should be done")
- One idea per line
- Bullets and numbers

**Evidence:** See [Plain Language Toolkit]({{ '/toolkits/plain-language.html' | relative_url }})

### Pillar 4: Physical Resilience

**Standard:** Print-ready and offline-first

**Why:** Digital fails. Paper and cache work.

**How We Do It:**
- High-contrast print CSS
- Progressive Web App (PWA)
- Offline fallback page
- PDF downloads available

**Evidence:** See [SURVIVAL_WEB_DESIGN.md](/SURVIVAL_WEB_DESIGN.md)

---

## Digital Egress: A New Concept

**Egress** = A way out.

Buildings have fire exits.

Websites need **Digital Egress**.

### Definition

> **Digital Egress** is the minimum viable information path a user needs when their technology is failing.

### The Three Rules

1. **Find it fast** - Critical info in 3 clicks or less
2. **Read it stressed** - Grade 6 language only
3. **Save it offline** - Works without internet

### Implementation

We built a [Digital Egress Checklist]({{ '/toolkits/digital-egress/' | relative_url }}).

Use it to test your emergency website.

---

## How to Use This Repository

### For Standards Committees

**Problem:** Need concrete examples of accessible emergency systems.

**Solution:** Fork this repo. Test the concepts. Propose changes.

**Next Steps:**
1. Review the [Framework Matrix]({{ '/framework/matrix.html' | relative_url }})
2. Test the [Digital Egress Checklist]({{ '/toolkits/digital-egress/' | relative_url }})
3. Open an Issue to discuss technical details

### For Municipalities and Agencies

**Problem:** Need to build accessible emergency sites quickly.

**Solution:** Fork this repo. Update local info. Deploy.

**Next Steps:**
1. Read the [Fork Guide]({{ '/framework/fork-guide.html' | relative_url }})
2. Update contact info and local resources
3. Deploy using [DEPLOYMENT.md](/DEPLOYMENT.md)

### For Researchers and Advocates

**Problem:** Need evidence that sustainable ICT works.

**Solution:** Use this repo as a case study.

**Next Steps:**
1. Check our [automated workflows](/.github/workflows/)
2. Review readability and link-checking results
3. Cite this repository in your work

---

## Open-Sourcing Preparedness

### The Fork Model

Small towns can copy this work.

Change the local details.

Have a working emergency site in hours.

**Example:**
- A town in BC forks this Ottawa-based logic
- Updates local emergency numbers
- Changes shelter locations
- Keeps all accessibility features
- Deploys in one day

### The License

We use **CC-BY-4.0** (Creative Commons Attribution).

**Why:** Emergency information must be free to share.

**Rules:**
- Use it
- Change it
- Share it
- Give credit

---

## Evidence-Based Advocacy

### What We Prove

1. **Accessibility and sustainability work together**
   - Example: System fonts reduce bandwidth AND work better with screen readers

2. **Plain language is faster to read**
   - Example: Grade 6 text loads faster in stressed brains

3. **Automation prevents mistakes**
   - Example: Our link-checker catches broken URLs weekly
   - Example: Our readability linter flags complex text

4. **Offline-first saves lives**
   - Example: PWA works when cell towers fail

### How to Cite This Work

**For Academic Papers:**
```
Gifford, M. (2026). Inclusive Emergency Readiness Guide: 
A functional prototype for CAN-ASC-6.4 emergency measures. 
GitHub. https://github.com/mgifford/inclusive-emergency-readiness
```

**For Standards Proposals:**
```
Reference Implementation: Inclusive Emergency Readiness Guide
Demonstrates: WCAG 2.2 + WSG 1.0 + Plain Language
URL: https://mgifford.github.io/inclusive-emergency-readiness/
```

---

## Measuring Success

### Technical Metrics

| Metric | Target | Our Result |
|--------|--------|------------|
| Page Load (3G) | < 3 seconds | ✅ Achieved |
| Page Size | < 500KB | ✅ Achieved |
| Accessibility | WCAG 2.2 AA | ✅ Achieved |
| Reading Level | Grade 6 | ✅ Most pages |
| Offline Access | Yes | ✅ PWA enabled |

### Real-World Impact

- **Forked by:** [List grows as people fork]
- **Used in:** Municipal emergency plans
- **Cited in:** Standards discussions

---

## Next Steps for CAN-ASC-6.4

### What Standards Should Require

Based on this prototype, we suggest:

1. **Page weight limits** (500KB for critical pages)
2. **Reading level requirements** (Grade 6 for alerts)
3. **Offline functionality** (PWA or equivalent)
4. **Automated testing** (Link checking, readability)
5. **Multi-channel delivery** (Not just websites)

### How We Can Help

Open an Issue on GitHub to discuss:
- Technical implementation details
- Testing methodologies
- Evidence collection
- Standards language

---

## Related Resources

- [Framework Matrix: WCAG, WSG & Plain Language]({{ '/framework/matrix.html' | relative_url }})
- [Digital Egress Checklist]({{ '/toolkits/digital-egress/' | relative_url }})
- [Fork Guide for Municipalities]({{ '/framework/fork-guide.html' | relative_url }})
- [Disability-Specific Impact]({{ '/disabilities/' | relative_url }})

---

## Contact for Standards Work

If you work on CAN-ASC-6.4 or similar standards:

**Please open a GitHub Issue** to start a conversation.

We are here to support evidence-based policy.

---

**"Standards save lives. Evidence shows the way."**
