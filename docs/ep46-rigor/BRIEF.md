# Ep.46 rigor BRIEF（Bad Bot · 2026-10-27 ~21:55 HKT）

## Target
- Pack: `/workspace/kol-content/review-queue/2026-10-28-p2/`（同內容在 PR attach／uploads）
- Slug: `lumo-rent-hike-reply` · Ep.46（系列「香港人 AI 一招」）· **禁** `lumo-delay-reply`（Ep.42 舊 slug）
- Tool: **Proton Lumo Guest**（https://lumo.proton.me/guest · **免登入／Guest**；可寫免登入）
- Hook（陳述句／書面中文 caption）: 業主 WhatsApp 通知下月加租一成，不知如何回覆 → Lumo Guest 3 步即出得體覆訊
- Cover：line1 **Lumo**｜line2 **加租覆訊／即出稿**
- Steps: `#開Guest`（Ask anything…）→ `#撳Start generating`（紫色圓箭；畫面無字；a11y Start generating）→ `#撳Copy`（得體加租覆訊）
- Demo：虛構港租務加租情景；BUTTONS.md refined reply 逐字（禁假結果／禁法律 aside）
- reel sha256 **`fc6689ca839a15ae1f00636f24d8290db6e5ba22dc75d7151e9618f6ce98c50a`**
- **layout_PASS 已齊**：gates VERDICT PASS · tip 30.3／29.4／31.8 ≤40 · Art「圈心＝掣心 PASS」· LAYOUT-SIGNOFF 21:54 · qa WARN／0 FAIL
- Landing noon-only live：https://jainaspp.github.io/jd-tech-landing/reels/lumo-rent-hike-reply/（#104；未接 shortcode；UI 截圖稍後 PNG wire）
- CTA on-screen：**每日中午** · 密碼喺網頁 · NEVER 朝早／07:00／留言 1／Collab／法律意見冒充
- Target Share：**2026-10-28 12:00 HKT** · 本閘 **唔准 Share**
- mid_beat：draft 曾用 `lumo_2_send`；閘後 fallback `lumo_1_typed` Start generating 掣心（COPY_PASS 授權）

## Your job
You are one independent rigor seat among three (Kimi K3 / Grok 4.7 / GLM 5.3). Score THIS pack against attached RUBRIC (R1–R9 hard; R10 note only — layout 已由 Art＋排版雙簽，唔評劃位擋 Share). Watch the reel + frames. Output ONE markdown score file only.

## Hard pass line
PASS only if: mean ≥8 AND R9≥8 AND Critical=0. Else FAIL. Do not water down because Art／排版 signed. Ban fake rent-reply results／留言 1／legal-advice masquerading as demo.

## Deliverable (PR)
Repo **https://github.com/jainaspp/jd-tech-landing**. Add ONLY:
`docs/ep46-rigor/scores/ep46-<your-model-slug>.md`
(e.g. `ep46-kimi-k3.md` / `ep46-grok47.md` / `ep46-glm53.md`)
Also include copies of BRIEF.md + RUBRIC.md under `docs/ep46-rigor/` if missing on branch.
Open **ready-for-review** PR. Do NOT merge. Do NOT touch `reels/` or product pages.

## Format
總評 PASS/FAIL → R1–R9 score/reason/evidence/Critical → Critical list → FAIL fixes or PASS WARN.
Explicitly check: Proton Lumo Guest；免登入／Guest disclosed；CTA「每日中午」；cover Lumo＋加租覆訊／即出稿；步驟（開 Guest／Start generating／Copy）；畫面＝可貼得體加租覆訊（BUTTONS refined；禁假結果）；示範虛構＋按實際改；唔係法律意見；密碼喺網頁（個人檔連結）；landing URL `/reels/lumo-rent-hike-reply/` 一致；禁 `lumo-delay-reply` slug in caption／CTA.
