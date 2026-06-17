"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Instagram } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import Logo from "./Logo";
import { cn } from "@/lib/cn";

export default function Nav({ overDarkHero = true }: { overDarkHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = overDarkHero && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-ink/85 backdrop-blur-xl border-b border-brass/15 shadow-deep",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10 md:py-4">
        <Link href="/" className="flex items-center" aria-label={BUSINESS.name}>
          <Logo variant="nav" tone="light" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] font-semibold uppercase tracking-[0.32em] text-bone/85 hover:text-brass transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-brass/45 text-brass hover:bg-brass/15 transition-colors md:flex"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={`tel:${BUSINESS.phoneHref}`}
            className="hidden items-center gap-2 rounded-full border border-brass/55 bg-brass/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-bone hover:bg-brass/25 transition-colors md:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {BUSINESS.phoneDisplay}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/45 text-bone md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-brass/15 bg-ink/95 px-5 py-5 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold uppercase tracking-[0.28em] text-bone/85 hover:text-brass"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-full border border-brass/55 bg-brass/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-bone"
              >
                <Phone className="h-3.5 w-3.5" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
