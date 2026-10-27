# Ep.46 rigor · Grok 4.7

- **Model:** Grok 4.7（rigor seat 2/3）
- **Time:** 2026-10-27 22:30 HKT
- **This file is one vote.** Overall Share still needs a majority PASS across Kimi K3, Grok 4.7, and GLM 5.3, plus the already-signed `layout_PASS`.
- **Scored pack only:** reel sha256 `fc6689ca839a15ae1f00636f24d8290db6e5ba22dc75d7151e9618f6ce98c50a`. 附件 `reel.mp4` 對得上呢個 sha（9.000s、1080×1920、30fps、270 幀、h264+aac）。
- **Caption sha256:** `0960c7794aac069d5607b1eecedb294357c2a3b789a998c6fb3946ab0fc13c9e`
- **CTA comment sha256:** `9d53c7b9a37a4fdfb0bfc4efd8c357c4bf5ffbb84f5926cc9a84fe2394393071`
- **Art APPROVED 唔當加分。** `layout_PASS` 已簽，R10 唔再審、唔入均分。tip 只記 **30.3／29.4／31.8**。
- **Frames:** 上傳包冇獨立 QA frame PNG。畫面證據係由上述 sha 嘅 `reel.mp4` 抽幀（0.00／0.50／1.30／2.10／3.30／4.10／5.30／6.10／7.30／7.50／8.80s），再對 `qa_report.json` 時間軸。
- **Path:** `docs/ep46-rigor/scores/ep46-grok47.md`。未改 `reels/` 或產品頁。未 Share。

## 總評：**PASS**

R1–R9 均分 **8.11**（73/9）。R9＝8。Critical＝0。硬線係 mean(R1–R9) ≥8 且 R9≥8 且 Critical＝0。本票 PASS。未代發。Share 目標只係 **2026-10-28 12:00 HKT**。本閘不准 Share。

## 硬核核對

| 項 | 成品 | 判定 |
|---|---|---|
| Proton Lumo Guest | Caption「開 lumo.proton.me Guest（免登入）」同「Guest 免登入可用」。字卡寫「開Guest」，大字冇「免登入」三字。2.10s／4.10s 係已貼提示同紫圓箭，冇登入牆擋住。2026-10-27 `https://lumo.proton.me/guest`、getting started、lumo privacy、proton.me/lumo 都係 HTTP 200。官方寫 guest access 唔使帳戶，Guest 對話 session 結束就清。 | 已披露。無 Critical |
| CTA | 7.50s 字卡係「追蹤 JD／少啲試錯」，右側「每日中午」「粵語 AI 3 步」，chip「Ep.46 · LUMO」。Caption 末句同 CTA comment 都係「每日中午」。成片抽幀、caption、CTA comment、落地頁搜唔到「朝早」「07:00」「留言 1」、Collab。 | 片上係每日中午。無 Critical |
| 封面 | 0.00s 字卡係「Lumo」加「加租覆訊／即出稿」。「之後」已有業主覆訊，右緣切字（見 R3）。 | 大字在。證明句見 R3。無 Critical |
| 步驟 | 2.10s「開Guest／Ask anything…」，畫面係已貼提示。4.10s「撳紫箭咀／Start generating」，5.30s 紫圓箭面無字。6.10s「撳Copy／抄覆訊」，闊鏡見覆訊同複製圖示；7.30s 特寫圈住覆訊首行，掣面冇 Copy 字。 | 三步對得上。無 Critical |
| 得體覆訊 | 6.10s 闊鏡三行讀到 BUTTONS refined 原文，包括「有無議價空間」同「唔該晒你」。冇「法律／租約／法例」成句。Caption「勿當作法律意見」。 | 唔係假結果，唔係法律意見冒充。無 Critical |
| 虛構 | Caption「示範為虛構港租務加租情景；請按實際情況改寫」。片上提示係下個月加租大約一成，冇大廈、門牌、電話。 | 已披露。無 Critical |
| 密碼／URL | Caption「密碼喺網頁（個人檔連結）」同 `…/reels/lumo-rent-hike-reply/`。該頁同 `/workflow/` 今日 HTTP 200。頁尾寫 Workflow 庫密碼並連去 `/workflow/`。 | 有頁、有密碼句。無 Critical |
| 舊 slug | Caption 同 CTA comment 冇 `lumo-delay-reply`。落地頁 slug 係 `lumo-rent-hike-reply`。相關頁面有一張連去第42集 `lumo-delay-reply` 嘅卡，標題寫明第42集，唔係本集 slug。 | Caption／CTA 冇舊 slug。無 Critical |
| R10 | LAYOUT-SIGNOFF 21:54 ＋ Art「圈心＝掣心 PASS」。tip 30.3／29.4／31.8 ≤40。qa WARN、0 FAIL。gates VERDICT PASS。 | 記一筆。唔再審、唔入均分 |

## R1 · 事實嚴謹：**9**／10

**Critical：** 無

公開事實對得上來源。Guest 入口 `https://lumo.proton.me/guest` 今日 HTTP 200。Proton getting started、lumo privacy、產品頁今日都係 HTTP 200。官方寫可以用 guest access，唔使登入或者開帳戶；Guest 對話每個 session 結束就清；有限用量，唔係無限。掣名：封面「之前」見「Ask anything…」；貼字後係無字紫圓箭，字卡同 caption 寫無障礙名稱 Start generating；回覆動作字卡係 Copy。6.10s 覆訊同 BUTTONS.md refined reply 對得上（見 R2）。冇寫免費無限，冇寫官方支援香港，冇教 VPN。Caption「關窗對話會清」「AI 可能出錯」同官方 no-logs／要自行核對一致。

扣 1 分：今日冇重開一次 Guest 對話。免登入依據係同日 BUTTONS.md（21:30 HKT，Guest only、頂欄仍有 Create a free account／Sign in）、官方頁，同 caption。落地頁正文仍然寫「本集 UI 截圖未放入」「掣名跟第42集 2026-10-20」，同呢條已拍到嘅片並行，唔當片內假事實。

證據：BUTTONS.md；caption #開Guest／#注意；reel 0.00s／2.10s／5.30s／6.10s；上述 Proton URL HTTP 200。

## R2 · 示範一致：**8**／10

**Critical：** 無

三步同 caption、字卡對得上，掣名 verbatim。0.00s「之前」係 Ask anything…、Tools。2.10s 開 Guest：已貼 draft 提示，讀到「業主你好」「唔好寫到似法律意見」「80–120」。4.10s 撳紫箭：How can I help? 下面係同一段提示，右下紫圓箭。5.30s 特寫掣面無字，箭咀指住粒紫圓箭，旁邊 Lumo 2.0 Max。字卡先寫 Start generating。6.10s 闊鏡覆訊三行：

- 業主你好，多謝你通知我下個月加租大約一成嘅消息，我已經收到。想了解一下
- 今次加租嘅考慮因素，例如係咪參考市場情況？另外想請問有無議價空間。如果
- 最終確要加租，我也想知大概需要幾長通知期方便我安排搬遷事宜。唔該晒你。

同 BUTTONS.md「Final WhatsApp message」逐句同一段，105 字稿，冇法律 aside。右下係複製圖示同重新生成圖示。

扣 2 分：7.30s Copy 特寫圈住覆訊第一行，第二行右緣切喺「有無議價」，第三行停喺「搬遷事宜。」，唔見「唔該晒你」，亦唔見 Copy 字。Caption 寫撳「Copy」。Copy 字只出現喺 6.10s 字卡「撳Copy」，闊鏡掣面係圖示、冇 tooltip。mid_beat 用已授權嘅 `lumo_1_typed` 掣心，唔係 `lumo_2_send` 獨佔畫面；5.30s 同呢個 fallback 一致。

證據：reel 0.00s／2.10s／4.10s／5.30s／6.10s／7.30s；BUTTONS.md refined reply；draft 步驟同 mid_beat fallback。

## R3 · 封面誠實：**7**／10

**Critical：** 無

0.00s 大字係「Lumo／加租覆訊／即出稿」。同格「之後」已有業主覆訊：業主你好、下個月加租大約一成、市場情況、通知期、搬遷。結果類型在，唔係另一個工具或者另一個結果。1.30s 高亮拉到第一行。7.50s CTA 用同一張「之後」。

扣 3 分：三行右緣切喺同一個 x。逐行讀到「我已經收」加半個字、「想請問有無」加半個字、「搬遷事」加半個字。安全區讀唔到「到。」「議價空間。」「唔該晒你。」。`lumo` 闊鏡 6.10s 先至出齊。大字冇講錯，所以唔升 Critical；光睇封面會當份覆訊未寫完議價同收尾。

證據：reel 0.00s「之後」tile 右緣放大；6.10s 闊鏡三行；BUTTONS.md refined reply。

## R4 · 工具／產品準確：**9**／10

**Critical：** 無

工具係 Proton Lumo Guest，入口 `https://lumo.proton.me/guest`，唔係登入牆當免登入。畫面有 Lumo、Lumo 2.0 Max、開 Guest。送出係紫色圓箭；caption 寫「撳紫色圓箭（Start generating；畫面無字）」，同 5.30s 掣面一致。Copy 係回覆動作字卡，同 BUTTONS.md tooltip 名稱一致。

扣 1 分：字卡把 Start generating 印喺步驟副題，掣面始終冇呢串字。Caption 已經講畫面無字，所以唔當錯名。Copy 字亦唔喺 6.10s／7.30s 嘅掣面，只喺字卡。

證據：caption #開Guest／#撳Start generating／#撳Copy；reel 2.10s／5.30s／6.10s；BUTTONS.md「Start generating (send / purple arrow)」「Copy」。

## R5 · 文案嚴謹：**7**／10

**Critical：** 無

Caption 三步、掣名、畫面無字、虛構港租務、關窗會清、AI 要自己核對、勿當作法律意見，都齊。冇「留言 1」，冇朝早，冇 07:00，冇 Collab，冇叫人轉發。密碼句係「密碼喺網頁（個人檔連結）」。落地頁尾同 `/workflow/` 都寫住 Workflow 庫密碼，兩邊今日 HTTP 200。CTA 係「追蹤 JD／少啲試錯／每日中午」。CTA comment 只有逐步截圖 URL 同每日中午句，冇第二套主張。

扣 3 分：caption 寫「本則逐步截圖」指去 `…/reels/lumo-rent-hike-reply/`。該頁今日正文「截圖未放入」出現 18 次，寫明未拍到之前唔引用生成句子，頁上冇「唔該晒」，亦冇片上呢句 prompt「幫我寫一段畀香港業主」。頁上可抄提示係另一段「虛構示範，唔好寫成真實租約」。密碼頁係在，所以唔升 Critical「承諾密碼但無頁」。逐步截圖呢句，而家係指去未放圖、又未放 BUTTONS 原文嘅頁。

證據：附件 caption、cta-comment；live `reels/lumo-rent-hike-reply/` 同 `/workflow/` HTTP 200（2026-10-27）。

## R6 · 結構節奏：**8**／10

**Critical：** 無

9.000s、1080×1920、30fps、270 幀。0s 已經係結果卡。0.00→0.50s 封面有動（平均差 1.93），早過 2 秒。1.5s 離封面，2.10s 入第 1 步，3.5s 入第 2 步，4.3s 紫箭特寫，5.5s 入第 3 步，6.3s 覆訊特寫，7.50s CTA。片長 ≤15s。音軌 AAC，mean_volume −17.4 dB，max −4.3 dB，gates −15.0 LUFS，唔係靜音。畫面冇口播字幕。我冇逐秒聽出係咪人聲。

扣 2 分：draft 寫尾段無 fade。7.50s 到 8.50s CTA 企穩（對 7.50s 平均差約 0.2）。由約 8.60s 交叉淡出，8.80s 對 CTA 平均差 5.55、對封面 5.05，8.90s 對封面 1.17、對 CTA 8.46。係大約 0.3 秒 loop fade，唔係硬 hold。

證據：ffprobe duration 9.000s；10fps 抽幀平均差；qa cuts `[1.5, 2.3, 3.5, 4.3, 5.5, 6.3, 7.5]`。

## R7 · 合規／字形：**9**／10

**Critical：** 無

公開 caption、CTA comment 冇簡體專用字當正文，冇日文，冇 Pip。「法律意見」只出現喺「勿當作法律意見」。覆訊用「業主你好／嘅／係咪／唔該晒／議價／遷／宜」。6.10s 三行係繁體加香港用語。Caption 粵語步驟加書面 hook，符合 BRIEF「陳述句／書面中文 caption」。

扣 1 分：BUTTONS.md 已經記覆訊有書面尾「我也」「有無」「搬遷事宜」，冇再 refine 第二次。呢個係語域，唔係簡體，所以唔升 Critical。側欄同細字未逐格對簡體表。英文 UI（Ask anything…、Start generating、Copy、Lumo 2.0 Max、Thought this through）係產品介面，唔係 caption。

證據：caption；BUTTONS.md checklist；reel 0.00s／6.10s。

## R8 · 可傳性／場景：**8**／10

**Critical：** 無

香港業主 WhatsApp 話下月加租一成，3 步抄一段得體覆訊。意圖係貼去業主對話，唔係轉發呢則片。提示喺 2.10s 讀到加幅、議價、通知期、業主你好、唔好寫到似法律意見。完整覆訊喺 6.10s 闊鏡，同 BUTTONS refined 一致。冇真實大廈、門牌、電話。

扣 2 分：封面同 7.30s 特寫都切走「議價空間」尾同「唔該晒你」。要抄齊，要停喺 6.10s，或者去落地頁；頁而家又未放呢句原文，可抄提示亦同片上唔同。光睇封面會抄到一份切爛稿。

證據：caption 首句同 #注意；reel 2.10s／6.10s／7.30s；BUTTONS.md；live 頁「截圖未放入」。

## R9 · 吸引力：**8**／10

**Critical：** 無

0–2 秒有結果：大字「加租覆訊／即出稿」，「之前」空白對「之後」覆訊，0.50s 高亮已經喺覆訊上。陌生人一秒知睇完攞到加租覆訊稿。片尾「追蹤 JD／少啲試錯／每日中午、粵語 AI 3 步」。唔靠假工具，唔靠假結果。場景係業主加租，唔係空工具示範。

扣 2 分：頭兩秒證明句右緣切字，第一眼讀唔到議價同收尾，證明弱過大字。片尾係系列追蹤句，唔係「而家抄去 WhatsApp」呢下拉力。7.30s 先至放大覆訊，但抄嘅正文喺嗰格又未出齊，Copy 字唔喺嗰格。

證據：reel 0.00–1.30s；reel 7.50s CTA；reel 6.10s／7.30s。

## Critical 清單

（空）

## R10 · 只記不評

`layout_PASS` 已齊：gates VERDICT PASS，tip r1c／r2c／r3c ＝ **30.3／29.4／31.8** ≤40，Art「圈心＝掣心 PASS」，LAYOUT-SIGNOFF 2026-10-27 21:54，qa status WARN、0 FAIL。呢票唔再審箭尖、圈心、safe zone，R10 唔入 8.11。

封面右緣切字同 7.30s 第二行切字，已計入 R3／R2／R8，唔當推翻 layout 簽。r3w 頂緣碎字 qa 係 WARN，Art 寫明交排版、唔擋圈心簽，呢票唔再裁。

## 若 PASS：仍建議（非阻擋，唔使整則重拍）

1. Cover／CTA「之後」重裁，三行右緣留白，令「我已經收到。」「有無議價空間。」「搬遷事宜。唔該晒你。」連返。而家三行切喺半個字。
2. 7.30s 若要人撳 Copy，畫面要見到由「業主你好」到「唔該晒你。」，同埋 Copy tooltip。而家圈住第一行，第二行切喺「議價」。
3. Share 前：落地頁要么放入 `lumo_3_after` 同 BUTTONS refined 原文、並把可抄提示改到同片上「幫我寫一段畀香港業主…」一致；要么 caption 刪「本則逐步截圖」直到圖真係喺頁上。呢票冇改產品頁。
4. Loop 最後約 0.3s 唔好讓 CTA 淡返封面。Hold 住 CTA，或者硬切。
5. 「免登入」而家喺 caption 同頁，字卡只寫「開Guest」。可以留。唔好改到同「Ask anything…／Start generating／Copy」verbatim 打架。
6. 覆訊「我也／有無／搬遷事宜」BUTTONS 已記。可以留。唔好喺 caption 再加「純口語」呢類字。
7. 相關頁面連去第42集 `lumo-delay-reply` 可以留，標題已經寫第42集。唔好把本集 slug、caption、CTA 改成舊 slug。
