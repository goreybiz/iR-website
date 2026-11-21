# iLL RAiSED website

The official site for iLL RAiSED, a NYHC band from Queens, NY. It's plain HTML, CSS and JavaScript, so there's no website builder, database or build step. It's hosted free on GitHub Pages.

- **Live (preview) site:** https://goreybiz.github.io/iR-website/
- **Domain:** illraised.com still points to the old GoDaddy site until the DNS cutover (see [Going live on illraised.com](#going-live-on-illraisedcom)).

---

## How updates go live
Every change pushed or committed to the `main` branch publishes automatically. GitHub Pages rebuilds the site in about 1–2 minutes.

1. Edit a file, either on github.com (open the file, click the pencil icon, then **Commit changes**) or ask Claude to make the change.
2. Wait 1–2 minutes. You can watch the publish in the repo's **Actions** tab: a yellow dot means it's publishing and a green check means it's live.
3. Open the site and press **Cmd + Shift + R** (Mac) or **Ctrl + Shift + R** (Windows) to force a full reload. Browsers keep old copies of files like `site-data.js` for up to about 10 minutes, so a normal refresh can show the old version.

> Right now changes go straight to `main` to keep things simple. To review changes before they go live, switch to pull requests: changes go to a separate branch, and you click **Merge** to publish them.

---

## Folder layout
```
index.html               Homepage
music/ shows/ gallery/   One folder per page, each with its own index.html.
articles/ about-ir/      This keeps URLs short (/shows, /music) and matches
booking/                 the old GoDaddy URLs.
css/style.css            All colors, fonts and layout
js/site-data.js          ← EDIT THIS for shows, videos, gallery and social links
js/main.js               Builds the menu, footer, NEXT SHOW bar, show list and gallery
images/                  Every image and video the site uses (see below)
```

The menu and footer are built by `js/main.js`, so each one is edited in a single place and appears on every page.

---

## Everyday edits (all in `js/site-data.js`)

### Shows
Shows are listed in `SHOWS`, newest first and grouped by year. Copy a line, paste it at the top and change the details:

```js
{ date: "2026-12-05", title: "La Armada", venue: "Lucky 13 Saloon", city: "NYC, NY", doors: "7PM",
  price: "$18/$20/$25 (DOS)", note: "*$20 at door with toy donation",
  lineup: ["LA ARMADA", "ISMADA", "FACA", "ENRAGE", "BLEED THE GODS", "iLL RAiSED"],
  tickets: "https://www.eventbrite.com/e/...", flyer: "images/flyers/2026-12-05.jpg" },
```

| Field | Required | What it does |
|---|---|---|
| `date` | yes | `"YYYY-MM-DD"`. Decides whether the show is upcoming or past and which year it's listed under. |
| `title` | yes | Event name. |
| `venue`, `city` | no | Shown as "Venue — City". |
| `doors` | no | Shown as "Doors: …". |
| `price` | no | Shown as "Entry: …". |
| `note` | no | An extra line in italics (e.g. a discount or age limit). |
| `lineup` | no | List of bands, shown under a red underlined "LINEUP:" label. Spell bands exactly as they should appear. |
| `tickets` | no | Ticket link (Eventbrite, KYD, Dice…). Adds a red **Tickets** button. |
| `flyer` | no | Path to the flyer image. Click it on the site to enlarge it. |

Leave any optional field as `""` or remove it.

**What happens automatically:**
- **NEXT SHOW bar** (red bar at the top of every page): shows the soonest upcoming show. It says **[TICKETS HERE]** and links to tickets if that show has a `tickets` link, and **[DETAILS]** linking to the Shows page if not. It hides itself when there are no upcoming shows.
- **Upcoming vs. past:** shows move from "Upcoming" to their year section the day after the show.
- **Ticket buttons** turn grey and unclickable once a show's date passes. They still say "Tickets", so it's clear tickets were sold.

**Flyers:** save them in `images/flyers/` named by date, e.g. `2026-12-05.jpg`. JPG, about 1200px on the long side, works well.

### Videos
The homepage Videos section lists YouTube videos in `VIDEOS`. The `id` is the part of the YouTube link after `watch?v=`:
```js
{ id: "9nFNVfhThzk", title: "Live @ Thunderbird Hall — Latin Punk Fest '26" },
```

### Social and streaming links
The footer buttons come from `SITE` at the top of `site-data.js`: Instagram, YouTube, Bandcamp, YouTube Music, Spotify, Apple Music and Tidal. To change a link, edit it there. To add a new button, add the link to `SITE` and a matching line in the footer section of `js/main.js`.

---

## Gallery

### Adding photos (the only required steps)
1. Upload the photo to `images/gallery/`.
2. Add it to `GALLERY` in `js/site-data.js`:
   ```js
   { src: "images/gallery/Gallery_Photo_33.JPG", alt: "Live at TV Eye, 2026" },
   ```
That's it, and the photo shows up right away. `alt` is a short description for screen readers and search engines. It's optional but recommended.

### Black and white
Add `bw: true` to show a photo in black and white:
```js
{ src: "images/gallery/Gallery_Photo_01.JPG", alt: "", bw: true },
```
This only changes how the photo is displayed. The file isn't changed, and removing `bw: true` brings the color back. The enlarged view matches.

### Thumbnails (optional, for speed)
The gallery grid loads a small copy of each photo from `images/gallery/thumbs/` (same file name). Clicking a photo opens the full-size copy.

- **If a thumbnail is missing,** the grid automatically shows the full photo instead, so nothing ever appears broken. It just loads slower.
- **To create thumbnails and shrink new photos,** ask Claude to *"process new gallery photos"*, or follow the specs below with any photo editor.

### Photo specs
| | Full-size (`images/gallery/`) | Thumbnail (`images/gallery/thumbs/`) |
|---|---|---|
| Size | 2400px on the long side | 800px on the long side |
| Format | JPEG, quality 85 (90–95 for grainy low-light shots) | JPEG, quality 80 |
| Typical file size | 0.3–1.8MB | 50–130KB |
| Other | Progressive, keep the color profile, remove GPS location data | Same name as the full-size file |

**Why these numbers:** the enlarged view is at most about 2,000px tall even on a 4K screen, so camera originals (5184px, up to 19MB) carry detail nobody can see and make the page very slow. When the current 32 photos were processed, each was checked against a perfect uncompressed resize using SSIM, a score of how alike two images look. Every photo scored at least 0.97 (average 0.99), which looks identical on screen. Keep camera originals somewhere else (not in this repo) as your master copies.

---

## Pages at a glance
| Page | File | Notes |
|---|---|---|
| Home | `index.html` | Silent looping video background with logo and buttons (Support us on Bandcamp, Upcoming Shows), then the latest release section with the Bandcamp player and a **Listen to more** button linking to Music, then Videos. Sections alternate black and grey. |
| Music | `music/index.html` | Bandcamp players stacked in the center. To add a release, paste Bandcamp's embed code (Share/Embed on the album page) inside `<div class="bc-embeds">`. |
| Shows | `shows/index.html` | Built from `SHOWS`. Upcoming first, then past shows by year. |
| Gallery | `gallery/index.html` | Built from `GALLERY`. |
| Articles | `articles/index.html` | One card per article. Copy the `<article class="card">` block to add more. |
| Booking | `booking/index.html` | Contact email (illraised@gmail.com). Clicking it opens the visitor's email app. |
| About iR | `about-ir/index.html` | Band photo and bio. |
| Press Kit | `epk/index.html` | illraised.com/epk. Preview of the EPK with Download PDF / JPG buttons. Linked from the Booking page, not the menu. To update the EPK, replace `epk/iLL-RAiSED-EPK.pdf` and `epk/iLL-RAiSED-EPK.jpg` with new files of the same name. |

**Menu order** is set in `NAV` at the top of `js/main.js`.

---

## Images and media (`images/`)
Everything loads from this repo. Nothing comes from GoDaddy.

| File | Used for |
|---|---|
| `logo.png` | Spray-can logo in the homepage video section |
| `logo-small.png` | Logo next to the band name in the menu bar |
| `favicon.png`, `apple-touch-icon.png` | Browser tab icon and phone home-screen icon |
| `hero-bg.mp4` | Homepage background video: silent, looping, compressed to about 3.8MB so it starts fast |
| `hero-poster.jpg` | Still frame shown while the video loads, and to visitors who've turned on "reduce motion" |
| `malcriados-cover.jpg` | Preview image when the site is shared on social media or in texts |
| `band.jpg` | About page photo |
| `article-knifetwister.jpg` | Articles page |
| `flyers/` | Show flyers named by date |
| `gallery/`, `gallery/thumbs/` | Gallery photos and their thumbnails |

The full-quality original promo video (21MB, with sound) isn't on the site. It's saved locally in `Downloads/illraised-media` along with all the original GoDaddy downloads.

---

## Look and feel
- **Colors and fonts:** set at the top of `css/style.css` (the `:root` block). Theme: near-black background, dark grey alternating sections, red accent (`--accent: #d71920`) for the NEXT SHOW bar, Tickets buttons and LINEUP labels.
- **Fonts:** Anton for headings and Inter for text, both from Google Fonts.
- **Band name styling:** headings are normally all caps. Add `class="keep-case"` to any text that must keep the band's spelling, like `iLL RAiSED` or `MALCRiADOS`.
- **Buttons:** `btn` is the red filled button and `btn btn-outline` is white-outlined, the style used for all homepage buttons and the footer.

---

## About the repo's size
Git keeps every past version of every file, so replaced files (like the original 108MB of gallery photos) stay in the repo's history. That means any old version can be restored, for example:
```
git checkout <commit-id> -- images/gallery/Gallery_Photo_17.JPG
```
It doesn't slow down the live site, which only publishes current files. It only makes the repo bigger to download. Removing old versions would mean rewriting the history permanently, which is only worth it if the repo gets close to GitHub's 1GB guideline.

---

## Going live on illraised.com
Do this when the site is ready to replace GoDaddy:
1. In the repo, go to **Settings → Pages → Custom domain** and enter `illraised.com`. Do this **before** changing DNS.
2. At your domain registrar (GoDaddy), update the DNS records to point to GitHub Pages (GitHub's "Managing a custom domain" guide lists the exact records).
3. Once GitHub verifies the domain, check **Enforce HTTPS**.
4. Only then cancel the GoDaddy Website Builder plan. You can keep the domain registered at GoDaddy.

After the switch, links shared on social media show the preview image from `https://illraised.com/images/malcriados-cover.jpg`.

---

## Preview locally
Run `python3 -m http.server` in this folder and open http://localhost:8000. Double-clicking `index.html` mostly works, but some features need the local server.
