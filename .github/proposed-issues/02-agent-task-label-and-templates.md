---
title: "Add `agent-task` Label and Agent-Friendly Issue Templates to Enable Copilot Coding Agent Contributions"
labels: ["enhancement", "documentation", "good first issue"]
---

## Summary

The [GitHub accessibility guide on getting started with agents](https://accessibility.github.com/documentation/guide/getting-started-with-agents/) explains that AI coding agents work best when issues are structured with clear, unambiguous acceptance criteria and enough context to act independently. This repository already has an excellent `AGENTS.md` governance file, but it lacks the GitHub infrastructure to make work agent-assignable at scale: a dedicated label, issue templates designed for agent consumption, and documentation in `CONTRIBUTING.md`.

## Problem

Currently, the project has no structured way to signal to the Copilot Coding Agent which issues are ready for automated work. Issues like the Alert Gap analysis (#36) and Text-to-Speech resources (#55) contain useful research but aren't structured as agent-executable tasks (no binary acceptance criteria, no explicit file paths, no output format specified).

This means:
- Agents cannot reliably determine what "done" looks like
- Human reviewers cannot tell which PRs were agent-generated vs. manually written
- Valuable agent capacity goes unused on low-complexity, high-repetition tasks (link fixes, readability rewrites, alt text generation, Easy Read drafts)

## Proposed Solution

### 1. Add `agent-task` Label

Create a repository label:
- **Name:** `agent-task`
- **Color:** `#6E40C9` (GitHub Copilot purple)
- **Description:** "This issue is structured for automated work by Copilot Coding Agent"

### 2. Create Agent-Friendly Issue Template

Add `.github/ISSUE_TEMPLATE/agent-task.yml` with fields that enforce agent-readable structure:

```yaml
name: Agent Task
description: A task structured for the Copilot Coding Agent
labels: ["agent-task"]
body:
  - type: textarea
    id: goal
    attributes:
      label: Goal
      description: One sentence. What should exist or be different after this task?
    validations:
      required: true
  - type: textarea
    id: files
    attributes:
      label: Files to Create or Edit
      description: Exact paths. e.g., `framework/crisis-easy-read.md`
    validations:
      required: true
  - type: textarea
    id: acceptance
    attributes:
      label: Acceptance Criteria
      description: Binary checklist. Each item must be verifiable without human judgment.
    validations:
      required: true
  - type: textarea
    id: constraints
    attributes:
      label: Constraints
      description: "AGENTS.md rules that apply: reading level, page weight, WCAG requirements"
  - type: textarea
    id: verification
    attributes:
      label: How to Verify
      description: "Which workflow validates this? e.g., readability-check.yml, accessibility-test.yml"
```

### 3. Update `CONTRIBUTING.md`

Add a section "Working with the Copilot Coding Agent" that explains:
- How to find agent-ready issues (filter by `agent-task` label)
- How to write an issue that an agent can tackle
- How to review agent-generated PRs (what the agent can and cannot verify)
- How to assign an issue to the Copilot Coding Agent on GitHub

### 4. Backfill Existing Issues

Apply the `agent-task` label to existing issues that are already structured with clear acceptance criteria (once the label exists).

## Acceptance Criteria

- [ ] `agent-task` label exists in the repository
- [ ] `.github/ISSUE_TEMPLATE/agent-task.yml` is committed and appears in the issue creation UI
- [ ] `CONTRIBUTING.md` includes a "Working with Copilot Coding Agent" section
- [ ] The section references the agent guide at `https://accessibility.github.com/documentation/guide/getting-started-with-agents/`
- [ ] At least one existing issue is retroactively labeled `agent-task`

## Why This Matters

The [agents guide](https://accessibility.github.com/documentation/guide/getting-started-with-agents/) emphasizes that **the quality of the issue determines the quality of agent output**. This repository has 15+ framework pages, 4 automated workflows, and growing content — all needing ongoing accessibility maintenance. An agent can handle repeatable tasks (readability fixes, link rot repairs, Easy Read drafts, alt text generation) at scale, freeing human contributors for work requiring lived experience and community judgment.

## Resources

- [Getting Started with Agents](https://accessibility.github.com/documentation/guide/getting-started-with-agents/)
- [AGENTS.md — Community Contribution Values](../AGENTS.md#7-community-contribution-values)
- [GitHub Issue Templates documentation](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests)
- [CONTRIBUTING.md](../CONTRIBUTING.md)
