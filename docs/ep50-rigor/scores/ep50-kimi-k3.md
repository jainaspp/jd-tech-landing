# Ep.50 rigor 評分 — Kimi K3（三閘之一 · 1/3）

- 對象：Ep.50 · slug `grok-order-delay-chase` · 系列「香港人 AI 一招」· **Grok**（https://grok.com/）· capture signed-in · 目標 Share **2026-11-01 12:00 HKT**（本閘唔准 Share；本 PR 係 scores-only）
- 評分員：**Kimi K3**（獨立一票）· 2026-10-31 UTC
- 輸入：BRIEF（2026-10-31 ~22:15 HKT）／RUBRIC v0+v1（R9）+v2（R10 只註）／caption／review-art（Round 1 APPROVED 定B）／LAYOUT-SIGNOFF（2026-10-31 22:14 定B）／ZOOM-WAIVER（定B）／reel.mp4＋frames（cover／r3c／contact）
- reel sha256：**`e90cb63e733ac672197fbc1293eb1d4371878bcc7afb43dd51b581cbb9ba771a`** — 我對 upload `reel_1315.mp4` 重算 sha256sum，逐字一致 ✓
- 硬規：**PASS only if mean(R1–R9)≥8 AND R9≥8 AND Critical=0**。Art／排版／定B 三簽唔畀免費分。
- **R10**：layout_PASS（定B）已齊（Art「圈心＝掣心 PASS」· LAYOUT-SIGNOFF 22:14 · ZOOM-WAIVER · tip **27.0／28.7／24.0 ≤40** · ring closes PASS · verify_motion PASS；gates VERDICT FAIL＝cover after／r3 close zoom **1.08×**＋qa FAIL×10，定B 接受）。按 BRIEF＋本席指示 **只註、唔重審、唔入均分，唔用 zoom 1.08× 機械 FAIL 否決本則**。人眼補記一筆（唔再評）：cover after-cell 細格左右邊貼齊格邊，首字「客服」喺格左緣有少許被格邊遮住（「延誤／未見出貨」清晰）；呢個正正係定B 1.08× 全文優先 tradeoff 嘅位置，短訊全文喺 r3 步大字格完整（見下），記錄到此。
- 方法：sha256sum 對 reel；ffprobe（9.000s／1080×1920／30fps／h264＋aac）＋2fps 全片抽幀（18 格）＋6fps 全片（54 格）掃描＋關鍵位全解像抽幀（0.0／1.0／2.2／3.2／3.4／3.6／3.8／4.2／4.6／5.0／5.8／6.8／7.5／8.95s），爭議位 1.6–2.4× 放大（cover after-cell 左緣×2.4、r3 短訊全文×1.8、r2 composer×1.8、CTA URL×2）；caption 禁詞／必須詞全掃；landing live curl＋全文 text extract 逐項核；upload `contact_9d38.png` 對全片 54 幀做 pixel-diff（min mean-diff 43.26）。

---

## 總評：**PASS**

均分 **8.89**（80/9）≥8 · **R9＝8** ≥8 · **Critical＝0** → 三條硬線全過。本席 **PASS**。未代 Share；Share 維持 ONLY **2026-11-01 12:00 HKT**，仍須三席多數 `rigor_PASS`。

一句講晒：封面 **Grok**＋**追件短訊／即出稿**，之後格係真短訊內容；三步 開 Grok（**Ask Grok anything**）→ 撳藍箭（**藍圓白上箭 Submit**，畫面無 Send 字有披露）→ 撳 Copy（**Copy response**，icon 入鏡）同 caption 承諾對得上；r3 步短訊 **BUTTONS Final 全文** 大字入畫（**客服你好／延誤／未見出貨／訂單號：________／阿強** 五件齊，無中段裁）；caption／全片／landing **零免登入／Guest 主張**（反向披露「已登入示範」×N）；CTA **每日中午**；slug 全線 `grok-order-delay-chase`（舊 mistral stub canonical 指向 grok）。扣分集中喺：landing（#135 已 live）示範參數（A4 紙／QM1024／上星期五／運單號／70–110 字／店舖 WhatsApp）同 reel 實際（延誤未出貨／訂單號留空／約 80 字／平台即時通訊）唔符、逐步截圖未嵌入、密碼句重複、Copy tooltip 字未入鏡。

### 硬核五項（BRIEF 指定要查）

| 項 | 判定 | 證據 |
|---|---|---|
| Grok＋**已登入示範披露**（禁免登入主張） | **過** | caption #注意：「本則為**已登入**示範；登入要求以當日介面為準」。caption 禁詞掃描：免登入／Guest／唔使登入／未登入／免註冊／訪客／login-free＝**0 命中**。reel 全 54 幀無免登入字樣。landing（live 200）「已登入」×18＋「要登入先用」×3＋常見錯誤段「當可以跳過登入：呢集示範係已登入 grok.com。要登入先用」；Guest／免登入＝**0 命中**。畫面係 grok.com 真 UI（「Ask Grok anything」placeholder、藍圓白上箭、Grok's answer 動作列） |
| CTA「**每日中午**」 | **過** | 6.8–8.95s CTA 字卡（2× 放大核）：「收藏 實測 prompt｜密碼喺網頁｜追蹤 JD，**每日中午** 粵語 AI 3 步」＋chips「JD TECH · Ep.50 · Grok」。caption 末句「每日中午粵語 AI 3 步」。landing「每日中午」×2。全片＋caption＋landing：朝早／07:00／留言 1／Collab＝**0 命中** |
| 封面 Grok＋**追件短訊／即出稿** | **過** | 0.0s／1.0s 封面：line1 **Grok**（chips JD TECH · Ep.50 · Grok）、line2 **追件短訊** 大字＋1.5s 起底卡 **即出稿**；hook 頂行「網購顯示延誤未出貨，空白稿怕語氣過硬又不想再等」＝caption hook 逐字。之後格係真短訊內容（同 r3 同一段） |
| 步驟（開 Grok／**藍箭 Submit**／**Copy**） | **過（有扣）** | 2.2s #開Grok：composer 見「**Ask Grok anything**」placeholder ✓。3.6–3.8s #撳藍箭：提示已貼（全段提示入鏡），composer 右端 **藍圓白上箭**，掣面**無「Send」字**（1.8× 核）✓ 同 caption「accessible name Submit；畫面無 Send 字」逐字相符。4.2–5.8s #撳Copy：動作列 Copy icon 入鏡（1.8× 核）；扣：「Copy response」tooltip 字全片未入鏡，觀眾只見 icon |
| 畫面＝可貼得體追件短訊（**BUTTONS Final 全文；禁中段裁**） | **過** | 5.0s／5.8s r3 大字格（全解像逐字核）：「**客服你好**，關於我的訂單，系統顯示已出現**延誤**，而家仍然**未見出貨**。想禮貌查詢一下最新嘅處理進度，麻煩回覆預計出貨時間或者送達日期，方便我安排。多謝！**訂單號：________** **阿強**」＝BRIEF BUTTONS Final verbatim（僅 ________ 與阿強之間多一空格）。五件關鍵詞齊、**無中段裁**。提示全文 3.6s 亦完整入鏡（「你係香港網購平台客服…約80字…署名阿強…可直接複製」） |

### 其他 BRIEF 指定檢查

| 項 | 判定 | 證據 |
|---|---|---|
| 示範虛構＋按實際改；唔係消費法意見 | **過** | caption「示範為**虛構**港網購追件情景；請按實際情況改寫…AI 可能出錯；正式追件請自行核對」。landing「虛構」×14＋「唔係消費法意見」×3＋常見錯誤段逐條（當消費法意見／當示範係真實訂單／AI 亂加資料） |
| 密碼喺網頁 | **過** | caption「密碼喺網頁（個人檔連結）」（×2，重複）；CTA 字卡「密碼喺網頁」；landing「密碼喺網頁（個人檔連結）」×2＋明寫 Workflow 庫密碼 jdtech3（/workflow/） |
| landing `/reels/grok-order-delay-chase/` | **過（有扣）** | caption URL＋8.95s CTA URL（2× 放大：jainaspp.github.io/jd-tech-landing/reels/**grok-order-delay-chase**/）一致；live curl **200**（origin/main `7eed53c` #135 slug 已鎖）；舊 `mistral-order-delay-chase` stub live 200 且 canonical／內文 ×4 指向 grok slug ✓。扣：landing 示範參數同 reel 唔符＋截圖未嵌入（詳 R5） |
| 禁 mistral-／kimi-／perplexity- slug | **過** | caption／全片字卡／landing 正文：mistral-／kimi-／perplexity- slug＝**0 命中**（landing 僅 canonical 註銷舊 mistral stub 用，唔係內容 slug；相关集卡係 qwen-weekend-ot-reply／lumo-delay-reply／grok-formal-email 正當 cross-link） |
| mid_beat AUTHORIZED FALLBACK `grok_1_typed`（Submit 掣心；禁發明 Send 標籤） | **過** | 3.6–3.8s r2 段＝typed composer＋藍箭同屏，同授權 fallback 一致；全片無「Send」發明標籤（caption 明寫「畫面無 Send 字」） |
| upload `contact_9d38.png` 身份 | **註記** | 該幀（通訊錄 app「Add Members」藍掣）對 reel 全 54 幀 pixel-diff min mean-diff **43.26**＝**唔喺片內**；reel r2 實際係真 Grok composer 藍箭。本席只評 sha 核實嘅 reel 本身；呢張 upload 當 pack 參考物，唔當 reel 證據，特記俾另外兩席 |

---

## R1–R9

### R1 事實嚴謹 — **9／10**

- 理由：工具、入口、登入狀態、三步、短訊全文都有本席逐幀核實嘅畫面或 live URL 支撐；冇誇大、冇教 VPN、冇「官方支援香港」、冇免費承諾、冇免登入主張。
- 證據：grok.com 真 UI（Ask Grok anything／藍圓白上箭／Grok's answer／Copy icon）；caption「已登入示範；登入要求以當日介面為準」如實；landing live 200「已登入」×18「要登入先用」×3，禁詞 0 命中；短訊＝BUTTONS Final 逐字（5.0／5.8s 全解像核）；虛構喺 caption／landing 多處標明（虛構 ×14）；landing 私隱提醒齊（真實店名／電話／地址／信用卡／身份證先改走）。
- 扣 1 分：landing（#135 live）步驟段寫嘅示範參數「A4 紙一箱／QM1024／上星期五／問運單號／約 70–110 字／貼店舖 WhatsApp」同 reel 實際（系統顯示延誤／訂單號留空 ________／約 80 字／貼網購客服／平台即時通訊）**唔同一段**——landing 層嘅示範事實同片對唔上（reel／caption 本身無錯）。
- Critical：無（入口真、登入冇講大話、短訊真、無無來源硬事實喺 reel／caption）。

### R2 示範一致 — **9／10**

- 理由：三步畫面＝caption 承諾，掣名 verbatim 兼「畫面無 Send 字」有披露；全片 UI 狀態內部一致（placeholder 空態→已貼提示→藍箭→answer 流入→Copy）。
- 證據：步 1「開 grok.com，composer 見『Ask Grok anything』」＝2.2s 畫面 ✓；步 2「撳藍色圓箭（藍圓白上箭；accessible name Submit；畫面無『Send』字）」＝3.6–3.8s 畫面逐字相符（1.8× 核：藍圓白上箭、無 Send 字）✓；步 3「撳 Copy（tooltip『Copy response』）抄走，可貼網購客服／平台即時通訊」＝4.2–5.8s 畫面（Copy icon 落喺 answer 動作列）✓；結果短訊＝caption 描述嘅「畫面得體追件短訊」✓；假 UI＝0（54 幀全係 Grok UI，無外來畫面）。
- 扣 1 分：「Copy response」tooltip 字全片未入鏡（只見 Copy icon），同 Ep.47 复制菜單未入鏡同類。
- Critical：無。畫面做到 caption 所講；無假 UI、無假結果。

### R3 封面誠實 — **9／10**

- 理由：大字得益＝片內結果，之後格係真短訊（同 r3 同一段），唔掛羊頭。
- 證據：0.0／1.0s 封面「追件短訊／即出稿」承諾，5.0s 起 r3 步兌現（全段短訊大字）；之後格內容＝真 reel 短訊（延誤／未見出貨可讀）；0s 已見結果預覽。
- 扣 1 分：之後格屬細格預覽，左右貼格邊，首字「客服」喺格左緣少許被遮、「訂單號／阿強」唔喺格內（定B 1.08× 全文優先 tradeoff 位置，R10 範圍；r3 大字格完整，故唔入 Critical，只扣封面本身可讀性）。
- Critical：無（封面承諾結果片內有出現）。

### R4 工具／產品準確 — **10／10**

- 理由：產品名、入口 URL、登入要求三項全對，今日核。
- 證據：名＝Grok（cover line1／CTA chip／caption／hashtag／landing ×22 一致）；入口 grok.com（caption 步 1＋landing ×27）；登入要求無講大話——caption「已登入示範」、landing「要登入先用」×3＋「呢頁唔教點登入」、常見錯誤段「當可以跳過登入」主動反駁；HARD BAN 詞（免登入／Guest／唔使登入／未登入亦可對話／免註冊／訪客模式／login-free）caption／reel／landing 三處全掃 **0 命中**；UI 元素（Ask Grok anything／藍圓白上箭／Copy）同當日產品一致。
- Critical：無（錯工具名／登入牆當免登入兩個觸發都唔存在）。

### R5 文案嚴謹 — **7／10**

- 理由：CTA／密碼句／免責／URL 全齊；但 caption 承諾兌現一半，landing 示範細節同 reel 對唔上。
- 證據：「每日中午」片＋caption＋landing 一致；「密碼喺網頁（個人檔連結）」有頁有密碼（jdtech3）；免責齊（虛構／按實際改寫／AI 可能出錯／自行核對／已登入披露／登入以當日為準）；URL 一致且 live 200；禁句（留言 1／Collab／朝早／07:00／Guest／免登入）0 命中；hook 係陳述句書面中文；「想稍後再跟？可先收藏本則」係正當 save CTA；landing 如實「未接 shortcode／Share 未到，短片未上線」同 BRIEF 一致。
- 扣 3 分：① caption 寫「本則逐步截圖：<URL>」，但 landing「截圖未放入…檔案未嵌入」（頁面有明示，唔係假圖；BRIEF 亦申報 noon-only live），承諾兌現一半。② landing 示範參數（阿強／A4 紙一箱／QM1024／上星期五／問運單號／70–110 字／店舖 WhatsApp）同 reel 實際（延誤未出貨／訂單號 ________／約 80 字／平台即時通訊）唔同，讀者對返片會混亂。③「密碼喺網頁（個人檔連結）」喺 caption 出現兩次（#注意 段尾＋連結行），冗餘。
- Critical：無（承諾密碼有頁；冇「留言 1」；截圖未放入有明示，非假內容）。

### R6 結構節奏 — **9／10**

- 理由：0s 結果、early_motion≤2s、mid_beat、≤15s、CTA hold 全達標。
- 證據：ffprobe 9.000s／1080×1920／30fps／h264＋aac。0.0s 封面之後格已係結果預覽；0.5–1.5s 封面動（early_motion ≤2s ✓，verify_motion 亦 PASS）；3.5–4.0s 藍箭特寫＝mid_beat（授權 fallback grok_1_typed）；4.2–6.3s Copy 步＋短訊全文；6.3–9.0s CTA hold（尾幀＝CTA，無新主張）。音量 mean −17.4 dB／max −4.3 dB，音樂墊底，無旁白（同系列 music-only 一致；我冇做語音辨識，唔當有旁白事實）。
- 扣 1 分：2.2–3.6s 提示全段同 answer 流入同屏資訊偏密（可接受嘅密，記一筆）。
- Critical：無（此項本身唔自動 Critical）。

### R7 合規／字形 — **10／10**

- 理由：公開 caption＋片上字卡全繁體；UI verbatim 係英文（Ask Grok anything／Submit／Copy response），**簡體零出現**，無披露需要；無日文、無 Pip。
- 證據：caption 逐字讀：撳／喺／嘅／延誤／訂單號／阿強，無簡體填料；字卡「追件短訊／即出稿／開 Grok／撳藍箭／撳 Copy／收藏 實測 prompt／密碼喺網頁／每日中午」全繁體；短訊「而家／最新嘅／多謝」港式用語 ✓；landing 全文繁體（grep 簡體高風險字 0 命中）。
- Critical：無（公開 caption 無簡體填料／日文）。

### R8 可傳性／場景 — **9／10**

- 理由：港場景痛點尖、即用結果、intent 清楚，冇求轉發。
- 證據：hook「網購顯示延誤未出貨，空白稿怕語氣過硬又不想再等」＝香港網購族高共鳴情景；提示全文 3.6s 睇得晒（可照抄去自己 Grok 用）；短訊全文 r3 多格睇得晒（可即抄）；步 3 明教「可貼網購客服／平台即時通訊」；landing 教埋私隱（真實店名／電話／地址／信用卡／身份證先改走）＋「呢步係你自己交追貨短訊，唔係叫人轉發呢則片」；無「丟 group」、無轉發 bait。
- 扣 1 分：landing 示範參數同 reel 唔同（見 R5）削弱「跟住做」一致性；landing 刻意未引用生成句（「生成句子未核對，呢頁唔引用」），想喺網頁即抄短訊嘅人要返片截圖。
- Critical：無（此項無 Critical 觸發）。

### R9 吸引力 — **8／10**

- 理由：四條自問全過，穩陣達標，唔係出色。
- 證據：
  1. **0–2s**：0.0s 封面已有短訊結果預覽，0.5s 起動；hook 有「延誤未出貨＋怕語氣過硬」痛點衝突。止滑成立。
  2. **封面大字**：「追件短訊／即出稿」陌生人 1 秒明「睇完攞到一段追件短訊」；Grok 喺上行唔搶得益。
  3. **完結拉力**：「收藏 實測 prompt」＋「追蹤 JD，每日中午」系列節奏＋caption 收藏 CTA，可跟可傳。
  4. **唔靠假承諾**：結果係 BUTTONS Final 全句真入鏡，唔係另一段文。
- 扣 2 分：視覺係系列模板（字卡＋之前／之後格公式），衝擊力靠題材本身；之後格字細兼貼邊（見 R3）；CTA 句式同前後集同一套，冇新鮮感。
- Critical：無（封面／hook 唔靠假結果或假工具）。**R9＝8，過單獨門檻。**

---

## R10 註（只註、唔入均分、唔重審）

layout_PASS（定B）成立：Art「圈心＝掣心 PASS」（review-art Round 1 定B，sha `e90cb63e…ba771a` 同本席重算一致）＋ LAYOUT-SIGNOFF 2026-10-31 22:14＋ZOOM-WAIVER；ring_on_target 全硬項 PASS（Δ≤0.5、euclid≤0.5、outset ~12）、tip **27.0／28.7／24.0 ≤40**、verify_motion PASS；gates VERDICT FAIL（cover after／r3 close zoom **1.08×**、r3_close_ui_text 19.5px）＋qa FAIL×10＝**定B 接受**（全文優先；禁為 1.5×／wrap≤500 切短訊中段）。本席人眼覆核：r3c 圈／箭貼短訊首行薄帶、r2c 箭落藍圓白上箭掣心、短訊全文喺 r3 大字格完整——同三簽一致；cover after-cell 格邊貼字屬定B tradeoff 位置。**按指示唔用 zoom 1.08× 機械 FAIL 否決本則。**

---

## Critical 清單

**（空）** — 逐條硬線核：

1. **人眼短訊中段裁**：無。r3 大字格（5.0／5.8s 全解像）見 **客服你好／延誤／未見出貨／訂單號：________／阿強** 五件齊、全段 BUTTONS Final 無裁。
2. **免登入／Guest 主張（HARD BAN）**：無。caption／reel 54 幀／landing 三處全掃 0 命中；反向披露「已登入示範／要登入先用」。
3. **錯 slug**：無。caption URL、片尾 CTA URL、landing slug lock（#135）全係 `grok-order-delay-chase`；mistral-／kimi-／perplexity- 0 命中；舊 mistral stub canonical 指向 grok。
4. **假追件結果**：無。短訊＝BUTTONS Final 逐字；全片真 Grok UI；upload 嘅 contact 幀唔喺片內（已註記）。
5. **留言 1**：無。0 命中。

R10 按 BRIEF 唔入此清單（見上節只註）。

---

## PASS WARN（非阻擋）

1. **landing 示範參數同 reel 不符**：landing 步驟／提示段寫「A4 紙一箱／QM1024／上星期五／問運單號／70–110 字／店舖 WhatsApp」，reel 實際係「系統顯示延誤／未見出貨／訂單號 ________／約 80 字／網購客服／平台即時通訊」。建議 noon Share 前由頁主改 landing 對返 reel capture（本閘規矩我唔喐 `reels/`）。
2. **逐步截圖未上頁**：caption 承諾「本則逐步截圖」；landing grok_0_before→grok_3_after 四圖標「未放入」。建議 noon 前或之後盡快 wire（grok_1_typed／grok_2_send 命名同授權 fallback 一致，唔好發明 Send 標籤）。
3. **Copy tooltip 字未入鏡**：r3 只見 Copy icon；下版可帶埋 tooltip「Copy response」hover 態，同 caption 逐字貼齊。
4. **cover after-cell 貼邊**：「客服」首字喺格左緣少許被遮（定B 1.08× tradeoff）；下版 cover 可將 after-cell 內縮 4–8px 或微移左緣，令首字唔貼邊（唔好為 zoom 切短訊）。
5. **caption 重複句**：「密碼喺網頁（個人檔連結）」出現兩次，可刪 #注意 段尾嗰次。
6. **pack 附幀備註**：upload `contact_9d38.png`（通訊錄 app 藍掣）唔喺 reel 內，建議 pack 整理時標明用途或移出，免得評審當咗 reel 證據。

— Kimi K3 · Ep.50 rigor 1/3 票 · **PASS**（均分 8.89 · R9 8 · Critical 0）· 未代 Share · Share 維持 ONLY 2026-11-01 12:00 HKT
