---
layout: disability
title: "Thinking and Learning Needs in Emergencies"
category: disability
disability_type: cognitive
summary: "How thinking and memory needs affect understanding emergency information and what communicators must do differently."
wcag_focus:
  - "3.1 Readable"
  - "3.2 Predictable"
  - "3.3 Input Assistance"
reading_level: "Grade 6"
last_updated: 2026-03-01
---

# Thinking and Learning Needs in Emergencies

## One Idea Per Line

This page follows the "One Idea Per Line" principle.

Each line contains only one concept.

This makes information easier to understand.

Especially during high-stress emergencies.

## What Are Thinking and Learning Needs?

Thinking and learning needs affect how people think.

They affect how people learn.

They affect how people remember.

They affect how people solve problems.

### Types of Thinking and Learning Needs

**Learning needs:**
- Dyslexia (trouble reading)
- Dyscalculia (trouble with math)
- Dysgraphia (trouble writing)

**Attention needs:**
- ADHD (Attention Deficit Hyperactivity Disorder)
- Attention problems

**Memory needs:**
- Short-term memory loss
- Trouble holding things in mind
- Dementia
- Alzheimer's disease

**Autism and related:**
- Autism
- Asperger's
- Similar needs

**Intellectual needs:**
- Down syndrome
- Fragile X syndrome
- Fetal alcohol disorder

**Brain injuries:**
- Traumatic brain injury (TBI)
- Stroke
- Head injuries

## How Emergencies Create Problems

### Too Much Information at Once

**The Problem:**
Emergency alerts often have too much information.

Many pieces of data compete for attention.

People cannot filter what matters most.

**Real-World Failure:**
A wildfire alert includes:
- Fire location
- Evacuation zones
- Shelter addresses
- Road closures
- Air quality data
- Emergency numbers

Someone with ADHD sees all of this.

They cannot find the critical action.

They freeze.

They do not evacuate in time.

### Hard Words and Long Sentences

**The Problem:**
Emergency messages use hard words.

They use technical terms.

They use passive voice.

They use compound sentences.

**Real-World Failure:**
"People in zones A, B, C, and D: Leave now. Go to Main Street School or another safe place outside the danger area."

Someone with dyslexia reads this.

They cannot understand "hereby advised."

They do not know what "another safe place" means.

They do not understand "danger area."

They do not evacuate.

### Not Enough Time to Think

**The Problem:**
Emergencies require fast decisions.

People need more time to understand information.

They need more time to plan.

They need more time to act.

**Real-World Failure:**
A tornado warning gives 10 minutes to seek shelter.

Someone with autism needs their routine.

The change causes extreme anxiety.

They cannot decide what to bring.

They cannot decide where to go.

They run out of time.

### Too Many Steps to Remember

**The Problem:**
Emergency instructions require remembering many steps.

People with memory needs cannot hold all steps in mind.

They forget critical information.

**Real-World Failure:**
"Turn off gas. Grab emergency kit. Lock doors. Go to north parking lot. Check in with officials."

Someone with early-stage dementia reads this.

By step three, they have forgotten step one.

They leave without turning off the gas.

This creates a secondary hazard.

### New and Unfamiliar Situations

**The Problem:**
Emergencies are new situations.

People rely on familiar routines.

New situations cause confusion.

New situations cause fear.

**Real-World Failure:**
A flood requires evacuation by bus.

Someone with Down syndrome has never taken a bus.

They do not understand how boarding works.

They are afraid of strangers.

They refuse to board.

First responders do not have time to explain.

They move on.

The person is left behind.

## How to Write Better Emergency Messages

### Principle 1: One Action Per Message

**Do this:**
"Leave now."

**Not this:**
"You should consider evacuating immediately while bringing essential items."

### Principle 2: Use Plain Language

**Do this:**
"Go to Main Street School."

**Not this:**
"Proceed to the chosen emergency shelter facility."

### Principle 3: Use Active Voice

**Do this:**
"The fire department will call you."

**Not this:**
"You will be contacted by emergency workers."

### Principle 4: Break Into Steps

**Do this:**
1. Turn off the gas
2. Get your emergency kit
3. Leave your house
4. Go to the parking lot

**Not this:**
"Secure utilities, gather needs, exit building, and report to the staging area."

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

### Principle 7: Give Early Warning

**Do this:**
"A storm is coming in 3 days. We will send updates every day."

**Not this:**
"Severe weather alert: Take immediate action."

### Principle 8: Give More Time When Possible

**Do this:**
"You have 2 hours to pack. We will help you."

**Not this:**
"Evacuate immediately."

## WCAG 2.2 Requirements

### 3.1.1 Language of Page (Level A)

**Why it matters:**
Screen readers need to know what language to use.

Translation tools need to know what language.

**What it means:**
Set the language of your web page.

**How to do it:**
```html
<html lang="en">
```

### 3.1.2 Language of Parts (Level AA)

**Why it matters:**
Mixed-language content needs proper pronunciation.

**What it means:**
Mark when you change languages within a page.

**How to do it:**
```html
<p>The Spanish word <span lang="es">hola</span> means hello.</p>
```

### 3.1.3 Unusual Words (Level AAA)

**Why it matters:**
People may not know special terms.

**What it means:**
Give meaning for unusual words.

**How to do it:**
Use a glossary link.

Or give inline meaning.

### 3.1.4 Spell Out Short Forms (Level AAA)

**Why it matters:**
People may not know what letters stand for.

**What it means:**
Spell out short forms on first use.

**How to do it:**
"Emergency Operations Center (EOC)"

### 3.1.5 Reading Level (Level AAA)

**Why it matters:**
Hard text stops people from understanding.

**What it means:**
Text should be Grade 6 reading level or lower.

**How to do it:**
Use short words.

Use short sentences.

Use active voice.

### 3.2.1 On Focus (Level A)

**Why it matters:**
Unexpected changes confuse people.

**What it means:**
Focus should not trigger unexpected changes.

**How to do it:**
Do not auto-submit forms on focus.

Do not auto-navigate on focus.

### 3.2.2 On Input (Level A)

**Why it matters:**
Unexpected changes interrupt thinking.

**What it means:**
Input should not trigger unexpected changes.

**How to do it:**
Provide a submit button.

Do not auto-submit.

### 3.2.3 Consistent Navigation (Level AA)

**Why it matters:**
People rely on patterns.

**What it means:**
Navigation should be in the same place on every page.

**How to do it:**
Use the same header on every page.

Put navigation in the same location.

### 3.2.4 Consistent Identification (Level AA)

**Why it matters:**
Different labels cause confusion.

**What it means:**
Use the same labels for the same functions.

**How to do it:**
If a button says "Next" on one page, it should say "Next" on all pages.

Not "Continue" or "Proceed."

### 3.3.1 Error Identification (Level A)

**Why it matters:**
People may not notice small error signs.

**What it means:**
Clearly identify errors.

**How to do it:**
Use text to describe errors.

Not just color.

### 3.3.2 Labels or Instructions (Level A)

**Why it matters:**
People need clear instructions.

**What it means:**
Give clear labels for all inputs.

**How to do it:**
Label every form field.

Provide format examples.

### 3.3.3 Error Suggestion (Level AA)

**Why it matters:**
People may not know how to fix mistakes.

**What it means:**
Show how to fix errors.

**How to do it:**
"Phone number must be 10 digits. You entered 9 digits."

### 3.3.4 Error Prevention (Level AA)

**Why it matters:**
People benefit from confirmation steps.

**What it means:**
Prevent errors for important actions.

**How to do it:**
Add a confirmation page for critical actions.

Let users review before submitting.

## Emergency Communication Checklist

Use this checklist for every emergency message:

- [ ] Is the reading level Grade 6 or lower?
- [ ] Is there one main action?
- [ ] Is the action stated in the first sentence?
- [ ] Are all words in common use?
- [ ] Are all short forms spelled out?
- [ ] Are sentences 15 words or less?
- [ ] Is the message in active voice?
- [ ] Are there visual supports?
- [ ] Is the message repeated?
- [ ] Is the message consistent with previous messages?
- [ ] Can someone act on this without remembering other details?

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
- People with thinking and memory needs
- Family caregivers
- Special education teachers
- Access consultants

## Case Studies

### Success: British Columbia Wildfire Service

**What they did:**
Created simple evacuation maps.

Used three colors: green (safe), yellow (warning), red (evacuate).

Used one-sentence instructions.

Repeated information every 30 minutes.

**Result:**
98% of people left in time in areas with developmental needs.

### Failure: Hurricane Katrina

**What went wrong:**
Evacuation orders used hard legal language.

Messages assumed access to cars.

Messages assumed familiarity with highway systems.

Messages assumed ability to read maps.

**Result:**
Many people did not evacuate.

Some died in the flood.

## The Bottom Line

Clear writing is survival writing.

If someone cannot understand your message, they cannot act.

If they cannot act, they may die.

Write clearly.

Write simply.

Write to save lives.
