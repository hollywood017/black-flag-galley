"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { STORY, STORY_IMAGE } from "@/lib/constants";

export default function StoryPanel() {
  return (
    <section id="story" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 plaque-ribbon h-px" />
      <div className="absolute inset-x-0 bottom-0 plaque-ribbon h-px" />
      {/* Ambient oxblood glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[60vh] w-[60vh] rounded-full bg-oxblood/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-1/4 h-[40vh] w-[40vh] rounded-full bg-brass/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-6 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-brass">
            <span className="h-px w-8 bg-brass/60" />
            {STORY.eyebrow}
          </span>
          <h2
            className="font-display engraved text-balance text-4xl font-medium leading-[1.05] text-bone md:text-5xl lg:text-[3.4rem]"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            {STORY.headline}
          </h2>
          <p className="drop-cap mt-7 text-[1.05rem] leading-[1.75] text-bone/80 md:text-lg">
            {STORY.body}
          </p>

          <figure className="mt-10 border-l-2 border-brass/55 pl-6">
            <span
              aria-hidden
              className="block font-serif text-[5.5rem] leading-[0.5] text-brass/75"
            >
              &ldquo;
            </span>
            <blockquote className="mt-2 font-serif text-xl italic leading-snug text-bone/95 md:text-2xl">
              {STORY.quote}
            </blockquote>
            <figcaption className="mt-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-brass">
              — {STORY.quoteAttribution}
            </figcaption>
          </figure>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          {/* Brass mat */}
          <div className="absolute -inset-3 border border-brass/40 md:-inset-4" />
          <div className="relative aspect-[4/5] w-full overflow-hidden shadow-deep">
            <Image
              src={STORY_IMAGE.src}
              alt={STORY_IMAGE.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
            <span className="font-serif text-xs italic uppercase tracking-[0.32em] text-brass">
              Capt. Lance &amp; Fran · The Galley
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
