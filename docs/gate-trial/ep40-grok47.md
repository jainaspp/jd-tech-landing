# Ep.40 發佈前嚴謹度閘 · 試行評分（Grok 4.7）

**對象：** Ep.40 Brave Ask 家長會（`brave-leo-parent-meeting`）  
**評分表：** Reel 發佈前嚴謹度閘 · 試行評分表 v0（2026-10-19）  
**性質：** 已發佈事後試行。分數只根據畫面、文案包、落地頁與官方頁。Bad Bot／Art 的 APPROVED 不計入分數，也不抵銷 Critical。  
**尺度：** Critical 是一票否決，不強制把該維度打成 0。維度分只反映該維度裡有多少句站得住。

## 1. 總評

**FAIL（退回）**

等權均分 **6.25／10**（5+4+8+4+6+8+7+8＝50，50÷8＝6.25）。評分表寫「加權均分 ≥7.5」但未給權重，本審用等權。均分低於 7.5，Critical 4 項（含試行加閘 `cta_ready_at_share`）。任一項已足夠退回、不准 Share。

本則已於 2026-10-19 12:03 HKT Share。若此閘在 Share 前生效，結論是退回，不能當 `cta_ready_at_share` 已過。

本 PR 只交評分。未改 `reels/brave-leo-parent-meeting/` 或任何產品落地頁。

## 2. 各維度

### R1 事實嚴謹 — 5／10

公開 caption 把「本則逐步截圖」寫成該 URL 上已有的硬事實，現網頁與倉庫頁都寫尚未有截圖；落地頁可抄提示也不是畫面上那五點的提示。

**證據**

- Caption（`caption`）：「密碼喺網頁（個人檔連結）／本則逐步截圖：https://jainaspp.github.io/jd-tech-landing/reels/brave-leo-parent-meeting/」。
- 現網 https://jainaspp.github.io/jd-tech-landing/reels/brave-leo-parent-meeting/ 與 `reels/brave-leo-parent-meeting/index.html` 同文：「未有逐步截圖，下面 3 步係發佈前位置」；步驟 1「未有 contact 截圖」；HowTo JSON-LD 的 description 同為「未有逐步截圖，步驟係發佈前位置」。頁面最後核實日為 2026-10-18，原帖連結已是 DeqWrQoKhNj，這句在發佈之後仍在頁上。
- 畫面五點來自 capture 實提示（`capture-notes`）：「星河小學小四家長會・家校溝通五分鐘分享大綱／請用繁體中文列 5 點講稿：開場、家校溝通重點、在家三個做法、想老師幫手的一件事、多謝。」`leo_3_after.png` 側欄五點與此相同。
- 落地頁可抄提示是另一段：「要點：屋企觀察、同老師約定一個跟進方法、留時間問答。」照抄這段，得不到片內那五個標題。
- Hook「一句出講稿」與實提示兩行、指定五個標題不符，屬誇大。
- 以下硬事實有對得上的依據，所以本維度不是 0：入口 `search.brave.com`、掣名 Ask（`leo_0_before.png`、capture-notes 的 `submit-llm-button`）、當日免登入出答案（Login required: N，`leo_3_after.png` 有 Finished）、示範學校虛構並在 caption 聲明、無教 VPN、無「官方支援香港」。Ask Brave 免費且任何瀏覽器可用，見 https://brave.com/blog/ask-brave/（2025-09-29）。片內沒有把這句說成香港官方合作。
- 落地頁寫「搜尋列旁邊有 Search 同 Ask」。`leo_0_before.png` 可見的是 placeholder「Ask anything, find anything…」、麥克風、Ask，未見獨立 Search 字樣。官方 2025-09-29 文仍寫 Ask 在放大鏡 Search 旁。首頁可能已改成單一 Ask 提交，本審不把「Search 掣不存在」升為 Critical。

**Critical：** 是。無依據的硬事實（逐步截圖已被頁面自身否定）。

### R2 示範一致 — 4／10

無聲三步的畫面動作，與 caption 三步、與當日 capture 的真實順序，是三套不同手順。掣名 Ask 與像素是真 UI。

**證據**

| 步 | 畫面（music-only，觀眾讀到的字） | Caption | 當日 capture |
|---|---|---|---|
| 1 | `r1c.png`：STEP 1/3「撳Ask／開 AI 入口」，空搜尋列上的 Ask | 「去 search.brave.com，喺搜尋框寫題目」 | `leo_0_before.png`：Ask 已經在首頁，不是再撳一次先「開入口」 |
| 2 | `r2c.png`：STEP 2/3「撳Ask／送出家長會題」，紫框內是 × 與 Ask，題目文字不在框內 | 「寫明家長會五分鐘分享同要點，撳 Ask」 | `capture-notes`：先打完兩行提示，再按 Ask 送到 `/ask?source=llmSuggest` |
| 3 | `r3c.png`：STEP 3/3「睇五點稿／側欄繁中大綱」 | 「對住五點大綱改字，再傳俾家長群」 | 側欄五點在 `leo_3_after.png`；改字與傳群組沒有被拍到 |

- 官方用法（https://brave.com/blog/ask-brave/ Method 2）是在 search.brave.com 按 Ask 送出。Ask 是提交掣，不是「開 AI 入口」。
- 封面承諾的空框 → 五點大綱，片內有（見 R3），所以不是全程做不到結果。否決點是手順：畫面沒有做 caption 所講的「先寫題目、再按一次 Ask」。
- 假 UI 不成立。`leo_0_before.png`、`leo_3_after.png` 是 Brave 首頁與 Ask 結果頁，不是繪製的假界面。

**Critical：** 是。畫面做不到 caption 所講的三步。

### R3 封面誠實 — 8／10

封面大字得益「五點稿」在片內出現：0 秒已見大綱，第 3 步見其餘標題。

**證據**

- `cover.png`：JD TECH、Brave Ask、家長會／五點稿；之前是空 Ask 框，之後是側欄「開場（約30秒）」「家校溝通重點（約1分鐘）」，上方有「星河小學小四家長會・家校溝通五分鐘分享大綱」。
- `r3c.png` 補上第 2–5 點：家校溝通重點、在家三個做法、想老師幫手的一件事、多謝。五點在全片裡都出現過。
- 扣分：`cover.png` 與 `cta.png` 的紫框左緣把第 1 點編號裁成前導點（讀成「. 開場」），封面卡本身只露出兩點。

**Critical：** 否。封面承諾的結果片內有。

### R4 工具／產品準確 — 4／10

官方產品名是 Ask Brave。封面、caption、CTA chip、落地頁標題用 Brave Ask。公開 slug 與 caption URL 用 leo。Leo 是另一個產品。

**證據**

- 官方名 Ask Brave：https://search.brave.com/help/ai（「Ask Brave can provide longer, more detailed answers」）；https://brave.com/blog/ask-brave/；https://brave.com/ai/ 把 Ask Brave（搜尋裡的 AI chat）與 Brave Leo（瀏覽器助手）分開寫。
- Capture：頁面標題後綴「Ask Brave」；「the AI entry is Ask, not the word Leo」；「Did not need https://leo.ai/」；結果 chrome 是 Ask Brave，沒有 Leo 型號 chip（`capture-notes`、`leo_3_after.png` 分頁字是 Ask）。
- 畫面產品名是 Brave Ask：`cover.png` 大字、`cta.png` chip「Ep.40 · BRAVE ASK」、caption 首句、落地頁 H1「Brave Ask 3 步」。
- 公開 URL 是 `…/reels/brave-leo-parent-meeting/`（caption、`content`、`published`）。
- 內部稿仍未鎖名：`topic` hook 寫「Brave Leo 一句出講稿重點」，同一份又寫「畫面產品名 Ask Brave」；實際像素是 Brave Ask，兩句都與畫面不符。`NOTES` 寫「Leo 唔喺畫面」、slug 不改。
- 落地頁有補救句：「頁面叫呢個功能 Ask Brave，本集跟 Reel 叫 Brave Ask」，以及「開咗 Leo 側欄：本集用 search.brave.com 嘅 Ask」。補救在網頁，不在片內。觀眾先看到的工具名仍是 Brave Ask，連結路徑仍帶 leo。
- 入口 URL `search.brave.com` 正確。掣名 Ask 與畫面 verbatim 一致。登入牆當免登入不成立：當日匿名已出答案。

**Critical：** 是。錯工具名，且公開路徑帶另一個產品的名字（Leo）。

### R5 文案嚴謹 — 6／10

密碼句有頁、免責在、沒有「留言 1」。Caption 仍帶未兌現的「逐步截圖」，而且 Share 當刻 CTA 未就緒。

**證據**

- 密碼句「密碼喺網頁（個人檔連結）」有落點：落地頁文末寫 Workflow 庫密碼在 `/workflow/` 輸入，`workflow/index.html` 有同一組密碼。不是「承諾密碼但無頁」。
- 免責在 caption「#注意」：虛構、按學校要求改、簡體請改回繁體。CTA 兩行與 `cta-comment` 一致：「密碼喺網頁…逐步截圖：〈slug URL〉」以及「朝早同中午都有粵語 AI 3 步…」。無「留言 1」、無 Collab。
- 「再傳俾家長群」指傳講稿，與 intent=send 相符。落地頁寫明不是叫人轉發這則片。
- 扣分在 caption 裡那句假的「本則逐步截圖」（與 R1 同一句），以及「一句出講稿」。密碼句在 caption 出現兩次，屬重複，不另升 Critical。
- 過程：`published` 與 `NOTES`：Share 12:03 HKT，CTA 約 12:38 HKT，`cta_vs_share=35`，`cta_o2=MAJOR_MISS`，門檻是 Share 後 ≤10 分。兩行都貼了、沒有 pin、帳號 rabithead1881。文案內容齊，就緒時間不齊。

**Critical：** 維度表裡的「留言 1／密碼無頁」不成立。試行加閘 `cta_ready_at_share` 成立，見第 3 節第 4 項。這一項單獨已否決。

### R6 結構節奏 — 8／10

0 秒見結果，1.50 秒進入步驟，中段停在 Ask，全長 9 秒。

**證據**

- `contact.png` 時碼：cover 0.00s（之前／之後已在）、r1w 1.50s、r1c 2.30s、r2w 3.50s、r2c 4.30s（mid-beat 在 Ask）、r3w 5.50s、r3c 6.30s、cta 7.50s。`NOTES` 全長 9.000s，低於 15 秒。
- early_motion≤2s 以 1.50s 的切鏡核實。`NOTES` 寫 cover 在 0.3–0.8s 有 tap；提供的 `cover.png` 靜幀上看不見圓環，本審不把該 tap 寫成已看見。
- 尾段 7.50s 至 9.0s 停在 CTA／五點，約 1.5 秒，長於 topic 寫的 0.5–1.0s，沒有新主張。
- `NOTES` 記 `reel_qa_check` 的 cover 字級啟發式失敗（估 13px）。本審看到封面結果卡字小、第 1 點編號被裁，不把 Art 的人眼放行當成這個閘的加分。R6 的否決線通常不是 Critical，此處也不升。

**Critical：** 否。

### R7 合規／字形 — 7／10

公開 caption 是繁體粵語。簡體出現在結果主欄，片內裁的是繁體側欄，caption 有改回繁體的提示。

**證據**

- Caption 無簡體句、無日文、無 Pip。提示句是「畫面或有簡體字請改返繁體」。
- `leo_3_after.png` 主欄第 1 點有簡體「这里」「体会」（`capture-notes` 點名這兩個字，並寫 Not regenerated）。同段其餘可見字以繁體為主（榮幸、感謝、學校、會議）。側欄五個標題是繁體，與 `cover.png`、`r3c.png` 一致。
- 第 4、5 點正文在摺線下。側欄標題 4、5 在靜幀裡是繁體；正文未在靜幀內逐字核對。
- 模型自述「以繁體中文撰寫」，第 1 點仍混簡體。披露指向「畫面」，而裁進片的側欄是繁體；觀眾自己跑一次時，風險在主欄正文。披露方向有用，緩解是裁切加一句提示，不是乾淨的繁體結果。

**Critical：** 否。公開 caption 不是簡體或日文。

### R8 可傳性／場景 — 8／10

香港家長會場景清楚，可傳的是講稿大綱，不是叫人轉發片。

**證據**

- Hook 是陳述句場景（仔女班家長會要講五分鐘），不是以問號或「點樣」開頭。
- 側欄五點可當結構直接改。學校名星河小學在 caption 與落地頁都標虛構。
- 扣分：落地頁可抄提示的要點與片內五點不是同一份稿，觀眾不能靠頁上的「複製」重現畫面結果（見 R1）。即用結果因此弱一截。

**Critical：** 否。評分表此維度無 Critical 觸發。

## 3. Critical 清單

1. **R1** — Caption 硬寫「本則逐步截圖」在 slug URL。現網頁與 `reels/brave-leo-parent-meeting/index.html` 寫「未有逐步截圖／未有 contact 截圖／3 步係發佈前位置」。可抄提示的要點也不是畫面五點的來源提示。
2. **R2** — 畫面三步是「撳 Ask 開入口 → 再撳 Ask 送出 → 睇側欄」。Caption 三步是「去 search.brave.com 寫題目 → 寫要點再撳 Ask → 改字再傳」。Capture 是先打字、按一次 Ask。第一步「開 AI 入口」在當日截圖與官方 Method 2 都沒有這個動作。
3. **R4** — 片內與 caption 的產品名是 Brave Ask。官方名是 Ask Brave（help/ai、Ask Brave 發佈文、結果頁標題）。公開 slug `brave-leo-parent-meeting` 指向另一個產品 Brave Leo（瀏覽器側欄／leo.ai）。Capture 寫明沒有用 Leo。
4. **過程閘 `cta_ready_at_share`**（本試行指定：O2 35 分鐘按 Critical 計，不沿用內部的 MAJOR MISS 標籤）— Share 12:03，CTA 約 12:38，相距 35 分鐘，門檻 ≤10 分鐘（`published`、`NOTES`）。以發佈前就緒重審，Share 當刻 CTA 未就緒。

## 4. 必改項（不過閘）

1. **產品名改成 Ask Brave，路徑不再把人帶去 Leo。** 封面大字、步驟卡、CTA chip、caption 首句、落地頁標題改為 Ask Brave。掣上的字維持 Ask。入口維持 search.brave.com。Caption 與片內不要再用 Brave Ask。Slug 若暫留 `brave-leo-parent-meeting`，caption 第一屏要寫明：Leo 是瀏覽器側欄的另一個產品，這則用的是 search.brave.com 的 Ask。Topic hook 裡的「Brave Leo」不得再進公開文案。對應 R4，並把 R4 拉回可過線。
2. **三步改成與 capture 相同的一次提交。** 畫面改為：① 打開 search.brave.com，搜尋框裡看得到題目被打上去（不要把空白 Ask 標成「開 AI 入口」）；② 只按一次 Ask 送出；③ 看側欄五點，再字幕說明改字後傳家長群。Caption 三個小標與此一一對應。對應 R2。
3. **「逐步截圖」與可抄提示跟真實結果對齊。** 二擇一：刪掉 caption 的「本則逐步截圖」；或在落地頁放上與 reel 相同的真實三步圖，並刪掉「未有逐步截圖／發佈前位置」。可抄提示改成 capture 那段（開場、家校溝通重點、在家三個做法、想老師幫手的一件事、多謝）。Hook「一句出講稿」改成與提示長度相符的說法，例如一段提示出五點稿。對應 R1，並抬高 R5。此項要改落地頁才算過閘；本試行按指示沒有改產品頁。
4. **Share 前 CTA 兩行已備好，Share 後 10 分鐘內貼上。** 文本用現有 `cta-comment` 兩行，不 pin。今次 35 分鐘過不了 `cta_ready_at_share`。重審要有「Share 前文本已在、貼上時間 ≤10 分鐘」的記錄。對應第 3 節第 4 項。

上述四項清掉之後，R7 的簡體（主欄「这里」「体会」，且未重跑）仍建議在重拍時改掉或把披露改成「自己跑出來的正文可能有簡體，請改回繁體」。它不是這次的否決項。封面第 1 點編號被裁，重出 cover 時一併補回，同樣不單獨否決。
