# Ep.40 remake rigor ROUND 2 評分 — Kimi K3（三閘之一）

- 對象：Ep.40 remake · slug `brave-leo-parent-meeting` · slot 12:00 HKT（evergreen）· Brave Ask（search.brave.com）
- 評分員：Kimi K3（獨立一票）· 2026-10-21 UTC
- 輸入：BRIEF-R2／RUBRIC v0+v1(R9)+v2(R10)／topic.md／caption.txt／review-art.md（Ask-crop 覆簽 14:33 HKT）／LAYOUT-SIGNOFF（14:11 HKT）／contact.png／motion-strip.png／reel.mp4
- **只評新 pack**：reel sha256 `f4a91588c608bbddc855097fe8e35b21386b543c7e5d99381b5670ca70a04459`（我獨立重算一致）；舊 `636910ef…`／`c47c655f…` 作廢唔評。
- 硬規：**PASS only if mean≥8 AND R9≥8 AND Critical=0**（含 R0）。Art APPROVED／layout 已簽唔畀免費分。
- layout_PASS 已簽（gates VERDICT PASS＋ring_on_target 全 PASS＋tip 33.3／26.0／34.3 ≤40＋排版 LAYOUT-SIGNOFF＋Art「圈心＝掣心 PASS」＋qa WARN 0 FAIL）→ 按 BRIEF 唔重審，記作雙閘前提已達。

---

## R0（硬前提逐條核）

| # | 前提（出處） | 判定 | 證據 |
|---|---|---|---|
| 1 | 只評新 sha `f4a91588…`，舊 sha 作廢（BRIEF-R2） | PASS | 我對 upload 嘅 reel 重算 sha256＝`f4a91588…04459` 逐字一致；確認評分對象係新 render，唔係 Round 1 舊檔 |
| 2 | **CTA 專項：每日中午 唔係 朝早**（BRIEF-R2 硬線／COPY_PASS v2） | PASS | 尾卡 8.0／8.5／8.9s 逐幀抽＋crop 放大 2× 逐字睇：on-screen「每日中午粵語 AI 3 步…追蹤 JD」，**無朝早、無 07:00**；caption grep：每日中午 ×1、朝早 ×0、07:00 ×0 |
| 3 | COPY_PASS v2 其他禁項 | PASS | caption 無「留言 1」、無 Collab、無 ask-to-share；密碼句在（×2） |
| 4 | layout_PASS 已簽唔重審（BRIEF-R2） | PASS | LAYOUT-SIGNOFF 14:11＋review-art Ask-crop 覆簽 14:33 雙簽齊；qa WARN／0 FAIL |
| 5 | 未達標整則重做、禁止小改頂發（RUBRIC／PP O） | PASS | Round 1 多數 FAIL → 整則重渲出新 sha 再三 model 重評（即本次）；無「小改 caption 頂住發佈」迹象 |
| 6 | Slot／intent／hook 規格（topic.md） | PASS | 12:00 HKT evergreen、intent=send、hook_type=scenario（陳述句，非「？／點樣」開頭） |

**R0 Critical：0。** 硬前提全過，CTA 硬線經逐幀放大親證。

---

## 總評：**PASS**

均分 **8.78**（79/9）≥8 · **R9＝8** ≥8 · **Critical＝0**（含 R0）→ 三條硬線全過。

一句講晒：Round 1 嘅炸點（片尾 CTA 燒「朝早」）已拆——新 render 尾卡同 caption 都係 noon-only「每日中午」；三步示範同 caption 逐句對得上、掣名 verbatim、密碼承諾有真頁。唯一「朝早」殘留喺 landing ending-note（live 同最新 main 都仲係「朝早同中午…07:00・12:00」），按 BRIEF「landing lag 記 WARN 唔記 Critical」處理——但 Share 前一定要 sync，詳見 WARN 1。

---

## R1–R9

### R1 事實嚴謹 — **9／10**
- 理由：功能／入口／步驟句有可核對依據，無誇大、無 VPN、無假「官方支援香港」。
- 證據：「去 search.brave.com…撳 Ask…出五點大綱」全流程喺 reel 實機畫面示範；官方說明頁 search.brave.com/help/ai 我覆核回 **200**（官方叫「Ask Brave」，landing 有解畫命名差異）；虛構披露三處一致（caption「示範題材純屬虛構（星河小學）」／topic／landing）；「一句出講稿」屬系列格式語，片內確實一個 prompt 出五點，未構成誇大。扣位：我 curl search.brave.com 根域被 429（bot 擋），未能親測 composer 免登入，呢一腳靠 pack 實機截圖＋官方頁佐证；landing 有 hedge「登入同用量以你當日畫面為準」。
- Critical：無。

### R2 示範一致 — **9／10**
- 理由：畫面三步＝caption 承諾逐句對上，掣名 verbatim。
- 證據：我抽 12 幀對稿——r1（~2s）search.brave.com composer 見 placeholder「Ask anything, find anything…」＝caption 第一句；r1c／r2c 特寫圈箭貼橙色 **Ask** 掣（唔係 Search）＝caption「撳『Ask』（唔好撳 Search）」，ring_on_target 全 PASS（tip 33.3／26.0／34.3 ≤40）；r3（~7s）「Ask Brave」面板出五點大綱＝caption「等『Ask Brave』出側欄五點大綱」。landing 逐步截圖（step-0/1/2/3）同 reel 同流程。
- Critical：無。

### R3 封面誠實 — **9／10**
- 理由：大字得益＝片內結果，唔掛羊頭。
- 證據：cover line2「家長會／五點稿」（各 3 全形，≤9 規格內）對片內 r3／結果幀真五點講稿（開場、屋企觀察、跟進方法、問答、結尾）；「五點稿」無注水——結果幀數到五點。扣位：cover 係系列純色字卡款，無結果縮圖，誠實但保守。
- Critical：無。

### R4 工具／產品準確 — **9／10**
- 理由：產品名、入口 URL、登入要求正確；命名差異有披露。
- 證據：caption／topic／landing 一致用 Brave Ask，並註明畫面產品名「Ask Brave」（landing「官方說明」段）；入口 search.brave.com 正確（官方 help/ai 200 佐证）；免帳戶有 pack 實機截圖（composer 直接用、無登入牆）；landing「常見錯誤」段如實區分 Brave 瀏覽器 Leo 側欄 vs search.brave.com Ask，防混淆。扣位同 R1：入口親測被 429，差一腳獨立覆核。
- Critical：無。

### R5 文案嚴謹 — **9／10**
- 理由：CTA／密碼句啱、免責齊、無含糊填料、無 banned CTA。
- 證據：**CTA＝每日中午**（noon-only，Round 1 炸點已拆）；「密碼喺網頁（個人檔連結）」→ landing 真密碼段（Workflow 庫密碼 jdtech3，／workflow/ 我覆核 **200**）→ 承諾有頁兌現；免責齊（虛構披露／講稿按學校要求改／畫面或有簡體請改返繁體）；無「留言 1」、無朝早、無 Collab；「收埋呢則先」＝save hook、「傳家長群」指傳講稿，landing 再補「唔係叫人轉發呢則片」＝合 intent=send。扣位：密碼句喺 caption 重複咗兩次，冗餘唔係錯。
- Critical：無。

### R6 結構節奏 — **8／10**
- 理由：9.0s≤15s、early_motion≤2s、mid_beat、end_hold 齊；唯 0s 係封面字卡，結果要 ~0.5–0.8s 先出。
- 證據：ffprobe duration=9.000s、1080×1920、30fps、h264＋aac；抽幀：0.0s cover→0.5–1.0s cover tap 後講稿結果（topic early_motion 0.3–0.8s 規格內）→~2s r1→~4–6s r2 Ask 特寫（mid_beat 對 spec）→~7s r3→8.0–8.9s 結果＋CTA end_hold（尾 0.5–1.0s 規格內）。對 rubric 10 分標準「0s 結果」有半秒差。
- Critical：無（此項本身唔自動 Critical）。

### R7 合規／字形 — **9／10**
- 理由：公開 caption 全繁體粵語；畫面簡體風險有披露有緩解。
- 證據：我逐字掃 caption 字符集：全繁體（撳／喺／唔好／睇／講／題／會／點），無簡體、無日文、無 Pip；披露句「畫面或有簡體字請改返繁體」＋緩解「對住改字再傳家長群」；英文掣名屬真 UI 原樣引用。
- Critical：無。

### R8 可傳性／場景 — **9／10**
- 理由：港場景痛點真、結果即用、intent 清楚。
- 證據：家長會五分鐘講稿＝港家長真痛點；五點稿可即抄即改即傳家長群；landing 有可抄 prompt（複製掣）；intent=send，無丟 group、無 ask-to-share。
- Critical：—（此項無 Critical 觸發）。

### R9 吸引力 — **8／10**
- 理由：四條自問全過，穩陣達標唔係出色。
- 證據：① 0–2s 有痛點場景 hook（家長會空白稿）＋一秒內結果揭示；② cover 大字「家長會／五點稿」陌生人 1 秒明攞到咩；③ 完結 CTA（每日中午・追蹤 JD・少啲試錯）＋save hook＋可傳講稿有跟住做拉力；④ 唔靠假承諾。扣位：家長會屬窄場景（受眾限家長層）；封面係系列模板字卡，止滑力靠文案唔靠視覺衝擊；CTA 句式同近則一致，新鮮感有限。
- Critical：無（無假結果／假工具）。

---

## Critical 清單

**（空）** — R0–R9 無任何 Critical 觸發。Round 1 Critical（片尾 CTA 燒「朝早」）經逐幀放大核實已拆除。

---

## PASS WARN（非阻擋，Share 前要跟）

1. **Landing ending-note 仲係舊 CTA**：live（對齊最新 main `37ce14a`）嘅 `reels/brave-leo-parent-meeting/index.html` ending-note 仍寫「朝早同中午都有粵語 AI 3 步…每日 07:00・12:00」（朝早 ×2、07:00 ×1、每日中午 ×0）。按 BRIEF-R2「landing sync 可仍在途 → 記 WARN 唔記 Critical（pack CTA 已 noon-only）」處理；**但 Share 前必須改成 noon-only**，否則觀眾由 caption 入 landing 會見到翻版「朝早」。
2. **Landing 原帖段仲係佔位**：live 顯示「原帖重製中／稍後更新」（#65 已 unwired 已刪 IG 帖）。呢個係重發前正常態，Share 新 reel 後記得接返 shortcode＋deploy。
3. **search.brave.com 入口我 curl 被 429**（bot 擋；help/ai 同 /workflow/ 都 200）：入口可用性靠 pack 實機截圖＋官方說明頁佐证；之後閘員可用真瀏覽器覆核一腳。
4. **密碼句 caption 內重複兩次**：唔係錯，下次精簡一次得。
5. **0s 唔係結果幀**：結果喺 cover tap 後 ~0.5–0.8s 先出（topic 規格內）；想貼盡 rubric「0s 結果」可考慮開格直接上結果。

---

## 附：Kimi K3 獨立核實明細（2026-10-21 UTC）

| 核實項 | 方法 | 結果 |
|---|---|---|
| Reel 真身＝新 pack | sha256 重算 upload reel | `f4a91588c608bbddc855097fe8e35b21386b543c7e5d99381b5670ca70a04459` 逐字一致（舊 636910ef／c47c655f 唔關事） |
| 規格 | ffprobe | 9.000s、1080×1920、30fps、h264＋aac |
| **CTA 硬線** | 抽 8.0／8.5／8.9s 幀＋尾卡 crop 放大 2× 逐字睇 | on-screen「每日中午粵語 AI 3 步…追蹤 JD」；**無朝早、無 07:00** |
| Caption 禁項掃 | 全文 grep＋字符集逐字 | 每日中午 ×1、朝早 ×0、07:00 ×0、留言 ×0、Collab ×0；全繁體 |
| 時間軸對稿 | 抽 12 幀（0.0–8.9s） | cover→結果揭示（≤1s）→r1 composer placeholder→r1c／r2c 圈箭貼 Ask→r3 五點大綱→結果＋CTA，同 caption／topic motion spec 一致 |
| Landing LIVE | curl `jainaspp.github.io/jd-tech-landing/reels/brave-leo-parent-meeting/` | **HTTP 200**（18,353 B）；逐步內容＝caption 流程；**ending-note 仍舊 CTA（朝早・07:00）→ WARN 1** |
| 密碼承諾 | curl `/workflow/` | **HTTP 200**，承諾有頁 |
| 產品官方來源 | curl search.brave.com/help/ai | **200**；search.brave.com 根域 429（bot 擋） |
| layout_PASS | 唔重審（BRIEF 指示） | LAYOUT-SIGNOFF 14:11＋Art 覆簽 14:33 雙簽齊；qa WARN／0 FAIL；tip 33.3／26.0／34.3 ≤40 |

— Kimi K3 · Ep.40 remake rigor ROUND 2 · 1/3 票 · **PASS**（均分 8.78 · R9 8 · Critical 0）
