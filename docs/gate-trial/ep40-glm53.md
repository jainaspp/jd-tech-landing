# 發佈前嚴謹度閘 · 試行評審 — Ep.40 Brave Ask 家長會（GLM 5.3）

**對象：** Ep.40 Brave Ask 家長會五點稿（slug `brave-leo-parent-meeting` · 已於 2026-10-19 12:03 HKT 發佈 · shortcode `DeqWrQoKhNj`）
**評審：** GLM 5.3（獨立試行 · fail-closed 原則）
**依據：** RUBRIC v0（2026-10-19）；證據包括 caption、NOTES、topic、capture-notes、Art 審、Bad Bot 審、published／cta-comment 記錄、reels/brave-leo-parent-meeting/index.html（HEAD `c44957c`），以及 cover／contact／r1c／r2c／r3c／cta／leo_0_before／leo_3_after／motion-strip 等關鍵畫面。

---

## 1. 總評

# **FAIL（退回）**

- 加權均分（等權）：**57 / 80 = 7.125 / 10 ＜ 7.5**，未達及格線。
- **Critical × 1（R5）**：caption（及 CTA 留言）承諾「本則逐步截圖」指向 landing 頁，惟發佈時至今日 HEAD，該頁明言「未有 contact 截圖」——承諾而無頁，fail-closed 一票否決。
- 前審（Art APPROVED＋Bad Bot APPROVED）**不獲跟隨**：見第 5 節差異清單。本次為閘門試行，按「已發佈不放水」原則評分。

---

## 2. 逐維評分（0–10）

| ID | 維度 | 分數 | 一句理由 | 證據 |
|---|---|---:|---|---|
| R1 | 事實嚴謹 | **8** | 核心硬事實（search.brave.com 免登入、匿名出稿、任何瀏覽器可開）均有 capture 實測支撐；無教 VPN、無假「官方支援香港」；「一句出講稿」實際提示為兩行，屬輕微誇張 | capture-notes（Login required: N；prompt 原文兩行）；caption；landing「官方說明」段引 search.brave.com/help/ai |
| R2 | 示範一致 | **6** | 掣名 verbatim「Ask」✓、真 UI 無 mock-up ✓，但 caption／landing 均描述「打題目→撳 Ask 一次」，reel 卻示範兩次 Ask：step 1 為**空 composer 撳 Ask「開AI入口」**，此行為在 capture 記錄中**無實測支撐**，屬步驟保真缺口 | caption（#開BraveAsk＝去 site＋寫題目）；landing HowToStep 1–3；r1c／r2c 畫面；capture-notes（唯一記錄流程：homepage 打題→Ask→/ask?source=llmSuggest） |
| R3 | 封面誠實 | **8** | 封面大字承諾（家長會／五點稿；之前空 Ask 框→之後側欄五點大綱）0s 即兌現，step 3 五點全數出現，無掛羊頭 | cover.png；motion-strip cover 段；r3c（五點 1–5 齊）；NOTES early_motion 段 |
| R4 | 工具／產品準確 | **8** | 入口 URL 正確、免帳戶屬實、入口掣確實叫「Ask」（非 Leo）✓；扣分：官方頁稱「Ask Brave」，reel 統稱「Brave Ask」（詞序倒置，landing 已註明跟 Reel 叫法）；slug `brave-leo-…` 殘留「leo」字樣（刻意保留、僅 URL 層、低誤導性） | capture-notes（「AI entry is “Ask”, not the word “Leo”」；result chrome “Ask Brave”）；landing「香港用戶留意」及「官方說明」段；commit `c30ec54`（Brave Leo→Brave Ask 修正記錄） |
| R5 | 文案嚴謹 | **4** | 密碼句兌現 ✓（jdtech3 在頁）、免責齊 ✓、無「留言 1」✓；但 caption 承諾「本則逐步截圖」的 landing 頁**至今沒有截圖**（頁面自述「未有 contact 截圖」），承諾落空；另 CTA 留言遲 ~35 分（＞10 分標準，O2 MAJOR MISS） | caption（「密碼喺網頁（個人檔連結）／本則逐步截圖：https://…/reels/brave-leo-parent-meeting/」）；reels/brave-leo-parent-meeting/index.html（`<!-- contact.png 未到…先補 -->`；「未有逐步截圖」×多處）；published_7cf4（cta_vs_share=35 · O2 MAJOR_MISS）；cta-comment_8da3（同一承諾句重複一次，雙倍暴露） |
| R6 | 結構節奏 | **8** | 0s 前後對照出結果 ✓、early_motion ≤2s（cover 0.3–0.8s tap）✓、mid_beat r2 Ask ✓、end_hold CTA／五點稿 ✓、9.0s ≤15s ✓、gates／verify_motion PASS；扣分：reel_qa 自動 FAIL（cover ui_text_size est 13px＜22px）僅以「人眼＋Ep.37–39 先例」推翻，缺書面準則 | NOTES（early_motion／mid_beat／end_hold／Render／QA 段）；review-art（heuristic FAIL → 人眼放行）；motion-strip 時軸（0.00–7.50s · 9.0s） |
| R7 | 合規／字形 | **6** | caption 全繁體 ✓（不觸發「公開 caption 簡體」HARD）、簡體風險已披露 ✓、側欄 crop 緩解 ✓；但緩解**不完全**：CTA 格「之後」標題呈簡體（星河**小学**…**沟通**）、來源截圖主欄混簡體（**这里**、**体会**），且 cover 格同位標題為繁體——格間不一致、簡體仍曝光 | cta.png（「星河小学小四家长会・家校沟通五分钟分享大纲」）；capture-notes（section 1 混簡體：这里、体会）；cover.png（同位標題為繁體「星河小學…溝通」）；caption（「畫面或有簡體字請改返繁體」披露） |
| R8 | 可傳性／場景 | **9** | 港家家長會痛點＋即用結果（五點大綱附時間分配）＋intent=send 清楚（傳講稿俾家長群，非叫人轉發片）、Ep21 結構齊、hook 為陳述句場景式 | caption（#拎講稿…再傳俾家長群）；topic（hook_type=scenario HARD）；r3c 五點時間分配；landing step 3「呢步係傳份講稿，唔係叫人轉發呢則片」 |

---

## 3. Critical 清單

| # | 維度 | 項目 | 證據 |
|---|---|---|---|
| C1 | R5 | **承諾截圖但無頁**：caption 及 CTA 留言均寫「本則逐步截圖：https://jainaspp.github.io/jd-tech-landing/reels/brave-leo-parent-meeting/」，惟該頁（發佈時至今日 HEAD）自述「未有 contact 截圖，步驟係發佈前位置」，HTML 註釋更明言「contact.png 未到…有真實 contact sheet 之後先補」。觀眾按連結前往，得唔到承諾嘅逐步截圖。與「承諾密碼但無頁」同類（promise-but-no-page），fail-closed 下直接一票否決 | caption；cta-comment_8da3；reels/brave-leo-parent-meeting/index.html（`<!-- contact.png 未到 -->`、「未有 contact 截圖」×4）；NOTES（contact sheet 實際已存在於 QA pack，僅未上載） |

**附註（試行回報 RUBRIC v0）：**「承諾**截圖／內容**但無頁」未列入 v0 的 R5 Critical 觸發字面清單（僅列「留言 1 無 workflow；承諾密碼但無頁」）。本次按 fail-closed 精神以同類推適用為 Critical；建議 v1 明文增補此觸發條款。

---

## 4. 必改項（改齊先可過閘）

1. **補齊 landing 截圖（解 C1）：** 將真實 contact sheet（QA pack 內 `contact.png` 已存在）上載至 `/reels/brave-leo-parent-meeting/` 並以 figure 呈現；**或**刪走 caption 及 cta-comment 中「本則逐步截圖」字眼。二者擇一，未做前閘不放行。
2. **CTA 留言時限（O2）：** Share 後 ≤10 分內貼出 cta-comment 兩行（本次 ~35 分，MAJOR MISS）。預備文本已達標（兩行齊、帳號正確、無 pin），須加自動化提醒或即時執行流程。
3. **Step 1 實測證據（解 R2 缺口）：** 補一次「空 composer 撳 Ask」的實測截圖，證明確會「開AI入口」；若空撳無效，重剪 step 1 對齊唯一有記錄的實測流程（homepage 打題目→撳 Ask 一次→結果），並同步 caption／landing 步驟描述。
4. **畫面簡體曝光（解 R7）：** CTA 格「之後」標題（星河小学…沟通）重新生成為繁體，或收窄 crop 避開主欄簡體（这里、体会）；目標：可見畫面與 cover 格看齊（繁體），並保持格間一致。
5. **自動閘推翻準則（解 R6 程序）：** reel_qa 自動 FAIL（ui_text_size est 13px＜22px）以人眼推翻時，須附書面準則（重新量度或放大核實記錄），不得僅援引 Ep.37–39 先例。

---

## 5. 前審差異（不跟隨 APPROVED 的理由）

| 前審結論 | 本次覆核發現 |
|---|---|
| Bad Bot：「Landing HTTP 200 ✓ → APPROVED」 | 只驗了 URL 可達，**無驗 caption 承諾與頁面內容相符**——「本則逐步截圖」承諾落空未被發現（C1） |
| Art：「簡體 crop 可接受——側欄繁中大綱」 | CTA 格「之後」標題簡體漏網，cover／CTA 格同位標體字形不一致，緩解不完全 |
| 雙閘均未要求 | reel step 1「空 composer 撳 Ask 開AI入口」無任何實測記錄支撐 |
| Art：「reel_qa heuristic FAIL → 人眼 OK 放行（同類 Ep.37–39）」 | 先例式推翻缺書面準則；fail-closed 閘下應存證不放行於程序記錄 |
| Bad Bot：「簡體風險 PASS——caption 已註」 | 披露屬實 ✓，但「有披露」不等於「已緩解」，R7 仍須扣分（6/10） |

---

## 6. 評審獨立性聲明

本次評分先於覆核前審文件結論而獨立完成；前審 APPROVED 僅作差異比對用，未影響任何維度分數。加權均分 7.125＜7.5 為客觀計算結果，Critical C1 為 fail-closed 推適用，兩者任一已足構成 FAIL（退回）。

**判定：FAIL（退回）——依必改項 1–5 補齊後可重審。**
