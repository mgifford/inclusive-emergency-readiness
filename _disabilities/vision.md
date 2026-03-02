---
layout: disability
title: "Users Requiring Non-Visual Information"
category: disability
disability_type: vision
summary: "How to reach people who cannot see visual alerts during crises and what you must do."
wcag_focus:
  - "1.1 Text Alternatives"
  - "1.3 Adaptable"
  - "1.4 Distinguishable"
reading_level: "Grade 6"
last_updated: 2026-03-01
---

# Users Requiring Non-Visual Information

## Provide text for all visuals. Always.

**Who needs this:**
- People who cannot see
- People with partial vision
- People who cannot tell colors apart
- People in dark or smoky rooms
- People with broken screens
- People using screen readers

## Access Needs

### People Who Cannot See
- Use screen readers (software that reads text aloud)
- Need text versions of all images
- Cannot see visual-only alerts

### People With Partial Vision
- Need text they can make bigger
- Need high contrast (dark text on light background)
- Struggle with small or gray text

### People Who Cannot Tell Colors Apart
- Most common: Cannot tell red from green
- Cannot use color-only codes
- Miss color-only warnings

### Situational Barriers
- Power outage (dark room)
- Fire or disaster (smoke-filled room)
- Broken device screen
- Bright sunlight (glare on screen)

## Crisis Impacts

### Visual-Only Alerts Fail

**Action needed:** Add text and audio to all visual alerts.

**Why it fails:**
Maps use color only.

Signs use symbols only.

TV scrolls text with no audio.

**Real crisis:**
A wildfire map uses red for danger zones.

Someone cannot tell red from green.

They do not know their home is in danger.

They do not leave.

### Small Text Can Kill

**Action needed:** Use large text (16px minimum).

**Why it fails:**
Emergency PDFs use tiny font.

Web sites do not let you zoom.

Text uses poor contrast.

**Real crisis:**
A shelter address is in small gray text.

Someone with partial vision cannot read it.

They cannot find the shelter.

They get stranded.

### Images Without Text

**Action needed:** Provide text for every image.

**Why it fails:**
Maps have no text version.

Charts show data with no text.

Photos have no description.

**Real crisis:**
A flood map shows danger areas.

The image has no alt text.

**Alt text** (what it means): Text that screen readers read aloud to describe an image.

A screen reader says "image" only.

Someone who cannot see has no information.

## What You Must Do

### Rule 1: Add Text to All Images

**For images, write this:**
```html
<img src="map.jpg" 
     alt="Map showing zones A, B, and C in red. 
          Leave these zones now.">
```

**What the code means:**
- `img src` = the image file
- `alt` = text description that screen readers read

**Screen reader** (what it means): Software that reads web pages aloud.

**Write good alt text:**
- Say what the image shows
- Include key information
- State the action needed

**For complex graphics:**
Provide a detailed text description.

**For videos:**
Include audio descriptions.

### Rule 2: Never Use Color Alone

**You must combine color with text and symbols.**

**Do this:**
Red zone + text "DANGER" + warning icon.

**Not this:**
Red zone only.

People who cannot see colors will miss the warning.

### Rule 3: Use High Contrast Always

**You must make text easy to see.**

**Contrast ratio** (what it means): How different dark and light are. Higher is better.

**What you need:**
- Normal text: 4.5 to 1 minimum
- Large text: 3 to 1 minimum
- Emergency text: 7 to 1 (best)

**Do this:**
Black text on white background.

**Not this:**
Gray text on light gray background.

### Rule 4: Make Text Large and Zoomable

**You must use big text people can make bigger.**

**Minimum size:** 16 pixels.

**Zoom** (what it means): Making text bigger on your device.

**You must let users zoom to 200%.**

Do not block zoom with code.

**This code blocks zoom (wrong):**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, 
      maximum-scale=1, user-scalable=no">
```

**This code allows zoom (right):**
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

The first code stops people from zooming.

The second code lets people zoom freely.

### Rule 5: Use Clear Structure

**You must organize content with headings.**

**Semantic HTML** (what it means): Code that describes what each part does.

**Use headings in order:**
- H1 for page title
- H2 for major sections
- H3 for smaller sections

**Use these tags:**
```html
<nav>Navigation</nav>
<main>Main content</main>
<aside>Extra information</aside>
```

These tags tell screen readers what each part is.

### Rule 6: Make PDFs Readable

**You must create PDFs that screen readers can read.**

**PDF** (what it means): A document file that looks the same on all devices.

**You must do this:**
- Use real text (not pictures of text)
- Add tags to all content
- Add alt text to all images
- Test with screen readers

**Do not do this:**
- Scan paper to make PDFs
- Use images instead of text
- Skip tagging

## Standards You Must Meet

**WCAG** (what it means): Web Content Accessibility Guidelines. Rules for making websites work for everyone.

### Standard 1.1.1: Add Text to All Images

**User impact:** Screen readers can describe images.

**You must provide alt text for every image.**

Without alt text, users hear only "image."

They miss critical information.

### Standard 1.3.1: Code Structure Correctly

**User impact:** Screen readers understand page layout.

**You must use proper HTML tags.**

Use heading tags (H1, H2, H3) in order.

Use list tags for lists.

Screen readers announce structure to users.

### Standard 1.4.1: Do Not Use Color Alone

**User impact:** Color-blind users understand warnings.

**You must combine color with text.**

Red + "DANGER" works.

Red alone fails.

### Standard 1.4.3: Use Enough Contrast

**User impact:** People with low vision read text.

**You must use 4.5 to 1 contrast minimum.**

Test your colors with a contrast checker.

### Standard 1.4.6: Use High Contrast for Critical Info

**User impact:** Everyone reads text easily.

**You should use 7 to 1 contrast for emergencies.**

This is the best level.

### Standard 1.4.11: Make Buttons Visible

**User impact:** Users find and use controls.

**You must make buttons stand out.**

Buttons need 3 to 1 contrast with background.

## Your Checklist

**Test your emergency site with these:**

- [ ] All images have alt text
- [ ] You never use color alone
- [ ] Text contrast is 4.5 to 1 minimum
- [ ] Font size is 16 pixels minimum
- [ ] Users can zoom to 200%
- [ ] Headings go in order (H1, H2, H3)
- [ ] Links say where they go
- [ ] PDFs have tags and alt text
- [ ] Maps include text descriptions
- [ ] Videos include audio descriptions

## Tools You Can Use

### Test Contrast
**Use these free tools:**
- WebAIM Contrast Checker (online)
- Color Contrast Analyzer (download)

### Test With Screen Readers
**Download these programs:**
- NVDA (Windows, free)
- JAWS (Windows, paid)
- VoiceOver (Mac and iPhone, built-in)
- TalkBack (Android, built-in)

### Test Your Whole Site
**Add these to your browser:**
- WAVE (finds accessibility problems)
- Accessibility Insights (checks standards)

## Real Success Story

### British Columbia Emergency System

**What they did right:**
- Used black text on white background
- Added text to every map
- Made font 18 pixels (large)
- Put text with every icon
- Tagged all PDFs for screen readers

**What happened:**
95 out of 100 people with vision needs accessed emergency info alone.

No help needed.

## Key Points

**Vision access is survival access.**

People who cannot see your alert cannot act.

**You must:**
- Add text to all images
- Use high contrast (4.5 to 1 minimum)
- Make text large (16 pixels minimum)
- Let users zoom to 200%
- Never use color alone
- Test with screen readers

**Clear vision access saves lives.**
