# Ep.41 發佈前嚴謹度閘 · 評分（Kimi K3）

**對象：** Ep.41 Canva 魔法文案 OT 改期通告（`canva-magic-write-ot-notice` · 2026-10-20-p2 · 12:00 HKT only · 未 Share）
**評分模型：** Kimi K3（Cursor CloudAgent）· 2026-10-19 22:04 HKT
**驗收基準：** `origin-request.md`（2026-10-19 ~21:32 HKT 凍結檔 · 本則無新題材原句 · 全部沿用站立）＋ RUBRIC v0＋v1（R9）＋ origin-request-gate-2026-10-19
**成品：** reel sha256 `a3e5d37f8e5ffc74644103fa5d13a047df11754b373476f1e4950d904d265bd5`（9.0s · 1080×1920 · 與 Art Round 2 APPROVED hash 一致）· caption sha256 `29f04ba5be4a21b5d147e8b9790ff20e88441c2bff0986bae52d9d2c7cb40087`
**性質：** 發佈前評分；本檔只係 Kimi K3 一票。Art／reel_qa 嘅 APPROVED 唔計入分數，亦唔抵銷 Critical。及格線：三 model 多數 PASS、均分≥8、R9≥8、Critical=0（含 R0）。
**本 PR 只交評分；未改 `reels/` 或任何產品落地頁。**

## 0. R0 對原始請求（凍結檔站立原句）

**PASS · 無 Critical。** 凍結檔存在且只錄 PP O 原句（逐字、註日期出處、標「沿用站立，非本則新請求」），符合閘規；本則成品逐條對站立如下：

| 站立原句（出處） | 核對結果 |
|---|---|
| 朝早 07:xx Share 停；每日只發一則 12:00（PP O／GM ~13:57） | ✅ draft 標頭「2026-10-20-p2（12:00 HKT only）」；landing「2026-10-20 12:00 先出街」；未代發，series-counter 仍 =40（Share 後先 bump） |
| 我要全8才可以（PP O） | 本閘本身；見下方逐維評分 |
| 冇人睇有用？（PP O） | 對應 R9，見下 |
| 未達標整則重做、禁止湊合改 caption（PP O via Bad Bot） | 若 FAIL 適用；本票結論見總評 |
| UI 截圖／prompt 示範歸 IG內容素材搜集師（PP O 親口批准） | 成品截圖源自 capture 料（draft Sources：`assets/ui/BUTTONS.md`、Canva capture 連結；landing 標「2026-10-19 自行截圖」）。交付物內無違規證據；截圖由邊個影屬流程歸屬， artifacts 不可反證，唔升 Critical |
| 鎖題必寫凍結檔、三 model 先讀此檔先判 R0（PP O／流水線架構師） | ✅ 已讀並先判 R0（本節） |

## 1. 總評

**PASS**

等權均分 **9.2／10**（9+10+10+10+9+10+8+9+8＝83，83÷9≈9.22）。R9＝8（≥8 達標）。Critical＝0（含 R0）。RUBRIC 寫「加權均分」但未給權重，本票用等權。
注意：及格要三 model 多數 PASS——呢個只係 Kimi K3 一票，唔係閘最終結果。

## 2. 各維度

### R1 事實嚴謹 — 9／10

每句功能／登入／用量描述有 capture 或官方頁對得住，無誇大；唯 landing 結尾一句舊節奏文案係小失分。

**證據**
- 入口「Docs 打『/』（正斜線魔法輸入）→ 魔法文案工具™」：`contact.png` r1w/r1c 見真 UI slash 選單；landing `canva_1_open.png` 見面板標題「魔法文案工具™」。
- 「產生」掣：landing 老實寫明「畫面上係紫色圓形箭嘴，無障礙名稱『產生』，按鈕面冇寫『產生』」——無扮有字，與 `canva_3_generate.png` 特寫一致。
- 「插入」掣：`r3c.png`／`canva_4_after.png` 實見。
- 登入：caption＋landing 寫「Canva 要登入」，無免登入主張；用量：landing 寫「免費帳戶唔保證無限次」「呢頁唔寫免費無限」。
- 示範公司「星河貿易」虛構：caption#注意、draft、landing 三處齊披露；prompt 內亦標（虛構）。
- 官方來源：landing 引 Canva Help Center（use-magic-write／slash shortcut／Magic Write 產品頁），最後核實 2026-10-19。
- 扣分：landing 結尾 CTA 段「朝早同中午都有…每日 07:00・12:00」係舊文案，同站立「朝早 07:xx Share 停」唔一致（caption 寫「每日中午」係啱嘅）。

**Critical：** 否。

### R2 示範一致 — 10／10

畫面三步＝caption 三步＝cover 承諾，掣名 verbatim，真 UI 無 mock。

**證據**
- caption「開魔法文案」→ reel 1.8s r1w／2.6s r1c 實見「/」選單＋「魔法文案工具™」；caption「撳產生」→ 3.4s r2w 貼好 prompt、4.2s r2c 紫箭特寫；caption「撳插入」→ 5.8s r3w／6.6s r3c「插入」掣＋通告入文件。
- r2c prompt 逐字＝draft Demo copy（「幫我寫一段畀香港同事 WhatsApp 群嘅短訊：聽朝原定加班改去星期三晚 7–9 點…星河貿易（虛構）」）。
- caption 承諾「本則逐步截圖」→ landing 5 張真截圖全部 HTTP 200（`canva_0_before`／`canva_1_open`／`canva_2_prompt`／`canva_3_generate`／`canva_4_after`，實測 2026-10-19 22:0x HKT），係真 Canva 已登入繁中畫面。
- Art R1 裁切問題（half_cut／切字）已喺 R2 (B) 修妥：r3c「加班時間調整通知」齊字，reel sha 對得上 APPROVED hash。

**Critical：** 否。

### R3 封面誠實 — 10／10

封面大字「OT 改期通告即出」嘅結果喺片內實際出現。

**證據**
- `cover.png` 之前＝空白 Doc placeholder、之後＝通告稿；片內 5.8s（r3w）、6.6s（r3c）、7.4s（end_hold）、8.2s（cta after 格）都見「加班時間調整通知」成稿。
- 大字≤10 字、唔掛工具名（工具喺 chip「Canva｜3步」），同 draft 封面規格一致；無掛羊頭。

**Critical：** 否。

### R4 工具／產品準確 — 10／10

產品名、入口、登入要求全部正確，仲主動同「快速動作」／Magic Design 劃清界線。

**證據**
- 名：Canva 魔法文案工具™（landing 對照英文官方 Magic Write™）；入口 canva.com → Doc →「/」，同 `canva_1_open.png` 及官方 help 頁一致。
- 登入牆：寫明要登入，唔存在「登入牆當免登入」。
- landing「常見錯誤」明寫唔係「快速動作」、唔係 Magic Design 出海報——邊界講得清楚。

**Critical：** 否。

### R5 文案嚴謹 — 9／10

無含糊填料；密碼承諾有頁兌現；免責齊；唯一小扣分同 R1 共源（landing 舊節奏句）。

**證據**
- 無「留言 1」；CTA＝「收埋呢則先」＋追蹤 JD（draft 標 intent=send，禁 ask-to-share）。
- caption「密碼喺網頁（個人檔連結）」→ landing 結尾實載「Workflow 庫密碼 jdtech3（喺 /workflow/ 輸入）」，`/workflow/` 實測 HTTP 200——承諾有頁，唔係空口令。
- 免責齊：示範通告純屬虛構／唔好貼真實公司同事名／要登入／繁中 UI；landing 另加 AI 出錯自查、用量以帳戶為準、「唔係叫你轉發呢則片」。
- 扣分：landing ending-note「每日 07:00・12:00」舊文案（同 R1 記同一筆，唔重複扣兩次嘅意思係：兩維各反映自己受損面）。

**Critical：** 否。

### R6 結構節奏 — 10／10

0s 結果、early_motion≤2s、mid_beat、≤15s 全部達標。

**證據**
- 片長 9.0s（ffprobe）；0.0s cover 已見之前→之後結果；0.5s ring 打落「之後」通告稿（early_motion ≤2s HARD 達標，Art verify_motion PASS）。
- 4.2s r2c 紫「產生」箭特寫＝mid_beat（draft 指定 3.5–5s）。
- 7.4s end_hold 停喺通告結果；8.2–9.0s CTA 無新主張（追蹤 JD｜少啲試錯）。
- Art 記錄：gates VERDICT PASS（0 FAIL）、loudness≈−15 LUFS、loop／safe 區 OK。

**Critical：** 否（本維通常 Major，唔自動 Critical——呢度連 Major 都唔成立）。

### R7 合規／字形 — 8／10

全繁體、無簡體／日文／Pip 混入；但 R1 審已知嘅 CHECK-WARN（布→佈）未改，caption 同 landing 都用「宣布」。

**證據**
- caption、字卡、landing（`lang="zh-Hant-HK"`）全繁體；無日文借字、無 Pip 混入。
- Art R1 記錄 `_sc_check.log` CHECK-WARN（布→佈，文案側）；caption sha 兩輪不變（`29f04ba5…`），即「宣布」保留——台式的「宣布」唔係簡體，但港式慣用「宣佈」，對香港受眾係小字形瑕疵；landing 同字（「群宣布」）。
- 風險有披露（審計記錄在案），緩解＝唔屬簡體 HARD；扣 2 分反映未執靚。

**Critical：** 否（唔係簡體／日文 HARD）。

### R8 可傳性／場景 — 9／10

港場景命中（聽朝 OT 改期、同事 WhatsApp 群）、即用（landing 可抄 prompt 逐字貼）、intent=send 清楚。

**證據**
- 場景：OT 改期通知係香港返工族高頻痛點；landing「可抄提示」一撳複製，改個公司名即用。
- 結果即用：示範稿「加班時間調整通知…回覆『收到』」結構完整可改字。
- 扣分：場景雖貼地，但係系列常見嘅「打工仔文件」題，可傳爆點靠實用唔靠話題，屬穩唔屬爆。

**Critical：** —（本維無 Critical 觸發項）。

### R9 吸引力 — 8／10

0–2s 有痛點＋即見結果、封面大字 1 秒明得益、完結有收藏／追蹤拉力；唔靠假承諾，但 hook 屬情境型唔係衝突型，拉唔到 9+。

**證據**
- 0–2s：cover 0.0s 已見結果（之後＝通告稿），caption 首句「今晚要喺同事群宣布聽朝 OT 改期」即場景痛點；0.5s ring motion 停滑。
- 封面 1 秒得益：「OT 改期通告即出」——陌生人一望知睇完攞到咩（即出一份通告）；chip「Canva｜3步」補工具。
- 完結拉力：CTA「追蹤 JD｜少啲試錯」＋caption「收埋呢則先」收藏鈎；結果卡喺 CTA after 格重現。拉力夠但係系列標準件，無額外轉發誘因（landing 反覆強調「唔係叫你轉發呢則片」——合規但犧牲咗啲病毒式拉力）。
- 滑走風險：9s 片無填料開場；教育式字卡風格對圈外觀眾一般，但 OT 情境對港打工仔命中率高。
- 無假結果／假工具（否則同時觸 R3／R4 Critical）——唔成立。

**Major（預設）：** 不成立（8≥8 達單獨門檻）。**Critical：** 否。

## 3. Critical 清單

（空）

## 4. 建議改進（非阻擋）

1. **Landing 結尾舊節奏句**：「朝早同中午都有粵語 AI 3 步…每日 07:00・12:00」同站立「朝早 07:xx Share 停、每日只 12:00」唔一致，建議 landing owner 改做「每日中午 12:00」（本 PR 唔改產品頁）。
2. **「宣布」→「宣佈」**（caption 首句＋landing）：若下次因任何原因重出文案，順手執港式字形；唔值得為呢粒字單獨重做。
3. **R9 上望**：情境 hook 已達標；想上 9 可喺 0–1s 加一拍衝突（例如時鐘／老闆訊息殘影），或 CTA 加一個「send 畀要 OT 嘅同事」式分享鈎（前提係唔違 intent=send 規矩）。

— Kimi K3 · 2026-10-19 22:04 HKT · 本檔只係一票，等 Grok 4.7／GLM 5.3 兩票後由 Bad Bot 按多數簽 rigor_PASS。
