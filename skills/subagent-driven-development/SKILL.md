---
name: subagent-driven-development
description: Codex workflow for decomposing and executing implementation plans with subagents. Use when the user explicitly asks for subagents, parallel agents, delegation, multi-agent development, or when executing an existing plan whose tasks can be assigned to workers with disjoint write scopes.
---

# Subagent-Driven Development

Use this skill to coordinate implementation through Codex subagents while keeping ownership boundaries clear.

## Preconditions

- The user has explicitly asked for subagents, delegation, or parallel agent work, or an existing plan explicitly calls for subagent execution.
- Tasks are concrete enough to hand off.
- Write scopes are disjoint or sequencing is clear.
- You know what work remains on the critical path and what can run in parallel.

## Controller Responsibilities

- Keep the high-level plan and current state.
- Decide which task stays local on the critical path.
- Delegate only bounded sidecar tasks that can progress independently.
- Give each worker ownership of specific files, modules, or responsibilities.
- Tell workers they are not alone in the codebase and must not revert others' edits.
- Review returned changes before integrating or reporting completion.

## Worker Prompt Checklist

Each worker prompt should include:

- Goal and acceptance criteria.
- Files/modules the worker owns.
- Files/modules the worker must avoid.
- Relevant commands for tests or verification.
- Instruction to edit files directly in its workspace.
- Instruction to list changed paths, verification run, and blockers in the final answer.
- Reminder not to revert unrelated changes or overwrite work from other agents.

## Execution Loop

1. **Read the plan**
   - Extract tasks, dependencies, write scopes, and verification.
   - Track status with `update_plan` when useful.

2. **Split local vs delegated work**
   - Do immediate blocking work locally.
   - Spawn workers only for non-overlapping tasks that can run while local work continues.

3. **Spawn workers**
   - Use `spawn_agent` with `worker` for code edits.
   - Use `explorer` only for narrow read-only codebase questions.
   - Avoid duplicate assignments.

4. **Continue local work**
   - Do not idle while workers run unless blocked.
   - Avoid redoing delegated tasks.

5. **Integrate**
   - Wait only when the result is needed.
   - Review changed paths, tests, and notes.
   - Resolve conflicts conservatively without discarding user or worker changes.

6. **Final verification**
   - Run targeted checks for each task.
   - Run broader checks when touched code is shared or high-risk.
   - Report any verification that could not be run.

## Anti-Patterns

- Delegating the next blocking step and waiting immediately.
- Giving two workers the same files.
- Asking workers to explore vaguely.
- Accepting worker output without inspecting changed files.
- Spawning agents when the user did not authorize subagent work.
