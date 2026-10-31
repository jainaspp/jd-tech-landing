# Ep.48 rigor 評分 — Kimi K3（三閘之一 · 1/3）

- 對象：Ep.48 · slug `perplexity-interview-reschedule` · 系列「香港人 AI 一招」· **Perplexity** at **https://www.perplexity.ai/** · 目標 Share **2026-10-30 12:00 HKT**（本閘唔准 Share；本 PR 係 scores-only）
- 評分員：**Kimi K3**（獨立一票）· 2026-10-29 UTC
- 輸入：BRIEF／RUBRIC v0+v1（R9）+v2（R10 只註）／PIVOT／caption／draft／cta-comment／topic／status／COPY_PASS／ART-HANDOFF／review-art（Round 1 APPROVED 定B）／LAYOUT-SIGNOFF（2026-10-29 22:11 定B）／ZOOM-WAIVER／gates.txt／reel.mp4＋frames（cover/r1c/r2c/r3c/r1w/r2w/r3w/cta/contact/motion-strip）
- reel sha256：**`ae85b289252eb4b42305077bfadcaaea67c569b68d6eb81eaf8ad7e09ffc20a7`** — 我對 upload `reel.mp4` 重算 sha256sum，逐字一致 ✓
- 硬規：**PASS only if mean(R1–R9)≥8 AND R9≥8 AND Critical=0**。Art／排版／定B 三簽唔畀免費分。
- **R10**：`layout_PASS（定B）`＝ring_on_target 全硬項 PASS（tip **29.0／37.6／26.1 ≤40**）＋Art「圈心＝掣心 PASS」＋LAYOUT-SIGNOFF（22:11）＋**ZOOM-WAIVER**（gates VERDICT FAIL＝cover after／r3c zoom **1.26×**＋qa FAIL×11，全部定B 人眼接受）。按 BRIEF **只註、唔重審、唔入均分**；**唔用 zoom 1.26× 機械 FAIL 本則**。人眼補記（唔再評）：我抽幀逐格核過 cover after（1.3s 放大）、r3c（6.0s 放大）、r3w（7.0s）——短訊**全文無中段裁**（詳下）；qa 報嘅 half_cut 全屬 before／composer chrome／heuristic 薄帶，唔觸短訊；r2c 紫箭＋圈貼黑圓白右箭、r3c 圈貼短訊首行薄帶（target `[280,462,680,478]`，ART-HANDOFF 授權之二選一），圈心觀察同簽核一致。
- 方法：sha256sum 對 reel；ffprobe（9.000s／1080×1920／30fps／270 幀／h264＋aac；mean −17.4 dB／max −4.3 dB）＋逐段抽幀（0.0／0.5／1.0／1.3／2.0／3.0／4.0／5.0／6.0／7.0／8.0／8.5s），爭議位放大核對（cover after-cell 1.3s 2× 放大逐字、r3c 6.0s 1.5× 放大逐字、r2w 5.0s 放大睇 Submit／Sign In 側欄）；caption／draft／cta-comment／topic 禁詞＋必須詞全掃（grep）；landing HTML（origin/main，`#121` scaffold＋`#122` Sign In 對齊已 merged）逐項 grep。

---

## 總評：**PASS**

均分 **8.89**（80/9）≥8 · **R9＝8** ≥8 · **Critical＝0** → 三條硬線全過。本席 **PASS**。未代 Share；Share 維持 ONLY **2026-10-30 12:00 HKT**，仍須三席多數 `rigor_PASS`。

一句講晒：封面 **Perplexity**＋**改期短訊／即出稿**，之後格係**完整** BUTTONS refined 改期短訊（逐字到「陳小姐」，無中段裁）；三步開 Perplexity（Ask anything…）→ 撳黑箭（Submit 黑圓白右箭；畫面無字）→ 撳 Copy（答案下最左 icon）同 caption 承諾對得上；全片＋caption＋draft＋cta＋landing **零免登入／Guest／唔使登入／未登入亦可主張**，Sign In 側欄／banner 如實入鏡兼 caption 披露；CTA **每日中午**；slug 全對、禁 slug 零命中；虛構示範有免責。扣分集中喺：caption「逐步截圖」承諾未兌現（landing 五圖標「未放入」）、landing scaffold 示範細節（陳小明／文職／下星期三下午／60–100 字）同 reel 實拍（陳小姐／市場助理／後天或下星期一／70–110 字）不符、caption「密碼喺網頁」重複、r3c 圈落短訊首行而非 Copy icon（授權內但弱）。

### 硬核五項（BRIEF 指定要查）

| 項 | 判定 | 證據 |
|---|---|---|
| Perplexity＋Sign In 披露；**無** 免登入／Guest／唔使登入／未登入亦可 主張 | **過** | reel 實見：cover 之前格側欄「**Sign In**」（0.0s／1.0s）、r2w 側欄「Sign in to view your recent searches」＋「Sign In」掣＋「You're incognito／Exit incognito」（5.0s 放大核）、r3w 側欄同見（7.0s）。caption #注意：「畫面可見 Sign In banner；登入要求以當日介面為準」。grep：caption／cta-comment 免登入·Guest·唔使登入·未登入亦可·免註冊·訪客模式·login-free＝**0 命中**；draft／topic 命中全係 HARD BAN 禁令條文本身（引用禁詞作禁止聲明），唔係主張。landing（#122 後）grep 同上＝0 命中，全頁「畫面可見 Sign In；登入要求以你當日介面為準」；landing「今次 capture 未登入仍出到答案」係**實拍狀態描述**（unsigned capture 事實＋ hedge「以你當日介面為準」），唔係「未登入亦可對話」嘅通用主張；BRIEF 亦申報 landing＝#121 scaffold＋#122 Sign In 對齊 |
| CTA「每日中午」 | **過** | 8.0s／8.5s CTA 字卡側邊「每日中午、」／「粵語 AI 3 步」，大字「追蹤 JD／少啲試錯」，chips「JD TECH · EP.48 · PERPLEXITY」。caption 末句＋cta-comment 第 2 行＝「每日中午粵語 AI 3 步，想少啲試錯可以追蹤 JD。」grep：caption／draft／cta-comment 朝早·07:00·留言 1·Collab＝**0 命中**（draft 唯一「留言 1」係禁令條文引用） |
| 封面 Perplexity＋改期短訊／即出稿 | **過** | 0.0s 字卡 line1 **Perplexity**（chips JD TECH · Perplexity）、line2 **改期短訊**（accent）＋**即出稿**；同 gates.txt `cover_JD_TECH_tag_same_row_as_tool`／`cover_line2_84px` PASS 一致 |
| 步驟 開 Perplexity／黑箭 Submit／Copy | **過（有扣）** | 2.0s r1c 字卡「開／Perplexity · Ask anything…」，特寫 composer 內 prompt **全文逐字**同 draft「Demo copy（prompt verbatim）」一致。4.0s r2c 字卡「撳／黑箭 · Submit」，特寫**黑圓白右箭**掣面無字（同 caption「Submit；畫面無字」逐字相符），紫箭指掣；5.0s r2w 紫箭落同一掣（放大核）。6.0s r3c 字卡「撳／Copy · 抄改期短訊」；7.0s r3w 答案下動作列最左＝copy icon（拇指對、copy、書籤、分享、更多次序可辨）。扣：r3c 圈落短訊**首行薄帶**而非 Copy icon（ART-HANDOFF 授權二選一：「短訊首行薄帶**或** Copy icon」；r3w 有補 Copy icon 位），對「撳 Copy」一步嘅掣位指示偏弱（詳 R2） |
| 畫面＝可貼得體改期短訊（BUTTONS refined 全文；禁中段裁）；虛構＋按實際改 | **過** | 1.3s cover after-cell（2× 放大逐字）、6.0s r3c（1.5× 放大逐字）、7.0s r3w 同一段，同 BRIEF「BUTTONS refined（verbatim；禁改寫）」逐字一致：「您好，不好意思，因突發事情，我未能出席**明天上午 10:30** 的市場助理現場面試，想問可否改期？我**後天**同一時間或**下星期一**早上 11:00 都可以，會盡量配合您方便的安排，麻煩您了，謝謝！／**陳小姐**」——四個必須詞全在、**無中段裁**、無截句。caption #注意「示範為虛構港求職改期情景；請按實際情況改寫…AI 可能出錯；正式覆招聘請自行核對」；landing「虛構示範。唔係求職意見，亦唔係 HR 意見」 |

### 其他 BRIEF 指定檢查

| 項 | 判定 | 證據 |
|---|---|---|
| slug `perplexity-interview-reschedule`；禁 kimi-／copilot- | **過** | caption URL＋cta-comment URL＝`…/reels/perplexity-interview-reschedule/`；grep caption／cta-comment 禁 slug＝0 命中；draft 命中全係「禁 kimi-／copilot-interview-reschedule」禁令條文。landing 頁存在（#121 merged） |
| 密碼喺網頁（個人檔連結） | **過（有扣）** | caption 有（×2：#注意 段尾＋連結行，重複）；cta-comment 兩行無密碼（COPY_PASS 規格相符）；landing 步驟段尾「密碼喺網頁（個人檔連結）」有 |
| mid_beat fallback `perplexity_1_typed` Submit 心 | **過（授權內）** | BRIEF＋ART-HANDOFF 授權 AUTHORIZED FALLBACK；LAYOUT-SIGNOFF r2c target `[1038,507,1058,527]` tip 37.6；4.0s r2c 實見 typed composer＋黑箭（送出前態，邏輯自洽），唔係 Ep.47 嗰種「空 composer＋黑箭」矛盾 |
| reel sha256 `ae85b289…c20a7` | **過** | 本機 sha256sum 重算逐字一致 |
| landing Sign In 對齊 | **過** | origin/main `aca30db`「fix(ep48): drop no-login claims from Perplexity landing (#122)」後 grep 禁詞 0 命中；頁如實寫「Share 未到，短片未上線，未接 shortcode」，同 status.txt「Share HOLD」一致，無假裝已接 |

---

## R1–R9

### R1 事實嚴謹 — **9／10**

- 理由：工具、入口、登入狀態、三步、prompt、短訊全文都有同日（2026-10-29 ~21:32–21:44 HKT）capture／BUTTONS.md Perplexity pass／live URL 支撐；冇誇大、冇教 VPN、冇「官方支援香港」、冇免費承諾、冇免登入主張。
- 證據：入口 `https://www.perplexity.ai/`（caption／draft／landing 一致）；PIVOT 鏈（Kimi 登入牆 → Copilot Sign-in 牆 → Perplexity）有檔、`kimi_*`／`copilot_login_wall` 只作證據唔入片（draft 明令）；unsigned capture 狀態畫面可稽（incognito＋Sign In 側欄）；thread URL 喺 draft Sources 有記；prompt 全文 r1c 逐字對 draft 一致；短訊全文三格逐字對 BRIEF BUTTONS refined 一致；虛構喺 caption／landing meta／landing 步驟三處標明；私隱提醒 landing 有（「確認冇真實公司名、電話、身份證號碼」）。
- 扣 1 分：landing scaffold（#121）步驟段寫嘅示範設定「陳小明／文職／明天上午→下星期三下午／稱呼面試官／60–100 字」同 capture 實際「陳小姐／市場助理／明天上午 10:30→後天同一時間或下星期一早上 11:00／70–110 字」**不符**——landing 層嘅硬事實同實拍對唔上（landing 屬 scaffold、頁主後續 wire；本閘規矩我唔喐 `reels/`，記錄在此）。
- Critical：無（入口真、登入冇講大話、短訊真、reel／caption 無無來源硬事實）。

### R2 示範一致 — **9／10**

- 理由：三步畫面＝caption 承諾，掣名 verbatim 兼「畫面無字」有披露；送出前／後態自洽；唯 r3c 嘅圈位對「撳 Copy」一步偏弱。
- 證據：
  1. **開 Perplexity**：r1w（2.x s）composer 見 typed prompt＋紫圈；r1c（2.0s／3.0s）字卡「開／Perplexity」sub「Ask anything…」，prompt 全文逐字入鏡；cover 之前格（0.0s）空白 composer「Ask anything…」＋側欄 Sign In＝真實空態 ✓
  2. **撳黑箭**：r2c（4.0s）特寫 typed composer＋**黑圓白右箭**（送出前態：有字→黑箭，自洽）；r2w（5.0s）紫箭落同一掣；掣面無英文 Send／無字，同 caption「Submit；畫面無字」逐字相符 ✓；mid_beat 用授權 fallback `perplexity_1_typed`，LAYOUT target 同掣心對齊（tip 37.6）
  3. **撳 Copy**：r3w（7.0s）答案下動作列最左 copy icon 可辨；r3c（6.0s）圈落**短訊首行薄帶**（target `[280,462,680,478]`）——ART-HANDOFF 明文授權「首行薄帶**或** Copy icon」二選一、Art 簽「圈心＝掣心 PASS」，但對照字卡「撳／Copy」，觀眾喺 close 格見到圈嘅係短訊唔係掣，掣位只靠 r3w 補。
- 扣 1 分：r3c 圈位唔係 Copy icon（授權內、已簽，但指示性弱於直接圈掣）。
- Critical：無。關鍵承諾（貼 prompt→黑箭→撳→出短訊→Copy 抄走）逐步可執行、結果真；冇假結果、冇假 UI；三格圈位全部落喺已簽 target。

### R3 封面誠實 — **9／10**

- 理由：大字得益＝片內結果，之後格一次過睇得晒成段短訊。
- 證據：0.0s／1.3s 之後格（2× 放大逐字核）＝BUTTONS refined **全文**，由「您好」到「陳小姐」**無截句**——明天上午 10:30、後天同一時間、下星期一早上 11:00、署名全部入鏡。0s 已有結果，唔使等到第 3 步；第 3 步結果同封面承諾一致，冇掛羊頭。
- 扣 1 分：之後格 108 字全段入鏡（定B 全寬 ~606 ink 取捨），手機上字偏細；呢個係 ZOOM-WAIVER 已簽嘅 tradeoff，唔為 1.26× 機械扣分，只記可讀性事實。
- Critical：無（封面承諾結果片內有出現；中段無裁）。

### R4 工具／產品準確 — **10／10**

- 理由：產品名、入口 URL、登入要求三項全對，今日核。
- 證據：名＝Perplexity（cover line1／CTA chip／caption／hashtag／landing 一致）；入口 `https://www.perplexity.ai/`（caption 步 1＋landing ×N）；登入要求無講大話——畫面 Sign In 掣＋incognito 狀態入鏡、caption「畫面可見 Sign In banner；登入要求以當日介面為準」、landing 同句對齊；HARD BAN 詞全公開面 0 命中（landing 經 #122 清理）；PIVOT 兩堵牆（Kimi／Copilot）如實記錄且證據唔入片；禁推工具（Gemini／ChatGPT／Claude／Meta 等）無客串；slug 無 kimi-／copilot- 串錯。
- Critical：無（錯工具名／登入牆當免登入兩個觸發都唔存在）。

### R5 文案嚴謹 — **7／10**

- 理由：CTA／密碼句／免責／URL 全齊；但 caption 承諾兌現一半，landing 示範細節同 reel 對唔上，兼有重複句。
- 證據：「每日中午」片＋caption＋cta-comment 一致；「密碼喺網頁（個人檔連結）」有；免責齊（虛構／按實際改寫／AI 可能出錯／自行核對／Sign In 披露／登入以當日為準）；landing URL 同 slug 一致且頁存在；禁句（留言 1／Collab／朝早／07:00／免登入／Guest）公開面 0 命中；hook 係陳述句書面中文（「明早面試突然撞期要請改期，空白稿不知如何下筆 → …」），無「？」開頭；「想稍後再跟？可先收藏本則。」係正當 save CTA；hashtag 5 個同 COPY_PASS 記錄一致。
- 扣 3 分：① caption 寫「本則逐步截圖：<URL>」，但 landing 五張 UI 圖全標「截圖…未放入」（頁面有明示，唔係假圖；BRIEF 亦申報 scaffold 未接 shortcode），承諾兌現一半。② landing 示範設定（陳小明／文職／下星期三下午／60–100 字）同 reel 實拍（陳小姐／市場助理／後天或下星期一／70–110 字）唔同，讀者對返片會混亂。③「密碼喺網頁（個人檔連結）」喺 caption 出現兩次（#注意 段尾＋連結行），冗餘。
- Critical：無（承諾密碼有頁；冇「留言 1」；截圖未放入有明示，非假內容；CTA 時間正確）。

### R6 結構節奏 — **9／10**

- 理由：0s 結果、early_motion≤2s、mid_beat、≤15s、end hold 全達標。
- 證據：ffprobe 9.000s／1080×1920／30fps／270 幀／h264＋aac（同 gates `duration_le_10s` PASS 一致）。0.0s 封面之後格已係結果；0.5s 紫圈／tap 打上之後格短訊（early_motion 0.3–0.8s ✓ ≤2s）；4.0s 黑箭特寫＝mid_beat（3.5–5s 窗內）；6.0s r3c／7.0s r3w Copy 步；8.0–8.5s CTA hold（「追蹤 JD／少啲試錯」＋結果尾段同屏）；尾段無 fade、無新主張；gates `loop_diff` PASS。音量 mean −17.4 dB／max −4.3 dB，gates loudness −15.0 LUFS；music-only，無旁白（同系列一致；我冇做語音辨識，唔當有旁白事實）。
- 扣 1 分：r2w 闊鏡資訊偏密（typed prompt 全文＋composer 動作列＋跟進「Ask anything…」列同屏）；屬可接受嘅密，記一筆。
- Critical：無（此項本身唔自動 Critical）。

### R7 合規／字形 — **10／10**

- 理由：公開 caption＋片上字卡全繁體；英文只係 UI verbatim（Ask anything…／Submit／Copy／Sign In），BRIEF 指明掣名 verbatim 兼 caption 有披露；無簡體填料、無日文、無 Pip。
- 證據：caption 逐字讀：撳／喺／嘅／聽朝類港式書面，無簡體；字卡「改期短訊／即出稿／開 Perplexity／撳黑箭／撳 Copy／抄改期短訊／追蹤 JD／少啲試錯／每日中午」全繁體；prompt 同短訊「畀／嘅／唔囉嗦／麻煩您」港式用語 ✓；caption 步 2 披露「Submit；畫面無字」；hashtag 全繁體＋品牌名。
- Critical：無（公開 caption 無簡體／日文）。

### R8 可傳性／場景 — **9／10**

- 理由：港場景痛點尖、即用結果、intent 清楚，冇求轉發。
- 證據：hook「明早面試突然撞期要請改期，空白稿不知如何下筆」＝香港求職高共鳴情景；prompt 全文 r1c／r2w 睇得晒（可照抄去自己 Perplexity 用）；短訊全文多格睇得晒（可即抄）；caption 步 3 明教「可貼招聘／HR WhatsApp 或電郵」；landing 教埋私隱自查（冇真實公司名／電話／身份證號碼）；無「丟 group」、無轉發 bait、intent=send 貫徹。
- 扣 1 分：landing 示範名同 reel 唔同（見 R5）削弱「跟住做」一致性；landing 刻意未引用生成句（等截圖 wire），想喺網頁即抄短訊嘅人暫時要返片截圖。
- Critical：無（此項無 Critical 觸發）。

### R9 吸引力 — **8／10**

- 理由：四條自問全過，穩陣達標，唔係出色。
- 證據：
  1. **0–2s**：0.0s 封面已有成段短訊結果，0.5s 紫圈動；hook 有「撞期＋空白稿」痛點衝突。止滑成立。
  2. **封面大字**：「改期短訊／即出稿」陌生人 1 秒明「睇完攞到一段改期短訊」；Perplexity 喺上行唔搶得益。
  3. **完結拉力**：「追蹤 JD／少啲試錯」＋「每日中午」系列節奏＋caption 收藏 CTA，可跟可傳。
  4. **唔靠假承諾**：結果係同日真 capture 全句（sha 對到），唔係另一段文。
- 扣 2 分：視覺係系列模板（字卡＋之前／之後格公式），衝擊力靠題材本身；之後格字密（見 R3）；CTA 句式同前後集同一套，冇新鮮感。
- Critical：無（封面／hook 唔靠假結果或假工具）。**R9＝8，過單獨門檻。**

---

## Critical 清單

**（空）** — R1–R9 無 Critical。逐項否決觸發核實：假改期結果＝無（全文逐字對到）；留言 1＝0 命中；登入牆當免登入／Guest 主張＝0 命中；短訊缺「明天上午 10:30／後天／下星期一／陳小姐」＝四字全在、無中段裁；zoom 1.26×＝定B waived，唔作機械否決。R10 按 BRIEF 不入此清單、不重審（tip 29.0／37.6／26.1 ≤40；layout_PASS（定B）維持；圈位觀察見文首 R10 註）。

---

## PASS WARN（非阻擋）

1. **landing 示範細節同 reel 不符**：landing（#121 scaffold）寫「陳小明／文職／下星期三下午／稱呼面試官／60–100 字」，reel 實拍係「陳小姐／市場助理／明天上午 10:30→後天同一時間或下星期一早上 11:00／70–110 字」。建議 noon Share 前後由頁主改 landing 步驟段對返 capture（本閘規矩我唔喐 `reels/`）。
2. **逐步截圖未上頁**：caption 承諾「本則逐步截圖」；landing 五圖標「未放入」。建議 noon 前或之後盡快 wire `perplexity_0_before／perplexity_1_typed／perplexity_2_send／perplexity_3_after（＋可選 perplexity_4_copy）`。
3. **r3c 圈位**：close 格圈落短訊首行薄帶而非 Copy icon（ART-HANDOFF 授權二選一、已簽）；下版若 `perplexity_4_copy` close 補得上，「撳 Copy」掣位更落地。
4. **caption 重複句**：「密碼喺網頁（個人檔連結）」出現兩次，可刪 #注意 段尾嗰次。
5. **之後格字級**：108 字全段入鏡係誠實兼定B 取捨（ZOOM-WAIVER 已簽），手機偏細；後續集數可喺 capture 階段爭取更高 ink 寬，而唔係事後抬 zoom。
6. **r2w 密度**：typed prompt 全文＋動作列＋跟進列同屏偏密；close 格（r2c）已補救焦點，記錄俾引擎。

— Kimi K3 · Ep.48 rigor 1/3 票 · **PASS**（均分 8.89 · R9 8 · Critical 0）· 未代 Share · Share 維持 ONLY 2026-10-30 12:00 HKT
