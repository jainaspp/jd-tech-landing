# Reel 發佈前嚴謹度閘 · 試行評分表 v0（2026-10-19）

**對象：** Ep.43 Duck.ai 秘方有冇根據（duckai-health-rumor · 2026-10-24 · 雙閘）  
**硬規則：** 任一 Critical FAIL → 整則 **FAIL／退回**，唔准 Share。  
**及格：** 三個 model 多數 PASS，且加權均分 ≥8／10，且 R9≥8，且 Critical=0。（2026-10-19 PP O：全 8 先可）

## 評分維度（每項 0–10）

| ID | 維度 | 10 分標準 | Critical 觸發（該項直接一票否決） |
|---|---|---|---|
| R1 | 事實嚴謹 | 每句功能／免費／地區／步驟有可核對依據；無誇大 | 無來源嘅硬事實；教 VPN；假「官方支援香港」 |
| R2 | 示範一致 | 畫面步驟＝caption／cover 承諾；掣名 verbatim | 畫面做唔到 caption 所講；假 UI |
| R3 | 封面誠實 | 大字得益＝片內結果；唔掛羊頭 | 封面承諾結果片內冇出現 |
| R4 | 工具／產品準確 | 產品名、入口 URL、登入要求正確 | 錯工具名誤導；登入牆當免登入 |
| R5 | 文案嚴謹 | 無含糊填料；CTA／密碼句對；免責齊 | 「留言 1」無 workflow；承諾密碼但無頁 |
| R6 | 結構節奏 | 0s 結果、early_motion≤2s、mid_beat、≤15s | （通常 Major，唔自動 Critical） |
| R7 | 合規／字形 | 繁體為主；簡體風險有披露同緩解 | 公開 caption 簡體／日文 HARD；Pip 混入 |
| R8 | 可傳性／場景 | 港場景＋即用結果；intent 清楚 | — |

## 輸出格式（必須）

1. 總評：**PASS** 或 **FAIL（退回）**
2. 每維度：分數／一句理由／證據（檔名或畫面描述）
3. Critical 清單（可空）
4. 若 FAIL：必改項（編號、點改先過閘）
5. 若 PASS：仍建議改進（非阻擋）

唔好因為「已經 APPROVED／已發佈」就放水——今次係檢驗閘試行。

---

## v1 補：R9 吸引力（2026-10-19 · PP O「冇人睇有用？」）

| ID | 維度 | 10 分標準 | Critical／Major |
|---|---|---|---|
| R9 | 吸引力 | 前 2 秒停滑（結果／衝突／場景一句）；封面大字一眼睇明得益；完結有拉力（可傳／可跟）；唔靠假承諾 | **Major 預設**：均分拉低可令整則 <8 → FAIL。**Critical** 僅當：封面／hook 靠假結果或假工具（同時觸 R3／R4） |

評分要問：
1. 0–2s 有冇即時結果或痛點衝突？
2. 封面大字陌生人 1 秒明唔明「睇完攞到咩」？
3. 完結 CTA／結果卡有冇令想跟住做／傳？
4. 會唔會滑走（填料開場、無場景、無結果）？

**R9 單獨門檻：≥8**（＜8＝該維 FAIL，整則 HOLD）。

**原則：** 嚴謹閘堵講大話；吸引力閘堵「對但冇人睇」。兩條都過先准 Share。

---

## 未達標 → 重做（2026-10-19 · PP O）

`rigor_PASS? = NO`（均分＜8／R9＜8／Critical＞0／多數 FAIL）→ **整則重做**（題材可留，封面／步驟／文案／成片重出），**禁止**：
- 用「小改 caption」頂住發佈
- 降門檻／人眼放水
- Share 後再補

重做後必須重新跑三 model 閘；過全 8 先准 noon Share。

---

## v2 補：R10 劃位／safe zone（2026-10-21 · PP O「劃錯晒仍出到」）

| ID | 維度 | 10 分標準 | Critical |
|---|---|---|---|
| R10 | 劃位／safe | 文字卡＋shot 落喺 spec v1.1 SAFE；箭咀／圈／高亮指中目標；無 half_cut；UI 字 ≥22px @1080 | **Critical**：`reel_qa` 任一 `half_cut`／明顯錯指／文字卡越界；或 Art 人眼確認劃位錯。**Share 硬規則：見雙閘 v1.4**——`layout_PASS` 要 0 FAIL＋gates／ring／tip＋排版簽＋Art「圈心＝掣心」；qa status 可 WARN（須 LAYOUT-SIGNOFF 人眼 OK）。禁止 FAIL 人眼放水。 |

**雙閘：** `rigor_PASS`（R1–R9，三大 model）**且** `layout_PASS` 先准 noon Share。

### layout_PASS v1.1（2026-10-21 GM）
`_qa` **0 FAIL**（status=PASS 或 WARN＋LAYOUT-SIGNOFF 人眼 OK）＋ gates VERDICT PASS ＋ **ring_on_target／tip≤40** ＋ **排版 LAYOUT-SIGNOFF** ＋ Art「**圈心＝掣心 PASS**」。禁止 FAIL 人眼放水。詳見 SHARE-DUAL-GATE v1.4。
