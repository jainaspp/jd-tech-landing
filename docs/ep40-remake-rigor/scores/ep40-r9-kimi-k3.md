# Ep.40 remake rigor 評分 — Kimi K3（三閘之一）

- 對象：Ep.40 **remake** · slug `brave-leo-parent-meeting` · slot 2026-10-19 p2 12:00 HKT（evergreen 重發）· Brave Ask（search.brave.com）
- 評分員：Kimi K3（獨立一票）· 2026-10-21 UTC
- 輸入：BRIEF／RUBRIC v0+v1（R9）+v2（R10）／topic.md／caption.txt／review-art.md（remake APPROVED）／LAYOUT-SIGNOFF.md（SIGNED）／contact.png／motion-strip.png／reel.mp4
- 獨立核實：reel sha256 對得上簽署檔、9.000s、landing HTTP 200＋5 張真 PNG、/workflow/ 密碼頁 200、search.brave.com/help/ai 200、reel 三段抽幀逐格讀（明細見文末）
- 硬規：PASS only if mean≥8 AND R9≥8 AND Critical=0（含 R0）。Art APPROVED／layout_PASS 唔畀免費分；R10 只記唔取代機械 layout_PASS。

---

## R0（origin-request／站立規先判）

本 pack **未附 origin-request.md**；按 BRIEF「R0 if in origin-request」指示，以下 6 條站立以 BRIEF／RUBRIC 內明文逐條核：

| # | 站立（出處） | 判定 | 證據 |
|---|---|---|---|
| 1 | 一日一則只 12:00；朝早 07:xx 停（PP O 站立；BRIEF「NEVER 留言 1／朝早／Collab」） | **部分違（文案層）** | 行為層：topic 鎖 slot 12:00 HKT ✓、未 Share ✓。**文案層：reel CTA 卡「朝早同中午 粵語 AI 3 步」＋caption「朝早同中午都有粵語 AI 3 步」＋landing「朝早同中午都有…每日 07:00・12:00」三處齊犯 NEVER 朝早**，仲要將已停嘅 07:00 檔期當現況賣。Ep.42 同款檢查（caption／頁面搜唔到朝早）今次**搜到**。記 Major，計落 R5／R1；行為未違，唔升 R0 Critical |
| 2 | 全 8 先可（PP O） | PASS | 本檔即三閘之一，Share 前評分；BRIEF 硬線 mean≥8＋R9≥8＋Critical=0 照搬 |
| 3 | 吸引力閘 R9（PP O「冇人睇有用？」） | PASS | 見 R9 項：0s 之後結果卡＋家長會痛點 hook，評 8 達單獨門檻 |
| 4 | 未達標整則重做、禁止湊合（PP O via Bad Bot） | PASS | 呢次本身就係整則重做（舊帖已刪重發、reel 新 sha256、ring tip 由 FAIL 修到 38.3／38.3／34.3 ≤40），唔係小改 caption 頂發；流程合重做規 |
| 5 | UI 截圖歸屬素材搜集師（PP O 批准） | PASS（附註） | landing 5 張真 1920×1113 截圖全部 HTTP 200；惟 pack 未附 capture 檔（Ep.42 有 BUTTONS.md 對照），來源只能靠 landing 自述，記 WARN |
| 6 | 鎖題必寫凍結檔、只准原句 | **WARN** | 上傳包無 origin-request.md；BRIEF 本身係今次凍結指示（slug／hook／cover／CTA 全鎖）。唔當 R0 Critical，但規則話「無此檔不准 Share」——留俾 KOL 自查補檔 |

**R0 Critical：0。** 行為層企立全跟；文案層 朝早 三處違規轉 R5／R1 扣；凍結檔缺失記 WARN。

---

## 總評：**PASS（貼線）**

均分 **8.22**（74/9）≥8 · **R9＝8** ≥8 · **Critical＝0**（含 R0）→ 三條硬線全過，但係貼住線過。
一句講晒：工具事實同示範主鏈冇講大話——真入口、真五點結果、掣名 verbatim、密碼頁真；扣分集中喺**文案三處 朝早 違 NEVER**、**landing 步驟文同自家截圖不符**（掣位／顏色／生成態）、**可抄示範題目同 capture 實打題目唔同**。呢啲全部係 landing／文案層，reel 主體冇假，所以唔升 Critical；但 WARN 1–4 強烈建議 Share 前或 Share 後即刻執。

---

## R1–R9

### R1 事實嚴謹 — **7／10**
- 理由：工具硬事實（入口、免帳戶 hedge、功能流程）全部核到；但 landing 有幾句步驟描述同**自家截圖**對唔上，屬可核對而核唔過嘅陳述。
- 證據：✓ 入口 search.brave.com 真（域名 200、help/ai 200）；✓ 無登入牆（全部截圖＋reel 無 sign-in 阻擋，landing「登入同用量以你當日畫面為準」有 hedge）；✓ 無 VPN、無假官方支援香港、虛構校名三處（topic／caption／landing）一致披露。✗ landing 話「搜尋列下面有兩個掣：左邊 Search、右邊 Ask」——本集自家截圖（step-0／step-1）顯示 **Ask 喺搜尋列入面右端、無下面雙掣**；✗「橙色字」——截圖係**黑字黑 icon**；✗「撳完之後頁面寫 Ask Brave…中間係轉圈」——`step-2-generate.png` 我三段抽讀**都見唔到 Ask Brave 標題或轉圈**，畫面同打定題目嘅態幾乎一樣。
- Critical：無（唔係無來源嘅功能大話，係描述同 capture 不符嘅準確度缺失）。

### R2 示範一致 — **8／10**
- 理由：reel 三步＝caption 承諾（開 Ask→撳 Ask→拎五點稿），掣名「Ask」verbatim，結果同真實 capture 一致；扣在特寫 crop 失咗頁面語境。
- 證據：我抽幀三段覆核——r1（~2s）開搜尋頁 crop（見到截半嘅 Brave logo「…rave」＋搜尋列＋Ask 掣，紫圈箭貼 Ask 掣心）；r2（~4.2s）打好題目＋紫圈箭貼 Ask 送出位；r3（~6.2s）五點稿＋圈貼第 2 點行；五點標題（開場／家校溝通重點／在家三個做法／想老師幫手的一件事／多謝）同 landing 真截圖 `step-3-after.png` 生成結果**逐點對得上**，即內容係真 session 出嘅稿，唔係砌字。Art「圈心＝掣心」同我抽幀一致。扣位：reel 全程係浮卡特寫，**從未見 URL 列／網域**，「去 search.brave.com」呢步只靠字卡同 landing 補；紫圈疊喺 Ask 掣上令掣面睇落似紫框，同真掣（黑字）有色差——屬系列呈現常規，唔係假 UI，但語境全靠觀眾信字卡。
- Critical：無（畫面做得到 caption 所講；結果真；唔係憑空發明嘅 UI——landing 有同 session 全圖撐）。

### R3 封面誠實 — **9／10**
- 理由：大字得益＝片內結果，0.0s 之後格已見真五點稿首兩點；唔掛羊頭。
- 證據：cover line「Brave Ask／家長會／五點稿」對 reel 0.0s 之後格「星河小學小四家長會，家校溝通五分鐘分享大綱／1. 開場（約30秒）／2. 家校溝通重點（約1分鐘）」；之前格（搜尋列＋Ask）同 r1 同源。扣 1：BRIEF cover 規格 chips 寫「JD TECH · Ep.40 · BRAVE ASK」，我抽幀封面**只見 JD TECH**（Ep.40／BRAVE ASK 搬咗去 CTA 卡頂）——規格偏差，唔涉誠實。
- Critical：無。

### R4 工具／產品準確 — **8／10**
- 理由：產品名、入口 URL、登入要求正確且有 hedge；扣在 landing 對掣位／顏色／結果頁嘅描述同真 UI 不符。
- 證據：名＝Brave Ask（caption／topic／landing 一致；landing 仲主動解畫官方 help 頁叫 Ask Brave、「要認嘅係 Ask 掣」——呢段係準嘅，search.brave.com/help/ai 我覆核 200）；入口 search.brave.com ✓；免帳戶：全部 capture 無登入牆、reel 無帳戶提示 ✓；常見錯誤段教「開咗 Leo 側欄唔係呢步」——主動拆 Leo／Ask 混淆，加回信心。扣 2：landing 話 Ask「喺搜尋列下面右邊、橙色字」＋結果頁「寫 Ask Brave」——同 R1 所列自家截圖不符（實為列內右端黑字、結果頁係 Brave logo＋tabs＋側欄 New conversation）。
- Critical：無（無錯工具名誤導；無登入牆當免登入）。

### R5 文案嚴謹 — **7／10**
- 理由：密碼句啱兼真、免責齊、無 留言 1／Collab；但 **朝早 三處齊犯 BRIEF NEVER**，加一條指向已刪帖嘅原帖連結。
- 證據：✓ caption「密碼喺網頁（個人檔連結）」兩度出現，landing 有真密碼段（Workflow 庫密碼 jdtech3，/workflow/ 我覆核 **200**）——承諾有頁兌現；✓ 免責四句齊（虛構／按學校要求改／簡體 hedge／唔係叫轉發片）；✓ 無「留言 1」、無 Collab、save CTA「收埋呢則先」合 intent=send。✗ **朝早**：caption「朝早同中午都有粵語 AI 3 步」、reel CTA 卡「朝早同中午」、landing「朝早同中午都有…每日 07:00・12:00」——BRIEF 明寫 NEVER 朝早，且 07:00 檔期已停（PP O 站立），係過期賣弄；✗ landing「睇原 Reel ↗（2026-10-19 發佈）」指向已刪 shortcode `DeqWrQoKhNj`（BRIEF：舊 IG shortcode 已刪、Share 後再 wire）——而家係死鏈＋過期發佈聲稱。
- Critical：無。閘規 R5 Critical 觸發係「留言 1 無 workflow／承諾密碼但無頁」；朝早 屬 BRIEF NEVER 禁令但無對應 Critical 定義，我裁 **Major 重扣唔升一票否決**，交多數閘裁最終。若 KOL 規矩係 NEVER 即擋，呢項就係擋點——本票如實記。

### R6 結構節奏 — **9／10**
- 理由：9.0s≤15s、0s 結果、early_motion≤2s、mid_beat 齊、end_hold 有；每步 2.0s 無死水。
- 證據：ffprobe duration=9.000s、1080×1920、30fps、270 幀；我抽幀＋motion-strip 讀：0.0s 封面之後結果即出、首 motion 0.0s（≤2s ✓）→1.5s r1→3.5s r2 撳 Ask（mid_beat 對 topic「step2 Ask／Send 類掣」窗 ✓）→5.5s r3 五點→7.5s CTA hold 到 9.0s 完（無早 fade）；review-art `verify_motion PASS`。音軌 AAC、mean −17.4 dB（同 Ep.42 剖面類近，非靜音；未做語音偵測）。
- Critical：無（此項本身唔自動 Critical）。

### R7 合規／字形 — **9／10**
- 理由：公開 caption 全繁體粵語；reel 字卡、landing 正文、截圖生成稿三段抽讀**全部繁體**，無簡體無日文無 Pip；殘留風險有披露有緩解。
- 證據：caption 全繁體（撳／喺／睇／㩒類）；三段影像 pass 一致回報 reel 字卡、reel UI 內文、4 張 landing 截圖（包括 AI 生成稿內文）**零簡體字**；caption「畫面或有簡體字請改返繁體」係對未來重現風險嘅 hedge（今次無觸發），landing 再教「自己讀一次」緩解語域；生成稿係書面繁體，屬預期並有教學。
- Critical：無。

### R8 可傳性／場景 — **9／10**
- 理由：港家長痛點真、結果即用、intent 清楚可傳。
- 證據：家長會五分鐘分享＝港家長實景；caption#拎講稿「對住五點大綱改字，再傳俾家長群」、landing「呢步係傳份講稿，唔係叫人轉發呢則片」——intent=send 清晰；landing 有可抄示範題目（複製掣）＋reel 五點稿即用；虛構校名披露齊。扣 1：可抄題目同 capture 實打題目唔同（見 WARN 3），觀眾照抄會出到**另一版**五點——兩版都係家長會稿，唔算假，但示範鏈唔連貫。
- Critical：—（此項無 Critical 觸發）。

### R9 吸引力 — **8／10**
- 理由：四條自問全過，穩陣達標唔算出色。
- 證據：① 0–2s 有即時結果（0.0s 之後格五點稿首兩點）＋caption 首句痛點衝突「仔女班家長會要講五分鐘」；② cover 大字「家長會／五點稿」陌生人 1 秒明攞到咩；③ 完結 CTA（追蹤 JD｜少啲試錯）＋save hook＋「傳俾家長群」嘅跟住做拉力；④ 唔靠假承諾（結果真）。扣位：CTA 卡用「朝早同中午」舊句式（同 NEVER 衝突兼無新鮮感）；封面係系列純色字卡常規，止滑靠文案唔靠視覺衝擊。
- Critical：無（無假結果／假工具）。

---

## Critical 清單

**（空）** — R0–R9 無任何 Critical 觸發。最接近嘅兩條（朝早 NEVER、landing 描述同截圖不符）裁決同上：屬 Major，閘規無對應 Critical 定義。

---

## R10 附記（唔取代機械 layout_PASS）

layout_PASS 已簽（gates VERDICT PASS＋ring_on_target 全 PASS＋tip 38.3／38.3／34.3 ≤40＋qa WARN／0 FAIL＋排版簽＋Art「圈心＝掣心 PASS」），本閘**唔再審**。兩點只作記錄：① 紫圈疊 Ask 掣令掣面似紫框，同真掣黑字有色差；② reel 全程浮卡特寫無 URL 列。兩點都屬呈現常規，人眼已簽，唔影響本票。

---

## PASS WARN（非阻擋，強烈建議 Share 前後即執）

1. **朝早 三處齊清**：reel CTA 卡「朝早同中午」→「每日中午」；caption 删「朝早同」；landing「朝早同中午都有…每日 07:00・12:00」改返「每日中午」。呢句同時係假檔期（07:00 已停）——三處唔改，下一閘隨時當 R1 硬事實失實升 Critical。
2. **landing 步驟文對返自家截圖**：删／改「搜尋列下面左邊 Search、右邊 Ask」（實為列內右端單 Ask）、「橙色字」（實為黑字）、「撳完頁面寫 Ask Brave／中間轉圈」（`step-2-generate.png` 見唔到）——要么改文，要么補一張真生成態截圖。
3. **統一示範題目**：landing 可抄版（屋企觀察／跟進方法／留時間問答）同 capture 實打版（溝通重點／在家三個做法／想老師幫手的一件事／多謝）二擇一，令照抄嘅觀眾出到畫面同款五點。
4. **原帖段**：Share 後即刻將「睇原 Reel ↗（2026-10-19 發佈）」換新 shortcode（BRIEF 已註明 wire 後補）；未換前係死鏈。
5. **landing 時間戳**：頁首 2026-10-19 12:00＋「最後核實：2026-10-18」對 10-21 重發嚟講係舊日期；建議加「重發：2026-10-21」一行，免讀者當舊帖。
6. **cover chips 規格**：若三粒（JD TECH／Ep.40／BRAVE ASK）要齊上封面，下次補；而家 Ep.40／BRAVE ASK 只喺 CTA 卡。
7. **截圖內文覆核**：`step-3-after.png` 生成稿第 1 點內文我兩次抽讀出現「猴子（學生名字）」樣嘅 placeholder 殘句（讀數不一，可能係 OCR 誤讀）；建議人眼過一次全稿內文，必要時 landing 加句「內文逐句改先用」。
8. **capture 檔**：下次 pack 學 Ep.42 附 BUTTONS.md 類 capture 紀錄，等閘員可以獨立對截圖來源。

---

## 附：Kimi K3 獨立核實明細（2026-10-21 UTC）

| 核實項 | 方法 | 結果 |
|---|---|---|
| Reel 真身 | sha256／ffprobe | `636910ef…042f67` 與 BRIEF／review-art／LAYOUT-SIGNOFF **逐字一致**；9.000s、1080×1920、30fps、h264＋aac、270 幀 |
| 音軌 | volumedetect | AAC 44.1kHz stereo；mean −17.4 dB／max −4.3 dB（有音樂，非靜音；未做語音偵測） |
| Landing LIVE | `curl -L …/reels/brave-leo-parent-meeting/` | **HTTP 200**，18,459 B |
| 逐步截圖＝真圖 | 逐張 curl | contact.png 200／step-0-before 200／step-1-ask 200／step-2-generate 200／step-3-after 200，全部真尺寸（1920×1113 類），非 stub |
| 密碼頁 | `curl -L …/workflow/` | **200**；landing 密碼段真實存在（jdtech3） |
| 產品入口 | curl | search.brave.com 回 429（rate limit，域名有效）；search.brave.com/help/ai **200** |
| Reel 內容 | 三段抽幀（0.1–8.6s 共 10 幀＋native crop 2 段）經影像 model 三 pass 讀 | 封面 0.0s 出結果首兩點；r1/r2 圈箭貼 Ask 掣心；r3 圈貼五點稿第 2 點行；CTA 7.5s hold 到尾；全繁體；五點標題同 `step-3-after.png` 逐點一致 |
| Landing 對截圖 | 同上三 pass | Ask 掣實為搜尋列內右端黑字（非下面右邊橙色）；無 Search 雙掣；`step-2-generate.png` 無 Ask Brave 標題／轉圈；可抄題目同實打題目唔同 |
| Caption 禁項 | 全文掃 | 無「留言 1」、無 Collab、密碼句齊；**有「朝早」（NEVER 違規）**；landing 同款「朝早…07:00・12:00」；reel CTA 卡「朝早同中午」 |
| 原帖連結 | HTML 抽 href | `instagram.com/rabithead1881/reel/DeqWrQoKhNj/`——BRIEF 註明舊 shortcode 已刪，連結現為死鏈（Share 後再 wire） |
| 方法學聲明 | — | 影像判讀經 3 個獨立 pass（全片→對照→native crop）交叉；掣色／掣位／生成態三項兩 pass 以上一致先落筆；「猴子」殘句讀數不一，只列 WARN 唔計分 |

— Kimi K3 · Ep.40 remake rigor 1/3 票 · **PASS（貼線）**（均分 8.22 · R9 8 · Critical 0）
