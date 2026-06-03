---
name: bhap-ehs
description: BHAP-EHS builds and reviews EHS/safety inspection packs for BHAP/北汽海纳川, Chinese SOEs, central SOEs, local state-owned enterprises, and state-controlled manufacturing groups. Use when users ask to create, refine, test, or audit 国企/央企/省属国企/BHAP EHS safety production inspection checklists, inspection guidance manuals, major accident hazard inspections, holiday or work-resumption inspections, contractor inspections, rectification ledgers, inspection reports, internal articles/prefaces explaining checklist-to-pack methodology, or when converting laws, standards, EHS/HSE policies, or company safety rules into executable inspection items. For current laws, standards, local rules, industry major-accident-hazard criteria, or GB/AQ standards, verify live authoritative sources before finalizing.
---

# BHAP-EHS

Create BHAP/SOE EHS inspection packs, not just flat checklists. The deliverable should connect regulatory basis, SOE governance responsibilities, manufacturing-site risk, field-verifiable inspection actions, evidence, major accident hazard judgement, and rectification closure.

## Capability Modes

Pick the mode from the user request:

1. **Inspection pack mode (primary)**: produce a basis matrix, checklist, guidance manual, interview/sampling outline, rectification ledger, and report frame.
2. **Guidance manual mode (primary)**: produce a formal internal manual for a site, factory, project, subsidiary, contractor, or special inspection.
3. **Checklist/table mode**: produce concise table rows using `问、查、看、测、演`; keep major accident hazard judgement items separate.
4. **Review mode**: audit an existing checklist/manual for vague wording, missing basis, non-verifiable items, missing major-hazard separation, and weak rectification closure.
5. **Internal article/preface mode (secondary)**: explain why checklist work should become an inspection pack; use this for internal articles, report prefaces, briefing notes, or leader-facing rationale. Read `assets/templates/internal-article.md` when useful.

Do not use this skill as a generic article-writing skill. Its writing strength is formal EHS management explanation, not public-facing storytelling.

## Core Rule

Treat the output as an inspection pack:

- basis matrix
- inspection checklist
- guidance manual
- interview and sampling outline
- rectification ledger
- inspection report frame

Do not present this as a substitute for certified safety engineers, third-party assessors, regulators, or on-site expert judgement.

## Required Inputs

Extract these from the user request. If missing, proceed with explicit assumptions and mark gaps as `待补充`:

| Input | Examples |
| --- | --- |
| 企业类型 | 央企、省属国企、市属国企、国有控股企业 |
| 行业领域 | 工贸、危化、建筑施工、电力、交通、矿山、燃气、仓储、物业、文旅、医疗 |
| 检查对象 | 总部、二级公司、厂区、项目部、车间、仓库、承包商、班组 |
| 检查类型 | 综合检查、专项检查、节前检查、复工复产、领导带队检查、整改复查 |
| 地区 | 省、市、区县 |
| 输出形式 | 清单、手册、台账、报告模板、PPT 提纲、全部 |
| 使用目的 | 内部自查、集团督导、迎检准备、事故后整改复查 |

If the user says BHAP, 北汽海纳川, or 海纳川 without more detail, assume an automotive-parts/manufacturing group context with headquarters/subsidiary/factory/park/contractor layers, but still mark site, region, exact industry subtype, and company制度 as missing unless provided. Read `references/bhap-context.md` when this matters.

## Workflow

1. Identify the inspection type: headquarters governance, subsidiary supervision, factory/site inspection, hazardous operation, major accident hazard review, contractor inspection, seasonal/holiday inspection, work resumption, or post-incident rectification.
2. Build a basis matrix before writing inspection items. Include law/policy, SOE supervision, industry rules and hazard criteria, national or industry standards, local rules, and company EHS/HSE policies.
3. Convert abstract requirements into observable actions. Use `问、查、看、测、演`.
4. Generate checklist items with: 序号、检查模块、检查事项、检查方法、应查看资料/现场证据、判定要点、风险等级、隐患类别、整改建议、依据.
5. Separately mark major accident hazard judgement items as `重大事故隐患判定关注项`. Do not mix them with ordinary management defects.
6. Generate the guidance manual if requested: purpose, scope, basis, organization, pre-check materials, field route, key modules, interview outline, sampling method, major hazard judgement prompts, records, rectification, closure.
7. Generate the rectification ledger if requested: problem, basis, hazard grade, corrective action, temporary controls, owner, deadline, acceptance, close-out evidence, status, escalation fields.
8. Self-review against the quality gate below.

## Quality Gate

Before finalizing, check:

- Each item is field-verifiable through `问、查、看、测、演`.
- No checklist item uses empty verbs like `加强、做好、完善、提升` as the main action.
- The output distinguishes headquarters governance, subsidiary supervision, field/site operations, and contractor/outsourced work.
- Major accident hazard judgement items are separate.
- Rectification includes responsibility, action, funding or resources where relevant, deadline, temporary control, acceptance, evidence, and closure.
- Laws, standards, and local/industry criteria are versioned or marked `需核验`.
- The user is told when local rules, company policies, or site facts are missing.

## Authoritative Source Rule

For legal, regulatory, standards, or high-stakes safety claims, use live authoritative sources when currentness matters. Prefer:

- 应急管理部、国务院/中国政府网、国务院国资委、国家标准全文公开系统、地方应急管理厅/国资委
- User-provided company制度、HSE/EHS manuals, audit reports, incident records

Do not rely on old sample data or prior drafts for current regulatory status.

## Resources

Use bundled templates when the user wants a concrete artifact:

- `assets/templates/guidance-manual.md`
- `assets/templates/inspection-checklist.md`
- `assets/templates/rectification-ledger.csv`
- `assets/templates/inspection-report.md`
- `assets/templates/interview-outline.md`
- `assets/templates/internal-article.md`

Read references only when needed:

- `references/source-verification.md`: source hierarchy and already-verified core basis.
- `references/industry-modules.md`: module selection for 工贸、危化、建筑、电力、燃气、仓储 and common special operations.
- `references/bhap-context.md`: BHAP/海纳川 default framing and assumptions.

Example outputs:

- `examples/general-industrial-factory-guidance.md`
- `examples/checklist-to-pack-article.md`

## Output Style

Use formal Chinese SOE internal-management wording for narrative sections. Use short, concrete, auditable phrases in checklist rows.

Preferred inspection verbs:

- 查阅、抽查、现场核验、访谈、对照、核对、测量、演练

Avoid:

- empty management slogans
- unverified legal certainty
- hiding major hazards inside ordinary issue lists
- pretending missing company/local information is known
