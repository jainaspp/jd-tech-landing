# Ep.45 嚴謹度評分 · GLM 5.3（三模型閘之一）

| 欄位 | 內容 |
|---|---|
| Model | GLM 5.3（Cursor CloudAgent） |
| 時間 | 2026-10-26 ~22:50 HKT |
| 對象 | Ep.45 · slug `canva-magic-write-parttime-hire` · 2026-10-27 12:00 HKT slot（layout 雙簽已齊；本閘唔准 Share） |
| reel sha256 | `70465a9dfd58c8736c710e56c8326c3a4699e1e2b70026707d41c0bb13c30e30`（＝BRIEF／LAYOUT-SIGNOFF／review-art 值，實測相符） |
| contact sha256 | `3bd99c4aff2d74a87ba425337037440326fb0de761eefb69883d6baa87861531`（pack 附本實測＝ART-R2-APPLIED 列值） |
| caption sha256 | `efa017a2d6fad3d498857df90ebc16f01d62cc5c8caa68876e45334eea9b05cb`（pack 附本實測） |
| 對照 | BRIEF（2026-10-26 22:35）· RUBRIC v0+v1+v2 · caption · draft · contact sheet · qa_report（0 FAIL）· LAYOUT-SIGNOFF（22:34）· review-art（R2 延簽 APPROVED）· ART-R2-APPLIED · 成片 9.0s/270f/1080×1920 · 13 格抽幀 · landing live |

**本檔只係 GLM 5.3 一票。** 及格要三 model 多數 PASS＋均分≥8＋R9≥8＋Critical=0。layout 雙簽唔送分：照 RUBRIC 逐項憑證據評。R10 只記 note，唔評分唔阻擋。

## 硬檢表（BRIEF 明列項逐條核對）

| # | BRIEF 明列檢查 | 核對 | 結果 |
|---|---|---|---|
| 1 | Tool＝Canva 魔法文案工具™（Magic Write · canva.com Docs） | 成片 f2.0s 浮動視窗標題「魔法文案工具™」實見；caption「於 Canva Docs 輸入『/』，選擇『魔法文案工具™』」；landing 三步同路徑＋引用 canva.com/help/use-magic-write 等官方說明 | 過 |
| 2 | 須登入 disclosed（禁寫免登入） | caption「Canva 須登入」在場；landing「Canva 要登入，呢頁冇寫免登入」＋常見錯誤「話免登入：Canva 通常要登入」；caption／成片掃描「免登入」＝0（landing 僅否定句用，方向正確） | 過 |
| 3 | CTA「每日中午」 | 成片 f7.8／8.5s CTA 卡「每日中午 粵語 AI 3 步」實見；caption「每日中午粵語 AI 3 步」；零朝早／07:00 | 過 |
| 4 | cover line1 Canva｜line2 兼職徵人／即出稿 | f0.2／0.8s 封面大字「Canva」＋「兼職徵人」＋「即出稿」；before/after 卡「之後」已見真結果「茶餐廳洗碗兼職」 | 過 |
| 5 | 步驟 開魔法文案／按產生／按插入 | 成片 STEP1/3「開魔法文案」1.5s、STEP2/3「撳產生」3.5s、STEP3/3「撳插入」5.5s；caption #開魔法文案／#按產生／#按插入 同名同次序；landing HowToStep 3 步同文 | 過 |
| 6 | 畫面＝三條可貼徵人短文（禁假結果） | f5.6–6.2s 結果 Doc 實見兩條全文（茶餐廳洗碗兼職／茶餐廳幫檯兼職；📍旺角、🕒星期六日 11:00–15:00、💰時薪 HK$70、🍽️洗碗員／幫檯員）＝BUTTONS.md capture verbatim；第三條「茶餐廳週末兼職」喺已簽 crop 之下（見 R2 微瑕）；零假結果 | 過（微瑕記 R2） |
| 7 | 示範虛構茶餐廳＋按實際改 | caption #注意「示範為虛構茶餐廳週末兼職情景；請按實際職位、時薪、地點改寫」；landing 多處「示範茶餐廳虛構」＋「時薪 HK$70、旺角、星期六日 11:00–15:00 都係拍片用」 | 過 |
| 8 | 密碼喺網頁（個人檔連結） | caption 出現兩次；landing 兌現「Workflow 庫密碼 jdtech3（喺 /workflow/ 輸入）」；/workflow/ 實測 HTTP 200 | 過 |
| 9 | landing URL `/reels/canva-magic-write-parttime-hire/` 一致 | caption URL＝landing canonical＝live URL，HTTP 200；禁用 slug `canva-weekend-hire` 全 repo 掃描＝0 | 過 |
| 10 | 禁「留言 1」／Collab／朝早／07:00 | caption 掃描＝0；成片字卡＝0；landing 掃描＝0 | 過 |

## R1–R9 評分

| ID | 分 | 一句理由 | 證據 |
|---|---|---|---|
| R1 事實嚴謹 | 9 | 功能句（魔法文案工具™＝Magic Write、Doc「/」入口、掣名、3 步出稿）全部有可核對依據；掣面冇印刷字嘅「產生」icon 掣老實講明「無印刷字；工具提示為產生」；landing 主動拆解「快速動作／Magic Design 唔係呢個」同 hedge「用量同方案以帳戶畫面為準」；徵人位乾淨——明言唔係勞工處招聘、勿寫成疑似非法招聘 | f2.0s 視窗標題；draft Sources 表（BUTTONS.md＋canva.com 連結）；landing citation 3 條官方 help 頁＋常見錯誤 8 條 |
| R2 示範一致 | 9 | caption 三步＝成片 step 卡＝landing HowToStep；掣名 verbatim（魔法文案工具™／請形容你的寫作任務（5 個字以上）／產生／插入）；r1c 圈箭貼 typed prompt、r2c 圈心貼紫圓箭掣心（tip 28.0）、r3c 貼第一條「茶餐廳洗碗兼職」；微瑕一：caption「畫面得三條」但已簽 crop 內只有兩條全文（第三條喺 crop 下）；微瑕二：caption 提「複製文字」後備路徑，成片只見 icon 列、未見有印刷字嘅複製文字掣特寫 | 抽幀 1.6／2.0／2.7／3.8／4.8／5.6／6.2s；qa ring_on_target 全 PASS；LAYOUT-SIGNOFF 逐項 WARN 人眼收 |
| R3 封面誠實 | 9 | 封面大字「兼職徵人 即出稿」＝片內真結果（0s before/after 卡「之後」已見第一條徵人帖全文開頭；STEP3 三條生成；CTA loop 同一結果）；唔掛羊頭 | f0.2／0.8s 對照卡；f5.6–6.2s 結果 Doc；f7.8／8.5s 尾卡 |
| R4 工具／產品準確 | 10 | 產品名（魔法文案工具™＝Magic Write）、入口（canva.com Docs「/」）、登入要求（須登入，登入牆唔當免登入）、掣語義（紫圓箭＝產生，tooltip 名如實披露）全對；landing 仲拆解「快速動作」撈亂位同產品頁 Magic Write™ 命名對齊（第29/41集對齊繁中 UI） | 成片掣名同 BUTTONS.md；landing official-why 段＋citation；draft Sources 全 ✅ |
| R5 文案嚴謹 | 9 | 無填料；CTA「每日中午」對 noon slot；密碼句有兌現（jdtech3 @ /workflow/ live 200）；免責齊（虛構茶餐廳／按實際改／勿寫成疑似非法招聘／AI 可能出錯自行核對／繁中 UI）；零留言1／朝早／Collab；WARN：caption 承諾「本則逐步截圖」URL 但 landing 四張 UI 截圖仍未放入（頁面明文「截圖未放入，capture 之後先補圖」，BRIEF 已認 wire-later） | caption 逐句對 BRIEF；landing ending-note＋HTTP 200 實測；頁面「UI 截圖未放入」明文 |
| R6 結構節奏 | 9 | 0s 結果（before/after 卡）、early_motion≤2s（0.3–0.8s 圈「之後」徵人帖 tap 實見）、mid_beat「產生」紫圓箭特寫 4.3–5.5s、全長 9.0s（≤15s）、尾段 CTA hold 到 9.0s loop 無新主張 | ffprobe 9.000s／270f／30fps／1080×1920；qa timing PASS（cuts 1.5/2.3/3.5/4.3/5.5/6.3/7.5）；gates＋verify_motion PASS |
| R7 合規／字形 | 9 | 全件繁體為主（caption／字卡／landing）；自動掃描 caption＋landing 簡體專用字＝0；UI 英文係真畫面非文案混入；音軌在場，caption 無 VO 主張（music-only 如 draft Notes） | 本票掃描（簡體專用字集）＝NONE；ffprobe audio stream 在場 |
| R8 可傳性／場景 | 9 | 港場景真痛（週末檔口請兼職、空白稿唔知點落筆）、intent 清楚（貼 IG／Facebook 徵人）、即用結果（三條 40–80 字可貼徵人帖，職位／時段／時薪／地點齊）、landing 逐步提示可照抄 | caption hook＋#按插入段；r1c prompt 全文在畫面；landing HowToStep＋草稿用途說明 |
| R9 吸引力 | 8 | 前 2 秒有即時結果（封面之前/之後卡＋tap 圈）、封面大字陌生人 1 秒明「睇完攞到咩」（兼職徵人 即出稿）、結尾有拉力（追蹤 JD／每日中午／粵語 AI 3 步）＋loop；唔靠假承諾——但視覺 hook 仍係平靜 before/after 對照（連續第四集同構），衝突句（空白稿唔知點落筆）只在 caption 文字，停滑力中上 | f0.2–0.8s 對照卡；f7.8–8.5s 尾卡＋loop；無假結果／假工具（唔觸 R3／R4 Critical 條） |

**均分：9.00／10**（9+9+9+10+9+9+9+9+8 = 81 ÷ 9）｜ **R9＝8（≥8 過單獨門檻）**｜ **Critical＝0**

## 總評

# **PASS**（GLM 5.3 一票）

- 均分 9.00 ≥ 8 過
- R9 = 8 ≥ 8 過
- Critical ＝ 0 過

## Critical 清單

（空）

## R10 note（只記唔評——layout 已排版＋Art 雙簽 22:34）

- LAYOUT-SIGNOFF（2026-10-26 22:34）：qa WARN／0 FAIL、gates VERDICT PASS、ring_on_target 全 PASS、tip 29.9／28.0／30.8 ≤40、Art 批核句「圈心＝掣心 PASS」在場——本票唔重評劃位，唔以 R10 阻擋 Share。
- 純記錄：contact sheet 尾格標 7.50s 而成片實長 9.0s（CTA hold 到 ~8.9s loop）；唔屬劃位缺陷。

## PASS 仍建議改進（非阻擋、唔影響本票）

1. **Share 前必須補（流程項，非本閘阻擋）**：caption 承諾「本則逐步截圖」→ landing 四張 UI 截圖（canva_0_before／1_typed／2_generate／3_after）仍未放入、shortcode 未接；noon Share 前務必 wire 好先兌現 caption 承諾（BRIEF 已列「稍後 PNG wire」）。
2. **R2**：caption 寫「畫面得三條徵人短文」，成片已簽 crop 內只有兩條全文（第三條「茶餐廳週末兼職」喺 crop 下緣以下）；landing 截圖補入後可全文兌現，或者下則 capture 時比第三條一拍／收鬆少少 crop。
3. **R2**：「複製文字」後備路徑只見 icon 列未見掣面特寫；下則可以加 canva_4_copy 一拍（draft 已列該 asset 只入 NOTES／Art close）。
4. **R9**：視覺 hook 連續第四集（Ep.41/42/44/45）同構 before/after 行先，衝突句只在 caption；下則可以試「空白稿唔知點落筆」上字卡行先，對照做第二拍。

## 核對記錄（本票做過嘅驗證）

- reel.mp4 sha256 實測＝BRIEF／LAYOUT-SIGNOFF／review-art／ART-R2-APPLIED 值 `70465a9d…0e30`；contact.png sha256 實測＝ART-R2-APPLIED 值 `3bd99c4a…61531`；caption.txt sha256 實測 `efa017a2…05cb`
- 成片 ffprobe：9.000s／270f／30fps／1080×1920（≤15s）；音軌在場（music-only 無 VO 主張）
- 抽幀 13 格（0.2–8.5s）人眼核對：封面大字、STEP1/3 開魔法文案（魔法文案工具™ 視窗＋placeholder＋typed prompt）、STEP2/3 撳產生（紫圓箭特寫＋箭咀指掣心）、STEP3/3 撳插入（兩條徵人帖全文：旺角／星期六日 11:00–15:00／時薪 HK$70／洗碗員·幫檯員；圈貼「茶餐廳洗碗兼職」）、CTA「追蹤 JD／少啲試錯／每日中午／粵語 AI 3 步」
- caption 逐句核對：每日中午／密碼喺網頁（個人檔連結）×2／須登入／魔法文案工具™／#開魔法文案／#按產生／#按插入／虛構茶餐廳／按實際改／勿寫成疑似非法招聘／AI 可能出錯／landing URL 全在場；免登入＝0；留言＝0；朝早／07:00＝0；Collab＝0；canva-weekend-hire＝0
- 自動掃描 caption＋landing 簡體專用字＝0；繁體為主達標；landing「免登入」3 處全部係否定／警告句（要登入、唔寫免登入），方向正確
- landing live 實測：reel 頁 HTTP 200（URL＝caption URL＝canonical）；/workflow/ HTTP 200（密碼 jdtech3 兌現）；頁面 noon-only 披露（「本集只係 2026-10-27 12:00 Share」）；UI 截圖明文未放入、shortcode 未接（記入建議 1）
- qa_report（reel_qa 22:33 重跑）：status=WARN、0 FAIL；ring_on_target 全 PASS；tip r1c 29.9／r2c 28.0／r3c 30.8 ≤40；LAYOUT-SIGNOFF 逐 WARN 人眼收（22:34）
- 對照 SCORECARD（Ep.44 三席 3/3 PASS 先例）：本票格式同門檻一致（mean≥8 ∧ R9≥8 ∧ Crit=0）

— GLM 5.3 · 2026-10-26 ~22:50 HKT
