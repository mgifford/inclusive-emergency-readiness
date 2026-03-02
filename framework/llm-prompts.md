---
layout: default
title: "LLM Prompts for Inclusive Emergency Communications"
category: framework
summary: "Ready-to-use prompts for large language models to audit, improve, and create accessible emergency communications."
reading_level: "Grade 7"
last_updated: 2026-03-02
---

# LLM Prompts for Inclusive Emergency Communications

## Purpose

This page provides copy-paste prompts for Large Language Models (LLMs) to help you:
- Audit content for accessibility
- Create low-bandwidth emergency sites
- Assess organizational readiness
- Improve emergency communications

These prompts codify the principles in this guide into actionable instructions for AI tools.

---

## How to Use These Prompts

1. **Copy the entire prompt** including the role, task, constraints, and any example text
2. **Paste into your LLM** (ChatGPT, Claude, Gemini, etc.)
3. **Replace placeholders** like `[INSERT TEXT]` with your actual content
4. **Review the output** and refine as needed
5. **Test with real users** especially people with disabilities

**Important:** LLM outputs are not perfect. Always:
- Verify factual claims
- Test with assistive technology
- Get feedback from people with disabilities
- Follow established standards (WCAG, WSG, CAN-ASC-6.4)

---

## Prompt 1: Language & Communication Auditor

**Purpose:** Audit emergency communications for clarity, accessibility, and information resilience.

**Use When:**
- Writing emergency alerts
- Reviewing existing communications
- Creating template content
- Simplifying technical documentation

### The Prompt

```
Role: Expert in Plain Language (ISO 24495-1), Easy Read standards, and Crisis Communication.

Task: Audit the provided text for "Information Resilience."

Your audit must follow these five pillars:

1. Functional Barrier Focus
   - Focus on barriers, not diagnoses
   - Use "For users requiring non-visual information" instead of "For the Blind"
   - Use "For users requiring text-based alerts" instead of "For the Deaf"
   - Describe what people need, not what they lack

2. The Inverted Pyramid
   - Place critical actions (What to do / Where to go) in the first 10 words
   - Put the most important information first
   - Details and context come after the action
   - Example: "Evacuate now. Flood waters rising. Go to [location]."

3. Active Voice
   - Use Subject + Verb + Object structure
   - Change "Alerts should be sent" to "Teams must send alerts"
   - Change "It is recommended that" to "You should"
   - Eliminate passive constructions

4. Tiered Literacy
   - Distinguish between Plain Language (clarity) and Easy Read (logic + visuals)
   - Plain Language: 6th-grade reading level, clear structure
   - Easy Read: One idea per line, simple grammar, optional icons
   - Specify which tier is appropriate for the content

5. Jargon Decoupling
   - Identify technical terms (WCAG, WSG, emPOWER, etc.)
   - Provide plain language explanations
   - Create a sidebar or glossary for unavoidable jargon
   - Never use jargon to explain jargon

Constraint: Target a 6th-grade reading level (Flesch-Kincaid Grade 6.0 or lower).

Output Format:
1. Overall Assessment (Pass/Needs Work/Fails)
2. Reading Level Score (Flesch-Kincaid Grade)
3. Issues Found (numbered list with specific examples)
4. Suggested Revisions (rewrite problematic sections)
5. Easy Read Version (if appropriate)

Text to Audit:
[INSERT YOUR TEXT HERE]
```

### Example Usage

**Input Text:**
```
The jurisdiction's emergency management agency should disseminate 
multi-modal alert notifications through various communication channels 
to ensure comprehensive coverage of vulnerable populations who may 
experience barriers to information access.
```

**LLM Output Would Include:**
- Reading level: Grade 12+ (too complex)
- Issues: Passive voice, jargon, buried action
- Revision: "Send alerts through many channels. This helps reach all people."

---

## Prompt 2: Resilience Mode Architect

**Purpose:** Design ultra-low-bandwidth emergency information sites that work on 2G networks.

**Use When:**
- Creating emergency websites
- Optimizing existing sites
- Building Crisis Mode alternatives
- Designing for network congestion

### The Prompt

```
Role: Senior Web Performance Engineer specializing in Web Sustainability Guidelines (WSG).

Task: Design a "Crisis Mode" (Ultra-Low-Bandwidth) mirror for an emergency information site.

Constraints:

1. Zero External Dependencies
   - No external fonts, APIs, CDNs, or analytics
   - Everything must be inline or embedded
   - No third-party requests
   - Self-contained HTML documents

2. The 14KB Rule
   - The initial render must fit in the first TCP congestion window (~14KB)
   - This is critical for 2G networks (500-1000ms per round-trip)
   - Satellite connections (500-700ms per round-trip)
   - Each additional round-trip adds latency and failure risk
   - Target: 5-11KB per page (allows for HTTP headers)

3. System Fonts Only
   - Use `font-family: system-ui, sans-serif`
   - No web fonts (each font = 100KB+)
   - No icon fonts
   - Use Unicode symbols if needed (e.g., ⚠️ ✓ ✗)

4. Hyper-Semantic HTML
   - 100% compatibility with text-only browsers (Lynx, w3m)
   - Proper heading hierarchy (h1 > h2 > h3)
   - Semantic elements (header, nav, main, footer, article)
   - ARIA landmarks (role="banner", role="main", etc.)
   - Skip links for keyboard navigation

5. No JavaScript
   - Pure HTML and CSS only
   - No analytics, no tracking, no interactivity
   - Progressive enhancement without JavaScript baseline

6. Inline CSS
   - All styles in <style> tag
   - Minified (remove whitespace, combine rules)
   - Essential styles only
   - High contrast (black on white)
   - Target: CSS under 2KB

7. No Images
   - Text-only content
   - Unicode symbols for visual indicators
   - ASCII art acceptable for critical diagrams
   - Describe, don't show

Deliverables:

1. Complete HTML template for crisis.html
2. Inline CSS (minified)
3. Content structure recommendations
4. localStorage preference toggle strategy (for main site to link to crisis mode)
5. Testing checklist
6. Size verification commands

Provide a working example for an emergency evacuation page.
```

### Example Usage

The LLM would generate a complete, working HTML file under 14KB that includes:
- Emergency evacuation instructions
- Shelter locations
- Contact information
- All styling inline
- Semantic HTML structure
- Zero external dependencies

---

## Prompt 3: RWA (Ready-Willing-Able) Audit Generator

**Purpose:** Create organizational self-assessment tools for inclusive emergency preparedness.

**Use When:**
- Evaluating organizational readiness
- Creating internal assessments
- Identifying capability gaps
- Planning improvements

### The Prompt

```
Role: Organizational Change Consultant specializing in Emergency Management.

Task: Create a Ready-Willing-Able (RWA) Audit Scorecard for Inclusive Emergency Readiness.

Background: The RWA Framework assesses three components:
- Willing: Leadership motivation and commitment
- Ready: Infrastructure and pre-prepared materials
- Able: Staff skills and competencies

Create audit questions in three categories:

1. WILLING (Leadership Prioritization & Funding)
   - Create 3 questions about:
     * Signed accessibility commitments
     * Budget allocation
     * Performance metrics and accountability
   - Each "No" answer links to a resource from the Inclusive Emergency Readiness guide
   - Focus on institutional commitment, not individual effort

2. READY (Infrastructure & Templates)
   - Create 6 questions about:
     * Pre-written alert templates
     * Multi-language translations
     * Low-bandwidth alternatives (Crisis Mode)
     * Testing and validation
     * Alternative formats (Easy Read, audio, ASL)
     * Distribution channel setup
   - Each "No" answer links to implementation guides
   - Focus on materials that exist BEFORE an emergency

3. ABLE (Staff Competency)
   - Create 6 questions about:
     * Plain Language writing skills
     * Easy Read knowledge
     * Accessibility training
     * Emergency drill participation
     * Alt text and caption creation
     * Community consultation with people with disabilities
   - Each "No" answer links to training resources
   - Focus on demonstrated skills, not intentions

For each question:
- Make it yes/no (binary)
- Make it measurable (avoid "somewhat" or "usually")
- Provide a specific resource link for "No" answers
- Explain why it matters

Output Format:
1. Scorecard with 15 questions (3 + 6 + 6)
2. Scoring guide (interpret total score)
3. Gap analysis recommendations
4. Example success story
5. Implementation timeline template

Target Audience: [INSERT: Municipal emergency management, Healthcare system, School district, etc.]
```

### Example Usage

The LLM would generate:
- Customized audit questions for your sector
- Scoring interpretation guide
- Actionable recommendations for each gap
- Timeline for improvements
- Success metrics

---

## Prompt 4: Accessibility Claims Validator

**Purpose:** Verify and properly cite accessibility claims in documentation.

**Use When:**
- Writing about assistive technology
- Citing statistics
- Making accessibility claims
- Documenting best practices

### The Prompt

```
Role: Fact-checker specializing in Accessibility Technology and Emergency Management research.

Task: Validate accessibility claims and provide proper citations.

For each claim in the provided text:

1. Verify Accuracy
   - Is the claim supported by research?
   - Is the source credible?
   - Is the information current?
   - Are there regional variations?

2. Provide Citations
   - Link to primary sources when possible
   - Use archive.org links for stability
   - Include publication dates
   - Note if information is outdated

3. Add Caveats
   - Acknowledge limitations
   - Note regional differences
   - Identify gaps in data
   - Distinguish aspiration from evidence

4. Suggest Revisions
   - Change absolutes to qualified statements
   - Add "as of [date]" for time-sensitive info
   - Use "aspires to" for goals vs. "provides" for proven
   - Add "based on [source]" attribution

Common Areas Requiring Validation:
- Assistive technology capabilities
- Accessibility standard compliance
- Opt-in/adoption rates
- Technology platform support
- Medical device certifications
- Network speed statistics
- Reading level scores

Output Format:
For each claim:
- Original claim
- Validation status (Verified/Needs Citation/Incorrect/Outdated)
- Citation (if verified)
- Caveat/limitation
- Revised claim text

Text to validate:
[INSERT TEXT WITH CLAIMS]
```

### Example Usage

**Input Claim:**
```
3D-printed stethoscopes are clinically validated and work as well as traditional models.
```

**LLM Output:**
```
Validation Status: Needs Citation and Caveat

Citation: Glia stethoscope studies show comparable frequency response in controlled settings.
Source: [Research paper DOI]

Caveat: Clinical validation exists for specific Glia models. Performance depends on:
- Printing material quality
- Assembly precision
- User training
- Maintenance protocols

Not all 3D-printed medical devices have clinical validation. Verify specific model.

Revised Claim: "3D-printed stethoscopes like those from Glia have shown comparable frequency 
response to traditional models in controlled studies (DOI: xxxxx, 2023). However, performance 
depends on print quality, proper assembly, and user training. Verify clinical validation for 
specific models before use."
```

---

## Prompt 5: Multi-Channel Distribution Planner

**Purpose:** Create comprehensive emergency alert distribution plans across multiple platforms.

**Use When:**
- Planning alert distribution
- Identifying communication channels
- Ensuring redundancy
- Reaching diverse populations

### The Prompt

```
Role: Emergency Communications Strategist with expertise in multi-platform distribution and digital accessibility.

Task: Create a comprehensive alert distribution plan for [TYPE OF EMERGENCY].

Consider these distribution channels:

Official/Government:
- Wireless Emergency Alerts (WEA)
- Emergency Alert System (EAS)
- NOAA Weather Radio
- Municipal websites
- 311/911 systems

Social Media:
- X/Twitter
- Facebook
- Mastodon
- Bluesky
- Instagram
- TikTok
- YouTube

Direct Communication:
- SMS/Text messages
- Email
- Phone calls (automated)
- Door-to-door (physical)
- Community sirens

Accessible Formats:
- ASL video
- Audio description
- Easy Read documents
- Multiple languages
- Braille (if time permits)

Community Networks:
- Local radio (especially non-English stations)
- Community organizations
- Religious institutions
- Schools
- Healthcare facilities

For each channel, specify:
1. Content format (character limits, file types)
2. Lead time required (how long to prepare and send)
3. Reach (who this reaches well, who it might miss)
4. Accessibility considerations
5. Backup if channel fails
6. Priority level (1=critical, 2=important, 3=supplemental)

Output Format:
1. Channel matrix (table format)
2. Timeline (what gets sent when)
3. Template for each channel
4. Gap analysis (who might be missed)
5. Redundancy plan
6. Testing checklist

Emergency Type: [INSERT: Hurricane, Wildfire, Active Shooter, Chemical Spill, etc.]
Location: [INSERT: Urban, Rural, Suburban, Remote]
Population: [INSERT: Demographics, languages, special considerations]
```

### Example Usage

The LLM would generate:
- Platform-specific message templates
- Distribution timeline
- Channel redundancy map
- Gap identification
- Testing protocols

---

## Prompt 6: Plain Language Converter

**Purpose:** Convert complex emergency communications into Plain Language or Easy Read formats.

**Use When:**
- Simplifying existing content
- Creating Easy Read versions
- Translating technical guidance
- Making content accessible

### The Prompt

```
Role: Plain Language specialist trained in Easy Read standards and crisis communication.

Task: Convert the provided text into [PLAIN LANGUAGE / EASY READ].

Plain Language Rules (Grade 6 reading level):
- Use common words (avoid: utilize, implement, disseminate)
- Short sentences (15-20 words maximum)
- Active voice (you must, teams should)
- One main idea per paragraph
- Clear headings and lists
- Define necessary jargon
- Use examples

Easy Read Rules (Grade 4 reading level):
- Very short sentences (8-12 words)
- Simple grammar (no complex clauses)
- One idea per line
- Simple words only
- No jargon at all
- Use repetition for emphasis
- Optional: Suggest icons/images
- Lots of white space

Output Format:
1. Reading level of original (Flesch-Kincaid)
2. Converted text
3. Reading level of converted text
4. List of changes made
5. [If Easy Read] Icon suggestions

Original Text:
[INSERT TEXT]

Target Format: [PLAIN LANGUAGE or EASY READ]
```

### Example Usage

**Input (Complex):**
```
Individuals residing in flood-prone areas should evacuate to designated 
emergency shelters, which have been established in accordance with 
accessibility standards to accommodate persons with disabilities.
```

**Plain Language Output:**
```
Do you live in a flood zone? Leave now.

Go to an emergency shelter. All shelters are accessible.

Find your nearest shelter: [website]
```

**Easy Read Output:**
```
Are you in a flood area?

You must leave now.

Go to a safe shelter.

All shelters have:
- Wheelchair ramps
- Accessible bathrooms
- Help for all people

Find your shelter: [website]
Call for help: [phone number]
```

---

## Testing & Validation

After using these prompts:

### 1. Verify Output
- [ ] Check facts against credible sources
- [ ] Confirm reading level with automated tools
- [ ] Test on actual target devices/networks

### 2. Test with Users
- [ ] People with disabilities
- [ ] Non-native language speakers
- [ ] People with varying tech literacy
- [ ] Emergency management professionals

### 3. Validate Technically
- [ ] Run WCAG accessibility checks
- [ ] Test with screen readers
- [ ] Verify page weight (for Crisis Mode)
- [ ] Check all links

### 4. Document Results
- [ ] What worked
- [ ] What needed adjustment
- [ ] User feedback
- [ ] Lessons learned

---

## Best Practices for LLM Use

### Do:
✅ Use LLMs to draft and improve content
✅ Verify all factual claims
✅ Test output with real users
✅ Iterate based on feedback
✅ Keep prompts updated
✅ Document what works

### Don't:
❌ Trust LLM output blindly
❌ Skip human review
❌ Ignore user feedback
❌ Assume compliance without testing
❌ Use outdated prompts
❌ Substitute LLMs for lived experience

---

## Customizing These Prompts

You can modify these prompts for your specific needs:

**Add Context:**
- Your organization type
- Your region/jurisdiction
- Your specific emergency types
- Your population demographics
- Your available resources

**Adjust Constraints:**
- Different reading levels
- Different page weight targets
- Different compliance standards
- Different languages

**Change Output Format:**
- HTML instead of plain text
- Spreadsheet format
- JSON for automation
- Specific template structures

---

## Additional Resources

### Related Guides
- [Plain Language Toolkit]({{ '/toolkits/plain-language.html' | relative_url }})
- [Crisis Mode Documentation]({{ '/CRISIS_MODE.html' | relative_url }})
- [RWA Framework]({{ '/framework/rwa-framework.html' | relative_url }})
- [Physical-Digital Intersection]({{ '/framework/physical-digital.html' | relative_url }})

### Standards Referenced
- ISO 24495-1 (Plain Language)
- WCAG 2.2 (Web Accessibility)
- WSG 1.0 (Web Sustainability)
- CAN-ASC-6.4 (Emergency Accessibility)

### Testing Tools
- [Hemingway Editor](https://hemingwayapp.com/) - Reading level
- [WebAIM WAVE](https://wave.webaim.org/) - Accessibility
- [Pa11y](https://pa11y.org/) - Automated testing
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) - Performance

---

## Feedback & Improvement

These prompts are living documents.

**Help us improve:**
- Share what works (and what doesn't)
- Suggest new prompts
- Report inaccuracies
- Contribute examples

[Open an issue](https://github.com/mgifford/inclusive-emergency-readiness/issues) or [contribute directly]({{ '/CONTRIBUTING.html' | relative_url }}).

---

*LLMs are powerful tools, but they require human judgment, verification, and lived experience to create truly inclusive emergency communications.*
