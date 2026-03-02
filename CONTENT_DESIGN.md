# Content Design Guide

> **Summary:** This guide explains how content design principles are applied to this project. Use it when writing, reviewing, or improving any page in this repository.

Good content design is not decoration. In an emergency, poorly designed content costs lives. This guide draws from [Content Design Accessibility Best Practices](https://github.com/mgifford/ACCESSIBILITY.md/blob/main/examples/CONTENT_DESIGN_ACCESSIBILITY_BEST_PRACTICES.md) and applies them to emergency communications.

---

## Core Principle

A technically accessible page that is confusing or poorly structured still creates barriers.

Design content for the widest possible audience:

- Write clearly
- Structure logically
- Put the most important information first

---

## The Five Rules for This Project

### 1. Plain Language

Write at a **Grade 6 reading level**. Emergency alerts are read by stressed people on failing devices.

**Do this:**
- Use short sentences (under 20 words)
- Use common words ("use" not "utilize", "help" not "facilitate")
- Use active voice ("Evacuate now" not "Evacuation is required")
- Use "you" to speak directly to the reader
- Put the key action first, not last

**Avoid:**
- Jargon without explanation
- Passive voice
- Long sentences with multiple clauses
- Acronyms without spelling them out first

**Check it:** Run content through a readability tool. The [Clarity Linter](./framework/workflows-guide.html) checks Grade level automatically on every pull request.

---

### 2. Inverted Pyramid Structure

Put the most critical information first. Details come after.

For every page:

1. **First:** What does the reader need to do right now?
2. **Second:** Why does it matter?
3. **Third:** How do they do it (steps)?
4. **Last:** Background and references

For emergency alerts, this is not optional. Someone may only read the first line.

---

### 3. One Idea Per Section

Each paragraph covers one idea. Each heading describes one topic.

- Paragraphs: 3 to 5 sentences maximum
- Use bullet lists for three or more parallel items
- Use numbered lists for steps in a sequence
- Leave white space between sections

This follows the [Autistic Self Advocacy Network (ASAN) One Idea Per Line protocol](https://autisticadvocacy.org/wp-content/uploads/2021/07/One-Idea-Per-Line.pdf), required for all critical survival instructions in this project.

---

### 4. Clear Headings and Links

**Headings must describe the content** — not just label it.

| Avoid | Use instead |
|-------|-------------|
| "Introduction" | "What this guide covers" |
| "Overview" | "How to send your first accessible alert" |
| "Section 3" | "Check your message reaches Deaf users" |

**Links must describe the destination** — not just say "click here."

| Avoid | Use instead |
|-------|-------------|
| "Click here" | "Download the alert template (PDF, 45KB)" |
| "Read more" | "Read the full plain-language guide" |
| "Learn more" | "Learn how to test with a screen reader" |

Each link should make sense when read without surrounding text. Screen readers list links out of context.

---

### 5. Supplement Complex Content

Long or technical content needs a summary.

For complex pages, add:

- A **summary box** at the top (the most important 1–3 points)
- A **"What You Need to Know"** section before details
- **Step-by-step breakdowns** for multi-part processes
- **Examples** for abstract concepts
- **Plain language alternatives** for technical terms

---

## Content Review Checklist

Use this checklist before publishing or merging any content:

### Plain Language
- [ ] Sentences are under 20 words on average
- [ ] Key actions use active voice
- [ ] No unexplained jargon or acronyms
- [ ] Content addresses the reader as "you"
- [ ] Reading level is Grade 6 to 8 (automated check runs on PRs)

### Structure
- [ ] Most important information is at the top
- [ ] One idea per paragraph
- [ ] Bullet lists used for three or more parallel items
- [ ] Numbered lists used for sequential steps
- [ ] Paragraphs are 3 to 5 sentences or fewer

### Headings and Navigation
- [ ] Only one H1 per page
- [ ] Headings are descriptive and unique
- [ ] Headings are in logical order (H1 → H2 → H3)
- [ ] No "Introduction" or "Overview" as standalone headings

### Links
- [ ] Every link makes sense without surrounding context
- [ ] No "click here", "read more", or "learn more" as link text
- [ ] PDF and document links include file type and approximate size
- [ ] Links do not open in a new tab without warning the user

### Accessibility
- [ ] Images have meaningful alt text
- [ ] Decorative images use `alt=""`
- [ ] Tables have captions and header cells
- [ ] Page has been read aloud for natural flow
- [ ] Content makes sense when headings are listed out of context

### Emergency Context
- [ ] Critical instructions use One Idea Per Line format
- [ ] Content works when printed (no color-only information)
- [ ] Page is under 500KB total
- [ ] Offline use is possible (no JavaScript-only content)

---

## What Was Incorporated from the Reference Guide

This project adopted the following practices from [Content Design Accessibility Best Practices](https://github.com/mgifford/ACCESSIBILITY.md/blob/main/examples/CONTENT_DESIGN_ACCESSIBILITY_BEST_PRACTICES.md):

| Practice | How it applies here |
|----------|-------------------|
| Plain Language (Grade 8 or lower in the reference guide) | This project uses Grade 6 — stricter than the reference standard — because emergency alerts are read under stress on failing devices. Automated readability check runs on every PR. |
| Inverted Pyramid | Most critical action at the top of every page and alert template |
| One Idea Per Paragraph | Required for all critical survival instructions (ASAN standard) |
| Descriptive Headings | Headings describe content, not just label sections |
| Descriptive Link Text | No "click here" or "read more"; every link works out of context |
| Short Paragraphs | 3 to 5 sentences maximum |
| Summary Boxes | Added to complex pages; "What You Need to Know" sections |
| Definition of Done | Content review checklist above applied before merging |
| Content for Diverse Audiences | Easy Read versions for critical survival instructions |
| Consistent Terminology | Same terms throughout; style follows CONTRIBUTING.md |

### Practices Not Yet Implemented

The following practices from the reference guide are not yet fully implemented. Contributions welcome:

- **Translations / multilingual versions** — content is currently English-only
- **Video summaries** — no video content yet; would benefit complex topics
- **Readability tracking over time** — automated checks run but scores are not tracked historically
- **External review before publishing** — aspirational goal; not yet systematic

---

## Page Length Guidelines

This project favours shorter pages that can be shared as individual links.

| Page type | Target length |
|-----------|--------------|
| Alert templates | 1 screen (no scrolling) |
| How-to guides | Under 800 words |
| Framework pages | Under 1,200 words |
| Reference pages (resources, matrix) | Longer acceptable; use clear headings for navigation |

If a page grows beyond these targets, consider splitting it into linked sub-pages.

---

## Resources

- [Content Design Accessibility Best Practices](https://github.com/mgifford/ACCESSIBILITY.md/blob/main/examples/CONTENT_DESIGN_ACCESSIBILITY_BEST_PRACTICES.md) — the reference guide this project draws from
- [ASAN: One Idea Per Line](https://autisticadvocacy.org/wp-content/uploads/2021/07/One-Idea-Per-Line.pdf) — visual Easy Read layout protocol
- [18F Plain Language Guide](https://guides.18f.gov/content-guide/our-approach/plain-language/) — US government plain language standards
- [Canada.ca Content Style Guide](https://design.canada.ca/style-guide/) — Government of Canada writing standards
- [GOV.UK Style Guide](https://www.gov.uk/guidance/style-guide) — UK Government Digital Service writing standards
- [plainlanguage.gov Guidelines](https://www.plainlanguage.gov/guidelines/) — US plain language guidelines

---

*This guide should be reviewed and updated when new pages are added or when content design standards change.*
