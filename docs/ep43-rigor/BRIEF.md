# Ep.43 rigor BRIEF（Bad Bot · 2026-10-24 ~22:10 HKT）

## Target
- Pack: `/workspace/kol-content/review-queue/2026-10-25-p2/`（同內容亦在本 PR attach／uploads）
- Slug: `duckai-health-rumor` · Ep.43（系列「香港人 AI 一招」）
- Tool: **Duck.ai**（https://duck.ai/ · DuckDuckGo · **免登入已實測**）
- Hook: 阿媽 WhatsApp 轉「喝鹽水防流感」秘方 → Duck.ai 一問查清有冇根據並附來源
- Cover：line1 **Duck.ai**｜line2 **秘方有冇根據**
- Steps: `#開Duck.ai` → `#撳Ask`（藍 Ask）→ `#睇結論`（未經證實偏方＋who.int／chp.gov.hk／cdc.gov）
- reel sha256 **`73c0feaca81c360fdbe348cbcd3c9a764490e3711af6595af67b7826bc18bc3d`**
- **layout_PASS 已齊**：gates VERDICT PASS · tip 30.6／38.2／29.2 ≤40 · Art「圈心＝掣心 PASS」· LAYOUT-SIGNOFF 22:09 · qa WARN／0 FAIL · close `[680,268,1200,427]`
- CTA on-screen：**每日中午** · 密碼喺網頁 · NEVER 朝早／07:00／留言 1／Collab
- Target Share：**2026-10-25 12:00 HKT** · 本閘 **唔准 Share**
- 只用 `duckai_*` 圖（perplexity_* 作廢）

## Your job
You are one independent rigor seat among three (Kimi K3 / Grok 4.7 / GLM 5.3). Score THIS pack against attached RUBRIC (R1–R9 hard; R10 note only — layout 已由 Art＋排版雙簽，唔評劃位擋 Share). Watch the reel + frames. Output ONE markdown score file only.

## Hard pass line
PASS only if: mean ≥8 AND R9≥8 AND Critical=0. Else FAIL. Do not water down because Art／排版 signed. Ban fake positive medical result.

## Deliverable (PR)
Repo **https://github.com/jainaspp/jd-tech-landing**. Add ONLY:
`docs/ep43-rigor/scores/ep43-<your-model-slug>.md`
(e.g. `ep43-kimi-k3.md` / `ep43-grok47.md` / `ep43-glm53.md`)
Also include copies of BRIEF.md + RUBRIC.md under `docs/ep43-rigor/` if missing on branch.
Open **ready-for-review** PR. Do NOT merge. Do NOT touch `reels/` or product pages.

## Format
總評 PASS/FAIL → R1–R9 score/reason/evidence/Critical → Critical list → FAIL fixes or PASS WARN.
Explicitly check: Duck.ai 免登入 disclosed；CTA「每日中午」；cover Duck.ai＋秘方有冇根據；步驟（開 Duck.ai／Ask／睇結論）；結論＝冇可靠醫學證據／未經證實偏方（禁假正面）；示範虛構＋唔當醫療建議披露；來源 who／chp／cdc；密碼喺網頁（個人檔連結）.
