"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ShoppingBag } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function VisitUs() {
  return (
    <section id="visit" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 plaque-ribbon h-px" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 text-center">
          <span className="mb-5 inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-brass">
            <span className="h-px w-10 bg-brass/60" />
            Find the Galley
            <span className="h-px w-10 bg-brass/60" />
          </span>
          <h2
            className="font-display engraved text-balance text-4xl font-medium leading-[1.05] text-bone md:text-5xl lg:text-6xl"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Drop anchor in <span className="italic text-brass">Kitty Hawk.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >
            <div className="relative border border-brass/35 bg-ink/60 p-8 shadow-deep md:p-10">
              <div className="absolute -inset-1 -z-10 border border-brass/15" />

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brass" />
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-brass/85">
                    Address
                  </div>
                  <div className="mt-2 font-serif text-lg leading-snug text-bone md:text-xl">
                    {BUSINESS.address.street}
                    <br />
                    {BUSINESS.address.city}, {BUSINESS.address.region}{" "}
                    {BUSINESS.address.postal}
                  </div>
                </div>
              </div>

              <div className="my-7 h-px plaque-ribbon" />

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-brass" />
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-brass/85">
                    Reservations &amp; Walk-Ins
                  </div>
                  <a
                    href={`tel:${BUSINESS.phoneHref}`}
                    className="mt-2 block font-display text-xl text-bone hover:text-brass transition-colors md:text-2xl"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="my-7 h-px plaque-ribbon" />

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-brass" />
                <div className="w-full">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-brass/85">
                    Hours
                  </div>
                  <ul className="mt-3 space-y-1.5 font-sans text-sm text-bone/85 md:text-[15px]">
                    {BUSINESS.hours.map((h) => (
                      <li key={h.day} className="flex items-baseline justify-between gap-4">
                        <span className="font-medium">{h.day}</span>
                        <span className="flex-1 border-b border-dashed border-brass/20 mb-1" />
                        <span className="text-bone/75">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Online ordering pill */}
              <div className="mt-9">
                <a
                  href="#visit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brass/55 bg-brass/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-bone/80"
                  aria-disabled="true"
                >
                  <ShoppingBag className="h-3.5 w-3.5 text-brass" />
                  Online Ordering · Coming Soon
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-3"
          >
            <div className="relative h-full min-h-[420px] overflow-hidden border border-brass/35 shadow-deep">
              <iframe
                src={BUSINESS.address.googleMapsEmbed}
                title={`Map to ${BUSINESS.name}`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/30 via-transparent to-ink/15 mix-blend-multiply" />
              <div className="pointer-events-none absolute -inset-1 border border-brass/15" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
