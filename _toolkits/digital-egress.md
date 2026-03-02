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

In buildings, egress means emergency exits.

Online, egress means **easy escape routes.**

Your emergency website is a way out.

It must work when all else fails.

## Is Your Site Survival-Ready?

A website is "survival-ready" if it works when:

- Power is low (battery dying)
- Internet is slow (low speed)
- Device is old (slow computer)
- User is stressed (hard to think)
- Time is short (seconds matter)

## The Checklist

### Part 1: Speed

#### Load Time
- [ ] Page loads in under 3 seconds on 3G
- [ ] Total page size under 500KB
- [ ] Key CSS is inline (in the page)
- [ ] No blocking scripts
- [ ] Photos are small (WebP format)

**Why it matters:** Slow sites don't load in emergencies.

**How to test:** Use Google PageSpeed Insights.

#### Battery Use
- [ ] No auto-play videos
- [ ] No heavy animations
- [ ] Dark mode option
- [ ] Little JavaScript
- [ ] No power-hungry features

**Why it matters:** Dead phone means no info.

**How to test:** Check DevTools Performance tab.

### Part 2: Easy Access

#### Screen Reader (Tool That Reads Screen)
- [ ] All photos have alt text
- [ ] Headings are in order (H1, H2, H3)
- [ ] Skip link to main content
- [ ] Form labels are clear
- [ ] ARIA tags used right

**Why it matters:** 7 million Americans use screen readers.

**How to test:** Use NVDA or VoiceOver.

#### Keyboard Only
- [ ] All tasks work without a mouse
- [ ] Tab order makes sense
- [ ] Can see where you are
- [ ] No keyboard traps
- [ ] Shortcuts listed

**Why it matters:** Not everyone can use a mouse.

**How to test:** Unplug your mouse. Try to use site.

#### Color and Contrast
- [ ] Text has 4.5:1 contrast at least
- [ ] Never use only color to show meaning
- [ ] High contrast mode option
- [ ] Works in black and white
- [ ] Links are underlined

**Why it matters:** 8% of men are color blind.

**How to test:** Use WebAIM Contrast Checker.

#### Text and Letters
- [ ] Font size at least 16px
- [ ] Text can zoom to 200%
- [ ] Line height at least 1.5
- [ ] Don't justify text (make edges line up)
- [ ] Simple words (Grade 6-7 level)

**Why it matters:** Reading gets harder when stressed.

**How to test:** Use Hemingway Editor.

### Part 3: What You Say

#### Key Info First
- [ ] Main action is in first sentence
- [ ] No intro or warnings first
- [ ] Address shows without scrolling
- [ ] Phone number is clickable
- [ ] Date and time at top

**Why it matters:** People scan. They don't read all.

**How to test:** Five-second test with new users.

#### Simple Words
- [ ] Grade 6-7 reading level
- [ ] Sentences are 15 words or less
- [ ] Use active voice
- [ ] Hard words are defined
- [ ] One idea per paragraph

**Why it matters:** Thinking is hard in emergencies.

**How to test:** Use textstat or Flesch-Kincaid tools.

#### How It Looks
- [ ] Bullet points for lists
- [ ] Numbers for steps
- [ ] White space between parts
- [ ] Bold for key words
- [ ] Pictures support text

**Why it matters:** Layout helps understanding.

**How to test:** Print and check on paper.

### Part 4: Many Formats

#### Print
- [ ] Print style sheet exists
- [ ] Web addresses print after links
- [ ] Page breaks make sense
- [ ] Black text on white
- [ ] All content shows

**Why it matters:** Paper binders are key.

**How to test:** Print the page.

#### Mobile Phone
- [ ] Works on small screens
- [ ] No side scrolling
- [ ] Touch targets are 44px at least
- [ ] Phone numbers are tappable
- [ ] Forms work on phone keyboards

**Why it matters:** 85% use internet on phones.

**How to test:** Use phone emulator plus real phone.

#### Offline (No Internet)
- [ ] Service worker saves content
- [ ] Offline page exists
- [ ] Key info works offline
- [ ] PWA file included (PWA means phone app)
- [ ] Install prompt shows

**Why it matters:** Internet fails in disasters.

**How to test:** Turn on airplane mode. Reload page.

### Part 5: Many Channels

#### Social Media
- [ ] Text-only version for Twitter/X
- [ ] Photo has text backup
- [ ] Link to full info
- [ ] Tag is simple
- [ ] Posted to many sites

**Why it matters:** People are where they are.

**How to test:** Post to test accounts.

#### Text Messages
- [ ] Message under 160 letters
- [ ] No short forms
- [ ] Link is short
- [ ] Reply number works
- [ ] Many languages available

**Why it matters:** Texts work when apps don't.

**How to test:** Send to real phones.

#### Email
- [ ] Subject line has action
- [ ] Plain text version exists
- [ ] HTML is simple
- [ ] Photos have alt text
- [ ] Bottom has contact info

**Why it matters:** Email still works everywhere.

**How to test:** Send to many email programs.

### Part 6: Tech

#### HTML Code
- [ ] Valid HTML5
- [ ] Semantic tags used (tags with meaning)
- [ ] Language is set
- [ ] Meta description exists
- [ ] No broken links

**Why it matters:** Good code is strong code.

**How to test:** Use W3C Validator.

#### Security
- [ ] HTTPS on (secure web)
- [ ] No mixed content
- [ ] CSP headers set (blocks bad code)
- [ ] XSS protection on (blocks harmful scripts)
- [ ] Data is locked (encrypted means locked)

**Why it matters:** Trust is key in emergencies.

**How to test:** Use SecurityHeaders.com.

#### Watching Performance
- [ ] Error tracking on
- [ ] Uptime watching active
- [ ] Load time alerts set
- [ ] Link checker runs weekly
- [ ] Backup site exists

**Why it matters:** You need to know if it breaks.

**How to test:** Set up watching tools.

## Emergency Levels

### Level 1: Info
Website can load in 5 seconds.

Examples: Weather news, traffic alerts.

### Level 2: Warning
Website must load in 3 seconds.

Examples: Storm warnings, air alerts.

### Level 3: Leave Now
Website must load in 1 second.

Examples: Wildfire, chemical spill.

**Change needs based on how bad it is.**

## Quick Fixes

If you have 1 hour:

1. Add alt text to photos (15 min)
2. Make text darker (10 min)
3. Add skip link (5 min)
4. Check phone view (10 min)
5. Test with keyboard (10 min)
6. Make print style sheet (10 min)

If you have 1 day:

Add all Level A WCAG needs.

If you have 1 week:

Do this whole checklist.

## Tools

### Testing Tools
- **Lighthouse** - Built into Chrome tools
- **WAVE** - Web access check
- **axe DevTools** - Access testing
- **Pa11y** - Auto testing
- **WebPageTest** - Speed testing

### Make It Better Tools
- **ImageOptim** - Make photos smaller
- **PurgeCSS** - Remove unused CSS
- **Terser** - Make scripts smaller
- **Critical** - Pull out key CSS

### Watching Tools
- **UptimeRobot** - Watch if site is up
- **Dead Link Checker** - Find broken links
- **Google Search Console** - SEO and errors

## The Main Point

Digital egress is not optional.

When disaster hits, your website saves lives.

Test it like lives depend on it.

They do.

**Run this checklist before every emergency season.**

**Update it after every event.**

**Make digital egress a top priority.**

---

<div class="alert alert-danger">
  **Critical:** Print this checklist. Put it in your emergency manual. Check it every 3 months.
</div>
