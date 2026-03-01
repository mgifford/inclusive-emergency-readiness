---
layout: default
title: Home
---

# Resilience Comms: The Inclusive Emergency Blueprint

## When the power goes out, will your message still get through?

Emergency communication is not a feature—**it's infrastructure**.

When disaster strikes, the digital divide becomes deadly.

<div class="alert alert-danger">
  <strong>Critical Reality:</strong> Every year, emergency alerts fail to reach people with disabilities. This guide exists to change that.
</div>

## What This Guide Offers

### For Government & Municipal Teams

You are responsible for emergency communication.

You need to reach **everyone**.

This guide shows you how.

### Built on Three Frameworks

1. **WCAG 2.2 Level AA/AAA** - Technical accessibility standards
2. **W3C Web Sustainability Guidelines (WSG) 1.0** - Low-bandwidth, high-resilience design  
3. **CAN-ASC-6.4 (Emergency Measures)** - Strategic Canadian standards for inclusive disaster response

Plus: **Plain Language** and **Easy Read** for cognitive accessibility.

> **📋 Project Governance**: Review our operational standards:
> - [ACCESSIBILITY.md](ACCESSIBILITY.md) - Our accessibility commitment and standards
> - [SUSTAINABILITY.md](SUSTAINABILITY.md) - Performance and resilience requirements
> - [AGENTS.md](AGENTS.md) - Protocols for contributors (AI and human)

## Quick Start Guides

<div class="quick-start-grid">
  
### 🚨 Need an Emergency Alert NOW?
Go to [Emergency Templates](/templates/) for ready-to-use alert templates.

### 📚 Understanding Disability Impacts
Explore [The Disability Spectrum](/disabilities/) to learn how emergencies affect different communities.

### 🛠️ Building Accessible Content
Check out [Tactical Toolkits](/toolkits/) for step-by-step implementation guides.

### 📊 Meeting Standards
Review the [Framework Matrix](/framework/matrix.html) for WCAG/WSG/Plain Language crosswalks.

</div>

## Why Accessibility Matters in Emergencies

### The Vision Gap
People who are blind cannot see visual-only alerts.

People with low vision cannot read small, low-contrast text.

People who are color blind miss color-coded warnings.

### The Hearing Gap
People who are Deaf miss audio-only sirens.

People who are hard of hearing cannot understand garbled loudspeaker announcements.

### The Mobility Gap
People with mobility disabilities cannot evacuate quickly.

People using wheelchairs cannot access shelters without ramps.

### The Cognitive Gap
People with cognitive disabilities cannot parse bureaucratic language.

People under stress (everyone in an emergency) cannot process complex information.

### The Technology Gap
People in rural areas hit bandwidth limits.

People with older devices cannot load heavy websites.

People with dying batteries cannot afford animated graphics.

## Real-World Emergency Failures

### Hurricane Katrina (2005)
**Problem:** Evacuation orders used complex legal language.

**Result:** Many people with cognitive disabilities did not understand they needed to leave.

**Outcome:** Preventable deaths.

### 2011 Tōhoku Earthquake & Tsunami (Japan)
**Problem:** Warning systems were primarily audio-based.

**Result:** Deaf community members did not receive warnings.

**Outcome:** Higher mortality rates in the Deaf community.

### COVID-19 Pandemic (2020-2023)
**Problem:** Public health guidance changed frequently without plain language versions.

**Result:** People with cognitive disabilities could not follow changing protocols.

**Outcome:** Higher infection rates in disability communities.

## The Solution: Survival UX

This site follows "Survival Web Design" principles:

✅ **Static-First:** No heavy JavaScript. Works on any device.

✅ **High-Contrast:** WCAG AAA compliant. Readable in bright sunlight.

✅ **Low-Data Mode:** Strips images and fonts. Saves battery and bandwidth.

✅ **Offline-First:** Progressive Web App. Works without internet once visited.

✅ **Print-Ready:** Every page optimized for emergency binders.

## How to Use This Guide

### 1. Learn
Read [The Disability Spectrum](/disabilities/) to understand impacts.

### 2. Plan
Review the [Framework Matrix](/framework/matrix.html) to meet standards.

### 3. Build
Use [Tactical Toolkits](/toolkits/) for implementation.

### 4. Deploy
Adapt [Emergency Templates](/templates/) for your community.

### 5. Test
Run the [Digital Egress Checklist](/toolkits/digital-egress.html) before go-live.

## Automated Quality

This site includes two GitHub Actions:

**🔗 Link-Rot Guard**  
Checks all external URLs weekly.  
Dead links are replaced with Wayback Machine archives.

**📖 Linter of Clarity**  
Checks readability on every commit.  
Grade 6+ reading level triggers warnings.

## Get Started Now

<div class="cta-buttons">
  <a href="/disabilities/" class="btn btn-large">Understand Disability Impacts →</a>
  <a href="/templates/" class="btn btn-large">Use Emergency Templates →</a>
  <a href="/toolkits/" class="btn btn-large">Access Toolkits →</a>
</div>

## The Mission

**Accessibility isn't a checkbox.**

**It's survival architecture.**

**When lives are on the line, your message must reach everyone.**

---

<div class="alert alert-success">
  <strong>Start Here:</strong> If you're new to accessibility, begin with <a href="/disabilities/cognitive.html">Cognitive Disabilities in Emergencies</a>. It explains the "One Idea Per Line" principle that guides this entire guide.
</div>

<style>
  .quick-start-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  .quick-start-grid > * {
    background-color: #f0f8ff;
    padding: 1.5rem;
    border-left: 5px solid #0066cc;
    border-radius: 4px;
  }
  
  .quick-start-grid h3 {
    margin-top: 0;
    font-size: 1.3rem;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
    flex-wrap: wrap;
  }
  
  @media (max-width: 768px) {
    .quick-start-grid {
      grid-template-columns: 1fr;
    }
    
    .cta-buttons {
      flex-direction: column;
    }
    
    .cta-buttons .btn {
      width: 100%;
    }
  }
</style>
