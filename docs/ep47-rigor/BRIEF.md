# Ep.47 rigor BRIEF（Bad Bot · 2026-10-28 ~21:48 HKT）

## Target
- Pack: `/workspace/kol-content/review-queue/2026-10-29-p2/`（同內容在 PR attach／uploads）
- Slug: `qwen-school-leave-msg` · Ep.47（系列「香港人 AI 一招」）· **禁** `qwen-policy-plain`
- Tool: **通義千問／千问** at **https://www.qianwen.com/**（capture host；chat.qwen.ai 本則 TLS 不通）
- **Login：** 畫面可見「登录」banner；**禁** caption／片內主張「免登入」「Guest」「唔使登入」「未登入亦可對話」
- Hook（陳述句／書面中文 caption）: 孩子明早發燒要請假，空白稿不知如何下筆 → 通義千問 3 步即出得體班主任請假短訊
- Cover：line1 **通義千問**｜line2 **請假短訊／即出稿**
- Steps: `#開千问`（向千问提问）→ `#撳黑箭`（发送消息；黑圓白上箭；畫面無字）→ `#撳复制`（得體請假短訊）
- Demo：虛構港家庭請假；BUTTONS.md refined reply 逐字（禁假結果）:
  老師您好，小三乙小明聽朝發燒，所以想幫佢請假一日（明天）。等佢好返返學後，如果學校需要，我會補交醫生紙。麻煩老師，謝謝！家長
- reel sha256 **`9261a306e4c4bf317545759a9078008907c49a59db205dd1e8047dba56812b2c`**
- **layout_PASS 已齊**：gates VERDICT PASS · tip 31.1／28.6／31.9 ≤40 · Art「圈心＝掣心 PASS」· LAYOUT-SIGNOFF 21:47 · qa WARN／0 FAIL
- Landing noon-only：https://jainaspp.github.io/jd-tech-landing/reels/qwen-school-leave-msg/（#109；host-fix PR #110 進行中清 Guest；未接 shortcode）
- CTA on-screen：**每日中午** · 密碼喺網頁 · NEVER 朝早／07:00／留言 1／Collab／免登入／Guest
- Target Share：**2026-10-29 12:00 HKT** · 本閘 **唔准 Share**
- mid_beat：fallback `qwen_1_typed` 发送消息掣心（COPY_PASS／短片授權；原 qwen_2_send）
- UI verbatim 簡體（千问／发送消息／复制／登录）＝畫面／BUTTONS 原文；R7 披露即可，唔當 Critical（非引擎亂改）

## Your job
You are one independent rigor seat among three (Kimi K3 / Grok 4.7 / GLM 5.3). Score THIS pack against attached RUBRIC (R1–R9 hard; R10 note only — layout 已由 Art＋排版雙簽，唔評劃位擋 Share). Watch the reel + frames. Output ONE markdown score file only.

## Hard pass line
PASS only if: mean ≥8 AND R9≥8 AND Critical=0. Else FAIL. Do not water down because Art／排版 signed. Ban fake leave-message results／留言 1／Guest／免登入 claims／wrong host as chat.qwen.ai-only.

## Deliverable (PR)
Repo **https://github.com/jainaspp/jd-tech-landing**. Add ONLY:
`docs/ep47-rigor/scores/ep47-<your-model-slug>.md`
(e.g. `ep47-kimi-k3.md` / `ep47-grok47.md` / `ep47-glm53.md`)
Also include copies of BRIEF.md + RUBRIC.md under `docs/ep47-rigor/` if missing on branch.
Open **ready-for-review** PR. Do NOT merge. Do NOT touch `reels/` or product pages.

## Format
總評 PASS/FAIL → R1–R9 score/reason/evidence/Critical → Critical list → FAIL fixes or PASS WARN.
Explicitly check: host＝qianwen.com（非 Guest／免登入主張）；CTA「每日中午」；cover 通義千問＋請假短訊／即出稿；步驟（開千问／发送消息黑箭／复制）；畫面＝可貼得體請假短訊（BUTTONS refined；禁假結果）；示範虛構＋按實際改；唔係學校／請假政策意見；密碼喺網頁（個人檔連結）；landing URL `/reels/qwen-school-leave-msg/` 一致；禁 `qwen-policy-plain`。
