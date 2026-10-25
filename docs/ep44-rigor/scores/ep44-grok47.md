# Ep.44 rigor · Grok 4.7

- **Model:** Grok 4.7
- **Time:** 2026-10-25（layout 簽 22:10 HKT 之後）
- **This file is one vote.** Overall Share still needs a majority PASS across Grok 4.7, Kimi K3, and GLM 5.3.
- **Scored pack only:** reel sha256 `6aab2dc9fdca6e0fc0aa4371f004fae3af7e2ae1d51e3d74c25a43373a8c298a`。附件 `reel.mp4` 對得上呢個 sha（9.000s、1080×1920、30fps、270 幀）。
- **Caption sha256:** `9e5e1a85f8544d5b6288a288a510c986aa868d5221bca7c8354745c94c669126`
- **Art APPROVED 唔當加分。** `layout_PASS` 已簽，R10 唔再審、唔入均分。tip 只記 **30.9／38.6／35.2**。
- **Path:** `docs/ep44-rigor/scores/ep44-grok47.md`。未改 `reels/` 或產品頁。

## 總評：**PASS**

R1–R9 均分 **8.11**（73/9）。R9＝8。Critical＝0。硬線係均分 ≥8 且 R9≥8 且 Critical＝0。本票 PASS。未代發。Share 目標 2026-10-26 12:00，本閘不准 Share。

## 硬核核對

| 項 | 成品 | 判定 |
|---|---|---|
| 工具 | Brave Ask，入口 `https://search.brave.com/`。`brave_0_before.png` 網址列係 search.brave.com，搜尋列係「Ask anything, find anything...」，右掣字面係 Ask。`brave_3_after.png` 網址列係 `search.brave.com/ask?q=…`。說明頁 `https://search.brave.com/help/ai` 今日 HTTP 200，文中叫 Ask Brave。 | 工具對。無 Critical |
| 免登入 | Caption「開 search.brave.com（免登入）」同「免登入可用」。`brave_0_before.png`、`brave_1_typed.png`、`brave_3_after.png` 都冇登入牆。頁第 157 行寫「登入同用量以你當日畫面為準」，冇再寫免登入。今日 `search.brave.com` HEAD 200；help 索引一度 429，冇再開一次新 Ask。 | 畫面冇登入牆。頁比 caption 謹慎。無 Critical |
| 假醫生紙 | Caption、成片抽幀、contact 都冇「醫生紙」同「醫生紙自動出」。頁只係禁止：第 158、169、170、184、197、215 行叫人刪走假醫生紙編號，唔好當醫療建議。結果係 WhatsApp 短訊，唔係證書。 | 禁令守住。無 Critical |
| CTA | 7.50s 字卡右側係「每日中午」「粵語 AI 3 步」。大字「追蹤 JD／少啲試錯」。Caption 末句「每日中午粵語 AI 3 步」。成片抽幀、caption、本集頁搜唔到「朝早」「07:00」「留言」「Collab」。 | 片上係每日中午。無 Critical |
| 封面 | 0.00s 大字係「Brave Ask／病假短訊／即出稿」。同格「之後」有病假短訊。 | 大字在。證明句見 R3。無 Critical |
| 步驟 | 1.50s「開Brave Ask／Ask anything, find anything...」。3.50s「撳Ask／貼病假題」，4.30s 同格見 sparkle＋「Ask」。5.50s「睇短訊／Copy 傳老闆」。 | 三步對得上。Copy 掣見 R2。無 Critical |
| 虛構 | Caption「示範係虛構返工場景（陳／市場助理）；請按公司規定自行改」。1.50s 提示讀到「市場助理」（虛構）。頁同一組名。 | 已披露。無 Critical |
| 密碼 | Caption 兩次「密碼喺網頁（個人檔連結）」，並附 `…/reels/brave-sick-leave-msg/`。該頁今日 HTTP 200，第 254 行有 jdtech3，連去 `/workflow/`。`/workflow/` 今日 HTTP 200，jdtech3 ×6。 | 承諾有頁。無 Critical |
| 截圖 URL | 五張 `brave_0_before.png` … `brave_4_copy.png` 今日都 HTTP 200、真 PNG，同 repo 檔 byte 相同。 | URL 在。字同圖見 R1。無 Critical |
| R10 | LAYOUT-SIGNOFF 22:10 ＋ Art「圈心＝掣心 PASS」。tip 30.9／38.6／35.2 ≤40。qa WARN、0 FAIL。 | 記一筆。唔再審、唔入均分 |

## R1 · 事實嚴謹：**8**／10

**Critical：** 無

公開產品事實對得上畫面。入口係 search.brave.com 嘅 Ask，結果頁網址係 `/ask`，掣面寫 Ask。說明頁叫 Ask Brave，本集叫 Brave Ask，同第 223、228 行嘅對照一致。短訊係請假草稿，唔係醫生紙。冇教 VPN，冇寫「官方支援香港」，冇寫免費無限。

扣 2 分，全部喺本集頁字同圖唔夾：

- 第 200 行 figcaption 話草稿寫「聽日（星期二）」。`brave_3_after.png` 同 caption 定稿都係「聽朝（星期二）」。
- 第 199 行 alt 寫「陳生／陳小姐」「聽日」「多謝老闆體諒」。圖入面係「X 總」「聽朝」「謝謝體諒」。
- 第 203–204 行 alt／figcaption 話 `brave_4_copy.png` 係短訊尾段「陳上」。圖係 Copy、Try again、讚／唔讚，357×90。稿尾係「謝謝體諒」，冇「陳上」。
- 第 191–192 行話左邊黑色 Ask、右邊 Search。`brave_2_ask.png` 係查詢列右邊灰色 Ask 掣（sparkle＋Ask），旁邊係清除 X，畫面冇 Search。
- 第 166–168 行可抄提示，同 `brave_1_typed.png`、成片 1.50s、`brave_3` 網址列嗰條查詢唔係同一段。頁上提示多咗「唔好加假電話、假地址、假醫生紙編號」。呢句方向啱，但唔係產出截圖嗰條。

證據：`reels/brave-sick-leave-msg/index.html` 第 157、166–170、179、187、191–192、199–204、223、228、254 行；`brave_0_before.png`、`brave_1_typed.png`、`brave_2_ask.png`、`brave_3_after.png`、`brave_4_copy.png`。2026-10-25 再探上述 URL：本集頁同五張圖 HTTP 200，`search.brave.com` HEAD 200，`/help/ai` HTTP 200。

## R2 · 示範一致：**8**／10

**Critical：** 無

三步同 caption 對得上，Ask 掣名 verbatim。0.00s「之前」係「Ask anything, find anything...」。1.50s 提示讀到：幫我寫一段畀香港老闆 WhatsApp 嘅病假短訊、聽朝（星期二）、預計星期三返工、我姓陳、職位用「市場助理」（虛構）、用繁體中文香港用語。4.30s 同格見「Ask」。5.50s 讀到「書寫病假通知」同「X 總，我聽朝（星期二）發燒喉嚨痛，想請一日病假，預計星期三返工。如有需要／覆工相關訊息。謝謝體諒。」`brave_3_after.png` 同一段有「如有需要，我會盡快覆工相關訊息」，下面係 Copy。

扣 2 分：caption 叫「畫面定稿」並引全句「預計星期三返工。如有需要，我會盡快覆工相關訊息」。5.50s 有返工日，第二行由「覆工」起，讀唔到「我會盡快」。0.00s、6.30s、7.50s「之後」再短一截，讀到「想請一日病假，覆工相關訊息。謝謝體諒。」，返工日同「我會盡快」都唔喺嗰格。5.50s 白卡亦冇帶 Copy 掣；Copy 喺字卡副題「Copy 傳老闆」，同 `brave_3_after.png`、`brave_4_copy.png`。第 2 步副題寫「貼病假題」，嗰下已經貼完，動作係撳 Ask。

證據：reel 0.00s／1.50s／4.30s／5.50s／6.30s／7.50s；`brave_1_typed.png`、`brave_3_after.png`、`brave_4_copy.png`。

## R3 · 封面誠實：**7**／10

**Critical：** 無

0.00s 大字係「Brave Ask／病假短訊／即出稿」。同格「之前」係空搜尋列，「之後」係一段畀上司嘅病假短訊。得益類型在，唔係另一個工具，亦唔係醫生紙。5.50s 再見到帶返工日嘅同一類短訊。

扣 3 分：封面同 7.50s 用嚟證明嘅「之後」係縮句：「X 總，我聽朝（星期二）發燒喉嚨痛，想請一日病假，覆工相關訊息。謝謝體諒。」caption 定稿同 `brave_3_after.png` 中間仲有「預計星期三返工。如有需要，我會盡快」。大字冇講錯，所以唔升 Critical。光睇封面高亮，返工日會唔見。

證據：reel 0.00s／0.80s／7.50s；`brave_3_after.png` 短訊兩行；caption「#睇短訊」。

## R4 · 工具／產品準確：**8**／10

**Critical：** 無

工具名 Brave Ask，入口 search.brave.com，結果走 `/ask`。要撳嘅掣面寫 Ask，唔係 Search，亦唔係側欄 Leo。Copy、Try again 喺 `brave_3_after.png` 回覆下面，同 caption「撳 Copy」同字卡「Copy 傳老闆」一致。截圖路徑冇登入牆。

扣 2 分：頁第 192 行把 Ask／Search 左右講反，而 `brave_2_ask.png` 根本冇 Search。Caption 寫免登入；頁第 157 行改口「登入同用量以你當日畫面為準」。兩句可以並存，因為截圖冇牆，但頁冇用 caption 嗰句。

證據：caption #開BraveAsk／#撳Ask／#睇短訊；`index.html` 第 144、157、176、184、192、196 行；reel 1.50s／4.30s；`brave_0_before.png`、`brave_2_ask.png`、`brave_3_after.png`。

## R5 · 文案嚴謹：**9**／10

**Critical：** 無

Caption 三步、掣名 Ask、定稿句、虛構陳／市場助理、按公司規定自行改、免登入、AI 可能出錯，都齊。冇「留言 1」，冇朝早，冇 07:00，冇 Collab。CTA 係「收埋呢則」同「每日中午粵語 AI 3 步」。密碼句係「密碼喺網頁（個人檔連結）」，頁第 254 行同 `/workflow/` 都寫住 jdtech3。定稿全句同 `brave_3_after.png` 短訊主體一致。

扣 1 分：密碼句寫咗兩次（caption 第 15 行同第 17 行）。中段「想留低慢慢跟？收埋呢則先。」係收埋，唔係空承諾。

證據：附件 caption；`index.html` 第 223、254 行；live `/workflow/` HTTP 200。

## R6 · 結構節奏：**8**／10

**Critical：** 無

9.000s、1080×1920、30fps、270 幀。0s 已經係結果卡。0.00→1.40s 封面有連續小動（相鄰 0.1s 平均差約 0.3–1.4），1.40s 切第 1 步，早過 2 秒。1.50s 入第 1 步，3.50s 入第 2 步，4.30s Ask 特寫，5.50s 入第 3 步，7.50s CTA。片長 ≤15s。音軌 AAC，mean_volume −17.4 dB，max −4.3 dB，唔係靜音。我冇逐秒聽出係咪人聲。

扣 2 分：7.50s 到約 8.60s CTA 企穩（對 CTA 平均差低過 1）。由約 8.70s 交叉淡出，8.90s 對封面平均差 1.36、對 CTA 平均差 8.63。係大約 0.3 秒 loop fade，CTA 淡返封面。

證據：ffprobe duration 9.000s、nb_read_frames 270；抽幀 0.00／1.50／3.50／4.30／5.50／6.30／7.50s；8.20s 起每 0.1s 對封面同 CTA。

## R7 · 合規／字形：**9**／10

**Critical：** 無

公開 caption 同本集頁正文，簡體專用字掃描冇命中。成片抽到嘅中文係繁體／粵語：聽、發、燒、嚨、請、預、計、盡、快、覆、訊、謝、體、諒、幫、寫、畀、嘅、唔、職、場、虛、構。提示寫「用繁體中文香港用語」。冇日文，冇 Pip。

扣 1 分：側欄同細字未逐格對簡體表。英文 UI（Ask anything…、Ask、Copy、Try again、Show more）係產品介面，唔係 caption。

證據：caption；reel 0.00s／1.50s／5.50s；`brave_3_after.png`；`index.html` 第 167 行。

## R8 · 可傳性／場景：**8**／10

**Critical：** 無

香港人聽朝要請病假，3 步出一段得體 WhatsApp 畀老闆／HR。人物陳、職位市場助理，提示同 caption 都標虛構，並叫人按公司規定改。意圖係抄短訊，唔係轉發呢則片。頁第 197、218 行寫明。5.50s 已有日子、原因、預計星期三返工、謝謝體諒。全句喺 `brave_3_after.png`。

扣 2 分：封面、6.30s、7.50s 嗰句冇返工日。5.50s 亦少「我會盡快」。跟封面抄，返工日會漏。要抄齊，去落地頁嗰張 `brave_3_after.png`，再自己讀一次。

證據：caption 首句同 #注意；reel 1.50s／5.50s／0.00s；`brave_3_after.png`；`index.html` 第 144、197、218 行。

## R9 · 吸引力：**8**／10

**Critical：** 無

0–2 秒有結果：大字「病假短訊／即出稿」，「之前」空白對「之後」短訊，0.80s 高亮已經喺短訊上。陌生人一秒知睇完攞到病假短訊。片尾「追蹤 JD／少啲試錯／每日中午、粵語 AI 3 步」。唔靠假工具，唔靠假醫生紙。

扣 2 分：頭兩秒高亮係縮句，返工日要等到 5.50s。片尾係系列追蹤句，拉力喺追蹤，唔係「而家撳 Copy」。Copy 掣喺落地頁圖，唔喺 6.30s 嗰格。

證據：reel 0.00–0.80s；reel 5.50s；reel 7.50s 右側「每日中午」；`brave_4_copy.png`。

## Critical 清單

（空）

## R10 · 只記不評

`layout_PASS` 已齊：gates VERDICT PASS，tip r1c／r2c／r3c ＝ **30.9／38.6／35.2** ≤40，Art「圈心＝掣心 PASS」，LAYOUT-SIGNOFF 2026-10-25 22:10，qa status WARN、0 FAIL。呢票唔再審箭尖、圈心、safe zone、half_cut，R10 唔入 8.11。

人眼只記一筆，唔擋：4.30s 特寫同格見 sparkle 同「Ask」，紫圓角框喺 Ask 字下方。排版備註已收 r1c half_cut、r2c 字細、cta 品牌色。本票唔推翻雙簽。

## 若 PASS：仍建議（非阻擋，唔使整則重拍）

1. 封面同 CTA「之後」改用 `brave_3_after.png` 嗰兩行全句，令「預計星期三返工」同「如有需要，我會盡快覆工相關訊息」連返。而家高亮係「想請一日病假，覆工相關訊息」。
2. 5.50s 或 6.30s 帶埋 Copy 掣。掣喺 `brave_3_after.png` 同 `brave_4_copy.png`，字卡已經寫 Copy。
3. 頁第 200 行「聽日」改返圖入面嘅「聽朝」。第 199 行 alt 改返「X 總／聽朝／謝謝體諒」。第 203–204 行改返 Copy／Try again，刪「陳上」。第 192 行改返：Ask 喺查詢列右邊，呢張冇 Search。呢票冇改 `reels/`。
4. 可抄提示同 `brave_1_typed.png` 用同一段。頁上「唔好加假醫生紙編號」可以留，但就要用呢段重新截圖。兩段並存會令人打咗頁上提示，對住另一條查詢嘅結果。
5. Caption「密碼喺網頁（個人檔連結）」留一次就夠。
6. Loop 最後約 0.3s 唔好讓 CTA 淡返封面。Hold 住 CTA，或者硬切。
7. 免登入而家喺 caption，截圖亦冇牆。頁第 157 行可以對返呢句，或者 caption 改到同「登入同用量以你當日畫面為準」一致。唔好改到變成登入牆。
8. 第 2 步副題「貼病假題」可改成同 caption 一樣：撳 Ask，唔好撳 Search。貼字留喺第 1 步。
