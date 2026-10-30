# Ep.49 rigor · Grok 4.7

- **席：** 我係 **Grok 4.7** rigor seat。呢份只係三席之一（Kimi K3／Grok 4.7／GLM 5.3）。Share 仍然要多數 PASS。
- **Time：** 2026-10-30 22:48 HKT
- **Scored pack：** reel sha256 `14feb1fedc60897d5bba8d371e5e519715f143bf154ab9d1ef6f5c53d5711dd1`。附件 `reel.mp4` 對得上 BRIEF 呢個 sha（9.000s、1080×1920、30fps、270 幀、h264+aac）。
- **Caption sha256：** `2ca3403ed65d9b9b2badcc92c3cb15d22e2cf3a227f08f3477d91b4e86d6d525`
- **定B：** Art「圈心＝掣心 PASS」＋ LAYOUT-SIGNOFF 22:39 ＋ ZOOM-WAIVER 已簽 `layout_PASS`。gates／qa 嘅 zoom **0.95×** 我唔用嚟否決。R10 只記、唔入均分。覆訊中段裁（缺「補休／加班費／星期六上午／阿強」）仍然會 Critical。今次像素冇缺呢四截。
- **Path：** `docs/ep49-rigor/scores/ep49-grok47.md`。未改 `reels/` 或產品頁。未 Share。
- **方法：** sha256sum、ffprobe、volumedetect、10fps 幀差（90 幀）；2fps 全片上下半 OCR（`chi_tra+chi_sim+eng`）。覆訊兩行用門檻放大再讀：封面、r3c、0.0s、6.0s。6.0s 氣泡右上角單獨放大。Landing、`/workflow/`、`www.qianwen.com` 今日 curl。Live HTML 同本 repo `reels/qwen-weekend-ot-reply/index.html`（#128）對過，我冇改嗰頁。

## 總評：**PASS**

R1–R9 均分 **8.22**（74/9）。R9＝8。Critical＝0。硬線係均分 ≥8 且 R9≥8 且 Critical＝0。三條都過。本票 **PASS**。未代發。Share 目標 2026-10-31 12:00 HKT，本閘不准 Share。

一句講晒：封面、CTA、slug、黑圓白上箭、BUTTONS Final 94 字／85 漢字喺封面同複製格都讀得齊，「補休／加班費／星期六上午／阿強」冇中段裁。唔係免登入主張。扣分喺片內睇唔到「登录」橫額、第 3 步箭咀指住覆訊首句而唔係「复制」兩字、同 landing 仍然教陳小姐／朝早十點至下午兩點／叫人刪走加班費。呢三項未摸到否決線，所以係 PASS 嘅 WARN，唔係退回。

## 硬核核對

| 項 | 成品 | 判定 |
|---|---|---|
| 工具／host | 封面大字「通義千問」。2.0s 字卡「開千问／向千问提問」方向係向千问提問；4.0s 闊鏡有「你好，我是千问」。Caption 開 qianwen.com。今日 `https://www.qianwen.com/` HTTP 200。片內冇 Mistral／DeepSeek／ChatGPT。 | 工具係通義千問。無 Critical |
| 登录／免登入 | Caption、landing 都寫畫面可以見到「登录」，並寫登入要求以當日介面為準。Caption／片內 OCR／landing：免登入、Guest、唔使登入、未登入亦可、免註冊、訪客模式、login-free＝0。2fps 十八格上下半 OCR「登录」＝0。鏡頭係 composer／覆訊卡，橫額唔喺呢條片入面。 | 冇把登入牆講成免登入。橫額唔喺畫面。扣分喺 R1／R4／R5。無 Critical |
| slug | Caption URL `/reels/qwen-weekend-ot-reply/`。Live 今日 HTTP 200。`/reels/mistral-weekend-ot-reply/` 係 1018-byte stub，`meta refresh` 同 `location.replace` 去 qwen 路徑，標題「呢頁已搬去通義千問」。Caption 同 live 頁正文 mistral-／deepseek- slug＝0。 | 公開 slug 係 qwen。無 Critical |
| CTA | 7.5–8.5s 字卡「追蹤 JD／少啲試錯」，側欄「每日中午／粵語 AI 3 步」，pill「Ep.49 · QWEN」。Caption 末句「每日中午粵語 AI 3 步」。片內同 caption 冇「朝早」「07:00」「留言 1」、Collab。 | 片上係每日中午。無 Critical |
| 封面大字 | 0.0s「通義千問」「加班覆訊」「即出稿」。JD TECH。之前格係千问 composer（向千问提问、工作助理、PPT創作、代码）。 | 大字在，同 BRIEF line1／line2 一致。無 Critical |
| 步驟 | 1.5s 起第 1 步「開千问」。3.5s 起第 2 步「撳黑箭／黑圓上箭」，黑圓白上箭，掣面無「发送」「Send」（全片 OCR＝0）。5.5s 起第 3 步字卡「撳复制／抄加班覆訊」。6.0s 氣泡右上有未標字嘅複製／垃圾桶／chevron 三個 glyph；紫圈同箭咀喺覆訊首句，唔喺複製 glyph。 | 三步對得上 caption。第 3 步掣名見 R2。無 Critical |
| BUTTONS Final | 標準句 94 字／85 漢字。0.0s 放大第二行 tesseract 讀到「我可以星期六上午先到公司開工，睇下情況再同你匯報進度。麻煩你俾個指示，我盡快跟進。阿強」。第一行讀到「同埋有冇補休或者加班費安」，下一行以「排？」起，係「安排」換行，唔係刪字。6.0s 同 r3c 同一句。5.5s OCR 亦有「星期六上午」。 | **全文入畫。** 無中段裁。無 Critical |
| 虛構／按實際改 | Caption「示範為虛構港返工加班情景；請按實際情況改寫」「AI 可能出錯；正式覆老闆請自行核對」。片內提示係阿強、週六上午、補休／加班費、70–110 字。 | 片內係虛構覆訊。頁同片唔同稿，見 R5。無 Critical |
| 密碼 | Caption「密碼喺網頁（個人檔連結）」兩次。Live landing 同 `/workflow/` 今日 HTTP 200。頁寫「Workflow 庫密碼 jdtech3（喺 /workflow/ 輸入）」；workflow 頁「密碼：jdtech3」。頁寫未接 shortcode、Share 未到。 | 有頁有密碼。無 Critical |
| R10 | LAYOUT-SIGNOFF 22:39 ＋ Art「圈心＝掣心 PASS」＋ ZOOM-WAIVER 定B。tip **27.6／28.9／23.8** ≤40。gates VERDICT FAIL（cover after／r3 zoom 0.95×）同 qa FAIL×10 按定B 接受。 | 記一筆。唔再審、唔入 8.22 |

## R1 · 事實嚴謹：**8**／10

**Critical：** 無

片內工具、入口、三步、覆訊句有同日來源。Caption 開 qianwen.com，今日 HTTP 200。4.0s 有「你好，我是千问」。2.0s 提示讀到香港老闆、WhatsApp、週末六日加班、週六上午、補休／加班費、署名阿強、70–110 字、開頭「收到」或「老板好」、唔好寫到似正式公函。呢套同 BUTTONS Final 係同一條覆訊，唔係另一個工具。冇教 VPN，冇寫官方支援香港，冇寫免費無限。虛構同「自行核對」喺 caption。簡體掣名係 BUTTONS 點名嘅 UI 原文。

扣 2 分：caption 寫畫面可見「登录」banner，抽幀讀唔到呢兩字。Landing（live 同 `reels/qwen-weekend-ot-reply/index.html`）把今集寫成陳小姐、今個星期六、朝早十點至下午兩點、開頭「老闆您好」、問改短或者下星期補假，而且寫「AI 加咗……加班費……先刪走」。片內提示同覆訊係要求問「補休或者加班費」，唔係叫人刪走加班費。讀者跟連結對片，事實係兩套稿。Reel／caption 本身冇把陳小姐寫成片內事實。

證據：caption；0.0s／2.0s／4.0s OCR；BUTTONS Final 94／85；live 頁同 repo index 陳小姐段；`www.qianwen.com` HTTP 200。

## R2 · 示範一致：**8**／10

**Critical：** 無

Caption 三步喺片內做得到。1.5–3.5s 開千问：composer 已貼深色提示，封面之前格見「向千问提问」。2.0s 闊鏡提示去到「阿強」同「亦唔好呻或鬧」。3.5–5.5s 撳黑箭：掣係黑圓白上箭，掣面無字，字卡寫「黑圓上箭」，同 caption「畫面無字」一致。mid_beat 用已授權嘅 `qwen_1_typed` 黑箭掣心，冇發明「发送／Send」。5.5s 起出覆訊。

覆訊同 caption「得體商量加班覆訊」係同一句 BUTTONS Final，唔係另一段假稿：

> 收到，老闆。呢個週末嘅急單我可以配合處理，不過想同你確認下預計要幾多時間，同埋有冇補休或者加班費安排？我可以星期六上午先到公司開工，睇下情況再同你匯報進度。麻煩你俾個指示，我盡快跟進。阿強

0.0s、6.0s、r3c、CTA 之後格都係呢句。換行喺「安／排」，「排？」接住「我可以星期六上午…阿強」。紫圈圍住首句「收到，老闆。呢個週末嘅急單我可以配合處理，不過想同你」，冇蓋住補休、加班費、星期六上午、阿強。

扣 2 分：第 3 步叫撳「复制」，6.0s 箭咀同紫圈指住覆訊首句；右上角只得未標字嘅複製 glyph（疊頁）、垃圾桶、chevron，「复制」「复制为Markdown」六個字唔喺掣上。2.5–3.0s 同附件 r1c 特寫右緣裁走提示尾（署名停喺「阿」、公函尾被切）。2.0s 闊鏡仲有成句，所以唔係假 composer。

唔升 Critical：畫面做得到 caption 講嘅三步，覆訊唔係假 UI，亦唔係中段被裁走嘅另一句。

證據：0.0s／2.0s／2.5s／4.0s／6.0s；r1c／r2c／r3c；6.0s 右上角放大。

## R3 · 封面誠實：**9**／10

**Critical：** 無

0.0s 大字係「通義千問／加班覆訊／即出稿」。之前格係空白方向嘅千问 composer，之後格係 BUTTONS Final 成句，包括補休、加班費、星期六上午、阿強。得益類型同工具名冇掛錯。CTA 8.5s 用同一張之後格，句尾仍然係阿強。

扣 1 分：定B 0.95× 令之後格大約十餘像素高，停低先讀得晒。大字一秒就知係加班覆訊稿，證明句本身唔係海報字號。呢個係字號，唔係掛羊頭。我唔為追 1.5× 要求切短訊。

證據：0.0s 兩行放大；8.5s 之後格；附件 cover／cta。

## R4 · 工具／產品準確：**9**／10

**Critical：** 無

產品係通義千問／千问。入口係 qianwen.com，caption 同 landing 都係呢個 host。送出係黑圓白上箭，字卡「黑圓上箭」，掣面無 Send，同 BRIEF「畫面無 Send／发送」一致。4.0s 有「你好，我是千问」。冇 Guest 掣，冇免登入主張，冇把登入牆講成免登入。公開 slug 係 `qwen-weekend-ot-reply`；舊 mistral 路徑只係搬頁 stub。

扣 1 分：片內冇「登录」橫額。登入事實靠 caption 同 landing 嘅披露，唔靠觀眾喺呢 9 秒睇到嘅橫額。披露句有「以當日介面為準」圍住，唔係禁句。

證據：caption #開千问／#注意；4.0s／5.0s 黑箭；live mistral stub；landing「登录」出現、Guest＝0。

## R5 · 文案嚴謹：**7**／10

**Critical：** 無

Caption 有三步、掣名、畫面無字、虛構、按實際改、AI 可能錯、自行核對、密碼句、qwen slug、每日中午。冇留言 1，冇 07:00，冇 Collab，冇 Guest，冇免登入。Hook 係陳述句。「想稍後再跟？可先收藏本則。」係收藏，唔係空 workflow。密碼頁在：landing 同 `/workflow/` 都有 jdtech3。頁寫 noon-only、未接 shortcode，同 BRIEF 一致。

扣 3 分：caption「畫面可見『登录』banner」超前過片內像素。Caption「本則逐步截圖」指向嘅頁寫「截圖未放入」「生成句子未核對，呢頁唔引用」，五個 `qwen_*.png` 都未嵌入。同一頁可抄提示係陳小姐／朝早十點至下午兩點／老闆您好／改短或下星期補假，而且叫人見到加班費就當亂加刪走；片內係阿強／星期六上午／補休或者加班費。密碼句出現兩次，屬冗餘，唔係空承諾。

證據：caption；live 頁陳小姐段同「先刪走」句；`/workflow/` jdtech3；片內 0.0s 覆訊。

## R6 · 結構節奏：**8**／10

**Critical：** 無

9.000s、1080×1920、30fps、270 幀。0s 已經係結果卡，之後格有成句覆訊。10fps 幀差：1.5s 切第 1 步（10.37），早過 2 秒；2.3s 第 1 步再推近（3.84）。3.5s 切第 2 步（8.42），3.9／4.0／4.3s 黑箭動作，係 mid_beat。5.5s 切第 3 步（11.90）。7.5s 切 CTA（11.23）。片長 ≤15s。音軌 AAC，mean_volume −17.4 dB，max −4.3 dB，有聲墊；我冇跑語音辨認，唔把音軌當旁白證據。

扣 2 分：8.8s／8.9s 對 CTA 嘅幀差再升起（3.67、3.43），尾約 0.2 秒交叉淡，唔係硬 hold。2.3s 嗰下推近同時裁走提示右緣，節奏上多咗一次睇唔完嘅特寫。

證據：ffprobe；10fps 幀差 0–9s；7.5s／8.5s 字卡仍係追蹤 JD／每日中午。

## R7 · 合規／字形：**9**／10

**Critical：** 無

Caption 正文係繁體粵語。公開 caption 入面嘅簡體係 BRIEF 點名嘅 UI 原文：问、复制、登录（#開千问、向千问提问、#撳复制、「复制」、「登录」）。片上字卡同樣用開千问、撳黑箭、撳复制、向千问提问。覆訊用老闆、補休、星期六上午、阿強。千问自己嘅建議句「需要我帮你调整语气，提供几个不同版本的备选吗？」係產品簡體，喺覆訊下面，唔係我哋寫嘅 caption。冇日文，冇 Pip。

扣 1 分：hashtag 同步驟名把问、复制帶入公開 caption，caption 冇另加一句「千问介面係簡體」。BRIEF 寫呢組簡體披露即可，唔當 Critical。

證據：caption 逐字掃描；0.0s／2.0s／6.0s 字卡同 UI。

## R8 · 可傳性／場景：**8**／10

**Critical：** 無

場景係香港返工、老闆 WhatsApp 叫週末加班、怕得罪人又唔想無條件答應。署名阿強。意圖係抄一段得體商量覆訊，唔係轉發呢則片。0.0s 同 6.0s 嗰句可以對住畫面核：配合處理、問幾多時間、問補休或者加班費、星期六上午先到、再匯報、阿強。痛點同結果都清楚。

扣 2 分：caption 冇印全句，跟連結去到嘅頁又係另一套陳小姐稿，而且叫人刪加班費。即用結果喺片內齊，喺「片 → 頁」呢條路接唔成同一句。字號細，停低先抄得走。

證據：0.0s／6.0s 全文；caption #撳复制 冇印 BUTTONS Final；landing 可抄提示段。

## R9 · 吸引力：**8**／10

**Critical：** 無

0–2 秒有結果卡：大字「加班覆訊／即出稿」，之前 composer 對之後有成段覆訊，紫圈已經喺首句。陌生人一秒知睇完攞到一段週末加班商量覆訊。1.5s 就入第 1 步，唔係填料開場。片尾「追蹤 JD／少啲試錯／每日中午、粵語 AI 3 步」。工具名係真千问，覆訊係真 BUTTONS Final，唔靠假結果或假工具。

扣 2 分：老闆臨時叫加班呢個衝突寫喺 caption，片頭大字冇再講一次。證明句大約十餘像素，第一眼靠大字同之前／之後，唔靠讀完阿強嗰句。片尾係系列追蹤句。

R9 仍係 8。假結果否決線唔成立：封面之後格就係片內嗰句，四個必備詞都喺度。

證據：0.0–1.5s；8.5s「每日中午」；0.0s「星期六上午…阿強」。

## Critical 清單

（空）

中段裁否決線我對過四個詞：補休、加班費、星期六上午、阿強。0.0s、5.5s、6.0s、r3c、CTA 之後格都見得到；「安排」只係換行，唔係裁走下半句。定B zoom 0.95× 唔當 Critical。登入、host、Guest、免登入、留言 1、朝早檔期、錯 slug、假覆訊，都冇摸到否決線。

## R10 · 只記不評

`layout_PASS（定B）` 已簽：tip r1c／r2c／r3c ＝ **27.6／28.9／23.8** ≤40，Art「圈心＝掣心 PASS」，LAYOUT-SIGNOFF 2026-10-30 22:39，ZOOM-WAIVER 接受 gates VERDICT FAIL（cover after／r3 close zoom **0.95×**）同 qa FAIL×10。呢票唔再審箭尖、圈心、safe zone，R10 唔入 8.22。人眼條件我另核過：覆訊冇中段裁，所以 waiver 用得。唔建議為追 1.5× 切走「補休／加班費／星期六上午／阿強」。

## 若 PASS：仍建議改進（非阻擋）

均分 8.22 已過閘。下面唔阻擋呢票 PASS，noon 前最好補，免得觀眾跟連結抄錯一句。

1. 片內補一格「登录」橫額，先至留 caption「畫面可見『登录』banner」。唔好改成免登入、Guest、唔使登入、未登入亦可對話。
2. Landing 可抄示範要同片一致：阿強、星期六上午、補休或者加班費、開頭「收到，老闆」，以及 BUTTONS Final 成句。而家係陳小姐、朝早十點至下午兩點、老闆您好、改短或下星期補假，而且寫明加班費當亂加刪走。截圖未放入。Caption 叫呢條 URL 做「本則逐步截圖」，頁未跟上。本票冇改 `reels/`。
3. 第 3 步若叫撳复制，特寫要見到「复制」或「复制为Markdown」，箭咀指住個 glyph。而家 6.0s 箭咀指住覆訊首句，glyph 冇字。
4. CTA hold 到最後一幀。而家約 8.8s 起有淡出。
5. 第 1 步特寫右緣唔好再切「阿強」同公函尾；2.0s 闊鏡已經有全句，特寫跟齊就得。

以下今次已過，重出時保留：host＝qianwen.com、slug `qwen-weekend-ot-reply`、CTA「每日中午」、封面大字通義千問＋加班覆訊／即出稿、黑圓白上箭無 Send、BUTTONS Final 全文入畫、虛構同自行核對、密碼頁 jdtech3、UI 簡體掣名唔當 Critical、定B 0.95× 唔好換成長度去追 zoom。
