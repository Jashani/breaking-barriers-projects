/* ===== Breaking Barriers to AI Safety — app.js ===== */
(function () {
  "use strict";

  var projects = window.PROJECTS || [];
  var GALLERY_COUNT = 11;
  var MEDALS = {
    1: { emoji: "🥇", label: "1st place" },
    2: { emoji: "🥈", label: "2nd place" },
    3: { emoji: "🥉", label: "3rd place" },
  };

  /* ---------- helpers ---------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function authorsLine(authors) {
    var names = (authors || []).map(function (a) { return a.name; });
    if (!names.length) return "";
    if (names.length === 1) return names[0];
    if (names.length === 2) return names[0] + " & " + names[1];
    return names.slice(0, -1).join(", ") + " & " + names[names.length - 1];
  }

  // Builds author names into `target` as text, linking those with a LinkedIn URL.
  function appendAuthors(target, authors) {
    var sep;
    authors.forEach(function (a, i) {
      if (i > 0) {
        sep = i === authors.length - 1 ? (authors.length === 2 ? " & " : ", & ") : ", ";
        target.appendChild(document.createTextNode(sep));
      }
      if (a.li) {
        var link = el("a", null, a.name);
        link.href = a.li;
        link.target = "_blank";
        link.rel = "noopener";
        target.appendChild(link);
      } else {
        target.appendChild(el("b", null, a.name));
      }
    });
  }

  /* ---------- render project cards ---------- */
  var grid = document.getElementById("grid");

  function makeCard(p, index) {
    var card = el("button", "card");
    card.type = "button";
    card.setAttribute("aria-haspopup", "dialog");

    if (p.award) {
      card.classList.add("card--winner", "card--winner-" + p.award);
      var medal = MEDALS[p.award];
      card.appendChild(el("span", "card__award", medal.emoji + " " + medal.label));
    }
    card.appendChild(el("span", "card__cat", p.category));
    card.appendChild(el("h3", "card__title", p.title));
    card.appendChild(el("p", "card__sub", p.subtitle));

    var auth = el("p", "card__authors");
    auth.appendChild(el("b", null, authorsLine(p.authors)));
    card.appendChild(auth);

    card.addEventListener("click", function () { openModal(index); });
    return card;
  }

  // Display order: award winners first (1st, 2nd, 3rd), then the rest in original order.
  var order = projects
    .map(function (_, i) { return i; })
    .sort(function (a, b) {
      var aw = projects[a].award || 99, bw = projects[b].award || 99;
      return aw !== bw ? aw - bw : a - b;
    });

  function renderCards(filter) {
    grid.innerHTML = "";
    order.forEach(function (i) {
      var p = projects[i];
      if (filter && filter !== "All" && p.category !== filter) return;
      grid.appendChild(makeCard(p, i));
    });
  }

  /* ---------- filters ---------- */
  var filtersEl = document.getElementById("filters");

  function buildFilters() {
    var cats = ["All"];
    projects.forEach(function (p) {
      if (cats.indexOf(p.category) === -1) cats.push(p.category);
    });
    cats.forEach(function (cat, i) {
      var b = el("button", "filter" + (i === 0 ? " is-active" : ""), cat);
      b.type = "button";
      b.addEventListener("click", function () {
        Array.prototype.forEach.call(filtersEl.children, function (c) { c.classList.remove("is-active"); });
        b.classList.add("is-active");
        renderCards(cat);
      });
      filtersEl.appendChild(b);
    });
  }

  /* ---------- project modal ---------- */
  var modal = document.getElementById("modal");
  var mAward = document.getElementById("modal-award");
  var mCat = document.getElementById("modal-cat");
  var mTitle = document.getElementById("modal-title");
  var mSub = document.getElementById("modal-subtitle");
  var mAuthors = document.getElementById("modal-authors");
  var mDesc = document.getElementById("modal-desc");
  var mLinks = document.getElementById("modal-links");
  var lastFocused = null;

  function openModal(index) {
    var p = projects[index];
    lastFocused = document.activeElement;

    if (p.award) {
      var medal = MEDALS[p.award];
      mAward.textContent = medal.emoji + " " + medal.label;
      mAward.className = "modal__award modal__award--" + p.award;
      mAward.hidden = false;
    } else {
      mAward.hidden = true;
    }
    mCat.textContent = p.category;
    mTitle.textContent = p.title;
    mSub.textContent = p.subtitle;

    mAuthors.innerHTML = "";
    var label = p.authors.length > 1 ? "Team: " : "By: ";
    mAuthors.appendChild(document.createTextNode(label));
    appendAuthors(mAuthors, p.authors);

    mDesc.innerHTML = "";
    p.description.split("\n\n").forEach(function (para) {
      mDesc.appendChild(el("p", null, para));
    });

    mLinks.innerHTML = "";
    if (p.links && p.links.length) {
      p.links.forEach(function (lnk) {
        var a = el("a", null, lnk.label);
        a.href = lnk.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.appendChild(document.createTextNode(" ↗"));
        mLinks.appendChild(a);
      });
    } else {
      mLinks.appendChild(el("span", "nolink", "Submitted as a document — no public link available."));
    }

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal__close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  modal.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-close")) closeModal();
  });

  /* ---------- gallery + lightbox ---------- */
  var galleryGrid = document.getElementById("gallery-grid");
  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightbox-img");
  var lbIndex = 0;

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function buildGallery() {
    for (var i = 1; i <= GALLERY_COUNT; i++) {
      (function (i) {
        var btn = el("button");
        // give a couple of photos extra height for a livelier mosaic
        if (i === 2 || i === 7) btn.className = "span-2";
        var img = el("img");
        img.src = "assets/gallery/thumb/g" + pad(i) + ".jpg";
        img.loading = "lazy";
        img.alt = "Hackathon photo " + i;
        btn.appendChild(img);
        btn.addEventListener("click", function () { openLightbox(i); });
        galleryGrid.appendChild(btn);
      })(i);
    }
  }

  function openLightbox(i) {
    lbIndex = i;
    lbImg.src = "assets/gallery/g" + pad(i) + ".jpg";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }
  function stepLightbox(dir) {
    lbIndex += dir;
    if (lbIndex < 1) lbIndex = GALLERY_COUNT;
    if (lbIndex > GALLERY_COUNT) lbIndex = 1;
    lbImg.src = "assets/gallery/g" + pad(lbIndex) + ".jpg";
  }

  lightbox.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-lb-close") || e.target === lightbox) closeLightbox();
    if (e.target.hasAttribute("data-lb-prev")) stepLightbox(-1);
    if (e.target.hasAttribute("data-lb-next")) stepLightbox(1);
  });

  /* ---------- keyboard ---------- */
  document.addEventListener("keydown", function (e) {
    if (!modal.hidden && e.key === "Escape") closeModal();
    if (!lightbox.hidden) {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") stepLightbox(-1);
      else if (e.key === "ArrowRight") stepLightbox(1);
    }
  });

  /* ---------- init ---------- */
  buildFilters();
  renderCards("All");
  buildGallery();
})();
