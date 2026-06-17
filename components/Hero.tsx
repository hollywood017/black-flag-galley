"use client";

import { motion } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";
import Image from "next/image";
import { BUSINESS, HERO_IMAGE } from "@/lib/constants";
import Logo from "./Logo";

export default function Hero() {
  const eyebrow = BUSINESS.isOpen ? BUSINESS.livePostEyebrow : BUSINESS.openingNote;

  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {/* Hero image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Ink overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(11,13,16,0.7)_100%)]" />
        {/* Ember glow from bottom */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 ember-glow" />
      </div>

      {/* Editorial corner marks */}
      <div className="pointer-events-none absolute inset-x-0 top-24 z-10 mx-auto flex max-w-7xl items-start justify-between px-6 md:top-32 md:px-10">
        <div className="font-serif text-[10px] uppercase tracking-[0.4em] text-brass md:text-xs">
          <span className="block leading-tight">Kitty Hawk · NC</span>
          <span className="block h-px w-10 bg-brass/60 mt-1.5" />
        </div>
        <div className="text-right font-serif text-[10px] uppercase tracking-[0.4em] text-brass md:text-xs">
          <span className="block leading-tight">Est. {BUSINESS.founded}</span>
          <span className="ml-auto block h-px w-10 bg-brass/60 mt-1.5" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center md:px-10 md:pt-36">
        {/* Big logo — prominent, fine print readable */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]"
        >
          <Logo variant="hero" tone="light" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.15 }}
          className="mb-6 flex flex-col items-center gap-2.5"
        >
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-bone drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] md:text-xs">
            {eyebrow}
          </span>
          <span aria-hidden className="block h-[2px] w-14 bg-brass shadow-[0_0_14px_rgba(168,132,56,0.7)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="font-display engraved text-balance text-4xl font-medium leading-[0.98] text-bone md:text-6xl lg:text-[4.5rem]"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Fresh local seafood
          <br />
          <span className="italic text-brass">in Kitty Hawk, NC.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="mx-auto mt-6 max-w-xl font-serif text-base italic leading-relaxed text-bone/85 md:text-lg"
        >
          From the Marler family boats to the galley table. Fresh bites, cold drinks,
          and the catch of the day off the Black Flag fleet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.45 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
        >
          <a
            href={BUSINESS.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-brass px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.32em] text-ink shadow-lift hover:bg-brass/85 transition-colors"
          >
            <Instagram className="h-4 w-4" />
            Follow the Galley
          </a>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 rounded-full border border-brass/55 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.32em] text-bone hover:bg-brass/15 transition-colors"
          >
            <MapPin className="h-4 w-4" />
            Find Us
          </a>
        </motion.div>
      </div>

      {/* Bottom brass plaque hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px plaque-ribbon z-10" />
    </section>
  );
}
