# Ep.43 rigor · Grok 4.7

- **Model:** Grok 4.7
- **Time:** 2026-10-24 22:25 HKT
- **This file is one vote.** Overall Share still needs a majority PASS across Grok 4.7, Kimi K3, and GLM 5.3.
- **Scored pack only:** reel sha256 `73c0feaca81c360fdbe348cbcd3c9a764490e3711af6595af67b7826bc18bc3d`. 附件 `reel.mp4` 對得上呢個 sha（9.000s、1080×1920、30fps、270 幀）。
- **Caption sha256:** `c1ad96c54d9b5254fdee91f4a290f8735d4e5ae2a04ed1d259bbef98d6e39939`
- **Art APPROVED 唔當加分。** `layout_PASS` 已簽，R10 只記、唔入均分。tip 只記 **30.6／38.2／29.2**。
- **Path:** `docs/ep43-rigor/scores/ep43-grok47.md`。未改 `reels/` 或產品頁。未代 Share。

## 總評：**PASS**

R1–R9 均分 **8.22**（74/9）。R9＝8。Critical＝0。硬線係均分 ≥8 且 R9≥8 且 Critical＝0。本票 PASS。

Share 目標只係 **2026-10-25 12:00 HKT**。本閘不准 Share，亦冇 Share。

畫面結論係負面：冇可靠醫學證據、唔應該當成防流感方法、唔好用淡鹽水代替流感疫苗。冇假正面「鹽水防到流感」。

## 硬核核對

| 項 | 成品 | 判定 |
|---|---|---|
| Duck.ai 免登入 | Caption「開 duck.ai（免登入）」同「免登入可用」各一。字卡寫「開Duck.ai／Ask anything privately」，大字冇「免登入」三字。1.50s／2.30s 係已貼提示，冇登入牆。今日 https://duck.ai/ HTTP 200，官方 meta：Free、No account required。當日 bundle 寫明 `gpt-6-luna` 的 `availableTo` 包含 Free，Free 預設模型就係 `gpt-6-luna`。 | 已披露。無 Critical |
| CTA | 7.50s 字卡右側讀到「每日中午」。大字「追蹤 JD／少啲試錯」，側欄「粵語 AI 3 步」，chips「JD TECH」「Ep.43 · DUCK.AI」。Caption 末句「每日中午粵語 AI 3 步」。Caption 搜唔到「朝早」「07:00」「留言」「Collab」。片上「朝早」只出現喺引用緊嘅秘方原文。 | 片上係每日中午。無 Critical |
| 封面 | 0.00s 字卡係「Duck.ai」加「秘方有冇根據」，chip「JD TECH」。0.80s 紫圈貼住「之後」第一行「結論：冇可靠醫學證據支持…」。 | 大字在。無 Critical |
| 步驟 | 1.50s「開Duck.ai／Ask anything privately」。3.50s「撳Ask／貼秘方題」，4.30s 藍掣面係 **Ask**，隔離「Fast」「6 Luna」。5.50s「睇結論／未經證實偏方＋來源」，6.30s 圈住結論第一行。 | 三步對得上。無 Critical |
| 結論 | 5.50s 闊鏡第一句係「冇可靠醫學證據支持『每日朝早飲一大杯淡鹽水可以預防流感或殺病毒』」。下一行可見「唔應該當成防流感方法」。字卡副題係「未經證實偏方＋來源」。尾段可見「更唔好用佢代替流感疫苗或其他有效預防措施」。 | 負面結論。無假正面 |
| 虛構＋免責 | Caption「示範係虛構家庭場景；唔好當醫療建議」，再寫「唔好當防流感方法」「AI 可能出錯；請對照官方來源」。 | 已披露。無 Critical |
| 來源 | 5.50s 三張來源卡：`Influenza (seasonal)`／who.int、`Seasonal Influenza - Communic…`／chp.gov.hk、`Preventing Sea…`／cdc.gov。WHO 事實表同 CHP Seasonal Influenza 頁今日 HTTP 200，標題對得上前兩張卡。 | 畫面有三個網域。無 Critical |
| 密碼喺網頁 | Caption「密碼喺網頁（個人檔連結）」兩次。今日首頁同 `/workflow/` 都 HTTP 200，頁上寫住 jdtech3。Caption 唯一條集 URL `…/reels/duckai-health-rumor/` 今日 HTTP 404，repo 亦冇呢頁。 | 密碼頁在。截圖頁唔在。見 R5，無 Critical |
| R10 | LAYOUT-SIGNOFF 22:09 ＋ Art「圈心＝掣心 PASS」。tip 30.6／38.2／29.2 ≤40。qa WARN、0 FAIL。gates VERDICT PASS。r3 close `[680,268,1200,427]`。 | 記一筆。唔再審、唔入均分 |

## R1 · 事實嚴謹：**9**／10

**Critical：** 無

公開產品事實對得上今日來源。https://duck.ai/ HTTP 200。頁面 meta 寫 Free、No account required、Use ChatGPT, Claude, and other AIs。`entry.duckai` bundle（etag 對應 2026-10-23）有 placeholder 原文 `Ask anything privately`，同模型紀錄 `model:"gpt-6-luna"`、`modelName:"GPT-6"`、`modelVariant:"Luna"`、`modelShortName:"6 Luna"`、`availableTo` 包含 Free。Free 預設模型鍵係 `gpt-6-luna`。4.30s 掣面係 Ask，旁邊係 Fast 同 6 Luna。5.50s 回覆頭係 GPT-6 Luna。冇教 VPN，冇寫「官方支援香港」，冇寫無限免費以外嘅官方「Free」。

醫學方向係拆秘方，唔係推薦秘方。5.50s 讀到：冇可靠醫學證據、唔應該當成防流感方法、飲落肚嘅鹽水唔會因此殺死呼吸道或身體入面嘅流感病毒、預防流感的最佳方法係接種疫苗、防護中心資訊包括接種疫苗及保持手部衛生、並無把飲淡鹽水列為（句尾被裁）、疾病控制與預防中心建議每年接種同洗手／咳嗽禮儀、鹽分對要限鈉嘅人唔合適、唔好用佢代替流感疫苗。WHO 頁標題係 `Influenza (seasonal)`。CHP 頁標題係 `Centre for Health Protection - Seasonal Influenza`。兩頁今日 HTTP 200。Caption 已寫唔好當醫療建議、AI 可能出錯、對照官方來源。

扣 1 分：今日冇重開一次 Duck.ai 對話，結論段係成片截圖，唔係即場再問。CDC 卡只讀到 `Preventing Sea…`／cdc.gov；呢個 client 探 CDC 預防頁係 403，冇打開內文。闊鏡右緣切走「屬於未經證實的偏方」中段，世衛嗰句亦切到「世衛／毒引起」，呢兩截冇逐字對返原文。

證據：reel 1.50s／4.30s／5.50s；caption #注意；duck.ai meta 同 bundle 上述字串；WHO、CHP HTTP 200。

## R2 · 示範一致：**8**／10

**Critical：** 無

三步同 caption、draft、字卡對得上，掣名 verbatim。1.50s 開 Duck.ai：頂寫 Duck.ai, by DuckDuckGo，composer 已貼 draft 那條提示（「可以防流感、殺病毒」「有冇可靠醫學根據」「唔好寫假結果」）。2.30s 紫圈貼住提示。4.30s 藍掣面係 Ask，模型短名 6 Luna。5.50s 字卡「睇結論／未經證實偏方＋來源」，闊鏡有三張來源卡 who.int、chp.gov.hk、cdc.gov。6.30s 特寫圈住「結論：冇可靠醫學證據支持…」。Caption「可 Copy 傳屋企群」；5.50s 底欄有圖示，步驟目標係睇結論，唔係撳 Share。`duckai_2_send` 冇入成片。

扣 2 分：封面、「之後」、6.30s 特寫、7.50s CTA 都用同一張切窄嘅結論。右緣把「呢個講法屬於未經證實的偏方」切成「呢個講法屬／方」。三個網域淨係 5.50s 闊鏡約一秒讀到，特寫放大之後唔再見到。Caption 講「畫面」有來源，闊鏡有，特寫冇。

證據：reel 1.50s／2.30s／3.50s／4.30s／5.50s／6.30s；附件 cover、r1c、r2c、r3c；draft 提示原文。

## R3 · 封面誠實：**8**／10

**Critical：** 無

0.00s 大字係「Duck.ai／秘方有冇根據」。同格「之前」係 Ask anything privately，「之後」第一行已經係「結論：冇可靠醫學證據支持『每日朝早飲一大杯淡鹽水可以預防流感…』」，第二行有「唔應該當成防流感方法」。0.40s 紫圈開始收，0.80s 圈住呢一行。陌生人見到嘅得益係「秘方有冇根據」，片入面交到嘅係「冇可靠醫學證據／唔應該當成防流感方法」。唔係掛另一個工具，亦唔係話鹽水有效。

扣 2 分：封面大字係問題句，唔係「冇根據」三字。高亮行右緣同第二行開頭切咗，讀落係「…預防流感／方，唔應該當成防流感方法」。來源卡唔喺封面。方向仍然係負面，所以唔升 Critical。

證據：reel 0.00s／0.40s／0.80s；附件 cover；7.50s CTA 底下同一張「之後」。

## R4 · 工具／產品準確：**9**／10

**Critical：** 無

工具係 Duck.ai（DuckDuckGo），入口 https://duck.ai/，唔係 Perplexity，畫面亦冇 perplexity 殘圖。冇登入牆。官方 meta 寫 No account required。Caption 寫免登入。畫面模型短名 6 Luna、回覆頭 GPT-6 Luna，同 bundle 的 Free 預設 `gpt-6-luna` 一致。藍掣名 Ask，同 caption「撳藍掣『Ask』」一致。Placeholder 同 bundle 原文 `Ask anything privately` 一致。

扣 1 分：字卡只寫「開Duck.ai」，「免登入」三字喺 caption，唔喺步驟大字。composer 係開住嘅，所以唔當登入牆假扮免登入。

證據：caption #開Duck.ai／#撳Ask；reel 1.50s／4.30s／5.50s；duck.ai meta；bundle `availableTo` 含 Free、Free 預設 `gpt-6-luna`。

## R5 · 文案嚴謹：**7**／10

**Critical：** 無

Caption 三步、掣名、免登入、虛構家庭場景、唔好當醫療建議、唔好當防流感方法、AI 可能出錯、對照 who.int／chp.gov.hk／cdc.gov，都齊。冇「留言 1」，冇朝早檔期，冇 07:00，冇 Collab，冇叫人轉發呢則片。「可 Copy 傳屋企群」係傳結論，合 intent=send。「收埋呢則先」係 save。CTA 係「每日中午粵語 AI 3 步，想少啲試錯可以追蹤 JD」，同 7.50s 字卡一致。

密碼句「密碼喺網頁（個人檔連結）」對到今日首頁同 `/workflow/`：兩邊 HTTP 200，頁上寫 jdtech3。呢句唔係空承諾。

扣 3 分：caption 寫「本則逐步截圖：https://jainaspp.github.io/jd-tech-landing/reels/duckai-health-rumor/」。呢條 URL、無尾斜線、同 `index.html` 今日都係 HTTP 404。repo 冇 `reels/duckai-health-rumor/`，sitemap 亦冇。topic 寫明 caption 若寫「本則逐步截圖」，landing 必須有 UI 截圖。而家未有。密碼句重覆兩次，再扣喺呢 3 分裡面。唔升 Critical：Critical 觸發係「承諾密碼但無頁」；密碼頁（個人檔／workflow）在，缺嘅係呢集截圖頁。

證據：caption 全文；首頁 `index.html` 密碼 jdtech3；`/workflow/` HTTP 200；三條集 URL HTTP 404。

## R6 · 結構節奏：**8**／10

**Critical：** 無

9.000s、1080×1920、30fps、270 幀。0s 已經係結果卡。0.00→0.40s 結論區平均差 11.3，0.40→0.80s 平均差 14.7，紫圈喺 2 秒前收埋，早過 early_motion 上限。1.50s 入第 1 步，3.50s 入第 2 步，4.30s Ask 特寫（mid_beat 落在 3.5–5s），5.50s 入第 3 步，6.30s 結論特寫，7.50s CTA。片長 ≤15s。音軌 AAC，mean_volume −17.4 dB，max −4.3 dB，唔係靜音。gates 記 −15.0 LUFS。畫面冇口播字幕。

扣 2 分：draft 寫尾段無 fade。7.50s→8.50s CTA 企穩（平均差 0.96）。8.50s→8.97s 平均差 10.5，8.95s 對封面平均差 0.55。最後大約 0.45 秒由 CTA 淡返封面，等 loop 對到第一幀。gates 的 loop_diff 要呢一下，draft 寫無 fade。係 loop，唔係新醫學主張。

證據：ffprobe 9.000s／270 幀；抽幀 0.00／0.40／0.80／1.50／2.30／3.50／4.30／5.50／6.30／7.50／8.50／8.95s 的平均差。

## R7 · 合規／字形：**9**／10

**Critical：** 無

公開 caption 簡體專用字掃描冇命中（國這過對為會個時後發問門東車長萬與書頭體從應還讓說請據衛一組）。冇日文，冇 Pip。Caption 粵語。畫面提示寫「請用繁體中文（香港用語）」。結論用「證據／傳播／噴嚏／護／請／體」。英文 UI（Ask anything privately、Ask、Fast、6 Luna、GPT-6 Luna、who.int）係產品同來源卡。

扣 1 分：結論右緣切字，切走嗰截冇逐字再掃。畫面用「衛生」的「衛」，係繁體，唔係「卫」。冇因此當簡體。

證據：caption；reel 1.50s 提示；reel 5.50s 結論；簡體專用字掃描 0 命中。

## R8 · 可傳性／場景：**8**／10

**Critical：** 無

香港屋企 WhatsApp 轉「朝早飲淡鹽水防流感」，3 步開 Duck.ai、撳 Ask、睇一句負面結論同源。意圖係抄結論去屋企群，唔係轉發呢則片。虛構場景同唔好當醫療建議喺 caption。5.50s 闊鏡夠讀到「冇可靠醫學證據」同「唔好用佢代替流感疫苗」。

扣 2 分：6.30s 特寫同封面都係切窄結論，抄去群組會抄到「呢個講法屬／方」。Copy 掣唔係呢步嘅圈選目標。要抄齊三段來源，要靠 5.50s 那一秒，或者靠未上線嘅逐步截圖頁。

證據：caption 首句、#睇結論、#注意；reel 5.50s／6.30s。

## R9 · 吸引力：**8**／10

**Critical：** 無

0–2 秒有結果同衝突：大字「秘方有冇根據」，「之前」空白 composer 對「之後」負面結論，0.80s 紫圈已經貼住「冇可靠醫學證據」。陌生人一秒知睇完知呢條秘方有冇根據。片尾「追蹤 JD／少啲試錯／每日中午、粵語 AI 3 步」。唔靠假工具。唔靠「鹽水防到流感」呢種假結果。假結果先會同時觸 R3／R4 的 Critical；呢條冇。

扣 2 分：封面大字係問題，答案喺細字，而且右緣切咗。三張來源卡要等到 5.50s 先清楚。片尾係系列追蹤句，拉力係追蹤，唔係「而家抄去屋企群」呢一下。

證據：reel 0.00–0.80s 同附件 cover；reel 7.50s CTA 右側「每日中午」；reel 5.50s 來源卡。

## Critical 清單

（空）

## R10 · 只記不評

`layout_PASS` 已齊：gates VERDICT PASS，tip r1c／r2c／r3c ＝ **30.6／38.2／29.2** ≤40，Art「圈心＝掣心 PASS」，LAYOUT-SIGNOFF 2026-10-24 22:09，qa status WARN、0 FAIL，r3 close `[680,268,1200,427]`。呢票唔再審箭尖、圈心、safe zone，R10 唔入 8.22。

## 若 PASS：仍建議（非阻擋，唔使整則重拍）

1. Share 之前先上 `reels/duckai-health-rumor/`，放 duck.ai 逐步截圖。而家 caption 唯一條 URL 係 HTTP 404。密碼頁已經在首頁同 `/workflow/`（jdtech3），所以呢票唔當 Critical。頁未上之前，呢句「本則逐步截圖」仍然係空承諾。本席冇改 `reels/`，亦冇 Share。
2. Caption「密碼喺網頁（個人檔連結）」留一次就夠。
3. 封面同 6.30s「之後」拉闊，令「屬於未經證實的偏方」連成一行。而家讀到「呢個講法屬／方」。否定句「冇可靠醫學證據」「唔應該當成防流感方法」要保持喺圈入面。唔好改成鹽水有效。
4. 5.50s 三張來源卡（who.int／chp.gov.hk／cdc.gov）若果係「畫面有來源」的證明，特寫留一截卡，或者 caption 寫明來源喺闊鏡。
5. Loop 最後約 0.45s 由 CTA 淡返封面。Hold 住 CTA 會同 gates 的 loop_diff 打架；要改先同排版一齊改。呢票唔當 Critical。
6. 「免登入」而家喺 caption。字卡可以留「開Duck.ai／Ask anything privately」。唔好改到同掣名 Ask 打架。
7. 首頁仍然寫「每日 07:00・12:00」。呢集 caption 同 7.50s 係「每日中午」。首頁係舊站文案，呢票冇改產品頁。Share 時唔好把 07:00 寫返呢集 caption。
