# Ep.44 嚴謹度評分 · GLM 5.3（三模型閘之一）

| 欄位 | 內容 |
|---|---|
| Model | GLM 5.3（Cursor CloudAgent） |
| 時間 | 2026-10-25 ~22:15 HKT |
| 對象 | Ep.44 · slug `brave-sick-leave-msg` · 2026-10-26 12:00 HKT slot（layout 雙簽已齊；本閘唔准 Share） |
| reel sha256 | `6aab2dc9fdca6e0fc0aa4371f004fae3af7e2ae1d51e3d74c25a43373a8c298a`（＝BRIEF／LAYOUT-SIGNOFF／review-art 值，實測相符） |
| contact sha256 | `8ef5acad324c939434e6b3c5f254371b5a9aab147b96d1ce48362b40a3426910`（pack 附本實測；handoff 無列 contact hash 值） |
| caption sha256 | `9e5e1a85f8544d5b6288a288a510c986aa868d5221bca7c8354745c94c669126`（pack 附本實測） |
| 對照 | BRIEF（2026-10-25）· RUBRIC v0+v1+v2 · caption · contact storyboard · LAYOUT-SIGNOFF（22:10）· review-art（R1 APPROVED）· 成片 9.0s/270f/1080×1920 · 16 格抽幀 · landing live |

**本檔只係 GLM 5.3 一票。** 及格要三 model 多數 PASS＋均分≥8＋R9≥8＋Critical=0。layout 雙簽唔送分：照 RUBRIC 逐項憑證據評。R10 只記 note，唔評分唔阻擋。

## 硬檢表（BRIEF 明列項逐條核對）

| # | BRIEF 明列檢查 | 核對 | 結果 |
|---|---|---|---|
| 1 | Tool＝Brave Ask @ search.brave.com（畫面可寫 Ask Brave） | 成片 f1.5s composer 見「Ask anything, find anything...」＋搜尋列右邊 Ask 掣；f3.5–5.0s 特寫「撳Ask」；本人抓 search.brave.com 頁身實見 i18n 串 `Ask:"Ask"`、`"Ask Brave"` 同 placeholder；landing 明文「結果頁頂部係 Ask Brave」 | 過 |
| 2 | 免登入 disclosed | caption「開 search.brave.com（免登入）」＋「免登入可用」；landing hedge「登入同用量以你當日畫面為準」；BRIEF 記免登入已實測；Ep.40 已核實同一路徑 | 過 |
| 3 | CTA「每日中午」 | f7.5s CTA 卡「追蹤 JD 少啲試錯／每日中午／粵語 AI 3 步」；caption「每日中午粵語 AI 3 步」 | 過 |
| 4 | cover line1 Brave Ask｜line2 病假短訊／即出稿 | f0.0s 封面大字「Brave Ask」＋「病假短訊」＋「即出稿」 | 過 |
| 5 | 步驟 #開BraveAsk／#撳Ask／#睇短訊 | 成片 STEP1/3「開 Brave Ask」1.5s、STEP2/3「撳Ask」3.5s、STEP3/3「睇短訊 Copy 傳老闆」5.5s；caption 三個 hashtag 同名同次序；landing 3 步同文同圖 | 過 |

| 6 | 畫面＝得體病假短訊（禁假醫生紙／「醫生紙自動出」） | 全片結果＝WhatsApp 短訊「X 總，我聽朝（星期二）發燒喉嚨痛，想請一日病假，預計星期三返工…謝謝體諒」；caption／成片／landing 零醫生紙承諾（掃描 caption「醫生紙」＝0）；landing 示範提示明文「唔好加假電話、假地址、假醫生紙編號」，仲教「AI 加咗…醫生紙編號…先刪走」 | 過 |
| 7 | 示範虛構（陳／市場助理）＋按公司規定自行改 | r1c 畫面提示見「我姓陳、職位用「市場助理」（虛構）」；caption #注意「示範係虛構返工場景（陳／市場助理）；請按公司規定自行改」；landing 多處「人物同病況虛構」 | 過 |
| 8 | 密碼喺網頁（個人檔連結） | caption 出現兩次；landing 兌現：「Workflow 庫密碼 jdtech3（喺 /workflow/ 輸入）」；/workflow/ 連結在場 | 過 |
| 9 | landing 逐步截圖 URL 一致 | caption URL＝live URL（HTTP 200）；brave_0_before／1_typed／2_ask／3_after／4_copy.png 五張全 200；逐步內容同成片步驟對得上 | 過 |
| 10 | 禁「留言 1」／Collab／朝早／07:00 | caption 掃描＝none | 過 |

## R1–R9 評分

| ID | 分 | 一句理由 | 證據 |
|---|---|---|---|
| R1 事實嚴謹 | 9 | 功能句（search.brave.com、免登入、Ask 唔係 Search、結果頁叫 Ask Brave、可追問重寫）全部有可核對依據，冇誇大；landing 主動 hedge「介面如果更新，以你當日畫面為準」；醫療位乾淨——只出短訊、明言唔係醫療建議、「唔舒服就問醫生」 | live 頁身見 Ask／Ask Brave／placeholder；landing 常見錯誤 8 條；caption #注意 免責齊 |
| R2 示範一致 | 9 | caption 三步＝成片 step 卡＝landing 3 步；掣名 verbatim（Ask；Ask anything, find anything...）；r1c 貼 prompt、r2c 圈 Ask 掣心、r3c 指短訊行；微瑕：caption「撳 Copy」喺成片只以 step 卡副題＋landing 可選特寫承載，唔係獨立一拍 | 抽幀 1.5／2.3／3.5／4.3／5.5／6.3s；landing HowToStep 3 步＋可選特寫標明「唔係另一步」 |
| R3 封面誠實 | 9 | 封面大字「病假短訊 即出稿」＝片內真結果（之前／之後卡 0s 已見定稿短訊，尾段 CTA＋loop 都見同一定稿）；唔掛羊頭 | f0.0／0.5／1.0s 封面卡；f7.5–8.9s 尾卡 |

| R4 工具／產品準確 | 10 | 產品名（Brave Ask／結果頁 Ask Brave）、入口 URL、免登入、掣名（搜尋列入面嘅 Ask，唔係 Search，唔係 Leo 側欄）全對；landing 仲拆解「Reel 叫 Brave Ask、官方說明頁叫 Ask Brave」呢個易撈亂位並引官方 help/ai | live 頁身 i18n 實見 `Ask:"Ask"`／`"Ask Brave"`；landing 官方說明 2 條＋第40集核實路徑；成片掣名同 |
| R5 文案嚴謹 | 9 | 無填料；CTA「每日中午」對 slot；密碼句有兌現（jdtech3 @ /workflow/）；免責齊（虛構陳／市場助理、按公司規定自行改、AI 可能出錯、敏感內容自行核對）；無留言1／朝早／Collab | caption 逐句對 BRIEF；landing ending-note 實見密碼句＋兌現 |
| R6 結構節奏 | 9 | 0s 結果（封面之前／之後卡）、early_motion≤2s（f1.5s 已入 STEP1/3）、mid_beat Ask 特寫 ~4.3s、全長 9.0s（≤15s）、尾段 CTA hold＋loop 回封面無新主張 | ffprobe 實測 9.000s／270f／30fps；抽幀 16 格核對節拍；gates VERDICT PASS＋verify_motion PASS |
| R7 合規／字形 | 9 | 全件繁體為主（caption／字卡／landing）；自動掃描 caption＋landing 簡體字＝0；UI 英文係真畫面非文案混入 | 本票掃描（簡體專用字集）＝NONE；caption／landing 逐字繁體 |

| R8 可傳性／場景 | 9 | 港場景真痛（聽朝要請病假、空白稿怕語氣太隨便）、intent 清楚（傳老闆／HR）、即用結果（定稿短訊＋landing 可抄提示連複製掣），仲提「抄之前讀一次、AI 加嘅嘢先刪走」 | caption 首句痛點；r1c prompt 全文在畫面；landing code-block 複製掣在場 |
| R9 吸引力 | 8 | 前 2 秒有即時結果（封面之前／之後卡）、封面大字陌生人 1 秒明「攞到咩」（病假短訊 即出稿）、結尾有拉力（追蹤 JD／每日中午／粵語 AI 3 步）＋loop；唔靠假承諾——但視覺 hook 仍係平靜 before/after 對照，衝突句（怕語氣太隨便）只在 caption 文字，停滑力中上；同 Ep.41/42 同構 | f0.0–1.0s 對照卡；f7.5–8.9s 尾卡＋loop；無假結果／假工具（唔觸 R3／R4 Critical 條） |

**均分：9.00／10**（9+9+9+10+9+9+9+9+8 = 81 ÷ 9）｜ **R9＝8（≥8 過單獨門檻）**｜ **Critical＝0**

## 總評

# **PASS**（GLM 5.3 一票）

- 均分 9.00 ≥ 8 過
- R9 = 8 ≥ 8 過
- Critical ＝ 0 過

## Critical 清單

（空）

## R10 note（只記唔評——layout 已排版＋Art 雙簽）

- LAYOUT-SIGNOFF（2026-10-25 22:10）：qa WARN／0 FAIL、gates VERDICT PASS、ring_on_target 全 PASS、tip 30.9／38.6／35.2 ≤40、Art 批核句「圈心＝掣心 PASS」在場——本票唔重評劃位。
- 純記錄：contact sheet 尾格標 7.50s，成片實長 9.0s（CTA hold 到 ~8.9s 先 loop）；唔屬劃位缺陷，唔阻擋。

## PASS 仍建議改進（非阻擋、唔影響本票）

1. **R9**：視覺 hook 連續第三集（Ep.41/42/44）仍係平靜 before/after 對照行先，衝突句只在 caption；下則可以試把「聽朝要請病假，怕語氣太隨便」放上字卡行先，對照做第二拍。
2. **R2**：caption「撳 Copy 傳老闆／HR」喺成片冇獨立一拍（靠 step 卡副題＋landing 可選特寫頂住）；下則 capture 多一張 Copy 撳落去狀態，逐步感更足。
3. **landing 可抄提示 vs 成片打入提示**：兩段字面唔同（同一虛構示範兩個寫法，事實一致：陳／市場助理／聽朝星期二發燒喉嚨痛請一日／星期三返工）。資訊無矛盾，但 verbatim 一致會更穩陣。
4. **seat 環境紀錄**：本 VM curl search.brave.com 回 HTTP 429（bot throttle），頁身照出並實見 Ask／Ask Brave／placeholder；下則 seat 有瀏覽器可人眼補一次實測。

## 核對記錄（本票做過嘅驗證）

- reel.mp4 sha256 實測＝BRIEF／LAYOUT-SIGNOFF／review-art 值；contact.png sha256 實測 `8ef5acad…6910`（handoff 無列值，記錄備查）；caption.txt sha256 實測 `9e5e1a85…9126`
- 成片 ffprobe：9.000s／270f／30fps／1080×1920（≤15s）；音軌在場，caption 無 VO 主張
- 抽幀 16 格（0.0–8.9s）人眼核對封面大字、三步掣名、箭咀指向、定稿短訊、CTA「每日中午」、loop 回封面
- landing live HTTP 200；brave_0_before／1_typed／2_ask／3_after／4_copy.png 五張全 HTTP 200
- caption 逐句核對：每日中午／密碼喺網頁（個人檔連結）／免登入／search.brave.com／#開BraveAsk／#撳Ask／#睇短訊／虛構（陳／市場助理）／按公司規定／AI 可能出錯／landing URL 全在場；「醫生紙」＝0；「留言」＝0；「朝早」／07:00＝0；Collab＝0
- 自動掃描 caption＋landing 簡體專用字＝0；繁體為主達標
- search.brave.com 頁身實見 `Ask:"Ask"`、`"Ask Brave"`、placeholder「Ask anything, find anything」（本 VM 回 429 bot-throttle，內容照出）
- 密碼句兌現：landing ending-note「Workflow 庫密碼 jdtech3（喺 /workflow/ 輸入）」＋ /workflow/ 連結在場

— GLM 5.3 · 2026-10-25 ~22:15 HKT








