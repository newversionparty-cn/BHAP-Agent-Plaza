---
name: test-driven-development
description: Test-first implementation workflow for Codex. Use when implementing a behavior change, bug fix, refactor with observable behavior, parser/algorithm change, API contract change, or any request where a failing test can define correctness before production code is edited.
---

# Test-Driven Development

Use this skill to make behavior changes with a red-green-refactor loop.

## When to Apply

Apply TDD when the change has observable behavior and the repo has a practical test harness. If the repo lacks tests, create the smallest useful characterization test, fixture, or script before implementation when feasible.

Do not force TDD for pure documentation, formatting, generated artifacts, trivial configuration, or throwaway spikes unless the user asks.

## Red-Green-Refactor

1. **Red: write the failing test**
   - Test one behavior.
   - Name the test by behavior, not implementation.
   - Prefer real code paths over mocks. Mock only external systems, time, network, or nondeterminism.
   - Keep fixtures minimal and local to the behavior.

2. **Verify red**
   - Run the narrow test command.
   - Confirm it fails for the expected reason.
   - If it passes immediately, the test is not proving the missing behavior.
   - If it errors for setup or typo reasons, fix the test until it fails meaningfully.

3. **Green: implement the minimal behavior**
   - Write the smallest production change that passes the test.
   - Avoid extra features, unrelated refactors, or broad cleanup.

4. **Verify green**
   - Re-run the narrow test.
   - Run adjacent tests when the touched code is shared.
   - If broader behavior can regress, run the project’s normal verification command.

5. **Refactor**
   - Clean names, duplication, and structure only after tests are green.
   - Re-run the relevant tests after refactoring.

## Practical Codex Notes

- If production code was already edited before the skill triggered, do not delete user work blindly. Add the missing failing test, verify it catches the issue if possible, then proceed.
- If a test cannot be added because the harness is absent or too expensive, state that constraint and create the smallest repeatable manual or script-based verification.
- For bug fixes, the first test should fail on the bug and pass only after the fix.

## Completion Criteria

Finish with the test added or updated, implementation passing, and verification command reported.
