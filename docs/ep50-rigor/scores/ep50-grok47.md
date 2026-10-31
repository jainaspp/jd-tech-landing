# Ep.50 rigor · Grok 4.7

- **Model:** Grok 4.7
- **Time:** 2026-10-31 22:23 HKT
- **This file is one vote.** Overall Share still needs a majority PASS across Grok 4.7, Kimi K3, and GLM 5.2.
- **Scored pack:** reel sha256 `e90cb63e733ac672197fbc1293eb1d4371878bcc7afb43dd51b581cbb9ba771a`. 附件 `reel.mp4` 對得上呢個 sha（9.000s、1080×1920、30fps、270 幀、h264+aac）。
- **Caption sha256:** `a51fb9bab4c00b4e2cddc24b67b9ad24f506e0b1173f88b58c8624374f3fa6c7`
- **Art／排版／定B 唔當加分。** `layout_PASS（定B）` 已簽。R10 只記、唔入均分、唔用 zoom 1.08× 機械否決。tip 只記 **27.0／28.7／24.0**。人眼中段裁另計，見下。
- **Path:** `docs/ep50-rigor/scores/ep50-grok47.md`。未改 `reels/` 或產品頁。
- **方法：** sha256sum、ffprobe、volumedetect、silencedetect；10fps 幀差（切鏡 1.5／3.5／5.5／7.5s）。抽幀 0.05／0.40／0.70／1.30／1.50／2.30／3.50／4.30／5.50／6.30／7.50／8.50／8.80／8.90。短訊帶放大後用 tesseract `chi_tra+eng`。爭議句再用人眼讀放大格。Landing、`/workflow/`、`https://grok.com/` 今日 curl。

## 總評：**PASS**

R1–R9 均分 **8.22**（74/9）。R9＝8。Critical＝0。硬線係均分 ≥8 且 R9≥8 且 Critical＝0。三條都過。本票 **PASS**。未代發。Share 目標 2026-11-01 12:00 HKT，本閘不准 Share。

一句講晒：工具係已登入 Grok，slug 係 `grok-order-delay-chase`，封面大字、三步、CTA「每日中午」、BUTTONS Final 全文都在畫入面。0.05s、5.50s、6.30s 同一格讀到「客服你好／延誤／未見出貨／訂單號／阿強」，中段「想禮貌查詢一下最新嘅處理進度」冇被裁走。zoom 1.08× 按定B 只記。扣分喺落地頁：可抄提示係 A4 紙／QM1024／上星期五／運單號，同片內提示同短訊唔係同一套稿；caption 寫「逐步截圖」，頁寫截圖未放入。

## 硬核核對

| 項 | 成品 | 判定 |
|---|---|---|
| reel sha | `e90cb63e…ba771a` 同 BRIEF／LAYOUT／Art 一致 | 對得上 |
| host | Caption「開 grok.com」。`https://grok.com/` 今日 HTTP 200。片內 URL 唔出現。1.50s 有 Fast、藍圓白上箭、已貼提示 | host 係 grok.com。無 Critical |
| 已登入／免登入 | Caption「本則為已登入示範」。Landing「要登入先用」「已登入」；免登入／Guest／唔使登入／未登入亦可／免註冊／訪客／login-free＝0。片內冇登入牆、冇 Guest 掣。1.50s／4.30s 有 Fast 型號掣 | 已登入示範。禁句冇主張。無 Critical |
| slug | Caption 同 canonical 都係 `/reels/grok-order-delay-chase/`。Live 今日 HTTP 200，頁內註 SLUG_LOCKED。Caption／landing 搜 mistral、kimi、perplexity＝0 | 鎖咗正確 slug。無 Critical |
| CTA | 7.50s「追蹤 JD／少啲試錯」側欄「每日中午／粵語 AI 3 步」，角標 Ep.50 · GROK。Caption 末句「每日中午粵語 AI 3 步」。朝早／07:00／留言 1／Collab＝0 | 片上係每日中午。無 Critical |
| 封面大字 | 0.05s「Grok」「追件短訊」「即出稿」。JD TECH | 大字在。證明句見 R3。無 Critical |
| 步驟 | 1.50s「開Grok／Ask Grok anything」，提示已貼。3.50–4.30s「撳藍箭／Submit」，掣面係藍圓白上箭，掣面無 Send。5.50s「撳Copy／抄追件短訊」，回覆下有複製 icon 行 | 三步對得上。無 Critical |
| BUTTONS Final | 86 字（連標點、訂單號後 8 個底線）。0.05s OCR 兩行都在，見下節 | **逐字結構成立。** 無中段裁。無 Critical |
| 虛構／消費法 | Caption「示範為虛構港網購追件情景；請按實際情況改寫」「正式追件請自行核對」。片內提示寫明唔好寫真實商戶名、唔好寫到似律師信。Landing「唔係消費法意見」多次。公開 caption 本身冇「消費法」三字 | 片內係虛構追件短訊。扣分喺 R5。無 Critical |
| 密碼 | Caption「密碼喺網頁（個人檔連結）」兩次。Landing 結尾同 `/workflow/` 今日都有 jdtech3。頁寫未接 shortcode、Share 未到 | 有頁有密碼。無 Critical |
| 人眼中段裁 | cover after、r3w、r3c 同一格見齊五個錨點 | **無。** 見下。無 Critical |
| R10 | LAYOUT-SIGNOFF 22:14 定B ＋ Art「圈心＝掣心 PASS」。tip 27.0／28.7／24.0 ≤40。gates／qa FAIL 按 waiver 接受 | 只記。唔入 8.22 |

## 人眼 · 追件短訊（Critical 線）

BUTTONS Final：

> 客服你好，關於我的訂單，系統顯示已出現延誤，而家仍然未見出貨。想禮貌查詢一下最新嘅處理進度，麻煩回覆預計出貨時間或者送達日期，方便我安排。多謝！訂單號：________阿強

0.05s 之後格放大，tesseract `chi_tra+eng`：

> 客服你好 , 關於我的訂單 , 系統顯示已出現延誤 , 而家仍然未見出貨。 想複貌查詢一下最新呈處理進度 ,
> 麻煩回禾預計出貨時間或者送達日期 , 方便我安排。多謝! 訂單號:_____阿強

「禮貌／嘅／回覆」有字形誤讀（複貌、呈、回禾）。錨點同中段子句都在同一格：客服你好、延誤、未見出貨、想…查詢一下最新…處理進度、預計出貨時間或者送達日期、訂單號、阿強。

5.50s 闊鏡（r3w）同一句，第二行 OCR 更清：「麻煩回禾預計出貨時間或者送達日期 , 方便我安排。多謝! 訂單號:_____阿強」。人眼放大格讀到「未見出貨。想禮貌查詢一下最新嘅處理進度」。回覆上有 “Worked for 8s”。

6.30s 特寫（r3c）箭咀貼首行。放大全寬讀到由「客服你好」到「處理進度」，下一行到「訂單號」底線同「阿強」。左緣冇裁走「客服你」。

7.50s CTA 用同一張之後格。底沿剩複製等 icon 嘅頂，係 composer chrome，短訊兩行喺 icon 上面，唔係把中段切走。

**裁決：** 人眼中段裁＝無。五個錨點同一格見齊。zoom 1.08× 唔拎來否決。

## R1 · 事實嚴謹：**8**／10

**Critical：** 無

工具、入口、登入要求、三步掣、短訊錨點有同日畫面同頁可對。Caption 開 grok.com，今日 HTTP 200。4.30s 掣面係藍圓白上箭，字卡寫 Submit，掣面無 Send 字；caption 唯一一次 Send 係「畫面無 Send 字」。1.50s 有 Fast。短訊同片內提示同一套：延誤、仍未出貨、留空訂單號、署名阿強、開頭可以客服你好、問預計出貨或送達。冇教 VPN，冇寫官方支援香港，冇寫免費無限。

扣 2 分：`reels/grok-order-delay-chase/index.html` 把本集示範寫成另一套稿。第 159–162 行可抄提示係 A4 紙一箱、訂單編號 QM1024、預計發貨日上星期五、問運單號。第 114 行叫讀者核對貨品、QM1024、上星期五、運單號。片內 1.50s 提示同 0.05s／5.50s 短訊都冇呢四樣；訂單號係底線空位。頁寫「生成句子未核對，呢頁唔引用」，所以唔係把片內句子套成 QM1024，但核對清單仍然描述另一個示範。

證據：caption；0.05s／1.50s／5.50s OCR；`index.html` 第 10、67、114、159–162 行；live HTTP 200。

## R2 · 示範一致：**8**／10

**Critical：** 無

Caption 三步喺片內做得到。1.50s 開 Grok：提示已貼，讀到訂單顯示延誤、仍未出貨、訂單號留空、阿強、70–110 字、開頭可以「你好」或「客服你好」、唔好寫真實商戶名。3.50s 進入撳藍箭。4.30s 圈同箭貼住藍圓白上箭，旁邊 Fast 同咪高峰，掣面無字。5.50s 出 BUTTONS 嗰段短訊，下面有複製、連結、讚、踩、重做 icon。6.30s 箭咀指向短訊首行。

扣 2 分：字卡寫「Ask Grok anything」，1.50s／3.50s 畫面標題人眼係 “What should we explore?”（tesseract 讀到近似拉丁字母，唔係 Ask Grok anything 呢句）。Caption 寫 tooltip「Copy response」；5.50s 只見複製 icon，五字 tooltip 冇入鏡。兩項都唔係假掣，亦唔係做唔到 caption 嘅動作。

唔升 Critical：畫面做得到貼提示、撳藍箭、出得體追件短訊。短訊係提示要求嘅那一種，唔係另一句假結果。

證據：1.50s／2.30s 提示；4.30s 藍圓白上箭；5.50s icon 行同 “Worked for 8s”；0.05s／6.30s 短訊。

## R3 · 封面誠實：**9**／10

**Critical：** 無

0.05s 大字係「Grok／追件短訊／即出稿」。之後格係片內 5.50s 同一段 BUTTONS 短訊，五個錨點同中段都在。工具名冇掛去 Mistral／Kimi／Perplexity。

扣 1 分：之前格係 “Build Mode to create apps”，係空白 composer 嘅模式字，唔係一張空白追件稿。得益類型冇講錯，證明句亦係真回覆，所以唔升「封面承諾結果片內冇出現」。

證據：0.05s、1.30s 之後格 OCR；5.50s 同一句；附件 cover。

## R4 · 工具／產品準確：**9**／10

**Critical：** 無

產品係 Grok。入口 grok.com，caption、canonical、live 都係呢個 host。送出係藍圓白上箭，字卡 Submit，掣面無 Send。複製步字卡係 Copy，闊鏡有複製 icon。冇 Guest 掣，冇免登入主張，冇把登入牆講成免登入。Landing 第 153、203 行寫要登入先用、唔可以跳過登入。Slug 鎖定 `grok-order-delay-chase`。

扣 1 分：我冇喺今日再開一次已登入 Grok 去讀個掣嘅 aria。Submit／Copy response 依據係字卡、caption、同畫面掣形。頁第 167 行寫送出掣同複製掣字樣未截到、唔寫死掣名，同片內字卡已經寫死 Submit／Copy，讀者跟連結會見到較保守嘅版本。

證據：caption #開Grok／#撳藍箭／#撳Copy；4.30s；5.50s icon；landing 第 2、153、167、203 行；grok.com HTTP 200。

## R5 · 文案嚴謹：**7**／10

**Critical：** 無

Caption 有三步、掣名、畫面無 Send、虛構、按實際改、AI 可能錯、自行核對、已登入、密碼句、slug URL、每日中午。冇留言 1，冇 07:00，冇 Collab，冇 Guest，冇免登入。Hook 係陳述句。「想稍後再跟？可先收藏本則。」係收藏。密碼頁在：landing 結尾同 `/workflow/` 都有 jdtech3。頁寫 noon-only、未接 shortcode。

扣 3 分：caption「本則逐步截圖」指向嘅頁，第 142 行同多處寫「截圖未放入」，四張 `grok_0`–`grok_3` 未嵌入。頁第 162 行可抄提示係 A4 紙／QM1024／上星期五／運單號，同片內提示唔同。公開 caption 冇「唔係消費法意見」；呢句喺 landing（第 155、159、164 行），唔喺 caption。密碼句出現兩次，屬冗餘，唔係空承諾。

證據：caption #注意 同 URL 行；`index.html` 第 142、155、159–167、245 行；`/workflow/` jdtech3。

## R6 · 結構節奏：**8**／10

**Critical：** 無

9.000s、1080×1920、30fps、270 幀。0s 已經係結果卡。0.05s 紫像素主要係「之後」標；0.70s 紫像素上升，圈喺首行，早過 2 秒。切鏡：1.5s 第 1 步，3.5s 第 2 步（mid_beat 藍箭，AUTHORIZED FALLBACK `grok_1_typed`），5.5s 第 3 步，7.5s CTA。片長 ≤15s。音軌 AAC 立體聲，mean_volume −17.4 dB，max −4.3 dB。silencedetect −30 dB／0.3s 冇靜音段，係連續墊。我冇跑語音辨識，所以唔把「零人聲」寫成硬事實；墊樂同字卡主張冇衝突。

扣 2 分：7.50s 同 8.50s 幾乎靜止（標題區均值差可以忽略）。8.80s 字卡開始透出「Grok／追件短訊」，8.90s 封面大字蓋過「追蹤 JD」。尾約 0.2–0.3 秒交叉淡返封面。CTA 企穩大約 7.5–8.6s。

證據：ffprobe；10fps 幀差；8.50／8.80／8.90 標題區。

## R7 · 合規／字形：**9**／10

**Critical：** 無

Caption 正文係繁體粵語。短訊用而家、嘅、多謝、客服你好。片內提示用畀香港網購、唔好、客服你好。公開 caption 冇簡體句、冇日文、冇 Pip。英文字係 UI 同字卡原文：Ask Grok anything、Submit、Copy、Fast、Build Mode to create apps、What should we explore?、Worked for 8s。

扣 1 分：caption 冇另加一句「Grok 介面係英文」。字卡已經用開英文掣名，讀者跟住撳唔會搵簡體「发送」。

證據：caption 逐字掃描；0.05s／1.50s／4.30s／5.50s。

## R8 · 可傳性／場景：**8**／10

**Critical：** 無

場景係香港網購追件。署名阿強，訂單號留空畀人填，語氣係禮貌查進度同預計出貨或送達，唔係消費法結論，亦唔係叫人轉發呢則片。5.50s 兩行短訊齊，停低可以抄。痛點喺封面大字同 hook：延誤未出貨，怕語氣過硬。

扣 2 分：caption 叫人去嘅頁，可抄嘅係 QM1024／A4 紙／上星期五／運單號那套，抄完跑出嚟唔會係片內呢 86 字。封面之後格字級細（定B 1.08×），停低先至抄得舒服；闊鏡 5.50s 先係清楚嗰格。

證據：5.50s 全文；1.50s 提示；landing 第 162 行。

## R9 · 吸引力：**8**／10

**Critical：** 無

0–2 秒有結果卡。大字「追件短訊／即出稿」，陌生人一秒知睇完攞到一段追件短訊。0.70s 紫圈已經喺首行。片尾「追蹤 JD／少啲試錯／每日中午、粵語 AI 3 步」。工具名係 Grok，畫面有 Fast 同 “Worked for 8s”，唔靠另一個產品，亦唔靠假短訊。

扣 2 分：之後格字級細，第一眼靠大字多過靠讀完 86 字。之前格 “Build Mode to create apps” 唔係痛點句。片尾係系列追蹤句，8.80s 開始淡走。假結果否決線唔成立：0.05s OCR 已經有「想…查詢一下最新…處理進度」同第二行訂單號、阿強。

證據：0.05–1.30s；7.50s「每日中午」；0.05s OCR 中段。

## Critical 清單

（空）

免登入／Guest、留言 1、朝早檔期、錯 slug、假追件結果、短訊缺「客服你好／延誤／未見出貨／訂單號／阿強」、中段裁，都冇摸到否決線。頁面 QM1024 稿同 caption「逐步截圖」係 Major，計入 R1／R5／R8，唔升 Critical。

## R10 · 只記不評

`layout_PASS（定B）` 已齊：Art「圈心＝掣心 PASS」，LAYOUT-SIGNOFF 2026-10-31 22:14，tip r1c／r2c／r3c ＝ **27.0／28.7／24.0** ≤40，ring closes PASS，verify_motion PASS。gates VERDICT FAIL（cover after／r3 close zoom **1.08×**）同 qa FAIL×10 按 `ZOOM-WAIVER.md` 定B 接受。呢票唔再審箭尖、圈心、safe zone，R10 唔入 8.22，亦唔用 1.08× 否決。

人眼補充（歸 R2／R3，唔推翻定B）：短訊全文在卡內。之後格同 r3c 底沿見到 icon 頂，係 composer chrome，唔係短訊中段。

## 若 PASS：仍建議改進（非阻擋）

1. 落地頁第 159–162 行可抄提示，同片內 1.50s 提示對齊；或者寫明頁面係另一套模板，並收起「核對 QM1024／A4 紙／上星期五／運單號」當本片結果。
2. Caption「本則逐步截圖」同頁「截圖未放入」二擇一：嵌入 `grok_0`–`grok_3`，或者 caption 唔好講截圖已經喺頁。
3. 公開 caption 加一句「唔係消費法意見」。頁已有，caption 未有。
4. 5.50s 已有複製 icon。下集若要字卡同 tooltip 一致，特寫顯示 Copy response 五字。
5. 尾 0.2–0.3 秒交叉淡返封面。CTA 可以硬 hold 到完。

未代 Share。預定只係 2026-11-01 12:00 HKT，而且要另兩席多數同本席一齊過硬線。
