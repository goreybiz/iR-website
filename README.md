# iLL RAiSED website

This is a plain HTML, CSS and JavaScript site. It needs no builder, no database and no build step.

## Folder layout
```
index.html          Homepage
music/  shows/  gallery/  articles/  about-ir/   One folder per page (keeps your old URLs like /shows working)
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

## Before you cancel GoDaddy (important)
The logo and promo video are still loaded from GoDaddy's servers (`img1.wsimg.com`). Those links will break when the account closes.
1. Download the logo, the promo video, show flyers and gallery photos from GoDaddy.
2. Save them in `images/`. Then search the files for `wsimg.com` and point each one to your copy, e.g. `images/logo.png`.

## Still to fill in
- Music, Articles and About pages contain placeholders (look for the red dashed boxes).
- Ticket links: add each show's Eventbrite/Dice/KYD URL in the `tickets` field.

## Free hosting options
- **Netlify** or **Cloudflare Pages:** drag and drop this folder onto their site. That's it.
- **GitHub Pages:** upload the folder to a GitHub repo and turn on Pages in the repo settings.
Then point illraised.com to the new host in your domain settings (each host has a step-by-step guide).

## Preview locally
Double-clicking `index.html` works for most things. For the most accurate preview, run `python3 -m http.server` in this folder and open http://localhost:8000.
