# Ep.48 rigor · Grok 4.7

- **Model:** Grok 4.7
- **Time:** 2026-10-29 22:40 HKT
- **This file is one vote.** Overall Share still needs a majority PASS across Grok 4.7, Kimi K3, and GLM 5.3.
- **Scored pack:** reel sha256 `ae85b289252eb4b42305077bfadcaaea67c569b68d6eb81eaf8ad7e09ffc20a7`. 附件 `reel.mp4` 對得上呢個 sha（9.000s、1080×1920、30fps、270 幀、h264+aac）。
- **Caption sha256:** `b1714da8febc16d55671ff0abf6cf0f2780858ad020570d0fcd515c1fb0779a0`
- **Art／排版／定B 唔當加分。** `layout_PASS（定B）` 已簽。R10 只記、唔入均分。tip 只記 **29.0／37.6／26.1**。zoom 1.26× 按 waiver 唔單獨否決；短訊中段裁仍然會否決，今次人眼冇裁。
- **Path:** `docs/ep48-rigor/scores/ep48-grok47.md`。未改 `reels/` 或產品頁。
- **方法：** sha256sum、ffprobe、volumedetect；10fps 幀差；抽幀 0.05／0.40／0.70／1.00／1.30／1.50／2.30／3.50／4.00／4.30／5.50／6.30／7.50／8.50／8.90s。封面／r3c／r3w／CTA 短訊區放大後再讀，並用 tesseract `chi_tra+eng` 對白卡同逐行。Shot 卡英文 OCR 掃「Sign／incognito／Guest／login」。Landing 同 `/workflow/` 今日 curl。`www.perplexity.ai` 本環境 HEAD 403（加瀏覽器 UA 仍 403），唔當網站落咗。

## 總評：**PASS**

R1–R9 均分 **8.44**（76/9）。R9＝9。Critical＝0。硬線係均分 ≥8 且 R9≥8 且 Critical＝0。本票 **PASS**。未代發。Share 目標 2026-10-30 12:00 HKT，本閘不准 Share。

一句講晒：片內係 Perplexity，封面大字同 CTA「每日中午」在，改期短訊全文喺封面之後格、r3 同 CTA 都讀得到，包括「明天上午 10:30」「後天同一時間」「下星期一早上 11:00」「陳小姐」。Caption／CTA／landing 冇「免登入／Guest／唔使登入／未登入亦可」。扣分係：片內讀唔到 Sign In 兩字、第 3 步箭咀指住短訊首行而唔係 Copy、落地頁仍然係另一套虛構稿（陳小明／文職／下星期三）。呢三項唔夠 Critical，均分過 8。

## 硬核核對

| 項 | 成品 | 判定 |
|---|---|---|
| 工具 | 封面大字「Perplexity」。Caption 開 perplexity.ai。片內同一套 composer：Search、Computer、黑圓白右箭、You're incognito、Sessions you create won't save to your history and expire after 24 hours、回覆下有 sources。冇 Kimi／Copilot 畫面入鏡。本環境 `https://www.perplexity.ai/` HEAD 403，畫面同 pack 描述嘅 unsigned incognito 一致，唔把 403 寫成產品下線。 | 工具係 Perplexity。無 Critical |
| Sign In 披露 | Caption 有「畫面可見 Sign In banner；登入要求以當日介面為準」。Landing live 今日「Sign In」23 次，並寫登入要求以當日介面為準。0.05–8.90s shot 卡英文 OCR：「sign」＝0；3.50s／4.00s 讀到 incognito；封面之前格係 Computer／Search／session 到期句。 | 文案有披露。像素冇「Sign In」兩字。扣分喺 R1／R4／R5。無 Critical |
| 禁句 | Caption、cta-comment、片內 OCR、landing live：免登入、Guest、唔使登入、未登入亦可、免註冊、訪客、login-free＝0。Landing「未登入仍出到答案」13 次，同句有 Sign In 同「以你當日介面為準」。 | 禁句冇主張。無 Critical |
| 短訊全文 | BUTTONS refined：您好，不好意思，因突發事情，我未能出席明天上午 10:30 的市場助理現場面試，想問可否改期？我後天同一時間或下星期一早上 11:00 都可以，會盡量配合您方便的安排，麻煩您了，謝謝！／陳小姐。封面之後格、r3c、r3w、CTA 之後格都讀到呢句。墨水行連續：封面第一行約 x100–871、第二行約 x100–855，卡右緣約 x907，冇中段空缺。陳小姐喺簽名行（封面約 y1390–1406）。紫圈蓋住首句前半，字仍然喺圈入面。 | **全文入畫。中段冇裁。** 無 Critical |
| CTA | 7.50s／8.50s 側欄「每日中午」「粵語 AI 3 步」。大字「追蹤 JD／少啲試錯」。Caption 末句同 cta-comment 都係「每日中午粵語 AI 3 步」。片內同 caption 冇「朝早」「07:00」「留言 1」、Collab。Hook「明早面試」係故事聽朝，唔係發佈時間。 | 片上係每日中午。無 Critical |
| 封面大字 | 0.05s「Perplexity」「改期短訊」「即出稿」。JD TECH。 | 大字在。證明句見 R3。無 Critical |
| 步驟 | 1.50s「開Pplx／Ask anything…」，composer 已貼提示。3.50s「撳黑箭／Submit」。4.30s 圈住黑圓白右箭，掣面無字。5.50s「撳Copy／抄改期短訊」。6.30s 箭咀指向短訊首行；Copy 圖示喺 r3w 答案下最左，唔喺特寫圈入面。 | 頭兩步對。第三步見 R2。無 Critical |
| slug | Caption URL `/reels/perplexity-interview-reschedule/`。Live 今日 HTTP 200。頁內 slug 7 次。kimi-interview、copilot-interview＝0。 | 一致。無 Critical |
| 虛構／免責 | Caption「示範為虛構港求職改期情景；請按實際情況改寫」「AI 可能出錯；正式覆招聘請自行核對」。片內係陳小姐、市場助理、明天上午 10:30、後天同一時間、下星期一早上 11:00。Landing「求職意見」5 次、「HR 意見」11 次，都係話唔係求職／HR 意見。 | 片內係虛構改期短訊。頁同片唔同稿。扣分喺 R5／R8。無 Critical |
| 密碼 | Caption「密碼喺網頁（個人檔連結）」兩次。Landing 同 `/workflow/` 今日 HTTP 200。兩邊都有 jdtech3（頁 1、workflow 6）。頁寫未接 shortcode、Share 未到。 | 有頁有密碼。無 Critical |
| 定B zoom | gates VERDICT FAIL：cover after／r3 close **1.26×**（要 ≥1.5）。ZOOM-WAIVER、Art、LAYOUT-SIGNOFF 都寫定B 接受。人眼短訊四段都在，唔用 zoom 機械 FAIL。 | 唔否決。見 R10 |
| R10 | LAYOUT-SIGNOFF 22:11 ＋ Art「圈心＝掣心 PASS」。tip 29.0／37.6／26.1 ≤40。gates FAIL 同 qa FAIL×11 按定B waiver。我冇重跑 reel_qa。 | 記一筆。唔入均分 |

## R1 · 事實嚴謹：**8**／10

**Critical：** 無

工具、入口、三步掣、incognito 到期句有 pack 同日來源。Caption 開 perplexity.ai。4.30s 送出掣係黑圓白右箭，掣面無 Send，字卡寫 Submit。6.30s 回覆係市場助理、明天上午 10:30、後天、下星期一、陳小姐，同 BUTTONS refined 同一套，唔係另一個工具。冇教 VPN，冇寫官方支援香港，冇寫免費無限。虛構同「自行核對」喺 caption。

扣 2 分：caption 寫畫面可見 Sign In banner，0.05–8.90s 抽幀讀唔到 Sign In。Landing 把今次示範寫成陳小明、文職、明天上午改去下星期三下午（頁內陳小明 16、文職 21、下星期三 15；陳小姐 0、市場助理 0、10:30 0）。讀者跟連結對片，事實係兩套稿。Reel／caption 本身冇把陳小明寫成片內事實。

證據：caption；0.05s、3.50s、4.30s、6.30s；live `perplexity-interview-reschedule` HTTP 200。

## R2 · 示範一致：**8**／10

**Critical：** 無

頭兩步同 caption 對得上。1.50s 開 Pplx：字卡副題「Ask anything…」，鏡頭係已貼嘅改期提示。4.30s 撳黑箭：圈心喺黑圓白右箭，掣面無字，字卡寫 Submit。r2w 有 You're incognito，同埋同一條提示入面嘅市場助理、後天同一時間、下星期一早上 11:00、陳小姐。

第三步畫面係得體改期短訊，全文在。r3w 答案下面有一排動作圖示，最左係 Copy 嗰格嘅位置，旁邊有 10 sources。6.30s 特寫箭咀指住「您好…明天上午 10:30」首行，唔係指住 Copy 圖示。1.50s 字卡係「開Pplx」，caption 係「#開Perplexity」。封面之前格係「Type @ for connectors／Search／Computer」，唔係空白「Ask anything…」。r1c 特寫由提示中段「10:30 現場面試」起筆，開頭「幫我寫一段…」唔喺呢格；呢格係提示，唔係回覆。

扣 2 分：第 3 步叫撳 Copy，特寫圈住嘅係短訊首行；第 1 步大字寫 Pplx。回覆句本身冇被裁成另一句，所以唔升 Critical「畫面做唔到／假 UI」。

證據：r1c、r2c、r2w、r3c、r3w；caption 三步。

## R3 · 封面誠實：**9**／10

**Critical：** 無

0.05s 大字係「Perplexity／改期短訊／即出稿」。得益類型係改期短訊，工具名冇掛錯。之後格讀到成句：

> 您好，不好意思，因突發事情，我未能出席明天上午 10:30 的市場助理現場面試，想問可否改期？我後天同一時間或下星期一早上 11:00 都可以，會盡量配合您方便的安排，麻煩您了，謝謝！
> 陳小姐

紫圈圍住第一句前半，10:30 之後嘅「的市場助理現場面試，想問」仍然喺圈外，第二行由「可否改期？」接去「安排，」，下面係「麻煩您了，謝謝！」同「陳小姐」。8.50s CTA 用同一張之後格。

扣 1 分：之前格係 connectors／Search／Computer，唔係 draft 寫嘅空白 Ask anything…。大字承諾嘅結果喺之後格，所以唔升 Critical。

證據：cover 之後格放大（約 y1188–1440）；CTA 同一張卡。

## R4 · 工具／產品準確：**8**／10

**Critical：** 無

產品係 Perplexity。入口係 perplexity.ai，caption、landing canonical 都係呢個 host。送出係黑圓白右箭，字卡 Submit，掣面無 Send。Copy 係答案下動作列最左圖示，同 draft 嘅 BUTTONS 描述一致。冇 Guest 掣，冇免登入主張，冇把登入牆講成免登入。Kimi／Copilot 牆冇入片。

扣 2 分：片內冇「Sign In」兩字，觀眾見到嘅係 incognito 同 session 到期句。Landing「今次 capture 未登入仍出到答案」13 次，有「登入要求以你當日介面為準」圍住，唔係禁句「未登入亦可對話」，但讀落仍然似軟性免登入。

證據：caption #注意；3.50s incognito；4.30s 黑箭；landing live 禁句計數 0、Sign In 23、未登入仍出到答案 13。

## R5 · 文案嚴謹：**7**／10

**Critical：** 無

Caption 有三步、掣名、畫面無字、虛構、按實際改、AI 可能錯、自行核對、密碼句、slug URL、每日中午。冇留言 1，冇 07:00，冇 Collab，冇叫人轉發，冇 Guest，冇免登入。Hook 係陳述句。「想稍後再跟？可先收藏本則。」係收藏，唔係空 workflow。密碼頁在：landing 同 `/workflow/` 都有 jdtech3。頁寫 noon-only、未接 shortcode，同 BRIEF 一致。Landing 有「唔係求職意見，亦唔係 HR 意見」。

扣 3 分：caption「畫面可見 Sign In banner」超前過片內像素。Caption「本則逐步截圖」指向嘅頁寫「截圖未放入」18 次，而且可抄提示係陳小明／文職／下星期三下午／面試官，同片內陳小姐／市場助理／明天上午 10:30／後天／下星期一係兩套虛構。密碼句出現兩次，屬冗餘，唔係空承諾。

證據：caption；cta-comment；live 頁計數（陳小明 16、陳小姐 0、jdtech3 1、截圖未放入 18）。

## R6 · 結構節奏：**9**／10

**Critical：** 無

9.000s、1080×1920、30fps、270 幀。0s 已經係結果卡。0.3–0.8s 封面有輕微動作（10fps 灰度差約 0.2–0.4），早過 2 秒。切鏡：1.5s 第 1 步，3.5s 第 2 步（mid_beat 黑箭），5.5s 第 3 步，7.5s CTA。CTA 7.6–8.6s 幀差近 0，企穩約 1 秒。片長 ≤15s，亦 ≤10s。音軌 AAC，mean_volume −17.4 dB，max −4.3 dB，同 gates −15 LUFS 音樂墊一致；我冇跑語音識別，亦冇聽出燒入旁白嘅證據。

扣 1 分：8.7s 起幀差升起（8.7s 0.99、8.8s 3.78、8.9s 3.51，270×480 灰度），尾約 0.3 秒交叉淡返封面。CTA 本身已經 hold 夠 end_hold。

證據：ffprobe；幀差 0–2s 同 7.4–8.9s；8.50s 有「每日中午」。

## R7 · 合規／字形：**10**／10

**Critical：** 無

Caption 正文係繁體。片上字卡係開Pplx、撳黑箭、撳Copy、抄改期短訊、改期短訊、即出稿、追蹤 JD、少啲試錯、每日中午、粵語 AI 3 步。回覆用您、發、場、問、後、會、盡、謝、陳小姐。公開 caption 冇簡體句、冇日文、冇 Pip。英文係介面原文：Ask anything…、Submit、Copy、Sign In、Perplexity。

證據：caption 逐字掃描；封面、三步字卡、回覆放大裁圖。

## R8 · 可傳性／場景：**8**／10

**Critical：** 無

場景係香港招聘改期，陳小姐、市場助理、明天上午 10:30、後天同一時間、下星期一早上 11:00，虛構。意圖係抄一段得體短訊去 WhatsApp 或電郵，唔係轉發呢則片。0.05s 同 6.30s 都見到可以讀完嘅成段短訊。

扣 2 分：跟 caption 連結去到嘅頁，可抄嘅係陳小明、文職、下星期三下午，而且寫明唔引用生成句子、截圖未放入。片內即用結果同頁內即用結果接唔成同一條短訊。

證據：封面之後格、r3c、r3w；landing 可抄提示段。

## R9 · 吸引力：**9**／10

**Critical：** 無

0–2 秒有結果卡：大字「改期短訊／即出稿」，之前有 composer，之後有成段短訊，0.4s 前後紫圈已經喺首行。陌生人一秒知睇完攞到一段面試改期短訊。片尾「追蹤 JD／少啲試錯／每日中午、粵語 AI 3 步」。工具名係真 Perplexity，唔靠另一個產品，亦唔靠假結果。

扣 1 分：之前格係 Computer／connectors，空白稿嗰下痛點冇「Ask anything…」咁直。紫圈蓋住首句前半，不過 10:30、後天、下星期一、陳小姐都仍然讀到。

證據：0.05–1.30s；8.50s「每日中午」；r3c 全文。

## Critical 清單

（空）

短訊中段冇裁，所以定B 嘅 zoom 1.26× 唔升做 Critical。Sign In 兩字唔喺畫面，但 caption／landing 冇把登入牆講成免登入、Guest、唔使登入、未登入亦可。第 3 步錯指係 Major。落地頁另一套稿係 Major。假改期結果、留言 1、錯 slug，都冇摸到否決線。

## R10 · 只記不評

`layout_PASS（定B）`：Art「圈心＝掣心 PASS」（2026-10-29 22:09），LAYOUT-SIGNOFF 2026-10-29 22:11，tip r1c／r2c／r3c ＝ **29.0／37.6／26.1** ≤40，ring closes PASS。gates VERDICT FAIL 同 qa FAIL×11 係 zoom 1.26×／half_cut heuristic，ZOOM-WAIVER 寫明定B 接受。呢票唔再審箭尖、圈心、safe zone，R10 唔入 8.44。

人眼另記，唔當否決：r1c 提示頂行被特寫裁走，可見文字由「10:30 現場面試」起；r3w 回覆上方剩低提示尾句。回覆四行（含陳小姐）喺封面、r3c、r3w、CTA 都齊。

## 若 PASS：仍建議改進（非阻擋）

均分 8.44。R5＝7，低過 8，但今次書面硬線係均分，唔係逐格全 8。呢票 PASS，唔准當三席已過，亦唔准提前 Share。

1. Noon 前，landing 可抄示範改到同片一致：陳小姐、市場助理、明天上午 10:30、後天同一時間、下星期一早上 11:00，同 BUTTONS refined 句。而家係陳小明、文職、下星期三下午、面試官，而且截圖未放入 18 次、生成句未寫。Caption 叫呢條 URL 做「本則逐步截圖」。本票冇改 `reels/`。
2. 片內如果要留「畫面可見 Sign In banner」，補一格真係見到 Sign In 嘅橫額或側欄。而家只有 You're incognito 同 session 到期句。唔好加免登入、Guest、唔使登入、未登入亦可對話。Landing「未登入仍出到答案」13 次建議收窄到「當日介面為準」，唔好再寫近禁句。
3. 第 3 步若叫撳 Copy，特寫箭咀指住答案下最左 Copy 圖示。而家 6.30s 指住短訊首行。字卡「開Pplx」可改回「開Perplexity」，同 caption 一致。
4. 封面之前格若承諾空白稿，顯示 Ask anything…，而家係 Type @ for connectors／Computer。
5. CTA 硬 hold 可以去到最後一幀。而家約 8.7s 起淡返封面。
6. origin-request 執行對照仍然寫 slug `kimi-interview-reschedule`、工具 Kimi。公開 caption／landing 已經係 Perplexity。呢段係內部凍結檔，唔入 R1–R9。

以下呢次已過，重出時保留：slug `perplexity-interview-reschedule`、封面 Perplexity＋改期短訊／即出稿、CTA「每日中午」、黑圓白右箭無 Send 字、回覆全文四個必備片段、虛構同自行核對、密碼頁 jdtech3、禁句 0。
