# Ep.42 remake rigor · Grok 4.7

- **Model:** Grok 4.7
- **Time:** 2026-10-21 22:10 HKT
- **This file is one vote.** Overall Share still needs a majority PASS across Grok 4.7, Kimi K3, and GLM 5.3.
- **Scored pack only:** reel sha256 `46f1d8854a72b7cad336cf7fad68e0d95b7a2275ca00ab9ac4aa5fde882b62a2`. 附件 `reel.mp4` 對得上呢個 sha（9.000s、1080×1920、30fps、270 幀）。
- **Caption sha256:** `31aa843810e6703bab8cd75b67c0774dd807243fea5644aca5f20708181a4fec`
- **Art APPROVED 唔當加分。** `layout_PASS` 已簽，R10 唔再審、唔入均分。tip 只記 **29.4／37.0／38.0**。
- **Path:** `docs/ep42-remake-rigor/scores/ep42-grok47.md`。未改 `reels/` 或產品頁。

## 總評：**PASS**

R1–R9 均分 **8.33**（75/9）。R9＝8。Critical＝0。硬線係均分 ≥8 且 R9≥8 且 Critical＝0。本票 PASS。未代發。Share 目標 2026-10-24 12:00，本閘不准 Share。

## 硬核核對

| 項 | 成品 | 判定 |
|---|---|---|
| Guest 免登入 | Caption「開 lumo.proton.me Guest（免登入）」同「Guest 免登入可用」。字卡寫「開Guest」，大字冇「免登入」三字。1.50s／2.30s 係 composer 同已貼提示，冇登入牆擋住。 | 已披露。無 Critical |
| CTA | 7.50s 字卡右側 OCR 讀到「每日中午」。大字「追蹤 JD／少啲試錯」，側欄「粵語 AI 3 步」。Caption 末句「每日中午粵語 AI 3 步」。成片抽幀、caption、本集頁搜唔到「朝早」「07:00」「留言 1」、Collab。 | 片上係每日中午。無 Critical |
| 封面 | 0.00s 字卡係「Lumo」加「延遲交貨覆訊即出」。「之後」已有星河貿易覆訊。 | 大字在。證明句見 R3。無 Critical |
| 步驟 | 1.50s「開Guest／Ask anything…」。3.50s「撳紫箭咀／Start generating」，4.30s 紫圓箭面無字。5.50s「撳Copy／抄覆訊」，6.30s 掣上係 Copy。 | 三步對得上。無 Critical |
| 虛構 | Caption「示範覆訊純屬虛構（星河貿易／陳先生）」。2.30s 提示讀到「星河貿易」（虛構）。頁文同一句。 | 已披露。無 Critical |
| R10 | LAYOUT-SIGNOFF 22:01 ＋ Art「圈心＝掣心 PASS」。tip 29.4／37.0／38.0 ≤40。qa WARN、0 FAIL。 | 記一筆。唔再審、唔入均分 |

## R1 · 事實嚴謹：**9**／10

**Critical：** 無

公開事實對得上來源。Guest 入口 `https://lumo.proton.me/guest` 今日 HTTP 200。Proton 產品頁、getting started、lumo privacy 今日都係 HTTP 200。掣名：空白見「Ask anything…」；貼字後先有無字紫圓箭，字卡同頁寫無障礙名稱 Start generating；回覆動作係 Copy。覆訊同 `lumo_3_after.png` 一致：陳先生、星河貿易、延遲約 3 個工作天、本週五前、請回覆收貨時段，尾段另問聯絡電話。公司同客人名標明虛構。冇寫免費無限，冇寫官方支援香港，冇教 VPN。

扣 1 分：`index.html` 第 163 行 alt 話空白圖「右下角紫色圓箭」。`lumo_0_before.png` 中間係 Ask anything…、Tools、麥克風、Lumo 2.0 Max，紫像素掃描係 0。紫箭喺 `lumo_1_typed.png`。第 164 行 figcaption 冇再講錯。

證據：`lumo_0_before.png`、`lumo_1_typed.png`、`lumo_3_after.png`、`lumo_4_copy.png`；`index.html` 第 143、163、171、176、188、200、223 行。2026-10-21 再探上述 Proton URL 同落地頁都係 HTTP 200。今日冇重開一次 Guest 對話；免登入依據係當日截圖、頁上 2026-10-20 對官方 guest access 嘅引述，同 caption。

## R2 · 示範一致：**8**／10

**Critical：** 無

三步同 caption 同字卡對得上，掣名 verbatim。1.50s 開 Guest：How can I help? 下面係貼好嘅延遲交貨提示。2.30s 讀到本週五前同「星河貿易」（虛構）。封面「之前」先至係 Ask anything…。3.50–4.30s 撳紫箭：圓箭喺格入面，掣面無字，字卡先寫 Start generating。5.50s 讀到覆訊尾「收貨時段」「歡迎隨時聯絡我們」同「需要加入聯絡電話或查詢窗口嗎？」，隔離係 Copy。6.30s 特寫掣面係 Copy。

扣 2 分：成片回覆格始終讀唔到「約 3 個工作天」同「本週五前完成發貨」。呢兩句只喺提示，同 `lumo_3_after.png`。5.50s 闊鏡係覆訊尾加 Copy，6.30s 特寫淨係 Copy 同 Conversation encrypted。Caption 講「睇得體延遲交貨短訊，撳 Copy」，短訊正文冇一格出齊。

證據：reel 1.50s／2.30s、3.50s／4.30s、5.50s／6.30s；附件 `r1c`、`r2c`、`r3c`；`lumo_1_typed.png`、`lumo_3_after.png`、`lumo_4_copy.png`。`lumo_2_send.png` 頁面冇引用，live 404，同 draft「stub 唔用」一致。第 2 步圖係同一張 `lumo_1_typed.png`，figcaption 有講。

## R3 · 封面誠實：**7**／10

**Critical：** 無

0.00s 大字係「Lumo／延遲交貨覆訊即出」。同格「之後」已有客服覆訊：星河貿易、訂單、物流安排、致歉、收貨時段。結果類型在，唔係掛另一個工具或者另一個結果。

扣 3 分：高亮句被裁成「……物流安排關係，發」下一行「前完成發貨。」安全區 OCR 冇命中「工作天」或「週五」。`lumo_3_after.png` 原文係「發貨時間會延遲約3個工作天。我們已加緊處理，預計於本週五前完成發貨。」封面同 7.50s CTA 都用同一張切爛嘅「之後」。大字冇講錯，所以唔升 Critical；光睇高亮會讀錯貨期。

證據：reel 0.00s／0.80s 白卡 OCR；附件 `cover`；`lumo_3_after.png` 覆訊首段；reel 7.50s 同一張「之後」。

## R4 · 工具／產品準確：**9**／10

**Critical：** 無

工具係 Proton Lumo Guest，入口 `https://lumo.proton.me/guest`，唔係登入牆當免登入。畫面有 Lumo、Lumo 2.0 Max、開 Guest。送出係紫色圓箭；caption 寫「撳紫色圓箭（Start generating；畫面無字）」，同 4.30s 掣面一致。Copy 係回覆動作，同 `lumo_4_copy.png`、6.30s 一致。

扣 1 分：字卡把 Start generating 印喺步驟副題，掣面始終冇呢串字。Caption 已經講畫面無字，所以唔當錯名。空白圖 alt 先至把紫箭安錯畫面（扣分已計喺 R1）。

證據：caption #開Guest／#撳Start generating／#撳Copy；`index.html` 第 142–143、176、200 行；reel 1.50s／4.30s／6.30s；`lumo_1_typed.png` 紫箭、`lumo_4_copy.png`。

## R5 · 文案嚴謹：**9**／10

**Critical：** 無

Caption 三步、掣名、畫面無字、虛構星河貿易／陳先生、關窗會清、AI 要自己核對，都齊。冇「留言 1」，冇朝早，冇 Collab，冇叫人轉發。密碼句係「密碼喺網頁（個人檔連結）」。本集頁尾同 `/workflow/` 都寫住 jdtech3，兩邊今日 HTTP 200。CTA 係「收埋呢則」同「追蹤 JD／少啲試錯／每日中午」。逐步截圖有四張真 PNG；`lumo_2_send.png` 404 而且頁面冇引用。

扣 1 分：caption 叫人抄「得體延遲交貨短訊」，冇提 5.50s 同一格尾段「需要加入聯絡電話或查詢窗口嗎？」唔好抄。頁第 189、213 行有寫。中段「想留低慢慢跟？收埋呢則先。」同步驟無關，但唔係空承諾。

證據：附件 caption；`index.html` 第 147、188–189、213、222、234、260 行；live 頁同 `/workflow/` HTTP 200。

## R6 · 結構節奏：**8**／10

**Critical：** 無

9.000s、1080×1920、30fps、270 幀。0s 已經係結果卡。0.00→0.80s 封面有動（平均差 1.74），早過 2 秒。1.50s 入第 1 步，3.50s 入第 2 步，4.30s 紫箭特寫，5.50s 入第 3 步，7.50s CTA。片長 ≤15s。音軌 AAC，mean_volume −17.4 dB，max −4.3 dB，唔係靜音。畫面冇口播字幕。我冇逐秒聽出係咪人聲。

扣 2 分：draft 寫尾段無 fade。7.50s 到約 8.70s CTA 企穩（對 CTA 平均差 0.19）。由約 8.70s 交叉淡出，片尾幀對封面平均差 0.33、對 CTA 平均差 8.71。係大約 0.27 秒 loop fade，唔係硬 hold。

證據：ffprobe duration 9.000s；抽幀 0.00／0.80／1.50／2.30／3.50／4.30／5.50／6.30／7.50s；8.50s 起逐幀對封面同 CTA；contact 由 `cover f40` 到 `cta f35`。

## R7 · 合規／字形：**9**／10

**Critical：** 無

公開 caption 同本集頁正文簡體專用字掃描冇命中。冇日文，冇 Pip。覆訊用「團隊／訂單／關係／發貨／時間／預計／週／對／請／聯絡／詢／嗎」。Caption 粵語。頁第 223 行寫「覆訊跟提示用繁體中文」。

扣 1 分：側欄同細字未逐格對簡體表。英文 UI（Ask anything…、Start generating、Copy、Lumo 2.0 Max、Conversation encrypted）係產品介面，唔係 caption。

證據：caption；`index.html` 第 223 行；`lumo_3_after.png` 覆訊 OCR；reel 0.00s／5.50s。

## R8 · 可傳性／場景：**8**／10

**Critical：** 無

香港客人 WhatsApp 追貨，3 步抄一段得體延遲通知，公司同客人虛構。意圖係貼去客人對話，唔係轉發呢則片。提示喺 2.30s 讀到貨期同虛構公司。完整覆訊喺 `lumo_3_after.png` 同頁第 188 行。

扣 2 分：片上覆訊讀到致歉同收貨時段，讀唔到「3 個工作天」同「本週五前」。5.50s 仲帶住頁面叫人唔好抄嘅聯絡電話問句。光睇片抄，貨期會錯，電話問句會跟住走。要抄齊，去落地頁。

證據：caption 首句同 #注意；reel 2.30s／5.50s；`lumo_3_after.png`；`index.html` 第 170、188、213 行。

## R9 · 吸引力：**8**／10

**Critical：** 無

0–2 秒有結果：大字「延遲交貨覆訊即出」，「之前」空白對「之後」覆訊，0.80s 高亮已經喺覆訊上。陌生人一秒知睇完攞到延遲交貨覆訊。片尾「追蹤 JD／少啲試錯／每日中午、粵語 AI 3 步」。唔靠假工具，唔靠假結果。

扣 2 分：頭兩秒高亮嗰句係「發／前完成發貨」，第一眼證明弱過大字。片尾係系列追蹤句，唔係「而家抄去 WhatsApp」呢下拉力。6.30s 先至清楚見到 Copy，但抄嘅正文唔喺嗰格。

證據：reel 0.00–0.80s 同附件 `cover`；reel 7.50s CTA 右側「每日中午」；reel 6.30s 同附件 `r3c`。

## Critical 清單

（空）

## R10 · 只記不評

`layout_PASS` 已齊：gates VERDICT PASS，tip r1c／r2c／r3c ＝ **29.4／37.0／38.0** ≤40，Art「圈心＝掣心 PASS」，LAYOUT-SIGNOFF 2026-10-21 22:01，qa status WARN、0 FAIL。呢票唔再審箭尖、圈心、safe zone，R10 唔入 8.33。

## 若 PASS：仍建議（非阻擋，唔使整則重拍）

1. Cover／CTA「之後」重裁，令「發貨時間會延遲約 3 個工作天」同「本週五前完成發貨」連返。而家高亮係「關係，發／前完成發貨」。
2. 5.50s 若要人撳 Copy，畫面要見到由「陳先生您好」到「星河貿易 敬上」；「需要加入聯絡電話或查詢窗口嗎？」留出 Copy 目標，或者 caption #注意加頁上已有嘅一句：呢句唔好抄去 WhatsApp。
3. `lumo_0_before.png` 嘅 alt 刪「右下角紫色圓箭」。Figcaption 已經冇呢句。呢票冇改產品頁。
4. Loop 最後約 0.27s 唔好讓 CTA 淡返封面。Hold 住 CTA，或者硬切。
5. 「免登入」而家喺 caption 同頁，字卡只寫「開Guest」。可以留。唔好改到同「Ask anything…／Start generating／Copy」verbatim 打架。
6. 頁 `<time>` 仍係 2026-10-21 12:00，「原帖重製中／稍後更新」同已刪舊帖、目標 Share 2026-10-24 12:00 一致。Shortcode 接上之前可以留。
