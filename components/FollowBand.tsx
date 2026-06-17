"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function FollowBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      {/* Brass border plate */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.a
          href={BUSINESS.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative block overflow-hidden border border-brass/45 bg-gradient-to-br from-smoke/80 via-ink to-smoke/60 px-7 py-14 shadow-deep md:px-16 md:py-20"
        >
          {/* Inner inset hairline */}
          <div className="pointer-events-none absolute inset-2 border border-brass/15" />
          {/* Ember glow */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 ember-glow opacity-80" />

          <div className="relative flex flex-col items-center text-center">
            <span className="mb-4 inline-flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-brass md:text-[0.7rem]">
              <span className="h-px w-8 bg-brass/60" />
              The Drop
              <span className="h-px w-8 bg-brass/60" />
            </span>

            <h2
              className="font-display engraved text-balance text-4xl font-medium leading-[1.05] text-bone md:text-6xl lg:text-7xl"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Follow{" "}
              <span className="italic text-brass">{BUSINESS.social.instagramHandle}</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-serif text-base italic leading-relaxed text-bone/80 md:text-lg">
              Opening day, what's coming off the boats, daily specials, and the
              first oysters of the season. Walk in. Eat good. First come, first served.
            </p>

            <span className="mt-9 inline-flex items-center gap-3 rounded-full bg-brass px-8 py-4 text-xs font-semibold uppercase tracking-[0.34em] text-ink shadow-lift transition-transform group-hover:translate-y-[-2px] md:text-sm">
              <Instagram className="h-4 w-4" />
              Follow the Galley
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
