import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Ibarra_Real_Nova } from "next/font/google";
import { BUSINESS } from "@/lib/constants";
import { buildSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const ibarra = Ibarra_Real_Nova({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-ibarra",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://black-flag-galley.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | Fresh Local Seafood in Kitty Hawk, NC`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  openGraph: {
    title: `${BUSINESS.name} | Kitty Hawk, NC`,
    description: BUSINESS.description,
    url: SITE_URL,
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: BUSINESS.name, description: BUSINESS.description },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = buildSchema(SITE_URL);
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${ibarra.variable}`}>
      <body className="font-sans bg-ink text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
