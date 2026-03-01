---
layout: disability
title: "Vision Disabilities in Emergencies"
category: disability
disability_type: vision
summary: "How vision disabilities affect emergency information access and what communicators must do differently."
wcag_focus:
  - "1.1 Text Alternatives"
  - "1.3 Adaptable"
  - "1.4 Distinguishable"
reading_level: "Grade 6"
last_updated: 2026-03-01
---

# Vision Disabilities in Emergencies

## Types of Vision Disabilities

**Blindness:**
- Complete or near-complete vision loss
- Rely on screen readers and audio
- Cannot see visual alerts

**Low Vision:**
- Partial vision loss
- Need magnification and high contrast
- Struggle with small text and low contrast

**Color Blindness:**
- Cannot distinguish certain colors
- Most common: red-green color blindness
- Miss color-coded warnings

## Emergency Impacts

### Visual-Only Alerts Fail

**The Problem:**
Many emergency alerts are visual only.

Maps show evacuation zones in color.

Signs point to emergency exits.

TV news shows scrolling text without audio.

**Real-World Failure:**
A wildfire evacuation map uses red for danger zones.

Someone who is color blind cannot distinguish red from green.

They do not know if their home is in the danger zone.

They do not evacuate.

### Small Text Kills

**The Problem:**
Emergency PDFs use 8-point font.

Websites do not allow zoom.

Text has poor contrast.

**Real-World Failure:**
A shelter address is printed in small gray text.

Someone with low vision cannot read it.

They cannot find the shelter.

They are stranded.

### Images Without Descriptions

**The Problem:**
Emergency maps have no text alternatives.

Infographics show data visually only.

Photos show damage without captions.

**Real-World Failure:**
A flood map shows affected areas.

The image has no alt text.

A screen reader says "image."

Someone who is blind has no information.

## What Communicators Must Do

### Principle 1: Provide Text Alternatives

**For images:**
```html
<img src="evacuation-map.jpg" 
     alt="Evacuation map showing zones A, B, and C in red. 
          Leave these zones immediately.">
```

**For complex graphics:**
Provide a detailed text description.

**For videos:**
Include audio descriptions.

### Principle 2: Never Use Color Alone

**Do this:**
Use color + text + icons.

Red zone = "DANGER - EVACUATE NOW" + warning icon.

**Not this:**
Red zone only.

### Principle 3: High Contrast Always

**Text contrast ratios:**
- Normal text: 4.5:1 minimum (WCAG AA)
- Large text: 3:1 minimum (WCAG AA)
- Emergency content: 7:1 recommended (WCAG AAA)

**Do this:**
Black text on white background.

**Not this:**
Gray text on light gray background.

### Principle 4: Large, Resizable Text

**Minimum font size:** 16px (1rem)

**Allow zoom:** 200% minimum without loss of content.

**Never disable zoom:**
```html
<!-- WRONG -->
<meta name="viewport" content="width=device-width, initial-scale=1, 
      maximum-scale=1, user-scalable=no">

<!-- RIGHT -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Principle 5: Clear Visual Hierarchy

**Use headings properly:**
- H1 for page title
- H2 for major sections
- H3 for subsections

**Use semantic HTML:**
```html
<nav>Navigation</nav>
<main>Main content</main>
<aside>Additional info</aside>
```

### Principle 6: Accessible PDFs

**Do this:**
- Create PDFs from accessible source documents
- Tag all content properly
- Include alt text for images
- Use real text, not images of text
- Test with screen readers

**Not this:**
- Scanned documents without OCR
- Images of text
- Untagged PDFs

## WCAG 2.2 Requirements for Vision

### 1.1.1 Non-text Content (Level A)
All images must have text alternatives.

### 1.3.1 Info and Relationships (Level A)
Visual structure must be programmatically determinable.

### 1.4.1 Use of Color (Level A)
Color cannot be the only way to convey information.

### 1.4.3 Contrast (Minimum) (Level AA)
Text must have 4.5:1 contrast ratio.

### 1.4.6 Contrast (Enhanced) (Level AAA)
Text must have 7:1 contrast ratio.

### 1.4.11 Non-text Contrast (Level AA)
UI components must have 3:1 contrast ratio.

## Emergency Communication Checklist

- [ ] All images have descriptive alt text
- [ ] Color is never used alone to convey information
- [ ] Text has at least 4.5:1 contrast ratio
- [ ] Font size is at least 16px
- [ ] Page can be zoomed to 200%
- [ ] Headings are properly structured (H1, H2, H3)
- [ ] Links have clear, descriptive text
- [ ] PDFs are tagged and accessible
- [ ] Maps have text alternatives
- [ ] Videos have audio descriptions

## Tools and Testing

### Contrast Checkers
- WebAIM Contrast Checker
- Color Contrast Analyzer

### Screen Readers
- NVDA (Windows, free)
- JAWS (Windows)
- VoiceOver (Mac/iOS)
- TalkBack (Android)

### Browser Extensions
- WAVE (Web Accessibility Evaluation Tool)
- Accessibility Insights

## Case Study: Success

### British Columbia Emergency Info

**What they did:**
- High contrast black text on white
- All maps include text descriptions
- Font size: 18px minimum
- Icons paired with text labels
- PDFs created with accessibility tags

**Result:**
95% of people with vision disabilities could access emergency information independently.

## The Bottom Line

Vision accessibility is survival accessibility.

If someone cannot see your alert, they cannot act.

Provide text alternatives always.

Use high contrast always.

Make text large and zoomable.

Never use color alone.

Test with screen readers.

**Clear vision access saves lives.**
