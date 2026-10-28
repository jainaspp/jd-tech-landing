# Ep.47 rigor 評分 — Kimi K3（三閘之一 · 1/3）

- 對象：Ep.47 · slug `qwen-school-leave-msg` · 系列「香港人 AI 一招」· 通義千問／千问 at **https://www.qianwen.com/** · 目標 Share **2026-10-29 12:00 HKT**（本閘唔准 Share；本 PR 係 scores-only）
- 評分員：**Kimi K3**（獨立一票）· 2026-10-28 UTC
- 輸入：BRIEF／RUBRIC v0+v1（R9）+v2（R10 只註）／caption／BUTTONS.md（2026-10-28 21:30 HKT capture）／LAYOUT-SIGNOFF（2026-10-28 21:47）／reel.mp4
- reel sha256：**`9261a306e4c4bf317545759a9078008907c49a59db205dd1e8047dba56812b2c`** — 我對 upload `reel.mp4` 重算 sha256sum，逐字一致 ✓
- 硬規：**PASS only if mean(R1–R9)≥8 AND R9≥8 AND Critical=0**。Art／排版雙簽唔畀免費分。
- **R10**：layout_PASS 已齊（gates VERDICT PASS · tip **31.1／28.6／31.9 ≤40** · Art「圈心＝掣心 PASS」· LAYOUT-SIGNOFF 2026-10-28 21:47 · qa WARN／0 FAIL）。按 BRIEF **只註、唔重審、唔入均分**。人眼補記一筆（唔再評）：r2w 闊鏡紫圈落喺 composer 下方近「内容由AI生成，可能不准确，请注意核实」行，黑圓白上箭喺 composer 右端圈外；r2c 特寫個圈先正落黑箭（LAYOUT-SIGNOFF r2c 目標 `[1108,511,1124,527]`＝发送消息 掣，tip 28.6）。r2w 圈位屬已簽 layout 範圍，記錄到此。
- 方法：sha256sum 對 reel；ffprobe＋逐段抽幀（0.05／0.70／1.30／2.10／3.30／4.10／4.60／5.00／5.30／6.10／7.30／8.50／8.80s＋尾幀 n=269），爭議位 2–3× 放大核對（封面訊息泡逐字、r1w／r2w／r2c／r3c composer 同掣色、r3c 動作列箭嘴）；caption 禁詞／必須詞全掃；landing HTML（origin/main @ `7ec64b4`，#109＋#110 已 merged）逐項 grep＋live URL curl。

---

## 總評：**PASS**

均分 **8.44**（76/9）≥8 · **R9＝8** ≥8 · **Critical＝0** → 三條硬線全過。本席 **PASS**。未代 Share；Share 維持 ONLY **2026-10-29 12:00 HKT**，仍須三席多數 `rigor_PASS`。

一句講晒：封面 **通義千問**＋**請假短訊／即出稿**，之後格係**完整** BUTTONS refined 請假短訊（逐字到「家長」）；三步開千问（向千问提问）→ 撳黑箭（发送消息；黑圓白上箭；「畫面無字」有披露）→ 撳复制（得體請假短訊）同 caption 承諾對得上；host＝**qianwen.com**（chat.qwen.ai TLS 失敗有據，無當入口）；全片＋caption＋landing **零 Guest／免登入主張**，登录 banner 如實披露；CTA **每日中午**；禁句零命中。扣分集中喺：r2w／r2c 黑箭配空 composer（同 r1w／r3c 灰箭及 BUTTONS 記錄矛盾，屬授權 mid_beat fallback 嘅連戲痕）、第 3 步只見复制 icon 未見「复制」菜單字、landing 示範細節（林朗／小四甲／班主任你好）同 reel 實際（小三乙小明／老師您好）不符、caption「逐步截圖」承諾未兌現。

### 硬核五項（BRIEF 指定要查）

| 項 | 判定 | 證據 |
|---|---|---|
| host＝qianwen.com（非 chat.qwen.ai-only）；**無** Guest／免登入主張 | **過** | caption「開 qianwen.com，composer 見『向千问提问』」。reel r1w／r3w 畫面係 www.qianwen.com 真 UI：sidebar 千问／新对话／云空间、頂部「登录」掣＋橫額「登录可同步历史对话，解锁更多功能」、Qwen3.7-千问、「内容由AI生成，可能不准确，请注意核实」。BUTTONS：capture「not signed in」＋「**免登入 is not claimed**」＋chat.qwen.ai「TLS handshake reads 0 bytes（ERR_CONNECTION_CLOSED）」。caption／全片抽幀／landing：Guest、免登入、唔使登入、未登入＝**0 主張命中**（landing 唯一「Guest」係上一集 Ep.46 Lumo cross-link 標題；「使唔使登入以你當日畫面為準」係 hedge 唔係主張） |
| CTA「每日中午」 | **過** | 8.50／8.80s CTA 字卡側邊「每日中午、」／「粵語 AI 3 步」，大字「追蹤 JD／少啲試錯」，chips「JD TECH · Ep.47 · 千问」。caption 末句「每日中午粵語 AI 3 步」。全片＋caption＋landing：朝早／07:00／留言 1／Collab＝**0 命中**（hook「孩子明早發燒」係故事時間唔係 drop 時間主張，已核） |
| 封面 通義千問＋請假短訊／即出稿 | **過** | 0.05s 字卡 line1 **通義千問**（chips JD TECH · Ep.47 · 千问）、line2 **請假短訊**（accent）＋**即出稿**；尾幀 n=269＝封面 loop |
| 步驟 開千问／发送消息黑箭／复制 | **過（有扣）** | 2.10s r1w：placeholder「向千问提问」＋**灰**圓箭（空態真）；3.30s r1c 字卡「開千问／向千问提问」。4.10s r2w＋5.30s r2c 字卡「撳黑箭／发送消息」，黑圓白上箭掣面**無字**（同 caption「发送消息；畫面無字」逐字相符）；圈落黑箭（r2c 2× 核實）。6.10s r3w／7.30s r3c 字卡「撳复制／得體請假短訊」，動作列見复制 icon，白箭箭嘴落复制 icon（2× 核實）。扣：r2w／r2c composer 顯示 placeholder（空）但箭係**黑**，同 r1w／r3c 空 composer **灰**箭矛盾（詳 R2）；「复制」二字菜單全片未入鏡 |
| 畫面＝可貼得體請假短訊（BUTTONS refined；禁假結果）；虛構＋按實際改；唔係政策意見 | **過** | 0.05／1.30s 封面之後格、4.10s r2w、6.10s r3w、7.30s r3c 同一段，2× 放大逐字對 BUTTONS.md「Final message (after one refine)」一致：「老師您好，小三乙小明聽朝發燒，所以想幫佢請假一日（明天）。等佢好返返學後，如果學校需要，我會補交醫生紙。麻煩老師，謝謝！家長」完整無截斷。提示全文「幫我寫一段香港家長 WhatsApp 畀班主任嘅請假短訊：小三乙小明聽朝發燒，想請假一日（明天），語氣有禮簡短，如需醫生紙會後補，唔好寫到似公文。」4.10／5.30s 睇得晒。caption「示範為虛構港家庭請假情景；請按實際情況改寫…AI 可能出錯；正式請假請自行核對」；landing「唔係學校／請假政策意見，亦唔係醫療意見」 |

### 其他 BRIEF 指定檢查

| 項 | 判定 | 證據 |
|---|---|---|
| 密碼喺網頁（個人檔連結） | **過** | caption 有「密碼喺網頁（個人檔連結）」（×2）；`/workflow/` 頁上密碼 **jdtech3** 在；landing「密碼喺網頁」×2 |
| landing URL `/reels/qwen-school-leave-msg/` 一致 | **過** | caption URL 同 slug 一致；origin/main 已有頁（#109 merged 建頁、#110 merged 清 Guest／改 qianwen.com host）；live curl **200**，頁內 `qianwen.com` ×16、`qwen-school-leave-msg` ×7 |
| 禁 `qwen-policy-plain` slug in caption／CTA | **過** | caption／全片零命中。landing 有 1 處，係「相關 Reel」導航卡指向第26集（同一個通義千問品牌，換保單條款），屬正當 cross-link，唔係 slug 串錯 |
| mid_beat fallback `qwen_1_typed` 掣心 | **過（授權內，有扣）** | BRIEF 已授權 COPY_PASS fallback（原 qwen_2_send）；LAYOUT-SIGNOFF r2c 目標 `[1108,511,1124,527]`（发送消息 黑箭）tip 28.6。但 r2w／r2c 實際畫面唔係 qwen_1_typed 嘅「composer 深色字」態（BUTTONS：「Composer text is black, not the gray placeholder」），而係「泡＋placeholder＋黑箭」（詳 R2） |
| 密碼／shortcode 狀態 | **過（如實）** | landing 如實寫「noon-only。呢頁未接 shortcode」，同 BRIEF「未接 shortcode」一致，無假裝已接 |

---

## R1–R9

### R1 事實嚴謹 — **8／10**

- 理由：工具、入口、登入狀態、三步、短訊全文都有同日（2026-10-28 21:30 HKT）capture 或 live URL 支撐；冇誇大、冇教 VPN、冇「官方支援香港」、冇免費承諾、冇免登入主張。
- 證據：`www.qianwen.com` live 200（landing ×16）；chat.qwen.ai 失敗 BUTTONS 有據（TLS 0 bytes／ERR_CONNECTION_CLOSED），landing 老實寫「以你當日頁為準」；登录 banner 畫面可見＋caption 披露「畫面可見『登录』banner；登入要求以當日介面為準」；模型字 Qwen3.7-千问 verbatim；短訊 62 字全段入鏡（BUTTONS 計數：62 all-in／52 Han）；虛構喺 caption／landing meta／landing 步驟三處標明；私隱提醒「未貼提示之前，確認冇真實學校名、學生編號、電話、地址」。
- 扣 2 分：① r2w／r2c 呈現「空 composer＋黑箭」狀態，同 BUTTONS「gray circle (empty) → black (ready)」嘅 UI 行為記錄唔符，屬不準確嘅介面呈現（詳 R2）。② landing 稱今次 capture 用「林朗、小四甲、2026-10-30 發燒請一日…開頭『班主任你好』」，同 capture 實際內容（小三乙小明／（明天）／老師您好）不符——landing 層嘅硬事實錯，唔係 reel／caption。
- Critical：無（入口真、登入冇講大話、短訊真、無無來源硬事實喺 reel／caption）。

### R2 示範一致 — **7／10**

- 理由：三步畫面＝caption 承諾，掣名 verbatim 兼「畫面無字」有披露；但 r2 兩格呈現唔可能同時成立嘅 UI 狀態。
- 證據：
  1. **開千问**：2.10s r1w 係空白 composer（「向千问提问」灰 placeholder）＋**灰**圓箭＝真實空態；3.30s r1c 同態特寫 ✓。caption 步 1「開 qianwen.com，composer 見『向千问提问』，貼上請假短訊提示」對得上 ✓
  2. **撳黑箭**：4.10s r2w 見提示泡＋**完整短訊回覆**，composer 顯示 placeholder（空）但箭係**黑圓白上箭**；5.30s r2c 特寫同態（提示泡＋placeholder＋黑箭＋圈落掣上）。按 BUTTONS「empty→灰」同本片自己嘅 r1w（2.10s）／r3c（7.30s）空 composer 都係**灰**箭，r2 嘅黑箭配空 composer 喺真產品唔會出現——係引擎為步驟視覺留低嘅合成／連戲痕（mid_beat fallback BRIEF 有授權，但授權源 qwen_1_typed 本身係「composer 深色字」態，同呢兩格都唔完全一樣）。
  3. **撳复制**：6.10s r3w 動作列見复制 icon；7.30s r3c 白箭箭嘴落复制 icon（2× 核實）；但「复制」二字菜單（复制为Markdown／复制，BUTTONS 有記錄）全片未入鏡，觀眾只見 icon 唔見字。
- 扣 3 分：① r2w／r2c 黑箭空 composer 內部矛盾（-2）；② 复制菜單字未入鏡（-1）。
- Critical：無。關鍵承諾（貼提示→黑箭→撳→出短訊）逐步可執行、結果真；黑箭本身係真 capture（qwen_1_typed 有據）；冇假結果、冇假能力、冇假工具。BRIEF 已授權 send-beat fallback，Art＋排版雙簽人呢眼過呢啲格；內部矛盾屬 Major，唔屬「畫面做唔到 caption 所講／假 UI」嘅否決類。

### R3 封面誠實 — **9／10**

- 理由：大字得益＝片內結果，而且之後格一次過睇得晒成段短訊。
- 證據：0.05／1.30s 之後格（2× 放大逐字核）＝BUTTONS refined 全文，由「老師您好」到「家長」**無截句**——聽朝發燒、請假一日（明天）、好返返學後補醫生紙、麻煩老師主句全部入鏡。0s 已有結果，唔使等到第 3 步；第 3 步結果同封面承諾一致，冇掛羊頭。
- 扣 1 分：之後格字喺手機偏細（系列常態取捨；紫圈疊住首行左緣但仍可讀）。
- Critical：無（封面承諾結果片內有出現）。

### R4 工具／產品準確 — **10／10**

- 理由：產品名、入口 URL、登入要求三項全對，今日核。
- 證據：名＝通義千問／千问（cover line1／CTA chip／caption／hashtag 一致）；入口 `https://www.qianwen.com/` live 200；chat.qwen.ai 失敗如實披露而且**冇**當入口用（無「chat.qwen.ai-only」誤導）；登入要求無講大話——畫面「登录」掣＋橫額入鏡、caption「登入要求以當日介面為準」、landing「capture 冇撳登录，回覆仍然出到。使唔使登入以你當日畫面為準」；模式字 Qwen3.7-千问 verbatim；冇將第26集舊入口（chat.qwen.ai）混入市面。
- Critical：無（錯工具名／登入牆當免登入兩個觸發都唔存在）。

### R5 文案嚴謹 — **7／10**

- 理由：CTA／密碼句／免責／URL 全齊；但 caption 承諾兌現一半，landing 示範細節同 reel 對唔上。
- 證據：「每日中午」片＋caption 一致；「密碼喺網頁（個人檔連結）」有頁有密碼（jdtech3）；免責齊（虛構／按實際改寫／AI 可能出錯／自行核對／登录 banner 披露／登入以當日為準）；landing URL 一致且 live 200；禁句（留言 1／Collab／朝早／07:00／Guest／免登入）0 命中；hook 係陳述句書面中文；「想稍後再跟？可先收藏本則」係正當 save CTA。
- 扣 3 分：① caption 寫「本則逐步截圖：<URL>」，但 landing 五張 UI 圖全標「截圖…未放入」（頁面有明示，唔係假圖；BRIEF 亦申報未 wire），承諾兌現一半。② landing 步驟稱示範用「林朗、小四甲、2026-10-30、開頭『班主任你好』」，同 reel 實際「小三乙小明、（明天）、老師您好」唔同，讀者對返片會混亂。③「密碼喺網頁（個人檔連結）」喺 caption 出現兩次（#注意 段尾＋連結行），冗餘。
- Critical：無（承諾密碼有頁；冇「留言 1」；截圖未放入有明示，非假內容）。

### R6 結構節奏 — **9／10**

- 理由：0s 結果、early_motion≤2s、mid_beat、≤15s、end hold 全達標。
- 證據：ffprobe 9.000s／1080×1920／30fps／270 幀／h264＋aac。0.05s 封面之後格已係結果；0.70s 紫圈打上短訊首行（early_motion ≤2s ✓）；4.3–5.5s 黑箭特寫＝mid_beat；6.3–7.5s 复制步；7.5–9.0s CTA hold；尾幀 n=269＝封面（loop 硬切，系列引擎常態），無 fade、無新主張。音量 mean −17.4 dB／max −4.3 dB，音樂墊底，無旁白（同系列 music-only 一致；我冇做語音辨識，唔當有旁白事實）。
- 扣 1 分：r2w 闊鏡資訊偏密（提示泡＋完整回覆＋composer＋footer 同屏）；屬可接受嘅密，記一筆。
- Critical：無（此項本身唔自動 Critical）。

### R7 合規／字形 — **9／10**

- 理由：公開 caption＋片上字卡全繁體；簡體只係 UI verbatim（千问／发送消息／复制／向千问提问／登录），BRIEF 指明披露即可、唔當 Critical；無日文、無 Pip。
- 證據：caption 逐字讀：撳／喺／嘅／聽朝，無簡體填料；字卡「請假短訊／即出稿／撳黑箭／得體請假短訊／追蹤 JD／少啲試錯／每日中午」全繁體；短訊「聽朝／幫佢／好返返學／醫生紙／麻煩老師」港式用語 ✓；caption #注意 段披露「畫面可見『登录』banner」＋步 2 披露「发送消息；畫面無字」。
- 扣 1 分：步驟 hashtag（#開千问／#撳复制）同掣名將簡體字帶入公開 caption——係 BRIEF 指定格式兼產品真名，有披露，但仍係可見嘅字形妥協。
- Critical：無（公開 caption 無簡體填料／日文）。

### R8 可傳性／場景 — **9／10**

- 理由：港場景痛點尖、即用結果、intent 清楚，冇求轉發。
- 證據：hook「孩子明早發燒要請假，空白稿不知如何下筆」＝香港家長高共鳴情景；提示全文 4.10／5.30s 睇得晒（可照抄去自己千问用）；短訊全文多格睇得晒（可即抄）；第 3 步明教「可貼班主任 WhatsApp」；landing 教埋「確認冇真實學校名、學生編號、電話、地址」私隱提醒；無「丟 group」、無轉發 bait。
- 扣 1 分：landing 刻意未引用生成句（「老師您好」×0，等截圖），想喺網頁即抄短訊嘅人暫時要返片截圖；landing 示範名同 reel 唔同（見 R5）削弱「跟住做」一致性。
- Critical：無（此項無 Critical 觸發）。

### R9 吸引力 — **8／10**

- 理由：四條自問全過，穩陣達標，唔係出色。
- 證據：
  1. **0–2s**：0.05s 封面已有成段短訊結果，0.70s 紫圈動；hook 有「明早發燒＋空白稿」痛點衝突。止滑成立。
  2. **封面大字**：「請假短訊／即出稿」陌生人 1 秒明「睇完攞到一段請假短訊」；通義千問喺上行唔搶得益。
  3. **完結拉力**：「追蹤 JD／少啲試錯」＋「每日中午」系列節奏＋caption 收藏 CTA，可跟可傳。
  4. **唔靠假承諾**：結果係同日真 capture 全句，唔係另一段文。
- 扣 2 分：視覺係系列模板（字卡＋之前／之後格公式），衝擊力靠題材本身；之後格字細（見 R3）；CTA 句式同前後集同一套，冇新鮮感。
- Critical：無（封面／hook 唔靠假結果或假工具）。**R9＝8，過單獨門檻。**

---

## Critical 清單

**（空）** — R1–R9 無 Critical。R10 按 BRIEF 不入此清單、不重審（tip 31.1／28.6／31.9 ≤40；layout_PASS 維持；r2w 圈位觀察見文首 R10 註）。

---

## PASS WARN（非阻擋）

1. **r2w／r2c 黑箭配空 composer**：同 r1w／r3c 灰箭（空態）及 BUTTONS「empty→灰」記錄矛盾，係 mid_beat fallback 嘅連戲痕。下一版 send-beat 用 qwen_1_typed 原態（composer 深色字＋黑箭）即一致；本次屬 BRIEF 授權內，唔阻 noon，但要記錄俾引擎。
2. **复制菜單未入鏡**：r3c 只見复制 icon＋箭嘴；下版可帶埋菜單開態（qwen_4_copy：复制为Markdown／复制），令「复制」二字落地，同 caption「撳『复制』」更貼。
3. **landing 示範細節同 reel 不符**：landing 寫「林朗／小四甲／2026-10-30／開頭班主任你好」，reel 實際係「小三乙小明／（明天）／老師您好」。建議 noon Share 前由頁主改 landing 步驟段對返 capture（本閘規矩我唔喐 `reels/`）。
4. **逐步截圖未上頁**：caption 承諾「本則逐步截圖」；landing 五圖標「未放入」。建議 noon 前或之後盡快 wire `qwen_0_before／qwen_1_typed／qwen_2_send／qwen_3_after（＋可選 qwen_4_copy）`。
5. **caption 重複句**：「密碼喺網頁（個人檔連結）」出現兩次，可刪 #注意 段尾嗰次。
6. **之後格字級**：全句入鏡係誠實做法，但手機上偏細；可考慮之後格 zoom 到首 2–3 行（主句齊），取捨由排版。

— Kimi K3 · Ep.47 rigor 1/3 票 · **PASS**（均分 8.44 · R9 8 · Critical 0）· 未代 Share · Share 維持 ONLY 2026-10-29 12:00 HKT
