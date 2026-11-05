/*
  Builds the page from content.js.
  You normally don't need to edit this file.
*/
(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  if (!C) {
    console.error("content.js did not load. Check it for a missing comma or quotation mark.");
    return;
  }
  var P = C.profile || {};

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
  function exampleTag(item, parent) {
    if (item && item.isExample) parent.appendChild(el("span", "tag-example", "example"));
  }
  function paragraphs(text) {
    var frag = document.createDocumentFragment();
    String(text || "").split(/\n\s*\n/).forEach(function (p) {
      if (p.trim()) frag.appendChild(el("p", null, p.trim()));
    });
    return frag;
  }
  var tones = ["powder", "lavender", "sage", "peach", "butter"];
  function photoBox(src, alt, i, cls, eager) {
    if (src) {
      var im = el("img", cls || null);
      im.src = src; im.alt = alt || "";
      if (!eager) im.loading = "lazy";
      return im;
    }
    var ph = el("div", "photo-ph tone-" + tones[i % tones.length] + (cls ? " " + cls : ""));
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", "Photo placeholder");
    ph.appendChild(el("span", null, "Your photo"));
    return ph;
  }
  function formatDate(iso) {
    var d = new Date(iso + "T12:00:00");
    if (isNaN(d)) return iso;
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }

  /* ---------- shared bits ---------- */
  document.querySelectorAll("[data-name]").forEach(function (n) { n.textContent = P.name || ""; });
  var copy = $("footer-copy");
  if (copy) copy.textContent = "© " + new Date().getFullYear() + " " + (P.name || "");

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

  var page = document.body.getAttribute("data-page");
  if (page === "place") { renderPlace(); return; }

  /* ---------- profile ---------- */
  var img = $("portrait");
  if (P.photo) img.src = P.photo;
  img.alt = P.photoAlt || "";

  var role = $("role");
  [P.role, P.department, P.institution].filter(Boolean).forEach(function (t, i) {
    var s = el("span", i === 0 ? "role-title" : null, t);
    role.appendChild(s);
  });

  (P.bio || []).forEach(function (t) { $("bio").appendChild(el("p", null, t)); });
  (P.interests || []).forEach(function (t) { $("interests").appendChild(el("li", null, t)); });

  (C.education || []).forEach(function (e) {
    var li = el("li");
    li.appendChild(el("strong", "edu-degree", e.degree));
    if (e.place) li.appendChild(el("span", "edu-place", e.place));
    $("education").appendChild(li);
  });

  var L = P.links || {};
  var linkDefs = [
    [P.publicEmail ? "mailto:" + P.publicEmail : "", "Email", "email"],
    [P.cvFile, "CV (PDF)", "cv"],
    [L.scholar, "Google Scholar", "scholar"],
    [L.orcid, "ORCID", "orcid"],
    [L.researchgate, "ResearchGate", "researchgate"],
    [L.linkedin, "LinkedIn", "linkedin"],
    [L.github, "GitHub", "github"]
  ].filter(function (d) { return d[0]; });

  linkDefs.forEach(function (d) {
    var li = el("li");
    li.appendChild(iconLink(d[0], d[1], d[2]));
    $("profile-links").appendChild(li);
  });

  /* ---------- research ---------- */
  var R = C.research || {};
  $("research-intro").textContent = R.intro || "";
  (R.themes || []).forEach(function (t) {
    var art = el("article", "theme theme-" + (t.color || "powder"));
    art.appendChild(el("h3", null, t.title));
    art.appendChild(el("p", null, t.text));
    if (t.keywords) art.appendChild(el("p", "keywords", t.keywords));
    $("themes").appendChild(art);
  });
  if (R.currentProject && R.currentProject.title) {
    var pr = $("project");
    pr.hidden = false;
    pr.appendChild(el("p", "project-label", "Current project"));
    var h = el("h3");
    if (R.currentProject.link) h.appendChild(link(R.currentProject.link, R.currentProject.title));
    else h.textContent = R.currentProject.title;
    pr.appendChild(h);
    pr.appendChild(el("p", "project-text", R.currentProject.text));

    var meta = el("dl", "project-meta");
    [["Led by", R.currentProject.ledBy],
     ["Funded by", R.currentProject.funder],
     ["Field sites", R.currentProject.countries]].forEach(function (m) {
      if (!m[1]) return;
      meta.appendChild(el("dt", null, m[0]));
      meta.appendChild(el("dd", null, m[1]));
    });
    if (meta.children.length) pr.appendChild(meta);

      }

  /* ---------- publications ---------- */
  var typeClass = {
    "Journal article": "t-article",
    "Preprint": "t-preprint",
    "Journal article (in Spanish)": "t-spanish",
    "Under review": "t-review",
    "PhD thesis": "t-thesis"
  };

  /* Author list with your own name in bold */
  function authorLine(text) {
    var authors = el("p", "pub-authors");
    var name = P.citationName || "";
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
  var pubsBox = $("pubs");
  (C.publications || []).forEach(function (p, i) {
    var art = el("article", "pub");

    var fig = el("div", "pub-fig");
    var figInner = photoBox(p.image, p.imageAlt, i + 1, null, true);
    if (p.doi) {
      var fl = link(p.doi, "");
      fl.setAttribute("aria-label", "Read: " + p.title);
      fl.setAttribute("tabindex", "-1");
      fl.appendChild(figInner);
      fig.appendChild(fl);
    } else {
      fig.appendChild(figInner);
    }
    art.appendChild(fig);

    var txt = el("div", "pub-text");
    var top = el("div", "pub-top");
    top.appendChild(el("span", "pub-type " + (typeClass[p.type] || "t-article"), p.type));
    if (/^\d{4}$/.test(p.year)) top.appendChild(el("span", "pub-year", p.year));
    txt.appendChild(top);

    var title = el("h3", "pub-title");
    if (p.doi) title.appendChild(link(p.doi, p.title)); else title.textContent = p.title;
    txt.appendChild(title);

    txt.appendChild(authorLine(p.authors));

    var meta = el("p", "pub-meta");
    meta.appendChild(el("em", null, p.venue));
    if (p.details) meta.appendChild(document.createTextNode(", " + p.details));
    txt.appendChild(meta);

    if (p.doi || p.pdf) {
      var actions = el("div", "pub-actions");
      if (p.doi) actions.appendChild(link(p.doi, "DOI", "pub-btn"));
      if (p.pdf) actions.appendChild(link(p.pdf, "PDF", "pub-btn"));
      txt.appendChild(actions);
    }
    art.appendChild(txt);
    pubsBox.appendChild(art);
  });
  var collabs = C.collaborations || [];
  if (collabs.length) {
    pubsBox.appendChild(el("h3", "pubs-sub", "Collaborations"));
    collabs.forEach(function (p) {
      var art = el("article", "pub-compact");
      var top = el("div", "pub-top");
      top.appendChild(el("span", "pub-type " + (typeClass[p.type] || "t-article"), p.type));
      if (/^\d{4}$/.test(p.year)) top.appendChild(el("span", "pub-year", p.year));
      art.appendChild(top);
      var title = el("h4", "pub-title");
      if (p.doi) title.appendChild(link(p.doi, p.title)); else title.textContent = p.title;
      art.appendChild(title);
      art.appendChild(authorLine(p.authors));
      var meta = el("p", "pub-meta");
      meta.appendChild(el("em", null, p.venue));
      if (p.details) meta.appendChild(document.createTextNode(", " + p.details));
      art.appendChild(meta);
      if (p.doi || p.pdf) {
        var actions = el("div", "pub-actions");
        if (p.doi) actions.appendChild(link(p.doi, "DOI", "pub-btn"));
        if (p.pdf) actions.appendChild(link(p.pdf, "PDF", "pub-btn"));
        art.appendChild(actions);
      }
      pubsBox.appendChild(art);
    });
  }

  if (L.scholar) {
    var more = el("p", "pubs-more");
    more.appendChild(link(L.scholar, "Full list on Google Scholar"));
    pubsBox.appendChild(more);
  }

  /* ---------- personal note (folded, green band) ---------- */
  var PS = C.personal || {};
  if ($("personal")) {
    if (PS.title) $("personal-title").textContent = PS.title;
    if (PS.subtitle) $("personal-sub").textContent = PS.subtitle;
    $("personal-text").appendChild(paragraphs(PS.text));
    var pimg = $("personal-photo");
    if (PS.photo) {
      pimg.src = PS.photo;
      pimg.alt = PS.photoAlt || "";
    } else {
      pimg.parentNode.hidden = true;
    }
    var cap = $("personal-caption");
    if (PS.caption) cap.textContent = PS.caption; else cap.hidden = true;
  }

  /* ---------- contact ---------- */
  $("contact-address").textContent = [P.department, P.institution, P.location].filter(Boolean).join(", ");
  linkDefs.forEach(function (d) {
    var li = el("li");
    var label = d[0].indexOf("mailto:") === 0 ? P.publicEmail : d[1];
    li.appendChild(iconLink(d[0], label, d[2]));
    $("contact-links").appendChild(li);
  });

  /* ---------- single place page ---------- */
  function renderPlace() {
    var slug = new URLSearchParams(location.search).get("p");
    var list = C.places || [];
    var idx = -1;
    list.forEach(function (x, i) { if (x.slug === slug) idx = i; });
    var box = $("place");
    if (idx < 0) {
      var nf = el("div", "wrap place-narrow");
      nf.appendChild(el("h1", "place-h1", "Place not found"));
      nf.appendChild(el("p", null, "This page may have been renamed or removed. Go back to the homepage to see all places."));
      box.appendChild(nf);
      return;
    }
    var pl = list[idx];
    document.title = pl.title + " · " + (P.name || "");

    var head = el("header", "wrap place-narrow");
    var where = el("p", "place-where");
    where.appendChild(el("span", null, pl.place));
    if (pl.when) where.appendChild(el("span", "place-when", pl.when));
    exampleTag(pl, where);
    head.appendChild(where);
    head.appendChild(el("h1", "place-h1", pl.title));
    box.appendChild(head);

    var hero = el("div", "wrap place-hero");
    hero.appendChild(photoBox(pl.photo, pl.photoAlt, idx));
    box.appendChild(hero);

    var body = el("div", "wrap place-narrow place-body");
    body.appendChild(paragraphs(pl.body));
    box.appendChild(body);

    var g = pl.gallery || [];
    if (g.length) {
      var gal = el("div", "wrap place-gallery");
      g.forEach(function (ph, j) {
        var f = el("figure");
        f.appendChild(photoBox(ph.image, ph.caption, idx + j + 1));
        if (ph.caption) f.appendChild(el("figcaption", null, ph.caption));
        gal.appendChild(f);
      });
      box.appendChild(gal);
    }

    if (list.length > 1) {
      var nx = list[(idx + 1) % list.length];
      var nav = $("place-next");
      nav.appendChild(el("span", "place-next-label", "Next place"));
      nav.appendChild(link("place.html?p=" + encodeURIComponent(nx.slug), nx.place));
    }
  }
})();
