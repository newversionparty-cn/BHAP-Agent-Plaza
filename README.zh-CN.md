# BHAP-Agent-Plaza

[English version](README.md)

**BHAP-Agent-Plaza** 是 **海纳川智能体技能库** 的公开目录。它不是把本机技能原样罗列出来，而是把企业智能体真正需要的能力整理成“技能广场”：本地可复用技能、GitHub 高信号技能源、以及按岗位配置的智能体技能包。

这版重点回答一个问题：如果飞书自带智能体已经会用 IM、文档、表格、多维表格、审批、日程、会议和任务，那么企业还需要哪些“之上”的能力？

## 为什么不是飞书能力重复

飞书是企业协作底座，负责承载消息、文档、表格、流程和组织上下文。BHAP-Agent-Plaza 关注的是更上层的能力：

- 岗位判断：合同审查、供应商分析、财务解读、ESG 披露、安全审计；
- 信息收集：网页调研、市场数据、竞品跟踪、信源综合；
- 内容生产：演示稿、看板、图片、视频方案、社媒素材、网页原型；
- 工程能力：测试、排错、代码评审、浏览器验证、智能体协同；
- 基础连接器：飞书技能继续保留，但它们只是智能体读写工作区对象的底层接口。

## 推荐岗位智能体配置

| 智能体 | 主要任务 | 本仓库技能 | 推荐外部技能源 |
|---|---|---|---|
| 法务合规智能体 | 在进入飞书审批和协作流程前，完成合同、制度、公告和合规证据的审查。 | `web-access`, `lark-doc`, `lark-drive`, `tnfd-disclosure` | `corporate-legal-contract-review`, `corporate-nda-policy-review`, `office-contract-summary`, `office-pdf-extraction`, `anthropic-document-workflows` |
| 市场情报智能体 | 采集外部信号、对比竞品、跟踪市场变化，并输出有证据支撑的简报。 | `web-access`, `wind-mcp-skill`, `wind-find-finance-skill`, `dashboard` | `anthropic-research-synthesis`, `behi-web-research-pack`, `playwright-competitive-web-intel`, `composio-crm-ops` |
| ESG 与可持续发展智能体 | 处理 ESG 证据、碳数据、TNFD 工作、披露起草和可持续发展研究。 | `ccdb`, `tnfd-disclosure`, `web-access`, `lark-sheets` | `anthropic-research-synthesis`, `anthropic-data-visualization`, `office-pdf-extraction`, `behi-document-processing` |
| 财务与投关智能体 | 分析财务数据、市场波动、公告文件、同业动态和投关材料。 | `wind-mcp-skill`, `wind-find-finance-skill`, `finance-report`, `lark-sheets` | `anthropic-spreadsheet-analysis`, `anthropic-data-visualization`, `office-invoice-reconciliation`, `office-pdf-extraction` |
| HR 与招聘智能体 | 准备岗位说明、面试评分表、候选人摘要、入职材料和会议记录。 | `lark-doc`, `lark-calendar`, `lark-minutes`, `lark-task` | `corporate-hr-recruiting`, `corporate-performance-review`, `anthropic-business-writing`, `behi-audio-transcription` |
| 采购与供应链智能体 | 对比供应商、汇总 RFP、跟踪义务、评估 ESG/供应风险并准备采购备忘录。 | `web-access`, `ccdb`, `lark-base`, `lark-sheets` | `corporate-procurement-vendor`, `trailofbits-dependency-audit`, `office-invoice-reconciliation`, `mcp-server-discovery` |
| 产品研究智能体 | 采集用户、竞品和市场输入，并转成规格说明、原型和机会简报。 | `web-access`, `web-prototype`, `docs-page`, `writing-plans` | `anthropic-research-synthesis`, `playwright-competitive-web-intel`, `composio-project-ops`, `vercel-web-design-review` |
| 内容与媒体智能体 | 制作演示稿、图片、社媒内容、短视频方案、网页和营销素材。 | `ppt-master`, `guizang-ppt-skill`, `web-prototype`, `dashboard` | `behi-image-production`, `behi-video-production`, `behi-social-carousel`, `anthropic-creative-production` |
| 研发质量智能体 | 用工程化流程计划、实现、测试、评审和验证软件变更。 | `systematic-debugging`, `test-driven-development`, `subagent-driven-development`, `writing-plans` | `vercel-nextjs-app-router`, `playwright-web-regression`, `gentleman-repo-onboarding`, `superpowers-agent-methodology` |
| 安全审计智能体 | 在生产使用前审查代码、依赖、交付流水线和系统设计。 | `systematic-debugging`, `lark-doc`, `lark-task` | `trailofbits-security-review`, `trailofbits-dependency-audit`, `trailofbits-threat-modeling`, `trailofbits-fuzzing` |
| 总办与经营助手智能体 | 把会议、调研、看板、财务笔记和跨部门更新转成可决策材料。 | `web-access`, `ppt-master`, `dashboard`, `writing-plans` | `corporate-executive-briefing`, `office-board-minutes`, `anthropic-business-writing`, `superpowers-agent-methodology` |

## GitHub 精选技能源

星标数是 2026-05-31 的快照，只作为热度和维护活跃度参考。外部来源默认只做链接收录，不复制正文；进入企业生产环境前需要再做内容和许可审查。

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
| [Gentleman-Programming/Gentleman-Skills](https://github.com/Gentleman-Programming/Gentleman-Skills) | 533 | 社区智能体技能模式，适合代码工作、计划制定和工具调用流程。 | 外链收录，不复制正文 |
| [mxyhi/ok-skills](https://github.com/mxyhi/ok-skills) | 391 | 跨智能体技能和 playbook 集合，覆盖 Codex、Claude Code、Cursor、OpenClaw。 | 外链收录，不复制正文 |
| [claude-office-skills/skills](https://github.com/claude-office-skills/skills) | 178 | 办公技能集合，适合合同、PDF、HR 材料、会议记录和后台办公任务。 | 外链收录，不复制正文 |
| [supatest-ai/awesome-claude-code-sub-agents](https://github.com/supatest-ai/awesome-claude-code-sub-agents) | 163 | 专门化代码子智能体集合，适合 QA、评审、架构和实现分工。 | 外链收录，不复制正文 |
| [w95/awesome-claude-corporate-skills](https://github.com/w95/awesome-claude-corporate-skills) | 48 | 按企业岗位组织的技能目录，覆盖法务、财务、HR、采购、市场和运营。 | 外链收录，不复制正文 |

## 本仓库已打包技能

这些技能已经在本仓库内提供稳定 Raw 和 ZIP 下载链接。

| 分类 | 等级 | 技能 | 价值 | Raw | ZIP |
|---|---:|---|---|---|---|
| Research / Web Intelligence | S | web-access | 补足飞书之外的网页调研、登录态页面读取和信源采集能力。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-access/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/web-access.zip) |
| Finance / Market Data | S | wind-mcp-skill | 提供万得金融数据能力，适合财务、投关和战略情报智能体。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/wind-mcp-skill/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/wind-mcp-skill.zip) |
| Finance / Market Data | S | wind-find-finance-skill | 把市场分析、板块轮动、个股筛选等任务路由到合适能力。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/wind-find-finance-skill/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/wind-find-finance-skill.zip) |
| Engineering / Quality | S | systematic-debugging | 为研发智能体提供可复用的根因分析和排错流程。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/systematic-debugging/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/systematic-debugging.zip) |
| Engineering / Quality | A | test-driven-development | 让实现型智能体具备测试先行的工程工作流。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/test-driven-development/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/test-driven-development.zip) |
| Agent Engineering | A | subagent-driven-development | 支持把复杂任务拆给多个专门智能体协同完成。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/subagent-driven-development/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/subagent-driven-development.zip) |
| Agent Engineering | A | writing-plans | 形成可直接交付执行的工程计划和任务说明。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/writing-plans/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/writing-plans.zip) |
| Agent Engineering | A | skill-creator | 规范新技能的编写、结构和评审方式。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/skill-creator/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/skill-creator.zip) |
| Agent Engineering | A | plugin-creator | 当技能需要工具、应用或服务时，用于搭建插件包。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/plugin-creator/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/plugin-creator.zip) |
| Content / Presentation | S | ppt-master | 用于高质量图文演示稿和培训材料，补足普通文档编辑能力。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/ppt-master/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/ppt-master.zip) |
| Content / Presentation | A | guizang-ppt-skill | 生成网页式横向翻页演示，适合视觉汇报和传播材料。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/guizang-ppt-skill/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/guizang-ppt-skill.zip) |
| Content / Web UI | A | web-prototype | 把想法转成可浏览、可交互的网页原型。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-prototype/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/web-prototype.zip) |
| Content / Web UI | A | dashboard | 生成经营看板、分析台和管理驾驶舱界面。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/dashboard/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/dashboard.zip) |
| Content / Documentation | B | docs-page | 生成带导航、示例和结构化正文的文档页面。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/docs-page/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/docs-page.zip) |
| Finance / Reporting | B | finance-report | 把财务数据整理成投关和管理汇报材料。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/finance-report/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/finance-report.zip) |
| ESG / Carbon | A | ccdb | 提供碳排放因子查询，支撑碳核算和供应链 ESG 分析。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/ccdb/SKILL.md) | [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/ccdb.zip) |

## 完整技能目录

完整目录同时包含本地打包技能和外部技能源。智能体读取时优先使用 `manifest/skills.json`。

| 层级 | 分类 | 等级 | 技能或来源 | 推荐岗位 | 筛选理由 | 安装 / 来源 |
|---|---|---:|---|---|---|---|
| Agent Infrastructure | Agent Infrastructure | A | MCP server discovery index | 研发质量智能体, 总办与经营助手智能体 | 帮助智能体接入工具，而不是重复写技能。 | [来源](https://github.com/TensorBlock/awesome-mcp-servers) |
| Agent Orchestration | Agent Engineering | A | Cross-agent Codex playbooks | 研发质量智能体, 总办与经营助手智能体 | 支持跨智能体复用技能和流程。 | [来源](https://github.com/mxyhi/ok-skills) |
| Agent Orchestration | Agent Engineering | A | OpenClaw routing patterns | 研发质量智能体 | 适合本机 Codex 与 OpenClaw 协作。 | [来源](https://github.com/mxyhi/ok-skills) |
| Agent Orchestration | Agent Engineering | A | subagent-driven-development | 研发质量智能体, 总办与经营助手智能体 | 支持把复杂任务拆给多个专门智能体协同完成。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/subagent-driven-development/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/subagent-driven-development.zip) |
| Agent Orchestration | Agent Engineering | A | Agentic delivery methodology | 研发质量智能体, 总办与经营助手智能体 | 高星方法论来源，可用于智能体行为设计。 | [来源](https://github.com/obra/superpowers) |
| Agent Orchestration | Agent Engineering | A | AI SDK chat application skills | 研发质量智能体, 总办与经营助手智能体 | 适合构建海纳川智能体工作台。 | [来源](https://github.com/vercel-labs/agent-skills) |
| Agent Orchestration | Engineering / Code Review | A | Code-review sub-agent collection | 研发质量智能体, 安全审计智能体 | 帮助把代码评审职责拆给不同智能体。 | [来源](https://github.com/supatest-ai/awesome-claude-code-sub-agents) |
| Agent Orchestration | Engineering / QA | A | QA sub-agent collection | 研发质量智能体 | 适合多智能体实现后的质量检查。 | [来源](https://github.com/supatest-ai/awesome-claude-code-sub-agents) |
| Business Automation | Project Operations | A | Project management automation | 产品研究智能体, 研发质量智能体 | 把智能体工作接入交付管理工具。 | [来源](https://github.com/ComposioHQ/awesome-claude-skills) |
| Business Automation | Sales / CRM | A | CRM operations skill index | 市场情报智能体, 销售智能体 | 适合飞书之外的客户和市场运营协同。 | [来源](https://github.com/ComposioHQ/awesome-claude-skills) |
| Business Automation | Sales / CRM | A | Sales pipeline automation | 销售智能体, 总办与经营助手智能体 | 为销售团队补充收入流程智能体能力。 | [来源](https://github.com/ComposioHQ/awesome-claude-skills) |
| Business Automation | Business Communication | B | Communication operations skills | 总办与经营助手智能体, HR 与招聘智能体, 销售智能体 | 适合跨工具沟通和提醒流程。 | [来源](https://github.com/ComposioHQ/awesome-claude-skills) |
| Business Automation | Finance / Operations | B | Invoice reconciliation skills | 财务与投关智能体, 采购与供应链智能体 | 补充财务运营处理能力。 | [来源](https://github.com/claude-office-skills/skills) |
| Content Production | Content / Presentation | S | ppt-master | 内容与媒体智能体, 总办与经营助手智能体, 市场情报智能体 | 用于高质量图文演示稿和培训材料，补足普通文档编辑能力。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/ppt-master/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/ppt-master.zip) |
| Content Production | Content / Image | A | Image production skill index | 内容与媒体智能体, 市场营销智能体 | 补足文档和演示之外的视觉生产能力。 | [来源](https://github.com/BehiSecc/awesome-claude-skills) |
| Content Production | Content / Media | A | Creative production skills | 内容与媒体智能体, 市场营销智能体 | 支持内容团队进行高质量创意生产。 | [来源](https://github.com/anthropics/skills) |
| Content Production | Content / Presentation | A | Presentation workflow skills | 内容与媒体智能体, 总办与经营助手智能体 | 补足本地 PPT 生成之外的规划和审阅方式。 | [来源](https://github.com/anthropics/skills) |
| Content Production | Content / Presentation | A | guizang-ppt-skill | 内容与媒体智能体, 总办与经营助手智能体 | 生成网页式横向翻页演示，适合视觉汇报和传播材料。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/guizang-ppt-skill/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/guizang-ppt-skill.zip) |
| Content Production | Content / Social | A | Social media content packs | 内容与媒体智能体, 市场营销智能体 | 把调研成果转成可发布传播素材。 | [来源](https://github.com/BehiSecc/awesome-claude-skills) |
| Content Production | Content / Video | A | Video production skill index | 内容与媒体智能体, 市场营销智能体 | 覆盖内容智能体需要的视频工作流。 | [来源](https://github.com/BehiSecc/awesome-claude-skills) |
| Content Production | Content / Web UI | A | dashboard | 内容与媒体智能体, 市场情报智能体, 总办与经营助手智能体 | 生成经营看板、分析台和管理驾驶舱界面。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/dashboard/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/dashboard.zip) |
| Content Production | Content / Web UI | A | web-prototype | 内容与媒体智能体, 产品研究智能体 | 把想法转成可浏览、可交互的网页原型。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-prototype/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/web-prototype.zip) |
| Content Production | Data Analysis | A | Data visualization patterns | 财务与投关智能体, 市场情报智能体, ESG 与可持续发展智能体 | 提升报告和看板中的图表选择质量。 | [来源](https://github.com/anthropics/skills) |
| Content Production | Content / Audio | B | Audio and transcript skills | 内容与媒体智能体, 总办与经营助手智能体, HR 与招聘智能体 | 适合会议、访谈和培训材料处理。 | [来源](https://github.com/BehiSecc/awesome-claude-skills) |
| Content Production | Content / Documentation | B | docs-page | 产品研究智能体, 研发质量智能体, 法务合规智能体 | 生成带导航、示例和结构化正文的文档页面。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/docs-page/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/docs-page.zip) |
| Domain Data | Finance / Market Data | S | wind-mcp-skill | 财务与投关智能体, 市场情报智能体, 总办与经营助手智能体 | 提供万得金融数据能力，适合财务、投关和战略情报智能体。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/wind-mcp-skill/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/wind-mcp-skill.zip) |
| Domain Data | ESG / Carbon | A | ccdb | ESG 与可持续发展智能体, 采购与供应链智能体 | 提供碳排放因子查询，支撑碳核算和供应链 ESG 分析。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/ccdb/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/ccdb.zip) |
| Domain Reporting | Finance / Reporting | B | finance-report | 财务与投关智能体, 总办与经营助手智能体 | 把财务数据整理成投关和管理汇报材料。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/finance-report/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/finance-report.zip) |
| Domain Router | Finance / Market Data | S | wind-find-finance-skill | 财务与投关智能体, 市场情报智能体 | 把市场分析、板块轮动、个股筛选等任务路由到合适能力。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/wind-find-finance-skill/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/wind-find-finance-skill.zip) |
| Domain Workflow | ESG / TNFD | S | TNFD-disclosure | ESG 与可持续发展智能体, 法务合规智能体, 总办与经营助手智能体 | 面向 TNFD 自然相关披露的公开工作流和审查能力。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/TNFD-disclosure/main/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/TNFD-disclosure/archive/refs/heads/main.zip) |
| Engineering Practice | Engineering / Quality | S | systematic-debugging | 研发质量智能体, 安全审计智能体 | 为研发智能体提供可复用的根因分析和排错流程。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/systematic-debugging/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/systematic-debugging.zip) |
| Engineering Practice | Engineering / Web App | S | Next.js App Router skill set | 研发质量智能体, 产品研究智能体 | 适合搭建 Web 工作台和内部工具。 | [来源](https://github.com/vercel-labs/agent-skills) |
| Engineering Practice | Engineering / Codebase | A | Repository onboarding skills | 研发质量智能体 | 提升代码智能体接手仓库的效率。 | [来源](https://github.com/Gentleman-Programming/Gentleman-Skills) |
| Engineering Practice | Engineering / DevOps | A | Deployment and CI/CD skills | 研发质量智能体 | 把原型进一步接到真实交付流程。 | [来源](https://github.com/vercel-labs/agent-skills) |
| Engineering Practice | Engineering / Frontend | A | React UI composition skills | 研发质量智能体, 内容与媒体智能体 | 补充生产级前端实现范式。 | [来源](https://github.com/vercel-labs/agent-skills) |
| Engineering Practice | Engineering / Quality | A | test-driven-development | 研发质量智能体 | 让实现型智能体具备测试先行的工程工作流。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/test-driven-development/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/test-driven-development.zip) |
| Foundation Connector | Platform Connectors / Feishu | S | lark-base | 全部智能体 | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-base/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/lark-base.zip) |
| Foundation Connector | Platform Connectors / Feishu | S | lark-sheets | 全部智能体, 财务与投关智能体, 市场情报智能体 | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-sheets/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/lark-sheets.zip) |
| Foundation Connector | Platform Connectors / Feishu | A | lark-calendar | 总办与经营助手智能体, HR 与招聘智能体 | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-calendar/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/lark-calendar.zip) |
| Foundation Connector | Platform Connectors / Feishu | A | lark-doc | 全部智能体, 法务合规智能体, 总办与经营助手智能体 | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-doc/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/lark-doc.zip) |
| Foundation Connector | Platform Connectors / Feishu | A | lark-drive | 全部智能体 | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-drive/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/lark-drive.zip) |
| Foundation Connector | Platform Connectors / Feishu | A | lark-im | 全部智能体 | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-im/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/lark-im.zip) |
| Foundation Connector | Platform Connectors / Feishu | A | lark-minutes | 总办与经营助手智能体, HR 与招聘智能体 | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-minutes/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/lark-minutes.zip) |
| Foundation Connector | Platform Connectors / Feishu | A | lark-openapi-explorer | 研发质量智能体 | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-openapi-explorer/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/lark-openapi-explorer.zip) |
| Foundation Connector | Platform Connectors / Feishu | A | lark-slides | 内容与媒体智能体, 总办与经营助手智能体 | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-slides/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/lark-slides.zip) |
| Foundation Connector | Platform Connectors / Feishu | A | lark-task | 全部智能体 | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-task/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/lark-task.zip) |
| Knowledge Work | Data Analysis | S | Spreadsheet analysis patterns | 财务与投关智能体, 市场情报智能体, 采购与供应链智能体 | 当飞书表格承载数据时，提供更强的数据分析判断。 | [来源](https://github.com/anthropics/skills) |
| Knowledge Work | Document Intelligence | S | Official document workflow skills | 法务合规智能体, 总办与经营助手智能体, HR 与招聘智能体 | 补足飞书文档之上的文档理解和审阅流程。 | [来源](https://github.com/anthropics/skills) |
| Knowledge Work | Business Communication | A | Business writing skills | 总办与经营助手智能体, 法务合规智能体, 市场情报智能体 | 提升面向管理层材料的表达质量。 | [来源](https://github.com/anthropics/skills) |
| Knowledge Work | Document Intelligence | A | Document processing skill index | 法务合规智能体, 财务与投关智能体, 总办与经营助手智能体 | 补足飞书云空间之外的文件理解能力。 | [来源](https://github.com/BehiSecc/awesome-claude-skills) |
| Knowledge Work | Document Intelligence | A | PDF extraction skills | 法务合规智能体, 财务与投关智能体, ESG 与可持续发展智能体 | 适合公告、制度和供应商文件处理。 | [来源](https://github.com/claude-office-skills/skills) |
| Knowledge Work | Executive Office | A | Board and meeting minutes skills | 总办与经营助手智能体, 法务合规智能体 | 提升转写之后的纪要和决策沉淀质量。 | [来源](https://github.com/claude-office-skills/skills) |
| Knowledge Work | Knowledge Management | A | Knowledge-base workflow skills | 总办与经营助手智能体, 产品研究智能体 | 让信息不只停留在聊天记录里，而能沉淀复用。 | [来源](https://github.com/ComposioHQ/awesome-claude-skills) |
| Knowledge Work | Legal / Document | A | Office contract summary skills | 法务合规智能体 | 为法务文档工作提供实用补充。 | [来源](https://github.com/claude-office-skills/skills) |
| Planning | Agent Engineering | A | writing-plans | 总办与经营助手智能体, 研发质量智能体, 产品研究智能体 | 形成可直接交付执行的工程计划和任务说明。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/writing-plans/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/writing-plans.zip) |
| Plugin Authoring | Agent Engineering | A | plugin-creator | 研发质量智能体 | 当技能需要工具、应用或服务时，用于搭建插件包。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/plugin-creator/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/plugin-creator.zip) |
| Quality Review | Security / Code Audit | S | Security code review skills | 安全审计智能体, 研发质量智能体 | 为工程智能体补充专业安全审查能力。 | [来源](https://github.com/trailofbits/skills) |
| Quality Review | Content / Web UI | A | Web design review skills | 内容与媒体智能体, 产品研究智能体 | 提升生成页面的可用性和精致度。 | [来源](https://github.com/vercel-labs/agent-skills) |
| Quality Review | Engineering / Frontend | A | Web performance skills | 研发质量智能体, 产品研究智能体 | 适合优化看板和对外网页工具。 | [来源](https://github.com/vercel-labs/agent-skills) |
| Quality Review | Engineering / QA | A | Web regression testing skill | 研发质量智能体, 内容与媒体智能体 | 适合验证生成的看板和工作台。 | [来源](https://github.com/lackeyjb/playwright-skill) |
| Quality Review | Engineering / QA | A | Frontend verification skills | 研发质量智能体, 内容与媒体智能体 | 减少空白页面、错位和不可用交互。 | [来源](https://github.com/vercel-labs/agent-skills) |
| Quality Review | Security / Governance | A | Threat modeling skills | 安全审计智能体, 研发质量智能体 | 适合智能体接入系统上线前评估。 | [来源](https://github.com/trailofbits/skills) |
| Quality Review | Security / Supply Chain | A | Dependency risk audit skills | 安全审计智能体, 采购与供应链智能体 | 适合软件供应链治理。 | [来源](https://github.com/trailofbits/skills) |
| Quality Review | Security / Testing | A | Fuzzing and test-design skills | 安全审计智能体, 研发质量智能体 | 提升常规 QA 之外的鲁棒性测试。 | [来源](https://github.com/trailofbits/skills) |
| Role Bundle | Executive Office | S | Executive briefing pack | 总办与经营助手智能体 | 面向总办和经营分析类智能体。 | [来源](https://github.com/w95/awesome-claude-corporate-skills) |
| Role Bundle | Legal / Compliance | S | Legal contract review pack | 法务合规智能体 | 直接服务法务智能体技能配置。 | [来源](https://github.com/w95/awesome-claude-corporate-skills) |
| Role Bundle | HR / Recruiting | A | HR recruiting workflow pack | HR 与招聘智能体 | 适合连接会议和文档的 HR 智能体。 | [来源](https://github.com/w95/awesome-claude-corporate-skills) |
| Role Bundle | Legal / Compliance | A | NDA and policy review pack | 法务合规智能体, HR 与招聘智能体 | 补足飞书审批流程前的专业判断。 | [来源](https://github.com/w95/awesome-claude-corporate-skills) |
| Role Bundle | Procurement / Supply Chain | A | Procurement vendor analysis | 采购与供应链智能体 | 在任务流之上补充采购判断。 | [来源](https://github.com/w95/awesome-claude-corporate-skills) |
| Role Bundle | HR / Performance | B | Performance review pack | HR 与招聘智能体, 总办与经营助手智能体 | 扩展 HR 文档和管理流程。 | [来源](https://github.com/w95/awesome-claude-corporate-skills) |
| Skill Authoring | Agent Engineering | A | skill-creator | 研发质量智能体, 总办与经营助手智能体 | 规范新技能的编写、结构和评审方式。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/skill-creator/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/skill-creator.zip) |
| Supplemental Intelligence | Research / Browser Automation | S | Playwright browser automation skill | 市场情报智能体, 产品研究智能体, 研发质量智能体 | 用可编程浏览器流程补足网页调研能力。 | [来源](https://github.com/lackeyjb/playwright-skill) |
| Supplemental Intelligence | Research / Intelligence | S | Research synthesis patterns | 市场情报智能体, 产品研究智能体, 法务合规智能体 | 让信息收集从搜索升级到证据化研判。 | [来源](https://github.com/anthropics/skills) |
| Supplemental Intelligence | Research / Web Intelligence | S | web-access | 市场情报智能体, 法务合规智能体, 产品研究智能体 | 补足飞书之外的网页调研、登录态页面读取和信源采集能力。 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-access/SKILL.md) / [ZIP](https://github.com/newversionparty-cn/BHAP-Agent-Plaza/raw/main/dist/web-access.zip) |
| Supplemental Intelligence | Research / Intelligence | A | Web research skill index | 市场情报智能体, 产品研究智能体 | 在本地网页技能之外扩展更多研究方法。 | [来源](https://github.com/BehiSecc/awesome-claude-skills) |
| Supplemental Intelligence | Market Intelligence | B | Competitive web intelligence | 市场情报智能体, 产品研究智能体 | 把公开网页转成可跟踪情报来源。 | [来源](https://github.com/lackeyjb/playwright-skill) |

## 飞书基础连接器

这些技能继续保留，因为岗位智能体需要读写飞书工作区对象。但它们不是这个技能广场的主要差异化能力。

| 连接器 | 等级 | 保留原因 | 典型智能体 | Raw |
|---|---:|---|---|---|
| lark-base | S | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | 全部智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-base/SKILL.md) |
| lark-sheets | S | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | 全部智能体, 财务与投关智能体, 市场情报智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-sheets/SKILL.md) |
| lark-doc | A | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | 全部智能体, 法务合规智能体, 总办与经营助手智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-doc/SKILL.md) |
| lark-drive | A | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | 全部智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-drive/SKILL.md) |
| lark-im | A | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | 全部智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-im/SKILL.md) |
| lark-calendar | A | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | 总办与经营助手智能体, HR 与招聘智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-calendar/SKILL.md) |
| lark-slides | A | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | 内容与媒体智能体, 总办与经营助手智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-slides/SKILL.md) |
| lark-task | A | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | 全部智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-task/SKILL.md) |
| lark-minutes | A | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | 总办与经营助手智能体, HR 与招聘智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-minutes/SKILL.md) |
| lark-openapi-explorer | A | 作为基础连接器保留，供上层智能体读写飞书工作区对象。 | 研发质量智能体 | [Raw](https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/lark-openapi-explorer/SKILL.md) |

## Agent 可读文件

- 技能 manifest：[manifest/skills.json](manifest/skills.json)
- 岗位智能体包：[manifest/agent_profiles.json](manifest/agent_profiles.json)
- 本地技能目录：[skills/](skills/)
- ZIP 下载目录：[dist/](dist/)

## 安装方式

本仓库已打包技能可以直接下载 Raw：

```bash
curl -L https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-access/SKILL.md -o SKILL.md
```

外部条目请先打开来源仓库，检查许可和内容，再决定是安装、改造，还是仅作为参考链接。本仓库默认不复制外部技能正文。

## 筛选规则

- 只收录公开安全、可复用、入口稳定、执行价值明确的技能。
- 优先收录飞书能力之上的补充能力：判断、综合、生产、验证、专业推理。
- 飞书技能作为基础连接器保留，服务上层岗位智能体。
- 不发布私有智能体、私有用户配置、敏感凭据、本地缓存、备份副本和临时下载内容。
