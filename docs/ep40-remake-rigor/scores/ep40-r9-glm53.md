# Ep.40 remake 嚴謹度評分 · GLM 5.3（三模型閘之一）

| 欄位 | 內容 |
|---|---|
| Model | GLM 5.3（Cursor CloudAgent） |
| 時間 | 2026-10-21 ~14:25 HKT |
| 對象 | Ep.40 remake · slug `brave-leo-parent-meeting` · 12:00 HKT slot（舊帖已刪，重發前雙閘）· 無代 Share |
| reel sha256 | `636910ef8d4611c292d316208aba784a1c0ec2b16f71107d856fea2569042f67`（＝BRIEF／review-art handoff 值，本人實測相符） |
| caption sha256 | `d38533e91c3632d5b12e4d6be0f9b31cdcd9b0f8d0ba3e3a2705bdd8ac642c747`（pack 附本實測） |
| contact sha256 | `df3066ffc59c3bfda2712ec74ba64a7a554896d02e7e0d6235d9ce475d9ee938`（pack 附本實測） |
| motion-strip sha256 | `4ee660d09fef9b413549692d4d43621e767f3c934945b11e72fdf3f91b76c3ed`（pack 附本實測） |
| 對照 | BRIEF（2026-10-21）· RUBRIC v0+v1+v2 · caption · topic · review-art（Art APPROVED remake）· LAYOUT-SIGNOFF（排版＋圈心已簽，本票不重審）· contact storyboard · motion strip · 成片 9.0s/270f/1080×1920 · landing live |

**本檔只係 GLM 5.3 一票。** 及格要三 model 多數 PASS＋均值≥8＋R9≥8＋Critical=0。Art APPROVED／layout_PASS 已簽都唔送分：照 RUBRIC 逐項憑證據評，layout/R10 只記不重審。

---

## R0 · 對站立規矩（本包無附 origin-request 凍結檔）

Ep.40 remake pack **無附 origin-request 凍結檔**（Ep.42 pack 有）。R0 唯有按本包 BRIEF 硬規＋Ep.42 閘已記錄嘅 PP O 站立規矩逐條核：

| # | 規矩（來源） | 核對 | 結果 |
|---|---|---|---|
| 1 | 「朝早 07:xx Share 停。每日只發一則，12:00」（PP O 站立，見 Ep.42 origin-request） | slot 12:00 evergreen、無第二則、無提早 ✓；但 caption 仍寫「朝早同中午都有粵語 AI 3 步」，而且呢句**烘咗入成片 CTA 卡**（f7.5s 人眼確認） | 唔過（Major，入 R5 計分） |
| 2 | BRIEF CTA spec：密碼喺網頁（個人檔連結） | caption 兩處有密碼句；landing ending-note＋`/workflow/` 有 `jdtech3`，`/workflow/` live HTTP 200 | 過 |
| 3 | BRIEF NEVER：留言 1 | caption 全文無 | 過 |
| 4 | BRIEF NEVER：朝早 | caption 有「朝早同中午都有粵語 AI 3 步」；CTA 卡同句烘入成片（唔係净 caption 問題） | 唔過（Major，入 R5） |
| 5 | BRIEF NEVER：Collab | caption 全文無 | 過 |
| 6 | BRIEF CTA spec：每日中午 | caption 冇任何「每日中午」字樣（朝早行係「朝早同中午」） | 唔過（Major，入 R5） |
| 7 | Hook 陳述句、禁「？／點樣」開頭（topic HARD rule） | 「仔女班家長會要講五分鐘，Brave Ask 一句出講稿！」陳述句開頭，無問號 | 過 |
| 8 | intent=send、仍禁 ask-to-share | 「想留低慢慢跟？收埋呢則先」＝save CTA；「傳俾家長群」傳嘅係講稿唔係條片；landing 明文「呢頁唔係叫你轉發呢則片」 | 過 |
| 9 | 凍結檔在場、只錄原句 | 本包無 origin-request 凍結檔可以對——Ep.42 習慣係有，呢度係流程缺口 | 流程缺口（提醒，非內容 Critical） |

**R0 判定：唔過** —— 站立 CTA 規矩 3 條唔過（#1/#4/#6，同一句之下）；RUBRIC 冇把「朝早」列做任何維度嘅 Critical 觸發（唔係留言1／唔係密碼無頁），所以入分唔入一票否決，但佢同時拉低 R1／R5。

---

## R1–R9 評分

| ID | 分 | 一句理由 | 證據 |
|---|---|---|---|
| R1 事實嚴謹 | 7 | 工具功能句全部有依據（入口 URL、免登入、掣名、五點結果全部對得返 capture＋官方頁）；但 caption／成片 CTA 卡一句「朝早同中午都有粵語 AI 3 步」係**同當前站立規矩相反嘅渠道承諾**（朝早 share 已停、每日只剩中午）——對觀眾係無依據硬承諾；「一句出講稿」也係輕度簡寫（實際示範題目係多行，見 step-2-generate） | 成片 f7.5s CTA 卡眼見該句；caption 正文；capture `step-2-generate.png` 示範題目兩行；Ep.42 origin-request 站立「朝早 07:xx Share 停」 |
| R2 示範一致 | 8 | 成片三步＝caption 三步＝landing 圖註，掣名 verbatim「Ask」，真 UI 無 mock（STEP1「撳Ask·開AI入口」＝#開BraveAsk、STEP2「撳Ask·送出家長會題」＝#撳Ask、STEP3「睇五點稿」＝#拎講稿）；扣分位：landing **內文**教「撳搜尋列下面右邊橙色 Ask」同自家截圖／成片（Ask 掣喺搜尋列右端、灰字）矛盾，示範鏈內部自相矛盾 | 成片 f1.5/2.3s（STEP1 ring 中 Ask 掣）、f3.5/4.3s（STEP2 打好題目 ring 中 Ask）、f5.5/6.3s（STEP3 五點稿）；`step-0-before.png`／`step-1-ask.png` Ask 掣喺搜尋列內右側灰字，搜尋列下面只有 Brave Browser 橫額 |
| R3 封面誠實 | 9 | 封面大字「家長會／五點稿」＝片內真結果：0s 封面卡已經擺咗之前/之後對照——之後欄就係「星河小學小四家長會·家校溝通五分鐘分享大綱」五點；結尾同一結果卡重現；唔掛羊頭 | 成片 f0.0s／f8.8s 之前/之後對照卡；cover 大字＝chips「家長會／五點稿」＝step-3-after 五點一樣 |
| R4 工具／產品準確 | 7 | 產品名（Reel 叫 Brave Ask、頁面叫 Ask Brave、掣叫 Ask）landing 有披露；入口 URL、免登入、官方說明連結全對（help/ai HTTP 200，任何瀏覽器可用）；扣分位：landing 內文≥5 處寫「搜尋列下面左邊 Search、右邊 Ask」「橙色字」，同本包自家截圖／成片相反——真 UI 係 Ask 掣喺搜尋列右端、白 pill 灰字，下面冇兩掣 | `step-0-before.png`／`step-1-ask.png` 截圖本人放大核過；landing 步驟1、步驟2 內文+圖註、常見錯誤#2、「香港用戶留意」、「官方說明」均寫「下面／橙色」；review-art 亦自記「Ask 灰字」WARN |
| R5 文案嚴謹 | 5 | 無含糊填料；密碼句有兌現（landing＋/workflow/ jdtech3）；免責齊（示範題材虛構／講稿按學校要求自行改／簡體風險披露／非轉發聲明）；但 CTA 排程句直接違反本包 spec——「朝早」被 NEVER 仍然在場（caption＋**烘入成片 CTA 卡**），spec 要求嘅「每日中午」冇寫。唔觸 rubric 列明 R5 Critical（無留言1、密碼有頁），所以入分唔否決 | caption「朝早同中午都有粵語 AI 3 步」；BRIEF CTA spec 行；成片 f7.5s CTA 卡副文「朝早同中午／粵語 AI 3 步」——呢句要重出成片先改得，唔係 caption 小改可用 |
| R6 結構節奏 | 9 | 0s 結果（封面之前/之後卡）、early_motion ≤2s（cover tap 0.3–0.8s，1.5s 已入 STEP1）、mid_beat 4.3s Ask 送出掣特寫（STEP2）、全長 9.0s（≤15s）、尾 7.5–9.0s CTA＋結果卡 hold、結果卡同封面相接 loop 順 | ffprobe 9.000s／270f／30fps；抽幀 f0.0/0.3/0.8/1.5/2.3/3.5/4.3/5.5/6.3/7.5/8.8 逐格核；包記 gates VERDICT PASS＋verify_motion PASS（不重審） |
| R7 合規／字形 | 9 | 全件繁體為主：caption／landing／字卡 strict 簡體掃描全部 NONE；成片 AI 結果人眼全繁體（開場／家校溝通重點／多謝），示範題目明文「請用繁體中文列5點講稿」，字幕仲寫「側欄繁中大綱」明示繁中；UI 英文（Ask anything／New conversation）係真畫面非文案混入；caption 有「畫面或有簡體字請改返繁體」披露，風險有緩解 | 本票 strict 掃描（caption／landing 全文）＝NONE；step-2-generate 題目、step-3-after 五點、成片 r2w/r3w 抽幀 |
| R8 可傳性／場景 | 9 | 港場景真痛（仔女班家長會要講五分鐘，空白稿），intent=send 清楚：成品係「可抄五點講稿」傳家長群，唔係叫人轉片；landing 仲教「真實校名／老師名／學生名先改走」；即用結果（五點±時間標） | caption 首句痛點＋#拎講稿「傳俾家長群」；landing 步驟3＋常見錯誤「唔改就傳」「貼真實學生資料」 |
| R9 吸引力 | 8 | 前 2 秒有即時結果（0s 之前/之後對照、家長會痛點場景）；封面大字陌生人 1 秒明「攞到咩」（家長會 → 五點稿）；結尾有拉力（收埋呢則＋追蹤 JD＋結果卡重現）；hook 唔靠假結果／假工具；扣 1 分：結尾「跟住做」嘅拉力句（朝早同中午都有）承諾咗一半兌現唔到，完結拉力打折扣 | f0.0–0.8s 對照卡＋chips；f7.5–8.8s CTA＋結果；caption hook 陳述句真實可做 |

**均值：7.89／10**（7+8+9+7+5+9+9+9+8 = 71 ÷ 9）｜ **R9＝8（≥8 過單獨門檻）**｜ **Critical＝0**

（PP O「全 8 先可」另計：R1／R4／R5 三項＜8，兩種讀法都唔過。）

---

## 總評

# **FAIL（退回整則重做）**（GLM 5.3 一票）

- 均值 7.89 ＜ 8 ❌
- R9 = 8 ≥ 8 ✅
- Critical = 0 ✅

唔係流水作假、唔係工具講大話——呢則嘅截圖鏈、真 UI、五點稿兌現、字形、免責全部企得住。退回位集中喺一條**過期 CTA 排程句**（違反本包 spec「NEVER 朝早」＋「每日中午」冇寫）同一份**同自家截圖反向嘅 landing 按掣教學**。前者更要重出成片（CTA 卡烘死咗），照 RUBRIC「禁止小改 caption 頂住發佈」，呢個唔係 caption-patch 級數可以收得返。Art APPROVED／layout_PASS 唔代 rigor 過閘。

## Critical 清單

（空——本票無任何 rubric 列明 Critical 觸發：無假工具／假 UI／留言1／密碼無頁／封面假結果。兩個 Major 都係扣分位，唔係一票否決。）

---

## FAIL 必改項（改齊先過閘）

1. **CTA 排程句（caption＋成片 CTA 卡，必改）**：刪「朝早同中午都有粵語 AI 3 步」，改做 spec 版「**每日中午**都有粵語 AI 3 步，想少啲試錯可以追蹤 JD」（或同義）。呢句烘咗入成片 f7.5–9.0s CTA 卡，**成片必須重出**；淨改 caption 唔得。重出後重跑三 model 閘（PP O：全 8）。
2. **landing 按掣教學對齊截圖（必改）**：landing ≥5 處寫「搜尋列下面左 Search 右邊 Ask／橙色字」，同本包 `step-0-before.png`／`step-1-ask.png`（Ask 掣喺搜尋列右端、白 pill 灰字、下面冇兩掣）相反。照實改寫（先打題目、撳搜尋列右邊 Ask），或 2026-10-21 重核 search.brave.com UI 後照實記；步驟1、步驟2 內文+圖註、常見錯誤#2、「香港用戶留意」、「官方說明」全部對齊。呢項網頁側可修，但屬 caption 承諾嘅「逐步截圖」兌現鏈，計入 rigor。
3. **流程：補 origin-request 對照（提醒級，非阻擋）**：Ep.40 remake pack 冇附凍結檔，R0 唯有靠 Ep.42 站立規矩紀錄；下則起 pack 附返，閘先唔使估。

## 重做邊界（照 RUBRIC）

題材可留：家長會痛點／Brave Ask／三步／五點稿兌現全部有料企得住。要重出嘅係：CTA 卡（一句）、caption CTA 行、landing 按掣段。重出後跑齊三 model 閘全 8，先准 noon Share；layout 側重籤（ring／tip／排版）要照 v1.4 補簽。

---

## 核對記錄（本票做過嘅驗證）

- reel sha256 實測＝`636910ef…2f67`（＝BRIEF／review-art handoff）；caption／contact／motion-strip sha256 實測見表
- 成片 ffprobe：9.000s／270f／30fps／1080×1920 h264；音軌 aac 44.1kHz 立體聲、全片 RMS ≈ −17.4 dB 恒定鋪底＝純音樂無 VO，caption 無 VO 主張 ✓
- 成片抽幀 11 格（0.0/0.3/0.8/1.5/2.3/3.5/4.3/5.5/6.3/7.5/8.8s）＋0.5s 網格 18 格，字幕區裁圖放大人眼核字卡文字、掣名、結果、CTA、loop 相接
- cover f0.0s：chips「Brave Ask｜家長會／五點稿」＋之前（搜尋列＋Ask 掣）／之後（五點稿）對照；STEP1「撳Ask·開AI入口」、STEP2「撳Ask·送出家長會題」、STEP3「睇五點稿·側欄繁中大綱」；CTA 卡「追蹤 JD／少啲試錯＋**朝早同中午／粵語 AI 3 步**」（裁圖確認同 caption 同句）
- landing live `https://jainaspp.github.io/jd-tech-landing/reels/brave-leo-parent-meeting/` HTTP 200，同 repo `reels/brave-leo-parent-meeting/index.html` **byte-identical（diff 0）**；`step-0-before／step-1-ask／step-2-generate／step-3-after／contact.png` 全 live HTTP 200；`https://search.brave.com/help/ai` HTTP 200（search.brave.com 主頁對本沙箱回 429，help 頁可開）
- capture 放大核對：`step-0-before.png` 搜尋列（＋號、placeholder「Ask anything, find anything...」、mic、右端灰字 pill「Ask」），下面只係 Brave Browser 橫額，**無「左 Search 右 Ask」兩掣、無橙色 Ask**；全圖飽和橙像素僅 ~千像素級（lion logo 橫額用）——landing「橙色字」描述同自家截圖相反；`step-2-generate.png` 示範題目明文「請用繁體中文列5點講稿：開場、家校溝通重點、在家三個做法、想老師幫手嘅一件事、多謝」；`step-3-after.png` 左欄同款五點＋「AI-generated answer」提示
- strict 簡體字掃描：caption＝NONE；landing（剝 tag 後）＝NONE；繁體為主 ✓
- 密碼句兌現：landing ending-note「密碼喺網頁（個人檔連結）：Workflow 庫密碼 jdtech3（喺 /workflow/ 輸入）」＋`/workflow/` HTTP 200
- R10（只記不重審）：layout_PASS 已簽（LAYOUT-SIGNOFF 2026-10-21 14:11 HKT＋Art「圈心＝掣心 PASS」）；本票抽幀人眼未見 half_cut／錯指（r1c/r2c/r3c 圈箭罩住 Ask 掣同目標行）

— GLM 5.3 · 2026-10-21 ~14:25 HKT