# Ep.47 rigor · GLM 5.3（三模型閘之一）

| 欄位 | 內容 |
|---|---|
| Model seat | GLM 5.3（獨立一票） |
| 時間 | 2026-10-28 ~14:00 UTC（HKT ~22:00） |
| 對象 | Ep.47 · slug `qwen-school-leave-msg` · 通義千問／千问 at **https://www.qianwen.com/** · 目標 Share **2026-10-29 12:00 HKT**（本閘唔代 Share；scores-only） |
| Reel sha256 | `9261a306e4c4bf317545759a9078008907c49a59db205dd1e8047dba56812b2c`（＝BRIEF／LAYOUT-SIGNOFF；附件 `reel_9b20.mp4` 實測逐字相符） |
| Caption sha256 | `1e488c0105f7163073b6e9651b9219f26d85e7bd203982664d07ce67b2f5e194` |
| BUTTONS sha256 | `915665e0242faae7622480e3b4703423dc5be0af781b7fd2cebfff18cb0b546a` |
| 均分 | **7.33**／10（66/9） |
| R9 | **8** |
| Critical | **1**（R2：畫面結果短訊唔係 BUTTONS refined 逐字） |
| VERDICT | **FAIL（退回）** |
| Host check | **qianwen.com 過**（caption「開 qianwen.com」；landing（main `d59eaa4`）`qianwen.com` ×12＋capture 記錄；chat.qwen.ai TLS 失敗有據、無當入口） |
| Guest／免登入 | **0 主張**（reel 全片逐 0.2s OCR 掃描＋caption＋landing（main）：免登入／唔使登入／Guest-as-claim＝0；landing 唯一「Guest」係 Ep.46 cross-link 標題，#110 決定保留） |
| Slug check | `qwen-school-leave-msg` ✓；禁 slug `qwen-policy-plain` caption／reel 0 命中 |
| CTA check | **每日中午 yes**（7.5–8.9s CTA 卡 OCR「每日中午」「粵語 AI 3 步」「追蹤 JD」「少啲試錯」；caption ×1；朝早／07:00／留言 1／Collab＝0） |
| **Verbatim check** | **唔過（Critical）** — BUTTONS refined reply **從來冇喺片內逐字出現過**：封面之後格成段中段（等佢好返返學後，如果學校需要，我會補交醫生）成條唔見，讀成「（明天）。紙。」；第 3 步特寫漏咗「交醫生」三字，讀成「我會補紙。」（詳 R2） |

**本檔只係 GLM 5.3 一票。** 硬線：mean≥8 AND R9≥8 AND Critical=0 → 本席三條唔過兩條（mean 7.33＜8；Critical＝1）。R10＝layout_PASS 已雙簽（gates VERDICT PASS · tip 31.1／28.6／31.9 ≤40 · Art「圈心＝掣心 PASS」· LAYOUT-SIGNOFF 21:47），按 BRIEF 只註、唔重審、唔入均分。

---

## 站立核對（BRIEF 指定要查）

| # | 要查 | 結果 | 證據 |
|---|---|---|---|
| 1 | host＝qianwen.com（非 Guest／免登入主張） | 過 | caption `#開千问`：「開 qianwen.com，composer 見『向千问提问』」。BUTTONS：capture `https://www.qianwen.com/`（chat.qwen.ai TLS 讀 0 bytes，僅 `qwen.ai/home` marketing）。reel 畫面係千问真 UI（你好，我是千问／快速／PPT创作／AI生视频／AI生图／代码／翻译／更多）。landing（main `d59eaa4`）`qianwen.com` ×12。reel 全片 45 幀（0.2s 步）＋caption＋landing 掃描：免登入／免登录／Guest／唔使登入／未登入＝**0 主張命中**；caption 反而披露「畫面可見『登录』banner；登入要求以當日介面為準」——誠實方向正確 |
| 2 | CTA on-screen＝每日中午；禁朝早／07:00／留言 1／Collab | 過 | 7.5s 起 CTA 卡（抽幀 7.5／8.0／8.5s，3× OCR）：「每日中午」「粵語 AI 3 步」「追蹤 JD」「少啲試錯」。caption 末句「每日中午粵語 AI 3 步，想少啲試錯可以追蹤 JD」。全片＋caption＋landing：朝早／07:00／留言／Collab＝0 |
| 3 | Cover：通義千問＋請假短訊／即出稿 | 過 | 0.0–1.4s 封面字卡：line1 **通義千問**、line2 **請假短訊**＋accent **即出稿**（chips JD TECH；抽幀＋附件 cover.png 描述一致）。尾段迴封面 |
| 4 | 步驟：開千问／发送消息黑箭／复制 | 過（有扣） | 1.5s STEP 1/3「開千问／向千问提问」（composer 灰 placeholder＋灰圓箭真空態）；3.5–4.5s STEP 2/3「撳黑箭／发送消息」，黑圓白上箭掣面無字（4.5s 特寫 8× 核實：dark charcoal/black circle＋white up-arrow；同 caption「畫面無字」）；5.5s STEP 3/3「撳复制／抄請假短訊」，訊泡下動作列見复制 icon。扣：「复制」菜單字（复制为Markdown／复制）全片未入鏡，觀眾只見 icon |
| 5 | **畫面＝可貼得體請假短訊（BUTTONS refined 逐字；禁假結果）** | **唔過（Critical）** | 見 R2。核心證據：全片 0.2s 步掃「醫生／補交」只喺 t≈1.6–4.4s 提示文字入面（「會補交醫生紙如果學校需要」係 prompt 嘅要求句，唔係結果）；結果面板（封面 0–1.5s、第 3 步 5.5–7.5s、CTA 卡 7.5–8.9s）從未出現過完整「補交醫生紙」。封面之後格只有兩行文字帶（y≈1330–1340、y≈1370–1380），逐字＝「老師您好，小三乙小明聽朝發燒，所以想幫佢請假一日（明天）。」＋「紙。麻煩老師，謝謝！家長」——中段成句唔見咗。第 3 步（闊鏡 5.5s＋特寫 6.0s）兩行文字帶逐字＝「老師您好…等佢好返返學後，如果學校需要，我會補」（行尾掣貼卡邊）＋「紙。麻煩老師，謝謝！家長」——「交醫生」三字喺換行位消失，畫面句讀「我會補紙。」。BUTTONS capture 原文係「我會補交醫生紙。」——畫面嗰句工具冇出過 |
| 6 | 示範虛構＋按實際改；唔係政策意見；密碼喺網頁；landing URL 一致 | 過 | caption `#注意`「示範為虛構港家庭請假情景；請按實際情況改寫…AI 可能出錯；正式請假請自行核對」。landing「唔係學校／請假政策意見，亦唔係醫療意見」＋虛構披露（#113 之後已對返小明／小三乙）。密碼 jdtech3 在 `/workflow/`。caption URL＝`/reels/qwen-school-leave-msg/` live 200；landing（main）已引用完整 refined 短訊做對稿用（呢點減低觀眾抄錯嘅實害，但救唔返片內逐字要求） |

---

## 總評

# **FAIL（退回）**

均分 **7.33**（66/9）＜8 · **R9＝8** 過自身門檻 · **Critical＝1**。

主幹（host、slug、CTA、步驟、掣名、登入誠實披露、虛構免責、密碼頁、noon-only）全部過——呢部分同 Kimi 席一致。本席退回嘅唯一核心原因：**BRIEF 指定嘅「BUTTONS.md refined reply 逐字」喺成片任何一格都做唔到**。片內結果短訊出現過四個地方（封面之後格、第 3 步闊鏡、第 3 步特寫、CTA 卡），每一處都有文字缺失：封面漏成個中段（等佢好返返學後，如果學校需要，我會補交醫生），第 3 步喺換行位漏「交醫生」，畫面讀出嚟係「（明天）。紙。」同「我會補紙。」——兩個都係爛句。「醫生紙」呢個承諾（BUTTONS checklist 自家要求嘅元素）喺片內結果區**一次都冇完整出現過**；有「醫生」字嘅畫面全部係 prompt（用家要求句），唔係結果。觀眾照 caption 第 3 步「畫面得體請假短訊。撳『复制』抄走」跟住做，抄到嘅係工具冇出過嘅爛版——正正係 BRIEF「禁假結果」同 RUBRIC R2「畫面做唔到 caption 所講」要堵嗰類嘢。呢個唔係劃位問題（R10 雙簽唔包文字內容），係結果文字被引擎重排時蝕咗字。

**同 Kimi 席嘅分歧記錄（重要，俾人手複核）：** Kimi 席（PASS 8.44）話封面之後格＝BUTTONS refined 全文「完整無截斷」。本席用四個獨立方法覆核過封面之後格（像素行帶掃描、逐行 OCR、放大 4×／16× 目視、全片 0.2s 字掃），一致證實只有兩行、中段成句缺失。複核方法：`ffmpeg -i reel.mp4 -vf select=not\(mod\(n\,15\)\)` 抽幀，取 0.0s 幀，crop (90,1300,1010,1460) 放大——嗰格只有「老師您好…（明天）。」同「紙。麻煩老師，謝謝！家長」兩行，中間冇第三行；y≈1350–1360、y≈1400–1420 係純白。第 3 步 5.5s 幀 crop (820,1120,1010,1200) 放大 8×——行一以「我會補」收尾貼住卡邊；crop (114,1155,190,1182) 放大 16×——行二第一個字就係「紙」，左邊冇「交醫生」。請人手重驗呢兩個 crop。

**CTA 每日中午：yes。Guest／免登入：0 主張。Cover：通義千問＋請假短訊／即出稿 yes。Host＝qianwen.com yes。Slug＝qwen-school-leave-msg yes。Verbatim on screen：NO（Critical）。**

---

## R1–R9

### R1 事實嚴謹 — **7／10**

- 理由：caption 每句硬事實（qianwen.com 入口、「向千问提问」placeholder、「发送消息」aria＋掣面無字、复制菜單、登录 banner、noon-only、密碼頁、虛構）全部對得上同日 capture（BUTTONS）或 live URL；無 VPN、無「官方支援香港」、無免登入主張。扣分：片內結果文字（「我會補紙」）唔係任何 capture 出過嘅句子——畫面上有一句「無來源」嘅所謂結果；caption 講「畫面可見『登录』banner」但全片 45 幀掃唔到「登录」二字（banner 喺 capture 有、片內裁咗）——對片內觀眾係一個佢驗證唔到嘅聲稱。
- 證據：BUTTONS（capture 2026-10-28 21:30 HKT：`www.qianwen.com/` 未登入、登录 banner、「复制为Markdown／复制」、黑圓白上箭）；caption 逐句對照；reel 全片 0.2s 步 chi_tra 掃描（登录＝0 命中）。
- Critical：無（R1 觸發條款係「無來源硬事實／教 VPN／假官方支援香港」——入口同登入主張方向真；結果文字問題歸 R2）。

### R2 示範一致 — **5／10** · **Critical**

- 理由：三步次序、掣名、「畫面無字」披露全部同 caption 一致，r2c 亦真係授權嘅 qwen_1_typed 態（composer 有深色提示字＋黑圓白上箭，同 BUTTONS「Composer text is black」相符——Kimi 席話 r2 係空 composer＋黑箭，本席 4.0s 幀覆核見 composer 有提示字，呢點本席判冇問題）。**但 caption 第 3 步承諾「畫面得體請假短訊。撳『复制』抄走，可貼班主任 WhatsApp」片內兌現唔到**：畫面顯示嘅「結果」唔係 capture 嗰段，係蝕咗字嘅變體——觀眾照抄會抄到「我會補紙。」爛句，而「補交醫生紙」承諾完全流失。BRIEF 明文「BUTTONS.md refined reply 逐字（禁假結果）」——逐字唔達標。
- 證據（四個獨立方法，全部指向同一結論）：
  1. **全片文字掃**：0.2s 步 45 幀 chi_tra OCR，「醫生／補交」只喺 t≈1.6–4.4s 出現，全部喺 prompt 文字內（「會補交醫生紙如果學校需要」＝用家要求句）；t0–1.5s（封面）、t5.5–8.9s（第 3 步＋CTA）結果區 0 命中。
  2. **封面之後格**（0.0/0.5/1.0s 幀）：行帶分析只有兩條文字帶；逐字＝「老師您好，小三乙小明聽朝發燒，所以想幫佢請假一日（明天）。」／「紙。麻煩老師，謝謝！家長」；中段 15 字（等佢好返返學後，如果學校需要，我會補交醫生）完全唔見；junction 讀「（明天）。紙。」。
  3. **第 3 步闊鏡＋特寫**（5.5s／6.0s 幀）：行一 48 字＝「老師您好…等佢好返返學後，如果學校需要，我會補」（「補」貼卡右邊 x≈897 半cut）；行二由左邊界 x120 起＝「紙。麻煩老師，謝謝！家長」（12 字 ×16.4px 恰好 197px，前面冇位放過「交醫生」）；16× 放大行二首字確認係「紙」唔係「交」。junction 讀「我會補紙。」。
  4. **片內冇任何回覆泡**：3.5–5.4s shot 係「你好，我是千问」＋composer（提示已貼、未送出）——冇 assistant 回覆；所以唯一嘅「結果」展示就係上述蝕字面板。
- **Critical：有。** 觸發「畫面做唔到 caption 所講」（caption 承諾畫面有得體短訊可抄走，畫面嗰段係爛句、抄唔得）＋BRIEF「禁假結果」（畫面結果文字≠capture 結果，工具冇出過「我會補紙」呢句）。R7 嗰條「UI verbatim 簡體唔當 Critical（非引擎亂改）」係豁免簡體字形，唔豁免引擎重排時蝕走結果文字。
- 緩減因素（唔改 Critical 判定）：landing（main `d59eaa4`，#113 之後）已逐字引用完整 refined 短訊做對稿用，觀眾去頁可以攞到正確版本；但 caption 第 3 步係叫人抄「畫面」，片內逐字要求係 BRIEF 硬指標。

### R3 封面誠實 — **6／10**

- 理由：封面大字承諾（請假短訊／即出稿）片內第 3 步有兌現（90% 完整度嘅真結果，非另一段文），唔係掛羊頭——所以唔觸 R3 Critical。扣分：封面自己嗰格「之後」範例就係蝕咗中段嘅爛版（「（明天）。紙。」），即係封面一邊承諾「即出稿」，一邊擺咗個稿爛咗嘅樣本；對眼利嘅觀眾，封面即時自相矛盾。
- 證據：0.0–1.4s 之後格逐字（見 R2 證據 2）；5.5s 起第 3 步同一短訊（見 R2 證據 3）；封面大字 OCR＋附件 cover.png。
- Critical：無（承諾嘅結果片內有出現，R3 條款唔觸發；逐字問題已計入 R2）。

### R4 工具／產品準確 — **9／10**

- 理由：產品名（通義千問／千问）、入口（www.qianwen.com，live 200）、登入要求（登录 banner 有披露、冇將登入牆當免登入、冇 Guest 主張）、掣態（灰圓空→黑圓白上箭 ready、掣面無 Send、生成中「停止回答」、菜單复制为Markdown／复制）全部同 BUTTONS capture 一致。chat.qwen.ai TLS 失敗如實記錄而且冇當入口。
- 證據：caption `#開千问`；landing（main）`qianwen.com` ×12、capture 紀錄段；reel r2c 特寫黑圓白上箭（8× 目視）；BUTTONS verbatim labels。
- 扣 1 分：caption「畫面可見『登录』banner」喺片內驗證唔到（全片 0 命中「登录」）——capture 有、片內裁走咗，觀眾只可以信頁。
- Critical：無。

### R5 文案嚴謹 — **7／10**

- 理由：CTA（每日中午）片＋caption＋landing三處一致；密碼句有頁有密碼（`/workflow/` jdtech3，live 200）；免責齊（虛構／按實際改／AI 可能錯／自行核對／登入以當日為準／唔係政策意見）；禁句（留言 1／Collab／朝早／07:00）0 命中；hook 係陳述句書面中文。
- 證據：caption 全文逐句核對；landing（main）jdtech3 ×1、「每日中午」×1；reel CTA 卡 OCR。
- 扣 3 分：① caption 寫「本則逐步截圖：<URL>」，但 landing 五張 UI 圖全部「截圖…未放入」（×7 處標明未嵌入；頁面誠實申報、BRIEF 亦申報未 wire，但 caption 承諾兌現一半）；② 「密碼喺網頁（個人檔連結）」caption 出現兩次，冗餘；③ 本席 live curl 抓到嘅 GitHub Pages 仲係 #110 前舊頁（有「唔使撳『登录』」同「林朗／小四甲」）——main 已修（#111/#113），Share 前必須確認 Pages 已重建（唔係內容錯，係部署時序風險，記錄在案）。
- Critical：無（承諾密碼有頁；截圖未放入有明示）。

### R6 結構節奏 — **9／10**

- 理由：0s 已係結果卡（之前／之後）；紫圈 early motion ＜2s（0.7s 打上訊首行，layout gates 範圍）；三步 1.5／3.5／5.5s，特寫節拍 r1c／r2c／r3c 齊；mid_beat＝授權 qwen_1_typed 態（4.0s 覆核：composer 深色提示字＋黑圓白上箭）；CTA 7.5–8.9s hold；全長 9.000s（ffprobe：270 幀／30fps／1080×1920／h264＋aac）≤15s；音量 mean −17.4 dB／max −4.3 dB，無旁白主張。
- 證據：ffprobe＋逐 0.5s 抽幀結構映射；YAVG 突變定位（3.67／4.00／5.67／7.67s）。
- Critical：無（此項唔自動 Critical）。

### R7 合規／字形 — **9／10**

- 理由：公開 caption 全繁體粵語（撳／喺／嘅／聽朝）；片內字卡（請假短訊／即出稿／撳黑箭／抄請假短訊／每日中午）全繁體；簡體只出現喺 UI verbatim（千问／向千问提问／发送消息／复制／登录）同步驟 hashtag 引用掣名——BRIEF 明文「R7 披露即可，唔當 Critical（非引擎亂改）」，caption `#注意` 有披露；無日文、無 Pip。
- 證據：caption 逐字；字卡 OCR；BRIEF R7 豁免條款原文。
- 扣 1 分：#開千问／#撳复制 hashtag 將簡體掣名帶入公開 caption——指定格式兼產品真名，有披露，但係可見字形妥協（同 Kimi 席同款觀察）。
- Critical：無。

### R8 可傳性／場景 — **6／10**

- 理由：港場景＋intent 尖（阿仔聽朝發燒→班主任 WhatsApp 請假短訊；聽朝／幫佢／好返返學／醫生紙／麻煩老師全部在片）；提示全文 step 1/2 睇得晒、可照抄（呢部分完全可傳）。扣分：**即用結果本身喺片內唔即用**——第 3 步（教人抄嗰步）畫面短訊係「我會補紙。」爛句；封面範例仲爛（成個中段冇咗）。觀眾唯一攞到完整正確版本嘅途徑係 landing（#113 之後有逐字對稿用全文），即係「跟片做」同「抄到啱」分咗家。
- 證據：R2 證據 2／3（封面＋第 3 步逐字）；landing 全文引用（main `d59eaa4`）；caption 第 3 步原文。
- Critical：無（R8 無 Critical 條款）。

### R9 吸引力 — **8／10**

- 理由：① 0–2s：封面已係結果（之前／之後卡）＋大字得益句「請假短訊／即出稿」＋紫圈動；停滑成立。② 陌生人 1 秒明「睇完攞到一段請假短訊」。③ 完結拉力：「追蹤 JD／少啲試錯／每日中午／粵語 AI 3 步」。④ 唔靠假承諾——結果係同日真 capture 嘅變體。扣 2 分：封面之後格範例爛版（「（明天）。紙。」）令「即出稿」嘅示範力度打折；視覺係系列模板，衝擊靠題材。
- 證據：0.0–1.4s 封面；7.5–8.9s CTA 卡 OCR；R2 證據。
- Critical：無（封面／hook 唔係假結果亦唔係假工具——結果真、只係顯示蝕字，唔同時觸 R3／R4 Critical 條款）。**R9＝8，過自身門檻（≥8）。**

**均分：7.33／10**（7+5+6+9+7+9+9+6+8 = 66 ÷ 9）｜ **R9＝8（≥8）**｜ **Critical＝1 → FAIL**

---

## R10（只註，唔評分、唔入均分）

`layout_PASS` 已齊：gates VERDICT PASS、tip r1c／r2c／r3c = **31.1／28.6／31.9** ≤40、排版 LAYOUT-SIGNOFF 2026-10-28 21:47、Art「圈心＝掣心 PASS」、qa WARN／0 FAIL。按 BRIEF 唔重審箭尖、圈心、safe zone。**注意**：layout 閘管劃位，唔管結果文字內容——本席 R2 嘅 Critical 係文字逐字問題，唔係圈心／tip 問題，兩閘唔重疊；LAYOUT-SIGNOFF 備註「r3c half_cut frag：shot 底 y1244 碎字／icon；箭／圈貼覆訊首行」只係講視覺碎塊 OK，唔等於核實過訊息全文逐字。

---

## Critical 清單

1. **R2 — BUTTONS refined 請假短訊冇喺片內逐字出現（禁假結果類）。** 封面之後格缺成個中段（等佢好返返學後，如果學校需要，我會補交醫生）；第 3 步闊鏡＋特寫喺換行位缺「交醫生」；畫面句讀「（明天）。紙。」／「我會補紙。」；「補交醫生紙」承諾喺片內結果區 0 次完整出現（有「醫生」嘅畫面全部係 prompt 要求句）。caption 第 3 步承諾畫面有得體短訊可抄走 → 畫面抄到嘅係工具冇出過嘅爛句。

## FAIL 必改項（編號；點改先過閘）

1. **重出結果面板，令 BUTTONS refined reply 逐字上片**（救 R2 Critical）：全文 62 字＝「老師您好，小三乙小明聽朝發燒，所以想幫佢請假一日（明天）。等佢好返返學後，如果學校需要，我會補交醫生紙。麻煩老師，謝謝！家長」。封面之後格、第 3 步闊鏡、第 3 步特寫、CTA 卡四處至少一處（建議第 3 步特寫，即教抄嗰步）要以可讀字級完整顯示全文，換行唔可以斷喺「我會補｜交醫生」呢啲位、行尾唔可以貼卡邊蝕字；改完用本檔 R2 證據嘅 crop 坐標逐字複核（封面 crop (90,1300,1010,1460)；5.5s 幀行尾 crop (820,1120,1010,1200)＋行首 crop (114,1155,190,1182)），確認「補交醫生紙」五字同框完整。
2. 其餘（host／slug／CTA／步驟／caption／landing 結構）已過，唔使郁。
3. **Share 前收尾（非本席 Critical，但 noon 前必須）**：landing 嵌入 qwen_0_before／qwen_1_typed／qwen_2_send／qwen_3_after（＋可選 qwen_4_copy）五圖（caption 承諾「本則逐步截圖」）；確認 GitHub Pages 已重建至 main `d59eaa4`（本席 live 抓到嘅仲係 #110 前舊頁，有「唔使撳『登录』」同「林朗／小四甲」）。
4. **重跑三 model 閘**：按 RUBRIC「未達標 → 重做」，重做後必須重新跑三 model 閘，過全 8 先准 noon Share；禁止小改 caption 頂住、禁止 Share 後再補。

## 非阻擋建議（FAIL 情況下仍然記低，供重做版參考）

1. caption「畫面可見『登录』banner」——banner 喺 capture 有、片內冇；重做版可裁一格帶埋 banner 入鏡，或者改做「capture 畫面可見『登录』banner（見連結頁）」。
2. 「复制」菜單字（复制为Markdown／复制）全片未入鏡，第 3 步只見 icon；重做版可用 qwen_4_copy 開菜單態，令 caption「撳『复制』」個掣名落地。
3. caption「密碼喺網頁（個人檔連結）」出現兩次，留一次。
4. r2c 係授權 qwen_1_typed fallback 態（本席覆核 composer 有深色提示字＋黑箭，同 BUTTONS 相符，唔同意 Kimi 席「空 composer＋黑箭矛盾」嘅扣分理由——記錄俾引擎組，唔使改）。
5. BUTTONS 自計 62 字 all-in／52 Han，Han 數略低過 prompt 要求嘅 60–100 下限——引擎結果，唔係 reel 缺陷；下次 refine 可要求補足字數。

## 核對記錄

- reel sha256 實測＝`9261a306e4c4bf317545759a9078008907c49a59db205dd1e8047dba56812b2c`（＝BRIEF／LAYOUT-SIGNOFF）
- caption sha256 實測＝`1e488c0105f7163073b6e9651b9219f26d85e7bd203982664d07ce67b2f5e194`；BUTTONS sha256 實測＝`915665e0242faae7622480e3b4703423dc5be0af781b7fd2cebfff18cb0b546a`
- ffprobe：9.000s／270 幀／30fps／1080×1920／h264＋aac；音量 mean −17.4 dB／max −4.3 dB
- 結構映射：0–1.4s 封面（之前／之後）；1.5s STEP 1/3（開千问／向千问提问）；3.5–5.0s STEP 2/3（撳黑箭／发送消息；4.5s r2c 特寫黑圓白上箭）；5.5s STEP 3/3（撳复制／抄請假短訊；6.0s r3c 特寫）；7.5–8.9s CTA 卡（每日中午／粵語 AI 3 步／追蹤 JD／少啲試錯）；尾幀迴封面
- 全片 0.2s 步 45 幀 chi_tra+eng OCR 全掃：免登入／免登录／Guest／唔使登入／未登入／留言／朝早／07:00／Collab＝0；「醫生／補交」只 t≈1.6–4.4s prompt 內；「登录」片內 0 命中
- 逐字覆核（封面之後格＋第 3 步）：行帶掃描＋逐行 OCR（psm 6/7）＋4×／8×／16× 放大目視＋x-座標字寬驗證（行二 12 字 ×16.4px＝197px＝x120–317，前面無空位）——四法一致
- landing：live curl 200（惟內容係 #110 前舊頁）；main `d59eaa4`：免登入 0／唔使登入 0／林朗 0／小明 18／老師您好 12／jdtech3 1／截圖未放入 ×7／完整 refined 全文已引用（對稿用）
- BRIEF／RUBRIC 已在 `docs/ep47-rigor/`（BRIEF.md／RUBRIC.md 同 upload 逐字一致，本席冇重複加）
- layout_PASS 未重審；tip 只記 31.1／28.6／31.9
- 冇改 `reels/`、冇改產品頁、冇 Share

— GLM 5.3 · Ep.47 rigor 1/3 票 · **FAIL（退回）**（均分 7.33 · R9 8 · Critical 1）· 未代 Share · Share 維持 ONLY 2026-10-29 12:00 HKT
