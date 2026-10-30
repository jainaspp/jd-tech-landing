# Ep.49 rigor BRIEF（Bad Bot · 2026-10-30 ~22:40 HKT）

## Target
- Pack: `/workspace/kol-content/review-queue/2026-10-31-p2/`（同內容在 PR attach／uploads）
- Slug: `qwen-weekend-ot-reply` · Ep.49（系列「香港人 AI 一招」）· **禁** mistral-weekend-ot-reply／deepseek-*
- Tool: **通義千問 / Qwen**（https://www.qianwen.com/）· capture **unsigned answer only**；畫面可見 **登录**（側欄／banner「登录可同步历史对话，解锁更多功能」）
- **HARD BAN**：caption／draft／cta／landing 寫「免登入／Guest／唔使登入／未登入亦可對話／免註冊／訪客模式／login-free」——R4 Critical if claim guest／login-free
- Caption 已寫：畫面可見「登录」banner；登入要求以當日介面為準
- Hook（陳述句／書面中文）：老闆臨時 WhatsApp 叫週末加班，空白稿怕得罪人又不想無條件答應 → 通義千問 3 步即出得體商量覆訊
- Cover：line1 **通義千問**｜line2 **加班覆訊／即出稿**
- Steps: `#開千问`（向千问提问）→ `#撳黑箭`（黑圓上箭；畫面無 Send／发送 字）→ `#撳复制`（复制／复制为Markdown）
- Demo：虛構港返工週末加班；署名「阿強」——**覆訊全文必須入畫**（禁中段裁：補休／加班費／星期六上午／阿強）
- BUTTONS Final（verbatim；禁改寫）：
  > 收到，老闆。呢個週末嘅急單我可以配合處理，不過想同你確認下預計要幾多時間，同埋有冇補休或者加班費安排？我可以星期六上午先到公司開工，睇下情況再同你匯報進度。麻煩你俾個指示，我盡快跟進。阿強
- reel sha256 **`14feb1fedc60897d5bba8d371e5e519715f143bf154ab9d1ef6f5c53d5711dd1`**
- **layout_PASS（定B）**：Art「圈心＝掣心 PASS」＋ LAYOUT-SIGNOFF 22:39 ＋ 定B zoom（KOL／Ep.48 先例）
  - tip 27.6／28.9／23.8 ≤40 · ring closes PASS · verify_motion PASS
  - gates VERDICT **FAIL**（cover after／r3 zoom **0.95×**）＋ qa FAIL×10＝**定B 接受**（全文優先；禁為 1.5× 切短訊）
  - R10＝note only；**唔用 zoom 機械 FAIL 否決本則**；若人眼見覆訊中段被裁 → **仍 Critical**
- Landing noon-only live：https://jainaspp.github.io/jd-tech-landing/reels/qwen-weekend-ot-reply/（#128；未接 shortcode；舊 mistral stub redirect）
- CTA on-screen：**每日中午** · 密碼喺網頁 · NEVER 朝早／07:00／留言 1／Collab
- Target Share：**2026-10-31 12:00 HKT** · 本閘 **唔准 Share**
- mid_beat：AUTHORIZED FALLBACK `qwen_1_typed` 黑箭掣心（qwen_2 閘爆；禁發明 发送／Send 標籤）
- PIVOT 鏈：Mistral login wall → DeepSeek sign_in → Qwen PASS

## Your job
You are one independent rigor seat among three (Kimi K3 / Grok 4.7 / GLM 5.3). Score THIS pack against attached RUBRIC (R1–R9 hard; R10 note only — layout 已由 Art＋排版＋定B waiver 雙／三簽，唔評劃位擋 Share，但覆訊中段裁仍 Critical). Watch the reel + frames. Output ONE markdown score file only.

## Hard pass line
PASS only if: mean ≥8 AND R9≥8 AND Critical=0. Else FAIL. Do not water down because Art／排版／定B signed. Ban：假加班覆訊結果；留言 1；登入牆當免登入／Guest 主張；覆訊缺「補休／加班費／星期六上午／阿強」；錯 slug mistral-*.

## Deliverable (PR)
Repo **https://github.com/jainaspp/jd-tech-landing**. Add ONLY:
`docs/ep49-rigor/scores/ep49-<your-model-slug>.md`
(e.g. `ep49-kimi-k3.md` / `ep49-grok47.md` / `ep49-glm53.md`)
Also include copies of BRIEF.md + RUBRIC.md under `docs/ep49-rigor/` if missing on branch.
Open **ready-for-review** PR. Do NOT merge. Do NOT touch `reels/` or product pages.

## Format
總評 PASS/FAIL → R1–R9 score/reason/evidence/Critical → Critical list → FAIL fixes or PASS WARN.
Explicitly check: 通義千問＋登录 披露（禁免登入主張）；CTA「每日中午」；cover 通義千問＋加班覆訊／即出稿；步驟（開千问／黑箭／复制）；畫面＝可貼得體加班覆訊（BUTTONS Final 全文；禁中段裁）；示範虛構＋按實際改；密碼喺網頁；landing `/reels/qwen-weekend-ot-reply/`；禁 mistral-／deepseek- slug。
