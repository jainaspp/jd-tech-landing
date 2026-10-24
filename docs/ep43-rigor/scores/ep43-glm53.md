# Ep.43 嚴謹度評分 · GLM 5.3（三模型閘之一）

| 欄位 | 內容 |
|---|---|
| Model | GLM 5.3（Cursor CloudAgent） |
| 時間 | 2026-10-24 ~22:40 HKT |
| 對象 | Ep.43 · slug `duckai-health-rumor` · 2026-10-25 12:00 HKT slot（排版 LAYOUT-SIGNOFF 22:09 已簽 · Art APPROVED · 未代發） |
| reel sha256 | `73c0feaca81c360fdbe348cbcd3c9a764490e3711af6595af67b7826bc18bc3d`（＝BRIEF／LAYOUT-SIGNOFF／review-art 值，本票 sha256sum 實測相符） |
| 對照 | BRIEF · RUBRIC v0+v1+v2（R10 note only · layout_PASS 已雙簽，本票唔評劃位） · topic.md（TOPIC_LOCKED） · draft.md · caption.txt · post.json · gates.txt（VERDICT PASS） · LAYOUT-SIGNOFF · review-art.md · 成片實測 9.000s／30fps／1080×1920 · 抽幀 0.0–8.9s 人眼核對 · cover／cta／r1c／r2c／r3c／motion-strip 附圖 |

**本檔只係 GLM 5.3 一票。** 及格要三 model 多數 PASS＋均分≥8＋R9≥8＋Critical=0。排版＋Art 已簽唔送分：照 RUBRIC 逐項憑證據評，唔放水；禁假正面醫療結果一票否決。

---

## 總評：**PASS**（GLM 5.3 一票）

- 均分 **8.78/10** ≥ 8 ✅
- R9 = **8** ≥ 8（單獨門檻） ✅
- Critical = **0** ✅
- 附 **兩個 Share 前硬 WARN**（唔阻 rigor_PASS，但唔兌現就唔准 Share，見 WARN 節）

---

## R1–R9 評分

| ID | 分 | 一句理由 | 證據 |
|---|---|---|---|
| R1 事實嚴謹 | 9 | 每個功能句（duck.ai URL、免登入、掣名、GPT-6 Luna、結論字眼）全部有可核對依據，無誇大；結論＝capture 實見原文，零假正面醫療主張 | caption「開 duck.ai（免登入）」；draft Sources 表全 ✅；本人 curl `https://duck.ai/` 200 且站方 meta 自稱「AI chat no sign up」；landing（PR #87 分支）三條官方來源 who.int／chp.gov.hk／cdc.gov 本人 curl 全 200；成片 r3w 幀實見「GPT-6 Luna」 |
| R2 示範一致 | 9 | caption 三步（開 duck.ai 免登入→貼秘方題撳藍掣 Ask→睇結論）＝成片三步字卡＝landing 三步＝capture 真流程，掣名 verbatim（Ask anything privately／Ask／結論卡），示範 prompt＝draft verbatim，畫面步驟全部做到 caption 所講 | 成片抽幀：f1.5s STEP1/3 開Duck.ai／Ask anything privately；f3.5–4.5s STEP2/3 撳Ask（藍掣特寫＋紫箭圈準）；f5.5–6.5s STEP3/3 睇結論（結論句紫框高亮＋箭咀）；prompt 原文「阿媽 WhatsApp 轉發話『每日朝早飲一大杯淡鹽水…唔好寫假結果』」逐字同 draft 一致 |
| R3 封面誠實 | 9 | 封面大字「秘方有冇根據」＝片內真結果——之後欄開幅就係「結論：冇可靠醫學證據支持『每日朝早飲一大杯淡鹽水…』」，唔掛羊頭；結果卡 0s 同 cta 尾段都見 | f0.0s cover 之後欄＝f7.5–8.9s cta 結果卡同一結論內容；gates `cover_after_no_half_cut_line` PASS；冇任何片內冇出現嘅封面承諾 |
| R4 工具／產品準確 | 9 | 產品名（Duck.ai, by DuckDuckGo）、入口 URL（duck.ai）、免登入、藍色 Ask 掣、模型 GPT-6 Luna、Fast 掣全部同真 UI capture 一致；冇登入牆當免登入 | 本人 curl `https://duck.ai/` HTTP 200；capture 記錄（2026-10-24 21:18–21:27 · Not signed in · 免登入實測）；成片 f5.5s 幀放大實見「GPT-6 Luna」；f1.5s 見「Duck.ai, by DuckDuckGo」頁首同「Ask anything privately」placeholder |
| R5 文案嚴謹 | 8 | caption 無填料、免責齊（虛構家庭場景／唔好當醫療建議／AI 可能出錯／對照官方來源）；禁句全清（無留言1、無朝早節奏、無 Collab、無 ask-to-share）。扣兩分：①成片 CTA 畫面欠「密碼喺網頁」字句（BRIEF 指明 CTA on-screen：每日中午·密碼喺網頁）——只有 caption 承擔；②caption 承諾嘅密碼頁 URL 評分時 live 404（頁面已完整寫好喺未合併 PR #87，見 WARN1） | caption「示範係虛構家庭場景；唔好當醫療建議…密碼喺網頁（個人檔連結）」；本人 curl live URL 404；PR #87 分支實讀：landing 有「Workflow 庫密碼 jdtech3（喺 /workflow/ 輸入）」＋ duckai_0/1/2/3 四張逐步截圖＋「示範虛構轉發…呢頁唔係醫療建議」；CTA 幀 7.5/8.0/8.2/8.5/8.9s 逐幀放大核實無密碼句 |
| R6 結構節奏 | 9 | 0s 結果（cover 前／後對照＋之後欄結論開幅）、early_motion≤2s（cover 0.3–0.8s tap／圈）、mid_beat 藍 Ask 特寫 ~4.5s（1.95× zoom）、9.000s 全長、尾段 CTA＋結果卡 hold、loop 回封面無新主張 | ffprobe 實測 9.000s／30fps／270f；gates `duration_le_10s`／`loop_diff` PASS＋verify_motion PASS（review-art 記 fails=[]）；本人抽幀 f0.5s 見 cover 動作、f4.5s 見 Ask 掣特寫 |
| R7 合規／字形 | 9 | caption 全件繁體為主，本人簡體專用字掃描＝0；UI 英文字係真畫面非文案混入；landing（PR #87）同繁體 | 本票 Python 簡體專用字集掃描 caption.txt＝NONE；成片字幕卡逐幀繁體 |
| R8 可傳性／場景 | 9 | 港場景真痛（阿媽 WhatsApp 轉秘方——萬千香港家庭日常）、intent=send 清楚（caption「可 Copy 傳屋企群」；landing 教埋點樣回覆轉發嘅人）、即用結果（結論＋三張來源卡可抄去家族群） | caption 首句 hook；landing「查完可以將『未經證實偏方、唔好用鹽水代替疫苗』同來源講返俾轉發嘅人」；無 ask-to-share／「丟 group」字眼 |
| R9 吸引力 | 8 | 前 2 秒有即時結果（0s 已見 WhatsApp 秘方 vs 有來源真假結論對照＋tap 動作）；封面大字「秘方有冇根據」陌生香港人 1 秒明「睇完攞到咩」（一招查清阿媽轉發嘅秘方）；完結拉力：追蹤 JD／少啲試錯／每日中午＋可傳屋企群；唔靠假承諾。扣分：第三則連續同一「平靜 before/after 對照行先」視覺 hook（Ep.41／42 同構），阿媽 WhatsApp 衝突只存在 prompt 文字同 caption，唔係畫面第一拍；CTA 畫面又欠密碼句拉少咗 follow-through | f0.0–0.8s 對照卡＋動作；f0.0s 之後欄結論已見；f7.5–8.9s 尾卡＋loop；無假結果／假工具（唔觸 R3／R4 Critical 條） |

**均分：8.78／10**（9+9+9+9+8+9+9+9+8 = 79 ÷ 9）｜ **R9＝8（≥8 過單獨門檻）**｜ **Critical＝0**

**R10（note only，唔評分）：** layout_PASS 已由排版（LAYOUT-SIGNOFF 22:09）＋Art（圈心＝掣心 PASS）雙簽，gates VERDICT PASS、tip 30.6／38.2／29.2 ≤40、qa WARN／0 FAIL。本票不重評劃位，僅確認收齊。
---

## Critical 清單

（空）

**R5 Critical 觸發條文「承諾密碼但無頁」核過唔觸發**：caption 兩度承諾「密碼喺網頁（個人檔連結）」→ 個人檔條 link 指嘅 `reels/duckai-health-rumor/` 頁面已完整寫好（PR #87 分支實讀：密碼 jdtech3＋四張逐步截圖＋免責），係未合併未上線，唔係「無頁」。但上線係 Share 前硬條件——見 WARN1。

---

## PASS 仍建議改進（非阻擋本票；WARN1／WARN2 係 Share 前硬條件，唔係畀面提示）

1. **【WARN1 · Share 硬條件】landing 必須先合併上線**：評分時（2026-10-24 ~22:40 HKT）`https://jainaspp.github.io/jd-tech-landing/reels/duckai-health-rumor/` live 實測 **404**——頁面只喺未合併 PR #87（`cursor/ep43-duckai-health-rumor-f9c6`，內容本人核過齊全正確）。**Share 前必須：合併 PR #87 → curl 該 URL 回 200 → 確認頁內「密碼 jdtech3」同四張 duckai_* 截圖在場。** 唔兌現就唔准 12:00 Share，屆時 R5 由 8 翻做 Critical（承諾密碼但無頁），整則 FAIL。
2. **【WARN2 · Share 硬條件】CTA 畫面欠「密碼喺網頁」**：BRIEF 指明「CTA on-screen：每日中午 · 密碼喺網頁」，成片 CTA 幀（7.5–8.9s）實測只有「每日中午／粵語 AI 3 步」，密碼句只在 caption。最低成本補救：Share 前 IG 個人檔 bio／置頂留言補「密碼喺網頁」指向個人檔連結，或接受 caption 承擔（caption 已寫兩次）。若下則重出，把密碼句加落 CTA 字卡右側（同「每日中午」並排）。
3. **醫療題材畫面微免責**：caption／landing 免責齊，但成片畫面冇「虛構示範／唔當醫療建議」小字。contact sheet 草稿曾畫過灰底免責條，最終成片無落地。醫療傳言係敏感題，下則建議喺 shot 卡底加一行微免責小字（layout 已有 WARN 先例，唔算新風險）。
4. **R9 視覺 hook 第四則要變**：Ep.41→42→43 連續同一「before/after 對照開場」。Ep.42 本座已建議把衝突句上字卡行先，本則仍未落地（衝突「阿媽 WhatsApp 轉發」只在 caption 首句同 prompt 畫面）。下則建議第一拍直接出 WhatsApp 氣泡對白／「阿媽又轉！」大字，對照做第二拍。
5. **模型名 legibility**：GPT-6 Luna 喺 r3w 係細字（本人要 4× 放大先確認到）。下則 capture 順手出一張答案卡頂部近攝，免得人眼閘都要靠 4× zoom。

---

## 核對記錄（本票做過嘅驗證）

- reel.mp4 sha256 實測 `73c0feaca81c360fdbe348cbcd3c9a764490e3711af6595af67b7826bc18bc3d` ＝ BRIEF／LAYOUT-SIGNOFF／review-art 三處記錄值
- ffprobe：9.000s／30fps／1080×1920／有音軌（gates loudness −15.0 LUFS 記錄相符；caption 無 VO 主張，合 music-only）
- 成片抽幀人眼核對：0.0／0.5／1.5／2.5／3.5／4.5／5.5／6.5／7.0／7.5／8.0／8.2／8.5／8.9s 逐段核對字卡（STEP 1/3 開Duck.ai → 2/3 撳Ask → 3/3 睇結論）、CTA（追蹤 JD／少啲試錯／每日中午／粵語 AI 3 步）、loop 回封面
- CTA 幀底部（y1280–1479）3× 放大逐幀核實：**無**「密碼喺網頁」、**無** 2026-10-25 12:00 字句（motion-strip contact sheet 草稿有畫，最終成片無落地→記 WARN2）
- r3c 結論特寫核實：紫框＋箭咀指中「結論：冇可靠醫學證據支持…」，來源卡三張 who.int／chp.gov.hk／cdc.gov 在場，「未經證實的偏方」字眼在場；r3w 4× 放大核實模型名「GPT-6 Luna」
- 免登入：`https://duck.ai/` curl 200；站方 HTML meta 自標「AI chat, anonymous AI chat, AI chat no sign up」；capture 記錄 Not signed in（2026-10-24 21:18–21:27 實測）
- 來源三條 curl 全 200：who.int 季節性流感 fact sheet／chp.gov.hk 季節性流行性感冒（中英）／cdc.gov flu prevention
- caption 簡體專用字集掃描＝0；禁句掃描（留言／朝早／07:00／Collab）＝0；「想留低慢慢跟？收埋呢則先。」屬 save CTA，合 intent=send
- caption 承諾 URL live 實測 **404**；PR #87 分支（`cursor/ep43-duckai-health-rumor-f9c6`）逐段實讀：密碼 jdtech3／四張 duckai_* 截圖／免責齊／who-chp-cdc 連結核實行在場→記 WARN1
- 醫療立場核實：全片＋caption＋landing 無任何正面療效主張；結論一律「冇可靠醫學證據／未經證實偏方／唔好代替疫苗」——R3／R4 Critical 唔觸發
- BRIEF.md／RUBRIC.md 已由本票抄入 `docs/ep43-rigor/`（分支上，未執 Share、未掂 reels/）

— GLM 5.3 · 2026-10-24 ~22:40 HKT · rigor seat（duckai-health-rumor）
