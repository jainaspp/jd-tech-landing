# Ep.48 rigor BRIEF（Bad Bot · 2026-10-29 ~22:12 HKT）

## Target
- Pack: `/workspace/kol-content/review-queue/2026-10-30-p2/`（同內容在 PR attach／uploads）
- Slug: `perplexity-interview-reschedule` · Ep.48（系列「香港人 AI 一招」）· **禁** kimi-／copilot-interview-reschedule
- Tool: **Perplexity**（https://www.perplexity.ai/）· capture **unsigned**；畫面可見 **Sign In**（側欄／banner／card）
- **HARD BAN**：caption／draft／cta／landing 寫「免登入／Guest／唔使登入／未登入亦可對話」——R4 Critical if claim guest／login-free
- Caption 已寫：畫面可見 Sign In banner；登入要求以當日介面為準
- Hook（陳述句／書面中文）：明早面試突然撞期要請改期，空白稿不知如何下筆 → Perplexity 3 步即出得體改期短訊
- Cover：line1 **Perplexity**｜line2 **改期短訊／即出稿**
- Steps: `#開Perplexity`（Ask anything…）→ `#撳黑箭`（Submit 黑圓白右箭；畫面無字）→ `#撳Copy`（答案下最左 icon）
- Demo：虛構港求職改期；署名「陳小姐」；職位「市場助理」；時段「明天上午 10:30」／「後天同一時間」／「下星期一早上 11:00」——**短訊全文必須入畫**（禁中段裁）
- BUTTONS refined（verbatim；禁改寫）：
  > 您好，不好意思，因突發事情，我未能出席明天上午 10:30 的市場助理現場面試，想問可否改期？我後天同一時間或下星期一早上 11:00 都可以，會盡量配合您方便的安排，麻煩您了，謝謝！  
  > 陳小姐
- reel sha256 **`ae85b289252eb4b42305077bfadcaaea67c569b68d6eb81eaf8ad7e09ffc20a7`**
- **layout_PASS（定B）**：Art「圈心＝掣心 PASS」＋ LAYOUT-SIGNOFF 22:11 ＋ `ZOOM-WAIVER.md`（KOL 定B）
  - tip 29.0／37.6／26.1 ≤40 · ring closes PASS · verify_motion PASS
  - gates VERDICT **FAIL**（cover after／r3 zoom **1.26×**）＋ qa FAIL×11＝**定B 接受**（全文優先；禁為 1.5× 切短訊）
  - R10＝note only；**唔用 zoom 機械 FAIL 否決本則**（已有 GM waiver）；若人眼見短訊中段被裁 → **仍 Critical**
- Landing Sign In 對齊 live：https://jainaspp.github.io/jd-tech-landing/reels/perplexity-interview-reschedule/（#121 scaffold＋#122 Sign In；未接 shortcode）
- CTA on-screen：**每日中午** · 密碼喺網頁 · NEVER 朝早／07:00／留言 1／Collab／HR 意見冒充
- Target Share：**2026-10-30 12:00 HKT** · 本閘 **唔准 Share**
- mid_beat：AUTHORIZED FALLBACK `perplexity_1_typed` Submit heart（p2 tip 超標）
- PIVOT 鏈：Kimi login wall → Copilot Sign-in wall → Perplexity（定B 唔 pivot Mistral）

## Your job
You are one independent rigor seat among three (Kimi K3 / Grok 4.7 / GLM 5.3). Score THIS pack against attached RUBRIC (R1–R9 hard; R10 note only — layout 已由 Art＋排版＋定B waiver 雙／三簽，唔評劃位擋 Share，但短訊中段裁仍 Critical). Watch the reel + frames. Output ONE markdown score file only.

## Hard pass line
PASS only if: mean ≥8 AND R9≥8 AND Critical=0. Else FAIL. Do not water down because Art／排版／定B signed. Ban：假改期結果；留言 1；登入牆當免登入／Guest 主張；短訊缺「明天上午 10:30／後天／下星期一／陳小姐」。

## Deliverable (PR)
Repo **https://github.com/jainaspp/jd-tech-landing**. Add ONLY:
`docs/ep48-rigor/scores/ep48-<your-model-slug>.md`
(e.g. `ep48-kimi-k3.md` / `ep48-grok47.md` / `ep48-glm53.md`)
Also include copies of BRIEF.md + RUBRIC.md under `docs/ep48-rigor/` if missing on branch.
Open **ready-for-review** PR. Do NOT merge. Do NOT touch `reels/` or product pages.

## Format
總評 PASS/FAIL → R1–R9 score/reason/evidence/Critical → Critical list → FAIL fixes or PASS WARN.
Explicitly check: Perplexity＋Sign In 披露（禁免登入主張）；CTA「每日中午」；cover Perplexity＋改期短訊／即出稿；步驟（開 Perplexity／黑箭 Submit／Copy）；畫面＝可貼得體改期短訊（BUTTONS refined 全文；禁中段裁）；示範虛構＋按實際改；唔係求職／HR 意見；密碼喺網頁；landing `/reels/perplexity-interview-reschedule/`；禁 kimi-／copilot- slug。
