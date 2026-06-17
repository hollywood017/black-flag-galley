// Single source of truth for Black Flag Galley OBX.
// Update values here once owner confirms address / phone / hours / menu.

const U = (id: string, w = 1600, h = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=70`;

export const BUSINESS = {
  name: "Black Flag Galley",
  tagline: "Fresh Bites · Local Seafood",
  shortDescription:
    "Local seafood, fresh bites, and cold drinks in Kitty Hawk, NC. Captain Lance & Fran Marler at the helm.",
  description:
    "Black Flag Galley is a Kitty Hawk seafood spot from Captain Lance & Fran Marler — fresh-off-the-boat fish, salty-dog cooking, and meals to-go. Tied to the Black Flag Fishing OBX charter fleet. Opening soon on the Outer Banks.",
  // TODO: confirm with owner pre-launch
  isOpen: false,
  openingNote: "Opening Soon · Keep a Close Watch",
  livePreEyebrow: "Kitty Hawk's New Seafood Galley",
  livePostEyebrow: "Now Open · Walk-Ins Welcome",
  founded: 2026,
  phoneDisplay: "(252) 555-0118", // TODO: real number from owner
  phoneHref: "+12525550118",
  emailDisplay: "hello@blackflaggalleyobx.com", // TODO: confirm
  emailHref: "hello@blackflaggalleyobx.com",
  address: {
    street: "3701 N. Croatan Hwy.",
    city: "Kitty Hawk",
    region: "NC",
    postal: "27949",
    googleMapsEmbed:
      "https://www.google.com/maps?q=3701+N+Croatan+Hwy+Kitty+Hawk+NC+27949&output=embed",
  },
  hours: [
    // TODO: confirm with owner
    { day: "Sunday", hours: "Closed" },
    { day: "Monday", hours: "11:00 AM – 9:00 PM" },
    { day: "Tuesday", hours: "11:00 AM – 9:00 PM" },
    { day: "Wednesday", hours: "11:00 AM – 9:00 PM" },
    { day: "Thursday", hours: "11:00 AM – 9:00 PM" },
    { day: "Friday", hours: "11:00 AM – 10:00 PM" },
    { day: "Saturday", hours: "11:00 AM – 10:00 PM" },
  ],
  social: {
    instagram: "https://www.instagram.com/blackflaggalleyobx/",
    instagramHandle: "@blackflaggalleyobx",
    facebook: "https://www.facebook.com/profile.php?id=61569087968213",
    sister: "https://www.instagram.com/blackflagfishingobx/",
    sisterHandle: "@blackflagfishingobx",
  },
  owners: {
    captain: "Captain Lance Marler",
    fran: "Fran Marler",
    line: "Capt. Lance & Fran Marler",
  },
};

export const NAV_LINKS = [
  { label: "Our Galley", href: "/#story" },
  { label: "Menu", href: "/#menu" },
  { label: "Visit", href: "/#visit" },
];

// Hero — atmospheric photo
// TODO: replace with client interior / dining-room photo when available
export const HERO_IMAGE = {
  src: U("photo-1414235077428-338989a2e8c0", 2000, 1400),
  alt: "Black Flag Galley dining room",
};

// Story panel — Fran + Lance Marler at the galley table (sourced from Instagram)
export const STORY_IMAGE = {
  src: "/owners.jpg",
  alt: "Capt. Lance and Fran Marler at Black Flag Galley",
};

export const STORY = {
  eyebrow: "Our Galley",
  headline: "Captain Lance & Fran, hauling in dinner.",
  body:
    "Black Flag Galley is run by Capt. Lance and Fran Marler — same family that runs Black Flag Fishing OBX. The boat goes out, the fish comes in, the galley fries it up. That's the whole pitch. Fresh local seafood, salty-dog cooking, cold drinks, and a flag we're proud to fly over Kitty Hawk.",
  quote:
    "We catch it, we cook it, we feed you. Pull up a chair — there's room at the galley table.",
  quoteAttribution: "Capt. Lance & Fran Marler",
};

export type MenuItem = {
  course: string; // Roman numeral
  title: string;
  price: string;
  description: string;
};

// PLACEHOLDER MENU — galley/tavern fare to match the brand vibe
// Replace with real menu from owner pre-launch
export const MENU: Record<"plates" | "rawbar" | "drinks", MenuItem[]> = {
  plates: [
    { course: "I", title: "Captain's Fish & Chips", price: "19", description: "Day-boat catch, beer-battered, hand-cut fries, malt vinegar, tartar." },
    { course: "II", title: "Blackened Mahi Sandwich", price: "17", description: "Local mahi, cajun rub, slaw, remoulade, brioche bun, crispy fries." },
    { course: "III", title: "Hatteras Shrimp Basket", price: "21", description: "Wild Carolina shrimp, fried or grilled, cocktail sauce, hush puppies." },
    { course: "IV", title: "Galley Po'Boy", price: "18", description: "Fried oysters or shrimp, dressed, French roll, pickles, slaw on the side." },
    { course: "V", title: "Bosun's Burger", price: "16", description: "Half-pound smashed brisket-blend, bacon, sharp cheddar, galley sauce." },
  ],
  rawbar: [
    { course: "I", title: "Stumpy Point Oysters", price: "18/dz", description: "Brackish, briny, ice-cold. Cocktail sauce and lemon, crackers on the side." },
    { course: "II", title: "Peel & Eat Shrimp", price: "16", description: "Half-pound steamed wild Carolina shrimp, Old Bay, cocktail on the side." },
    { course: "III", title: "Smoked Fish Dip", price: "13", description: "Hot-smoked local fish, cream cheese, scallion, crackers, lemon." },
    { course: "IV", title: "Steamed Clams", price: "15", description: "Cherrystones, garlic butter, parsley, lemon, grilled bread for the broth." },
    { course: "V", title: "Galley Tower", price: "MP", description: "Whole iced tower — oysters, shrimp, clams, smoked fish. Built for sharing." },
  ],
  drinks: [
    { course: "I", title: "Galley Old Fashioned", price: "12", description: "Bourbon, demerara, orange, bitters. Big ice." },
    { course: "II", title: "Rum Punch", price: "11", description: "Dark rum, pineapple, orange, lime, grenadine float." },
    { course: "III", title: "Painkiller", price: "11", description: "Pusser's, pineapple, orange, coconut, fresh nutmeg." },
    { course: "IV", title: "Cold Beer", price: "5+", description: "Local drafts, OBX lagers, IPAs, ice-cold cans. Rotating taps." },
    { course: "V", title: "House Margarita", price: "10", description: "Blanco tequila, lime, agave, salted rim. Frozen on request." },
  ],
};

export const FONT_FAMILIES = {
  display: "Ibarra Real Nova",
  serif: "Cormorant Garamond",
  body: "Inter",
};
