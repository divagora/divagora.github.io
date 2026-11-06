/*
  Builds the page from content.js, in English or Spanish.
  You normally don't need to edit this file.
*/
(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  if (!C) {
    console.error("content.js did not load. Check it for a missing comma or quotation mark.");
    return;
  }

  var LANGS = ["en", "es"];
  var lang = "en";

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = text;
    return e;
  }
  function link(href, text, cls) {
    var a = el("a", cls, text);
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }
  function clear(node) { while (node && node.firstChild) node.removeChild(node.firstChild); }

  /* Pick the text for the current language.
     Accepts a plain value, or { en: ..., es: ... } (falls back to English). */
  function t(v) {
    if (v && typeof v === "object" && !Array.isArray(v) && ("en" in v || "es" in v)) {
      return (v[lang] !== undefined && v[lang] !== "") ? v[lang] : v.en;
    }
    return v;
  }
  function label(key) {
    var L = C.labels || {};
    var cur = L[lang] || {}, en = L.en || {};
    return cur[key] !== undefined ? cur[key] : en[key];
  }

  /* Small line-icons (not brand logos) so each link is easy to spot at a glance. */
  var ICONS = {
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg>',
    cv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9.3 13h5.4M9.3 16.3h5.4"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5l9-4 9 4-9 4-9-4z"/><path d="M7 11.3v3.7c0 1.4 2.3 2.8 5 2.8s5-1.4 5-2.8v-3.7"/><path d="M21 9.5v5.2"/></svg>',
    orcid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.3"/><ellipse cx="12" cy="12" rx="9" ry="3.3" transform="rotate(30 12 12)"/></svg>',
    researchgate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7.3 7.4L10.8 16.2M16.7 7.4L13.2 16.2M8 6h8"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M3 13h18"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4"/></svg>'
  };
  function iconLink(href, text, key) {
    var a = el("a", "icon-link");
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
    var g = el("span", "icon-link-glyph");
    if (ICONS[key]) g.innerHTML = ICONS[key];
    a.appendChild(g);
    a.appendChild(el("span", "icon-link-text", text));
    return a;
  }
  function paragraphs(text) {
    var frag = document.createDocumentFragment();
    String(text || "").split(/\n\s*\n/).forEach(function (p) {
      if (p.trim()) frag.appendChild(el("p", null, p.trim()));
    });
    return frag;
  }
  var tones = ["powder", "lavender", "sage", "peach", "butter"];
  function photoBox(src, alt, i) {
    if (src) {
      var im = el("img");
      im.src = src; im.alt = alt || "";
      return im;
    }
    var ph = el("div", "photo-ph tone-" + tones[i % tones.length]);
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", "Photo placeholder");
    return ph;
  }

  /* Old travel page, no longer used: send visitors home */
  if (document.body.getAttribute("data-page") === "place") {
    location.replace("index.html");
    return;
  }

  /* ---------- mobile menu ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var nav = $("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });
  }

  /* Author list with your own name in bold */
  function authorLine(text) {
    var authors = el("p", "pub-authors");
    var name = (C.profile || {}).citationName || "";
    var a = text || "";
    var idx = name ? a.indexOf(name) : -1;
    if (idx > -1) {
      var end = a.indexOf(",", idx + name.length);
      var next = end > -1 ? a.indexOf(",", end + 1) : -1;
      var stop = next > -1 ? next : a.length;
      authors.appendChild(document.createTextNode(a.slice(0, idx)));
      authors.appendChild(el("strong", null, a.slice(idx, stop)));
      authors.appendChild(document.createTextNode(a.slice(stop)));
    } else {
      authors.textContent = a;
    }
    return authors;
  }

  var typeClass = {
    "Journal article": "t-article",
    "Preprint": "t-preprint",
    "Journal article (in Spanish)": "t-spanish",
    "Under review": "t-review",
    "PhD thesis": "t-thesis"
  };
  function typeTag(type) {
    var names = label("pubTypes") || {};
    return el("span", "pub-type " + (typeClass[type] || "t-article"), names[type] || type);
  }
  function pubMeta(p) {
    var meta = el("p", "pub-meta");
    meta.appendChild(el("em", null, t(p.venue)));
    if (t(p.details)) meta.appendChild(document.createTextNode(", " + t(p.details)));
    return meta;
  }
  function pubActions(p) {
    if (!p.doi && !p.pdf) return null;
    var actions = el("div", "pub-actions");
    if (p.doi) actions.appendChild(link(p.doi, "DOI", "pub-btn"));
    if (p.pdf) actions.appendChild(link(p.pdf, "PDF", "pub-btn"));
    return actions;
  }

  /* =========================================================
     RENDER: builds every part of the page in the current language
     ========================================================= */
  function render() {
    var P = C.profile || {};
    document.documentElement.lang = lang;
    document.title = label("pageTitle") || P.name || "";
    var md = document.querySelector('meta[name="description"]');
    if (md && label("metaDescription")) md.setAttribute("content", label("metaDescription"));

    /* fixed labels in the HTML (menu, section titles, buttons) */
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      var v = label(n.getAttribute("data-i18n"));
      if (typeof v === "string") n.textContent = v;
    });
    document.querySelectorAll("[data-name]").forEach(function (n) { n.textContent = P.name || ""; });
    $("footer-copy").textContent = "© " + new Date().getFullYear() + " " + (P.name || "");

    /* language buttons */
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });

    /* ---------- profile ---------- */
    var img = $("portrait");
    if (P.photo && img.getAttribute("src") !== P.photo) img.src = P.photo;
    img.alt = t(P.photoAlt) || "";

    var role = $("role"); clear(role);
    [t(P.role), t(P.department), t(P.institution)].filter(Boolean).forEach(function (txt, i) {
      role.appendChild(el("span", i === 0 ? "role-title" : null, txt));
    });

    var bio = $("bio"); clear(bio);
    (t(P.bio) || []).forEach(function (txt) { bio.appendChild(el("p", null, txt)); });

    var ints = $("interests"); clear(ints);
    (t(P.interests) || []).forEach(function (txt) { ints.appendChild(el("li", null, txt)); });

    var edu = $("education"); clear(edu);
    (C.education || []).forEach(function (e) {
      var li = el("li");
      li.appendChild(el("strong", "edu-degree", t(e.degree)));
      if (t(e.place)) li.appendChild(el("span", "edu-place", t(e.place)));
      edu.appendChild(li);
    });

    var L = P.links || {};
    var linkDefs = [
      [P.publicEmail ? "mailto:" + P.publicEmail : "", label("email"), "email"],
      [t(P.cvFile), label("cv"), "cv"],
      [L.scholar, "Google Scholar", "scholar"],
      [L.orcid, "ORCID", "orcid"],
      [L.researchgate, "ResearchGate", "researchgate"],
      [L.linkedin, "LinkedIn", "linkedin"],
      [L.github, "GitHub", "github"]
    ].filter(function (d) { return d[0]; });

    var pl = $("profile-links"); clear(pl);
    linkDefs.forEach(function (d) {
      var li = el("li");
      li.appendChild(iconLink(d[0], d[1], d[2]));
      pl.appendChild(li);
    });

    /* ---------- research ---------- */
    var R = C.research || {};
    $("research-intro").textContent = t(R.intro) || "";
    var themes = $("themes"); clear(themes);
    (R.themes || []).forEach(function (th) {
      var art = el("article", "theme theme-" + (th.color || "powder"));
      art.appendChild(el("h3", null, t(th.title)));
      art.appendChild(el("p", null, t(th.text)));
      if (t(th.keywords)) art.appendChild(el("p", "keywords", t(th.keywords)));
      themes.appendChild(art);
    });
    var CP = R.currentProject;
    var pr = $("project"); clear(pr);
    if (CP && t(CP.title)) {
      pr.hidden = false;
      pr.appendChild(el("p", "project-label", label("currentProject")));
      var h = el("h3");
      if (CP.link) h.appendChild(link(CP.link, t(CP.title)));
      else h.textContent = t(CP.title);
      pr.appendChild(h);
      pr.appendChild(el("p", "project-text", t(CP.text)));
    } else {
      pr.hidden = true;
    }

    /* ---------- publications ---------- */
    var pubsBox = $("pubs"); clear(pubsBox);
    (C.publications || []).forEach(function (p, i) {
      var art = el("article", "pub");

      var fig = el("div", "pub-fig");
      var figInner = photoBox(p.image, t(p.imageAlt), i + 1);
      if (p.doi) {
        var fl = link(p.doi, "");
        fl.setAttribute("aria-label", t(p.title));
        fl.setAttribute("tabindex", "-1");
        fl.appendChild(figInner);
        fig.appendChild(fl);
      } else {
        fig.appendChild(figInner);
      }
      art.appendChild(fig);

      var txt = el("div", "pub-text");
      var top = el("div", "pub-top");
      top.appendChild(typeTag(p.type));
      if (/^\d{4}$/.test(p.year)) top.appendChild(el("span", "pub-year", p.year));
      txt.appendChild(top);

      var title = el("h3", "pub-title");
      if (p.doi) title.appendChild(link(p.doi, t(p.title))); else title.textContent = t(p.title);
      txt.appendChild(title);
      txt.appendChild(authorLine(p.authors));
      txt.appendChild(pubMeta(p));
      var act = pubActions(p);
      if (act) txt.appendChild(act);

      art.appendChild(txt);
      pubsBox.appendChild(art);
    });

    var collabs = C.collaborations || [];
    if (collabs.length) {
      pubsBox.appendChild(el("h3", "pubs-sub", label("collaborations")));
      collabs.forEach(function (p) {
        var art = el("article", "pub-compact");
        var top = el("div", "pub-top");
        top.appendChild(typeTag(p.type));
        if (/^\d{4}$/.test(p.year)) top.appendChild(el("span", "pub-year", p.year));
        art.appendChild(top);
        var title = el("h4", "pub-title");
        if (p.doi) title.appendChild(link(p.doi, t(p.title))); else title.textContent = t(p.title);
        art.appendChild(title);
        art.appendChild(authorLine(p.authors));
        art.appendChild(pubMeta(p));
        var act = pubActions(p);
        if (act) art.appendChild(act);
        pubsBox.appendChild(art);
      });
    }

    if (L.scholar) {
      var more = el("p", "pubs-more");
      more.appendChild(link(L.scholar, label("scholarMore")));
      pubsBox.appendChild(more);
    }

    /* ---------- personal note (folded, green band) ---------- */
    var PS = C.personal || {};
    if ($("personal")) {
      $("personal-title").textContent = t(PS.title) || "";
      $("personal-sub").textContent = t(PS.subtitle) || "";
      var ptext = $("personal-text"); clear(ptext);
      ptext.appendChild(paragraphs(t(PS.text)));
      var pimg = $("personal-photo");
      if (PS.photo) {
        if (pimg.getAttribute("src") !== PS.photo) pimg.src = PS.photo;
        pimg.alt = t(PS.photoAlt) || "";
        pimg.parentNode.hidden = false;
      } else {
        pimg.parentNode.hidden = true;
      }
      var cap = $("personal-caption");
      cap.textContent = t(PS.caption) || "";
      cap.hidden = !t(PS.caption);
    }

    /* ---------- contact ---------- */
    $("contact-address").textContent =
      [t(P.department), t(P.institution), t(P.location)].filter(Boolean).join(", ");
    var cl = $("contact-links"); clear(cl);
    linkDefs.forEach(function (d) {
      var li = el("li");
      var text = d[0].indexOf("mailto:") === 0 ? P.publicEmail : d[1];
      li.appendChild(iconLink(d[0], text, d[2]));
      cl.appendChild(li);
    });
  }

  /* =========================================================
     LANGUAGE CHOICE
     1. ?lang=es or ?lang=en in the address (handy for sharing)
     2. the visitor's last choice on this browser
     3. the browser's language (Spanish speakers get Spanish)
     ========================================================= */
  function storedLang() {
    try { return localStorage.getItem("site-lang"); } catch (e) { return null; }
  }
  function storeLang(l) {
    try { localStorage.setItem("site-lang", l); } catch (e) { /* private mode: ignore */ }
  }
  function pickLang() {
    var q = null;
    try { q = new URLSearchParams(location.search).get("lang"); } catch (e) {}
    if (LANGS.indexOf(q) > -1) return q;
    var s = storedLang();
    if (LANGS.indexOf(s) > -1) return s;
    var nl = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    return /^es\b/i.test(nl) ? "es" : "en";
  }
  function setLang(l) {
    if (LANGS.indexOf(l) < 0 || l === lang) return;
    lang = l;
    storeLang(l);
    render();
  }

  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  lang = pickLang();
  render();
})();
