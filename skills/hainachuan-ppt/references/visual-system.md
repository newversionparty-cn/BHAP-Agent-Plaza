# 海纳川 PPT 视觉系统

## Canvas And Chrome

- Use 16:9 widescreen: `13.333 x 7.5 in`.
- Header line: thin gray-blue separator at approximately `y=0.63 in`.
- Header title: left aligned around `x=0.38 in`, `y=0.17 in`, width around `9.1 in`, size around `19 pt`, bold.
- Logo: use `assets/hainachuan-logo.png`; place at top-right around `x=10.25 in`, `y=0.10 in`, width around `2.48 in`.
- Footer: bottom-left, small gray project/company label around `x=0.38 in`, `y=7.08 in`, size `7 pt`.
- Page number: bottom-right around `x=12.62 in`, `y=7.03 in`, size `8.5 pt`.

## Font

- Set all editable text declarations to `方正姚体`.
- If the local system or WPS reports missing font, still keep the PPTX typeface as `方正姚体` unless the user approves a fallback.
- Avoid mixing `Microsoft YaHei`, `微软雅黑`, `Arial`, or default Office fonts in final editable text.

## Colors

Use a restrained blue-white palette:

- Main navy: `#004098`
- Deep blue: `#003D96`
- Mid blue: `#004B7B`
- Pale blue line/fill: `#D6E4EF`
- Light wash: `#F7FAFC`
- Ink: `#17202A`
- Muted gray: `#667085`
- Risk red only for red-line procurement clauses, and only in small amounts.

Avoid large areas of orange, purple, neon blue, beige, brown, or dark tech-dashboard backgrounds.

## Cover Pattern

- White background.
- Top-right logo and top separator line.
- Central horizontal navy band around `y=2.06 in`, height around `1.48 in`.
- Main title centered on the band, `方正姚体`, white, around `27 pt`.
- Subtitle and metadata below the band, centered and modest.

## Slide Layout Patterns

- **Three-column matrix**: use for problem / impact / opportunity or responsibility splits.
- **Layered architecture**: use for总部侧 / 成员企业侧 / 供应商 or device / local processing / headquarters receiving layers.
- **Process loop**: use for collection, cleaning, confirmation, upload, feedback, retransmission.
- **Rollout path**: use small `01/02/03` rectangular stage tags, not large circles.
- **Image plus conclusions**: if using a generated image, make it large enough to read and keep formal conclusions in editable text boxes.

## Visual Anti-Patterns

- Do not use default Office SmartArt visual styles.
- Do not place cards inside cards.
- Do not use heavy shadows, thick borders, bokeh/orb decorations, or gradient hero backgrounds.
- Do not overlay text on busy generated images.
- Do not leave old master placeholders, dashed selection-like frames, or gray residual objects.
- Do not shrink a full architecture image into a small thumbnail and expect its text to be readable.
