"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU, type MenuItem } from "@/lib/constants";

type TabKey = "plates" | "rawbar" | "drinks";

const TABS: { key: TabKey; label: string; sub: string }[] = [
  { key: "plates", label: "Galley Plates", sub: "Fresh · Fried · Grilled" },
  { key: "rawbar", label: "Raw Bar", sub: "Sound to Atlantic" },
  { key: "drinks", label: "Drinks", sub: "Cold Beer · Rum · Cocktails" },
];

export default function MenuShowcase() {
  const [tab, setTab] = useState<TabKey>("plates");
  const items: MenuItem[] = MENU[tab];

  return (
    <section id="menu" className="relative overflow-hidden bg-ink py-24 md:py-32">
      {/* Ambient brass glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 h-[40vh] w-[60vh] -translate-x-1/2 rounded-full bg-brass/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 text-center">
          <span className="mb-5 inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-brass">
            <span className="h-px w-10 bg-brass/60" />
            From the Galley
            <span className="h-px w-10 bg-brass/60" />
          </span>
          <h2
            className="font-display engraved text-balance text-4xl font-medium leading-[1.05] text-bone md:text-5xl lg:text-6xl"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Caught today.
            <br />
            <span className="italic text-brass">On your plate tonight.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-base italic leading-relaxed text-bone/75 md:text-lg">
            A working sample of the galley menu. Final menu prints the week we
            open the doors.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {TABS.map((t) => {
            const active = t.key === tab;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={[
                  "group relative flex flex-col items-center rounded-sm border px-5 py-3 transition-colors md:px-7 md:py-4",
                  active
                    ? "border-brass bg-brass/15 text-bone shadow-ember"
                    : "border-brass/30 bg-transparent text-bone/65 hover:border-brass/55 hover:text-bone",
                ].join(" ")}
              >
                <span className="font-display text-lg font-medium tracking-[0.04em] md:text-xl">
                  {t.label}
                </span>
                <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.32em] text-brass/85">
                  {t.sub}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45 }}
            className="divide-y divide-brass/15 border-y border-brass/25"
          >
            {items.map((item) => (
              <li
                key={item.title}
                className="group relative flex items-start gap-5 px-2 py-7 md:gap-8 md:px-4"
              >
                <span
                  className="font-serif italic text-brass/85 text-3xl leading-none w-10 shrink-0 mt-1 md:text-4xl md:w-14"
                  aria-hidden
                >
                  {item.course}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-4">
                    <h3 className="font-display text-xl font-medium tracking-tight text-bone md:text-2xl">
                      {item.title}
                    </h3>
                    <span
                      aria-hidden
                      className="hidden flex-1 border-b border-dashed border-brass/30 self-end mb-1.5 md:block"
                    />
                    <span className="font-display text-lg text-brass md:text-xl">
                      {item.price === "MP" ? "MP" : `$${item.price}`}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-bone/70 md:text-base">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>

        <p className="mt-10 text-center font-serif text-sm italic text-bone/55">
          Menu shifts with what the boats bring in. Watch the flag drop on opening day.
        </p>
      </div>
    </section>
  );
}
