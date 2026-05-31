# BHAP-Agent-Plaza

[English version](README.md)

**BHAP-Agent-Plaza** 是 **海纳川智能体技能库** 的公开入口。它同时服务两类读者：

- 人类用户：先选岗位，再看这个岗位该配哪些技能。
- Agent：先读 JSON manifest，再按任务筛选技能，不从 README 里猜。

这个 README 会保持短。完整 76 条目录在 [manifest/skills.json](manifest/skills.json)，不放在首页大表格里。

## Agent 快速读取

1. 先读 [AGENTS.zh-CN.md](AGENTS.zh-CN.md)。
2. 如果任务有岗位，读 [manifest/agent_profiles.json](manifest/agent_profiles.json)，匹配 `slug`。
3. 读 [manifest/skills.json](manifest/skills.json)，按 `public_safe`、`roles`、`tier`、`layer`、`risk_level`、`external_only` 过滤。
4. 本地技能从 `skills/<slug>/SKILL.md` 读取；`external_only=true` 只代表外部来源，不代表本仓库已经安装。

## 人类快速选择

1. 先在下表选岗位智能体。
2. 本地技能可以直接用 Raw 或 ZIP。
3. 外部来源先审查许可、内容和适配度，再决定是否引入。

飞书已经提供 IM、文档、表格、多维表格、日程、会议、审批、任务和文件。这个仓库重点补飞书之上的能力：专业判断、信息收集、内容生产、结果验证、领域推理和智能体协同。

## 目录快照

| 指标 | 数量 |
|---|---:|
| 技能目录总数 | 76 |
| 本仓库已打包技能 | 26 |
| 外链技能源 | 50 |
| 飞书基础连接器 | 10 |
| 岗位智能体配置 | 11 |

## 按岗位选择

| 岗位智能体 | Profile slug | 适用任务 | 优先本地技能 | 优先外部来源 |
|---|---|---|---|---|
| 法务合规智能体 | `legal_compliance_agent` | 在进入飞书审批和协作流程前，完成合同、制度、公告和合规证据的审查。 | `web-access`, `lark-doc`, `lark-drive` | `corporate-legal-contract-review`, `corporate-nda-policy-review`, `office-contract-summary` |
| 市场情报智能体 | `market_intelligence_agent` | 采集外部信号、对比竞品、跟踪市场变化，并输出有证据支撑的简报。 | `web-access`, `wind-mcp-skill`, `wind-find-finance-skill` | `anthropic-research-synthesis`, `behi-web-research-pack`, `playwright-competitive-web-intel` |
| ESG 与可持续发展智能体 | `esg_sustainability_agent` | 处理 ESG 证据、碳数据、TNFD 工作、披露起草和可持续发展研究。 | `ccdb`, `tnfd-disclosure`, `web-access` | `anthropic-research-synthesis`, `anthropic-data-visualization`, `office-pdf-extraction` |
| 财务与投关智能体 | `finance_ir_agent` | 分析财务数据、市场波动、公告文件、同业动态和投关材料。 | `wind-mcp-skill`, `wind-find-finance-skill`, `finance-report` | `anthropic-spreadsheet-analysis`, `anthropic-data-visualization`, `office-invoice-reconciliation` |
| HR 与招聘智能体 | `hr_recruiting_agent` | 准备岗位说明、面试评分表、候选人摘要、入职材料和会议记录。 | `lark-doc`, `lark-calendar`, `lark-minutes` | `corporate-hr-recruiting`, `corporate-performance-review`, `anthropic-business-writing` |
| 采购与供应链智能体 | `procurement_supply_chain_agent` | 对比供应商、汇总 RFP、跟踪义务、评估 ESG/供应风险并准备采购备忘录。 | `web-access`, `ccdb`, `lark-base` | `corporate-procurement-vendor`, `trailofbits-dependency-audit`, `office-invoice-reconciliation` |
| 产品研究智能体 | `product_research_agent` | 采集用户、竞品和市场输入，并转成规格说明、原型和机会简报。 | `web-access`, `web-prototype`, `docs-page` | `anthropic-research-synthesis`, `playwright-competitive-web-intel`, `composio-project-ops` |
| 内容与媒体智能体 | `content_media_agent` | 制作演示稿、图片、社媒内容、短视频方案、网页和营销素材。 | `ppt-master`, `guizang-ppt-skill`, `web-prototype` | `behi-image-production`, `behi-video-production`, `behi-social-carousel` |
| 研发质量智能体 | `engineering_quality_agent` | 用工程化流程计划、实现、测试、评审和验证软件变更。 | `systematic-debugging`, `test-driven-development`, `subagent-driven-development` | `vercel-nextjs-app-router`, `playwright-web-regression`, `gentleman-repo-onboarding` |
| 安全审计智能体 | `security_audit_agent` | 在生产使用前审查代码、依赖、交付流水线和系统设计。 | `systematic-debugging`, `lark-doc`, `lark-task` | `trailofbits-security-review`, `trailofbits-dependency-audit`, `trailofbits-threat-modeling` |
| 总办与经营助手智能体 | `executive_office_agent` | 把会议、调研、看板、财务笔记和跨部门更新转成可决策材料。 | `web-access`, `ppt-master`, `dashboard` | `corporate-executive-briefing`, `office-board-minutes`, `anthropic-business-writing` |

## 核心本地技能

下面是最值得先看的本地打包技能，它们不是飞书基础能力，而是上层补充能力。

| 等级 | 技能 | 分类 | 为什么用 | 链接 |
|---:|---|---|---|---|
| S | web-access | Research / Web Intelligence | 补足飞书之外的网页调研、登录态页面读取和信源采集能力。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-access/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/web-access.zip) |
| S | wind-mcp-skill | Finance / Market Data | 提供万得金融数据能力，适合财务、投关和战略情报智能体。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/wind-mcp-skill/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/wind-mcp-skill.zip) |
| S | TNFD-disclosure | ESG / TNFD | 面向 TNFD 自然相关披露的公开工作流和审查能力。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/TNFD-disclosure/main/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/TNFD-disclosure/archive/refs/heads/main.zip) |
| S | ppt-master | Content / Presentation | 用于高质量图文演示稿和培训材料，补足普通文档编辑能力。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/ppt-master/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/ppt-master.zip) |
| S | systematic-debugging | Engineering / Quality | 为研发智能体提供可复用的根因分析和排错流程。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/systematic-debugging/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/systematic-debugging.zip) |
| A | ccdb | ESG / Carbon | 提供碳排放因子查询，支撑碳核算和供应链 ESG 分析。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/ccdb/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/ccdb.zip) |
| A | web-prototype | Content / Web UI | 把想法转成可浏览、可交互的网页原型。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-prototype/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/web-prototype.zip) |
| A | dashboard | Content / Web UI | 生成经营看板、分析台和管理驾驶舱界面。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/dashboard/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/dashboard.zip) |

## 飞书基础连接器

这些技能用于读写飞书工作区对象，属于基础设施，不是这个技能广场的主要卖点。

| 连接器 | 等级 | 典型智能体 | Raw |
|---|---:|---|---|
| lark-base | S | 全部智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-base/SKILL.md) |
| lark-doc | A | 全部智能体, 法务合规智能体, 总办与经营助手智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-doc/SKILL.md) |
| lark-sheets | S | 全部智能体, 财务与投关智能体, 市场情报智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-sheets/SKILL.md) |
| lark-im | A | 全部智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-im/SKILL.md) |
| lark-calendar | A | 总办与经营助手智能体, HR 与招聘智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-calendar/SKILL.md) |

## 外部技能源

星标数是 2026-05-31 的快照，只作为热度参考。外部条目默认只收录链接，不复制正文；生产使用前要审查许可、内容和运行风险。

| 来源 | Stars | 适合场景 | 收录方式 |
|---|---:|---|---|
| [obra/superpowers](https://github.com/obra/superpowers) | 213,490 | 面向软件交付的智能体方法论和技能框架。 | 外链收录，不复制正文 |
| [anthropics/skills](https://github.com/anthropics/skills) | 144,561 | 官方 Agent Skills 范式，适合文档、数据、创意和商务沟通能力。 | 外链收录，不复制正文 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 62,629 | 高星技能索引，适合 SaaS、CRM、项目管理、沟通协作和自动化场景。 | 外链收录，不复制正文 |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | 27,356 | Vercel 官方技能，覆盖前端、React、网页体验、部署和 AI 应用交付。 | 外链收录，不复制正文 |
| [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills) | 9,329 | 覆盖面较广的 Claude Skills 索引，包含媒体、研究、文件处理和效率工具。 | 外链收录，不复制正文 |
| [trailofbits/skills](https://github.com/trailofbits/skills) | 5,491 | 安全研究、漏洞检测、审计流程和供应链风险审查技能。 | 外链收录，不复制正文 |
| [lackeyjb/playwright-skill](https://github.com/lackeyjb/playwright-skill) | 2,702 | 基于 Playwright 的浏览器自动化和网页验证技能。 | 外链收录，不复制正文 |
| [TensorBlock/awesome-mcp-servers](https://github.com/TensorBlock/awesome-mcp-servers) | 711 | MCP 服务索引，用于把智能体连接到企业工具、数据和 API。 | 外链收录，不复制正文 |

## 能力层级

| 层级 | 条目数 | 示例 slug | 说明 |
|---|---:|---|---|
| Agent Infrastructure | 1 | `mcp-server-discovery` | 完整清单见 manifest |
| Agent Orchestration | 7 | `subagent-driven-development`, `vercel-ai-sdk-chat`, `okskills-codex-playbooks`, `okskills-openclaw-routing` | 完整清单见 manifest |
| Business Automation | 5 | `composio-crm-ops`, `composio-sales-pipeline`, `composio-project-ops`, `composio-communication-ops` | 完整清单见 manifest |
| Content Production | 12 | `ppt-master`, `guizang-ppt-skill`, `web-prototype`, `dashboard` | 完整清单见 manifest |
| Domain Data | 2 | `wind-mcp-skill`, `ccdb` | 完整清单见 manifest |
| Domain Reporting | 1 | `finance-report` | 完整清单见 manifest |
| Domain Router | 1 | `wind-find-finance-skill` | 完整清单见 manifest |
| Domain Workflow | 1 | `tnfd-disclosure` | 完整清单见 manifest |
| Engineering Practice | 6 | `systematic-debugging`, `vercel-nextjs-app-router`, `test-driven-development`, `vercel-react-ui-composition` | 完整清单见 manifest |
| Foundation Connector | 10 | `lark-base`, `lark-sheets`, `lark-doc`, `lark-drive` | 完整清单见 manifest |
| Knowledge Work | 8 | `anthropic-document-workflows`, `anthropic-spreadsheet-analysis`, `anthropic-business-writing`, `composio-knowledge-workflow` | 完整清单见 manifest |
| Planning | 1 | `writing-plans` | 完整清单见 manifest |
| Plugin Authoring | 1 | `plugin-creator` | 完整清单见 manifest |
| Quality Review | 8 | `trailofbits-security-review`, `vercel-web-design-review`, `vercel-web-performance`, `vercel-frontend-verification` | 完整清单见 manifest |
| Role Bundle | 6 | `corporate-legal-contract-review`, `corporate-executive-briefing`, `corporate-nda-policy-review`, `corporate-procurement-vendor` | 完整清单见 manifest |
| Skill Authoring | 1 | `skill-creator` | 完整清单见 manifest |
| Supplemental Intelligence | 5 | `web-access`, `anthropic-research-synthesis`, `playwright-browser-automation`, `behi-web-research-pack` | 完整清单见 manifest |

## Agent 应该读取的文件

| 用途 | 文件 | 说明 |
|---|---|---|
| Agent 入口 | [AGENTS.md](AGENTS.md) / [AGENTS.zh-CN.md](AGENTS.zh-CN.md) | 给智能体看的读取顺序和筛选规则。 |
| 岗位包 | [manifest/agent_profiles.json](manifest/agent_profiles.json) | 岗位智能体定义、推荐本地技能、推荐外部来源。 |
| 技能目录 | [manifest/skills.json](manifest/skills.json) | 完整技能数据库，agent 应以它为准。 |
| 本地技能 | [skills/](skills/) | 仓库内已打包的 `SKILL.md`。 |
| ZIP 包 | [dist/](dist/) | 可下载的本地技能压缩包。 |

## 安装本地技能

```bash
curl -L https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-access/SKILL.md -o SKILL.md
```

外部条目请先打开来源仓库审查，再决定安装、改造或仅作为参考。本仓库默认不复制外部技能正文。
