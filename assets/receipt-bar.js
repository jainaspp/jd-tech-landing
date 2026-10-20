/**
 * Soft Bridge receipt bar — WN → JD, NotebookLM pair only.
 *
 * Mounts on /tools/notebooklm/ and /reels/notebooklm-pdf-podcast/,
 * directly under the title header. Rollback: delete this file, the
 * .receipt-bar rules in assets/style.css, and the two
 * <script src="../../assets/receipt-bar.js"> tags.
 *
 * Shown only when the page query has utm_campaign=toolcard
 * (query preferred over the hash or a loose URL match) or
 * document.referrer contains world-news.xyz. Otherwise nothing
 * is inserted.
 *
 * Return link uses the existing companion campaign. Do not invent
 * a new utm_campaign name.
 */
(function () {
  var LINE = "你由文明編年史《LlamaParse 分產品 MCP…》過來｜教學頁，非新聞正文。";
  var RETURN_LABEL = "← 返回懶人包";
  var RETURN_HREF = "https://world-news.xyz/explainer/2026-10-19-llamaparse-per-product-mcp-c15c091b4276/?utm_source=jdtech&utm_medium=referral&utm_campaign=companion&utm_content=receipt-bar&utm_term=llamaparse";

  function pagePath(pathname) {
    return String(pathname || "")
      .replace(/\/index\.html$/, "")
      .replace(/\/+$/, "");
  }

  function isReceiptPage(pathname) {
    var path = pagePath(pathname);
    return path.endsWith("/tools/notebooklm") || path.endsWith("/reels/notebooklm-pdf-podcast");
  }

  function queryHasToolcard(search) {
    var params = new URLSearchParams(search || "");
    var values = params.getAll("utm_campaign");
    for (var i = 0; i < values.length; i++) {
      if (values[i] === "toolcard") return true;
    }
    return false;
  }

  function referrerIsWorldNews(referrer) {
    return String(referrer || "").toLowerCase().indexOf("world-news.xyz") !== -1;
  }

  if (!LINE || !RETURN_LABEL || !RETURN_HREF) return;
  if (!isReceiptPage(location.pathname)) return;
  if (document.querySelector("[data-receipt-bar]")) return;
  if (!queryHasToolcard(location.search) && !referrerIsWorldNews(document.referrer)) return;

  var header = document.querySelector("header.tut-header");
  var nav = document.querySelector("nav.top-nav");
  var anchor = header || nav;
  if (!anchor || !anchor.parentNode) return;

  var aside = document.createElement("aside");
  aside.className = "receipt-bar";
  aside.setAttribute("data-receipt-bar", "llamaparse");
  aside.setAttribute("aria-label", "來源收據");

  var line = document.createElement("p");
  line.className = "receipt-bar-line";
  line.textContent = LINE;

  var link = document.createElement("a");
  link.className = "receipt-bar-return";
  link.href = RETURN_HREF;
  link.textContent = RETURN_LABEL;

  aside.appendChild(line);
  aside.appendChild(link);
  anchor.parentNode.insertBefore(aside, anchor.nextSibling);
})();
