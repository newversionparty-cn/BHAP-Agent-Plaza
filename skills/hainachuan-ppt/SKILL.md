---
name: hainachuan-ppt
description: Create, revise, or QA Beijing Hainachuan Automotive Parts formal PowerPoint decks (.pptx), especially 海纳川 internal executive reports, 总裁/总经理汇报, EHS, 双碳, 能源管理, EMS, supplier-facing materials, and template-following decks. Use when the user asks for 海纳川 PPT, 海纳川模板, 方正姚体, WPS 检查, Logo placement, blue-white formal report style, or asks to package or enforce 海纳川 presentation constraints.
---

# 海纳川 PPT

Build formal Hainachuan PPTX decks with stable brand chrome, sober management language, and WPS-compatible rendering. Prefer editable PowerPoint shapes and text over screenshot-only pages.

## Default Workflow

1. Use the `Presentations` skill/plugin for PPTX creation or editing.
2. If a source Hainachuan deck is provided, treat it as `template-following`: preserve its chrome, spacing, header/footer, and logo behavior unless the user explicitly asks to restyle.
3. If creating from blank, apply the brand defaults in [visual-system.md](references/visual-system.md).
4. Use `assets/hainachuan-logo.png` for the top-right logo unless the user provides a newer official template or logo.
5. For executive or management-facing content, apply [writing-style.md](references/writing-style.md).
6. Before handoff, run `scripts/check_hainachuan_pptx.py <deck.pptx>` and open in WPS when available.

## Non-Negotiable Defaults

- Font: set all editable Chinese text declarations to `方正姚体`.
- Canvas: 16:9 widescreen, normally 13.333 x 7.5 inches.
- Palette: restrained Hainachuan blue/white system. Avoid colorful SaaS/dashboard palettes.
- Logo: top-right, small but visible, aligned to the header line.
- Footer: quiet company/project label at bottom-left, page number at bottom-right.
- Language: formal, concise, management-oriented. Avoid internet-style slogans.
- Banned wording: do not write `集团` or `集团级` unless the user explicitly says that wording is legally correct for the specific deck.

## Visual Rules

- Put one claim and one main proof object on each slide.
- Use custom editable shapes for process, layered architecture, responsibility matrix, and rollout path diagrams.
- Do not use Office default SmartArt styles, heavy shadows, decorative oversized circles, gradient blobs, or icon clutter.
- Do not let a busy generated image carry critical labels. Put formal labels in PPT text boxes.
- If an image becomes unreadable when shrunk, enlarge it as the main proof object or crop it; do not leave a dense thumbnail beside another complex diagram.
- Use small rectangular stage tags such as `01`, `02`, `03` for timelines. Avoid large circle numbers with shadows.

## Responsibility And Boundary Language

For Hainachuan energy/double-carbon decks, use this responsibility frame unless the user overrides it:

- 海纳川总部侧: provide standards, interfaces, templates, review support, controlled computing quota guidance, and Agent setup guidance.
- 成员企业侧: own local construction, operations, data quality, monthly confirmation, and supplier management.
- Supplier side: provide hardware, protocol openness, modular software boundaries, export/API capability, and maintainable deliverables.
- Headquarters should receive monthly standard data, not raw high-frequency MQTT meter data.

## QA Checklist

Run the bundled checker:

```bash
python3 /Users/tommy-jr/.codex/skills/hainachuan-ppt/scripts/check_hainachuan_pptx.py <deck.pptx>
```

Then inspect in WPS:

- Confirm all visible text uses `方正姚体` or WPS does not show an unresolved font problem.
- Check title, logo, header line, footer, and page number are consistent.
- Check slide thumbnails for overlap, old cached pages, residual placeholders, and unreadable images.
- If WPS caches an old same-name deck, open a timestamped copy for visual QA.

## Resources

- `assets/hainachuan-logo.png`: Hainachuan logo used for PPT chrome.
- `references/visual-system.md`: precise colors, positions, and layout grammar.
- `references/writing-style.md`: management wording and taboo terms.
- `scripts/check_hainachuan_pptx.py`: package-level PPTX validator for font declarations, banned wording, and ZIP integrity.
