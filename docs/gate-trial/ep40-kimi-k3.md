# Ep.40 發佈前嚴謹度閘 · 試行獨立評審（kimi-k3）

- 對象：IG Reel Ep.40「Brave Ask 家長會五點稿」（slug `brave-leo-parent-meeting`，shortcode `DeqWrQoKhNj`，2026-10-19 12:03 HKT 已發佈）
- 性質：事後試行新 fail-closed 閘；**不追認**先前 Art／Bad Bot 雙 APPROVED
- 評審日期：2026-10-19
- reel sha256 `fd215c2541e1642c071cfc29608adbb56de13fcaaf62e0a04cbb8b6d802459df` · caption sha256 `d38533e91c3632d5b12e4d6be0f9b31dcd9b0f8d0ba3e3a2705bdd8ac642c747`

---

## 1. 總評

**FAIL（退回）。** R5 觸發 Critical（一票否決）；八維簡單平均 **7.125／10 < 7.5**，兩條及格線同時不達。若此閘於發佈前運行，本則**唔准 Share**。

## 2. 每維度評分

| ID | 分數 | 一句理由 | 證據 |
|---|---|---|---|
| R1 事實嚴謹 | 8 | 「search.brave.com 撳 Ask、免登入」經實測截圖紀錄核實，無 VPN／假官方地區聲稱；惟公開名稱與官方稱呼倒轉（詳 R4） | capture-notes.txt（"Login required: N"、"Anonymous Ask generated"、button id `submit-llm-button` aria-label "Ask"）；caption；landing |
| R2 示範一致 | 7 | 真 UI 截圖、掣名 verbatim「Ask」、畫面做得到 caption 所講；惟 reel 採「撳 Ask（開入口）→ 撳 Ask（送出）」兩撳結構，caption 第 1 步係「喺搜尋框寫題目」，步驟粒度不一致 | caption #開BraveAsk／#撳Ask；content.md「撳 Ask（開入口）→ 撳 Ask（送出）」；capture-notes.txt leo_1_step／leo_2_generate |
| R3 封面誠實 | 8 | 封面承諾「家長會／五點稿」＝片內側欄五點大綱結果，無掛羊頭；扣 1 分：cover@1.30s 字級 heuristic FAIL（est. 13px vs ≥22）僅以人眼放行 | content.md 封面描述；NOTES「reel_qa_check FAIL heuristic cover@1.30s ui_text_size」；review-art.md |
| R4 工具／產品準確 | 6 | URL、入口、免登入全部正確；但公開叫「Brave Ask」而畫面 chrome 實為「Ask Brave」，名稱倒轉（landing 有披露故不構成 Critical），且 slug 仍含「leo」——Leo 自始至終未出現於畫面 | capture-notes.txt（'the AI entry is "Ask", not the word "Leo". Result chrome says "Ask Brave"'、page title suffix "Ask Brave"、未用 leo.ai）；landing「頁面叫呢個功能 Ask Brave，本集跟 Reel 叫 Brave Ask」；NOTES「Leo 唔喺畫面」 |
| R5 文案嚴謹 | 3 | **Critical**：caption 及 CTA 評論承諾「本則逐步截圖」，landing 卻自認「未有逐步截圖，下面 3 步係發佈前位置」——承諾與頁面內容直接矛盾；另 CTA 評論延遲 ~35 分鐘（O2 ≤10m MAJOR MISS）、密碼句於 caption 重複兩次 | caption「密碼喺網頁（個人檔連結）／本則逐步截圖：…」；cta-comment.txt 同句；live landing（2026-10-19 實測 HTTP 200，`<img>`=0，「contact.png 未到。發佈前唔放 figure」）；published.txt `cta_o2=MAJOR_MISS` |
| R6 結構節奏 | 9 | 9.0s ≤15s、0s 見結果（空 Ask 框→五點大綱）、early_motion 0.3–0.8s ≤2s、mid_beat＝r2 Ask、end_hold 齊；music-only 合 text_variant | NOTES（template reel-motion-v6 9.000s）；review-badbot.md 硬閘表 |
| R7 合規／字形 | 7 | caption 全繁體、無日文、無 Pip，簡體風險有披露有 crop 緩解；惟結果主欄第 1 段實測混入簡體（这里、体会）且「Not regenerated」，靠 crop 偏側欄而非重生成過關 | capture-notes.txt「section 1 mixes a few simplified characters (这里, 体会). Not regenerated.」；caption「畫面或有簡體字請改返繁體」；review-art.md crop 說明 |
| R8 可傳性／場景 | 9 | 港家長會場景具體、五點稿即用、intent=send 清晰、無 ask-to-share；虛構「星河小學」＋提醒改走真實 PII，場景合規 | topic.md（intent=send、hook_type=scenario）；caption；landing 注意事項 |

簡單平均：(8+7+8+6+3+9+7+9)／8 = **7.125**（及格線 ≥7.5，不達；加權權重表內未定義，以簡單平均計）。

## 3. Critical 清單

| # | 維度 | 內容 |
|---|---|---|
| C1 | R5 | **承諾「逐步截圖」但頁面無截圖**：caption 及發佈後 CTA 評論均以「本則逐步截圖」引流至 `…/reels/brave-leo-parent-meeting/`，該頁（截至本評審實測）零圖片、自我標註「未有逐步截圖／3 步係發佈前位置，掣名以你當日畫面為準」。屬 R5 Critical「承諾密碼但無頁」同類——公開文案承諾之交付物於目的地不存在。 |

（密碼承諾本身有兌現：`/workflow/` 頁實測含密碼 `jdtech3`，此分項不構成 Critical；觸發者為「逐步截圖」承諾。）

## 4. 必改項（FAIL → 過閘條件）

1. **【C1｜R5】CTA 承諾與頁面對齊，二擇一**：(a) landing 補上真實逐步截圖（contact sheet＋每步 figure），並刪除「發佈前位置」字樣；或 (b) 編輯已發佈 caption 及 CTA 評論，刪去「本則逐步截圖」改為如實描述（如「本則 3 步文字版」）。閘規新增：**CTA readiness＝開 URL 逐項核對 caption 每個承諾（密碼、逐步截圖、slug）有真內容，HTTP 200 不足作準**。
2. **【R4】產品名一次過對齊**：公開物（cover／caption／landing H1）以官方「Ask Brave」為正名，或首次出現處並列（landing 已有披露句，須推前至 caption／cover 層）；內部文件殘留「Brave Leo」（topic.md hook「Brave Leo 一句出講稿重點」、pivot 注記、company「Brave／Leo」）須全數轉名，禁止半舊半新；下一集起 slug 不得再含未出鏡產品名（本 slug 已發佈可保留，但頁面須加說明——現有「開咗 Leo 側欄」提醒方向正確，保留）。
3. **【R7】簡體混入不得靠 crop 賭**：已知結果第 1 段含「这里、体会」而未重生成。閘規新增：結果格出現簡體 → 重生成或重 capture；「caption 已披露」只可作次要緩解，不作放行依據。
4. **【R5 流程】O2 計時入閘**：本次 Share 12:03 → CTA ~12:38（~35m，規定 ≤10m，O2 MAJOR MISS；12:21 routine late fire）。發佈後計時與升級機制須列入 gate checklist 並設逾時警報。
5. **【R2／R3】heuristic FAIL 不得純以「同類放行」帶過**：cover@1.30s 字級 est. 13px（≥22 標準）僅註「同類 Ep.37–39 放行」。今後 heuristic FAIL 須修圖，或書面記錄人眼理據＋實機縮放驗證截圖，否則視同 FAIL。另 reel「兩撳 Ask」與 caption 步驟描述須對齊（caption 第 1 步補「撳 Ask 開入口」或 reel 改為一撳結構）。
6. **【流程】禁止「後續先改」作非阻擋**：Bad Bot 紀錄「landing 文案後續對齊 Brave Ask（唔擋審）」——fail-closed 閘下，凡已知公開物落差一律阻擋，無「唔擋審」類別。

## 5. 專項調查結論

### 5.1 Brave Ask vs Leo 命名
實測畫面之 AI 入口為「**Ask**」掣（`submit-llm-button`），結果頁 chrome／標題為「**Ask Brave**」；全程無需 leo.ai，「Leo」一字從未出現於畫面。內部文件因 Kimi → Brave 轉向歷史殘留 Leo 命名（topic.md hook 直書「Brave Leo」、slug `brave-leo-parent-meeting`、pivot 注記「→ Brave Leo」），公開物則統一作「Brave Ask」——與官方「Ask Brave」**倒轉**。landing 有披露（「頁面叫呢個功能 Ask Brave，本集跟 Reel 叫 Brave Ask」）並教用戶勿開 Leo 側欄，故評 Major 而非 Critical；但名稱倒轉＋slug 含未出鏡產品名，屬必改（見必改項 2）。

### 5.2 UI 簡體字
屬實。capture-notes 明載結果主欄第 1 段「mixes a few simplified characters（这里， 体会）。Not regenerated.」。緩解措施＝reel crop 偏側欄繁中大綱＋caption 註明「畫面或有簡體字請改返繁體」。caption 本身全繁體，無 HARD 觸發；但明知混入而不重生成，僅靠取景規避，評 7 分並列入必改項 3。

### 5.3 步驟對 caption 還原度
掣名 verbatim「Ask」、流程可重現、無假 UI。差異在粒度：reel 三步為「撳 Ask（開入口）→ 撳 Ask（送出題目）→ 睇五點稿」，caption 三步為「開網寫題 → 撳 Ask → 拎講稿」——reel 第 1 撳於 caption 無對應描述。不構成「畫面做唔到 caption 所講」，評 7 分，列入必改項 5。

### 5.4 CTA readiness 若於發佈前執閘
**必定 FAIL。** 三項獨立證據：(i) caption 白紙承諾「本則逐步截圖」＋URL；(ii) 該 URL 頁面自我標註「未有逐步截圖，下面 3 步係發佈前位置」、HTML 註解「contact.png 未到。發佈前唔放 figure」、全頁 `<img>`=0（本評審對 live 頁實測，非僅 repo 狀態）；(iii) 發佈後 CTA 評論照舊複述「逐步截圖」且延遲 ~35 分鐘（O2 MAJOR MISS）。原雙閘僅核 HTTP 200（「One CTA → 本則 landing PASS」），未核承諾內容——正正係本試行閘要補之漏洞。

### 5.5 對先前 APPROVED 之處理
Art（2026-10-18 ~22:50）與 Bad Bot（22:49）雙 APPROVED 均於 landing 已自我標註「發佈前位置」之情況下發出，Bad Bot 更明記「landing 文案後續對齊（唔擋審）」。本評審**不追認**：兩項 APPROVED 屬流程失效實例，支持將 CTA readiness 逐項核對納入硬閘（必改項 1、6）。

## 6. 證據限制聲明

任務列出之九張 reel 畫面（`kol-content/qa/prepublish-gate-trial-ep40/` 下 cover.png、contact.png、r1c.png、r2c.png、r3c.png、cta.png、leo_0_before.png、leo_3_after.png、motion-strip.png）於本評審環境**不存在**（全檔案系統搜尋無果）。本報告之畫面判斷一律基於：capture-notes.txt 之逐字 UI 標籤紀錄、review-art／review-badbot 之人眼結論、NOTES、以及 repo＋live landing 源碼實測。凡依賴未見畫面方可定奪之分項（R2、R3、R6 之細節分），已按文件證據從嚴評定並於理由欄註明；如有實格畫面補充，R2／R3 可覆核但 C1（R5 Critical）不受影响——該項僅依賴公開文案與 live 頁面，證據充分。
