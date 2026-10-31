# Ep.50 rigor BRIEF（Bad Bot · 2026-10-31 ~22:15 HKT）

## Target
- Pack: `/workspace/kol-content/review-queue/2026-11-01-p2/`（同內容在 PR attach／uploads）
- Slug: `grok-order-delay-chase` · Ep.50（系列「香港人 AI 一招」）· **禁** mistral-order-delay-chase／kimi-*／perplexity-*
- Tool: **Grok**（https://grok.com/）· capture **signed-in PP O**；**免登入=false**
- **HARD BAN**：caption／draft／cta／landing 寫「免登入／Guest／唔使登入／未登入亦可對話／免註冊／訪客模式／login-free」——R4 Critical if claim guest／login-free
- Caption 已寫：本則為已登入示範；登入要求以當日介面為準
- Hook（陳述句／書面中文）：網購顯示延誤未出貨，空白稿怕語氣過硬又不想再等 → Grok 3 步即出得體追件短訊
- Cover：line1 **Grok**｜line2 **追件短訊／即出稿**
- Steps: `#開Grok`（Ask Grok anything）→ `#撳藍箭`（Submit 藍圓白上箭；畫面無 Send 字）→ `#撳Copy`（Copy response）
- Demo：虛構港網購追件；署名「阿強」——**短訊全文必須入畫**（禁中段裁：客服你好／延誤／未見出貨／訂單號／阿強）
- BUTTONS Final（verbatim；禁改寫）：
  > 客服你好，關於我的訂單，系統顯示已出現延誤，而家仍然未見出貨。想禮貌查詢一下最新嘅處理進度，麻煩回覆預計出貨時間或者送達日期，方便我安排。多謝！訂單號：________阿強
- reel sha256 **`e90cb63e733ac672197fbc1293eb1d4371878bcc7afb43dd51b581cbb9ba771a`**
- **layout_PASS（定B）**：Art「圈心＝掣心 PASS」＋ LAYOUT-SIGNOFF 22:14 ＋ `ZOOM-WAIVER.md`
  - tip 27.0／28.7／24.0 ≤40 · ring closes PASS · verify_motion PASS
  - gates VERDICT **FAIL**（cover after／r3 zoom **1.08×**）＋ qa FAIL×10＝**定B 接受**（全文優先；禁為 1.5× 切短訊）
  - R10＝note only；**唔用 zoom 機械 FAIL 否決本則**；若人眼見短訊中段被裁 → **仍 Critical**
- Landing noon-only live：https://jainaspp.github.io/jd-tech-landing/reels/grok-order-delay-chase/（#135；未接 shortcode；舊 mistral stub redirect）
- CTA on-screen：**每日中午** · 密碼喺網頁 · NEVER 朝早／07:00／留言 1／Collab
- Target Share：**2026-11-01 12:00 HKT** · 本閘 **唔准 Share**
- mid_beat：AUTHORIZED FALLBACK `grok_1_typed` Submit 掣心（grok_2 閘爆；禁發明 Send 標籤）
- PIVOT 鏈：Mistral／Kimi／Perplexity login walls → Grok PASS（signed-in）

## Your job
You are one independent rigor seat among three (Kimi K3 / Grok 4.7 / GLM 5.2). Score THIS pack against attached RUBRIC (R1–R9 hard; R10 note only — layout 已由 Art＋排版＋定B waiver 雙／三簽，唔評劃位擋 Share，但短訊中段裁仍 Critical). Watch the reel + frames. Output ONE markdown score file only.

## Hard pass line
PASS only if: mean ≥8 AND R9≥8 AND Critical=0. Else FAIL. Do not water down because Art／排版／定B signed. Ban：假追件結果；留言 1；登入牆當免登入／Guest 主張；短訊缺「客服你好／延誤／未見出貨／訂單號／阿強」；錯 slug mistral-*.

## Deliverable (PR)
Repo **https://github.com/jainaspp/jd-tech-landing**. Add ONLY:
`docs/ep50-rigor/scores/ep50-<your-model-slug>.md`
(e.g. `ep50-kimi-k3.md` / `ep50-grok47.md` / `ep50-glm52.md`)
Also include copies of BRIEF.md + RUBRIC.md + ZOOM-WAIVER.md under `docs/ep50-rigor/` if missing on branch.
Open **ready-for-review** PR. Do NOT merge. Do NOT touch `reels/` or product pages.

## Format
總評 PASS/FAIL → R1–R9 score/reason/evidence/Critical → Critical list → FAIL fixes or PASS WARN.
Explicitly check: Grok＋已登入示範披露（禁免登入主張）；CTA「每日中午」；cover Grok＋追件短訊／即出稿；步驟（開 Grok／藍箭 Submit／Copy）；畫面＝可貼得體追件短訊（BUTTONS Final 全文；禁中段裁）；示範虛構＋按實際改；唔係消費法意見；密碼喺網頁；landing `/reels/grok-order-delay-chase/`；禁 mistral-／kimi-／perplexity- slug。
