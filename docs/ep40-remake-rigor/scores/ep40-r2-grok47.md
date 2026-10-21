# Ep.40 remake rigor ROUND 2 · Grok 4.7

- **Model:** Grok 4.7
- **Time:** 2026-10-21 14:45 HKT
- **This file is one vote.** Overall Share still needs a majority PASS across Grok 4.7, Kimi K3, and GLM 5.3.
- **Scored pack only:** reel sha256 `f4a91588c608bbddc855097fe8e35b21386b543c7e5d99381b5670ca70a04459`. Old `636910ef…` / `c47c655f…` are not this vote.
- **Reel sha256:** `f4a91588c608bbddc855097fe8e35b21386b543c7e5d99381b5670ca70a04459`（附件 `reel_4c8d.mp4`；對得上 Art 覆簽）
- **Contact sha256:** `aaa8cdc70c40f1e7c38c235570e61e7fa430e30a4a92bd56c5895634fff5a4a2`
- **Caption sha256:** `ed6e73767cd884739ecad19f1b2ccd68c5c80c2a2af643e29fb994e6f9264628`
- **Art APPROVED 唔當加分。** `layout_PASS` 已簽，R10 唔再審、唔入均分。
- **Path:** `docs/ep40-remake-rigor/scores/ep40-r2-grok47.md`。未改 `reels/`。

## CTA 硬核（每日中午）

片尾字卡係 **每日中午**。7.50s、8.40s、8.70s 字卡右下都讀到「每日中午」同「粵語 AI 3 步」。大字係「追蹤 JD／少啲試錯」。Caption 末句係「每日中午粵語 AI 3 步，想少啲試錯可以追蹤 JD。」

成片抽幀同 caption 全文都冇「朝早」，冇「07:00」。Round 1 燒入舊 sha 嘅「朝早同中午」唔喺呢條片。

`origin/main` `27d5b1c` 嘅 `reels/brave-leo-parent-meeting/index.html` 頁尾係「每日中午有粵語 AI 3 步…」。同日再探 live（HTTP 200）對得上：`每日中午有粵語` 有，`朝早同中午`、`07:00`、`同日朝早` 計數都係 0。密碼 `jdtech3` 喺頁尾。`/workflow/` HTTP 200，頁上有 `jdtech3`。

## R0 · 對 BRIEF-R2 站立句：**無 Critical**

呢輪附件冇 `origin-request.md`。R0 跟 BRIEF-R2 同 RUBRIC 已經寫明嘅站立句，唔另造凍結檔。

| # | 站立句 | 成品對照 | 判定 |
|---|---|---|---|
| 1 | 片尾 CTA 係每日中午。禁「朝早／07:00」。 | 7.50–8.70s 字卡「每日中午／粵語 AI 3 步」。Caption 末句同頁尾（`27d5b1c` 同 live）都係每日中午。成片、caption、呢版頁面搜唔到「朝早」「07:00」。 | 無 Critical |
| 2 | 我要全 8 先可以。均分 ≥8、R9≥8、Critical=0。 | 呢票用呢條，唔降門檻。 | 無 Critical |
| 3 | 冇人睇有用？ | 下面 R9 另計，門檻 ≥8。 | 無 Critical |
| 4 | 未達標就整則重做；禁止改 caption 頂住發。 | 呢票只評新 sha `f4a91588…`。舊 sha 唔當呢集。 | 無 Critical |
| 5 | `layout_PASS` 已簽，唔再審劃位。 | 接受 LAYOUT-SIGNOFF 同 Art「圈心＝掣心 PASS」（tip 33.3／26.0／34.3）。R10 唔入均分。 | 無 Critical |
| 6 | Landing 未同步：片尾 CTA 已係中午就當 WARN，唔當 Critical。 | 複查時 repo `27d5b1c` 同 live 頁尾已經係每日中午。呢項而家唔使開 WARN。 | 無 Critical |

## 總評：**PASS**

R1–R9 均分 **8.56**（77/9）。R9＝8。Critical＝0（含 R0）。本票 PASS。未代發。

## R1 · 事實嚴謹：**9**／10

**Critical：** 無

公開步驟對得上來源。Brave 2025-09-29《Introducing Ask Brave》寫 Ask Brave 喺 search.brave.com，掣名 Ask，喺 Search 隔離，免費、任何瀏覽器都用到。`search.brave.com/help/ai`（2026-10-21 再探，HTTP 200）叫呢個功能 Ask Brave，係較長答案同可以追問。成片同 caption 冇寫官方支援香港，冇教 VPN，冇寫免費用量無限。

示範題「星河小學」caption 同頁都標虛構。3.50s 提示係「請用繁體中文列 5 點講稿：開場、家校溝通重點、在家三個做法、想老師幫手的一件事、多謝。」5.50s 側欄五點對得上。頁上 `step-3-after.png` 係同一五點，主欄仲有逐點講稿，留低「[孩子姓名]」空位。

扣 1 分：caption 首句「一句出講稿」。成片停喺五點大綱；成篇講稿喺逐步截圖主欄，唔喺 9 秒片入面讀得完。步驟句自己寫「五點大綱」，所以唔升做無來源硬事實。

證據：caption；reel 3.50s／5.50s；`step-0-before.png`、`step-3-after.png`；`https://brave.com/blog/ask-brave/`；`https://search.brave.com/help/ai`。

## R2 · 示範一致：**8**／10

**Critical：** 無

三步同 caption 對得上，掣名係 Ask。

1. 1.50s 字卡「撳Ask」，副題整句「Ask anything, find anything…」。`step-0-before.png` 搜尋列同一句預設字，Ask 喺列入面。
2. 3.50s 字卡「撳Ask／送出家長會題（Ask，唔係 Search）」。提示打喺搜尋列。4.30s 箭咀指住寫住 Ask 嘅掣。
3. 5.50s 字卡「睇五點稿／Ask Brave 側欄繁中」再加最後一字。Caption 同 `step-3-after.png` 係「大綱」。抽幀 OCR 喺「綱／網」之間跳，兩字易混，唔當錯字成立。畫面五點：開場（約30秒）、家校溝通重點（約1分鐘）、在家三個做法（約1.5分鐘）、想老師幫手的一件事（約1分鐘）、多謝（約30秒）。

扣 2 分：2.30s 特寫將預設字裁到「, find anything…」，「Ask anything」喺框左邊出面。4.30s 特寫將提示左邊裁走，「一件事」睇落變「件事」。Cover「之後」只顯示第 1、2 點。闊鏡同字卡有全文，所以唔升 Critical。

證據：reel 1.50s／2.30s、3.50s／4.30s、5.50s；caption #開Ask／#撳Ask／#睇五點稿。

## R3 · 封面誠實：**8**／10

**Critical：** 無

0.00s 大字「Brave Ask／家長會／五點稿」。5.50s 五點都喺側欄。封面承諾嘅結果片入面有。唔係掛羊頭。

扣 2 分：封面「之後」卡只見到第 1、2 點。淨係睇封面唔證明「五」點。五點喺 5.50s 先至一齊出現。大字本身冇講錯。

證據：reel 0.00s、5.50s；contact `cover f40`。

## R4 · 工具／產品準確：**9**／10

**Critical：** 無

工具係 Brave Search 嘅 Ask／Ask Brave，入口 `search.brave.com`。畫面有 brave 標誌、搜尋列、Ask 掣、左側 New conversation。Caption 叫人撳 Ask、唔好撳 Search。頁面寫明唔係 Brave 側欄 Leo。截圖由首頁去到 Ask 結果，中間冇登入牆。官方寫免費、任何瀏覽器。頁文有「登入同用量以你當日畫面為準」，冇將登入牆寫成免登入。

扣 1 分：5.50s 特寫讀到 New conversation 同五點，讀唔到 UI 自己印住「Ask Brave」四個字。呢四個字喺字卡同 `step-3-after.png` 頂欄。Slug 仍然係 `brave-leo-parent-meeting`，成片同標題用 Brave Ask，唔係 Leo。

證據：reel 1.50s／5.50s；`step-0-before.png`、`step-3-after.png`；頁面第 156、204、245 行；Brave Ask 公告。

## R5 · 文案嚴謹：**9**／10

**Critical：** 無

Caption 三步、掣名 Ask、Search 對照、虛構星河小學、改返繁體、密碼句，都齊。冇「留言 1」，冇朝早，冇 07:00，冇 Collab，冇叫人轉發呢則片。「收埋呢則先」係 save。「傳家長群」係傳份稿。CTA 係每日中午。密碼句指向嘅頁有 `jdtech3`，`/workflow/` 亦有。

扣 1 分：密碼句喺 caption 寫咗兩次。頁文「最後核實：2026-10-18」早過呢次重渲。

證據：caption 全文；`index.html` 第 221、245 行；live 頁尾；`/workflow/` HTTP 200。

## R6 · 結構節奏：**8**／10

**Critical：** 無

9.000s、1080×1920、30fps、270 幀。0s 已經係結果卡（之前 Ask／之後大綱）。1.50s 入第 1 步，早過 2 秒。第 2 步 Ask 特寫約 3.50–4.30s。第 3 步約 5.50–6.30s。CTA 7.50s 起。片長 ≤15s。音軌 AAC，mean_volume 約 −17.4 dB，max 約 −4.3 dB，唔係靜音。我冇逐秒聽出係咪人聲。

扣 2 分：8.80s CTA 同封面疊住，封面「Brave Ask／家長會／五點稿」透出嚟，「每日中午」仍然讀到。8.90s 返封面。係 loop fade，唔係淨 hold。

證據：ffprobe duration 9.000s；抽幀 0.00／1.50／3.50／5.50／7.50／8.70／8.80／8.90s；contact 由 `cover f40` 到 `cta f35`。

## R7 · 合規／字形：**9**／10

**Critical：** 無

Caption 係繁體粵語。簡體專用字掃描冇命中（「分」繁簡同形）。冇日文，冇 Pip。五點用「溝通／點／個／鐘／謝／側欄」。Caption 有「畫面或有簡體字請改返繁體」。`step-3-after.png` 主欄講稿係書面繁體，空位係「[孩子姓名]」。

扣 1 分：側欄細字同講稿主欄我冇逐字對簡體表。英文 UI（New conversation、Finished、Ask）係產品介面，唔係 caption。

證據：caption；reel 5.50s；`step-3-after.png`。

## R8 · 可傳性／場景：**9**／10

**Critical：** 無

香港家長會、講五分鐘、空白稿。三步之後有一份可以改完傳去家長群嘅五點，學校名虛構。意圖係傳份稿，唔係轉發呢則片。5.50s 五點讀得晒。頁上主欄有逐點講稿，抄之前要改。

扣 1 分：封面只見到兩點。要抄齊五點，要去 5.50s 或者網頁。

證據：caption 首句同 #注意；reel 5.50s；`index.html` 可抄提示同第 194 行。

## R9 · 吸引力：**8**／10

**Critical：** 無

0–2 秒有結果：大字「家長會／五點稿」，「之後」已經有開場同家校溝通兩點。陌生人一秒知睇完係家長會五點稿。片尾「追蹤 JD／少啲試錯／每日中午、粵語 AI 3 步」。唔靠假工具，唔靠假結果。

扣 2 分：頭兩秒證明到嘅係兩點，唔係五點，亦未係主欄成篇講稿。片尾係系列追蹤句。8.80s 封面透出 CTA，完結唔利落。

證據：reel 0.00–0.80s；reel 5.50s；reel 7.50s／8.80s。

## Critical 清單

（空）

## 若 PASS：仍建議（非阻擋，唔使整則重拍）

1. 2.30s 特寫套正「Ask anything, find anything…」。4.30s 特寫套正成段提示，唔好切走「一」。
2. Cover「之後」見到至少三點，或者見到「1–5」先至停。五點而家喺 5.50s。
3. Loop 最後約 0.2s 唔好讓封面同 CTA 互透。Hold 住「每日中午」，或者硬切返封面。
4. Caption 密碼句留一次就得。
5. 頁文「Ask … 黑色」同淺色 Ask pill 容易讀岔。若指「唔係舊版橙色」，寫明唔係橙色；若指掣身，同截圖對返。
6. 頁上「最後核實：2026-10-18」改到同呢次重渲同一日。原帖段「重製中／稍後更新」可以留到 shortcode 接上。
