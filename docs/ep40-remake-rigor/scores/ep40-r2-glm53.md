# Ep.40 remake rigor ROUND 2 · GLM 5.3（三模型閘之一）

| 欄位 | 內容 |
|---|---|
| Model seat | GLM 5.3（獨立一票） |
| 時間 | 2026-10-21 ~15:00 HKT |
| 對象 | Ep.40 remake · slug `brave-leo-parent-meeting` · Brave Ask（search.brave.com）· 12:00 HKT |
| Pack sha256 | `f4a91588c608bbddc855097fe8e35b21386b543c7e5d99381b5670ca70a04459` |
| Caption sha256 | `ed6e73767cd884739ecad19f1b2ccd68c5c80c2a2af643e29fb994e6f9264628` |
| 均分 | **8.89**／10（80/9） |
| R9 | **8** |
| Critical | **0** |
| VERDICT | **PASS** |
| CTA check | **每日中午 yes**（on-screen；唔係朝早／07:00） |

**本檔只係 GLM 5.3 一票。** 及格要三 model 多數 PASS＋均分≥8＋R9≥8＋Critical=0。Art APPROVED 唔送分。`layout_PASS` 已簽（tip 33.3／26.0／34.3 ≤40），R10 唔再審、唔入均分。

舊 sha `636910ef…`／`c47c655f…` 作廢，呢票只評新 render。

---

## R0 · 對 BRIEF-R2 站立句

**R0 判定：過（無 Critical）**

| # | 站立句 | 核對 | 結果 |
|---|---|---|---|
| 1 | 只評新 pack sha `f4a91588…` | 附件 reel 實測 sha256 逐字＝`f4a91588c608bbddc855097fe8e35b21386b543c7e5d99381b5670ca70a04459`。ffprobe：9.000s／270f／30fps／1080×1920 | 過 |
| 2 | 片尾 CTA＝每日中午；禁「朝早／07:00」（COPY_PASS v2） | Tesseract `chi_tra+eng`：7.5s、8.0s、8.5s 字帶都讀到「每日中午」；7.8s 中帶讀到「每日中午」＋「粵語 AI 3 步」。2fps 全片字帶同 caption 全文：「朝早」0、「07:00」0、「7:00」0。Caption「每日中午」×1 | 過 |
| 3 | 均分≥8、R9≥8、Critical=0 先算過 | 本票 8.89／R9=8／Critical=0，門檻唔降 | 過 |
| 4 | `layout_PASS` 已簽，唔重審劃位 | 接受 BRIEF 已簽（gates PASS、圈心＝掣心、tip≤40）。特寫裁切唔再當 R10 | 過 |
| 5 | 未達標要整則重渲，禁止小改 caption 頂發 | Round 1 舊 sha 作廢；呢票評新 sha，唔係改文案頂住舊片 | 過 |
| 6 | Landing 若未同步：pack CTA 已係中午就只記 WARN | 複查時 repo 頁尾同 live（HTTP 200）都係「每日中午有粵語 AI 3 步…」。live 計數：朝早 0、07:00 0、同日朝早 0、jdtech3 ×1。呢項而家唔使開 WARN | 過 |

---

## 總評

# **PASS**（GLM 5.3 一票）

均分 **8.89**（80/9）≥8 · **R9＝8** ≥8 · **Critical＝0**（含 R0）。

Round 1 炸點（片尾燒「朝早」）唔喺呢條新片。尾卡、caption、live 頁尾都係每日中午。三步同 caption 對得上，掣名係 Ask。

**CTA check：每日中午 yes。**

---

## R1–R9

| ID | 分 | 一句理由 | 證據 |
|---|---|---|---|
| R1 事實嚴謹 | 9 | 入口、掣名、五點大綱、虛構校名都有片內依據；無 VPN、無假「官方支援香港」、無寫用量無限 | Caption 三步；3.5s 提示「請用繁體中文列 5 點講稿：開場、家校溝通重點、在家三個做法、想老師幫手的一件事、多謝。」；5.5–6.5s 五點對得上。星河小學 caption 標虛構。本機 curl `search.brave.com` 係 429，呢分靠 pack 畫面，唔升 10 |
| R2 示範一致 | 9 | 畫面三步＝caption：開 composer、撳 Ask 唔撳 Search、等 Ask Brave 出五點。掣名 Ask verbatim | 1.5–2.0s OCR 全句「Ask anything, find anything…」；3.5s 字卡「送出家長會題 (Ask，唔係 Search)」同成段提示；5.5–6.5s「睇五點稿／Ask Brave 側欄繁中大綱」加五點。後段特寫有裁字，layout 已簽，闊鏡同字卡有全文，唔當假 UI |
| R3 封面誠實 | 9 | 封面大字「家長會／五點稿」＝片內結果。五點喺第 3 步出齊，唔係掛羊頭 | 0.0s OCR：Brave Ask、家長會、五點稿，同「星河小學小四家長會」結果題。5.5s 起數到五點（開場、家校溝通重點、在家三個做法、想老師幫手的一件事、多謝）。封面「之後」先見到頭兩點，係預覽，承諾本身片內有 |
| R4 工具／產品準確 | 9 | 產品係 Brave Search 嘅 Ask／Ask Brave，入口係 caption 寫嘅 search.brave.com；流程中間無登入牆 | 畫面有 brave 標、Search 對 Ask、Ask Brave 結果、New conversation。Caption 叫人撳 Ask、唔好撳 Search。Slug 仍係 `brave-leo-parent-meeting`，片同標題用 Brave Ask，唔係 Leo。頁文寫登入同用量以當日畫面為準 |
| R5 文案嚴謹 | 9 | CTA、密碼句、免責齊；無「留言 1」、無朝早、無 07:00 | Caption 末句「每日中午粵語 AI 3 步…追蹤 JD」＝尾卡。密碼句指向嘅頁 live HTTP 200，頁尾有 jdtech3。虛構、按學校改、簡體請改返繁體都在。「收埋呢則」係 save；「傳家長群」係傳講稿 |
| R6 結構節奏 | 9 | 0s 已係結果卡、1.5s 入第 1 步（≤2s）、中段有拍、全長 9.0s | 幀差：0.3s 起封面有動作，1.5s 硬切入 STEP1，3.5s STEP2，5.5s STEP3，7.5s CTA。7.5–8.5s 仍讀到每日中午；約 8.7–8.9s loop 返封面，無新主張。音軌 AAC mean −17.4 dB，caption 無旁白主張 |
| R7 合規／字形 | 9 | 公開 caption 繁體粵語；簡體風險有披露同緩解 | Caption 掃簡體專用字＝0，無日文、無 Pip。「畫面或有簡體字請改返繁體」。片內提示自己寫「請用繁體中文」；五點用溝通／重點／個／幫／謝。OCR 偶把「綱」讀成「網」，6.5s 有一次讀出「大綱」，唔當錯字成立 |
| R8 可傳性／場景 | 9 | 港家長會、五分鐘、即用五點，intent 係改完傳去家長群 | Caption 首句痛點；5.5s 五點可讀；頁上有可抄題目同「唔係叫你轉發呢則片」 |
| R9 吸引力 | 8 | 前 2 秒有結果（家長會／五點稿＋之後卡），結尾有追蹤拉力；穩，唔係出色 | 0.0–1.0s 封面已經係得益句同結果題。尾卡「追蹤 JD／少啲試錯／每日中午」。唔靠假工具。封面之後卡只先露兩點，五點要去到約 5.5s；止滑靠清楚得益，唔靠衝突句 |

**均分：8.89／10**（9+9+9+9+9+9+9+9+8 = 80 ÷ 9）｜ **R9＝8（≥8）**｜ **Critical＝0**

---

## Critical 清單

（空）

## PASS 仍建議（非阻擋）

1. Caption「密碼喺網頁（個人檔連結）」寫咗兩次，留一次就夠。
2. 封面「之後」先見到第 1、2 點；五點齊喺約 5.5s。下則封面可以露「1–5」或者至少三點。
3. Loop 約 8.7s 起返封面。每日中午喺 8.5s 仍讀到。若要更乾淨，尾 0.3s 可以硬切，唔使交叉。
4. 頁文仍寫「最後核實：2026-10-18」，原帖段寫「重製中／稍後更新」。CTA 已係中午，呢兩句可以改到同呢次重渲同日。本票未改 `reels/`。

## 核對記錄

- reel sha256 實測＝BRIEF-R2 指定值 `f4a91588…04459`
- 成片 9.000s／270f／30fps／1080×1920；音量 mean −17.4 dB、max −4.3 dB
- Tesseract chi_tra+eng：CTA 7.5／8.0／8.5s＝每日中午；7.8s 中帶＝每日中午＋粵語 AI 3 步；封面 0.2s＝家長會／五點稿
- 2fps 字帶（0.0–8.5s）無「朝早」、無「07:00」
- motion-strip 尾格同尾卡同一句：每日中午／粵語 AI 3 步／追蹤 JD
- live `https://jainaspp.github.io/jd-tech-landing/reels/brave-leo-parent-meeting/` HTTP 200：每日中午 ×1、朝早 ×0、07:00 ×0、jdtech3 ×1。repo 頁尾同 live 一致
- `search.brave.com` 同 `/help/ai` 本機再探係 429（bot 擋），未當官方頁 200
- `layout_PASS` 未重審

— GLM 5.3 · 2026-10-21
