---
title: "Use Copilot Coding Agent to Generate Easy Read Companion Pages for Critical Framework Content"
labels: ["agent-task", "accessibility", "easy-read", "enhancement"]
---

## Summary

The `AGENTS.md` governance document already mandates Easy Read versions for all critical survival instructions (Evacuation, Medical, Shelter). However, none of the current framework pages have an Easy Read companion file. The [GitHub Copilot Coding Agent guide](https://accessibility.github.com/documentation/guide/getting-started-with-agents/) explains how to write issues that a coding agent can tackle independently — this is a perfect candidate.

## Problem

The `AGENTS.md` Easy Read Protocol states:

> "For critical survival instructions (Evacuation, Medical, Shelter), the agent must prompt the creation of an 'Easy Read' version following the **One Idea Per Line** principle."

None of the following pages have Easy Read companion files:
- `framework/rwa-framework.md`
- `framework/physical-digital.md`
- `framework/seniors-identity.md`
- `framework/multiple-disabilities.md`
- `crisis.md`
- `crisis-disabilities.md`
- `disabilities/` pages

During an emergency, people under stress — and people with cognitive disabilities — need content written at the lowest readable level. Easy Read versions are not optional for life-safety content.

## Proposed Solution

A Copilot Coding Agent should be assigned to systematically generate Easy Read companion pages. Based on the agent techniques in the [getting started with agents guide](https://accessibility.github.com/documentation/guide/getting-started-with-agents/), the AGENTS.md already provides clear enough rules for an agent to act on:

1. **One idea per line** — no compound sentences
2. **Grade 4 reading level** — Flesch-Kincaid ≤ 4.0
3. **Short sentences** — 8–12 words maximum
4. **Simple words only** — no jargon, no acronyms without explanation
5. **Action-first** — "Do this." before "Why this matters."
6. **Icon placeholders** — suggest emoji or Unicode symbols for key actions

## Acceptance Criteria

- [ ] Each critical framework page has a companion `*-easy-read.md` file
- [ ] Easy Read files pass Flesch-Kincaid Grade ≤ 4.0 (verified by `readability-check.yml`)
- [ ] Easy Read files use the existing page `layout: default` frontmatter
- [ ] Easy Read files link back to the full version ("Read the full guide")
- [ ] Full framework pages link forward to their Easy Read version ("Easy Read version available")
- [ ] At minimum these pages are covered: `crisis.md`, `crisis-disabilities.md`, `framework/multiple-disabilities.md`, `framework/seniors-identity.md`

## Why This Is Agent-Ready

This task has:
- ✅ **Clear, binary acceptance criteria** — each file either exists or doesn't; it either passes Grade 4 or doesn't
- ✅ **Repeatable pattern** — the same transformation applied to multiple files
- ✅ **Existing rules in AGENTS.md** — the agent already has the constraints encoded
- ✅ **Automated verification** — the `readability-check.yml` workflow can validate output
- ✅ **No external dependencies** — pure content transformation, no APIs or secrets needed

## Resources

- [AGENTS.md Easy Read Protocol](../AGENTS.md#b-accessibility-wcag-22--can-asc-64)
- [LLM Prompts — Plain Language Converter](../framework/llm-prompts.md#prompt-6-plain-language-converter) (Prompt 6 is a ready-made agent instruction)
- [Getting Started with Agents](https://accessibility.github.com/documentation/guide/getting-started-with-agents/)
- ISO 24495-1 (Plain Language standard)
