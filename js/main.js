/* ==========================================================
   iLL RAiSED — shared header, footer and page features.
   The menu lives here, so you only edit it in one place.
   ========================================================== */
(function () {
  const root = document.body.dataset.root || "";   // "" on home, "../" on sub-pages
  const page = document.body.dataset.page || "";

  const NAV = [
    { label: "Home", href: "", key: "home" },
    { label: "Music", href: "music/", key: "music" },
    { label: "Shows", href: "shows/", key: "shows" },
    { label: "Videos", href: "#videos", key: "videos" },
    { label: "Gallery", href: "gallery/", key: "gallery" },
    { label: "Articles", href: "articles/", key: "articles" },
    { label: "About iR", href: "about-ir/", key: "about" },
  ];

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const link = (href) => (href.startsWith("#") ? root + "index.html" + href : root + (href || "index.html"));

  // ---------- Dates ----------
  const parse = (d) => { const [y, m, day] = d.split("-").map(Number); return new Date(y, m - 1, day); };
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const shortDate = (d) => { const x = parse(d); return `${x.getMonth() + 1}/${x.getDate()}`; };
  const shows = (typeof SHOWS !== "undefined" ? SHOWS : []).slice().sort((a, b) => parse(b.date) - parse(a.date));
  const upcoming = shows.filter((s) => parse(s.date) >= today).reverse(); // soonest first
  const past = shows.filter((s) => parse(s.date) < today);

  // ---------- Header ----------
  const next = upcoming[0];
  const announce = next
    ? `<a class="announce" href="${esc(next.tickets || root + "shows/")}"${next.tickets ? ' target="_blank" rel="noopener"' : ""}>
         NEXT SHOW: ${shortDate(next.date)} — ${esc(next.venue || next.title).toUpperCase()} ${next.tickets ? "[TICKETS HERE]" : "[DETAILS]"}
       </a>`
    : "";

  const header = document.getElementById("site-header");
  if (header) {
    header.outerHTML = `${announce}
      <header class="site-header">
        <div class="container nav-wrap">
          <a class="logo" href="${root}index.html">iLL RAiSED</a>
          <button class="nav-toggle" aria-label="Menu" aria-expanded="false">☰</button>
          <ul class="nav-links">
            ${NAV.map((n) => `<li><a href="${link(n.href)}"${n.key === page ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("")}
          </ul>
        </div>
      </header>`;
    const btn = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-links");
    btn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
    menu.addEventListener("click", (e) => { if (e.target.tagName === "A") menu.classList.remove("open"); });
  }

  // ---------- Footer ----------
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.outerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="social" style="margin-bottom:1rem">
            <a class="btn btn-outline btn-sm" href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a>
            <a class="btn btn-outline btn-sm" href="${SITE.youtube}" target="_blank" rel="noopener">YouTube</a>
            <a class="btn btn-outline btn-sm" href="${SITE.bandcampAlbum}" target="_blank" rel="noopener">Bandcamp</a>
          </div>
          Copyright © ${new Date().getFullYear()} iLL RAiSED — All Rights Reserved.
        </div>
      </footer>`;
  }

  // ---------- Videos (homepage) ----------
  const videoGrid = document.getElementById("video-grid");
  if (videoGrid && typeof VIDEOS !== "undefined") {
    videoGrid.innerHTML = VIDEOS.map((v) => `
      <div>
        <div class="embed">
          <iframe src="https://www.youtube-nocookie.com/embed/${esc(v.id)}" title="${esc(v.title)}" loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p class="video-title">${esc(v.title)}</p>
      </div>`).join("");
  }

  // ---------- Shows ----------
  const showRow = (s) => `
    <article class="show">
      ${s.flyer ? `<img class="show-flyer" src="${root + esc(s.flyer)}" alt="${esc(s.title)} flyer" loading="lazy">` : `<div class="show-date">${shortDate(s.date)}</div>`}
      <div>
        <h3 class="show-title">${esc(s.title)}</h3>
        <p class="show-meta">
          ${s.flyer ? `<strong>${shortDate(s.date)}</strong> · ` : ""}${[s.venue, s.city].filter(Boolean).map(esc).join(" — ")}
          ${s.doors || s.price ? `<br>${[s.doors && "Doors " + s.doors, s.price].filter(Boolean).map(esc).join(" · ")}` : ""}
        </p>
      </div>
      ${s.tickets ? `<a class="btn btn-sm" href="${esc(s.tickets)}" target="_blank" rel="noopener">Tickets</a>` : "<span></span>"}
    </article>`;

  const upEl = document.getElementById("upcoming-shows");
  if (upEl) {
    upEl.innerHTML = upcoming.length
      ? upcoming.map(showRow).join("")
      : `<p class="muted">No shows announced right now — follow us on <a href="${SITE.instagram}">Instagram</a> for updates.</p>`;
  }

  const pastEl = document.getElementById("past-shows");
  if (pastEl) {
    const byYear = {};
    past.forEach((s) => (byYear[s.date.slice(0, 4)] ??= []).push(s));
    pastEl.innerHTML = Object.keys(byYear).sort().reverse().map((y) => `
      <h2 class="year-heading">${y}</h2>
      ${y === String(today.getFullYear()) && byYear[y].some((s) => s.venue)
        ? byYear[y].map(showRow).join("")
        : `<ul class="past-list">${byYear[y].map((s) =>
            `<li><span class="d">${shortDate(s.date)}</span>${esc(s.title)}${s.city ? ` <span class="muted">— ${esc(s.city)}</span>` : ""}</li>`).join("")}</ul>`}
    `).join("");
  }

  // ---------- Gallery ----------
  const gal = document.getElementById("gallery-grid");
  if (gal && typeof GALLERY !== "undefined") {
    if (GALLERY.length) {
      gal.innerHTML = GALLERY.map((g) => `<img src="${root + esc(g.src)}" alt="${esc(g.alt)}" loading="lazy">`).join("");
      const lb = document.createElement("div");
      lb.className = "lightbox";
      lb.innerHTML = "<img alt=''>";
      document.body.appendChild(lb);
      gal.addEventListener("click", (e) => {
        if (e.target.tagName !== "IMG") return;
        lb.firstChild.src = e.target.src; lb.firstChild.alt = e.target.alt; lb.classList.add("open");
      });
      lb.addEventListener("click", () => lb.classList.remove("open"));
    } else {
      gal.outerHTML = `<p class="todo">Add photos: put image files in <code>images/gallery/</code> and list them in <code>js/site-data.js</code> under GALLERY.</p>`;
    }
  }
})();
