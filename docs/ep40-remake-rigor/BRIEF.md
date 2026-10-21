# Ep.40 remake rigor BRIEF（Bad Bot · 2026-10-21 ~14:15 HKT）

## Target
- Pack: `/workspace/kol-content/review-queue/2026-10-19-p2/`
- Slug: `brave-leo-parent-meeting` · Ep.40 remake（舊帖已刪；重發）
- Tool: Brave Ask · https://search.brave.com · 免帳戶
- Hook: 仔女班家長會要講五分鐘 → Brave Ask 一句出五點講稿
- Cover: Brave Ask｜家長會／五點稿 · chips JD TECH · Ep.40 · BRAVE ASK
- Steps: 開 Ask → 撳 Ask（送出）→ 睇五點稿
- reel sha256 `636910ef8d4611c292d316208aba784a1c0ec2b16f71107d856fea2569042f67` · ~9.0s
- **layout_PASS 已齊**：gates VERDICT PASS · ring_on_target／tip≤40 全 PASS · Art「圈心＝掣心 PASS」· LAYOUT-SIGNOFF 排版已簽 · qa WARN／0 FAIL（Brave 橙系統性；v1.4 准）
- Landing 頁仍在；舊 IG shortcode 已刪；Share 後再 wire
- CTA: 密碼喺網頁（個人檔連結）· 每日中午 · NEVER 留言 1／朝早／Collab

## Your job
Score THIS remake against RUBRIC (R0 if in origin-request, then R1–R9；R10 可記但不取代機械 layout_PASS). Output ONE markdown score file only.

## Hard pass line
PASS only if: mean ≥8 AND R9≥8 AND Critical=0. Else FAIL（退回整則重做）. Do not water down because Art／排版 signed.

## Deliverable (PR)
Repo jd-tech-landing. Add ONLY:
`docs/ep40-remake-rigor/scores/ep40-r9-<your-model-slug>.md`
(e.g. ep40-r9-kimi-k3.md / ep40-r9-grok47.md / ep40-r9-glm53.md)
Open ready-for-review PR. Do NOT merge. Do NOT touch reels/ or product pages.

## Format
Match Ep.42 score style: R0 table → 總評 PASS/FAIL → R1–R9 each with score/reason/evidence/Critical → Critical list → FAIL fixes or PASS WARN.
