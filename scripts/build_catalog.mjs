import fs from "node:fs";

const repo = "newversionparty-cn/BHAP-Agent-Plaza";
const rawBase = `https://raw.githubusercontent.com/${repo}/main`;
const zipBase = `https://github.com/${repo}/raw/main/dist`;
const snapshotDate = "2026-05-31";

const sourceRepos = {
  anthropic: {
    name: "anthropics/skills",
    url: "https://github.com/anthropics/skills",
    stars: 144561,
    license: "NOASSERTION",
    en: "Official Agent Skills patterns for documents, data, creative work, and business communication.",
    zh: "官方 Agent Skills 范式，适合文档、数据、创意和商务沟通能力。"
  },
  vercel: {
    name: "vercel-labs/agent-skills",
    url: "https://github.com/vercel-labs/agent-skills",
    stars: 27356,
    license: "NOASSERTION",
    en: "Official Vercel skills for frontend, React, web UX, deployment, and AI app delivery.",
    zh: "Vercel 官方技能，覆盖前端、React、网页体验、部署和 AI 应用交付。"
  },
  composio: {
    name: "ComposioHQ/awesome-claude-skills",
    url: "https://github.com/ComposioHQ/awesome-claude-skills",
    stars: 62629,
    license: "NOASSERTION",
    en: "High-signal index for SaaS, CRM, project management, communication, and automation skills.",
    zh: "高星技能索引，适合 SaaS、CRM、项目管理、沟通协作和自动化场景。"
  },
  behisecc: {
    name: "BehiSecc/awesome-claude-skills",
    url: "https://github.com/BehiSecc/awesome-claude-skills",
    stars: 9329,
    license: "NOASSERTION",
    en: "Broad Claude Skills index with media, research, file processing, and productivity collections.",
    zh: "覆盖面较广的 Claude Skills 索引，包含媒体、研究、文件处理和效率工具。"
  },
  trailofbits: {
    name: "trailofbits/skills",
    url: "https://github.com/trailofbits/skills",
    stars: 5491,
    license: "NOASSERTION",
    en: "Security research, vulnerability detection, audit workflow, and supply-chain review skills.",
    zh: "安全研究、漏洞检测、审计流程和供应链风险审查技能。"
  },
  corporate: {
    name: "w95/awesome-claude-corporate-skills",
    url: "https://github.com/w95/awesome-claude-corporate-skills",
    stars: 48,
    license: "NOASSERTION",
    en: "Corporate-role skill catalog for legal, finance, HR, procurement, marketing, and operations.",
    zh: "按企业岗位组织的技能目录，覆盖法务、财务、HR、采购、市场和运营。"
  },
  office: {
    name: "claude-office-skills/skills",
    url: "https://github.com/claude-office-skills/skills",
    stars: 178,
    license: "NOASSERTION",
    en: "Practical office skills for contracts, PDF work, HR material, notes, and back-office tasks.",
    zh: "办公技能集合，适合合同、PDF、HR 材料、会议记录和后台办公任务。"
  },
  playwright: {
    name: "lackeyjb/playwright-skill",
    url: "https://github.com/lackeyjb/playwright-skill",
    stars: 2702,
    license: "NOASSERTION",
    en: "Browser automation and web verification skill powered by Playwright.",
    zh: "基于 Playwright 的浏览器自动化和网页验证技能。"
  },
  gentleman: {
    name: "Gentleman-Programming/Gentleman-Skills",
    url: "https://github.com/Gentleman-Programming/Gentleman-Skills",
    stars: 533,
    license: "NOASSERTION",
    en: "Community agent-skill patterns for code work, planning, and tool-use workflows.",
    zh: "社区智能体技能模式，适合代码工作、计划制定和工具调用流程。"
  },
  okSkills: {
    name: "mxyhi/ok-skills",
    url: "https://github.com/mxyhi/ok-skills",
    stars: 391,
    license: "NOASSERTION",
    en: "Cross-agent skill and playbook collection for Codex, Claude Code, Cursor, and OpenClaw.",
    zh: "跨智能体技能和 playbook 集合，覆盖 Codex、Claude Code、Cursor、OpenClaw。"
  },
  onewave: {
    name: "OneWave-AI/claude-skills",
    url: "https://github.com/OneWave-AI/claude-skills",
    stars: 166,
    license: "NOASSERTION",
    en: "Production-oriented business automation, content, sales, and development skill pack.",
    zh: "偏生产可用的业务自动化、内容、销售和研发技能包。"
  },
  subagents: {
    name: "supatest-ai/awesome-claude-code-sub-agents",
    url: "https://github.com/supatest-ai/awesome-claude-code-sub-agents",
    stars: 163,
    license: "NOASSERTION",
    en: "Specialized coding sub-agent collection for QA, review, architecture, and implementation.",
    zh: "专门化代码子智能体集合，适合 QA、评审、架构和实现分工。"
  },
  qt: {
    name: "TheQtCompanyRnD/agent-skills",
    url: "https://github.com/TheQtCompanyRnD/agent-skills",
    stars: 198,
    license: "NOASSERTION",
    en: "Official Qt engineering skills for C++, UI framework, build, and cross-platform code work.",
    zh: "Qt 官方工程技能，适合 C++、UI 框架、构建和跨平台代码工作。"
  },
  mcp: {
    name: "TensorBlock/awesome-mcp-servers",
    url: "https://github.com/TensorBlock/awesome-mcp-servers",
    stars: 711,
    license: "NOASSERTION",
    en: "MCP server index for connecting agents to enterprise tools, data, and APIs.",
    zh: "MCP 服务索引，用于把智能体连接到企业工具、数据和 API。"
  },
  superpowers: {
    name: "obra/superpowers",
    url: "https://github.com/obra/superpowers",
    stars: 213490,
    license: "NOASSERTION",
    en: "Agentic methodology and skill framework for disciplined software delivery.",
    zh: "面向软件交付的智能体方法论和技能框架。"
  }
};

const localOverrides = {
  "web-access": {
    category: "Research / Web Intelligence",
    layer: "Supplemental Intelligence",
    roles: ["market_intelligence_agent", "legal_compliance_agent", "product_research_agent", "executive_office_agent"],
    feishu_overlap: "low",
    selection_reason: "Adds authenticated web research and source collection beyond Feishu workspace primitives.",
    selection_reason_zh: "补足飞书之外的网页调研、登录态页面读取和信源采集能力。"
  },
  "wind-mcp-skill": {
    category: "Finance / Market Data",
    layer: "Domain Data",
    roles: ["finance_ir_agent", "market_intelligence_agent", "executive_office_agent"],
    feishu_overlap: "low",
    selection_reason: "Provides specialized Wind market-data access for finance and strategy agents.",
    selection_reason_zh: "提供万得金融数据能力，适合财务、投关和战略情报智能体。"
  },
  "wind-find-finance-skill": {
    category: "Finance / Market Data",
    layer: "Domain Router",
    roles: ["finance_ir_agent", "market_intelligence_agent"],
    feishu_overlap: "low",
    selection_reason: "Routes financial analysis tasks to the right market-data capability.",
    selection_reason_zh: "把市场分析、板块轮动、个股筛选等任务路由到合适能力。"
  },
  "ppt-master": {
    category: "Content / Presentation",
    layer: "Content Production",
    roles: ["content_media_agent", "executive_office_agent", "market_intelligence_agent"],
    feishu_overlap: "medium",
    selection_reason: "Produces high-density visual decks beyond standard document editing.",
    selection_reason_zh: "用于高质量图文演示稿和培训材料，补足普通文档编辑能力。"
  },
  "hainachuan-ppt": {
    category: "Content / Presentation",
    layer: "Content Production",
    roles: ["content_media_agent", "executive_office_agent", "esg_sustainability_agent", "procurement_supply_chain_agent"],
    feishu_overlap: "medium",
    selection_reason: "Enforces Hainachuan formal PPTX brand, wording, font, WPS compatibility, and package-level QA.",
    selection_reason_zh: "把海纳川正式汇报的字体、Logo、蓝白版式、语言边界、禁用词和 WPS 复核沉淀为可执行 PPTX 质检流程。"
  },
  "guizang-ppt-skill": {
    category: "Content / Presentation",
    layer: "Content Production",
    roles: ["content_media_agent", "executive_office_agent"],
    feishu_overlap: "medium",
    selection_reason: "Creates web-based magazine or Swiss-style decks when the deliverable is a browser-readable presentation.",
    selection_reason_zh: "生成网页式横向翻页演示；如果目标是正式可编辑 PPTX，优先使用 hainachuan-ppt。"
  },
  "systematic-debugging": {
    category: "Engineering / Quality",
    layer: "Engineering Practice",
    roles: ["engineering_quality_agent", "security_audit_agent"],
    feishu_overlap: "low",
    selection_reason: "Gives engineering agents a repeatable root-cause workflow.",
    selection_reason_zh: "为研发智能体提供可复用的根因分析和排错流程。"
  },
  "test-driven-development": {
    category: "Engineering / Quality",
    layer: "Engineering Practice",
    roles: ["engineering_quality_agent"],
    feishu_overlap: "low",
    selection_reason: "Adds test-first development behavior for implementation agents.",
    selection_reason_zh: "让实现型智能体具备测试先行的工程工作流。"
  },
  "subagent-driven-development": {
    category: "Agent Engineering",
    layer: "Agent Orchestration",
    roles: ["engineering_quality_agent", "executive_office_agent"],
    feishu_overlap: "low",
    selection_reason: "Supports decomposing work across specialized agents.",
    selection_reason_zh: "支持把复杂任务拆给多个专门智能体协同完成。"
  },
  "writing-plans": {
    category: "Agent Engineering",
    layer: "Planning",
    roles: ["executive_office_agent", "engineering_quality_agent", "product_research_agent"],
    feishu_overlap: "low",
    selection_reason: "Creates decision-complete implementation plans before execution.",
    selection_reason_zh: "形成可直接交付执行的工程计划和任务说明。"
  },
  "skill-creator": {
    category: "Agent Engineering",
    layer: "Skill Authoring",
    roles: ["engineering_quality_agent", "executive_office_agent"],
    feishu_overlap: "low",
    selection_reason: "Standardizes how new reusable skills are written and reviewed.",
    selection_reason_zh: "规范新技能的编写、结构和评审方式。"
  },
  "plugin-creator": {
    category: "Agent Engineering",
    layer: "Plugin Authoring",
    roles: ["engineering_quality_agent"],
    feishu_overlap: "low",
    selection_reason: "Scaffolds plugin bundles when a skill needs tools, apps, or servers.",
    selection_reason_zh: "当技能需要工具、应用或服务时，用于搭建插件包。"
  },
  "web-prototype": {
    category: "Content / Web UI",
    layer: "Content Production",
    roles: ["content_media_agent", "product_research_agent"],
    feishu_overlap: "medium",
    selection_reason: "Turns ideas into browser-visible interactive prototypes.",
    selection_reason_zh: "把想法转成可浏览、可交互的网页原型。"
  },
  dashboard: {
    category: "Content / Web UI",
    layer: "Content Production",
    roles: ["content_media_agent", "market_intelligence_agent", "executive_office_agent"],
    feishu_overlap: "medium",
    selection_reason: "Creates dense operational dashboards and analysis surfaces.",
    selection_reason_zh: "生成经营看板、分析台和管理驾驶舱界面。"
  },
  "docs-page": {
    category: "Content / Documentation",
    layer: "Content Production",
    roles: ["product_research_agent", "engineering_quality_agent", "legal_compliance_agent"],
    feishu_overlap: "medium",
    selection_reason: "Builds structured documentation pages with navigation and examples.",
    selection_reason_zh: "生成带导航、示例和结构化正文的文档页面。"
  },
  "finance-report": {
    category: "Finance / Reporting",
    layer: "Domain Reporting",
    roles: ["finance_ir_agent", "executive_office_agent"],
    feishu_overlap: "medium",
    selection_reason: "Packages financial results into investor-facing report layouts.",
    selection_reason_zh: "把财务数据整理成投关和管理汇报材料。"
  },
  ccdb: {
    category: "ESG / Carbon",
    layer: "Domain Data",
    roles: ["esg_sustainability_agent", "procurement_supply_chain_agent"],
    feishu_overlap: "low",
    selection_reason: "Adds carbon factor lookup for carbon accounting workflows.",
    selection_reason_zh: "提供碳排放因子查询，支撑碳核算和供应链 ESG 分析。"
  },
  "tnfd-disclosure": {
    category: "ESG / TNFD",
    description_zh: "面向 TNFD 自然相关披露的公开规划、评估、起草和审查技能。",
    layer: "Domain Workflow",
    roles: ["esg_sustainability_agent", "legal_compliance_agent", "executive_office_agent"],
    feishu_overlap: "low",
    selection_reason: "Public TNFD workflow for nature-related disclosure planning and review.",
    selection_reason_zh: "面向 TNFD 自然相关披露的公开工作流和审查能力。"
  }
};

const larkRoleMap = {
  "lark-base": ["all_agents"],
  "lark-sheets": ["all_agents", "finance_ir_agent", "market_intelligence_agent"],
  "lark-doc": ["all_agents", "legal_compliance_agent", "executive_office_agent"],
  "lark-drive": ["all_agents"],
  "lark-im": ["all_agents"],
  "lark-calendar": ["executive_office_agent", "hr_recruiting_agent"],
  "lark-slides": ["content_media_agent", "executive_office_agent"],
  "lark-task": ["all_agents"],
  "lark-minutes": ["executive_office_agent", "hr_recruiting_agent"],
  "lark-openapi-explorer": ["engineering_quality_agent"]
};

const localSeedEntries = [
  {
    slug: "hainachuan-ppt",
    name: "hainachuan-ppt",
    category: "Content / Presentation",
    tier: "S",
    description: "Hainachuan formal PPTX creation, revision, and QA workflow for executive reports with brand chrome, Fangzheng Yaoti font, logo placement, and WPS checks.",
    description_zh: "海纳川正式 PPTX 汇报生成、修订和质检流程，约束方正姚体、Logo、蓝白版式、页眉页脚、禁用词和 WPS 复核。",
    entrypoint: "skills/hainachuan-ppt/SKILL.md",
    raw_url: `${rawBase}/skills/hainachuan-ppt/SKILL.md`,
    zip_url: `${zipBase}/hainachuan-ppt.zip`,
    source_ecosystem: ".codex/skills",
    license_status: "source_review_required",
    public_safe: true,
    type: "local_skill"
  }
];

const externalEntries = [
  ["anthropic-document-workflows", "Official document workflow skills", "Document Intelligence", "S", "anthropic", "Document drafting, editing, review, and transformation patterns for agent workflows.", "文档起草、编辑、审阅和格式转换范式。", ["legal_compliance_agent", "executive_office_agent", "hr_recruiting_agent"], "Knowledge Work", "Adds document reasoning above Feishu Docs.", "补足飞书文档之上的文档理解和审阅流程。"],
  ["anthropic-spreadsheet-analysis", "Spreadsheet analysis patterns", "Data Analysis", "S", "anthropic", "Spreadsheet cleaning, modeling, summary, and chart preparation patterns.", "电子表格清洗、建模、摘要和图表准备范式。", ["finance_ir_agent", "market_intelligence_agent", "procurement_supply_chain_agent"], "Knowledge Work", "Useful when Feishu Sheets stores data but the agent needs analytical judgment.", "当飞书表格承载数据时，提供更强的数据分析判断。"],
  ["anthropic-presentation-workflows", "Presentation workflow skills", "Content / Presentation", "A", "anthropic", "Deck planning, slide structure, narrative, and visual communication patterns.", "演示稿规划、页面结构、叙事和视觉表达范式。", ["content_media_agent", "executive_office_agent"], "Content Production", "Complements local PPT generation with planning and review patterns.", "补足本地 PPT 生成之外的规划和审阅方式。"],
  ["anthropic-data-visualization", "Data visualization patterns", "Data Analysis", "A", "anthropic", "Patterns for turning analysis into readable charts and explanatory visuals.", "把分析结果转成图表和解释性视觉的范式。", ["finance_ir_agent", "market_intelligence_agent", "esg_sustainability_agent"], "Content Production", "Improves chart choices for reports and dashboards.", "提升报告和看板中的图表选择质量。"],
  ["anthropic-business-writing", "Business writing skills", "Business Communication", "A", "anthropic", "Executive memos, concise updates, decision notes, and stakeholder communication.", "高管备忘录、简报、决策说明和利益相关方沟通。", ["executive_office_agent", "legal_compliance_agent", "market_intelligence_agent"], "Knowledge Work", "Adds communication polish for management-facing output.", "提升面向管理层材料的表达质量。"],
  ["anthropic-research-synthesis", "Research synthesis patterns", "Research / Intelligence", "S", "anthropic", "Source review, evidence grouping, synthesis, and briefing patterns.", "信源审阅、证据分组、综合研判和简报范式。", ["market_intelligence_agent", "product_research_agent", "legal_compliance_agent"], "Supplemental Intelligence", "Supports evidence-based research beyond simple search.", "让信息收集从搜索升级到证据化研判。"],
  ["anthropic-creative-production", "Creative production skills", "Content / Media", "A", "anthropic", "Creative ideation, copy, campaign concepts, and brand-safe content production.", "创意构思、文案、营销概念和品牌安全内容生产。", ["content_media_agent", "marketing_agent"], "Content Production", "Supports content teams above basic document drafting.", "支持内容团队进行高质量创意生产。"],
  ["vercel-nextjs-app-router", "Next.js App Router skill set", "Engineering / Web App", "S", "vercel", "Next.js App Router implementation, routing, server components, and deployment guidance.", "Next.js App Router 实现、路由、服务端组件和部署指导。", ["engineering_quality_agent", "product_research_agent"], "Engineering Practice", "Useful for web workbench and internal tools.", "适合搭建 Web 工作台和内部工具。"],
  ["vercel-react-ui-composition", "React UI composition skills", "Engineering / Frontend", "A", "vercel", "React component structure, state, UI quality, and implementation guidance.", "React 组件结构、状态管理、界面质量和实现指导。", ["engineering_quality_agent", "content_media_agent"], "Engineering Practice", "Adds production-grade frontend patterns.", "补充生产级前端实现范式。"],
  ["vercel-web-design-review", "Web design review skills", "Content / Web UI", "A", "vercel", "Design review, layout critique, accessibility, and visual quality checks.", "设计评审、布局审查、可访问性和视觉质量检查。", ["content_media_agent", "product_research_agent"], "Quality Review", "Makes generated pages more usable and polished.", "提升生成页面的可用性和精致度。"],
  ["vercel-deployment-cicd", "Deployment and CI/CD skills", "Engineering / DevOps", "A", "vercel", "Deployment, preview, environment, and CI/CD guidance for web apps.", "Web 应用部署、预览环境和 CI/CD 指导。", ["engineering_quality_agent"], "Engineering Practice", "Connects prototypes to real delivery.", "把原型进一步接到真实交付流程。"],
  ["vercel-web-performance", "Web performance skills", "Engineering / Frontend", "A", "vercel", "Performance investigation, Core Web Vitals, rendering, and loading optimization.", "性能排查、核心网页指标、渲染和加载优化。", ["engineering_quality_agent", "product_research_agent"], "Quality Review", "Useful for web dashboards and customer-facing tools.", "适合优化看板和对外网页工具。"],
  ["vercel-ai-sdk-chat", "AI SDK chat application skills", "Agent Engineering", "A", "vercel", "AI chat UI, streaming behavior, persistence, and agent application patterns.", "AI 对话界面、流式输出、持久化和智能体应用范式。", ["engineering_quality_agent", "executive_office_agent"], "Agent Orchestration", "Relevant for building BHAP agent workbenches.", "适合构建海纳川智能体工作台。"],
  ["vercel-frontend-verification", "Frontend verification skills", "Engineering / QA", "A", "vercel", "Browser-based verification of local web apps and generated UI artifacts.", "本地网页应用和生成界面的浏览器验证。", ["engineering_quality_agent", "content_media_agent"], "Quality Review", "Prevents broken or blank generated experiences.", "减少空白页面、错位和不可用交互。"],
  ["composio-crm-ops", "CRM operations skill index", "Sales / CRM", "A", "composio", "CRM update, lead research, account notes, and follow-up workflow sources.", "CRM 更新、线索调研、客户记录和跟进工作流来源。", ["market_intelligence_agent", "sales_agent"], "Business Automation", "Useful for customer and market operations beyond Feishu.", "适合飞书之外的客户和市场运营协同。"],
  ["composio-sales-pipeline", "Sales pipeline automation", "Sales / CRM", "A", "composio", "Pipeline hygiene, opportunity summary, meeting follow-up, and account planning sources.", "销售管线清理、商机摘要、会后跟进和客户计划来源。", ["sales_agent", "executive_office_agent"], "Business Automation", "Adds revenue-workflow patterns for sales teams.", "为销售团队补充收入流程智能体能力。"],
  ["composio-project-ops", "Project management automation", "Project Operations", "A", "composio", "Jira, Linear, task tracking, roadmap updates, and project reporting sources.", "Jira、Linear、任务跟踪、路线图更新和项目报告来源。", ["product_research_agent", "engineering_quality_agent"], "Business Automation", "Links agent work to delivery management tools.", "把智能体工作接入交付管理工具。"],
  ["composio-knowledge-workflow", "Knowledge-base workflow skills", "Knowledge Management", "A", "composio", "Knowledge capture, page update, research notes, and wiki maintenance sources.", "知识沉淀、页面更新、调研笔记和知识库维护来源。", ["executive_office_agent", "product_research_agent"], "Knowledge Work", "Improves knowledge reuse beyond raw chat history.", "让信息不只停留在聊天记录里，而能沉淀复用。"],
  ["composio-communication-ops", "Communication operations skills", "Business Communication", "B", "composio", "Email, chat, meeting follow-up, and stakeholder-update workflow sources.", "邮件、聊天、会后跟进和干系人更新来源。", ["executive_office_agent", "hr_recruiting_agent", "sales_agent"], "Business Automation", "Useful for cross-tool communication workflows.", "适合跨工具沟通和提醒流程。"],
  ["behi-image-production", "Image production skill index", "Content / Image", "A", "behisecc", "Image generation, image editing, product visuals, poster, and social asset skill sources.", "图片生成、图片编辑、产品视觉、海报和社媒素材来源。", ["content_media_agent", "marketing_agent"], "Content Production", "Adds visual production beyond document and slide editing.", "补足文档和演示之外的视觉生产能力。"],
  ["behi-video-production", "Video production skill index", "Content / Video", "A", "behisecc", "Video concepting, clipping, scripting, storyboard, and repurposing skill sources.", "视频选题、剪辑、脚本、分镜和二次分发技能来源。", ["content_media_agent", "marketing_agent"], "Content Production", "Covers video workflows requested for media agents.", "覆盖内容智能体需要的视频工作流。"],
  ["behi-audio-transcription", "Audio and transcript skills", "Content / Audio", "B", "behisecc", "Audio cleanup, transcript processing, meeting material, and podcast workflow sources.", "音频清理、转写处理、会议素材和播客工作流来源。", ["content_media_agent", "executive_office_agent", "hr_recruiting_agent"], "Content Production", "Useful for meetings, interviews, and training material.", "适合会议、访谈和培训材料处理。"],
  ["behi-social-carousel", "Social media content packs", "Content / Social", "A", "behisecc", "Carousel, short post, campaign asset, and multi-channel content skill sources.", "图文轮播、短帖、营销素材和多渠道内容来源。", ["content_media_agent", "marketing_agent"], "Content Production", "Turns research into publishable communication assets.", "把调研成果转成可发布传播素材。"],
  ["behi-document-processing", "Document processing skill index", "Document Intelligence", "A", "behisecc", "PDF, OCR, structured extraction, summary, and document conversion sources.", "PDF、OCR、结构化提取、摘要和文档转换来源。", ["legal_compliance_agent", "finance_ir_agent", "executive_office_agent"], "Knowledge Work", "Complements Feishu Drive with stronger file understanding.", "补足飞书云空间之外的文件理解能力。"],
  ["behi-web-research-pack", "Web research skill index", "Research / Intelligence", "A", "behisecc", "Open-web collection, comparison, summarization, and source review skill sources.", "开放网页采集、对比、摘要和信源审阅来源。", ["market_intelligence_agent", "product_research_agent"], "Supplemental Intelligence", "Expands beyond one local browsing skill.", "在本地网页技能之外扩展更多研究方法。"],
  ["trailofbits-security-review", "Security code review skills", "Security / Code Audit", "S", "trailofbits", "Security-focused code review, vulnerability reasoning, and audit workflow sources.", "面向安全的代码审查、漏洞推理和审计流程来源。", ["security_audit_agent", "engineering_quality_agent"], "Quality Review", "Adds expert security review to engineering agents.", "为工程智能体补充专业安全审查能力。"],
  ["trailofbits-dependency-audit", "Dependency risk audit skills", "Security / Supply Chain", "A", "trailofbits", "Dependency review, package risk, update review, and supply-chain assessment sources.", "依赖审查、包风险、升级评估和供应链安全来源。", ["security_audit_agent", "procurement_supply_chain_agent"], "Quality Review", "Relevant to software supply-chain governance.", "适合软件供应链治理。"],
  ["trailofbits-fuzzing", "Fuzzing and test-design skills", "Security / Testing", "A", "trailofbits", "Fuzzing strategy, adversarial test design, and bug-discovery workflow sources.", "模糊测试策略、对抗性测试设计和缺陷发现来源。", ["security_audit_agent", "engineering_quality_agent"], "Quality Review", "Improves robustness testing beyond normal QA.", "提升常规 QA 之外的鲁棒性测试。"],
  ["trailofbits-threat-modeling", "Threat modeling skills", "Security / Governance", "A", "trailofbits", "System threat modeling, attack surface review, and mitigation planning sources.", "系统威胁建模、攻击面审查和缓解计划来源。", ["security_audit_agent", "engineering_quality_agent"], "Quality Review", "Useful before deploying agent-connected systems.", "适合智能体接入系统上线前评估。"],
  ["corporate-legal-contract-review", "Legal contract review pack", "Legal / Compliance", "S", "corporate", "Contract review, redline, risk summary, and negotiation-prep sources for legal agents.", "合同审查、修订、风险摘要和谈判准备来源。", ["legal_compliance_agent"], "Role Bundle", "Directly addresses legal-agent skill configuration.", "直接服务法务智能体技能配置。"],
  ["corporate-nda-policy-review", "NDA and policy review pack", "Legal / Compliance", "A", "corporate", "NDA review, policy drafting, compliance checklist, and approval-prep sources.", "NDA 审查、制度起草、合规清单和审批准备来源。", ["legal_compliance_agent", "hr_recruiting_agent"], "Role Bundle", "Good complement to Feishu approval flows.", "补足飞书审批流程前的专业判断。"],
  ["corporate-procurement-vendor", "Procurement vendor analysis", "Procurement / Supply Chain", "A", "corporate", "Vendor comparison, RFP summary, procurement memo, and risk-review sources.", "供应商对比、RFP 摘要、采购备忘录和风险审查来源。", ["procurement_supply_chain_agent"], "Role Bundle", "Adds procurement judgment above task tracking.", "在任务流之上补充采购判断。"],
  ["corporate-hr-recruiting", "HR recruiting workflow pack", "HR / Recruiting", "A", "corporate", "Job descriptions, interview scorecards, candidate summaries, and recruiting ops sources.", "岗位说明、面试评分表、候选人摘要和招聘运营来源。", ["hr_recruiting_agent"], "Role Bundle", "Useful for HR agents connected to meetings and documents.", "适合连接会议和文档的 HR 智能体。"],
  ["corporate-performance-review", "Performance review pack", "HR / Performance", "B", "corporate", "Performance summary, calibration notes, promotion packet, and manager-feedback sources.", "绩效摘要、校准记录、晋升材料和管理者反馈来源。", ["hr_recruiting_agent", "executive_office_agent"], "Role Bundle", "Extends HR document workflows.", "扩展 HR 文档和管理流程。"],
  ["corporate-executive-briefing", "Executive briefing pack", "Executive Office", "S", "corporate", "Board memo, leadership update, decision brief, and cross-functional summary sources.", "董事会材料、领导更新、决策简报和跨部门摘要来源。", ["executive_office_agent"], "Role Bundle", "Targets the chief-of-staff style agent.", "面向总办和经营分析类智能体。"],
  ["office-contract-summary", "Office contract summary skills", "Legal / Document", "A", "office", "Contract summary, clause extraction, obligation table, and review memo sources.", "合同摘要、条款提取、义务表和审查备忘录来源。", ["legal_compliance_agent"], "Knowledge Work", "Practical legal-document support.", "为法务文档工作提供实用补充。"],
  ["office-pdf-extraction", "PDF extraction skills", "Document Intelligence", "A", "office", "PDF reading, extraction, table capture, and structured-summary sources.", "PDF 阅读、提取、表格识别和结构化摘要来源。", ["legal_compliance_agent", "finance_ir_agent", "esg_sustainability_agent"], "Knowledge Work", "Useful for filings, policies, and supplier documents.", "适合公告、制度和供应商文件处理。"],
  ["office-board-minutes", "Board and meeting minutes skills", "Executive Office", "A", "office", "Meeting notes, board minutes, action summary, and decision-log sources.", "会议纪要、董事会记录、行动项摘要和决策台账来源。", ["executive_office_agent", "legal_compliance_agent"], "Knowledge Work", "Improves meeting output quality beyond transcription.", "提升转写之后的纪要和决策沉淀质量。"],
  ["office-invoice-reconciliation", "Invoice reconciliation skills", "Finance / Operations", "B", "office", "Invoice matching, expense review, discrepancy summary, and back-office workflow sources.", "发票匹配、费用审查、差异摘要和后台流程来源。", ["finance_ir_agent", "procurement_supply_chain_agent"], "Business Automation", "Adds finance operations support.", "补充财务运营处理能力。"],
  ["playwright-browser-automation", "Playwright browser automation skill", "Research / Browser Automation", "S", "playwright", "Browser automation for data collection, form workflows, verification, and repetitive web tasks.", "用于数据采集、表单流程、页面验证和重复网页任务的浏览器自动化。", ["market_intelligence_agent", "product_research_agent", "engineering_quality_agent"], "Supplemental Intelligence", "Complements web-access with programmable browser workflows.", "用可编程浏览器流程补足网页调研能力。"],
  ["playwright-web-regression", "Web regression testing skill", "Engineering / QA", "A", "playwright", "Automated web checks, screenshots, interaction flows, and regression verification.", "自动网页检查、截图、交互流程和回归验证。", ["engineering_quality_agent", "content_media_agent"], "Quality Review", "Useful for generated dashboards and workbenches.", "适合验证生成的看板和工作台。"],
  ["playwright-competitive-web-intel", "Competitive web intelligence", "Market Intelligence", "B", "playwright", "Repeatable collection of competitor pages, pricing pages, screenshots, and change checks.", "重复采集竞品页面、价格页、截图和变化检查。", ["market_intelligence_agent", "product_research_agent"], "Supplemental Intelligence", "Turns open web pages into monitored intelligence.", "把公开网页转成可跟踪情报来源。"],
  ["okskills-codex-playbooks", "Cross-agent Codex playbooks", "Agent Engineering", "A", "okSkills", "Reusable playbooks for Codex, Claude Code, Cursor, OpenClaw, and compatible agents.", "适用于 Codex、Claude Code、Cursor、OpenClaw 等智能体的复用 playbook。", ["engineering_quality_agent", "executive_office_agent"], "Agent Orchestration", "Supports cross-agent skill reuse.", "支持跨智能体复用技能和流程。"],
  ["okskills-openclaw-routing", "OpenClaw routing patterns", "Agent Engineering", "A", "okSkills", "Routing and compatibility patterns for OpenClaw and SKILL.md-style agents.", "OpenClaw 与 SKILL.md 风格智能体的路由和兼容范式。", ["engineering_quality_agent"], "Agent Orchestration", "Relevant to local Codex/OpenClaw collaboration.", "适合本机 Codex 与 OpenClaw 协作。"],
  ["gentleman-repo-onboarding", "Repository onboarding skills", "Engineering / Codebase", "A", "gentleman", "Codebase orientation, repo reading, planning, and implementation workflow patterns.", "代码库熟悉、仓库阅读、计划制定和实现流程范式。", ["engineering_quality_agent"], "Engineering Practice", "Improves onboarding for coding agents.", "提升代码智能体接手仓库的效率。"],
  ["subagents-qa-agent", "QA sub-agent collection", "Engineering / QA", "A", "subagents", "Specialized QA, test, and verification sub-agent patterns.", "专门 QA、测试和验证子智能体范式。", ["engineering_quality_agent"], "Agent Orchestration", "Useful for multi-agent implementation review.", "适合多智能体实现后的质量检查。"],
  ["subagents-code-reviewer", "Code-review sub-agent collection", "Engineering / Code Review", "A", "subagents", "Specialized review, architecture, and implementation-support sub-agent patterns.", "专门评审、架构和实现支持子智能体范式。", ["engineering_quality_agent", "security_audit_agent"], "Agent Orchestration", "Helps split review duties across agents.", "帮助把代码评审职责拆给不同智能体。"],
  ["mcp-server-discovery", "MCP server discovery index", "Agent Infrastructure", "A", "mcp", "MCP server discovery for enterprise tools, data connectors, browsers, databases, and APIs.", "企业工具、数据连接器、浏览器、数据库和 API 的 MCP 服务发现。", ["engineering_quality_agent", "executive_office_agent"], "Agent Infrastructure", "Helps agents gain tool access without duplicating skills.", "帮助智能体接入工具，而不是重复写技能。"],
  ["superpowers-agent-methodology", "Agentic delivery methodology", "Agent Engineering", "A", "superpowers", "Disciplined agentic workflows for planning, testing, review, and iterative software delivery.", "面向计划、测试、评审和迭代交付的智能体工作方法。", ["engineering_quality_agent", "executive_office_agent"], "Agent Orchestration", "High-star methodology reference for agent behavior design.", "高星方法论来源，可用于智能体行为设计。"]
];

const agentProfiles = [
  {
    slug: "legal_compliance_agent",
    name: "Legal and Compliance Agent",
    name_zh: "法务合规智能体",
    mission: "Review contracts, policies, filings, approvals, and compliance evidence before they enter workspace execution.",
    mission_zh: "在进入飞书审批和协作流程前，完成合同、制度、公告和合规证据的审查。",
    recommended_local_skills: ["web-access", "lark-doc", "lark-drive", "tnfd-disclosure"],
    recommended_external_sources: ["corporate-legal-contract-review", "corporate-nda-policy-review", "office-contract-summary", "office-pdf-extraction", "anthropic-document-workflows"],
    feishu_base_connectors: ["lark-doc", "lark-drive", "lark-im", "lark-task"],
    operating_notes: "Use Feishu for collaboration and approvals; use supplemental legal skills for risk reasoning, clause extraction, and review memos."
  },
  {
    slug: "market_intelligence_agent",
    name: "Market Intelligence Agent",
    name_zh: "市场情报智能体",
    mission: "Collect external signals, compare competitors, watch market changes, and produce evidence-backed briefings.",
    mission_zh: "采集外部信号、对比竞品、跟踪市场变化，并输出有证据支撑的简报。",
    recommended_local_skills: ["web-access", "wind-mcp-skill", "wind-find-finance-skill", "dashboard"],
    recommended_external_sources: ["anthropic-research-synthesis", "behi-web-research-pack", "playwright-competitive-web-intel", "composio-crm-ops"],
    feishu_base_connectors: ["lark-base", "lark-sheets", "lark-doc", "lark-im"],
    operating_notes: "Use Feishu Base as the intelligence register; use web and market-data skills for source acquisition and judgment."
  },
  {
    slug: "esg_sustainability_agent",
    name: "ESG and Sustainability Agent",
    name_zh: "ESG 与可持续发展智能体",
    mission: "Handle ESG evidence, carbon data, TNFD work, disclosure drafting, and sustainability research.",
    mission_zh: "处理 ESG 证据、碳数据、TNFD 工作、披露起草和可持续发展研究。",
    recommended_local_skills: ["ccdb", "tnfd-disclosure", "web-access", "lark-sheets"],
    recommended_external_sources: ["anthropic-research-synthesis", "anthropic-data-visualization", "office-pdf-extraction", "behi-document-processing"],
    feishu_base_connectors: ["lark-base", "lark-sheets", "lark-doc", "lark-drive"],
    operating_notes: "Use Feishu as the evidence workspace; use domain skills for emissions factors, disclosure logic, and source review."
  },
  {
    slug: "finance_ir_agent",
    name: "Finance and Investor Relations Agent",
    name_zh: "财务与投关智能体",
    mission: "Analyze financial data, market movements, filings, peer updates, and investor-facing reporting.",
    mission_zh: "分析财务数据、市场波动、公告文件、同业动态和投关材料。",
    recommended_local_skills: ["wind-mcp-skill", "wind-find-finance-skill", "finance-report", "lark-sheets"],
    recommended_external_sources: ["anthropic-spreadsheet-analysis", "anthropic-data-visualization", "office-invoice-reconciliation", "office-pdf-extraction"],
    feishu_base_connectors: ["lark-base", "lark-sheets", "lark-doc"],
    operating_notes: "Use market-data skills for external numbers and Feishu Sheets/Base for governed internal tables."
  },
  {
    slug: "hr_recruiting_agent",
    name: "HR and Recruiting Agent",
    name_zh: "HR 与招聘智能体",
    mission: "Prepare job descriptions, interview scorecards, candidate summaries, onboarding material, and meeting notes.",
    mission_zh: "准备岗位说明、面试评分表、候选人摘要、入职材料和会议记录。",
    recommended_local_skills: ["lark-doc", "lark-calendar", "lark-minutes", "lark-task"],
    recommended_external_sources: ["corporate-hr-recruiting", "corporate-performance-review", "anthropic-business-writing", "behi-audio-transcription"],
    feishu_base_connectors: ["lark-calendar", "lark-minutes", "lark-doc", "lark-task"],
    operating_notes: "Use Feishu for scheduling and records; use HR packs for structure, scoring, and management-ready text."
  },
  {
    slug: "procurement_supply_chain_agent",
    name: "Procurement and Supply Chain Agent",
    name_zh: "采购与供应链智能体",
    mission: "Compare suppliers, summarize RFPs, track obligations, assess ESG/supply risks, and prepare procurement memos.",
    mission_zh: "对比供应商、汇总 RFP、跟踪义务、评估 ESG/供应风险并准备采购备忘录。",
    recommended_local_skills: ["web-access", "ccdb", "lark-base", "lark-sheets"],
    recommended_external_sources: ["corporate-procurement-vendor", "trailofbits-dependency-audit", "office-invoice-reconciliation", "mcp-server-discovery"],
    feishu_base_connectors: ["lark-base", "lark-sheets", "lark-doc", "lark-task"],
    operating_notes: "Use Feishu Base as the supplier register; use external packs for comparison logic and risk review."
  },
  {
    slug: "product_research_agent",
    name: "Product Research Agent",
    name_zh: "产品研究智能体",
    mission: "Collect user, competitor, and market inputs, then turn them into specs, prototypes, and opportunity briefs.",
    mission_zh: "采集用户、竞品和市场输入，并转成规格说明、原型和机会简报。",
    recommended_local_skills: ["web-access", "web-prototype", "docs-page", "writing-plans"],
    recommended_external_sources: ["anthropic-research-synthesis", "playwright-competitive-web-intel", "composio-project-ops", "vercel-web-design-review"],
    feishu_base_connectors: ["lark-doc", "lark-base", "lark-task"],
    operating_notes: "Use Feishu for product records; use web/prototype skills for discovery and tangible artifacts."
  },
  {
    slug: "content_media_agent",
    name: "Content and Media Agent",
    name_zh: "内容与媒体智能体",
    mission: "Produce presentations, images, social posts, short-video plans, web pages, and campaign assets.",
    mission_zh: "制作演示稿、图片、社媒内容、短视频方案、网页和营销素材。",
    recommended_local_skills: ["hainachuan-ppt", "ppt-master", "guizang-ppt-skill", "web-prototype", "dashboard"],
    recommended_external_sources: ["behi-image-production", "behi-video-production", "behi-social-carousel", "anthropic-creative-production"],
    feishu_base_connectors: ["lark-doc", "lark-slides", "lark-drive"],
    operating_notes: "Use Feishu for approval and distribution; use media skills for actual creative production."
  },
  {
    slug: "engineering_quality_agent",
    name: "Engineering Quality Agent",
    name_zh: "研发质量智能体",
    mission: "Plan, implement, test, review, and verify software changes with disciplined engineering workflows.",
    mission_zh: "用工程化流程计划、实现、测试、评审和验证软件变更。",
    recommended_local_skills: ["systematic-debugging", "test-driven-development", "subagent-driven-development", "writing-plans"],
    recommended_external_sources: ["vercel-nextjs-app-router", "playwright-web-regression", "gentleman-repo-onboarding", "superpowers-agent-methodology"],
    feishu_base_connectors: ["lark-task", "lark-doc", "lark-openapi-explorer"],
    operating_notes: "Use Feishu for project coordination; use engineering skills for actual code quality and verification."
  },
  {
    slug: "security_audit_agent",
    name: "Security Audit Agent",
    name_zh: "安全审计智能体",
    mission: "Review code, dependencies, delivery pipelines, and system designs before exposure to production use.",
    mission_zh: "在生产使用前审查代码、依赖、交付流水线和系统设计。",
    recommended_local_skills: ["systematic-debugging", "lark-doc", "lark-task"],
    recommended_external_sources: ["trailofbits-security-review", "trailofbits-dependency-audit", "trailofbits-threat-modeling", "trailofbits-fuzzing"],
    feishu_base_connectors: ["lark-doc", "lark-task", "lark-base"],
    operating_notes: "Use Feishu for audit records; use security sources for technical review depth."
  },
  {
    slug: "executive_office_agent",
    name: "Executive Office Agent",
    name_zh: "总办与经营助手智能体",
    mission: "Turn meetings, research, dashboards, financial notes, and cross-functional updates into decision-ready output.",
    mission_zh: "把会议、调研、看板、财务笔记和跨部门更新转成可决策材料。",
    recommended_local_skills: ["web-access", "hainachuan-ppt", "ppt-master", "dashboard", "writing-plans"],
    recommended_external_sources: ["corporate-executive-briefing", "office-board-minutes", "anthropic-business-writing", "superpowers-agent-methodology"],
    feishu_base_connectors: ["lark-minutes", "lark-doc", "lark-calendar", "lark-task"],
    operating_notes: "Use Feishu as the operating shell; use supplemental skills to raise the quality of summaries and decisions."
  }
];

const orgExternalResources = [
  {
    slug: "tnfd-disclosure",
    name: "TNFD-disclosure",
    category: "ESG / TNFD",
    tier: "S",
    description: "Public TNFD-aligned nature-related financial disclosure planning, assessment, drafting, and review skill.",
    description_zh: "面向 TNFD 自然相关披露的公开规划、评估、起草和审查技能。",
    entrypoint: "skills/tnfd-disclosure/EXTERNAL.md",
    raw_url: "https://raw.githubusercontent.com/newversionparty-cn/TNFD-disclosure/main/SKILL.md",
    zip_url: "https://github.com/newversionparty-cn/TNFD-disclosure/archive/refs/heads/main.zip",
    source_ecosystem: "external_repo",
    license_status: "external_repo",
    public_safe: true,
    type: "external_resource",
    layer: "Domain Workflow",
    roles: ["esg_sustainability_agent", "legal_compliance_agent", "executive_office_agent"],
    source_url: "https://github.com/newversionparty-cn/TNFD-disclosure",
    repo_stars: 1,
    install_url: "https://raw.githubusercontent.com/newversionparty-cn/TNFD-disclosure/main/SKILL.md",
    external_only: true,
    feishu_overlap: "low",
    selection_reason: "Public TNFD workflow for nature-related disclosure planning and review.",
    selection_reason_zh: "面向 TNFD 自然相关披露的公开工作流和审查能力。",
    risk_level: "medium"
  }
];

function readLocalSkills() {
  const current = JSON.parse(fs.readFileSync("manifest/skills.json", "utf8"));
  const currentSlugs = new Set(current.map((item) => item.slug));
  const merged = [
    ...current,
    ...localSeedEntries.filter((item) => !currentSlugs.has(item.slug))
  ];

  return merged
    .filter((item) => item.type !== "external_source")
    .map((item) => {
      const override = localOverrides[item.slug] ?? {};
      const isLark = item.slug.startsWith("lark-");
      const rawUrl = item.raw_url || `${rawBase}/skills/${item.slug}/SKILL.md`;
      const zipUrl = item.zip_url || `${zipBase}/${item.slug}.zip`;
      return {
        slug: item.slug,
        name: item.name,
        category: isLark ? "Platform Connectors / Feishu" : override.category || item.category,
        tier: item.tier,
        description: item.description,
        description_zh: override.description_zh || item.description_zh || zhFallback(item.description),
        entrypoint: item.entrypoint,
        raw_url: rawUrl,
        zip_url: zipUrl,
        source_ecosystem: item.source_ecosystem,
        license_status: item.license_status || "local_public_safe",
        public_safe: true,
        type: item.slug === "tnfd-disclosure" ? "external_resource" : "local_skill",
        layer: isLark ? "Foundation Connector" : override.layer || "Supplemental Skill",
        roles: isLark ? (larkRoleMap[item.slug] || ["all_agents"]) : (override.roles || ["all_agents"]),
        source_url: item.slug === "tnfd-disclosure" ? "https://github.com/newversionparty-cn/TNFD-disclosure" : rawUrl,
        repo_stars: item.slug === "tnfd-disclosure" ? 1 : null,
        install_url: rawUrl,
        external_only: item.slug === "tnfd-disclosure",
        feishu_overlap: isLark ? "native_connector" : (override.feishu_overlap || "low"),
        selection_reason: isLark
          ? "Kept as a platform connector so higher-level agents can read and write Feishu workspace objects."
          : override.selection_reason || "Public-safe local capability with clear reuse value.",
        selection_reason_zh: isLark
          ? "作为基础连接器保留，供上层智能体读写飞书工作区对象。"
          : override.selection_reason_zh || "公开安全、可复用的本地能力。",
        risk_level: item.slug === "tnfd-disclosure" ? "medium" : "low"
      };
    });
}

function zhFallback(text) {
  return text;
}

function buildExternalEntries() {
  return externalEntries.map(([slug, name, category, tier, sourceKey, description, description_zh, roles, layer, reason, reason_zh, risk = "medium"]) => {
    const source = sourceRepos[sourceKey];
    return {
      slug,
      name,
      category,
      tier,
      description,
      description_zh,
      entrypoint: null,
      raw_url: source.url,
      zip_url: source.url,
      source_ecosystem: source.name,
      license_status: `link_only; source license ${source.license}`,
      public_safe: true,
      type: "external_source",
      layer,
      roles,
      source_url: source.url,
      repo_stars: source.stars,
      install_url: source.url,
      external_only: true,
      feishu_overlap: "low",
      selection_reason: reason,
      selection_reason_zh: reason_zh,
      risk_level: risk
    };
  });
}

function tierRank(tier) {
  return { S: 0, A: 1, B: 2 }[tier] ?? 9;
}

function roleName(slug, lang) {
  const profile = agentProfiles.find((p) => p.slug === slug);
  if (!profile) return slug === "all_agents" ? (lang === "zh" ? "全部智能体" : "All agents") : slug;
  return lang === "zh" ? profile.name_zh : profile.name;
}

const roleLabels = {
  marketing_agent: { en: "Marketing Agent", zh: "市场营销智能体" },
  sales_agent: { en: "Sales Agent", zh: "销售智能体" },
  customer_success_agent: { en: "Customer Success Agent", zh: "客户成功智能体" }
};

function displayRole(slug, lang) {
  if (roleLabels[slug]) return roleLabels[slug][lang];
  return roleName(slug, lang);
}

function mdTable(rows) {
  return rows.map((row) => `| ${row.map((cell) => String(cell).replaceAll("\n", " ").replaceAll("|", "\\|")).join(" | ")} |`).join("\n");
}

function installCell(item, lang) {
  if (item.external_only && item.slug !== "tnfd-disclosure") {
    return `[${lang === "zh" ? "来源" : "Source"}](${item.source_url})`;
  }
  if (item.slug === "tnfd-disclosure") {
    return `[Raw](${item.raw_url}) / [ZIP](${item.zip_url})`;
  }
  return `[Raw](${item.raw_url}) / [ZIP](${item.zip_url})`;
}

function shortRoles(item, lang) {
  return item.roles.slice(0, 3).map((role) => displayRole(role, lang)).join(", ");
}

function stats(items) {
  return {
    total: items.length,
    local: items.filter((item) => !item.external_only).length,
    external: items.filter((item) => item.external_only).length,
    connectors: items.filter((item) => item.layer === "Foundation Connector").length,
    profiles: agentProfiles.length
  };
}

function sourceRows(lang, limit = 8) {
  const usedSourceKeys = new Set(externalEntries.map((entry) => entry[4]));
  return Object.entries(sourceRepos)
    .filter(([key]) => usedSourceKeys.has(key))
    .map(([, source]) => source)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, limit)
    .map((source) => [
      `[${source.name}](${source.url})`,
      source.stars.toLocaleString("en-US"),
      lang === "zh" ? source.zh : source.en,
      lang === "zh" ? "外链收录，不复制正文" : "Link-only catalog entry"
    ]);
}

function profileRowsCompact(lang) {
  return agentProfiles.map((profile) => [
    lang === "zh" ? profile.name_zh : profile.name,
    `\`${profile.slug}\``,
    lang === "zh" ? profile.mission_zh : profile.mission,
    profile.recommended_local_skills.slice(0, 3).map((slug) => `\`${slug}\``).join(", "),
    profile.recommended_external_sources.slice(0, 3).map((slug) => `\`${slug}\``).join(", ")
  ]);
}

function focusSkillRows(items, lang) {
  const slugs = [
    "web-access",
    "wind-mcp-skill",
    "tnfd-disclosure",
    "hainachuan-ppt",
    "ppt-master",
    "guizang-ppt-skill",
    "systematic-debugging",
    "ccdb",
    "web-prototype",
    "dashboard"
  ];
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return slugs
    .map((slug) => bySlug.get(slug))
    .filter(Boolean)
    .map((item) => [
      item.tier,
      item.name,
      item.category,
      lang === "zh" ? item.selection_reason_zh : item.selection_reason,
      installCell(item, lang)
    ]);
}

function presentationRows(lang) {
  if (lang === "zh") {
    return [
      ["海纳川正式汇报、总裁/总经理材料、WPS 复核", "`hainachuan-ppt`", "可编辑 PPTX；强制方正姚体、Logo、页眉页脚、禁用词检查。"],
      ["高密度图文演示、培训材料、复杂页面视觉", "`ppt-master`", "SVG/PPT 视觉内容，用于把复杂信息转成稳定页面。"],
      ["杂志风/瑞士风网页演示、分享传播材料", "`guizang-ppt-skill`", "单文件 HTML 横向翻页 deck，适合浏览器阅读和传播。"]
    ];
  }
  return [
    ["Hainachuan formal executive PPTX, WPS review, official report decks", "`hainachuan-ppt`", "Editable PPTX with Fangzheng Yaoti, logo, header/footer, banned-term checks."],
    ["Dense visual decks, training material, complex page visuals", "`ppt-master`", "SVG/PPT visual content for stable high-density slide pages."],
    ["Magazine or Swiss-style web presentations and shareable talks", "`guizang-ppt-skill`", "Single-file horizontal HTML deck for browser-readable presentations."]
  ];
}

function connectorSummaryRows(items, lang) {
  const connectorSlugs = ["lark-base", "lark-doc", "lark-sheets", "lark-im", "lark-calendar"];
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return connectorSlugs
    .map((slug) => bySlug.get(slug))
    .filter(Boolean)
    .map((item) => [
      item.name,
      item.tier,
      shortRoles(item, lang),
      `[Raw](${item.raw_url})`
    ]);
}

function fileRows(lang) {
  if (lang === "zh") {
    return [
      ["Agent 入口", "[AGENTS.md](AGENTS.md) / [AGENTS.zh-CN.md](AGENTS.zh-CN.md)", "给智能体看的读取顺序和筛选规则。"],
      ["岗位包", "[manifest/agent_profiles.json](manifest/agent_profiles.json)", "岗位智能体定义、推荐本地技能、推荐外部来源。"],
      ["技能目录", "[manifest/skills.json](manifest/skills.json)", "完整技能数据库，agent 应以它为准。"],
      ["本地技能", "[skills/](skills/)", "仓库内已打包的 `SKILL.md`。"],
      ["ZIP 包", "[dist/](dist/)", "可下载的本地技能压缩包。"]
    ];
  }
  return [
    ["Agent entry", "[AGENTS.md](AGENTS.md) / [AGENTS.zh-CN.md](AGENTS.zh-CN.md)", "Read order and selection rules for agents."],
    ["Role bundles", "[manifest/agent_profiles.json](manifest/agent_profiles.json)", "Agent profiles, local skill picks, and external source picks."],
    ["Skill catalog", "[manifest/skills.json](manifest/skills.json)", "Complete catalog. Agents should treat this as the source of truth."],
    ["Local skills", "[skills/](skills/)", "Packaged `SKILL.md` files stored in this repo."],
    ["ZIP packages", "[dist/](dist/)", "Downloadable local skill archives."]
  ];
}

function layerRows(items, lang) {
  const grouped = new Map();
  for (const item of items.slice().sort((a, b) => tierRank(a.tier) - tierRank(b.tier))) {
    const current = grouped.get(item.layer) || { total: 0, top: [] };
    current.total += 1;
    if (current.top.length < 4) current.top.push(`\`${item.slug}\``);
    grouped.set(item.layer, current);
  }
  return [...grouped.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([layer, value]) => [
      layer,
      value.total,
      value.top.join(", "),
      lang === "zh" ? "完整清单见 manifest" : "See manifest for the full list"
    ]);
}

function renderEnglish(items) {
  const s = stats(items);
  return `# BHAP-Agent-Plaza

[中文版本](README.zh-CN.md)

**BHAP-Agent-Plaza** is the public entry point for the **Hainachuan Agent Skill Library**. It is built for two readers:

- Human users choose a job role, then open the matching profile.
- Agents read JSON manifests first, then load only the skills that match the task.

This README is intentionally short. The full ${s.total}-item catalog lives in [manifest/skills.json](manifest/skills.json), not in a giant Markdown table.

## Fast Path For Agents

1. Read [AGENTS.md](AGENTS.md).
2. If the task names a role, read [manifest/agent_profiles.json](manifest/agent_profiles.json) and match the \`slug\`.
3. Read [manifest/skills.json](manifest/skills.json), then filter by \`public_safe\`, \`roles\`, \`tier\`, \`layer\`, \`risk_level\`, and \`external_only\`.
4. Use local skills from \`skills/<slug>/SKILL.md\`; treat \`external_only=true\` entries as source references, not installed local tools.

## Fast Path For Humans

1. Pick a role from the table below.
2. Use the local skill picks for immediate execution.
3. Use external sources as candidates to review, adapt, or install later.

Feishu/Lark already covers chat, docs, sheets, Base, calendar, meetings, approvals, tasks, and files. This plaza focuses on the layer above that: judgment, research, content production, verification, domain reasoning, and agent orchestration.

## Catalog Snapshot

| Metric | Count |
|---|---:|
| Total catalog entries | ${s.total} |
| Packaged local skills | ${s.local} |
| Link-only external sources | ${s.external} |
| Feishu base connectors | ${s.connectors} |
| Role agent profiles | ${s.profiles} |

## Choose By Role

| Role | Profile slug | Use when | First local skills | First external sources |
|---|---|---|---|---|
${mdTable(profileRowsCompact("en"))}

## Core Local Skills

These are the first packaged skills to inspect. They sit above basic workspace operations.

| Tier | Skill | Category | Why use it | Link |
|---:|---|---|---|---|
${mdTable(focusSkillRows(items, "en"))}

## Presentation Skill Routing

Do not use one slide skill for every presentation task. Route by target artifact.

| Need | Use | Output |
|---|---|---|
${mdTable(presentationRows("en"))}

## Feishu Base Connectors

Keep these as infrastructure for reading and writing workspace objects. Do not treat them as the main value of the plaza.

| Connector | Tier | Typical agents | Raw |
|---|---:|---|---|
${mdTable(connectorSummaryRows(items, "en"))}

## External Source Families

Star counts are a point-in-time signal from ${snapshotDate}. External entries are link-only; review license, content, and operational fit before internal production use.

| Source | Stars | Best for | Inclusion mode |
|---|---:|---|---|
${mdTable(sourceRows("en"))}

## Catalog Layers

| Layer | Entries | Example slugs | Note |
|---|---:|---|---|
${mdTable(layerRows(items, "en"))}

## Files Agents Should Read

| Purpose | File | Use |
|---|---|---|
${mdTable(fileRows("en"))}

## Install A Packaged Skill

\`\`\`bash
curl -L https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-access/SKILL.md -o SKILL.md
\`\`\`

For external entries, open the source repository and review it before reuse. This repository does not copy external skill text by default.
`;
}

function renderChinese(items) {
  const s = stats(items);
  return `# BHAP-Agent-Plaza

[English version](README.md)

**BHAP-Agent-Plaza** 是 **海纳川智能体技能库** 的公开入口。它同时服务两类读者：

- 人类用户：先选岗位，再看这个岗位该配哪些技能。
- Agent：先读 JSON manifest，再按任务筛选技能，不从 README 里猜。

这个 README 会保持短。完整 ${s.total} 条目录在 [manifest/skills.json](manifest/skills.json)，不放在首页大表格里。

## Agent 快速读取

1. 先读 [AGENTS.zh-CN.md](AGENTS.zh-CN.md)。
2. 如果任务有岗位，读 [manifest/agent_profiles.json](manifest/agent_profiles.json)，匹配 \`slug\`。
3. 读 [manifest/skills.json](manifest/skills.json)，按 \`public_safe\`、\`roles\`、\`tier\`、\`layer\`、\`risk_level\`、\`external_only\` 过滤。
4. 本地技能从 \`skills/<slug>/SKILL.md\` 读取；\`external_only=true\` 只代表外部来源，不代表本仓库已经安装。

## 人类快速选择

1. 先在下表选岗位智能体。
2. 本地技能可以直接用 Raw 或 ZIP。
3. 外部来源先审查许可、内容和适配度，再决定是否引入。

飞书已经提供 IM、文档、表格、多维表格、日程、会议、审批、任务和文件。这个仓库重点补飞书之上的能力：专业判断、信息收集、内容生产、结果验证、领域推理和智能体协同。

## 目录快照

| 指标 | 数量 |
|---|---:|
| 技能目录总数 | ${s.total} |
| 本仓库已打包技能 | ${s.local} |
| 外链技能源 | ${s.external} |
| 飞书基础连接器 | ${s.connectors} |
| 岗位智能体配置 | ${s.profiles} |

## 按岗位选择

| 岗位智能体 | Profile slug | 适用任务 | 优先本地技能 | 优先外部来源 |
|---|---|---|---|---|
${mdTable(profileRowsCompact("zh"))}

## 核心本地技能

下面是最值得先看的本地打包技能，它们不是飞书基础能力，而是上层补充能力。

| 等级 | 技能 | 分类 | 为什么用 | 链接 |
|---:|---|---|---|---|
${mdTable(focusSkillRows(items, "zh"))}

## PPT 技能分工

不要把所有演示任务都交给一个技能。先看目标产物，再选技能。

| 需求 | 优先技能 | 产物 |
|---|---|---|
${mdTable(presentationRows("zh"))}

## 飞书基础连接器

这些技能用于读写飞书工作区对象，属于基础设施，不是这个技能广场的主要卖点。

| 连接器 | 等级 | 典型智能体 | Raw |
|---|---:|---|---|
${mdTable(connectorSummaryRows(items, "zh"))}

## 外部技能源

星标数是 ${snapshotDate} 的快照，只作为热度参考。外部条目默认只收录链接，不复制正文；生产使用前要审查许可、内容和运行风险。

| 来源 | Stars | 适合场景 | 收录方式 |
|---|---:|---|---|
${mdTable(sourceRows("zh"))}

## 能力层级

| 层级 | 条目数 | 示例 slug | 说明 |
|---|---:|---|---|
${mdTable(layerRows(items, "zh"))}

## Agent 应该读取的文件

| 用途 | 文件 | 说明 |
|---|---|---|
${mdTable(fileRows("zh"))}

## 安装本地技能

\`\`\`bash
curl -L https://raw.githubusercontent.com/newversionparty-cn/BHAP-Agent-Plaza/main/skills/web-access/SKILL.md -o SKILL.md
\`\`\`

外部条目请先打开来源仓库审查，再决定安装、改造或仅作为参考。本仓库默认不复制外部技能正文。
`;
}

function renderAgentsGuideEnglish(items) {
  const s = stats(items);
  return `# Agent Guide

This file is for AI agents using BHAP-Agent-Plaza. Do not parse README tables as the catalog. Use the JSON manifests.

## Read Order

1. Identify the task type and, if available, the role.
2. Read \`manifest/agent_profiles.json\` when a role is present.
3. Read \`manifest/skills.json\` for the full ${s.total}-entry catalog.
4. Select candidates with deterministic filters.
5. Load only the selected local \`SKILL.md\` files or cite external sources as references.

## Selection Rules

- Require \`public_safe=true\`.
- Prefer \`tier=S\`, then \`tier=A\`, then \`tier=B\`.
- Match \`roles\` first, then \`category\` and \`layer\`.
- Treat \`external_only=true\` as a link-only source. Do not assume files exist under \`skills/\`.
- Treat \`risk_level=medium\` as requiring human review before production reuse.
- Prefer local skills for direct execution and external entries for research or later adoption.

## Local Skill Contract

A local skill should have:

- \`slug\`
- \`name\`
- \`entrypoint\`
- \`raw_url\`
- \`zip_url\`
- \`roles\`
- \`selection_reason\`

Load \`entrypoint\` only after the user task matches the skill.

## Recommended Output

When recommending skills, return:

- selected role profile slug;
- selected skill slugs;
- whether each item is local or external;
- why each skill was selected;
- any human review needed before production use.

## Safety Boundary

Use only public catalog data. Do not add private agents, local user configuration, sensitive credentials, cache folders, backup copies, or temporary downloads to this repository.
`;
}

function renderAgentsGuideChinese(items) {
  const s = stats(items);
  return `# Agent 读取指南

这个文件给使用 BHAP-Agent-Plaza 的 AI agent 读取。不要把 README 表格当完整目录，完整目录以 JSON manifest 为准。

## 读取顺序

1. 识别任务类型；如果任务有岗位，先识别岗位。
2. 有岗位时读取 \`manifest/agent_profiles.json\`。
3. 读取 \`manifest/skills.json\`，这是完整 ${s.total} 条目录。
4. 用确定性规则筛选候选技能。
5. 只加载命中的本地 \`SKILL.md\`；外部条目只作为来源引用。

## 筛选规则

- 必须满足 \`public_safe=true\`。
- 优先级按 \`tier=S\`、\`tier=A\`、\`tier=B\`。
- 先匹配 \`roles\`，再看 \`category\` 和 \`layer\`。
- \`external_only=true\` 只代表外链来源，不代表 \`skills/\` 里有本地文件。
- \`risk_level=medium\` 的条目，生产使用前需要人工复核。
- 直接执行优先选本地技能；外部条目用于调研、评估和后续引入。

## 本地技能约定

本地技能应包含：

- \`slug\`
- \`name\`
- \`entrypoint\`
- \`raw_url\`
- \`zip_url\`
- \`roles\`
- \`selection_reason\`

只有当用户任务命中技能时，才读取对应 \`entrypoint\`。

## 推荐输出格式

推荐技能时，请输出：

- 命中的岗位 profile slug；
- 选中的技能 slug；
- 每个条目是本地技能还是外部来源；
- 选择理由；
- 是否需要人工复核后才能生产使用。

## 安全边界

只使用公开目录数据。不要把私有智能体、本地用户配置、敏感凭据、缓存目录、备份副本或临时下载内容加入本仓库。
`;
}

const localSkills = readLocalSkills();
const localSkillSlugs = new Set(localSkills.map((item) => item.slug));
const allSkills = [
  ...localSkills,
  ...orgExternalResources.filter((item) => !localSkillSlugs.has(item.slug)),
  ...buildExternalEntries()
];

fs.writeFileSync("manifest/skills.json", `${JSON.stringify(allSkills, null, 2)}\n`);
fs.writeFileSync("manifest/agent_profiles.json", `${JSON.stringify(agentProfiles, null, 2)}\n`);
fs.writeFileSync("README.md", renderEnglish(allSkills));
fs.writeFileSync("README.zh-CN.md", renderChinese(allSkills));
fs.writeFileSync("AGENTS.md", renderAgentsGuideEnglish(allSkills));
fs.writeFileSync("AGENTS.zh-CN.md", renderAgentsGuideChinese(allSkills));

console.log(`Generated ${allSkills.length} skills and ${agentProfiles.length} agent profiles.`);
