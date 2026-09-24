/* JD Tech Prompt 產生器 — vanilla JS, runs fully in the browser.
   Privacy: nothing is sent anywhere and nothing is stored (no localStorage/cookies).
   Only the chosen scenario id (?p=) is reflected in the URL, never what you type. */
(function () {
  "use strict";
  var DATA = window.PB_DATA;
  var HAS_TOOLS_PAGE = true; // /tools/ (香港 AI 工具庫) is live
  // toolName (from prompts-data.js) -> existing /tools/<slug>/ page
  var TOOL_SLUGS = {
    "ChatGPT": "chatgpt", "Gemini": "gemini", "Claude": "claude",
    "Copilot": "copilot", "Microsoft Copilot": "copilot", "Perplexity": "perplexity",
    "Canva": "canva", "Gamma": "gamma", "Notta": "notta",
    "NotebookLM": "notebooklm", "Gemini Notebook": "notebooklm", "CapCut": "capcut"
  };
  var ROOT = "../";

  var $ = function (id) { return document.getElementById(id); };
  var catsEl = $("pb-cats"), scnsEl = $("pb-scns"), formEl = $("pb-form");
  var stepScn = $("pb-step-scn"), stepForm = $("pb-step-form"), stepOut = $("pb-step-out");
  var outEl = $("pb-output"), statusEl = $("pb-status"), missEl = $("pb-missing-count");
  var fallbackWrap = $("pb-fallback"), fallbackTa = $("pb-fallback-text");
  if (!DATA || !catsEl) return;

  var byId = {};
  DATA.categories.forEach(function (c) {
    c.prompts.forEach(function (p) { p.cat = c; byId[p.id] = p; });
  });

  var current = null;   // current prompt
  var values = [];      // per-field value (string)

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- Step 1: categories ---------- */
  DATA.categories.forEach(function (c) {
    var lab = el("label", { class: "pb-chip" });
    var inp = el("input", { type: "radio", name: "pb-cat", value: c.id, id: "pb-cat-" + c.id });
    inp.addEventListener("change", function () { if (inp.checked) showCategory(c.id, false); });
    lab.appendChild(inp);
    lab.appendChild(el("span", null, c.id + ". " + c.name));
    catsEl.appendChild(lab);
  });

  function showCategory(cid, keepPrompt) {
    var cat = null;
    DATA.categories.forEach(function (c) { if (c.id === cid) cat = c; });
    if (!cat) return;
    var r = $("pb-cat-" + cid); if (r) r.checked = true;
    scnsEl.textContent = "";
    cat.prompts.forEach(function (p) {
      var lab = el("label", { class: "pb-scn" });
      var inp = el("input", { type: "radio", name: "pb-scn", value: p.id, id: "pb-scn-" + p.id });
      inp.addEventListener("change", function () { if (inp.checked) selectPrompt(p.id, true); });
      var card = el("span", { class: "pb-scn-card" });
      card.appendChild(el("span", { class: "pb-scn-title" }, p.num + " " + p.title));
      card.appendChild(el("span", { class: "pb-scn-desc" }, p.scene));
      lab.appendChild(inp); lab.appendChild(card);
      scnsEl.appendChild(lab);
    });
    stepScn.hidden = false;
    if (!keepPrompt) {
      current = null;
      stepForm.hidden = true; stepOut.hidden = true;
      setUrl(null);
    }
  }

  /* ---------- Step 2/3: prompt + form ---------- */
  function selectPrompt(pid, focusForm) {
    var p = byId[pid];
    if (!p) return false;
    showCategory(p.cat.id, true);
    var r = $("pb-scn-" + pid); if (r) r.checked = true;
    current = p;
    values = p.fields.map(function () { return ""; });
    buildForm(p);
    stepForm.hidden = false; stepOut.hidden = false;
    hideFallback(); setStatus("", "");
    render();
    setUrl(pid);
    if (focusForm) {
      var head = $("pb-form-head");
      head.focus({ preventScroll: true });
      $("pb-step-form").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return true;
  }

  function buildForm(p) {
    $("pb-form-head").textContent = p.num + " " + p.title;
    var meta = $("pb-meta"); meta.textContent = "";
    meta.appendChild(el("strong", null, "建議工具："));
    meta.appendChild(document.createTextNode(p.tool));
    meta.appendChild(el("br"));
    meta.appendChild(el("strong", null, "私隱提醒："));
    meta.appendChild(document.createTextNode(p.privacy));

    formEl.textContent = "";
    p.fields.forEach(function (f, i) {
      var fid = "pb-f-" + p.id + "-" + i;
      var warnId = fid + "-warn";
      var wrap, control;
      var rawNote = f.raw ? ("原文：【" + f.raw + "】") : "";
      if (f.type === "radio" || f.type === "multi") {
        wrap = el("fieldset", { class: "pb-field pb-fieldset" });
        var lg = el("legend", null, f.label);
        if (rawNote) lg.appendChild(el("span", { class: "pb-raw" }, rawNote));
        wrap.appendChild(lg);
        var opts = el("div", { class: "pb-opts" });
        f.options.forEach(function (o, k) {
          var lab = el("label", { class: "pb-opt" });
          var inp = el("input", {
            type: f.type === "radio" ? "radio" : "checkbox",
            name: fid, value: o, id: fid + "-" + k
          });
          if (f.warn) inp.setAttribute("aria-describedby", warnId);
          inp.addEventListener("change", function () {
            if (f.type === "radio") values[i] = o;
            else {
              var sel = [];
              wrap.querySelectorAll("input:checked").forEach(function (x) { sel.push(x.value); });
              values[i] = sel.join("／");
            }
            render();
          });
          lab.appendChild(inp); lab.appendChild(el("span", null, o));
          opts.appendChild(lab);
        });
        wrap.appendChild(opts);
        if (f.type === "radio") {
          // allow clearing a radio choice back to 【】
          var clr = el("button", { type: "button", class: "pb-opt-clear", "aria-label": f.label + "：清除選擇" }, "清除");
          clr.addEventListener("click", function () {
            wrap.querySelectorAll("input").forEach(function (x) { x.checked = false; });
            values[i] = ""; render();
          });
          wrap.appendChild(clr);
        }
      } else {
        wrap = el("div", { class: "pb-field" });
        var label = el("label", { class: "pb-label", for: fid }, f.label);
        if (rawNote) label.appendChild(el("span", { class: "pb-raw" }, rawNote));
        wrap.appendChild(label);
        if (f.type === "select") {
          control = el("select", { class: "pb-input", id: fid });
          control.appendChild(el("option", { value: "" }, "— 請揀 —"));
          f.options.forEach(function (o) { control.appendChild(el("option", { value: o }, o)); });
          control.addEventListener("change", function () { values[i] = control.value; render(); });
        } else {
          control = el(f.type === "area" ? "textarea" : "input", { class: "pb-input", id: fid });
          if (f.type !== "area") control.setAttribute("type", "text");
          else control.setAttribute("rows", "4");
          control.setAttribute("autocomplete", "off");
          if (f.example) control.setAttribute("placeholder", f.example);
          if (f.type === "list") {
            var dl = el("datalist", { id: fid + "-list" });
            f.options.forEach(function (o) { dl.appendChild(el("option", { value: o })); });
            control.setAttribute("list", fid + "-list");
            wrap.appendChild(dl);
          }
          control.addEventListener("input", function () { values[i] = control.value; render(); });
        }
        if (f.warn) control.setAttribute("aria-describedby", warnId);
        wrap.appendChild(control);
      }
      if (f.warn) wrap.appendChild(el("p", { class: "pb-warn", id: warnId }, f.warn));
      formEl.appendChild(wrap);
    });
  }

  /* ---------- Assemble ---------- */
  var PH = /【([^】]*)】/g;
  function assemble() {
    // returns {text, parts:[{t, kind}] , missing}
    var tpl = current.template, parts = [], last = 0, idx = 0, missing = 0, m;
    PH.lastIndex = 0;
    while ((m = PH.exec(tpl)) !== null) {
      if (m.index > last) parts.push({ t: tpl.slice(last, m.index), kind: "text" });
      var v = (values[idx] || "").trim();
      if (v) parts.push({ t: v, kind: "filled" });
      else { parts.push({ t: m[0], kind: "missing" }); missing++; }
      last = m.index + m[0].length; idx++;
    }
    if (last < tpl.length) parts.push({ t: tpl.slice(last), kind: "text" });
    return { text: parts.map(function (x) { return x.t; }).join(""), parts: parts, missing: missing };
  }

  function render() {
    if (!current) return;
    var a = assemble();
    outEl.textContent = "";
    a.parts.forEach(function (x) {
      if (x.kind === "text") outEl.appendChild(document.createTextNode(x.t));
      else outEl.appendChild(el(x.kind === "filled" ? "mark" : "span", { class: "pb-" + x.kind }, x.t));
    });
    var total = current.fields.length;
    missEl.textContent = a.missing ? ("仲有 " + a.missing + "／" + total + " 格未填（黃色【】）") : ("全部 " + total + " 格已填，可以複製。");
    outEl.setAttribute("data-missing", String(a.missing));
    renderNext();
    if (!fallbackWrap.hidden) fallbackTa.value = a.text;
  }

  function renderNext() {
    var n = $("pb-next"); n.textContent = "";
    n.appendChild(el("strong", null, "貼去邊度用："));
    n.appendChild(document.createTextNode("建議 "));
    if (current.toolLearn) {
      n.appendChild(el("a", { href: ROOT + current.toolLearn }, current.toolName + " 教學"));
    } else {
      n.appendChild(document.createTextNode(current.toolName));
    }
    n.appendChild(document.createTextNode("　·　"));
    n.appendChild(el("a", { href: ROOT + "learn/" }, "全部工具教學"));
    if (HAS_TOOLS_PAGE) {
      var slug = TOOL_SLUGS[current.toolName];
      if (slug) {
        n.appendChild(document.createTextNode("　·　"));
        n.appendChild(el("a", { href: ROOT + "tools/" + slug + "/" }, current.toolName + " 香港用唔用到"));
      }
      n.appendChild(document.createTextNode("　·　"));
      n.appendChild(el("a", { href: ROOT + "tools/" }, "香港 AI 工具庫"));
    }
  }

  /* ---------- Copy ---------- */
  function setStatus(msg, cls) { statusEl.textContent = msg; statusEl.className = "pb-status" + (cls ? " " + cls : ""); }
  function hideFallback() { fallbackWrap.hidden = true; fallbackTa.value = ""; }

  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", "");
    ta.style.position = "fixed"; ta.style.left = "-9999px"; ta.style.top = "0";
    document.body.appendChild(ta);
    ta.select(); ta.setSelectionRange(0, text.length);
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        if (legacyCopy(text)) return;
        throw new Error("copy failed");
      });
    }
    return legacyCopy(text) ? Promise.resolve() : Promise.reject(new Error("copy failed"));
  }

  var copyBtn = $("pb-copy"), copyTimer = null;
  copyBtn.addEventListener("click", function () {
    if (!current) return;
    var a = assemble();
    copyText(a.text).then(function () {
      hideFallback();
      copyBtn.textContent = "已複製 ✓";
      setStatus(a.missing ? ("已複製（仲有 " + a.missing + " 格【】未填，貼之前記得補）") : "已複製，可以貼去 AI 工具。", "ok");
      clearTimeout(copyTimer);
      copyTimer = setTimeout(function () { copyBtn.textContent = "複製"; }, 1800);
    }).catch(function () {
      fallbackWrap.hidden = false;
      fallbackTa.value = a.text;
      fallbackTa.focus(); fallbackTa.select();
      setStatus("瀏覽器唔俾自動複製，請喺下面個框手動複製。", "err");
    });
  });

  $("pb-reset").addEventListener("click", function () {
    if (!current) return;
    selectPrompt(current.id, false);
    var first = formEl.querySelector("input, textarea, select");
    if (first) first.focus();
    setStatus("已清空。", "");
  });

  /* ---------- Deep link ?p=<id> ---------- */
  function setUrl(pid) {
    if (!window.history || !history.replaceState) return;
    var u = new URL(window.location.href);
    if (pid) u.searchParams.set("p", pid); else u.searchParams.delete("p");
    history.replaceState(null, "", u.pathname + u.search + u.hash);
  }

  function normId(s) {
    if (!s) return "";
    var m = String(s).trim().match(/^(\d+)[.\-_](\d+)$/);
    return m ? (m[1] + "-" + m[2]) : "";
  }

  var params = new URLSearchParams(window.location.search);
  var want = normId(params.get("p"));
  if (want && byId[want]) {
    selectPrompt(want, true);
  } else if (params.get("p")) {
    setUrl(null);
  }
})();
