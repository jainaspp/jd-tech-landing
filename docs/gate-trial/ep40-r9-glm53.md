# Ep.40 R9 吸引力 · 單維評分（RUBRIC v1 R9）· GLM 5.3

**對象：** Brave Ask 家長會五點稿（`DeqWrQoKhNj` · 2026-10-19 12:03 HKT 已發佈 · 事後試行）
**範圍：** 只評 R9 吸引力；R1–R8 不重評；無 landing 改動。
**評分模型：** GLM 5.3（Cursor CloudAgent）· 2026-10-19
**門檻：** <6 = FAIL

## R9 吸引力：**7/10 · PASS**

一句理由：0 秒即見結果、封面大字「家長會 五點稿」一眼講明得益、結尾有跟蹤／收藏拉力；但封面 UI 細字（est. 13px）與全字卡教育式節奏令非目標觀眾有實質滑走風險，拉唔到滿分。

### 分項 + 證據

- **0–2s 停滑（強）：** cover 幀 0.00s 已同時出「之前＝空 Ask 框」→「之後＝1–5 講稿大綱」對照，0.3–0.8s 有 ring/tap 動作打在之後側欄五點稿（early_motion≤2s 達標）。開場即結果，無填料。證據：`cover.png`（Before/After 三段式）；NOTES early_motion≤2s：tap 段。
- **封面 1 秒得益（強）：** 大字「Brave Ask」＋「家長會」「五點稿」，陌生家長 1 秒內明「睇完攞到一份五點講稿」；Before/After 令轉變視覺化，唔使讀細字都明。證據：`cover.png` 頂部深藍標題塊（「五點稿」特大淺紫字）。
- **完結拉力（中上）：** CTA 幀（7.50s）「追蹤 JD 少啲試錯」特大白字＋重現結果卡；caption 另有「想留低慢慢跟？收埋呢則先」收藏鈎＋密碼在個人檔（引去 profile）。扣分：end_hold 僅約尾 0.5–1.0s（9s 片），駐留偏短；且 CTA comment 遲 35 分鐘先貼（O2 MAJOR MISS，門檻 ≤10 分），實際轉化迴路被拖低——此為執行缺失，非片子本身冇拉力。證據：`cta.png`；NOTES end_hold≈尾 0.5–1.0s：result；NOTES Published 段 cta_vs_share≈35m。
- **滑走風險（中）：** 對「家長會季」港家長命中（場景＋即用稿，intent=send 清楚）；但整則係全字卡＋UI 截圖教育式風格，對圈外 feed 觀眾娛樂性拉力低。自家 QA 已 heuristic FAIL：cover@1.30s ui_text_size est. 13px（generator 要求 ≥22px），手機 feed 內 Before/After 細字難讀。證據：`r1c.png`／`r2c.png`（字卡＋小 UI 字）；NOTES QA 段 reel_qa_check FAIL heuristic cover@1.30s ui_text_size。

### Critical / Major

- **R9 Critical：無。** 封面／hook 展示嘅五點稿結果確在片內出現（`r3c.png` 側欄 1–5 大綱與封面一樣：開場30s／家校溝通重點1min／在家三個做法1.5min／想老師幫手一件事1min／多謝30s）；所示工具 Brave Ask 為實際使用工具，示範虛構（星河小學）已在 caption 披露——唔構成「假結果／假工具」一票否決（R3/R4 命名分歧已另評，不在此重複）。
- **R9 Major（預設）：成立。** 7/10 未達滿分，併入加權均分時可拉低整則至 <7.5，與綜合分卡 FAIL 方向一致（三票均分 6.25–7.125）。

### 建議（非阻擋，只針對 R9）

1. 封面 Before/After 內文字放大至 ≥22px 等效（回應 reel_qa_check heuristic），或改成圖示化對照減少依賴細字。
2. end_hold 由 0.5–1.0s 延長至 ≥1.0s，令「追蹤 JD」同結果卡多一拍駐留。
3. 開頭 0–1s 加一幀真人／場景（家長會門口／時鐘）一秒衝突畫面，補全字卡風格對圈外觀眾嘅停滑力。

## HK feed watchability：**maybe** — 家長會季嘅港家長會停（場景＋即用五點稿直接命中痛點），但一般 feed 觀眾見全字卡教學式內容＋細字 UI，滑走風險實在。
