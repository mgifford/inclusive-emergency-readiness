---
layout: default
title: "Framework Matrix: WCAG, WSG & Plain Language"
category: framework
summary: "A practical cross-walk between WCAG 2.2, Web Sustainability Guidelines, and Plain Language specifically for emergency alerts."
reading_level: "Grade 6"
last_updated: 2026-03-01
---

# Framework Matrix

## Three Frameworks, One Goal

Emergency communication must be:

1. **Accessible** (WCAG 2.2)
2. **Sustainable** (WSG 1.0)
3. **Understandable** (Plain Language)

This matrix shows how they work together.

## The Emergency Alert Matrix

| **Emergency Need** | **WCAG 2.2** | **WSG 1.0** | **Plain Language** |
|-------------------|-------------|------------|-------------------|
| **Text Readability** | 1.4.3 Contrast (AA): 4.5:1 minimum | 2.5 Readable Text: Sufficient contrast | Use short words. Use short sentences. |
| **Images** | 1.1.1 Non-text Content: Alt text required | 3.3 Optimize Images: Compress, use WebP | Describe what matters. Skip decoration. |
| **Page Load** | 2.4.5 Multiple Ways: Fast navigation | 1.1 Page Weight: Under 1MB | Critical info first. Details can wait. |
| **Mobile Access** | 1.4.10 Reflow: Work at 320px width | 2.3 Mobile-First: Optimize for mobile | Short paragraphs. Bullets. Numbers. |
| **Offline Access** | N/A (not covered) | 2.7 Offline-First: Cache critical content | Include phone numbers. Include addresses. |
| **Language** | 3.1.5 Reading Level: AAA recommends lower secondary | 2.5 Readable Text: Simple language | Grade 6 reading level. Active voice. |
| **Navigation** | 2.4.1 Bypass Blocks: Skip links | 1.2 Efficient Code: Minimize HTML | Main action at top. No menus needed. |
| **Color** | 1.4.1 Use of Color: Never color alone | 2.2 Dark Mode: Support user preference | Say "red zone" not "the red area." |
| **Forms** | 3.3.2 Labels: Clear form labels | 1.3 Reduce Scripts: Minimize JavaScript | One question per field. Example shown. |
| **Updates** | 4.1.3 Status Messages: Announce changes | 1.5 Update Frequency: Cache wisely | "New: [Information]" at the top. |

## Deep Dive: Alert Text

### WCAG 2.2 Requirements

**1.4.3 Contrast (Minimum) - Level AA**
- Text: 4.5:1 contrast ratio
- Large text: 3:1 contrast ratio

**3.1.5 Reading Level - Level AAA**
- Supplemental content for advanced text
- Lower secondary education level preferred

**2.4.6 Headings and Labels - Level AA**
- Descriptive headings and labels

### WSG 1.0 Requirements

**2.5 Provide Accessible, Usable, Minimal Content**
- Remove unnecessary content
- Use simple language
- Optimize for low literacy

**1.1 Undertake Systemic Impacts Assessment**
- Consider bandwidth constraints
- Test on low-end devices
- Measure carbon footprint

### Plain Language Requirements

**Short sentences:**
- 15 words maximum
- One idea per sentence

**Common words:**
- Use "use" not "utilize"
- Use "end" not "terminate"
- Use "help" not "assistance"

**Active voice:**
- "We will call you" not "You will be contacted"
- "Go to the school" not "The school should be visited"

## Example: Evacuation Alert

### ❌ FAILS All Three Frameworks

```
EMERGENCY NOTIFICATION

Pursuant to municipal bylaw 2024-15, residents domiciled within 
the geographical boundaries designated as evacuation zones A 
through D are hereby mandated to vacate their premises and 
relocate to approved emergency shelter facilities or alternative 
accommodations outside the demarcated impact perimeter. 
Vehicular egress should be facilitated via arterial roadways 
as delineated in the municipal emergency response protocol.

For additional information, please consult our website or 
contact the emergency operations center.
```

**WCAG Failures:**
- Reading level: Grade 16+ (college)
- No clear heading structure
- Buried critical information

**WSG Failures:**
- Verbose content (85 words)
- No mobile optimization considered
- Requires multiple lookups

**Plain Language Failures:**
- Passive voice
- Bureaucratic jargon
- Multiple ideas per sentence
- No clear action

### ✅ PASSES All Three Frameworks

```
EVACUATION ORDER

You must leave now.

Who: Everyone in zones A, B, C, D

When: Leave in the next 2 hours

Where to go: Main Street School (100 Main St)

How: Drive north on Highway 1
     Or take the bus from City Hall (leaves every 30 minutes)

Need help? Call 555-1234

[Map showing evacuation zones]
[Map showing route to shelter]
```

**WCAG Compliance:**
- Reading level: Grade 6
- Clear heading (H1)
- Structured list (scannable)
- Images have alt text (in implementation)

**WSG Compliance:**
- Concise content (45 words)
- Mobile-friendly structure
- Maps can be simple, optimized images
- Cacheable for offline

**Plain Language Compliance:**
- Active voice ("You must leave")
- Short sentences (3-6 words)
- Common words only
- One idea per line
- Clear action at top

## Cross-Framework Techniques

### Technique 1: Chunking

**Meets:**
- WCAG: 2.4.10 Section Headings
- WSG: 2.5 Minimal Content
- Plain Language: Visual hierarchy

**Implementation:**
```
## What to Do
1. Turn off gas
2. Lock doors
3. Take your medicine

## Where to Go
Main Street School
100 Main Street

## How to Get There
Take Highway 1 north
```

### Technique 2: Progressive Disclosure

**Meets:**
- WCAG: 2.4.4 Link Purpose
- WSG: 1.1 Reduce Page Weight
- Plain Language: Essential info first

**Implementation:**
```
SHELTER OPEN

Address: 100 Main Street
Phone: 555-1234

[Details link] (optional: hours, amenities, capacity)
```

### Technique 3: Multi-Modal Content

**Meets:**
- WCAG: 1.1.1 Non-text Content
- WSG: 3.4 Provide Alternative Formats
- Plain Language: Multiple ways to understand

**Implementation:**
- Text: "Go to Main Street School"
- Map: Visual showing location
- Icon: School building symbol
- Audio: MP3 recording (optional)
- Video: Sign language (optional)

## Priority Matrix

When time is limited, prioritize:

| **Priority** | **Must Have** | **Should Have** | **Nice to Have** |
|-------------|--------------|----------------|-----------------|
| **WCAG** | Level A compliance | Level AA compliance | Level AAA compliance |
| **WSG** | Under 1MB page weight | Under 500KB | Under 100KB |
| **Plain Language** | Grade 6 reading level | Grade 4 reading level | Easy Read version |

## Testing Against All Three

### Step 1: WCAG Testing
- **Tool:** WAVE, axe DevTools
- **Manual:** Screen reader, keyboard navigation
- **Target:** Level AA minimum

### Step 2: WSG Testing
- **Tool:** WebPageTest, Lighthouse
- **Manual:** Test on 3G, old device
- **Target:** Load under 3 seconds on 3G

### Step 3: Plain Language Testing
- **Tool:** Hemingway Editor, textstat
- **Manual:** Read aloud to others
- **Target:** Grade 6 or lower

## Real-World Application

### Scenario: Wildfire Evacuation

**Context:**
- Rural area with limited bandwidth
- Elderly population
- Mix of English and Spanish speakers
- Many residents with vision impairments

**Framework Integration:**

**WCAG:**
- High contrast text (4.5:1+)
- Large font (18px minimum)
- Alt text for all maps
- Spanish version with lang="es"

**WSG:**
- Total page size: 200KB
- No custom fonts (system fonts)
- Simple color blocks for zones
- Cached for offline

**Plain Language:**
- "Leave now" not "Evacuate immediately"
- "Go to the school" not "Proceed to shelter"
- "Zone A = Main Street area" (explicit)
- Reading level: Grade 4

## Common Mistakes

### Mistake 1: Meeting WCAG But Not WSG
Heavy page with perfect accessibility that won't load on slow internet.

**Solution:** Optimize first, accessorize second.

### Mistake 2: Plain Language But Not Accessible
Simple text in an image without alt text.

**Solution:** Use HTML text, add image support.

### Mistake 3: Sustainable But Not Clear
Tiny page that uses technical jargon.

**Solution:** Size efficiency doesn't mean information efficiency.

## The Bottom Line

WCAG ensures **technical accessibility**.

WSG ensures **practical accessibility**.

Plain Language ensures **cognitive accessibility**.

All three are required.

None are optional.

**Emergency communication must be accessible, sustainable, and understandable.**

**This matrix is your guide.**

---

<div class="alert alert-success">
  <strong>Pro Tip:</strong> Print this matrix. Reference it during emergency alert creation. Check all three columns for every alert.
</div>

## Additional Resources

For a comprehensive directory of global standards, academic research, and practical toolkits, see our [Global Standards & Cognitive Accessibility Resources](/framework/resources.html) page.

**WCAG 2.2:**
- [Official Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/)

**WSG 1.0:**
- [W3C Web Sustainability Guidelines](https://w3c.github.io/sustyweb/)
- [Sustainable Web Manifesto](https://www.sustainablewebmanifesto.com/)

**Plain Language:**
- [PlainLanguage.gov](https://www.plainlanguage.gov/)
- [Plain Language Association International](https://plainlanguagenetwork.org/)
