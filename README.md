# BHAP-Agent-Plaza

[中文版本](README.zh-CN.md)

**BHAP-Agent-Plaza** is the public entry point for the **Hainachuan Agent Skill Library**. It is built for two readers:

- Human users choose a job role, then open the matching profile.
- Agents read JSON manifests first, then load only the skills that match the task.

This README is intentionally short. The full 78-item catalog lives in [manifest/skills.json](manifest/skills.json), not in a giant Markdown table.

## Fast Path For Agents

1. Read [AGENTS.md](AGENTS.md).
2. If the task names a role, read [manifest/agent_profiles.json](manifest/agent_profiles.json) and match the `slug`.
3. Read [manifest/skills.json](manifest/skills.json), then filter by `public_safe`, `roles`, `tier`, `layer`, `risk_level`, and `external_only`.
4. Use local skills from `skills/<slug>/SKILL.md`; treat `external_only=true` entries as source references, not installed local tools.

## Fast Path For Humans

1. Pick a role from the table below.
2. Use the local skill picks for immediate execution.
3. Use external sources as candidates to review, adapt, or install later.

Feishu/Lark already covers chat, docs, sheets, Base, calendar, meetings, approvals, tasks, and files. This plaza focuses on the layer above that: judgment, research, content production, verification, domain reasoning, and agent orchestration.

## Catalog Snapshot

| Metric | Count |
|---|---:|
| Total catalog entries | 78 |
| Packaged local skills | 28 |
| Link-only external sources | 50 |
| Feishu base connectors | 10 |
| Role agent profiles | 11 |

## Choose By Role

| Role | Profile slug | Use when | First local skills | First external sources |
|---|---|---|---|---|
| Legal and Compliance Agent | `legal_compliance_agent` | Review contracts, policies, filings, approvals, and compliance evidence before they enter workspace execution. | `bhap-ehs`, `web-access`, `lark-doc` | `corporate-legal-contract-review`, `corporate-nda-policy-review`, `office-contract-summary` |
| Market Intelligence Agent | `market_intelligence_agent` | Collect external signals, compare competitors, watch market changes, and produce evidence-backed briefings. | `web-access`, `wind-mcp-skill`, `wind-find-finance-skill` | `anthropic-research-synthesis`, `behi-web-research-pack`, `playwright-competitive-web-intel` |
| ESG and Sustainability Agent | `esg_sustainability_agent` | Handle ESG evidence, carbon data, TNFD work, disclosure drafting, and sustainability research. | `bhap-ehs`, `ccdb`, `tnfd-disclosure` | `anthropic-research-synthesis`, `anthropic-data-visualization`, `office-pdf-extraction` |
| Finance and Investor Relations Agent | `finance_ir_agent` | Analyze financial data, market movements, filings, peer updates, and investor-facing reporting. | `wind-mcp-skill`, `wind-find-finance-skill`, `finance-report` | `anthropic-spreadsheet-analysis`, `anthropic-data-visualization`, `office-invoice-reconciliation` |
| HR and Recruiting Agent | `hr_recruiting_agent` | Prepare job descriptions, interview scorecards, candidate summaries, onboarding material, and meeting notes. | `lark-doc`, `lark-calendar`, `lark-minutes` | `corporate-hr-recruiting`, `corporate-performance-review`, `anthropic-business-writing` |
| Procurement and Supply Chain Agent | `procurement_supply_chain_agent` | Compare suppliers, summarize RFPs, track obligations, assess ESG/supply risks, and prepare procurement memos. | `bhap-ehs`, `web-access`, `ccdb` | `corporate-procurement-vendor`, `trailofbits-dependency-audit`, `office-invoice-reconciliation` |
| Product Research Agent | `product_research_agent` | Collect user, competitor, and market inputs, then turn them into specs, prototypes, and opportunity briefs. | `web-access`, `web-prototype`, `docs-page` | `anthropic-research-synthesis`, `playwright-competitive-web-intel`, `composio-project-ops` |
| Content and Media Agent | `content_media_agent` | Produce presentations, images, social posts, short-video plans, web pages, and campaign assets. | `hainachuan-ppt`, `ppt-master`, `guizang-ppt-skill` | `behi-image-production`, `behi-video-production`, `behi-social-carousel` |
| Engineering Quality Agent | `engineering_quality_agent` | Plan, implement, test, review, and verify software changes with disciplined engineering workflows. | `systematic-debugging`, `test-driven-development`, `subagent-driven-development` | `vercel-nextjs-app-router`, `playwright-web-regression`, `gentleman-repo-onboarding` |
| Security Audit Agent | `security_audit_agent` | Review code, dependencies, delivery pipelines, and system designs before exposure to production use. | `systematic-debugging`, `lark-doc`, `lark-task` | `trailofbits-security-review`, `trailofbits-dependency-audit`, `trailofbits-threat-modeling` |
| Executive Office Agent | `executive_office_agent` | Turn meetings, research, dashboards, financial notes, and cross-functional updates into decision-ready output. | `web-access`, `hainachuan-ppt`, `ppt-master` | `corporate-executive-briefing`, `office-board-minutes`, `anthropic-business-writing` |

## Core Local Skills

These are the first packaged skills to inspect. They sit above basic workspace operations.

| Tier | Skill | Category | Why use it | Link |
|---:|---|---|---|---|
| S | web-access | Research / Web Intelligence | Adds authenticated web research and source collection beyond Feishu workspace primitives. | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-access/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/web-access.zip) |
| S | wind-mcp-skill | Finance / Market Data | Provides specialized Wind market-data access for finance and strategy agents. | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/wind-mcp-skill/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/wind-mcp-skill.zip) |
| S | TNFD-disclosure | ESG / TNFD | Public TNFD workflow for nature-related disclosure planning and review. | [Raw](https://raw.githubusercontent.com/newversionparty-cn/TNFD-disclosure/main/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/TNFD-disclosure/archive/refs/heads/main.zip) |
| S | bhap-ehs | EHS / Safety Inspection | Builds SOE/BHAP safety inspection packs with basis matrices, field-verifiable checklists, manuals, ledgers, and closure logic. | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/bhap-ehs/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/bhap-ehs.zip) |
| S | hainachuan-ppt | Content / Presentation | Enforces Hainachuan formal PPTX brand, wording, font, WPS compatibility, and package-level QA. | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/hainachuan-ppt/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/hainachuan-ppt.zip) |
| S | ppt-master | Content / Presentation | Produces high-density visual decks beyond standard document editing. | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/ppt-master/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/ppt-master.zip) |
| A | guizang-ppt-skill | Content / Presentation | Creates web-based magazine or Swiss-style decks when the deliverable is a browser-readable presentation. | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/guizang-ppt-skill/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/guizang-ppt-skill.zip) |
| S | systematic-debugging | Engineering / Quality | Gives engineering agents a repeatable root-cause workflow. | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/systematic-debugging/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/systematic-debugging.zip) |
| A | ccdb | ESG / Carbon | Adds carbon factor lookup for carbon accounting workflows. | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/ccdb/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/ccdb.zip) |
| A | web-prototype | Content / Web UI | Turns ideas into browser-visible interactive prototypes. | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-prototype/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/web-prototype.zip) |
| A | dashboard | Content / Web UI | Creates dense operational dashboards and analysis surfaces. | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/dashboard/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/dashboard.zip) |

## Presentation Skill Routing

Do not use one slide skill for every presentation task. Route by target artifact.

| Need | Use | Output |
|---|---|---|
| Hainachuan formal executive PPTX, WPS review, official report decks | `hainachuan-ppt` | Editable PPTX with Fangzheng Yaoti, logo, header/footer, banned-term checks. |
| Dense visual decks, training material, complex page visuals | `ppt-master` | SVG/PPT visual content for stable high-density slide pages. |
| Magazine or Swiss-style web presentations and shareable talks | `guizang-ppt-skill` | Single-file horizontal HTML deck for browser-readable presentations. |

## Feishu Base Connectors

Keep these as infrastructure for reading and writing workspace objects. Do not treat them as the main value of the plaza.

| Connector | Tier | Typical agents | Raw |
|---|---:|---|---|
| lark-base | S | All agents | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-base/SKILL.md) |
| lark-doc | A | All agents, Legal and Compliance Agent, Executive Office Agent | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-doc/SKILL.md) |
| lark-sheets | S | All agents, Finance and Investor Relations Agent, Market Intelligence Agent | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-sheets/SKILL.md) |
| lark-im | A | All agents | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-im/SKILL.md) |
| lark-calendar | A | Executive Office Agent, HR and Recruiting Agent | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-calendar/SKILL.md) |

## External Source Families

Star counts are a point-in-time signal from 2026-05-31. External entries are link-only; review license, content, and operational fit before internal production use.

| Source | Stars | Best for | Inclusion mode |
|---|---:|---|---|
| [obra/superpowers](https://github.com/obra/superpowers) | 213,490 | Agentic methodology and skill framework for disciplined software delivery. | Link-only catalog entry |
| [anthropics/skills](https://github.com/anthropics/skills) | 144,561 | Official Agent Skills patterns for documents, data, creative work, and business communication. | Link-only catalog entry |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 62,629 | High-signal index for SaaS, CRM, project management, communication, and automation skills. | Link-only catalog entry |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | 27,356 | Official Vercel skills for frontend, React, web UX, deployment, and AI app delivery. | Link-only catalog entry |
| [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills) | 9,329 | Broad Claude Skills index with media, research, file processing, and productivity collections. | Link-only catalog entry |
| [trailofbits/skills](https://github.com/trailofbits/skills) | 5,491 | Security research, vulnerability detection, audit workflow, and supply-chain review skills. | Link-only catalog entry |
| [lackeyjb/playwright-skill](https://github.com/lackeyjb/playwright-skill) | 2,702 | Browser automation and web verification skill powered by Playwright. | Link-only catalog entry |
| [TensorBlock/awesome-mcp-servers](https://github.com/TensorBlock/awesome-mcp-servers) | 711 | MCP server index for connecting agents to enterprise tools, data, and APIs. | Link-only catalog entry |

## Catalog Layers

| Layer | Entries | Example slugs | Note |
|---|---:|---|---|
| Agent Infrastructure | 1 | `mcp-server-discovery` | See manifest for the full list |
| Agent Orchestration | 7 | `subagent-driven-development`, `vercel-ai-sdk-chat`, `okskills-codex-playbooks`, `okskills-openclaw-routing` | See manifest for the full list |
| Business Automation | 5 | `composio-crm-ops`, `composio-sales-pipeline`, `composio-project-ops`, `composio-communication-ops` | See manifest for the full list |
| Content Production | 13 | `ppt-master`, `hainachuan-ppt`, `guizang-ppt-skill`, `web-prototype` | See manifest for the full list |
| Domain Data | 2 | `wind-mcp-skill`, `ccdb` | See manifest for the full list |
| Domain Reporting | 1 | `finance-report` | See manifest for the full list |
| Domain Router | 1 | `wind-find-finance-skill` | See manifest for the full list |
| Domain Workflow | 2 | `tnfd-disclosure`, `bhap-ehs` | See manifest for the full list |
| Engineering Practice | 6 | `systematic-debugging`, `vercel-nextjs-app-router`, `test-driven-development`, `vercel-react-ui-composition` | See manifest for the full list |
| Foundation Connector | 10 | `lark-base`, `lark-sheets`, `lark-doc`, `lark-drive` | See manifest for the full list |
| Knowledge Work | 8 | `anthropic-document-workflows`, `anthropic-spreadsheet-analysis`, `anthropic-business-writing`, `composio-knowledge-workflow` | See manifest for the full list |
| Planning | 1 | `writing-plans` | See manifest for the full list |
| Plugin Authoring | 1 | `plugin-creator` | See manifest for the full list |
| Quality Review | 8 | `trailofbits-security-review`, `vercel-web-design-review`, `vercel-web-performance`, `vercel-frontend-verification` | See manifest for the full list |
| Role Bundle | 6 | `corporate-legal-contract-review`, `corporate-executive-briefing`, `corporate-nda-policy-review`, `corporate-procurement-vendor` | See manifest for the full list |
| Skill Authoring | 1 | `skill-creator` | See manifest for the full list |
| Supplemental Intelligence | 5 | `web-access`, `anthropic-research-synthesis`, `playwright-browser-automation`, `behi-web-research-pack` | See manifest for the full list |

## Files Agents Should Read

| Purpose | File | Use |
|---|---|---|
| Agent entry | [AGENTS.md](AGENTS.md) / [AGENTS.zh-CN.md](AGENTS.zh-CN.md) | Read order and selection rules for agents. |
| Role bundles | [manifest/agent_profiles.json](manifest/agent_profiles.json) | Agent profiles, local skill picks, and external source picks. |
| Skill catalog | [manifest/skills.json](manifest/skills.json) | Complete catalog. Agents should treat this as the source of truth. |
| Local skills | [skills/](skills/) | Packaged `SKILL.md` files stored in this repo. |
| ZIP packages | [dist/](dist/) | Downloadable local skill archives. |

## Install A Packaged Skill

```bash
curl -L https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-access/SKILL.md -o SKILL.md
```

For external entries, open the source repository and review it before reuse. This repository does not copy external skill text by default.
