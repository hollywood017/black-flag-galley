import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink:       "rgb(11 13 16 / <alpha-value>)",
        bone:      "rgb(242 235 215 / <alpha-value>)",
        parchment: "rgb(232 222 195 / <alpha-value>)",
        oxblood:   "rgb(138 43 43 / <alpha-value>)",
        brass:     "rgb(168 132 56 / <alpha-value>)",
        driftwood: "rgb(74 56 38 / <alpha-value>)",
        smoke:     "rgb(48 42 36 / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-ibarra)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,13,16,0.06), 0 2px 8px rgba(11,13,16,0.08)",
        card: "0 4px 12px rgba(11,13,16,0.12), 0 12px 32px rgba(11,13,16,0.10)",
        lift: "0 18px 40px rgba(11,13,16,0.28), 0 6px 14px rgba(11,13,16,0.18)",
        deep: "0 30px 60px rgba(11,13,16,0.55), 0 12px 28px rgba(11,13,16,0.40), inset 0 1px 0 rgba(242,235,215,0.06)",
        plate: "inset 0 1px 0 rgba(242,235,215,0.10), inset 0 -1px 0 rgba(0,0,0,0.45), 0 24px 48px rgba(0,0,0,0.45)",
        ember: "0 0 40px rgba(138,43,43,0.35), 0 0 90px rgba(138,43,43,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
