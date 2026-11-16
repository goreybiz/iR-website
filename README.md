# iLL RAiSED website

This is a plain HTML, CSS and JavaScript site. It needs no builder, no database and no build step.

## Folder layout
```
index.html          Homepage
music/  shows/  gallery/  articles/  about-ir/  booking/   One folder per page (keeps your old URLs like /shows working)
css/style.css       All colors, fonts and layout
js/site-data.js     ← EDIT THIS to add shows, videos and gallery photos
js/main.js          Menu, footer, and code that builds the show and video lists
images/             Put your logo, promo video, flyers and photos here
```

## Everyday edits
- **Add a show:** open `js/site-data.js`, copy a line in `SHOWS`, paste it at the top and change the details. The "NEXT SHOW" bar and the Upcoming and Past sections update themselves based on the date.
- **Add a YouTube video:** add `{ id: "VIDEO_ID", title: "..." }` to `VIDEOS`.
- **Add gallery photos:** drop files into `images/gallery/` and list them in `GALLERY`.
- **Change colors or fonts:** edit the top of `css/style.css` (the `:root` block).
- **Change the menu:** edit `NAV` at the top of `js/main.js`.

## Images
All images and the promo video are stored in this repo under `images/`. Nothing loads from GoDaddy anymore.
- `images/flyers/` holds show flyers named by date (e.g. `2026-12-05.jpg`).
- `images/logo.png`, `logo-small.png`, `favicon.png` and `apple-touch-icon.png` are the logo and icons.
- `images/malcriados-cover.jpg`, `band.jpg` and `article-knifetwister.jpg` are page images.
- `images/hero-bg.mp4` is the silent looping homepage background (`hero-poster.jpg` shows while it loads).

## Still to fill in
- Gallery: add photos to `images/gallery/` and list them in `GALLERY`.
- Ticket links: add each show's Eventbrite/Dice/KYD URL in the `tickets` field.

## Free hosting options
- **Netlify** or **Cloudflare Pages:** drag and drop this folder onto their site. That's it.
- **GitHub Pages:** upload the folder to a GitHub repo and turn on Pages in the repo settings.
Then point illraised.com to the new host in your domain settings (each host has a step-by-step guide).

## Preview locally
Double-clicking `index.html` works for most things. For the most accurate preview, run `python3 -m http.server` in this folder and open http://localhost:8000.
