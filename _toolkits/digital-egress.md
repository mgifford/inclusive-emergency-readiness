---
layout: default
title: "Digital Egress Checklist"
category: toolkit
summary: "A comprehensive checklist to ensure your emergency website is survival-ready."
reading_level: "Grade 6"
last_updated: 2026-03-01
---

# Digital Egress Checklist

## What Is Digital Egress?

**Egress** means "a way out."

In buildings, egress is emergency exits.

In digital spaces, egress is **accessible escape routes.**

Your emergency website is a digital egress point.

It must work when everything else fails.

## The Survival-Ready Test

A website is "survival-ready" if it works when:

- Power is limited (battery dying)
- Internet is slow (low bandwidth)
- Device is old (limited processing power)
- User is stressed (cognitive overload)
- Time is critical (seconds matter)

## The Checklist

### Part 1: Performance

#### Load Time
- [ ] Page loads in under 3 seconds on 3G
- [ ] Total page size under 500KB
- [ ] Critical CSS is inlined
- [ ] No blocking JavaScript
- [ ] Images are optimized (WebP format)

**Why it matters:** Slow sites don't load during emergencies.

**How to test:** Use Google PageSpeed Insights.

#### Battery Drain
- [ ] No auto-playing videos
- [ ] No heavy animations
- [ ] Dark mode available
- [ ] Minimal JavaScript
- [ ] No resource-intensive features

**Why it matters:** Dead phone = no information.

**How to test:** Check DevTools Performance tab.

### Part 2: Accessibility

#### Screen Reader
- [ ] All images have alt text
- [ ] Headings are properly nested (H1, H2, H3)
- [ ] Skip link to main content exists
- [ ] Form labels are explicit
- [ ] ARIA landmarks are used correctly

**Why it matters:** 7 million Americans use screen readers.

**How to test:** Use NVDA or VoiceOver.

#### Keyboard Navigation
- [ ] All functions work without a mouse
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] No keyboard traps
- [ ] Shortcuts documented

**Why it matters:** Not everyone can use a mouse.

**How to test:** Unplug your mouse and navigate.

#### Color and Contrast
- [ ] Text has 4.5:1 contrast minimum
- [ ] Color is never the only indicator
- [ ] High contrast mode available
- [ ] Works in grayscale
- [ ] Links are underlined

**Why it matters:** 8% of men are color blind.

**How to test:** Use WebAIM Contrast Checker.

#### Text and Typography
- [ ] Font size at least 16px
- [ ] Text can zoom to 200%
- [ ] Line height at least 1.5
- [ ] No justified text
- [ ] Plain language (Grade 6 level)

**Why it matters:** Reading ability drops under stress.

**How to test:** Use Hemingway Editor for readability.

### Part 3: Content

#### Critical Information First
- [ ] Main action is in the first sentence
- [ ] No preamble or disclaimers
- [ ] Address is visible without scrolling
- [ ] Phone number is clickable
- [ ] Date and time are at the top

**Why it matters:** People scan, they don't read.

**How to test:** Five-second test with unfamiliar users.

#### Plain Language
- [ ] Reading level is Grade 6 or lower
- [ ] Sentences are 15 words or less
- [ ] Active voice used
- [ ] Jargon is defined
- [ ] One idea per paragraph

**Why it matters:** Cognitive load is high in emergencies.

**How to test:** Use textstat or Flesch-Kincaid tools.

#### Visual Structure
- [ ] Bullet points for lists
- [ ] Numbers for steps
- [ ] White space between sections
- [ ] Bold for key terms
- [ ] Icons support text

**Why it matters:** Structure aids comprehension.

**How to test:** Print and review on paper.

### Part 4: Multi-Format

#### Print
- [ ] Print stylesheet exists
- [ ] URLs are printed after links
- [ ] Page breaks are logical
- [ ] Black text on white
- [ ] All content is visible

**Why it matters:** Emergency binders are essential.

**How to test:** Print the page.

#### Mobile
- [ ] Responsive design works on small screens
- [ ] No horizontal scrolling
- [ ] Touch targets are 44px minimum
- [ ] Phone numbers are tappable
- [ ] Forms work on mobile keyboards

**Why it matters:** 85% access internet via mobile.

**How to test:** Use device emulator + real device.

#### Offline
- [ ] Service worker caches content
- [ ] Offline page exists
- [ ] Critical info available offline
- [ ] PWA manifest included
- [ ] Installation prompt available

**Why it matters:** Internet fails in disasters.

**How to test:** Enable airplane mode and reload.

### Part 5: Multi-Channel

#### Social Media
- [ ] Text-only version for Twitter/X
- [ ] Image has embedded text backup
- [ ] Link to full information
- [ ] Hashtag is simple
- [ ] Cross-posted to multiple platforms

**Why it matters:** People are where they are.

**How to test:** Post to test accounts.

#### SMS
- [ ] Message is under 160 characters
- [ ] No abbreviations
- [ ] Link is short
- [ ] Reply-to number works
- [ ] Multiple languages available

**Why it matters:** SMS works when apps don't.

**How to test:** Send to real phone numbers.

#### Email
- [ ] Subject line has action
- [ ] Plain text version exists
- [ ] HTML is simple
- [ ] Images have alt text
- [ ] Footer has contact info

**Why it matters:** Email is still universal.

**How to test:** Send to multiple email clients.

### Part 6: Technical

#### HTML
- [ ] Valid HTML5
- [ ] Semantic elements used
- [ ] Language is declared
- [ ] Meta description exists
- [ ] No broken links

**Why it matters:** Valid code is robust code.

**How to test:** Use W3C Validator.

#### Security
- [ ] HTTPS enabled
- [ ] No mixed content
- [ ] CSP headers set
- [ ] XSS protection enabled
- [ ] Data is encrypted

**Why it matters:** Trust is critical in emergencies.

**How to test:** Use SecurityHeaders.com.

#### Performance Monitoring
- [ ] Error tracking enabled
- [ ] Uptime monitoring active
- [ ] Load time alerts set
- [ ] Broken link checker runs weekly
- [ ] Backup site exists

**Why it matters:** You need to know if it breaks.

**How to test:** Set up monitoring tools.

## Emergency Severity Levels

### Level 1: Information
Website can load in 5 seconds.

Examples: Weather advisories, traffic alerts.

### Level 2: Warning
Website must load in 3 seconds.

Examples: Storm warnings, air quality alerts.

### Level 3: Evacuation
Website must load in 1 second.

Examples: Wildfire evacuation, chemical spill.

**Adjust requirements based on severity.**

## Quick Wins

If you only have 1 hour:

1. Add alt text to images (15 min)
2. Increase text contrast (10 min)
3. Add skip link (5 min)
4. Check mobile view (10 min)
5. Test with keyboard (10 min)
6. Create print stylesheet (10 min)

If you only have 1 day:

Add all Level A WCAG requirements.

If you have 1 week:

Complete this entire checklist.

## Tools

### Testing Tools
- **Lighthouse** - Built into Chrome DevTools
- **WAVE** - Web accessibility evaluation
- **axe DevTools** - Accessibility testing
- **Pa11y** - Automated testing
- **WebPageTest** - Performance testing

### Optimization Tools
- **ImageOptim** - Image compression
- **PurgeCSS** - Remove unused CSS
- **Terser** - JavaScript minification
- **Critical** - Extract critical CSS

### Monitoring Tools
- **UptimeRobot** - Uptime monitoring
- **Dead Link Checker** - Find broken links
- **Google Search Console** - SEO and errors

## The Bottom Line

Digital egress is not optional.

When disasters strike, your website is a lifeline.

Test it like lives depend on it.

Because they do.

**Run this checklist before every emergency season.**

**Update it after every incident.**

**Make digital egress a priority.**

---

<div class="alert alert-danger">
  **Critical:** Print this checklist. Put it in your emergency operations manual. Review it quarterly.
</div>
