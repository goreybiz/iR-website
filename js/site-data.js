/* ==========================================================
   iLL RAiSED — SITE DATA
   This is the ONE file you edit to update shows and videos.
   - Add a new show: copy one { ... } block, paste it at the top
     of the list, and change the details.
   - Dates use "YYYY-MM-DD". Upcoming shows are worked out
     automatically, and the "NEXT SHOW" bar at the top of every
     page updates itself.
   - Leave a field as "" if you don't have it.
   ========================================================== */

const SITE = {
  bandName: "iLL RAiSED",
  bandcampAlbum: "https://illraised.bandcamp.com/album/malcriados",
  instagram: "https://www.instagram.com/illraisednyhc/",
  youtube: "https://www.youtube.com/@illraisednyhc5924",
  youtubeMusic: "https://music.youtube.com/channel/UCHFZW3CX7jYK66lson-gdkQ",
  spotify: "https://open.spotify.com/artist/1PlZLLI6GjfDeDgdcFjAoY",
  appleMusic: "https://music.apple.com/us/artist/ill-raised/1760883087",
  tidal: "https://tidal.com/artist/ill-raised/49503453",
};

/* YouTube videos on the homepage. "id" is the part after watch?v= */
const VIDEOS = [
  { id: "9nFNVfhThzk", title: "Live @ Thunderbird Hall — Latin Punk Fest '26, Philly PA (Highlights)" },
  { id: "STz8WgTzUbk", title: "58th Back To The NYHC Chronicles (Live @ Berlin)" },
  { id: "C4u-oR6Cs24", title: "T.D.M. Music Video" },
];

/* Full show list.
   flyer: put the flyer in images/flyers/ named by date (e.g. 2026-12-05.jpg) and set the path here
   tickets: link to Eventbrite / Dice / KYD, etc.
   Optional: note: "extra line of info", lineup: ["Band 1", "Band 2", ...] */
const SHOWS = [
  // ---------- 2026 ----------
  { date: "2026-12-05", title: "La Armada", venue: "Lucky 13 Saloon", city: "NYC, NY", doors: "7PM",
    price: "$18/$20/$25 (DOS)", note: "*$20 at door with toy donation",
    lineup: ["LA ARMADA", "ISMADA", "FACA", "ENRAGE", "BLEED THE GODS", "iLL RAiSED"],
    tickets: "https://www.eventbrite.com/e/la-armada-lucky-13-saloon-tickets-1999443872446", flyer: "images/flyers/2026-12-05.jpg" },
  { date: "2026-11-07", title: "Phthalo Phest IV", venue: "The Meadows", city: "Brooklyn, NY", doors: "1:30PM", price: "$20+ (16+)", tickets: "https://kydlabs.com/e/EV2e7e8050-85ba-4402-bc6b-5c7dea647398?referral_id=g-84657455-632e-41db-b0d6-8a943fe1aac5", lineup: ["20 BANDS"], flyer: "images/flyers/2026-11-07.jpg" },
  { date: "2026-10-24", title: "Parkside Pub Hardcore Halloween", venue: "Parkside Pub", city: "Whitestone, NY", doors: "4PM", price: "Free", tickets: "", lineup: ["RBNX", "SCR", "RUST EATER", "CHAKA", "HOSTILE INTENT", "iLL RAiSED", "GLITHC", "VIPERS IN THE GRASS"], flyer: "images/flyers/2026-10-24.jpg" },
  { date: "2026-10-17", title: "Hardcore Show", venue: "Bridge and Tunnel Brewery", city: "Ridgewood, NY", doors: "7PM", price: "$10 (18+)", tickets: "", lineup: ["BEAST FROM THE EAST", "iLL RAiSED", "FURiA", "NO WEAPON FORMED", "SINICYST"], flyer: "images/flyers/2026-10-17.jpg" },
  { date: "2026-09-26", title: "Daytime Show", venue: "Gold Sounds", city: "Brooklyn, NY", doors: "2PM", price: "$10 adv / $15 door", tickets: "", lineup: ["iLL RAiSED", "SQUEAMISH", "FURIA", "DIMMING"], flyer: "images/flyers/2026-09-26.jpg" },
  { date: "2026-09-19", title: "Knuckledown Records Presents", venue: "Bridge and Tunnel Brewery", city: "Ridgewood, NY", doors: "7PM", price: "$10", tickets: "", lineup: ["BUT, PYRITE", "iLL RAiSED", "ITALIAN BLOOD", "FUGU"], flyer: "images/flyers/2026-09-19.jpg" },
  { date: "2026-09-12", title: "Brooklyn Wreck Fest '26", venue: "TV Eye", city: "Ridgewood, NY", doors: "1PM", price: "$15 adv / $20 door (all ages)", tickets: "", lineup: ["NON-RESIDENTS", "GOOD TEAL", "TOUGH LUCK", "DIMMING", "MAJUNCHE", "DEATH ISLAND", "iLL RAiSED", "DISSIPATE", "50 DAYS OF ILIAM", "IRON GRIP", "FUGU", "ATROCIOUS", "MUDCUTTER", "PHNS"], flyer: "images/flyers/2026-09-12.jpg" },
  { date: "2026-07-26", title: "Knifetwister Records Birthday Bash", venue: "The Attic", city: "Brooklyn, NY", doors: "6PM", price: "$15 (21+)", tickets: "", lineup: ["GOOF GOBLIN", "NO CALL NO SHOW", "iLL RAiSED", "COP/OUT"], flyer: "images/flyers/2026-07-26.jpg" },
  { date: "2026-07-12", title: "NY Hardcore Chronicles Presents", venue: "The Bowery Palace", city: "NYC, NY", doors: "2PM", price: "Free (16+)", tickets: "", lineup: ["FAIL YOU", "NAILED TO THE CROSS", "iLL RAiSED", "TOTAL MELTDOWN", "CARLOS THE CHORDS", "HEDZO"], flyer: "images/flyers/2026-07-12.jpg" },
  { date: "2026-06-20", title: "Upper Depot Punk Fest", venue: "Upper Depot", city: "Hudson, NY", doors: "2PM", price: "Free (all ages)", tickets: "", lineup: ["HOMEBODIES", "GRIEF GROUP", "iLL RAiSED", "NICE TRY KID", "BRICK WINDOWS"], flyer: "images/flyers/2026-06-20.jpg" },
  { date: "2026-06-12", title: "Concrete to Rust Tour", venue: "Lurking Class Skate Shop", city: "Salisbury, MD", doors: "7PM doors / 8PM show", price: "All ages", tickets: "", flyer: "images/flyers/2026-06-12.jpg" },
  { date: "2026-05-23", title: "Latin Punk Fest '26", venue: "Thunder Bird Hall", city: "Philadelphia, PA", doors: "12PM", price: "All ages", tickets: "", flyer: "images/flyers/2026-05-23.jpg" },
  { date: "2026-05-03", title: "Poppy's Tavern PAHC", venue: "Poppy's Tavern", city: "Hatfield, PA", doors: "6PM", price: "$10 (all ages)", tickets: "", flyer: "images/flyers/2026-05-03.jpg" },
  { date: "2026-05-02", title: "Southside Dreams x Rockero Foo", venue: "One Allegiance Brewery", city: "Chicago Ridge, IL", doors: "4PM", price: "$20", tickets: "", flyer: "images/flyers/2026-05-02.jpg" },
  { date: "2026-02-28", title: "The Bunker", venue: "The Bunker", city: "Queens, NY", doors: "6PM", price: "$10", tickets: "", flyer: "images/flyers/2026-02-28.jpg" },

  // ---------- 2025 ----------
  { date: "2025-12-05", title: "Knuckledown", city: "Ridgewood, NY", flyer: "images/flyers/2025-12-05.jpg" },
  { date: "2025-10-31", title: "Halloween Night", city: "Rockaway Beach, NY", flyer: "images/flyers/2025-10-31.jpg" },
  { date: "2025-10-17", title: "Latino Hardcore Crew Fest 2", city: "LIC, NY", flyer: "images/flyers/2025-10-17.jpg" },
  { date: "2025-09-20", title: "Hardcore in the 914", city: "Ardsley, NY", flyer: "images/flyers/2025-09-20.jpg" },
  { date: "2025-08-30", title: "Agua Santa", city: "LIC, NY", flyer: "images/flyers/2025-08-30.jpg" },
  { date: "2025-07-13", title: "Malle Booking", city: "Brooklyn, NY", flyer: "images/flyers/2025-07-13.jpg" },
  { date: "2025-06-15", title: "El Bunker del Diablo", city: "LIC, NY", flyer: "images/flyers/2025-06-15.jpg" },
  { date: "2025-06-14", title: "Warrior Chronicles", city: "Oakdale, NY", flyer: "images/flyers/2025-06-14.jpg" },
  { date: "2025-05-16", title: "Gnomecore Productions", city: "Astoria, NY", flyer: "images/flyers/2025-05-16.jpg" },
  { date: "2025-03-28", title: "Stone Knife Records", city: "LIC, NY", flyer: "images/flyers/2025-03-28.jpg" },
  { date: "2025-03-16", title: "NYHC Chronicles at Berlin", city: "NYC, NY", flyer: "images/flyers/2025-03-16.jpg" },
  { date: "2025-02-08", title: "Knuckledown at Shillelagh", city: "Astoria, NY", flyer: "images/flyers/2025-02-08.jpg" },
  { date: "2025-01-25", title: "Benefit Show", city: "Astoria, NY", flyer: "images/flyers/2025-01-25.jpg" },
  { date: "2025-01-18", title: "Juampy Mom Benefit", city: "Ridgewood, NY", flyer: "images/flyers/2025-01-18.jpg" },

  // ---------- 2024 ----------
  { date: "2024-12-28", title: "Vatos Locos & Sunset Stoop", city: "Brooklyn, NY", flyer: "images/flyers/2024-12-28.jpg" },
  { date: "2024-12-13", title: "NYHC Chronicles at Our Wicked Lady", city: "Brooklyn, NY", flyer: "images/flyers/2024-12-13.jpg" },
  { date: "2024-11-23", title: "Latino Hardcore Crew Fest", city: "LIC, NY", flyer: "images/flyers/2024-11-23.jpg" },
  { date: "2024-09-28", title: "Mama Smokez", city: "Queens, NY", flyer: "images/flyers/2024-09-28.jpg" },
  { date: "2024-08-30", title: "Pineapple New York", city: "NYC, NY", flyer: "images/flyers/2024-08-30.jpg" },
  { date: "2024-05-04", title: "Orlando's Birthday Bash", city: "Wallingford, CT", flyer: "images/flyers/2024-05-04.jpg" },
  { date: "2024-04-27", title: "Ostara Gathering Night", city: "LIC, NY", flyer: "images/flyers/2024-04-27.jpg" },
  { date: "2024-04-11", title: "Queenz NYHC & King Mob", city: "Queens, NY", flyer: "images/flyers/2024-04-11.jpg" },
  { date: "2024-03-22", title: "Trashley Productions", city: "Kearny, NJ", flyer: "images/flyers/2024-03-22.jpg" },
  { date: "2024-01-25", title: "Gold Sounds", city: "Brooklyn, NY", flyer: "images/flyers/2024-01-25.jpg" },


  // ---------- 2022 ----------
  { date: "2022-07-30", title: "Summer Rooftop Bash", city: "Bushwick, NY", flyer: "images/flyers/2022-07-30.jpg" },
  { date: "2022-05-28", title: "Queenz NYHC & Pistabandas Unidas", city: "Queens, NY", flyer: "images/flyers/2022-05-28.jpg" },
  { date: "2022-05-13", title: "Knuckledown at Shillelagh", city: "Astoria, NY", flyer: "images/flyers/2022-05-13.jpg" },
  { date: "2022-02-12", title: "Roger Miret Benefit", city: "Queens, NY", flyer: "images/flyers/2022-02-12.jpg" },

  // ---------- 2021 ----------
  { date: "2021-12-17", title: "At the Shills", city: "Astoria, NY", flyer: "images/flyers/2021-12-17.jpg" },
  { date: "2021-11-27", title: "Metal-Punk-Hardcore Fest", city: "Queens, NY", flyer: "images/flyers/2021-11-27.jpg" },
  { date: "2021-11-06", title: "Non Residents Album Release", city: "Ridgewood, NY", flyer: "images/flyers/2021-11-06.jpg" },
  { date: "2021-10-10", title: "Non Residents Album Release", city: "Brooklyn, NY", flyer: "images/flyers/2021-10-10.jpg" },
  { date: "2021-09-11", title: "NYHC Never Forgets (outdoor)", city: "Queens, NY", flyer: "images/flyers/2021-09-11.jpg" },
];

/* Music page: the Bandcamp players are pasted directly into music/index.html. */

/* Gallery photos. Put image files in images/gallery/ and list them here.
   Each photo also needs a small copy with the same name in images/gallery/thumbs/
   (ask Claude to "process new gallery photos" and it will make these for you).
   Black and white: add  bw: true  to a photo, e.g.
   { src: "images/gallery/Gallery_Photo_01.JPG", alt: "", bw: true }, */
const GALLERY = [
  // { src: "images/gallery/photo1.jpg", alt: "Live at TV Eye, 2026" },
  { src: "images/gallery/Gallery_Photo_01.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_02.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_03.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_04.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_05.JPG", alt: "", bw: true },
  { src: "images/gallery/Gallery_Photo_06.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_07.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_08.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_09.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_10.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_11.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_12.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_13.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_14.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_15.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_16.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_17.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_18.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_19.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_20.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_21.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_22.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_23.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_24.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_25.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_26.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_27.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_28.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_29.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_30.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_31.JPG", alt: "" },
  { src: "images/gallery/Gallery_Photo_32.JPG", alt: "" },
];
