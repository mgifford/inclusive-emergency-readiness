---
title: "Close the Readability Loop: Copilot Coding Agent Auto-Fix for Content Exceeding Grade 6"
labels: ["agent-task", "accessibility", "plain-language", "enhancement"]
---

## Summary

The `readability-check.yml` workflow (the "Linter of Clarity") already detects content that exceeds the Grade 6 Flesch-Kincaid target, posts a warning to PRs, and saves a report artifact. But it stops there — it detects, warns, and moves on. Based on the [getting started with agents guide](https://accessibility.github.com/documentation/guide/getting-started-with-agents/), the Copilot Coding Agent can close this loop: when the linter flags violations, an agent should be able to generate plain language rewrites and open a follow-up PR.

## Problem

The current workflow loop is incomplete:

```
Contributor submits PR → Linter flags Grade 7+ content → PR comment warns → (nothing happens) → Content ships at Grade 7+
```

The AGENTS.md Plain Language protocol states:

> "If the Flesch-Kincaid Grade Level exceeds 7.0, the agent must flag the text **and provide a 'Suggested Simplification'** using active voice and common vocabulary."

The linter flags. But no suggested simplification is generated. The `Prompt 6: Plain Language Converter` in `framework/llm-prompts.md` already defines exactly how to do this simplification — but it requires a human to manually invoke the LLM. The Copilot Coding Agent can automate this loop end-to-end.

## Proposed Solution

### Option A: Agent-Ready Issue Auto-Created by Linter (Recommended)

Enhance `readability-check.yml` so that when violations are detected on `main` (after merge), it automatically creates a GitHub Issue with:
- The exact files that exceed Grade 6
- The current grade level of each file
- A request for the Copilot Coding Agent to simplify specific sections
- The `agent-task` label so it's automatically picked up

This means: every time complex content ships, a structured, agent-ready issue is automatically generated. The agent can then open a fix PR without requiring human triage.

```yaml
# Add to readability-check.yml under the push to main path:
- name: Create agent task for readability fixes
  if: github.event_name == 'push' && steps.readability.outputs.has_issues == 'true'
  uses: actions/github-script@v7
  with:
    script: |
      const report = require('fs').readFileSync('.readability-results/report.md', 'utf8');
      await github.rest.issues.create({
        owner: context.repo.owner,
        repo: context.repo.repo,
        title: '🔤 Plain Language Fix Needed: Content Exceeds Grade 6',
        body: `## Readability Violations Detected\n\n${report}\n\n## Agent Task\nPlease simplify the flagged sections using the Plain Language rules in [AGENTS.md](../AGENTS.md#c-plain-language-grade-6-standard) and the converter prompt in [framework/llm-prompts.md](../framework/llm-prompts.md#prompt-6-plain-language-converter).\n\n**Target:** Flesch-Kincaid Grade ≤ 6.0 for all modified sections.\n**Verify with:** \`readability-check.yml\``,
        labels: ['agent-task', 'plain-language', 'accessibility']
      });
```

### Option B: Enhance AGENTS.md with Explicit Fix Protocol

Add a section to `AGENTS.md` that gives the coding agent a concrete algorithm:

```markdown
### D. Plain Language Auto-Fix Protocol

When `readability-check.yml` reports violations:
1. For each flagged file, identify sentences with Flesch-Kincaid Grade > 6.0
2. Apply these transformations:
   - Split sentences longer than 15 words at natural conjunction points
   - Replace Tier-3 vocabulary with Tier-1/2 equivalents (see word list below)
   - Convert passive voice: "Alerts should be sent" → "Teams must send alerts"
   - Break multi-idea paragraphs into single-idea paragraphs
3. Verify the rewrite achieves Grade ≤ 6.0 before committing
4. Open a PR with title "fix(readability): simplify [filename] to Grade 6"
5. Reference the original readability report artifact in the PR body
```

## Acceptance Criteria

- [ ] `readability-check.yml` creates a GitHub Issue (labeled `agent-task`) when violations are detected on pushes to `main`
- [ ] The auto-created issue includes the exact file names and grade levels
- [ ] The auto-created issue contains the plain language rules and links to the converter prompt in `framework/llm-prompts.md`
- [ ] `AGENTS.md` includes an explicit Plain Language Auto-Fix Protocol (Section D or equivalent)
- [ ] The workflow does NOT create duplicate issues (checks for existing open `plain-language` + `agent-task` issues first)

## Why This Is a Unique Agent Opportunity

| Capability | Human | Copilot Coding Agent |
|---|---|---|
| Detect Grade 7+ content | ✅ (via workflow) | ✅ (via workflow) |
| Apply Plain Language rules mechanically | 🐢 Slow | ⚡ Fast |
| Verify output reading level | ✅ | ✅ (via workflow) |
| Requires community/lived experience judgment | ✅ | ❌ |

Plain language simplification of existing content is **exactly the kind of repeatable, rule-based task** that the agents guide recommends for automation. The rules are already encoded in `AGENTS.md`. The verification is already automated in `readability-check.yml`. Only the fix loop is missing.

## Resources

- [Getting Started with Agents](https://accessibility.github.com/documentation/guide/getting-started-with-agents/)
- [AGENTS.md Plain Language Protocol](../AGENTS.md#c-plain-language-grade-6-standard)
- [LLM Prompts — Plain Language Converter](../framework/llm-prompts.md#prompt-6-plain-language-converter)
- [`readability-check.yml`](.github/workflows/readability-check.yml)
- [Flesch-Kincaid Grade Level — Wikipedia](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests)
