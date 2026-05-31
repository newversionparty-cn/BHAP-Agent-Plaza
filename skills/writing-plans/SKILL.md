---
name: writing-plans
description: Implementation-plan authoring workflow for Codex. Use when the user asks for a plan, spec-to-plan breakdown, execution plan, task decomposition, project roadmap, or when a complex coding task needs a written plan before implementation.
---

# Writing Plans

Use this skill to produce an implementation plan that another Codex session or subagent can execute without rediscovering the context.

## Planning Principles

- Inspect the codebase before planning.
- Follow existing architecture, naming, tools, and test conventions.
- Break work into independently verifiable tasks.
- Prefer narrow, behavior-driven steps over broad "implement X" tasks.
- Include exact file paths, commands, and expected verification where known.
- Mark assumptions and open questions explicitly.
- Do not execute the plan unless the user asks or the surrounding instruction says to continue.

## Plan Shape

```markdown
# <Feature or Fix> Implementation Plan

**Goal:** One sentence.
**Current State:** What exists now.
**Approach:** 2-5 bullets explaining the chosen design.
**Assumptions/Open Questions:** Only items that can affect execution.

## Tasks

### Task 1: <name>
**Files:** `path/a`, `path/b`
**Purpose:** What this task accomplishes.
**Steps:**
- [ ] Add or update the focused failing test.
- [ ] Implement the minimal behavior.
- [ ] Run `<exact command>`.
- [ ] Update docs or fixtures if required.

### Task 2: <name>
...

## Verification
- `<targeted command>`
- `<broader command if needed>`

## Risks
- Known edge cases, migration concerns, compatibility risks, or missing test coverage.
```

## Task Granularity

Each task should be small enough that:

- The changed files are clear.
- The success condition is testable.
- A worker can complete it without making architecture decisions.
- Review can determine whether it matches the plan.

For large efforts, split by behavior or boundary, not by generic layers. For example, "add retry behavior to import job" is better than "update backend."

## Codex Execution Notes

- If subagents are useful, plan disjoint write scopes so workers do not collide.
- If the user asks for planning only, stop after the plan.
- If execution should follow, use the plan as a checklist and update status as tasks complete.
