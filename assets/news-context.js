/**
 * Soft Bridge — reversible 「新聞背景」.
 *
 * Exactly the slugs in NEWS_CONTEXT render a block. Rollback:
 * delete this file (component + mapping) and every
 * <script src="../../assets/news-context.js"> tag.
 * The matching CSS block in assets/style.css can go with them.
 *
 * UTM follows the shipped cross-site convention (medium=referral):
 * utm_source=jdtech&utm_medium=referral&utm_campaign=news-context
 * &utm_content=reel-footer&utm_term=<reel slug>
 *
 * Each row is 1 link (`explainer`) or 2 (`links`). URLs are published
 * world-news.xyz explainers checked HTTP 200 on 2026-10-19. Do not
 * add a slug whose explainer is not already live.
 *
 * P0 (PR #49):
 * - notta-minutes → NVIDIA Nemotron speech ASR (recording)
 * - perplexity-sources → Temporal knowledge-base MCP (verify)
 * - notebooklm-pdf-podcast → Adobe Firefly audio studio (docs → audio)
 *
 * Extension: remaining 2026-10-17 reciprocal reels, plus PDF extract
 * and long-page summary.
 */
(function () {
  var DEFAULT_LABEL = "睇世界頭條懶人包 ↗";

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
    },
    "adobe-express-insert-object": {
      explainer: "https://world-news.xyz/explainer/2026-10-17-adobe-firefly-ai-assistant-22eb3283823e/",
      cta: "產品相加配件，背後係創意工作流。想睇呢單新聞點樣講？"
    },
    "microllm-browser-chat": {
      explainer: "https://world-news.xyz/explainer/2026-10-17-huggingface-llama-windows-0d4a780afe2e/",
      cta: "瀏覽器本地細模型傾偈。新聞側有一單：Llama 點樣一鍵上 Windows。"
    },
    "free-ai-division": {
      explainer: "https://world-news.xyz/explainer/2026-10-17-kiro-kimi-k3-6158c7fd4cf1/",
      cta: "寫嘢、長文、查料要分工。新聞側有一單新開源模型。"
    },
    "chatgpt-custom-instructions": {
      explainer: "https://world-news.xyz/explainer/2026-10-17-openai-teens-college-planner-c9294bc79b28/",
      cta: "ChatGPT 有新規劃工具。想睇呢單新聞點樣講？"
    },
    "claude-rewrite": {
      explainer: "https://world-news.xyz/explainer/2026-10-17-bedrock-agentcore-new-features-e0e39b1126ba/",
      cta: "長文先改到清晰。新聞側有一單：代理點樣幾分鐘起動。"
    },
    "gemini-pdf-deadlines": {
      explainer: "https://world-news.xyz/explainer/2026-10-19-llamaparse-per-product-mcp-c15c091b4276/",
      cta: "長 PDF 要搵限期同金額。新聞側有一單：文件點樣被抽出重點。"
    },
    "copilot-summary": {
      cta: "長網頁想變重點。新聞側有兩單：網頁抓取，同雲端瀏覽器幫代理睇頁。",
      links: [
        {
          explainer: "https://world-news.xyz/explainer/2026-10-19-firecrawl-mcp-hosted-oauth-keyless-e245baec4022/",
          label: "睇懶人包：網頁抓取 ↗"
        },
        {
          explainer: "https://world-news.xyz/explainer/2026-10-19-browserbase-mcp-cloud-browser-3ecf3544e4cb/",
          label: "睇懶人包：雲端瀏覽器 ↗"
        }
      ]
    }
  };

  var match = location.pathname.match(/\/reels\/([^/]+)\/?$/);
  var slug = match ? match[1] : "";
  var row = NEWS_CONTEXT[slug];
  if (!row) return;

  var items = row.links && row.links.length ? row.links.slice(0, 2) : [];
  if (!items.length && row.explainer) {
    items = [{ explainer: row.explainer, label: DEFAULT_LABEL }];
  }
  if (!items.length) return;

  var anchor = document.querySelector('section[aria-labelledby="related-title"]')
    || document.querySelector(".ending-cta");
  if (!anchor || !anchor.parentNode) return;

  function withUtm(explainer) {
    var url = new URL(explainer);
    url.searchParams.set("utm_source", "jdtech");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", "news-context");
    url.searchParams.set("utm_content", "reel-footer");
    url.searchParams.set("utm_term", slug);
    return url.toString();
  }

  function makeLink(item) {
    var link = document.createElement("a");
    link.className = "news-context-link";
    link.href = withUtm(item.explainer);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = item.label || DEFAULT_LABEL;
    return link;
  }

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

  aside.appendChild(label);
  aside.appendChild(cta);
  if (items.length === 1) {
    aside.appendChild(makeLink(items[0]));
  } else {
    var list = document.createElement("div");
    list.className = "news-context-links";
    items.forEach(function (item) {
      list.appendChild(makeLink(item));
    });
    aside.appendChild(list);
  }
  anchor.parentNode.insertBefore(aside, anchor);
})();
