import { BUSINESS } from "./constants";

// Schema.org day name → URL form expected by rich-results
const DAY_URL: Record<string, string> = {
  Sunday: "https://schema.org/Sunday",
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
};

// "11:00 AM – 9:00 PM" → { opens: "11:00", closes: "21:00" }
function parseHours(text: string): { opens: string; closes: string } | null {
  const m = text.match(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)\s*[–\-]\s*(\d{1,2})(?::(\d{2}))?\s*(AM|PM)/i);
  if (!m) return null;
  const to24 = (h: number, ap: string) => {
    h = h % 12;
    if (ap.toUpperCase() === "PM") h += 12;
    return h;
  };
  const oh = to24(parseInt(m[1], 10), m[3]);
  const om = m[2] ? parseInt(m[2], 10) : 0;
  const ch = to24(parseInt(m[4], 10), m[6]);
  const cm = m[5] ? parseInt(m[5], 10) : 0;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return { opens: `${pad(oh)}:${pad(om)}`, closes: `${pad(ch)}:${pad(cm)}` };
}

export function buildSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: siteUrl,
    telephone: BUSINESS.phoneDisplay,
    servesCuisine: ["Seafood", "American", "Raw Bar"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postal,
      addressCountry: "US",
    },
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
    openingHoursSpecification: BUSINESS.hours
      .filter((h) => h.hours !== "Closed")
      .map((h) => {
        const parsed = parseHours(h.hours);
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: DAY_URL[h.day],
          ...(parsed ?? {}),
        };
      }),
  };
}
