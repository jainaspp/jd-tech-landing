# Ep.47 REMAKE rigor · Grok 4.7

- **Model:** Grok 4.7
- **Time:** 2026-10-28 22:43 HKT
- **This file is one vote.** Overall Share still needs a majority PASS across Grok 4.7, Kimi K3, and GLM 5.3 on the remake.
- **Scored pack:** reel sha256 `b6de40446f385216c254204d6856aca1db439aa99b0f3cc70005727ffaae6f5a`. 附件 `reel.mp4` 對得上呢個 sha（9.000s、1080×1920、30fps、270 幀、h264+aac）。
- **VOID 舊 sha** `9261a306e4c4bf317545759a9078008907c49a59db205dd1e8047dba56812b2c`。首輪 `ep47-grok47.md` 均分 7.44 係嗰條片。本票唔改嗰個檔。
- **Caption sha256:** `1e488c0105f7163073b6e9651b9219f26d85e7bd203982664d07ce67b2f5e194`（同首輪附件 caption 同一個 sha）。
- **Art／排版雙簽唔當加分。** Remake brief 寫 `layout_PASS` 已簽，R10 唔再審、唔入均分。tip 只記 **31.1／28.6／34.1**。
- **Path:** `docs/ep47-rigor/scores/ep47-grok47-remake.md`。未改 `reels/` 或產品頁。Repo 內 `docs/ep47-rigor/BRIEF.md` 仍係首輪 brief（舊 sha、SIGNOFF 21:47）。本票跟今次附件 REMAKE brief（SIGNOFF 22:34、新 sha），冇覆蓋 BRIEF／RUBRIC。
- **方法：** sha256sum、ffprobe、volumedetect；0.2s 幀差；抽幀 0.00／0.80／1.50／2.40／3.60／4.40／5.60／6.40／7.60／8.40／8.80s。白卡用 tesseract `chi_tra+chi_sim`。Landing、`/workflow/`、`www.qianwen.com` 今日再探。全片再睇過一轉。

## 總評：**PASS**

R1–R9 均分 **8.78**（79/9）。R9＝9。Critical＝0。硬線係均分 ≥8 且 R9≥8 且 Critical＝0。本票 **PASS**。未代發。Share 目標 2026-10-29 12:00，本閘不准 Share。

一句講晒：首輪裁爛嘅 refined 請假短訊，而家喺封面之後格同第 3 步都係三行出齊。host、slug、CTA、禁 Guest／免登入、封面大字都在。複製選單兩個字仍然冇入鏡，片尾約 8.6s 起封面大字疊上 CTA，落地頁截圖檔仍然未放入。呢三項扣分，唔夠 Critical，均分過 8。

## 硬核核對

| 項 | 成品 | 判定 |
|---|---|---|
| host | Caption 一次「開 qianwen.com」。片內 URL 唔出現。`https://www.qianwen.com/` 今日 HTTP 200。Landing 示範入口係 www.qianwen.com，並寫 chat.qwen.ai 今次 capture TLS 失敗、唔係呢集入口。本環境 HEAD `https://chat.qwen.ai/` 得 405。我冇重現 capture 嘅 TLS EOF，亦冇把 chat.qwen.ai 當入口。畫面掣名（向千问提问、发送消息、你好，我是千问、快速／PPT创作／AI生视频）同 BUTTONS 嘅 qianwen.com capture 同一套。 | host 係 qianwen.com。無 Critical |
| Guest／免登入 | Caption、片內抽幀：Guest、免登入、唔使登入、未登入亦可對話＝0。Landing「Guest」只係上一集 Lumo 標題。Landing「免登入」「唔使登入」＝0。 | 禁句冇主張。無 Critical |
| 登录 banner | Caption 寫「畫面可見『登录』banner」。0.00–8.80s 抽幀讀唔到「登录」。鏡頭係 composer／回覆卡，頂欄橫額唔喺畫面。BUTTONS 同 landing 有「登录」「登录可同步历史对话，解锁更多功能」，並寫今次 capture 冇撳登录、登入要求以當日畫面為準。 | 片內睇唔到。扣分喺 R1／R4。無 Critical |
| slug | Caption URL `/reels/qwen-school-leave-msg/`。Live 今日 HTTP 200，title 係第47集請假短訊。禁 slug `qwen-policy-plain` 唔係呢集路徑；landing 相關卡先指向第26集，並寫第26集當日開 chat.qwen.ai、呢集開千问官网。 | 一致。無 Critical |
| CTA | 7.60s／8.40s 側欄「每日中午」「粵語 AI 3 步」。大字「追蹤 JD／少啲試錯」。Caption 末句「每日中午粵語 AI 3 步」。片內同 caption 冇「朝早」「07:00」「留言 1」、Collab。Hook「孩子明早發燒」係故事嘅聽朝，唔係發佈時間。 | 片上係每日中午。無 Critical |
| 封面大字 | 0.00s「通義千問」「請假短訊」「即出稿」。JD TECH。之前格「向千问提问」。 | 大字在。證明句見 R3。無 Critical |
| 步驟 | 1.50s「開千问／向千问提问」，composer 已貼深色提示。3.60s「撳黑箭／发送消息」，黑圓白上箭，有「你好，我是千问」。4.40s 圈住黑圓白上箭，掣面無 Send。5.60s「撳复制／抄請假短訊」。 | 三步對得上。複製菜單字見 R2。無 Critical |
| BUTTONS refined 全文 | 標準句 62 字／52 漢字。0.00s 封面之後格、5.60s 第 3 步、7.60s CTA 之後格都係三行，接埋就係 refined 句。中段「等佢好返返學後，如果學校需要，我會補交醫生紙」在。唔係「（明天）。」接「紙。」，亦唔係「我會補紙。」。 | **逐字成立。** 無 Critical |
| 虛構／政策 | Caption「示範為虛構港家庭請假情景；請按實際情況改寫」「正式請假請自行核對」。片內係小明、小三乙、明天、老師您好、補交醫生紙。Landing 今日林朗＝0、小四甲＝0、班主任你好＝0；小明、小三乙、老師您好在。頁內 2026-10-30 兩次，係「例如」換日曆日子，唔係今次對稿身份。頁寫唔係學校／請假政策意見，亦唔係醫療意見。 | 片同頁同一套虛構稿。無 Critical |
| 密碼 | Caption「密碼喺網頁（個人檔連結）」兩次。Landing 同 `/workflow/` 今日 HTTP 200。`/workflow/` 寫密碼 jdtech3。頁寫未接 shortcode。 | 有頁有密碼。無 Critical |
| R10 | Remake brief：LAYOUT-SIGNOFF 22:34 ＋ Art「圈心＝掣心 PASS」。tip 31.1／28.6／34.1 ≤40。qa WARN、0 FAIL。我冇重跑 reel_qa。 | 記一筆。唔再審、唔入均分 |

## R1 · 事實嚴謹：**9**／10

**Critical：** 無

工具、入口、三步掣有同日來源。Caption 開 qianwen.com。3.60s 有「你好，我是千问」。1.50s 提示讀到小明、小三乙、明天、家長、補交醫生紙、60–100 字、老師您好、唔好寫到似正式公函，同 BUTTONS 港家庭請假 capture 同一套。冇教 VPN，冇寫官方支援香港，冇寫免費無限。虛構同「自行核對」喺 caption。簡體掣名係 BUTTONS 原文。Landing 示範身份已對返片：小明、小三乙、老師您好、refined 句都寫喺第 3 步對稿。

扣 1 分：caption 寫畫面可見「登录」banner，抽幀讀唔到呢四字。我今日冇再開一次未撳登录嘅千问對話，所以「冇撳登录、回覆仍然出到」仍然係 capture 同 landing 嘅記述。`www.qianwen.com` 今日 HTTP 200，足夠核對入口活住，唔夠核對未登入都一定出到稿。

證據：caption；BUTTONS host／登录／refined 段；0.00s、1.50s、3.60s；live `qwen-school-leave-msg` 同 `www.qianwen.com` HTTP 200。

## R2 · 示範一致：**8**／10

**Critical：** 無

三步同 caption 同字卡對得上。1.50s 開千问：composer 見「向千问提问」，提示已貼，深色字。3.60s 撳黑箭：字卡「发送消息」，掣係黑圓白上箭，掣面無字，同 caption「畫面無字」一致。4.40s 圈喺黑箭上。5.60s 第 3 步白卡三行：

> 老師您好，小三乙小明聽朝發燒，所以想幫佢請假
> 一日（明天）。等佢好返返學後，如果學校需要，我
> 會補交醫生紙。麻煩老師，謝謝！家長

Tesseract 把逗號、括號、驚嘆號摺成半形，字形同 BUTTONS 換行一致。接埋係 refined 62 字，有「所以想幫佢請假」「等佢好返返學後」「我會補交醫生紙」「麻煩老師，謝謝！家長」。第一稿「需要請假一日」「稍後會補交醫生紙」「謝謝老師，家長」唔係呢三行。

扣 2 分：5.60s 氣泡下係複製 icon、重新整理、更多，菜單字「复制」「复制为Markdown」冇入鏡。6.40s 箭咀指住短訊正文，唔係指住一個寫住「复制」嘅掣。4.40s 黑箭特寫左右裁咗提示，呢下係掣嘅特寫，短訊正文唔喺嗰格。

證據：reel 0.00s／1.50s／3.60s／4.40s／5.60s／6.40s；BUTTONS re-capture 三行換行同 Final message。

## R3 · 封面誠實：**9**／10

**Critical：** 無

0.00s 大字係「通義千問／請假短訊／即出稿」。之前格係「向千问提问」同 PPT创作、AI生视频、AI生图、代码。之後格係上面嗰三行 refined 全文，左右留白，第三行「會補交醫生紙。麻煩老師，謝謝！家長」明顯短過上兩行，係換行，唔係右緣裁走。得益類型同工具名都對。

扣 1 分：約 0.4s 起紫圈圍住第一行「所以想幫佢」一帶。0.80s 三行仍然在，圈下嘅字比 0.00s 難讀。圈冇把中段刪走。7.60s CTA 用同一張之後格，三行仍在。

證據：reel 0.00s／0.80s／7.60s 之後格；BUTTONS 三行 ink。

## R4 · 工具／產品準確：**9**／10

**Critical：** 無

產品係通義千問／千问，caption 入口係 qianwen.com，唔係把 chat.qwen.ai 當示範入口。送出係黑圓白上箭；caption 寫「撳黑色圓箭（发送消息；畫面無字）」，同 3.60s／4.40s 一致。片內同 caption 冇 Guest、免登入、唔使登入。Landing 相關卡嘅 `qwen-policy-plain` 標明係第26集。

扣 1 分：登录橫額只出現喺 BUTTONS 同 landing，唔出現喺成片。Caption 嘅「畫面可見」對住片本身未對上。頁有寫登入要求以當日介面為準，所以唔升做「登入牆當免登入」。

證據：caption #開千问／#撳黑箭／#注意；reel 3.60s／4.40s；landing 官方說明三條連結；BUTTONS「免登入 is not claimed」。

## R5 · 文案嚴謹：**9**／10

**Critical：** 無

Caption 三步、掣名、畫面無字、虛構港家庭、自行核對、AI 可能出錯，都齊。冇「留言 1」，冇朝早檔期，冇 Collab。密碼句係「密碼喺網頁（個人檔連結）」。`/workflow/` 今日寫住 jdtech3。CTA 係「想稍後再跟？可先收藏本則」同「每日中午粵語 AI 3 步，想少啲試錯可以追蹤 JD」。Landing 第 3 步對稿句同 BUTTONS refined 一致。

扣 1 分：caption 叫條 URL 做「本則逐步截圖」。Live 頁「截圖未放入」仍有 15 次，`qwen_3_after.png` 只係檔名，未嵌入。步驟文字同 refined 句已經在頁上。

證據：附件 caption；live `qwen-school-leave-msg` 同 `/workflow/`。

## R6 · 結構節奏：**8**／10

**Critical：** 無

9.000s、1080×1920、30fps、270 幀。0s 已經係結果卡。0.00→0.80s 封面有紫圈喺度畫（縮圖平均差約 0.3–0.9），早過 2 秒。1.4→1.6s 切第 1 步，3.60s 入第 2 步，4.40s 黑箭特寫，5.60s 入第 3 步，7.4→7.6s 切 CTA。片長 ≤15s。音軌 AAC，mean_volume −17.4 dB，max −4.3 dB，唔係靜音。我冇逐秒聽出係咪人聲。

扣 2 分：7.60–8.60s CTA 企穩（平均差近 0）。8.60→8.80s 平均差 4.07。8.80s 封面大字「通義千問／請假短訊」疊喺「追蹤 JD／少啲試錯」上面，係片尾交叉淡出，唔係硬 hold。之後格三行喺呢一幀仍然讀到。

證據：ffprobe duration 9.000s；抽幀 0.00／0.80／1.50／3.60／4.40／5.60／7.60／8.40／8.80s；0.2s 幀差。

## R7 · 合規／字形：**9**／10

**Critical：** 無

公開 caption 正文係繁體粵語。簡體字只出現喺 UI 引號：千问／向千问提问（问）、发送消息（发）、复制（复）、登录（录）。Hook 大字用繁體「通義千問」「問」。冇日文，冇 Pip。Remake brief 寫呢四組係畫面／BUTTONS 原文，R7 披露即可。Landing 寫「跟畫面簡體字」。請假短訊本身係繁體香港用語：聽朝、幫佢、好返返學、醫生紙、麻煩老師。

扣 1 分：caption 冇另起一句講「介面係簡體」。披露靠引號入面嘅掣名，同 landing 嗰句。

證據：caption 字元掃描（为＝0；问／发／复／录 只喺上述 UI 引號）；reel 0.00s／3.60s／5.60s；landing「跟畫面簡體字」。

## R8 · 可傳性／場景：**9**／10

**Critical：** 無

香港家長聽朝要同班主任請假，3 步之後有一段可以讀完再抄去 WhatsApp 嘅短訊。小明、小三乙、家長署名都標明虛構。0.00s 同 5.60s 由「老師您好」到「家長」出齊，包括補交醫生紙同麻煩老師。意圖係抄短訊，唔係轉發呢則片。Landing 同一句，並寫 AI 加咗電話、學生編號、學校名先刪。

扣 1 分：5.60s 複製掣冇字，光睇 icon 唔知邊個先係「复制」。要照 caption 抄，先對字卡「撳复制」。

證據：caption 首句同 #注意；reel 0.00s／5.60s；landing 第 3 步對稿句。

## R9 · 吸引力：**9**／10

**Critical：** 無

0–2 秒有結果：大字「請假短訊／即出稿」，「之前」係空白提示，「之後」係三行短訊。陌生人一秒知睇完攞到班主任請假稿。片尾「追蹤 JD／少啲試錯／每日中午、粵語 AI 3 步」。唔靠假工具，唔靠假結果。首輪拉低吸引力嘅「（明天）。紙。」喺呢條片嘅封面同第 3 步都唔再出現。

扣 1 分：紫圈先圍第一行，第一眼證明弱過成個氣泡。片尾係系列追蹤句，拉力係追蹤，唔係「而家撳複製」。

證據：reel 0.00–0.80s；reel 7.60s CTA 側欄「每日中午」；reel 5.60s 三行全文。

## Critical 清單

（空）

封面之後格同第 3 步都讀到 refined 全文，所以唔觸「中段被裁 → Critical」。登入、host、Guest、免登入、留言 1、朝早檔期、錯 slug、假結果，都冇摸到否決線。

## R10 · 只記不評

Remake brief 寫 `layout_PASS` 已齊：gates VERDICT PASS，tip r1c／r2c／r3c ＝ **31.1／28.6／34.1** ≤40，Art「圈心＝掣心 PASS」，LAYOUT-SIGNOFF 2026-10-28 22:34，qa status WARN、0 FAIL。呢票唔再審箭尖、圈心、safe zone，R10 唔入 8.78。4.40s 黑箭特寫左右裁提示，係掣嘅特寫；封面同 5.60s 短訊第三行右緣留白，歸 R2／R3 已讀齊，唔係推翻圈心簽名。我冇打開 qa JSON。

## 若 PASS：仍建議（非阻擋，唔使整則重拍）

1. 第 3 步開複製選單，見到「复制」或「复制为Markdown」，箭咀指住個掣。而家 5.60s 只有複製 icon，6.40s 箭咀指住短訊正文。
2. 嵌入 `qwen_3_after.png`（同可選 `qwen_4_copy.png`），先至完全對上 caption「本則逐步截圖」。頁文已經對到小明、小三乙、老師您好同 refined 句。本票冇改 `reels/`。
3. 片內補一格「登录」橫額，先完全對上 caption「畫面可見」。唔好加免登入、Guest、唔使登入、未登入亦可對話。
4. CTA hold 到最後一幀。而家約 8.6s 起封面大字疊上「追蹤 JD」。
5. 封面紫圈可以圍實成個之後氣泡。三行已在，圈而家只圍第一行「所以想幫佢」一帶。

以下已過，noon Share 前保留：host＝qianwen.com、slug `qwen-school-leave-msg`、CTA「每日中午」、封面大字通義千問＋請假短訊／即出稿、黑圓白上箭無 Send、refined 三行全文、虛構同自行核對、密碼頁 jdtech3、UI 簡體掣名唔當 Critical。本閘唔准 Share。
