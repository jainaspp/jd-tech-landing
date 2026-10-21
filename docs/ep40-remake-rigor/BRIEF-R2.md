# Ep.40 remake rigor ROUND 2（Bad Bot · 2026-10-21 ~14:35 HKT）

## Why re-score
Round 1 (sha `636910ef…`) majority FAIL：片尾 CTA 燒「朝早同中午」＋landing 步驟錯。Round 2 uses **new render**.

## Target
- Pack: `/workspace/kol-content/review-queue/2026-10-19-p2/`
- Slug: `brave-leo-parent-meeting` · Ep.40 remake
- reel sha256 **`f4a91588c608bbddc855097fe8e35b21386b543c7e5d99381b5670ca70a04459`**（舊 636910ef／c47c655f 作廢）
- CTA on-screen：**每日中午**（verified）· tip 33.3／26.0／34.3 ≤40
- layout：gates PASS · Art「圈心＝掣心 PASS」覆簽 · LAYOUT-SIGNOFF 先前已簽 · qa WARN／0 FAIL（Brave 橙 v1.4 准）
- COPY_PASS v2 · 禁「朝早／07:00」
- Tool: Brave Ask · search.brave.com · 免登入
- Landing sync may still be in flight — score the **reel＋caption pack**; note landing lag as WARN not Critical if pack CTA is noon-only

## Hard pass line
PASS only if: mean ≥8 AND R9≥8 AND Critical=0. Else FAIL.

## Deliverable (PR)
Repo jd-tech-landing. Add ONLY:
`docs/ep40-remake-rigor/scores/ep40-r2-<your-model-slug>.md`
(e.g. ep40-r2-kimi-k3.md / ep40-r2-grok47.md / ep40-r2-glm53.md)
Open ready-for-review PR. Do NOT merge. Do NOT touch reels/ pages.

## Format
Match Ep.42：R0 → 總評 → R1–R9 → Critical → FAIL fixes or PASS WARN.
Explicitly check CTA card text = 每日中午（not 朝早）.
