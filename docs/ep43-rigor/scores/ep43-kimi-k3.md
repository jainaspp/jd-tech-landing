# Ep.43 rigor 評分 — Kimi K3（三閘之一）

- 對象：Ep.43 · slug `duckai-health-rumor` · slot **2026-10-25 12:00 HKT only** · Duck.ai（DuckDuckGo · 免登入）
- 評分員：Kimi K3（獨立一票）· 2026-10-24 UTC
- 輸入：BRIEF／RUBRIC v0+v1（R9）（R10 只記唔評）／topic.md／caption.txt／draft.md／post.json／gates.txt／LAYOUT-SIGNOFF／review-art.md／reel.mp4
- 獨立核實：reel sha256 逐字對＋ffprobe＋抽 25 幀人眼、caption OpenCC 繁簡掃＋禁項掃、duck.ai live 200、landing URL live 狀態＋PR #87 分支內容逐項核（明細見文末）
- 硬規：**PASS only if mean≥8 AND R9≥8 AND Critical=0**。Art／排版已簽唔畀免費分。禁假正面醫療結果。

---

## 總評：**PASS**

均分 **8.78**（79/9）≥8 · **R9＝8** ≥8 · **Critical＝0** → 三條硬線全過。

一句講晒：呢 pack 最緊要嗰關——**禁假正面**——過得乾淨。封面「秘方有冇根據」嘅「之後」格、reel r3 特寫、caption、landing 四處結論一致＝**冇可靠醫學證據／未經證實偏方**，來源卡 who.int／chp.gov.hk／cdc.gov 畫面真見，CTA 得「每日中午」，免登入有實測有旁證。扣分集中喺 R2（step 1 用 typed 圖頂「開」畫面）同 R5（caption 應承嘅 landing 而家 main 上 404，靠 PR #87 未 merge）。**Share 條件：PR #87（landing）必須喺 12:00 前 merge 兼 live 200，否則 R5 即時轉 Critical。**

---

## R1–R9

### R1 事實嚴謹 — **9／10**
- 理由：功能／免費／步驟／來源句句有 capture 或 live 核對，醫療立場保守（唔好用鹽水代替疫苗），無誇大、無 VPN、無假官方。
- 證據：「免登入」＝topic.md 實測紀錄（2026-10-24 21:18–21:27 HKT）＋reel 全程無登入牆＋landing「側欄徽章 Free／官方頁 No account required」；入口 https://duck.ai/ 我親自 curl 回 **200**；placeholder「Ask anything privately」／藍「Ask」／標題「健康說法核實」／模型「GPT-6 Luna」四者 reel 抽幀真見（f1.5／f4.5／f6.5）；來源卡 who.int／chp.gov.hk／cdc.gov 喺 f7.5／f8.0 清晰可讀；landing 官方說明段自報 WHO／CHP×2 當日 200 並附 CDC 懸停網址，結論句「冇可靠醫學證據…未經證實的偏方」同世衞「疫苗係預防流感最佳方法」立場一致，**無任何正面鹽水疗效 claim**。
- 扣位：模型名「GPT-6 Luna」只靠 capture 單源，第三方唔能覆核——landing 有 hedge「以你當日畫面為準」，caption 直述無 hedge。
- Critical：無。

### R2 示範一致 — **8／10**
- 理由：三步畫面＝caption 承諾、掣名 verbatim、圈都喺目標上；唯 step 1「開 Duck.ai」用 typed 圖，空白 placeholder 態只喺封面「之前」格出現。
- 證據：caption #開Duck.ai→#撳Ask→#睇結論 對 reel r1（開／Duck.ai，sub「Ask anything privately」）→r2（撳／Ask，f4.5 藍 Ask 掣特寫＋圈貼掣心）→r3（睇／結論，f7.5 圈貼「結論：冇可靠醫學證據…」＋來源行）；step1+2 共用 `duckai_1_typed.png` 係 post.json／draft 明載決定（`duckai_2_send` 740×255 stub 唔做 sole wide），同 Ep.42 `lumo_1_typed` 同例，唔係假 UI；「撳」嘅瞬間同樣靠前後幀推斷（灰 Ask→藍 Ask→生成後），reel 冇撳落去嗰幀。
- Critical：無（畫面做得到 caption 所講；結果幀 `duckai_3_after` 真）。

### R3 封面誠實 — **9／10**
- 理由：大字得益＝片內結果，而且「之後」格直接就係真結論，零掛羊頭。
- 證據：f0.0／f0.5 封面 line1「Duck.ai」＋line2「秘方有冇根據」（6 全形 84px accent）；「之前」＝空白 Duck.ai（Ask anything privately／灰 Ask），「之後」＝「健康說法核實」＋「冇可靠醫學證據…」＋who.int／chp.gov.hk／cdc.gov——封面已經將最終答案（否定）晒出嚟，無靠假希望呃點擊；gates cover 兩格 zoom≥1.5、字≥22px、無 half_cut 全 PASS。
- Critical：無。

### R4 工具／產品準確 — **10／10**
- 理由：產品名、入口、登入要求全對，且有我獨立覆核。
- 證據：名＝Duck.ai（by DuckDuckGo，封面 chips／reel UI／landing 一致）；入口 duck.ai live **200**；「免登入」三處旁證（實測紀錄／reel 無牆／landing Free 徽章＋官方頁引文）；模型 GPT-6 Luna 畫面真見；Perplexity pivot 原因（login wall）如實記錄，`perplexity_*` 殘檔無入 post.json／reel／landing。
- Critical：無。

### R5 文案嚴謹 — **8／10**
- 理由：CTA／密碼句／免責／禁項全過；唯「本則逐步截圖」應承嘅頁而家 main 未上（live 404），靠 PR #87 未 merge——扣 2 分兼列 Share 硬條件。
- 證據：CTA「每日中午」reel CTA side（f8.5／f8.9）＋caption 尾段一致；全文掃**無**「留言 1」／朝早／07:00／Collab（prompt 內「朝早」＝引用秘方原文，draft 明載例外，caption／CTA／side 只寫每日中午）；「密碼喺網頁（個人檔連結）」caption 有，PR #87 landing 真係有密碼段（Workflow 庫密碼 jdtech3 喺 /workflow/ 輸入）；免責四句齊（虛構家庭場景／唔好當醫療建議／AI 可能出錯／對照官方來源）；「想留低慢慢跟？收埋呢則先」＝save CTA，合 intent=send；landing 原帖段誠實「預定 2026-10-25 12:00 發佈…未接 shortcode」。
- Critical：**無**——「承諾密碼但無頁」唔成立（頁存在於 PR #87，密碼段、4 張真 UI 截圖、誠實 figcaption 逐項核過）；但 **若 12:00 前 PR #87 未 merge 而照 Share，caption 嘅逐步截圖 URL＝404，屆時即轉 R5 Critical**。

### R6 結構節奏 — **9／10**
- 理由：9.0s≤15s、0s 有結果、early_motion≤2s、mid_beat 喺窗內、end_hold 齊。
- 證據：ffprobe duration=9.000s（270 幀，gates 同數）；f0.0–0.5 封面「之後」已見結論＋來源（0s 結果）；f0.65 圈 tap 落「之後」（0.3–0.8s，HARD ≤2s 內）；f4.0–4.5 藍 Ask 特寫 mid_beat（對 draft 3.5–5s 窗）；f8.2–9.0 CTA hold≈0.8s（對 spec 0.5–1.0s）；gates loop_diff 0.230／decoded 0.412 <2、loudness −15.0 LUFS、duration≤10s 全 PASS。
- Critical：無（此項本身唔自動 Critical）。

### R7 合規／字形 — **9／10**
- 理由：公開 caption 全繁體粵語，無簡體無日文；AI 輸出語域靠披露＋緩解，做法同 Ep.42。
- 證據：OpenCC 實測——caption 經 t2s 轉咗 78 字（＝本文係繁體），s2t 僅變體轉換（秘→祕、群→羣），**簡體字 0 個**；假名掃描 0；reel 字卡（開／撳／睇／結論／秘方有冇根據／追蹤 JD／少啲試錯）全繁體；landing `lang="zh-Hant-HK"` 全繁體；英文掣名＝真 UI 原樣引用，landing img alt 有齊 a11y 描述。
- Critical：無。

### R8 可傳性／場景 — **9／10**
- 理由：港家庭 WhatsApp 秘方痛點真、結果即抄即用、intent 清楚可傳。
- 證據：hook「阿媽 WhatsApp 又轉『喝鹽水防流感』」＝港人屋企群日常；r3 教 Copy 結論傳屋企群（intent=send，無丟 group／ask-to-share）；landing 有可抄 prompt（複製掣）＋「查完可以將『未經證實偏方、唔好用鹽水代替疫苗』同來源講返俾轉發嘅人」嘅回傳指引，同時劃清界線「呢頁教你查轉發，唔係叫你轉發呢則片」。
- Critical：—（此項無 Critical 觸發）。

### R9 吸引力 — **8／10**
- 理由：四條自問全過；健康謠言查證題自帶屋企群傳播力，但封面／CTA 係系列常規，止滑靠文案。
- 證據：① 0–2s：封面大字「秘方有冇根據」＋「之後」格即見否定結論＋三個官方來源，衝突同結果同時出現，0.65s 有 tap 動效；② 封面陌生人 1 秒明「呢則幫我查秘方真假」；③ 完結 CTA「追蹤 JD｜少啲試錯＋每日中午」＋caption save hook＋landing 可抄 prompt→跟住做拉力齊，結論本身（幫屋企闢謠）就係轉發動機；④ 唔靠假承諾——吸引力嚟自真否定結果。扣位：純色字卡封面同 CTA 句式沿襲 Ep.41/42，視覺新鮮感有限；0s 畫面資訊密（chips＋兩行大字＋前後兩格），長者觀眾可能要 2 秒先消化。
- Critical：無（無假結果／假工具）。

---

## R10（只記唔評）

`layout_PASS` 已雙簽：gates.txt **VERDICT PASS**（41 項全 PASS）、`reel_qa` status=WARN／**0 FAIL**、ring_on_target 全 PASS（tip r1c／r2c／r3c＝30.6／38.2／29.2 ≤40）、LAYOUT-SIGNOFF 2026-10-24 22:09、Art 批核句「**圈心＝掣心 PASS**」、reel sha256 兩簽同本席實測一致。R10 唔入本席均分，Share 硬規則（rigor_PASS＋layout_PASS）由雙閘文件執行。

---

## Critical 清單

**（空）** — R1–R9 無任何 Critical 觸發。

---

## PASS WARN（非阻擋本票；第 1 條係 Share 硬條件）

1. **【Share 硬條件】landing 未上 main**：caption 應承「本則逐步截圖：https://jainaspp.github.io/jd-tech-landing/reels/duckai-health-rumor/」，我 2026-10-24 UTC 實測 live **404**。PR #87（`cursor/ep43-duckai-health-rumor-f9c6`）已載齊全頁＋4 張真 UI 截圖＋密碼段（本席已逐項核，見附錄）。**12:00 Share 前必須 merge 兼 live 200**；否則「承諾密碼但無頁／承諾截圖但無頁」即時構成 R5 Critical，本 PASS 作廢。
2. **Step 1 視覺**：「開 Duck.ai」用 typed 圖（空白「Ask anything privately」態只喺封面「之前」）；合 pack 明載規則但字面對題唔算完美，之後 pack 可考慮 step 卡先半秒空白態再疊 typed。
3. **stub 上 landing**：`duckai_2_send.png`（740×255）喺 landing 做「第 2 步特寫」（附誠實尺寸同 figcaption）——守得住「唔做 sole wide」字面規，但係同 Ep.42「stub 完全唔用」做法有落差；建議之後一律由 1920 原圖 crop 特寫，統一像素觀感。
4. **模型名 hedge**：「GPT-6 Luna」單源於 capture；landing 有「以你當日畫面為準」hedge，caption 直述——之後 caption 講模型名可跟 landing 加 hedge。
5. **og:image**：landing 用全站通用 `assets/og-share.png`，非 Ep.43 cover；有資源可出集數專屬 og 圖。

---

## 附：Kimi K3 獨立核實明細（2026-10-24 UTC）

| 核實項 | 方法 | 結果 |
|---|---|---|
| Reel 真身 | sha256sum 本席實跑 | `73c0feaca81c360fdbe348cbcd3c9a764490e3711af6595af67b7826bc18bc3d` 與 BRIEF／LAYOUT-SIGNOFF／review-art **逐字一致** |
| Reel 規格 | ffprobe | 9.000s · 1080×1920 · 30fps · h264＋aac（對 gates「270 frames＝9.000s」） |
| 時間軸對稿 | 抽 25 幀（0.0–8.9s）人眼 | 封面（0.65s tap 之後）→r1 開/Duck.ai（圈貼 prompt 區）→r2 撳/Ask（4.5s 藍掣特寫＋圈貼掣心）→r3 睇/結論（圈貼「結論：冇可靠醫學證據…」＋who.int／chp.gov.hk／cdc.gov）→CTA（追蹤 JD｜少啲試錯｜每日中午、粵語 AI 3 步），同 draft motion spec 一致 |
| 禁假正面 | 全幀結論文字核對 | 封面之後／r3 特寫／caption／landing 四處一致＝冇可靠醫學證據／未經證實偏方；無任何鹽水有效表述；landing 加「唔好用鹽水代替疫苗」 |
| 產品入口 | `curl -L https://duck.ai/` | **HTTP 200** |
| Landing live 狀態 | `curl -L …/reels/duckai-health-rumor/` | **404**（未 merge；見 WARN 1） |
| Landing 內容 | PR #87 分支 `git show` 逐項核 | index.html 24,410B；密碼段（jdtech3／/workflow/）在；`duckai_0_before`／`1_typed`／`3_after` 真 1920×1113；`2_send` 740×255 stub 只做「第 2 步特寫」非 sole wide；figcaption 全誠實（未撳／Fast／6 Luna／21:27）；Share dialog 段如實（2 Days 已選、Create Share Link 未撳）；原帖段「預定 12:00、未接 shortcode」；官方連結 duck.ai＋WHO＋CHP×2＋CDC 齊 |
| Caption 禁項 | 全文掃 | 無「留言 1」、無朝早／07:00、無 Collab；CTA 只「每日中午」；密碼句齊；hashtag 全繁體 |
| 繁簡／日文 | OpenCC t2s/s2t＋假名 regex | caption＝繁體（t2s 改 78 字）；簡體 0；假名 0 |
| gates 交叉對 | gates.txt 通讀 | 41 項全 PASS（含 brand #8A77FF、字≥22px、zones、loudness −15 LUFS、loop<2），VERDICT PASS |

— Kimi K3 · Ep.43 rigor 1/3 票 · **PASS**（均分 8.78 · R9 8 · Critical 0）· Share 硬條件見 WARN 1 · 本席唔代 Share（Share ONLY 2026-10-25 12:00 HKT）
