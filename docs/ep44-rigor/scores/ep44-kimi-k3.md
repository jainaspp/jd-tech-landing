# Ep.44 rigor 評分 — Kimi K3（三閘之一）

- 對象：Ep.44 · slug `brave-sick-leave-msg` · 目標 Share 2026-10-26 12:00 HKT（本閘唔准 Share）· **Brave Ask**（search.brave.com · Ask 模式）
- 評分員：Kimi K3（獨立一票）· 2026-10-25
- 輸入：BRIEF／RUBRIC v0+v1（R9）+v2（R10 只註、不入分）／caption.txt／contact.png（8 格）／LAYOUT-SIGNOFF（22:10）／review-art.md（R1 APPROVED）／reel.mp4＋逐格抽幀（2fps ×18＋全尺寸裁圖：cover 大字、r1w 提示同底欄、r2w 底欄、r2c 掣、r3w 底欄、r3c 稿、CTA）＋repo `reels/brave-sick-leave-msg/`（origin/main，PR #92＋#93）＋live URL 核查
- **只評呢條 reel**：sha256 `6aab2dc9fdca6e0fc0aa4371f004fae3af7e2ae1d51e3d74c25a43373a8c298a`（我對 upload 重算，同 BRIEF／LAYOUT-SIGNOFF／review-art 逐字一致）。
- 硬規：**PASS only if mean≥8 AND R9≥8 AND Critical=0**。Art APPROVED／layout_PASS 唔畀免費分。禁假醫生紙／「醫生紙自動出」。
- **R10**：layout_PASS 已齊（gates VERDICT PASS · tip **30.9／38.6／35.2** ≤40 · Art「圈心＝掣心 PASS」· LAYOUT-SIGNOFF 22:10 · qa WARN／0 FAIL）。按 BRIEF **只註、唔重審** 劃位／crop，**唔入均分、唔阻擋**。

---

## 總評：**PASS**

均分 **9.11**（82/9）≥8 · **R9＝8** ≥8 · **Critical＝0** → 三條硬線全過。本席 PASS。未代 Share。三席多數先算 `rigor_PASS`。

一句講晒：封面大字係 **Brave Ask**／**病假短訊／即出稿**，0 秒已見定稿全文；三步係開 search.brave.com 貼題（畫面同 caption 都披露**免登入**）、撳藍色 **Ask**（唔好 Search）、睇定稿撳 **Copy**；定稿「X 總…謝謝體諒。」同 caption 逐字相同；示範標明**虛構**（陳／市場助理）；全片**零醫生紙**；CTA 係**每日中午**＋**密碼喺網頁（個人檔連結）**；landing URL 同 caption 一致、五張 `brave_*` 逐步圖全部 200。扣分集中喺：今日由本 VM 重開 search.brave.com 被 429 擋（免登入靠 pack 實測＋畫面證據）、封面「Copied」態未喺步驟內示範、reel 教嘅藍 Ask 掣同 landing 教嘅搜尋列 Ask Tab 係兩個真入口但文案未統一。

### 硬核檢查（BRIEF 指定要查）

| 項 | 判定 | 證據 |
|---|---|---|
| 工具＝Brave Ask／search.brave.com | **過** | r1w（~1.25s）網址列見 Brave 圖示＋`search.brave.com`；placeholder「Ask anything, find anything...」逐字；答案頂部係 Ask Brave 品牌。landing citation 列 `https://search.brave.com`＋`/help/ai` |
| 免登入 disclosed | **過（片上＋caption）** | r1w 底欄字卡「開 Brave Ask（免登入）· 貼病假題」；caption「開 search.brave.com（免登入）」＋#注意「免登入可用」；畫面全程無登入牆、composer 可用。landing 克制寫「登入同用量以你當日畫面為準」，唔衝突 |
| CTA＝每日中午 | **過** | CTA 卡（~7.25–9.0s）「每日中午／粵語 AI 3 步／追蹤 JD／少啲試錯」；caption 末句「每日中午」。片、caption、landing 的「朝早」「07:00」「留言 1」「Collab」全數 0 命中（grep＋逐格人眼） |
| 封面＝Brave Ask＋病假短訊／即出稿 | **過** | 0.00s 上行 **Brave Ask**、下兩行 **病假短訊／即出稿**；手機格內係定稿全文＋「Copied」toast——結果先置 |
| 步驟 開／Ask／睇短訊 | **過** | 字卡依次「開 Brave Ask（免登入）· 貼病假題」→「撳『Ask』出稿（唔好 Search）」→「出稿 · Copy 傳老闆／HR」→「定稿 · 撳 Copy」；掣名 verbatim：藍掣 **Ask**（r2c 特寫）、**Copy**（r3c） |
| 畫面＝得體病假短訊，禁假醫生紙 | **過** | r3w／r3c／cover 全文：「X 總，我聽朝（星期二）發燒喉嚨痛，想請一日病假，預計星期三返工。如有需要，我會盡快覆工相關訊息。謝謝體諒。」同 caption 定稿逐字同。**全片無醫生紙／無「醫生紙自動出」**；landing 仲反向警告「AI 加咗…醫生紙編號…先刪走」「唔好加假醫生紙編號」 |
| 示範虛構＋按公司規定自行改 | **過** | 片上提示（r1w／r1c）寫「我姓陳、職位用『市場助理』（虛構）」；caption #注意「示範係虛構返工場景（陳／市場助理）；請按公司規定自行改」；landing「虛構」多處＋「無真實姓名、無真實老闆」 |
| 密碼喺網頁（個人檔連結） | **過** | CTA 卡逐字「密碼喺網頁（個人檔連結）」；caption 同句＋逐步截圖 URL。`/workflow/` live 200，頁上密碼在（唔轉載）。承諾密碼有頁 |
| landing 逐步截圖 URL 一致 | **過** | caption URL `https://jainaspp.github.io/jd-tech-landing/reels/brave-sick-leave-msg/`＝BRIEF＝og:url＝canonical；live 200（21951 bytes）；`brave_0_before/1_typed/2_ask/3_after/4_copy.png` 全部 200。reel 幀同 `brave_1_typed.png` 源圖逐字吻合（同一 200% 重捉，非假 UI） |

---

## R1–R9

### R1 事實嚴謹 — **9／10**

- 理由：入口、免登入、三步、掣名、病假稿內容全部有畫面或文件依據；無誇大、無教 VPN、無「官方支援香港」、無硬銷免費額度。
- 證據：r1w 網址列 `search.brave.com`＋placeholder 逐字；r2c 藍 **Ask** 掣；r3w 答案序文「以下係一個得體嘅 WhatsApp 病假短訊範例：」係 Ask Brave 真輸出格式（同 `brave_3_after.png` 一致）；BRIEF 註明「免登入已實測」；landing「路徑跟第40集已核實嘅 Brave Ask」；caption 有「AI 可能出錯；敏感內容請自行核對」。
- 扣 1 分：今日由本 VM 重開 `search.brave.com`／`/help/ai` 被 HTTP 429 拒絕（雲端出口 IP 被擋），免登入同 Ask 模式嘅「今日再核」做唔到，靠 pack 200% 實測圖＋BRIEF 實測聲明＋第40集已核路徑。畫面本身無登入牆係直接證據，所以唔再扣分。
- Critical：無。

### R2 示範一致 — **9／10**

- 理由：畫面步驟＝caption／cover 承諾；掣名 verbatim；定稿逐字雙同（片↔caption）；UI 係真捕捉。
- 證據：
  1. r1w 底欄「開 Brave Ask（免登入）· 貼病假題」↔ caption #開BraveAsk「開 search.brave.com（免登入）…貼病假短訊題」。
  2. r2w／r2c 藍 **Ask** 掣＋字卡「唔好 Search」↔ caption #撳Ask「貼完撳『Ask』（唔好撳 Search）」；reel 幀同 `brave_1_typed.png`（200% 源圖）逐字吻合。
  3. r3w 答案＋r3c 定稿特寫＋**Copy** 掣 ↔ caption #睇短訊 定稿逐字同，結尾「謝謝體諒。」在。
- 扣 1 分：caption「若語氣未啱可追問重寫」嘅追問路徑冇入鏡（條件句、非承諾，但講咗冇示）；r3w 闊鏡答案連 sources 列，同 caption 聚焦定稿嘅講法相比多咗啲雜訊。
- Critical：無。全部 `brave_*` 圖係真 UI 200% 重捉，唔係畫出嚟嘅面板。

### R3 封面誠實 — **9／10**

- 理由：大字得益＝片內結果；0 秒手機格內就係定稿全文，唔掛羊頭。
- 證據：cover「Brave Ask／病假短訊／即出稿」；格內稿逐字＝r3c＝caption 定稿；「即出稿」對應片內 3 步出稿全過程。BRIEF 指定 line2「病假短訊／即出稿」以兩行呈現，用字相同。
- 扣 1 分：封面稿下嘅「**Copied**」toast 係已複製態，但三步入面只示範到 **Copy** 掣（r3c），toast 本身冇喺步驟內出現——結果有示、狀態未示，屬系列 result-first 慣例，唔構成承諾落空。
- Critical：無（封面承諾嘅結果片內有出現）。

### R4 工具／產品準確 — **9／10**

- 理由：產品名 Brave Ask、入口 URL、登入要求正確並**喺片上**披露；冇登入牆當免登入。
- 證據：名＝Brave Ask（cover line1、答案頂 Ask Brave）；URL 喺網址列；placeholder 逐字；藍 **Ask** 掣 verbatim；免登入字卡＋caption 雙披露（比 Ep.42/43 只喺 caption 披露進一步）。
- 扣 1 分：reel r2 教撳 composer 右下**藍色 Ask 掣**；landing 用 `brave_2_ask.png` 教「撳搜尋列入面嘅 Ask（唔係右邊黑色 Search）」——兩個都係真入口（Tab vs 掣），都入到 Ask 模式，但「Ask」喺兩處形態唔同，第一次跟嘅人可能要估邊個；landing 有「以你當日畫面為準」緩解。
- Critical：無。

### R5 文案嚴謹 — **9／10**

- 理由：CTA／密碼句／虛構免責／自行改／AI 出錯齊；無含糊填料；無禁句。
- 證據：CTA 卡「每日中午／密碼喺網頁（個人檔連結）」逐字；caption 同日中句＋密碼句＋URL；`/workflow/` 200 有密碼；landing live 200、五圖齊、步驟文同 reel 一致；「留言 1／朝早／07:00／Collab」0 命中；「收埋呢則先」係 save CTA；landing 反假醫生紙編號、唔另抄生成句子（短訊以你當日畫面為準）係穩妥寫法。
- 扣 1 分：caption #注意「密碼喺網頁（個人檔連結）」同 URL 行重複出現（無害但係填料感）；landing（搜尋列 Ask Tab）同 reel（藍 Ask 掣）嘅入口描述未統一（同 R4 扣項同源，文案層記一筆）。
- Critical：無。密碼有頁；逐步截圖係真 PNG 且 200。

### R6 結構節奏 — **10／10**

- 理由：四項客觀標準全中：0s 結果、early_motion≤2s、mid_beat、≤15s。
- 證據：ffprobe duration=9.000s、1080×1920、30fps、h264＋aac。0.00s 封面已有定稿結果卡 → ~0.75s 封面推進（early_motion ≤2s）→ 1.25s r1w → 2.25s r1c → 3.25s r2w → 4.25s r2c（mid_beat）→ 4.75s r3w → 6.25s r3c → 7.25–9.0s CTA hold。音軌 mean_volume −17.4 dB、max −4.3 dB，連續底樂；我冇做語音辨識，唔當有旁白事實。
- Critical：無（此項本身唔自動 Critical）。

### R7 合規／字形 — **10／10**

- 理由：公開 caption 全繁體粵語；片上字卡同病假稿全繁體；無簡體、無日文、無 Pip。
- 證據：caption 524 字簡體專用字掃描 0 命中；有聽朝、撳、喺、嘅、唔好。片上：開 Brave Ask（免登入）、貼病假題、出稿、睇短訊、定稿、撳 Copy、傳老闆／HR、追蹤、少啲試錯——全繁體粵語。病假稿「發燒喉嚨痛／預計／盡快／覆工相關訊息／謝謝體諒」全繁體，語域恰合上司 WhatsApp。英文只限產品／UI 名（Brave Ask、Ask anything…、Ask、Copy、WhatsApp）。
- Critical：無。

### R8 可傳性／場景 — **9／10**

- 理由：港場景痛點極普遍（聽朝請病假、WhatsApp 老闆／HR）；即用結果完整喺畫面；intent 清楚。
- 證據：hook「聽朝要請病假，空白稿怕語氣太隨便」；定稿全文可即抄（cover＋r3c 都齊）；步驟教撳 Copy 傳老闆／HR；intent=send，無丟 group、無轉發 bait；landing 有可抄提示同名日替換指引。
- 扣 1 分：稿用「X 總」占位，要用嘅人自行換名——片上（虛構）標註＋caption「按公司規定自行改」已緩解，但唔係一撳即貼嘅零改動稿。
- Critical：無（此項無 Critical 觸發）。

### R9 吸引力 — **8／10**

- 理由：四條自問全過，穩陣達標，唔係爆款式出色。
- 證據：
  1. 0–2s 有即時結果：0.00s 定稿全文＋「Copied」已喺封面，0.75s 推進；痛點衝突喺 caption 首句。
  2. 封面大字陌生人 1 秒讀明「Brave Ask → 病假短訊 → 即出稿」，工具名喺上行唔搶結果。
  3. 完結「追蹤 JD／少啲試錯／每日中午」＋密碼句有追蹤拉力；caption「收埋呢則先」係 save 拉力。
  4. 唔靠假承諾：結果係真 Ask Brave 輸出嘅 200% 捕捉。
- 扣 2 分：橙色系列字卡模板感重、視覺新意有限；hook 衝突句（怕語氣太隨便）只喺 caption，封面大字冇帶情緒；「X 總」占位令陌生人要多諗一步先代入。
- Critical：無（封面／hook 唔靠假結果或假工具）。**R9＝8，過單獨門檻。**

---

## Critical 清單

**（空）** — R1–R9 無 Critical。假醫生紙／「醫生紙自動出」全片 0 命中。R10 按 BRIEF 只註、不入此清單、不重審（tip 30.9／38.6／35.2 ≤40；layout_PASS 雙簽維持）。

---

## PASS WARN（非阻擋）

1. **「Copied」態入步驟**：cover 已 show 已複製態，r3c 可補半秒撳完 Copy 出 toast 嘅幀，令封面狀態喺流程內兌現。
2. **Ask 入口統一**：reel 教藍色 composer Ask 掣、landing 教搜尋列 Ask Tab——兩者皆真，建議 landing 加一句「或者 composer 右下藍色 Ask」，或者 reel r2w 框埋搜尋列，免第一次用嘅人搵錯形態。
3. **caption 密碼句重複**：#注意段同 URL 行連住兩次「密碼喺網頁（個人檔連結）」，可刪其一。
4. **封面帶痛點**：封面大字可加半句「怕語氣太隨便」級數嘅場景字，hook 衝突唔使只靠 caption。
5. **免登入今日未能自本 VM 複核**（search.brave.com 429）；現靠 pack 實測圖＋畫面無登入牆。Share 前若人手開到 search.brave.com 仍可順手截一幀未登入態存檔，唔阻今次 PASS。

— Kimi K3 · Ep.44 rigor 1/3 票 · **PASS**（均分 9.11 · R9 8 · Critical 0）· 未代 Share
