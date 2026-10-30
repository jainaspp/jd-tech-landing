# Ep.49 rigor 評分 — Kimi K3（三閘之一 · 我係 Kimi K3 席）

- 對象：Ep.49 · slug `qwen-weekend-ot-reply` · 系列「香港人 AI 一招」· 通義千問／千问 at **https://www.qianwen.com/** · 目標 Share **2026-10-31 12:00 HKT**（本閘唔准 Share；本 PR 係 scores-only）
- 評分員：**Kimi K3**（獨立一票）· 2026-10-30 UTC
- 輸入：BRIEF（定B 版）／RUBRIC v0+v1（R9）+v2（R10 只註）／caption／COPY_PASS（21:58 HKT）／LAYOUT-SIGNOFF（22:39 HKT · 定B）／ZOOM-WAIVER（定B）／reel.mp4＋cover／r1c／r2c／r3c／cta 五幀
- reel sha256：**`14feb1fedc60897d5bba8d371e5e519715f143bf154ab9d1ef6f5c53d5711dd1`** — 我對 upload `reel.mp4` 重算 sha256sum，同 BRIEF／LAYOUT-SIGNOFF 逐字一致 ✓
- 硬規：**PASS only if mean(R1–R9)≥8 AND R9≥8 AND Critical=0**。Art／排版／定B 簽咗唔畀免費分；但 **zoom 0.95× 唔用機械 FAIL 否決本則**（定B 明文）。覆訊中段裁仍 Critical——已人眼逐字核，**無中段裁**。
- **R10（note only）**：layout_PASS（定B）已齊——gates VERDICT FAIL（cover after／r3 zoom 0.95×）＋qa FAIL×10 經 ZOOM-WAIVER／LAYOUT-SIGNOFF（22:39）／Art「圈心＝掣心 PASS」三簽接受；tip **27.6／28.9／23.8 ≤40**、ring closes 0 FAIL、verify_motion PASS。按 BRIEF **只註、唔重審、唔入均分**。人眼補一筆（唔再評）：cover after／r3c／r3w 我逐字讀過，BUTTONS Final 全文入鏡，「補休／加班費／星期六上午／阿強」齊，**無中段裁**，同 LAYOUT-SIGNOFF「定B Critical — 全文人眼」一致。
- 方法：sha256sum 對 reel；ffprobe＋逐段抽幀（0.0／0.5／1.0／1.5／2.0／2.5／3.0／3.5／4.0／4.5／5.0／5.5／6.0／6.5／7.0／7.5／8.0／8.5／8.9s＋尾幀 n=269），爭議位 2–3× 放大核對（r3c 覆訊逐字、cover 覆訊逐字、r1c 登录 banner、r2c 黑箭掣色同 composer 態、2.0s 空 composer 箭色、CTA 全幀增亮掃字、3.0s 提示逐句）；caption 禁詞／必須詞全掃（grep）；landing（origin/main @ `0fdd4db`，#128 已 merged）逐項 grep＋live URL curl；舊 mistral stub 查 redirect；/workflow/ 查密碼。

---

## 總評：**PASS**

均分 **8.56**（77/9）≥8 · **R9＝8** ≥8 · **Critical＝0** → 三條硬線全過。本席 **PASS**。未代 Share；Share 維持 ONLY **2026-10-31 12:00 HKT**，仍須三席多數 `rigor_PASS`。

一句講晒：封面 **通義千問**＋**加班覆訊／即出稿**，0s 之後格已係**完整** BUTTONS Final 覆訊（逐字到「阿強」，補休／加班費／星期六上午齊，無中段裁）；三步開千问（向千问提问）→ 撳黑箭（黑圓白上箭、畫面無 Send／发送 字；箭色空灰／typed 黑全片一致，冇 Ep.47 式矛盾）→ 撳复制（复制 掣入鏡）同 caption 承諾對得上；host＝**www.qianwen.com**（live 200）；全片＋caption＋landing **零 Guest／免登入主張**，「登录可同步历史对话，解锁更多功能」banner 如實入鏡兼披露；CTA **每日中午**；禁句零命中；#128 landing 已 merged 兼 live 200，如實寫「未接 shortcode／短片未上線／截圖未放入／生成句子未核對，呢頁唔引用」。扣分集中喺：landing 可抄提示同檢查清單用「陳小姐／老闆您好／朝早十點至下午兩點／下星期補假」，同 reel 實際「阿強／收到，老闆／星期六上午／補休或者加班費」兩套（landing 層硬事實唔符，同 Ep.47 同類）；caption「逐步截圖」承諾未兌現（頁面有明示）；「密碼喺網頁」caption 重複；landing「送出掣／複製掣未截到」講法同 reel 已見复制掣唔夾。

### 硬核五項（BRIEF 指定要查）

| 項 | 判定 | 證據 |
|---|---|---|
| 通義千問＋登录 披露（禁免登入主張） | **過** | caption #注意：「畫面可見『登录』banner；登入要求以當日介面為準」。reel r1c 頂部放大 2× 見橫額「**登录可同步历史对话，解锁更多功能**」；4.0s 步 2 頂部同 banner 入鏡。HARD BAN 全掃：caption／landing grep「免登入｜Guest｜唔使登入｜未登入｜免註冊｜訪客｜login-free」＝**0 命中**（landing 連「Guest」都 0）。landing 步 1 明寫「呢頁唔教登入」「當畫面冇登入字樣」列常見錯誤。名＝通義千問／千问（cover line1／caption／hashtag／landing 一致）；www.qianwen.com live **200**（1.2s） |
| CTA「每日中午」（NEVER 朝早／07:00／留言 1／Collab） | **過** | 7.7–9.0s CTA 幀（增亮 2.8× 掃全幀）：大字「**每日中午**」（紅圈落上）＋側直排「追蹤 JD／少啲試錯」＋chips「JD TECH · Ep.49 · 千问」。caption 末句「每日中午粵語 AI 3 步」。全片＋caption＋landing：朝早（作 drop 時間義）／07:00／留言 1／Collab＝**0 命中**（caption grep 核實；landing 只「每日中午更新」×2） |
| 封面 通義千問＋加班覆訊／即出稿 | **過** | 0.0s 字卡 line1 **通義千問**、line2 **加班覆訊／即出稿**（BRIEF verbatim）；頂 badge「香港人 AI 一招 · 第49集」；尾幀 n=269＝封面 loop |
| 步驟（開千问／黑箭／复制） | **過** | 2.0s r1 字卡「開千问」＋composer「**向千问提问**」placeholder；3.0–3.5s 提示 typed。4.0–5.0s r2 字卡「撳黑箭」＋**黑圓白上箭**（掣面無字；r2c 2× 放大核實，無 Send／发送 標籤）；箭色一致：2.0s 空 composer＝**灰**箭、3.0–5.0s typed＝**黑**箭（同真產品行為夾，冇 Ep.47 r2 式空 composer 配黑箭矛盾）；mid_beat 用授權 fallback `qwen_1_typed` 黑箭掣心，composer 確係 typed 態，同授權源描述一致。6.5–7.5s r3 字卡「複制」＋動作列「**复制**」掣入鏡（r3c 2× 放大；复制为Markdown 菜單未開，見 R2 扣） |
| 畫面＝可貼得體加班覆訊（BUTTONS Final 全文；禁中段裁）；示範虛構＋按實際改 | **過** | 0.0s cover、4.0s r2、6.5s r3、7.5s、8.5s CTA 頂同一段，2× 放大逐字對 BRIEF「BUTTONS Final」一致：「收到，老闆。呢個週末嘅急單我可以配合處理，不過想同你確認下預計要幾多時間，同埋有冇**補休**或者**加班費**安排？我可以**星期六上午**先到公司開工，睇下情況再同你匯報進度。麻煩你俾個指示，我盡快跟進。**阿強**」——四關鍵段齊、無截句、無中段裁。3.0s composer 提示 2× 放大讀到「署名用『阿強』…有冇補休或者加班費安排…星期六上午先到公司開工」，同覆訊同源一致（reel 內部自洽）。caption「示範為虛構港返工加班情景；請按實際情況改寫…AI 可能出錯；正式覆老闆請自行核對」；landing「虛構示範。唔係勞工法意見」 |

### 其他 BRIEF 指定檢查

| 項 | 判定 | 證據 |
|---|---|---|
| 密碼喺網頁 | **過** | caption「密碼喺網頁（個人檔連結）」×2（#注意 段尾＋連結行；重複見 R5 扣）；`/workflow/` 頁 grep「jdtech3」×6 在；landing ending-note「密碼喺網頁（個人檔連結）：Workflow 庫密碼 jdtech3」 |
| landing `/reels/qwen-weekend-ot-reply/` | **過** | caption URL 同 slug 一致；#128 已 merged（2026-10-30 14:32 UTC），origin/main `0fdd4db` 有頁；live curl **200**、頁內 `qianwen.com` ×18、「登录」×15；如實寫「Share 未到，短片未上線。未接 shortcode」同 BRIEF「noon-only live／未接 shortcode」一致；sitemap 已收錄 |
| 禁 mistral-／deepseek- slug | **過** | caption／全片／landing grep「mistral｜deepseek」＝**0 命中**；舊 `reels/mistral-weekend-ot-reply/` 係 meta-refresh stub → `../qwen-weekend-ot-reply/`＋canonical 指新 slug（BRIEF「舊 mistral stub redirect」如實）；landing 相關頁卡只連 perplexity-interview-reschedule（Ep.48）／canva-magic-write-ot-notice（Ep.41）／qwen-school-leave-msg（Ep.47），正當 cross-link |
| mid_beat AUTHORIZED FALLBACK `qwen_1_typed` | **過（授權內）** | BRIEF 授權「qwen_2 閘爆 → qwen_1_typed 黑箭掣心；禁發明 发送／Send 標籤」。4.0–5.0s 黑箭特寫 composer 係 typed 態（提示全文喺框內）＋黑圓白上箭，同 fallback 源態一致；全片無發明掣名（畫面無字有披露） |
| hook（陳述句／書面中文） | **過** | caption 首行「老闆臨時 WhatsApp 叫週末加班，空白稿怕得罪人又不想無條件答應 → 通義千問 3 步即出得體商量覆訊｜香港人 AI 一招 · 第49集」BRIEF verbatim；0.5s 封面底 hook 行同句入鏡 |
| 禁 Share（本閘） | **過** | 本 PR 只加 `docs/ep49-rigor/`；未喐 `reels/`／產品頁；landing 現狀只係 #128 已 merged 嘅 noon-only 頁，無 shortcode |

---

## R1–R9

### R1 事實嚴謹 — **8／10**

- 理由：工具、入口、登入狀態、三步、覆訊全文都有同日 capture／live URL 支撐；冇誇大、冇教 VPN、冇「官方支援香港」、冇免費承諾、冇免登入主張。扣分全部喺 landing 層。
- 證據：`www.qianwen.com` live 200；「登录可同步历史对话，解锁更多功能」banner r1c／4.0s 入鏡＋caption 披露；覆訊 94 字全段入鏡（同 BUTTONS Final 逐字）；reel 內部提示（阿強版）同覆訊自洽；虛構喺 caption／landing meta／landing 正文三處標明；私隱提醒「唔好寫公司名、電話、員工編號」；勞工法免責齊。
- 扣 2 分：① landing 可抄提示同步驟三檢查清單用「陳小姐／開頭『老闆您好』／朝早十點至下午兩點／改短或者下星期補假」，同 reel 實際 capture（阿強／「收到，老闆」開頭／星期六上午／補休或者加班費）係**兩套示範**——landing 層硬事實同 capture 唔符（同 Ep.47 landing 寫「林朗／小四甲」同類）；reel／caption 層冇錯。② landing 寫「送出掣同複製掣嘅當日字樣未截到」「複製掣叫咩名，本集未截到」，但 reel 6.5s r3c 已見「复制」掣字樣入鏡——「未截到」講法過度保守、同片內事實唔夾（唔係假，係唔準）。
- Critical：無（入口真、登入冇講大話、覆訊真、reel／caption 無無來源硬事實）。

### R2 示範一致 — **9／10**

- 理由：三步畫面＝caption 承諾；掣名 verbatim 兼「畫面無字」有披露；箭色狀態全片一致，冇 Ep.47 式內部矛盾；mid_beat fallback 按授權原態執行。
- 證據：
  1. **開千问**：2.0s 空 composer「向千问提问」灰 placeholder＋**灰**箭＝真實空態；3.0–3.5s 提示 typed（黑字）＋箭轉**黑**＝真實 ready 態 ✓。caption 步 1「開 qianwen.com，composer 見『向千问提问』，貼上週末加班覆訊提示」對得上 ✓
  2. **撳黑箭**：4.0–5.0s composer 保持 typed＋黑圓白上箭，圈落掣心（r2c 2× 核實；掣面無 Send／发送 字，同 caption「黑圓白上箭；畫面無字」逐字相符）。授權 fallback `qwen_1_typed` 要求「composer 深色字＋黑箭」態——今次畫面確係呢個態，Ep.47 嗰種「空 composer 配黑箭」矛盾**冇出現**。
  3. **撳复制**：6.5–7.5s 動作列見「复制」掣（icon＋字）＋圈落掣位；覆訊全文同屏。扣：「复制为Markdown」菜單全片未開，觀眾見到「复制」掣但未見菜單項（caption 只承諾撳「复制」，承諾兌現；菜單屬加分未攞）。
- 扣 1 分：复制菜單未入鏡（-1）。
- Critical：無。關鍵承諾（貼提示→黑箭→出覆訊→复制抄走）逐步可執行、結果逐字真；冇假結果、冇假 UI。

### R3 封面誠實 — **9／10**

- 理由：大字得益＝片內結果；0s 之後格一次過睇得晒成段覆訊。
- 證據：0.0s 之後格 2× 放大逐字核＝BUTTONS Final 全文，由「收到，老闆」到「阿強」無截句——急單配合、確認時間、補休或者加班費、星期六上午開工、匯報進度、盡快跟進全部入鏡。封面承諾「加班覆訊／即出稿」＝片內結果，冇掛羊頭；第 3 步結果同封面一致。
- 扣 1 分：之後格字喺手機偏細（全寬 0.95× 係定B 全文優先取捨，R10 範圍只註；呢度只記可讀性 observation，唔雙重罰）。
- Critical：無（封面承諾結果片內有出現）。

### R4 工具／產品準確 — **10／10**

- 理由：產品名、入口 URL、登入要求三項全對，今日核。
- 證據：名＝通義千問／千问（cover line1／chips／caption／hashtag／landing title 一致）；入口 `https://www.qianwen.com/` live 200（landing 連出 ×18，citation 齊 qianwen.com＋qwen.ai/home 並註明「示範入口係千问官网，唔係呢頁」）；登入要求無講大話——畫面「登录可同步历史对话，解锁更多功能」banner 入鏡、caption「登入要求以當日介面為準」、landing「畫面可以見到『登录』…呢頁唔教登入」；HARD BAN 詞 caption／landing 全 0 命中；舊 mistral slug stub redirect 乾淨，無 slug 串錯；無假冒「未登入亦可對話」。
- Critical：無（錯工具名／登入牆當免登入兩個觸發都唔存在）。

### R5 文案嚴謹 — **7／10**

- 理由：CTA／密碼句／免責／URL 全齊；但 caption 承諾兌現一半，landing 示範細節同 reel 對唔上，兼有冗餘。
- 證據：「每日中午」片＋caption＋landing 一致；「密碼喺網頁（個人檔連結）」有頁有密碼（jdtech3 ×6）；免責齊（虛構／按實際改寫／AI 可能出錯／自行核對／登录 banner 披露／登入以當日為準／landing 勞工法免責）；landing URL 一致且 live 200；禁句（留言 1／Collab／朝早／07:00／Guest／免登入）0 命中；hook 係陳述句書面中文；「想稍後再跟？可先收藏本則」係正當 save CTA；cta-comment 兩行無密碼（COPY_PASS 核）。
- 扣 3 分：① caption 寫「本則逐步截圖：<URL>」，但 landing 五張 UI 圖全標「截圖未放入」（頁面有明示，唔係假圖；BRIEF 亦申報截圖未 wire），承諾兌現一半（-1）。② landing 示範（陳小姐／老闆您好／十點至兩點／補假）同 reel 實際（阿強／收到，老闆／星期六上午／補休加班費）唔同，讀者對返片會混亂；步驟三仲叫讀者檢查「署名係咪陳小姐」，同片所見直接衝突（-1）。③「密碼喺網頁（個人檔連結）」caption 出現兩次冗餘；landing「送出掣／複製掣未截到」同片內已見复制掣唔夾（-1）。
- Critical：無（承諾密碼有頁；冇「留言 1」；截圖未放入有明示，非假內容）。

### R6 結構節奏 — **9／10**

- 理由：0s 結果、early_motion≤2s、mid_beat、≤15s、end hold 全達標。
- 證據：ffprobe 9.000s／1080×1920／30fps／270 幀／h264＋aac。0.0s 封面之後格已係結果；0.5s hook 行淡入＋紅圈動（early_motion ≤2s ✓）；3.7–5.2s 黑箭特寫＝mid_beat；5.2–7.7s 复制步；7.7–9.0s CTA hold；尾幀 n=269＝封面（loop 硬切，系列引擎常態），無 fade、無新主張。音量 mean −17.4 dB／max −4.3 dB，音樂墊底（同系列 music-only 一致；我冇做語音辨識，唔當有旁白事實）。
- 扣 1 分：r2／r3 資訊偏密（提示＋完整覆訊＋composer 同屏）；屬可接受嘅密，記一筆。
- Critical：無（此項本身唔自動 Critical）。

### R7 合規／字形 — **9／10**

- 理由：公開 caption＋片上字卡全繁體；簡體只係 UI／掣名 verbatim（千问／向千问提问／复制／登录），BRIEF 指明披露即可、唔當 Critical；無日文、無 Pip。
- 證據：caption 逐字讀：撳／喺／嘅／睇／俾，無簡體填料；字卡「通義千問／加班覆訊／即出稿／開千问／撳黑箭／複制／每日中午／追蹤 JD／少啲試錯」全繁體（「千问」係產品名 verbatim）；覆訊「嘅／同埋／睇下／俾個指示／跟進」港式用語 ✓；caption #注意 段披露「畫面可見『登录』banner」＋步 2 披露「黑圓白上箭；畫面無字」。
- 扣 1 分：步驟 hashtag（#開千问／#撳复制）將簡體字帶入公開 caption——係 BRIEF 指定格式兼產品真名，有披露，但仍係可見嘅字形妥協。
- Critical：無（公開 caption 無簡體填料／日文）。

### R8 可傳性／場景 — **8／10**

- 理由：港場景痛點尖、即用結果、intent 清楚，冇求轉發。
- 證據：hook「老闆臨時 WhatsApp 叫週末加班，空白稿怕得罪人又不想無條件答應」＝香港打工仔高共鳴情景（週末加班＋唔想硬碰）；提示全文 3.0–3.5s 睇得晒（可照抄去自己千问用）；覆訊全文多格睇得晒（可即抄）；第 3 步明教「可貼老闆 WhatsApp」；landing 教埋「唔好寫公司名、電話、員工編號」私隱提醒＋「AI 加咗冇寫嘅資料先刪走」；無「丟 group」、無轉發 bait；landing 明寫「呢頁教你出覆訊，唔係叫你轉發呢則片」。
- 扣 2 分：① landing 示範名同 reel 唔同（見 R5），「跟住做」一致性削弱——讀者跟 landing 提示會出到另一段（陳小姐版）覆訊，同片所見（阿強版）對唔上。② landing 刻意未引用生成句（「生成句子未核對，呢頁唔引用」），想喺網頁即抄覆訊嘅人暫時要返片截圖。
- Critical：無（此項無 Critical 觸發）。

### R9 吸引力 — **8／10**

- 理由：四條自問全過，穩陣達標，唔係出色。
- 證據：
  1. **0–2s**：0.0s 封面已有成段覆訊結果，0.5s hook 行＋紅圈動；hook 有「怕得罪人 vs 唔想無條件答應」真衝突。止滑成立。
  2. **封面大字**：「加班覆訊／即出稿」陌生人 1 秒明「睇完攞到一段覆老闆加班嘅訊」；通義千問喺上行唔搶得益。
  3. **完結拉力**：「追蹤 JD／少啲試錯」＋「每日中午」系列節奏＋caption 收藏 CTA（「想稍後再跟？可先收藏本則」），可跟可傳。
  4. **唔靠假承諾**：結果係同日真 capture 全句（sha256 對過），唔係另一段文。
- 扣 2 分：視覺係系列模板（字卡＋之前／之後格公式），衝擊力靠題材本身；之後格字細（見 R3）；CTA 句式同前後集同一套，冇新鮮感。
- Critical：無（封面／hook 唔靠假結果或假工具）。**R9＝8，過單獨門檻。**

---

## Critical 清單

**（空）** — R1–R9 無 Critical。特別核實：覆訊四關鍵段「補休／加班費／星期六上午／阿強」喺 cover（0.0s）、r2（4.0s）、r3（6.5s）、CTA 頂（8.5s）全部逐字入鏡，**無中段裁**（定B 唯一保留嘅人眼 Critical 線——唔存在）。R10 按 BRIEF 不入此清單、不重審（tip 27.6／28.9／23.8 ≤40；ring closes 0 FAIL；layout_PASS 定B 維持）。

---

## PASS WARN（非阻擋）

1. **landing 示範同 reel 兩套**：landing 可抄提示＋步驟三檢查清單用「陳小姐／老闆您好／朝早十點至下午兩點／下星期補假」，reel 實際係「阿強／收到，老闆／星期六上午／補休或者加班費」。建議 noon Share 前由頁主改 landing 對返 capture（或者明示「網頁示範同片係兩個虛構例」）；本閘規矩我唔喐 `reels/`。
2. **逐步截圖未上頁**：caption 承諾「本則逐步截圖」；landing 五圖標「未放入」。建議 noon 前或之後盡快 wire `qwen_0_before／qwen_1_typed／qwen_2_send／qwen_3_after（＋可選 qwen_4_copy）`。
3. **landing「掣名未截到」講法**：reel 已見「复制」掣（6.5s 入鏡），landing「複製掣叫咩名，本集未截到」可收窄為「截圖未嵌入，掣名以當日畫面為準」。
4. **caption 重複句**：「密碼喺網頁（個人檔連結）」出現兩次，可刪 #注意 段尾嗰次。
5. **复制菜單未入鏡**：r3 只見「复制」掣；下版可帶埋菜單開態（复制／复制为Markdown），令 BUTTONS 菜單項落地。
6. **之後格字級**：全句入鏡係誠實做法（亦係定B 全文優先取捨），但手機上偏細；屬已簽 layout 範圍，只記錄。

— **Kimi K3** · Ep.49 rigor 1/3 票 · **PASS**（均分 8.56 · R9 8 · Critical 0）· 未代 Share · Share 維持 ONLY 2026-10-31 12:00 HKT
