/**
 * Soft Bridge P0 — reversible 「新聞背景」pilot.
 *
 * Exactly the slugs in NEWS_CONTEXT render a block. Rollback:
 * delete this file (component + mapping) and the three
 * <script src="../../assets/news-context.js"> tags.
 * The matching CSS block in assets/style.css can go with them.
 *
 * UTM follows the shipped cross-site convention (medium=referral):
 * utm_source=jdtech&utm_medium=referral&utm_campaign=news-context
 * &utm_content=reel-footer&utm_term=<reel slug>
 *
 * Pairs are the recording / verify / docs reels, each pointed at a
 * live world-news.xyz explainer:
 * - notta-minutes → NVIDIA Nemotron speech ASR (recording)
 * - perplexity-sources → Temporal knowledge-base MCP (verify: look up official docs before answering)
 * - notebooklm-pdf-podcast → Adobe Firefly audio studio (docs → listenable audio)
 */
(function () {
  var NEWS_CONTEXT = {
    "notta-minutes": {
      explainer: "https://world-news.xyz/explainer/2026-10-17-nvidia-nemotron-speech-skills-asr-ed30994dfcf2/",
      cta: "開會錄音變紀要，背後係語音辨識。想睇呢單新聞點樣講？"
    },
    "perplexity-sources": {
      explainer: "https://world-news.xyz/explainer/2026-10-19-temporal-kb-mcp-server-967e3442e229/",
      cta: "查料要有來源。新聞側有一單：答之前先查官方文件。"
    },
    "notebooklm-pdf-podcast": {
      explainer: "https://world-news.xyz/explainer/2026-10-17-adobe-firefly-audio-studio-396ca03f03bc/",
      cta: "厚 PDF 變語音摘要。新聞側都有生成語音嘅新消息。"
    }
  };

  var match = location.pathname.match(/\/reels\/([^/]+)\/?$/);
  var slug = match ? match[1] : "";
  var row = NEWS_CONTEXT[slug];
  if (!row) return;

  var anchor = document.querySelector('section[aria-labelledby="related-title"]')
    || document.querySelector(".ending-cta");
  if (!anchor || !anchor.parentNode) return;

  var url = new URL(row.explainer);
  url.searchParams.set("utm_source", "jdtech");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", "news-context");
  url.searchParams.set("utm_content", "reel-footer");
  url.searchParams.set("utm_term", slug);

  var aside = document.createElement("aside");
  aside.className = "news-context";
  aside.setAttribute("aria-label", "新聞背景");
  aside.setAttribute("data-news-context", slug);

  var label = document.createElement("p");
  label.className = "news-context-label";
  label.textContent = "新聞背景";

  var cta = document.createElement("p");
  cta.className = "news-context-cta";
  cta.textContent = row.cta;

  var link = document.createElement("a");
  link.className = "news-context-link";
  link.href = url.toString();
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "睇世界頭條懶人包 ↗";

  aside.appendChild(label);
  aside.appendChild(cta);
  aside.appendChild(link);
  anchor.parentNode.insertBefore(aside, anchor);
})();
