---
name: systematic-debugging
description: Structured root-cause debugging workflow for Codex. Use when the user reports a bug, failing test, build failure, regression, unexpected behavior, flaky behavior, performance issue, or asks to debug/fix an issue where the cause is not already proven.
---

# Systematic Debugging

Use this skill to avoid guessing. Establish the root cause first, then make the smallest fix that addresses it.

## Operating Rules

- Reproduce or observe the failure before editing code.
- Read the full error output, stack trace, logs, and failing assertion.
- State the current hypothesis and the evidence for it before changing code.
- Change one variable at a time. Do not bundle speculative fixes.
- Prefer fixing the source of bad state, not the downstream symptom.
- Preserve unrelated user changes in the worktree.

## Workflow

1. **Frame the failure**
   - What exact behavior is wrong?
   - What command, test, request, or UI action demonstrates it?
   - Is it deterministic, flaky, environment-specific, or data-specific?

2. **Collect evidence**
   - Run the smallest useful reproduction.
   - Inspect recent diffs and relevant call paths.
   - For multi-component systems, check each boundary: input, output, config, environment, serialization, persistence, and side effects.
   - Add temporary diagnostics only when they answer a concrete question, then remove them before finishing.

3. **Find a working comparison**
   - Search the codebase for similar working behavior.
   - Compare broken and working paths for differences in inputs, ordering, defaults, permissions, lifecycle, and error handling.

4. **Form and test one hypothesis**
   - Write: "I think the root cause is X because Y."
   - Test with the smallest command, assertion, log, or code change.
   - If the hypothesis fails, update the explanation rather than layering another fix on top.

5. **Fix and verify**
   - Add or update a regression test when feasible.
   - Implement the narrow fix.
   - Run the targeted verification first, then broader checks if blast radius warrants it.
   - If three different fix attempts fail, stop and reassess architecture or assumptions before continuing.

## Output Standard

When reporting back, include:

- Root cause.
- Files changed.
- Verification run and result.
- Any residual risk or test gap.
