---
layout: default
title: "The Disability Spectrum"
---

# The Disability Spectrum

## Understanding Disability Impacts in Emergencies

Emergencies affect everyone.

But they affect people with disabilities differently.

And more severely.

This section shows you how—and what to do about it.

## The Core Types

### Vision Disabilities

[Read Full Guide →](/disabilities/vision/)

**Impact:** Cannot see visual-only alerts, maps, signs, or low-contrast text.

**Critical needs:** Alt text, high contrast, text alternatives, audio descriptions.

---

### Hearing Disabilities

[Read Full Guide →](/disabilities/hearing/)

**Impact:** Cannot hear audio sirens, loudspeaker announcements, or phone calls.

**Critical needs:** Captions, transcripts, text alerts, visual signals, sign language.

---

### Cognitive Disabilities

[Read Full Guide →](/disabilities/cognitive/)

**Impact:** Cannot process complex language, long instructions, or information overload.

**Critical needs:** Plain language, one idea per line, simple steps, extra time.

---

### Situational Disabilities

[Read Full Guide →](/disabilities/situational/)

**Impact:** Anyone can experience temporary disabilities during emergencies (stress, lost devices, language barriers).

**Critical needs:** Simple design, multiple formats, offline access, resilience.

## Why This Matters

### The Statistics

- **26% of adults in the US have a disability** (CDC, 2023)
- **1 in 4 people** will experience temporary disability in an emergency
- **61 million people** in the US have a disability
- **1 billion people worldwide** have a disability

### The Reality

In every emergency, you are communicating with:
- People who cannot see
- People who cannot hear
- People who cannot process complex information quickly
- People who are temporarily disabled by the situation

**If your emergency communication is not accessible, you are leaving people behind.**

## The Emergency Disability Impact Matrix

| Disability Type | Primary Barrier | Emergency Risk | Communication Fix |
|----------------|-----------------|----------------|-------------------|
| **Vision** | Visual-only information | Cannot see alerts, maps, signs | Alt text, audio, high contrast |
| **Hearing** | Audio-only information | Cannot hear sirens, announcements | Captions, text, visual alerts |
| **Cognitive** | Complex language | Cannot understand instructions | Plain language, simple steps |
| **Situational** | Stress, chaos, barriers | Reduced capacity | Simple, multi-format, resilient |

## Start Here

If you're new to accessibility in emergencies:

1. **Read:** [Cognitive Disabilities](/disabilities/cognitive/) - Learn the "One Idea Per Line" principle
2. **Apply:** [Plain Language Toolkit](/toolkits/plain-language/) - Write clear instructions
3. **Check:** [Digital Egress Checklist](/toolkits/digital-egress/) - Test your website
4. **Implement:** [Emergency Templates](/templates/alert-template/) - Use proven templates

## The Bottom Line

Disability is not an edge case.

Disability is not a special circumstance.

Disability is human diversity.

**When you design for disability, you design for everyone.**

**When lives are on the line, accessibility isn't optional.**

---

<div class="alert alert-success">
  **Quick Action:** Pick one disability type. Read the guide. Apply one recommendation today.
</div>

## All Guides

{% for disability in site.disabilities %}
- [{{ disability.title }}]({{ disability.url }})
{% endfor %}
