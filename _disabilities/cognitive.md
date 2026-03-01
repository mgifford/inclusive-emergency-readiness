---
layout: disability
title: "Cognitive Disabilities in Emergencies"
category: disability
disability_type: cognitive
summary: "How cognitive disabilities affect emergency information processing and what communicators must do differently."
wcag_focus:
  - "3.1 Readable"
  - "3.2 Predictable"
  - "3.3 Input Assistance"
reading_level: "Grade 6"
last_updated: 2026-03-01
---

# Cognitive Disabilities in Emergencies

## One Idea Per Line

This page follows the "One Idea Per Line" principle.

Each line contains only one concept.

This makes information easier to process.

Especially during high-stress emergencies.

## What Are Cognitive Disabilities?

Cognitive disabilities affect how people think.

They affect how people learn.

They affect how people remember.

They affect how people solve problems.

### Types of Cognitive Disabilities

**Learning disabilities:**
- Dyslexia (reading difficulties)
- Dyscalculia (math difficulties)
- Dysgraphia (writing difficulties)

**Attention disabilities:**
- ADHD (Attention Deficit Hyperactivity Disorder)
- Attention disorders

**Memory disabilities:**
- Short-term memory loss
- Working memory difficulties
- Dementia
- Alzheimer's disease

**Autism spectrum:**
- Autism
- Asperger's syndrome
- Pervasive developmental disorder

**Intellectual disabilities:**
- Down syndrome
- Fragile X syndrome
- Fetal alcohol spectrum disorder

**Brain injuries:**
- Traumatic brain injury (TBI)
- Stroke
- Concussion

## Emergency Impacts

### Information Overload

**The Problem:**
Emergency alerts often contain too much information at once.

Multiple pieces of data compete for attention.

People with cognitive disabilities cannot filter what matters most.

**Real-World Failure:**
A wildfire alert includes:
- Fire location
- Evacuation zones
- Shelter addresses
- Road closures
- Air quality data
- Emergency numbers

Someone with ADHD sees all of this.

They cannot identify the critical action.

They freeze.

They do not evacuate in time.

### Complex Language

**The Problem:**
Emergency communications use bureaucratic language.

They use technical terms.

They use passive voice.

They use compound sentences.

**Real-World Failure:**
"Residents in zones A through D are hereby advised to evacuate to designated emergency shelters or alternative safe locations outside the affected perimeter."

Someone with dyslexia reads this.

They cannot parse "hereby advised."

They do not know what "designated" means.

They do not understand "affected perimeter."

They do not evacuate.

### Time Pressure

**The Problem:**
Emergencies require fast decisions.

People with cognitive disabilities need more time to process.

They need more time to plan.

They need more time to act.

**Real-World Failure:**
A tornado warning gives 10 minutes to seek shelter.

Someone with autism needs their routine.

The change causes extreme anxiety.

They cannot decide what to bring.

They cannot decide where to go.

They run out of time.

### Memory Load

**The Problem:**
Emergency instructions require remembering multiple steps.

People with memory disabilities cannot hold all steps in mind.

They forget critical information.

**Real-World Failure:**
"Turn off gas. Grab emergency kit. Lock doors. Go to north parking lot. Check in with officials."

Someone with early-stage dementia reads this.

By step three, they have forgotten step one.

They leave without turning off the gas.

This creates a secondary hazard.

### Unfamiliar Situations

**The Problem:**
Emergencies are novel situations.

People with intellectual disabilities rely on familiar routines.

Novel situations cause confusion.

Novel situations cause fear.

**Real-World Failure:**
A flood requires evacuation by bus.

Someone with Down syndrome has never taken a bus.

They do not understand how boarding works.

They are afraid of strangers.

They refuse to board.

First responders do not have time to explain.

They move on.

The person is left behind.

## What Communicators Must Do

### Principle 1: One Action Per Message

**Do this:**
"Leave now."

**Not this:**
"You should consider evacuating immediately while bringing essential items."

### Principle 2: Use Plain Language

**Do this:**
"Go to Main Street School."

**Not this:**
"Proceed to the designated emergency shelter facility."

### Principle 3: Use Active Voice

**Do this:**
"The fire department will call you."

**Not this:**
"You will be contacted by emergency personnel."

### Principle 4: Break Into Steps

**Do this:**
1. Turn off the gas
2. Get your emergency kit
3. Leave your house
4. Go to the parking lot

**Not this:**
"Secure utilities, gather necessities, exit premises, and report to the staging area."

### Principle 5: Use Visual Supports

**Do this:**
- Use icons with text
- Use color coding
- Use simple maps
- Use photos of real locations

**Not this:**
- Text-only alerts
- Abstract symbols
- Complex diagrams

### Principle 6: Repeat Key Information

**Do this:**
"Go to Main Street School. The address is 100 Main Street. Main Street School is the shelter."

**Not this:**
"Report to the emergency shelter."

### Principle 7: Provide Advance Notice

**Do this:**
"A storm is coming in 3 days. We will send updates every day."

**Not this:**
"Severe weather alert: Take immediate action."

### Principle 8: Remove Time Pressure When Possible

**Do this:**
"You have 2 hours to pack. We will help you."

**Not this:**
"Evacuate immediately."

## WCAG 2.2 Requirements

### 3.1.1 Language of Page (Level A)

**What it means:**
Declare the language of your web page.

**Why it matters:**
Screen readers need to know what language to use.

Translation tools need to know what language to translate from.

**How to do it:**
```html
<html lang="en">
```

### 3.1.2 Language of Parts (Level AA)

**What it means:**
Declare when you change languages within a page.

**Why it matters:**
Mixed-language content needs proper pronunciation.

**How to do it:**
```html
<p>The Spanish word <span lang="es">hola</span> means hello.</p>
```

### 3.1.3 Unusual Words (Level AAA)

**What it means:**
Provide definitions for unusual words.

**Why it matters:**
People with cognitive disabilities may not know specialized terms.

**How to do it:**
Use a glossary link.

Or provide inline definitions.

### 3.1.4 Abbreviations (Level AAA)

**What it means:**
Spell out abbreviations on first use.

**Why it matters:**
People with cognitive disabilities may not know what letters stand for.

**How to do it:**
"Emergency Operations Center (EOC)"

### 3.1.5 Reading Level (Level AAA)

**What it means:**
Text should be Grade 6 reading level or lower.

**Why it matters:**
Complex text excludes people with cognitive disabilities.

**How to do it:**
Use short words.

Use short sentences.

Use active voice.

### 3.2.1 On Focus (Level A)

**What it means:**
Focus should not trigger unexpected changes.

**Why it matters:**
Unexpected changes confuse people with cognitive disabilities.

**How to do it:**
Do not auto-submit forms on focus.

Do not auto-navigate on focus.

### 3.2.2 On Input (Level A)

**What it means:**
Input should not trigger unexpected changes.

**Why it matters:**
Unexpected changes interrupt cognitive processes.

**How to do it:**
Provide a submit button.

Do not auto-submit.

### 3.2.3 Consistent Navigation (Level AA)

**What it means:**
Navigation should be in the same place on every page.

**Why it matters:**
People with cognitive disabilities rely on patterns.

**How to do it:**
Use the same header on every page.

Put navigation in the same location.

### 3.2.4 Consistent Identification (Level AA)

**What it means:**
Use the same labels for the same functions.

**Why it matters:**
Inconsistent labels cause confusion.

**How to do it:**
If a button says "Next" on one page, it should say "Next" on all pages.

Not "Continue" or "Proceed."

### 3.3.1 Error Identification (Level A)

**What it means:**
Clearly identify errors.

**Why it matters:**
People with cognitive disabilities may not notice subtle error indicators.

**How to do it:**
Use text to describe errors.

Not just color.

### 3.3.2 Labels or Instructions (Level A)

**What it means:**
Provide clear labels for all inputs.

**Why it matters:**
People with cognitive disabilities need explicit instructions.

**How to do it:**
Label every form field.

Provide format examples.

### 3.3.3 Error Suggestion (Level AA)

**What it means:**
Suggest how to fix errors.

**Why it matters:**
People with cognitive disabilities may not know how to correct mistakes.

**How to do it:**
"Phone number must be 10 digits. You entered 9 digits."

### 3.3.4 Error Prevention (Level AA)

**What it means:**
Prevent errors for important actions.

**Why it matters:**
People with cognitive disabilities benefit from confirmation steps.

**How to do it:**
Add a confirmation page for critical actions.

Allow users to review before submitting.

## Emergency Communication Checklist

Use this checklist for every emergency message:

- [ ] Is the reading level Grade 6 or lower?
- [ ] Is there one main action?
- [ ] Is the action stated in the first sentence?
- [ ] Are all words in common use?
- [ ] Are all abbreviations spelled out?
- [ ] Are sentences 15 words or less?
- [ ] Is the message in active voice?
- [ ] Are there visual supports?
- [ ] Is the message repeated?
- [ ] Is the message consistent with previous messages?
- [ ] Can someone act on this without remembering other information?

## Tools and Resources

### Readability Checkers
- Hemingway Editor (free online tool)
- Readable.com
- WebFX Readability Test

### Plain Language Resources
- Plain Language Association International (PLAIN)
- Center for Plain Language
- PlainLanguage.gov

### Easy Read Resources
- Inclusion Europe Easy Read Standards
- UK Government Easy Read guidance
- Australia's Easy Read Standard

### Testing
Test your content with:
- People with cognitive disabilities
- Family caregivers
- Special education teachers
- Cognitive accessibility consultants

## Case Studies

### Success: British Columbia Wildfire Service

**What they did:**
Created simple evacuation maps.

Used three colors: green (safe), yellow (warning), red (evacuate).

Used one-sentence instructions.

Repeated information every 30 minutes.

**Result:**
98% evacuation compliance in areas serving people with developmental disabilities.

### Failure: Hurricane Katrina

**What went wrong:**
Evacuation orders used complex legal language.

Messages assumed access to cars.

Messages assumed familiarity with highway systems.

Messages assumed ability to read maps.

**Result:**
Many people with cognitive disabilities did not evacuate.

Some died in the flood.

## The Bottom Line

Cognitive accessibility is survival accessibility.

If someone cannot understand your message, they cannot act.

If they cannot act, they may die.

Write clearly.

Write simply.

Write to save lives.
