# Ep.48 rigor · GLM 5.3（三模型閘之一）

| 欄位 | 內容 |
|---|---|
| Model seat | GLM 5.3（獨立一票） |
| 時間 | 2026-10-29 ~14:30 UTC（HKT ~22:30） |
| 對象 | Ep.48 · slug `perplexity-interview-reschedule` · Perplexity **https://www.perplexity.ai/** · 目標 Share **2026-10-30 12:00 HKT**（本閘唔代 Share；scores-only） |
| Reel sha256 | `ae85b289252eb4b42305077bfadcaaea67c569b68d6eb81eaf8ad7e09ffc20a7`（＝BRIEF／ZOOM-WAIVER／LAYOUT-SIGNOFF／ART-HANDOFF；附件 `reel_1fed.mp4` 實測逐字相符） |
| contact sha256 | `f4329f19f302c6d03e1c6e93e24d35c7ff7ee46db7f5e2c2d9487b548d30810f`（＝ART-HANDOFF；附件 `contact_4dbf.png` 相符） |
| caption sha256 | `b1714da8febc16d55671ff0abf6cf0f2780858ad020570d0fcd515c1fb0779a0` |
| 均分 | **9.22**／10（83/9） |
| R9 | **9** |
| Critical | **0** |
| VERDICT | **PASS** |
| Sign In 披露 | **有**；**0 免登入／Guest／唔使登入／未登入亦可主張**（reel 全片 0.2s 步 45 幀 OCR：免登入／Guest／唔使登入／未登入＝0 命中；caption／draft／cta-comment grep＝0；landing（live＝main `aca30db`＝#122）免登入／未登入亦可問／Guest＝0、Sign In ×23、今次 capture 未登入仍出到答案 ×13） |
| 短訊全文 | **過** — BUTTONS refined 逐字喺片內四處完整出現（封面之後格 0.0–1.4s、第 3 步闊鏡 5.5–6.3s、第 3 步特寫 6.3–7.5s、CTA 卡 7.5–8.9s），含「明天上午 10:30」「後天同一時間」「下星期一早上 11:00」「陳小姐」，**無中段裁**（OCR＋2–3× 放大目視四區獨立複核） |
| CTA check | **每日中午 yes**（8.0s CTA 卡 OCR＋放大目視「每日中午」「粵語 AI 3 步」「追蹤 JD」「少啲試錯」；caption ×1；cta-comment ×1；landing ×2；朝早／07:00／留言 1／Collab＝0） |
| Slug check | `perplexity-interview-reschedule` ✓（caption URL＝landing live 200；canonical／og:url 同）；kimi-／copilot-interview-reschedule 喺 `reels/`＋`index.html` 公開面 **0 命中** |
| 定B zoom | 1.26×＝GM-waived（ZOOM-WAIVER）；本席 **唔用機械 zoom 否決**；人眼＋OCR 複核**短訊冇中段裁** → 唔觸 Critical |

**本檔只係 GLM 5.3 一票。** 硬線：mean≥8 AND R9≥8 AND Critical=0 → 本席三條全過（mean 9.22≥8；R9 9≥8；Critical 0）。R10＝layout_PASS（定B）已由 Art＋排版＋GM waiver 三簽（gates VERDICT FAIL＝定B 接受；tip 29.0／37.6／26.1 ≤40；ring closes PASS；verify_motion PASS；LAYOUT-SIGNOFF 22:11），按 BRIEF 只註、唔重審、唔入均分。

---

## 站立核對（BRIEF 指定要查）

| # | 要查 | 結果 | 證據 |
|---|---|---|---|
| 1 | Perplexity＋Sign In 披露（禁免登入／Guest／唔使登入／未登入亦可主張） | 過 | caption `#注意`「畫面可見 Sign In banner；登入要求以當日介面為準」；landing（live 200＝main `aca30db`）Sign In ×23、登入以當日介面為準 ×多處；reel 片內登入狀態披露＝incognito 通知（「You're incognito」＋「Sessions you create won't save to your history and expire after 24 hours」，封面／r1／r2／cta 可見）。全片 45 幀 OCR＋caption／draft／cta-comment／landing grep：免登入／Guest／唔使登入／未登入／免註冊／訪客模式／login-free 主張＝**0 命中**。landing 唯一「未登入」字樣係「**今次 capture 未登入仍出到答案**」——範圍限定嘅實測報告（capture 確係 unsigned 且出咗全文答案；見 R3 證據），並同步披露「登入要求以你當日介面為準」，符合 PIVOT「僅實測可未登入出答案先准寫」；**唔係** login-free 主張。扣分位：caption 寫「畫面可見 **Sign In** banner」，但片內 45 幀 OCR「Sign In」字樣＝0 命中——片內見到嘅係 incognito session 通知（banner 係真、字樣唔同）→ R1／R4 各扣 1，非 Critical（方向誠實、有當日介面免責、無禁句） |
| 2 | CTA on-screen＝每日中午；禁朝早／07:00／留言 1／Collab | 過 | 8.0s CTA 卡（抽幀＋2× 放大目視＋OCR）：「追蹤 JD」「少啲試錯」大字＋「每日中午」「粵語 AI 3 步」side；chips JD TECH·Ep.48·PERPLEXITY。caption 末句「每日中午粵語 AI 3 步，想少啲試錯可以追蹤 JD」；cta-comment 兩行（URL＋每日中午句）；landing 每日中午 ×2。全片＋caption＋landing：朝早／07:00／留言／Collab＝0 |
| 3 | Cover：line1 Perplexity｜line2 改期短訊／即出稿 | 過 | 0.0–1.4s 封面字卡：line1 **Perplexity**（112px；gates cover_JD_TECH_tag_same_row PASS）、line2 **改期短訊**＋accent **即出稿**（84px ≤2 行 ≤10 字；gates cover_line2 PASS）；附件 cover_c4bc.png＋contact strip 一致。尾段 CTA 卡迴封面結構 |
| 4 | 步驟：開 Perplexity／黑箭 Submit／Copy | 過（有扣） | 1.5s STEP 1/3「開Pplx／Ask anything…」（composer 灰 placeholder 見到）；3.5–5.4s STEP 2/3「撳黑箭／Submit」——r2w 闊鏡＋r2c 特寫（close zoom 2.11× gates PASS）核實**黑圓白右箭**掣面無字，紫圈＋紫箭指掣心（圈心＝掣心 PASS）；5.5–7.4s STEP 3/3「撳Copy／抄改期短訊」，答案下動作列最左＝Copy icon（r3w 可見 copy／👍／👎／share／10 sources）。扣：STEP 1 字卡寫「開**Pplx**」縮寫，draft 規格係「開／Perplexity」（caption `#開Perplexity`）→ 見 R2 |
| 5 | **畫面＝可貼得體改期短訊（BUTTONS refined 逐字；禁中段裁）** | **過** | 四區獨立核實（OCR psm 4/6/11 ＋ 2–3× 放大目視）：封面之後格（0.0–1.4s）、r3w（5.5–6.3s）、r3c（6.3–7.5s）、CTA 卡（7.5–8.9s）全部逐字＝「您好，不好意思，因突發事情，我未能出席明天上午 10:30 的市場助理現場面試，想問可否改期？我後天同一時間或下星期一早上 11:00 都可以，會盡量配合您方便的安排，麻煩您了，謝謝！／陳小姐」——行 wrap 斷位自然（「想問｜可否改期？」），**無換行蝕字、無行尾貼邊、無中段裁**。對 Ep.47 嗰個 Critical（封面／第 3 步蝕字）有正面改善：今次定B 全寬（ink~606）令全文入畫。四個關鍵詞喺**結果短訊**內（唔止 prompt）：明天上午 10:30 ✓ 後天 ✓ 下星期一 ✓ 陳小姐 ✓ |
| 6 | 示範虛構＋按實際改；唔係求職／HR 意見；密碼喺網頁；landing URL 一致 | 過 | caption `#注意`「示範為虛構港求職改期情景；請按實際情況改寫…AI 可能出錯；正式覆招聘請自行核對」；landing「唔係求職／HR 意見」＋虛構示範 ×多處＋「你自己用就換走名字、職位同兩個時間」；密碼 jdtech3 喺 `/workflow/`（landing 明示，live 200）；caption URL＝`/reels/perplexity-interview-reschedule/` live 200 且＝local main |

## 總評

# **PASS**

均分 **9.22**（83/9）≥8 · **R9＝9** 過自身門檻（≥8） · **Critical＝0**。

Ep.47 本席退回嘅唯一核心原因（結果短訊喺片內做唔到逐字）今次**修好咗**：BUTTONS refined 全文喺片內四處（封面之後格／r3 闊鏡／r3 特寫／CTA 卡）逐字完整、四個關鍵詞齊、無中段裁——定B「全文優先」tradeoff（接受 1.26× zoom 換全寬 606 ink）係正確取捨，而 GM waiver 亦明文唔准本席用機械 zoom 否決。主幹全部過：Perplexity＋Sign In 誠實披露（0 免登入主張，橫跨 reel／caption／draft／cta／live landing 五面 grep＋OCR）；CTA 每日中午片內＋caption＋landing 三面一致；掣名 verbatim（Ask anything…／Submit 黑圓白右箭畫面無字／Copy 最左 icon）全部對得上同日 capture；slug 干淨；密碼有頁；虛構免責齊；noon-only 守住。

扣分全屬非阻擋級：① caption「畫面可見 Sign In banner」喺片內驗證唔到「Sign In」字樣（片內 banner 係 incognito session 通知）——同 Ep.47「登录 banner」同款觀察，capture 有、片內裁咗，扣 R1／R4 各 1；② caption 承諾「本則逐步截圖」但 landing「截圖未放入」×18（頁面誠實申報、#121 scaffold 已知，同 Ep.47 R5 carry-over）；③ live landing 示範情景（陳小明／文職／下星期三下午）同片內 BUTTONS refined 示範（陳小姐／市場助理／後天／下星期一）唔同——landing 冇引用生成句、有申報，但跟 caption URL 嚟嘅觀眾學到另一個 sample；④ STEP 1 字卡「開Pplx」縮寫。

**Sign In 披露：yes。免登入／Guest 主張：0。短訊全文（含 明天上午 10:30／後天／下星期一／陳小姐）：yes，無中段裁。CTA 每日中午：yes。Slug＝perplexity-interview-reschedule：yes。Verbatim on screen：yes。**

---

## R1–R9

### R1 事實嚴謹 — **9／10**

- 理由：caption 每句硬事實全部有可核對依據——入口 perplexity.ai（live 200）、composer placeholder「Ask anything…」（片內 1.5–3.4s OCR ×多幀）、Submit 黑圓白右箭掣面無字（r2c 特寫目視）、Copy＝答案下最左 icon（r3w 動作列目視）、CTA 每日中午、密碼喺網頁（jdtech3 live 200）、虛構披露、noon-only、thread 來源 URL 有記錄（draft Sources 表）；無 VPN、無「官方支援香港」、無免登入主張。結果短訊逐字＝BUTTONS capture 實見——片內冇任何「無來源」句子。
- 扣 1：caption「畫面可見 Sign In banner」——片內 45 幀 OCR「Sign In」＝0 命中；片內見到嘅 banner 文字係「Sessions you create won't save to your history and expire after 24 hours」（r2w 全句可讀）＋「You're incognito」。banner 真係喺畫面、方向誠實，但「Sign In」呢個字樣對片內觀眾驗證唔到。
- 證據：全片 0.2s 步 45 幀 chi_tra+eng OCR（Sign In／sign in＝0；Sessions／history／expire／incognito 命中分佈 0.0–5.4s＋7.6–8.8s）；r2w 3.8s 幀 1.6× 放大目視（「You're incognito」＋session 全句）；caption `#注意` 原文；draft Sources 表。
- Critical：無。

### R2 示範一致 — **9／10**

- 理由：三步次序＝caption 承諾；掣名 verbatim（Ask anything…／Submit／Copy）同片內字卡 sub-label 一致；「畫面無字」披露同 r2c 掣面吻合；r2w composer 顯示嘅 prompt＝draft「Demo copy verbatim」逐字（「幫我寫一段畀香港招聘／HR WhatsApp 或電郵嘅面試改期短訊：原本約定明天上午 10:30 現場面試「市場助理」…」OCR＋目視相符）；**caption 第 3 步承諾「畫面得體改期短訊，可抄走」片內兌現**——全文四區逐字（見站立核對 #5），觀眾照抄抄到啱。Ep.47 嗰個「跟住做抄到爛句」嘅實害冇咗。
- 扣 1（兩個小位）：① STEP 1 字卡主詞寫「開**Pplx**」——draft／caption 規格係「開／Perplexity」；Pplx 係通用縮寫、封面 line1 同 caption URL 都係全名，唔會認錯工具，但同規格有偏差；② r3w 頂沿有半切薄帶（「WhatsApp…只輸出短訊，約 70-110 字。」refine turn 尾）——係 thread 上文碎片、唔係結果短訊，排版已簽 OK，但對眼利觀眾係一條冇上下文嘅爛行。
- 證據：r2w 3.8s 幀 1.6× 放大目視（prompt 逐字＋黑圓白右箭＋紫圈）；r2c 4.3s 幀（Submit 掣心特寫）；r3c 7.2s 幀 OCR（全文三行＋署名）；p_r1_card 2.0s 幀目視（開Pplx／Ask anything…）；r3w 5.6s 幀頂沿 crop。
- Critical：無（畫面做得到 caption 所講；無假 UI）。

### R3 封面誠實 — **10／10**

- 理由：封面大字承諾（Perplexity｜改期短訊／即出稿）片內兌現——第 3 步 + 封面之後格 + CTA 卡全部係**同一份 BUTTONS refined 真結果逐字**，唔係掛羊頭；0s 已見之前（空白 composer「Type @ for connectors」placeholder）vs 之後（全文短訊）對照，「即出稿」嘅示範力度真。
- 證據：cover_c4bc.png＋0.0–1.4s 抽幀；v_cover_after 2× crop 目視（全文＋陳小姐署名）；gates cover_line2 PASS。
- Critical：無。

### R4 工具／產品準確 — **9／10**

- 理由：產品名 Perplexity 正確（封面全名；step 卡 Pplx 縮寫已記 R2）；入口 https://www.perplexity.ai/ live 200；capture unsigned＋畫面 incognito 通知＋答案出齊（r3w「Finished 6s」＋10 sources）——**冇將登入牆當免登入**：caption／draft／cta／landing 四面零「免登入／Guest／唔使登入／未登入亦可」；landing「今次 capture 未登入仍出到答案」係範圍限定實測報告＋「登入要求以你當日介面為準」同步披露，合 PIVOT 規則（實測過先准寫）；#122 patch 已上 live（本席 curl 實測 live＝main `aca30db`：未登入亦可問 0／免登入 0）。
- 扣 1：同 R1 同一單——caption 話「畫面可見 Sign In banner」，片內字樣係 incognito session 通知，Sign In 兩字冇入鏈（capture 有側欄 Sign In，crop 裁走）。觀眾只能信頁。
- 證據：live landing curl 200＋grep；reel 45 幀 OCR（Sign In 0 命中／Sessions-expire 多幀）；PIVOT.md 定B 段；#122 diff（免登入／未登入亦可問／Guest 全數移除）。
- Critical：無（登入要求方向誠實；R4 Critical 條款＝「錯工具名誤導；登入牆當免登入」——兩樣都無）。

### R5 文案嚴謹 — **8／10**

- 理由：CTA（每日中午）片＋caption＋cta-comment＋landing 四面一致；密碼句有頁有密碼（`/workflow/` jdtech3 live 200）；免責齊（虛構／按實際改／Sign In＋當日介面／AI 可能錯／自行核對／唔係求職／HR 意見）；禁句（留言 1／Collab／朝早／07:00）0 命中；hook 陳述句書面中文、無「？」開頭；hashtag 5 個全繁體。
- 扣 2（三個位）：① caption「本則逐步截圖：<URL>」，live landing「截圖未放入」×18（頁面誠實申報檔名＋預定 alt，BRIEF 亦申報 #121 scaffold 未接 shortcode，但 caption 承諾兌現一半——Ep.47 R5 同款 carry-over）；② live landing 示範情景係舊鎖（陳小明／文職／明天上午→下星期三下午），同片內實際示範（陳小姐／市場助理／後天或下星期一早上 11:00）唔同——landing 冇引用生成句子、有申報「本集未截到生成句子」，唔誤導，但跟 caption URL 嚟「攞逐步截圖」嘅人見到另一個 sample；③ caption「密碼喺網頁（個人檔連結）」出現兩次，冗餘。
- 證據：caption 全文逐句；live landing grep（截圖未放入 18／陳小明 16／陳小姐 0／jdtech3 1／每日中午 2）；cta-comment 兩行原文。
- Critical：無（承諾密碼有頁；截圖未放入有明示）。

### R6 結構節奏 — **10／10**

- 理由：0s 已係結果卡（之前／之後對照）；early_motion 紫圈 0.3–0.8s 打上封面之後格首行（＜2s 硬線，verify_motion PASS）；三步 1.5／3.5／5.5s，特寫節拍 r1c／r2c／r3c 齊；mid_beat＝Submit 掣心特寫 close zoom **2.11×**（gates r2_close PASS，仲高過 1.5× 要求）＋AUTHORIZED FALLBACK `perplexity_1_typed` 有 Art 簽註；CTA 7.5–9.0s hold；全長 9.000s（ffprobe：270 幀／30fps／1080×1920）≤15s；music-only、loudness −15 LUFS／true peak −4.3 dB（gates PASS）、無旁白主張。
- 證據：ffprobe＋contact strip 幀標（cover 0.00／r1w 1.50／r1c 2.30／r2w 3.50／r2c 4.30／r3w 5.50／r3c 6.30／cta 7.50）；gates.txt duration／loudness 條目。
- Critical：無（此項唔自動 Critical）。

### R7 合規／字形 — **10／10**

- 理由：公開 caption 全繁體書面中文＋粵語用詞（撳／喺／嘅）；片內字卡（改期短訊／即出稿／開Pplx／撳黑箭／撳Copy／抄改期短訊／追蹤 JD／少啲試錯／每日中午／粵語 AI 3 步）全繁體；UI verbatim 英文（Ask anything…／Search／Computer／Model／Submit／Copy／You're incognito／Sessions…）係工具真介面，唔係簡體風險；無簡體、無日文、無 Pip；hashtag（#工具3步 #Perplexity #面試改期 #粵語AI #JDTech）全繁體。
- 證據：caption 逐字；45 幀 OCR＋各字卡放大目視。
- Critical：無。

### R8 可傳性／場景 — **9／10**

- 理由：港場景＋intent 尖（求職改期→HR／招聘 WhatsApp／電郵；市場助理／陳小姐／明天上午 10:30／後天／下星期一 全在片）；可傳結果**真係可抄**——全文喺封面、r3 闊鏡、r3 特寫、CTA 卡四處完整顯示，觀眾轉寫即得；r1w 闊鏡 prompt 全文可照抄（教學閉環：照抄 prompt→出同款短訊）。禁 ask-to-share 守住（intent=send）。
- 扣 1：① 定B 1.26× tradeoff 令全文以 ~22.7px @1080 顯示（gates r3_close_ui_text PASS、@360 約 10.9px PASS），可讀但偏細——手機細屏要停格先抄得舒服；② 全文嘅唯一文字形態來源係片本身（landing 依家唔引用生成句），抄全文要靠轉寫——設計上係「教你出自己嗰份」而非「俾你 copy-paste」，成立，但要觀眾落一次功夫。
- 證據：v_r3c_msg／v_cta_msg 逐字；gates ui_text 條目；landing「呢頁唔引用生成句子」。
- Critical：無（R8 無 Critical 條款）。

### R9 吸引力 — **9／10**

- 理由：① 0–2s：封面已係之前／之後結果卡＋大字「改期短訊／即出稿」＋紫圈 0.3s 打短訊——停滑成立；② 陌生人 1 秒明「用 Perplexity 即刻攞到一段改期短訊」（工具名＋得益同框，cover-spec v1.2）；③ 完結拉力：「追蹤 JD／少啲試錯／每日中午／粵語 AI 3 步」；④ 唔靠假承諾——結果真、全文真。hook（明早面試撞期、空白稿不知下筆）係打工仔共鳴位。
- 扣 1：視覺係系列模板（紫卡＋圓角容器，同 Ep.44／47 同款），衝擊靠題材唔靠畫面；全文以偏細字級長駐（1.26× tradeoff），「即出稿」嘅瀏覽爽度略打折扣。
- 證據：0.0–1.4s 封面；8.0s CTA 卡；R2／R3 證據。
- Critical：無（封面／hook 唔係假結果亦唔係假工具）。**R9＝9，過自身門檻（≥8）。**

**均分：9.22／10**（9+9+10+9+8+10+10+9+9 = 83 ÷ 9）｜ **R9＝9（≥8）**｜ **Critical＝0 → PASS**

---

## R10（只註，唔評分、唔入均分）

`layout_PASS（定B）` 已齊：Art Round 1 APPROVED（定B）「圈心＝掣心 PASS」（`review-art.md` 22:09）＋排版 LAYOUT-SIGNOFF（22:11）＋`ZOOM-WAIVER.md`（GM 定B 註）。gates VERDICT FAIL（cover after 1.26×／r3 close 1.26×／ratio 1.24×）＝**定B 接受**（全文優先；禁為 1.5× 切短訊中段）；`_qa` FAIL×11＝LAYOUT 人眼全接受（before half_cut＝composer chrome、r1c heuristic、r2w icon、r3w 頂沿薄 frag——全部唔涉及 after 短訊）。ring_on_target closes PASS · tip 29.0／37.6／26.1 ≤40 · verify_motion PASS。本席按 BRIEF **唔用 zoom 機械 FAIL 否決本則**，並且獨立複核咗 waiver 嘅紅線：**人眼＋OCR 證實短訊冇中段裁**（四區逐字）→ 唔觸「mid-text cropped＝Critical」。本席 R1–R9 唔因定B 放水：扣分照扣（Sign In 字樣／Pplx／截圖未放入），只係全部非阻擋級。

---

## Critical 清單

（空）

## PASS 仍建議改進（非阻擋）

1. **caption「畫面可見 Sign In banner」**：capture 有側欄 Sign In，但片內 crop 冇「Sign In」字樣（只有 incognito session 通知）。下一則可裁一格帶埋 Sign In 入鏡，或者改寫「capture 畫面可見 Sign In（見連結頁）」，令片內聲稱完全可驗證。
2. **landing 逐步截圖未放入 ×18**：caption 承諾「本則逐步截圖」；Share 前接 `perplexity_0_before／1_typed／2_send（或 1_typed Submit fallback 態）／3_after／4_copy` 五圖（同 Ep.47 carry-over，noon 前收尾）。
3. **landing 示範情景對稿**：live landing 仲係舊鎖 sample（陳小明／文職／下星期三下午），同片內（陳小姐／市場助理／後天／下星期一早上 11:00）唔同。建議 Share 前出一個 landing patch 對返 BUTTONS refined demo（名、職位、時段一致），免觀眾兩個 sample 混淆。
4. **STEP 1 字卡「開Pplx」**：建議跟 draft 規格寫返全名「開 Perplexity」（同 caption `#開Perplexity` 對齊）。
5. **caption「密碼喺網頁（個人檔連結）」×2**：留一次。
6. **r3w 頂沿 refine-turn 薄帶**：下一次 crop 可落多幾 pixel 起點，避開 thread 上文碎片。
7. Share 前確認 GitHub Pages 已重建至 main `aca30db`（本席 2026-10-29 ~14:2x UTC curl 實測 live 已＝#122 版：未登入亦可問 0／Sign In 23 ✓——呢項而家已達標，記錄在案）。

## 核對記錄

- reel sha256 實測＝`ae85b289252eb4b42305077bfadcaaea67c569b68d6eb81eaf8ad7e09ffc20a7`（＝BRIEF／ZOOM-WAIVER／LAYOUT-SIGNOFF／ART-HANDOFF）；contact sha256 實測＝`f4329f19…30810f`（＝ART-HANDOFF）；caption sha256 實測＝`b1714da8…b0779a0`
- ffprobe：9.000s／270 幀／30fps／1080×1920；gates：loudness −15 LUFS／true peak −4.3 dB／duration PASS
- 結構映射（contact strip 幀標＋OCR 時序）：0–1.4s 封面（之前／之後）；1.5–3.5s STEP 1/3（開Pplx／Ask anything…；r1c 特寫 2.3s 起）；3.5–5.4s STEP 2/3（撳黑箭／Submit；r2c 掣心特寫 close 2.11×）；5.5–7.4s STEP 3/3（撳Copy／抄改期短訊；r3w 闊鏡＋r3c 特寫）；7.5–8.9s CTA 卡（追蹤 JD／少啲試錯／每日中午／粵語 AI 3 步）
- 全片 0.2s 步 45 幀 chi_tra+eng OCR（psm 11）全掃：免登入／免登录／Guest／唔使登入／未登入／留言／朝早／07:00／Collab＝**0**；「Sign In」＝0（片內 banner 文字＝incognito session 通知，r2w 3.6–4.2s「You're incognito」）；「明天上午／後天／下星期一／陳小姐／市場助理」喺封面、r1/r2 prompt、r3 結果、CTA 卡時區命中
- 短訊逐字複核（定B 紅線）：封面 0.6s 幀 crop (60,1150,1020,1470) 2×＋r3w 5.6s 幀 crop (60,1050,1020,1420) 2×＋r3c 7.2s 幀 crop (60,1050,1020,1470) 2×＋CTA 8.0s 幀 crop (60,1150,1020,1500) 2×——四區 OCR（psm 4/6）＋放大目視逐字＝BUTTONS refined 全文（含署名「陳小姐」），行 wrap 斷位「想問｜可否改期？」「安排，｜麻煩您了」自然，無換行蝕字、無中段裁
- 禁 slug：`kimi-interview-reschedule`／`copilot-interview-reschedule` 喺 `reels/`＋`index.html`＝0 命中（kimi_*／copilot_login_wall 只在 PIVOT 證據檔，未入 reel／公開面）
- caption／draft／cta-comment grep：免登入／Guest／唔使登入／未登入／Collab／朝早／07:00／留言 1＝0（draft 命中「免註冊／訪客模式／留言 1」全部係 HARD BAN 規格句本身，非主張）
- landing live curl 200＝local main `aca30db`（#122）：Sign In 23／今次 capture 未登入仍出到答案 13／未登入亦可問 0／免登入 0／陳小明 16／陳小姐 0／截圖未放入 18／每日中午 2／jdtech3 1
- BRIEF／RUBRIC 已補入 `docs/ep48-rigor/`（本分支；同 upload 逐字一致）
- layout_PASS（定B）未重審；tip 只記 29.0／37.6／26.1；zoom 1.26× 按 GM waiver 唔否決；mid-text crop 人眼＋OCR 複核＝無
- 冇改 `reels/`、冇改產品頁、冇 Share

— GLM 5.3 · Ep.48 rigor 1/3 票 · **PASS**（均分 9.22 · R9 9 · Critical 0）· 未代 Share · Share 維持 ONLY **2026-10-30 12:00 HKT** if 三席過閘
