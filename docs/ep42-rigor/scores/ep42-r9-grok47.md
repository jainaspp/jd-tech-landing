# Ep.42 rigor score · Grok 4.7

- **Model:** Grok 4.7
- **Time:** 2026-10-20 21:50 HKT
- **This file is one vote.** Overall Share still needs a majority PASS across Grok 4.7, Kimi K3, and GLM 5.3.
- **Reel sha256:** `873c4a2eb90c832050db7435c9a4337cf5c9b2a4ac51148b6cd5bc1a69b6da94`（附件 `reel.mp4`；對得上 Art handoff）
- **Contact sha256:** `948225412c760f5206c7a96f12a322e22d5b69054e92381ff78d5895367ca813`（附件 `contact.png`；對得上 Art handoff）
- **Caption sha256:** `68843b318fe7aeaa017d92c2702c0eaed4b6090c253876cd95b77be5f89a0e4c`（附件 `caption.txt`）
- **Art APPROVED 唔當加分。** 閘同 verify_motion 只係背景；下面扣分照切句、錯框、loop fade 計。
- **Path:** `docs/ep42-rigor/scores/ep42-r9-grok47.md`。未改 `reels/` 或產品頁。

## R0 · 對 PP O 站立原句：**無 Critical**

凍結檔係附件 `origin-request.md`。六段都標「沿用站立，非本則新請求」，原句冇改寫成呢集新題材；文末執行對照自己標明「非原句」。呢集冇新工具點名。

| # | 站立原句 | 成品對照 | 判定 |
|---|---|---|---|
| 1 | 朝早 07:xx Share 停。每日只發一則，12:00。 | 頁面 `<time>` 係 `2026-10-21T12:00+08:00`。Caption、CTA 都係「每日中午」。Caption／頁面正文搜唔到「朝早」「07:00」。原帖 shortcode 未接，未 Share。 | 無 Critical |
| 2 | 我要全8才可以。 | 呢票用均分 ≥8、R9≥8、Critical=0。唔降門檻。 | 無 Critical |
| 3 | 冇人睇有用？ | 下面 R9 另計，門檻 ≥8。 | 無 Critical |
| 4 | 未達標就整則重做；禁止改 caption 頂發。 | 呢集係新片，唔係用舊 FAIL 片改文頂。`unlocked=false`。頁寫「預定 2026-10-21 12:00」「未接 shortcode」。 | 無 Critical |
| 5 | UI 截圖歸 IG 內容素材搜集師；KOL 停常規截圖。 | 頁上四張係真 PNG（見下表），同當日 Guest 畫面同 BUTTONS.md 對得上。評分包冇職位交接單，唔當作成品違規。 | 無 Critical |
| 6 | 鎖題必須有凍結檔 `origin-request.md`，只准 PP O 原句。無此檔不准 Share。 | 附件有此檔，原句同「非原句」分開。 | 無 Critical |

證據：附件 origin-request 第 1–6 條；`reels/lumo-delay-reply/index.html` 第 138、234、259 行；caption 全文。公開集數寫第 42 集，同 slug Ep.42 一致；內部 series-counter 停喺 41 係未 Share 嘅操作規矩，唔當 R0 違規。

## 總評：**PASS**

R1–R9 均分 **8.56**（77/9）。R9＝8。Critical＝0（含 R0）。本票 PASS。未代發。

## R1 · 事實嚴謹：**9**／10

**Critical：** 無

公開事實對得上來源。Guest 免登入：空白畫面有 Sign in／Create a free account，composer 仍然可打；Proton 說明寫可以唔使帳戶、以 guest access 開有限對話，Guest 對話每個 session 結束會清。掣名：空白／貼字後見「Ask anything…」；紫色圓箭面無字，字卡同頁面都寫無障礙名稱 Start generating；回覆動作提示係 Copy。覆訊同 BUTTONS.md 同 `lumo_3_after.png` 一致：陳先生、星河貿易、延遲約 3 個工作天、本週五前、請回覆收貨時段，尾段另問聯絡電話。公司同客人名標明虛構。冇寫免費無限，冇寫官方支援香港，冇教 VPN。

扣 1 分：`index.html` 第 162 行 alt 話空白圖「右下角紫色圓箭」。`lumo_0_before.png` 嘅 composer 只有 Ask anything…、Tools、麥克風、Lumo 2.0 Max，紫箭要去 `lumo_1_typed.png` 貼咗字先出現。Figcaption 冇再講錯。

證據：`lumo_0_before.png`、`lumo_1_typed.png`、`lumo_3_after.png`、`lumo_4_copy.png`；BUTTONS.md；`index.html` 第 142、162、175、187、212、222、226–229 行。2026-10-20 再探：`https://lumo.proton.me/guest`、`https://proton.me/lumo`、getting-started、lumo-privacy 都係 HTTP 200。Getting started 寫 Enter 或 Send；頁面有講今集畫面係無字紫箭，冇當官方掣名。

## R2 · 示範一致：**8**／10

**Critical：** 無

三步同 caption 同字卡對得上，掣名 verbatim。1.50s 開 Guest：How can I help? 下面係貼好嘅延遲交貨提示，星河貿易／陳先生／本週五前睇得到；封面「之前」先至係 Ask anything…。3.50–4.30s 撳紫箭：圓箭喺框入面，掣面無字，字卡先寫 Start generating。5.50s 撳 Copy：成段覆訊（包括本週五前同星河貿易敬上）同 Copy tooltip 同框。

扣 2 分：2.30s 特寫紫框大部分喺提示上方空白，底邊切過第一行，箭咀先指向正文。6.30s 特寫紫框打喺 Copy 左邊一塊空白，Copy 氣泡喺框外；呢格睇到嘅字係「話或查詢窗口嗎？」，唔係覆訊正文。Cover／CTA「之前」行尾切到「Lun」。

證據：reel 1.50s／2.30s、3.50s／4.30s、5.50s／6.30s；附件 `r1c`、`r2c`、`r3c`；`lumo_1_typed.png`、`lumo_4_copy.png`。`lumo_2_send.png` 頁面冇引用，直播 404，同 draft「stub 唔用」一致。第 2 步圖係同一張 `lumo_1_typed.png`，figcaption 有講。

## R3 · 封面誠實：**8**／10

**Critical：** 無

大字「Lumo／延遲交貨覆訊即出」＝片入面真係出咗嘅延遲交貨覆訊。0.00s 已有「之後」；0.50–0.80s 圈住「陳先生您好，」。5.50s 同 `lumo_3_after.png` 有完整「延遲約 3 個工作天…預計於本週五前完成發貨」。唔係掛羊頭。

扣 2 分：封面「之後」正文被裁到中間斷開，睇得見嘅係「發貨時間會延遲約3個工」下一行跳去「前完成發貨。」「作天。我們已加緊處理，預計於本週五」唔喺封面。淨係睇封面會讀錯貨期。另外「Lumo 2.0 Max」切成「Lun」。Chips 只見 JD TECH；draft 寫嘅「Lumo｜3步」粒 chip 封面冇有。大字本身冇講錯，所以唔升 Critical。

證據：reel 0.00s／0.50s／0.80s；附件 `cover`；reel 5.50s；`lumo_3_after.png`。

## R4 · 工具／產品準確：**9**／10

**Critical：** 無

工具係 Proton Lumo Guest，入口 `https://lumo.proton.me/guest`，唔係登入牆當免登入。畫面有 Lumo AI、Lumo 2.0 Max、Guest 帳戶卡。送出係紫色圓箭；頁面同 caption 都寫按鈕面無字，Start generating 係無障礙名稱。Copy 係回覆動作 tooltip，同 `lumo_4_copy.png` 一致。

扣 1 分：字卡把 Start generating 印喺步驟標題，掣面始終冇呢串字。空白圖 alt 先至把紫箭安錯畫面（扣分已計喺 R1，呢度只係工具呈現）。

證據：BUTTONS.md「Guest mode, not signed in」「Start generating」「Copy」；`index.html` 第 142、175、215 行；`lumo_1_typed.png` 紫箭、`lumo_4_copy.png` tooltip。

## R5 · 文案嚴謹：**9**／10

**Critical：** 無

Caption 三步、掣名、畫面無字、虛構星河貿易／陳先生、關窗會清、AI 要自己核對，都齊。冇「留言 1」，冇朝早，冇 Collab，冇叫人轉發。密碼句係「密碼喺網頁（個人檔連結）」，頁尾同 `/workflow/` 都寫住 jdtech3，workflow 頁 HTTP 200。CTA 係「收埋呢則」同「追蹤 JD／少啲試錯／每日中午」。逐步截圖有真圖。

扣 1 分：caption 叫人抄「得體延遲交貨短訊」，冇提同一氣泡尾段「需要加入聯絡電話或查詢窗口嗎？」唔好抄。頁面第 188、195、212 行有寫。中段「想留低慢慢跟？收埋呢則先。」同步驟無關，但唔係空承諾。

證據：附件 caption；`index.html` 第 187、212、222、234、259 行；`https://jainaspp.github.io/jd-tech-landing/workflow/` HTTP 200，頁上密碼 jdtech3。

## R6 · 結構節奏：**8**／10

**Critical：** 無

9.000s、1080×1920、30fps、270 幀。0s 已經係結果卡。0.50–0.80s 圈「之後」第一行，early motion 喺 2 秒內。Step 1 約 1.50–2.30s。Mid-beat 紫箭特寫約 3.50–4.30s。Step 3 約 5.50–6.30s。CTA 7.50s。片長 ≤15s。音軌 AAC，mean_volume 約 −17.4 dB，唔係靜音；畫面冇口播字幕。我冇逐秒聽出有冇人聲。

扣 2 分：draft 寫尾段無 fade。8.70s CTA 底下已經透出封面「延遲交貨覆訊即出」；最尾一幀返封面，仲透住「少啲試錯」。同 handoff `loop_seam≈0.30` 一致，但係 fade，唔係淨 hold。6.30s 呢下 mid 之後嘅特寫打唔中 Copy。

證據：ffprobe duration 9.000s；抽幀 0.00／0.50／0.80／1.50／2.30／3.50／4.30／5.50／6.30／7.50／8.70s 同片尾；contact sheet `cover f40` 至 `cta f35`。

## R7 · 合規／字形：**9**／10

**Critical：** 無

公開 caption 同落地頁正文簡體專用字探測為空，冇日文，冇 Pip。覆訊用「團隊／訂單／關係／發貨／時間／預計／週／對／請／聯絡／詢／嗎」。Caption 粵語，覆訊係書面繁體，頁面有講「覆訊跟提示用繁體中文」。

扣 1 分：側欄同細字未逐格審完。Cover 切出嘅「Lun」係裁字，唔係簡體，但係公開畫面殘字。

證據：caption、`index.html`、draft 簡體探測；`lumo_3_after.png` 覆訊 crop；reel 5.50s。

## R8 · 可傳性／場景：**9**／10

**Critical：** 無

香港客人 WhatsApp 追貨，3 步抄一段得體延遲通知，公司同客人虛構。意圖係貼去客人對話，唔係轉發呢則片。5.50s 同網頁有成段可核對嘅短訊。

扣 1 分：封面「之後」切走「本週五前」，光睇封面抄唔到完整、唔會讀錯嘅貨期，要去 5.50s 或網頁。

證據：caption 首句同 #注意；`index.html` 第 170、199 行；reel 5.50s。

## R9 · 吸引力：**8**／10

**Critical：** 無

0–2 秒有結果：大字「延遲交貨覆訊即出」，0.50s 開始圈住覆訊第一行。陌生人一秒知睇完攞到延遲交貨覆訊。片尾「追蹤 JD／少啲試錯／每日中午、粵語 AI 3 步」，頁上有可抄提示同密碼頁。唔靠假工具。

扣 2 分：頭兩秒圈嘅係「陳先生您好」，唔係「延遲」嗰句；封面正文又切爛，第一眼證明弱過大字。片尾係系列追蹤句，唔係「而家抄去 WhatsApp」呢下拉力。6.30s Copy 框打空，完結前嗰下唔利落。

證據：reel 0.00–0.80s 同附件 `cover`；reel 7.50s CTA；reel 6.30s 同附件 `r3c`。

## Critical 清單

（空）

## 逐步截圖（caption 承諾）

承諾成立。`https://jainaspp.github.io/jd-tech-landing/reels/lumo-delay-reply/` HTTP 200。頁面引用嘅四張都係真 PNG，同 `origin/main` 的 `reels/lumo-delay-reply/` 同一組檔：

| 檔 | HTTP | 尺寸 | 畫面 |
|---|---|---|---|
| `lumo_0_before.png` | 200 | 1920×1113 | 空白 Guest，Ask anything…，無紫箭 |
| `lumo_1_typed.png` | 200 | 1920×1113 | 貼好提示，右下角無字紫箭 |
| `lumo_3_after.png` | 200 | 1920×1113 | 覆訊含本週五前，另問聯絡電話 |
| `lumo_4_copy.png` | 200 | 1920×1113 | 同一覆訊，Copy tooltip |
| `lumo_2_send.png` | 404 | — | 頁面冇引用 |

## 若 PASS：仍建議（非阻擋，唔使整則重拍）

1. Cover／CTA「之後」重裁，令「約 3 個工作天」同「本週五前完成發貨」連返，唔好變成「3個工／前完成發貨」。之前行唔好停喺「Lun」。
2. 2.30s 紫框套正段提示；6.30s 紫框套正 Copy 圖示，唔好打喺左邊空白。
3. `lumo_0_before.png` 嘅 alt 刪「右下角紫色圓箭」。
4. Loop 最後約 0.3s 唔好讓封面同 CTA 互透。Hold 住 CTA，或者硬切返封面。
5. Caption #注意 加一句：覆訊尾「聯絡電話／查詢窗口」留喺 Lumo，唔好抄去 WhatsApp。
6. 封面若仍寫 chips 規格，先補「Lumo｜3步」；而家只有 JD TECH。唔補就唔好當已上畫面。
