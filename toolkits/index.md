---
layout: default
title: "Tactical Toolkits"
summary: "Step-by-step guides to make emergency communication accessible. Start with plain language or the digital egress checklist."
reading_level: "Grade 6"
last_updated: 2026-03-02
---

# Tactical Toolkits

> **Summary:** Three practical guides for building accessible emergency communication. Pick the one that matches what you need most.

## Practical Guides for Accessible Emergency Communication

Designed to be practical. These are step-by-step guides.

Use them to build more accessible emergency communication. Especially in an emergency, this will matter.

## Available Toolkits

### Digital Egress Checklist

[Open the Digital Egress Checklist]({{ '/toolkits/digital-egress/' | relative_url }})

**What it is:** A comprehensive checklist to ensure your emergency website is "survival-ready."

**Use it for:** Testing your website before emergency season.

**Time needed:** 1 hour for quick wins, 1 week for full implementation.

**Key sections:**
- Performance (load time, battery drain)
- Accessibility (screen readers, keyboard, contrast)
- Content (critical info first, plain language)
- Multi-format (print, mobile, offline)

---

### Plain Language Guide

[Open the Plain Language Guide]({{ '/toolkits/plain-language/' | relative_url }})

**What it is:** How to write emergency content that everyone can understand, even under stress.

**Use it for:** Writing alerts, instructions, and public communications.

**Time needed:** 30 minutes to learn principles, ongoing to practice.

**Key principles:**
- Short sentences (15 words max)
- Simple words (common vocabulary)
- Active voice ("You must leave")
- Specific language (not vague)

---

### Multi-Platform Communication Guide

[Open the Multi-Platform Communication Guide]({{ '/toolkits/multi-platform/' | relative_url }})

**What it is:** Strategies for distributing emergency alerts beyond traditional platforms.

**Use it for:** Reaching everyone, everywhere, including on Mastodon, Bluesky, SMS, and more.

**Time needed:** 2 hours to set up accounts, ongoing to maintain.

**Key platforms:**
- Tier 1: SMS, Email, Website (always use)
- Tier 2: X/Twitter, Facebook, Instagram
- Tier 3: Mastodon, Bluesky, Threads
- Tier 4: WhatsApp, Signal, Nextdoor

---

## The 80/20 Rule

**80% of impact comes from 20% of effort.**

### The 20% That Matters Most:

1. **Plain language** - Rewrite in Grade 6 level
2. **High contrast** - Black text on white background
3. **Large text** - 18px minimum font size
4. **Alt text** - Add to all images
5. **Mobile-first** - Test on small screens

**Do these 5 things first.**

**Do them before anything else.**

## The Bottom Line

Toolkits are useless unless you use them.

Pick one.

Implement it this week.

Test it.

Improve it.

**Your next emergency will be better.**

---

<div class="alert alert-success">
  **Start Now:** Download the Digital Egress Checklist. Print it. Test one page of your website. Fix what you find.
</div>

## All Toolkits

{% for toolkit in site.toolkits %}
- [{{ toolkit.title }}]({{ toolkit.url }})
{% endfor %}
