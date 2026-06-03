# Agent 读取指南

这个文件给使用 BHAP-Agent-Plaza 的 AI agent 读取。不要把 README 表格当完整目录，完整目录以 JSON manifest 为准。

## 读取顺序

1. 识别任务类型；如果任务有岗位，先识别岗位。
2. 有岗位时读取 `manifest/agent_profiles.json`。
3. 读取 `manifest/skills.json`，这是完整 78 条目录。
4. 用确定性规则筛选候选技能。
5. 只加载命中的本地 `SKILL.md`；外部条目只作为来源引用。

## 筛选规则

- 必须满足 `public_safe=true`。
- 优先级按 `tier=S`、`tier=A`、`tier=B`。
- 先匹配 `roles`，再看 `category` 和 `layer`。
- `external_only=true` 只代表外链来源，不代表 `skills/` 里有本地文件。
- `risk_level=medium` 的条目，生产使用前需要人工复核。
- 直接执行优先选本地技能；外部条目用于调研、评估和后续引入。

## 本地技能约定

本地技能应包含：

- `slug`
- `name`
- `entrypoint`
- `raw_url`
- `zip_url`
- `roles`
- `selection_reason`

只有当用户任务命中技能时，才读取对应 `entrypoint`。

## 推荐输出格式

推荐技能时，请输出：

- 命中的岗位 profile slug；
- 选中的技能 slug；
- 每个条目是本地技能还是外部来源；
- 选择理由；
- 是否需要人工复核后才能生产使用。

## 安全边界

只使用公开目录数据。不要把私有智能体、本地用户配置、敏感凭据、缓存目录、备份副本或临时下载内容加入本仓库。
