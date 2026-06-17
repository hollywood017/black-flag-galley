import Link from "next/link";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brass/20 bg-ink pt-20 pb-10">
      {/* Compass-rose engraving background */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 opacity-[0.06]"
        width="640"
        height="640"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
      >
        <g stroke="rgb(168 132 56)" strokeWidth="0.5" fill="none">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="72" />
          <circle cx="100" cy="100" r="50" />
          <circle cx="100" cy="100" r="14" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="100"
              y1="100"
              x2={100 + 90 * Math.cos((deg * Math.PI) / 180)}
              y2={100 + 90 * Math.sin((deg * Math.PI) / 180)}
            />
          ))}
          <polygon points="100,18 106,100 100,182 94,100" fill="rgb(168 132 56)" opacity="0.35" />
          <polygon points="18,100 100,94 182,100 100,106" fill="rgb(168 132 56)" opacity="0.2" />
        </g>
      </svg>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4 md:px-10">
        <div className="md:col-span-1">
          <Logo variant="footer" tone="light" />
          <p className="mt-5 max-w-xs font-serif text-sm italic leading-relaxed text-bone/65">
            {BUSINESS.shortDescription}
          </p>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-brass">
            Navigate
          </div>
          <ul className="mt-4 space-y-2.5 text-sm text-bone/80">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brass transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-brass">
            Find the Galley
          </div>
          <ul className="mt-4 space-y-3 text-sm text-bone/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
              <span>
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.city}, {BUSINESS.address.region}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brass" />
              <a href={`tel:${BUSINESS.phoneHref}`} className="hover:text-brass transition-colors">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-brass">
            Hoist the Flag
          </div>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/45 text-brass hover:bg-brass/15 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/45 text-brass hover:bg-brass/15 transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-5 font-serif text-xs italic leading-relaxed text-bone/55">
            For news, opening date, and fresh-catch drops.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-7xl flex-col items-center gap-4 border-t border-brass/15 px-6 pt-8 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <p className="text-[11px] uppercase tracking-[0.32em] text-bone/55">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
        <a
          href="https://stackandsignal.agency"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] uppercase tracking-[0.34em] text-bone/55 hover:text-bone transition-colors"
        >
          stackandsignal.agency
        </a>
      </div>
    </footer>
  );
}
