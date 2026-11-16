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
};

/* YouTube videos on the homepage. "id" is the part after watch?v= */
const VIDEOS = [
  { id: "9nFNVfhThzk", title: "iLL RAiSED" },
  { id: "STz8WgTzUbk", title: "Live @ Thunderbird Hall — Latin Punk Fest '26, Philly PA (Highlights)" },
  { id: "C4u-oR6Cs24", title: "58th Back To The NYHC Chronicles (Live @ Berlin)" },
];

/* Full show list.
   flyer: path to an image, e.g. "images/flyers/2026-12-05.jpg"
   tickets: link to Eventbrite / Dice / KYD, etc. */
const SHOWS = [
  // ---------- 2026 ----------
  { date: "2026-12-05", title: "La Armada", venue: "Lucky 13 Saloon", city: "NYC, NY", doors: "7PM", price: "$18–$20", tickets: "", flyer: "" },
  { date: "2026-11-07", title: "Phthalo Phest IV", venue: "The Meadows", city: "Brooklyn, NY", doors: "1:30PM", price: "$20+ (16+)", tickets: "", flyer: "" },
  { date: "2026-10-24", title: "Parkside Pub Hardcore Halloween", venue: "Parkside Pub", city: "Whitestone, NY", doors: "4PM", price: "Free", tickets: "", flyer: "" },
  { date: "2026-10-17", title: "Hardcore Show", venue: "Bridge and Tunnel Brewery", city: "Ridgewood, NY", doors: "7PM", price: "$10 (18+)", tickets: "", flyer: "" },
  { date: "2026-09-26", title: "Daytime Show", venue: "Gold Sounds", city: "Brooklyn, NY", doors: "2PM", price: "$10 adv / $15 door", tickets: "", flyer: "" },
  { date: "2026-09-19", title: "Knuckledown Records Presents", venue: "Bridge and Tunnel Brewery", city: "Ridgewood, NY", doors: "7PM", price: "$10", tickets: "", flyer: "" },
  { date: "2026-09-12", title: "Brooklyn Wreck Fest '26", venue: "TV Eye", city: "Ridgewood, NY", doors: "1PM", price: "$15 adv / $20 door (all ages)", tickets: "", flyer: "" },
  { date: "2026-07-26", title: "Knifetwister Records Birthday Bash", venue: "The Attic", city: "Brooklyn, NY", doors: "6PM", price: "$15 (21+)", tickets: "", flyer: "" },
  { date: "2026-07-12", title: "NY Hardcore Chronicles Presents", venue: "The Bowery Palace", city: "NYC, NY", doors: "2PM", price: "Free (16+)", tickets: "", flyer: "" },
  { date: "2026-06-20", title: "Upper Depot Punk Fest", venue: "Upper Depot", city: "Hudson, NY", doors: "2PM", price: "Free (all ages)", tickets: "", flyer: "" },
  { date: "2026-06-12", title: "Concrete to Rust Tour", venue: "Lurking Class Skate Shop", city: "Salisbury, MD", doors: "7PM doors / 8PM show", price: "All ages", tickets: "", flyer: "" },
  { date: "2026-05-23", title: "Latin Punk Fest '26", venue: "Thunder Bird Hall", city: "Philadelphia, PA", doors: "12PM", price: "All ages", tickets: "", flyer: "" },
  { date: "2026-05-03", title: "Poppy's Tavern PAHC", venue: "Poppy's Tavern", city: "Hatfield, PA", doors: "6PM", price: "$10 (all ages)", tickets: "", flyer: "" },
  { date: "2026-05-02", title: "Southside Dreams x Rockero Foo", venue: "One Allegiance Brewery", city: "Chicago Ridge, IL", doors: "4PM", price: "$20", tickets: "", flyer: "" },
  { date: "2026-02-28", title: "The Bunker", venue: "The Bunker", city: "Queens, NY", doors: "6PM", price: "$10", tickets: "", flyer: "" },

  // ---------- 2025 ----------
  { date: "2025-12-05", title: "Knuckledown", city: "Ridgewood, NY" },
  { date: "2025-10-31", title: "Halloween Night", city: "Rockaway Beach, NY" },
  { date: "2025-10-17", title: "Latino Hardcore Crew Fest 2", city: "LIC, NY" },
  { date: "2025-09-20", title: "Hardcore in the 914", city: "Ardsley, NY" },
  { date: "2025-08-30", title: "Agua Santa", city: "LIC, NY" },
  { date: "2025-07-13", title: "Malle Booking", city: "Brooklyn, NY" },
  { date: "2025-06-15", title: "El Bunker del Diablo", city: "LIC, NY" },
  { date: "2025-06-14", title: "Warrior Chronicles", city: "Oakdale, NY" },
  { date: "2025-05-16", title: "Gnomecore Productions", city: "Astoria, NY" },
  { date: "2025-03-28", title: "Stone Knife Records", city: "LIC, NY" },
  { date: "2025-03-16", title: "NYHC Chronicles at Berlin", city: "NYC, NY" },
  { date: "2025-02-08", title: "Knuckledown at Shillelagh", city: "Astoria, NY" },
  { date: "2025-01-25", title: "Benefit Show", city: "Astoria, NY" },
  { date: "2025-01-18", title: "Juampy Mom Benefit", city: "Ridgewood, NY" },

  // ---------- 2024 ----------
  { date: "2024-12-28", title: "Vatos Locos & Sunset Stoop", city: "Brooklyn, NY" },
  { date: "2024-12-13", title: "NYHC Chronicles at Our Wicked Lady", city: "Brooklyn, NY" },
  { date: "2024-11-23", title: "Latino Hardcore Crew Fest", city: "LIC, NY" },
  { date: "2024-09-28", title: "Mama Smokez", city: "Queens, NY" },
  { date: "2024-08-30", title: "Pineapple New York", city: "NYC, NY" },
  { date: "2024-05-04", title: "Orlando's Birthday Bash", city: "Wallingford, CT" },
  { date: "2024-04-27", title: "Ostara Gathering Night", city: "LIC, NY" },
  { date: "2024-04-11", title: "Queenz NYHC & King Mob", city: "Queens, NY" },
  { date: "2024-03-22", title: "Trashley Productions", city: "Kearny, NJ" },

  // ---------- 2023 ----------
  { date: "2023-01-25", title: "Gold Sounds", city: "Brooklyn, NY" },

  // ---------- 2022 ----------
  { date: "2022-07-30", title: "Summer Rooftop Bash", city: "Bushwick, NY" },
  { date: "2022-05-28", title: "Queenz NYHC & Pistabandas Unidas", city: "Queens, NY" },
  { date: "2022-05-13", title: "Knuckledown at Shillelagh", city: "Astoria, NY" },
  { date: "2022-02-12", title: "Roger Miret Benefit", city: "Queens, NY" },

  // ---------- 2021 ----------
  { date: "2021-12-17", title: "At the Shills", city: "Astoria, NY" },
  { date: "2021-11-27", title: "Metal-Punk-Hardcore Fest", city: "Queens, NY" },
  { date: "2021-11-06", title: "Non Residents Album Release", city: "Ridgewood, NY" },
  { date: "2021-10-10", title: "Non Residents Album Release", city: "Brooklyn, NY" },
  { date: "2021-09-11", title: "NYHC Never Forgets (outdoor)", city: "Queens, NY" },
];

/* Music page — Bandcamp players.
   To get an album's ID: on Bandcamp open the album → Share/Embed → Embed this album.
   In the code it gives you, find "album=" followed by a number, e.g. album=1234567890.
   Paste just that number into albumId. Newest release goes first. */
const RELEASES = [
  { title: "MALCRiADOS", url: "https://illraised.bandcamp.com/album/malcriados", albumId: "1555978148" },
  // { title: "Another release", url: "https://illraised.bandcamp.com/album/...", albumId: "" },
];

/* Gallery photos. Put image files in images/gallery/ and list them here. */
const GALLERY = [
  // { src: "images/gallery/photo1.jpg", alt: "Live at TV Eye, 2026" },
];
