# Agent Guide

This file is for AI agents using BHAP-Agent-Plaza. Do not parse README tables as the catalog. Use the JSON manifests.

## Read Order

1. Identify the task type and, if available, the role.
2. Read `manifest/agent_profiles.json` when a role is present.
3. Read `manifest/skills.json` for the full 76-entry catalog.
4. Select candidates with deterministic filters.
5. Load only the selected local `SKILL.md` files or cite external sources as references.

## Selection Rules

- Require `public_safe=true`.
- Prefer `tier=S`, then `tier=A`, then `tier=B`.
- Match `roles` first, then `category` and `layer`.
- Treat `external_only=true` as a link-only source. Do not assume files exist under `skills/`.
- Treat `risk_level=medium` as requiring human review before production reuse.
- Prefer local skills for direct execution and external entries for research or later adoption.

## Local Skill Contract

A local skill should have:

- `slug`
- `name`
- `entrypoint`
- `raw_url`
- `zip_url`
- `roles`
- `selection_reason`

Load `entrypoint` only after the user task matches the skill.

## Recommended Output

When recommending skills, return:

- selected role profile slug;
- selected skill slugs;
- whether each item is local or external;
- why each skill was selected;
- any human review needed before production use.

## Safety Boundary

Use only public catalog data. Do not add private agents, local user configuration, sensitive credentials, cache folders, backup copies, or temporary downloads to this repository.
