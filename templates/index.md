---
layout: default
title: "Emergency Alert Templates"
---

# Emergency Alert Templates

## Ready-to-Use Templates for Accessible Emergency Communication

These templates follow:
- WCAG 2.2 Level AA
- Web Sustainability Guidelines 1.0
- Plain Language standards
- Grade 6 reading level

## Available Templates

### Evacuation Order Template

[Read Full Template →](/templates/alert-template/)

**Use it for:** Mandatory evacuation orders when residents must leave immediately.

**Includes:**
- Plain language version
- Easy Read version
- Multi-format distribution (SMS, email, social media)
- Print-optimized version
- Translation notes

**Key features:**
- Who must leave
- When to leave
- Where to go
- How to get there
- What to bring
- Emergency contacts

---

## Quality Assurance Checklist

Before using any template:

- [ ] All placeholder text replaced
- [ ] Reading level Grade 6 or lower
- [ ] Contact information verified
- [ ] Links tested
- [ ] Maps accurate
- [ ] Translations reviewed
- [ ] Print version tested
- [ ] Mobile version tested
- [ ] Accessibility tested (screen reader)
- [ ] Approved by legal (if required)

## The Bottom Line

Templates save lives.

They save time.

They ensure consistency.

They incorporate best practices.

**Use them. Customize them. Share them.**

**But most importantly: Test them before you need them.**

---

<div class="alert alert-danger">
  **Critical:** Print these templates now. Put them in your emergency operations binder. You won't have time to search during a crisis.
</div>

## All Templates

{% for template in site.templates %}
- [{{ template.title }}]({{ template.url }})
{% endfor %}
