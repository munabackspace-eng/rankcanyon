import type { Config } from "tailwindcss";

/**
 * RankCanyon Tailwind theme.
 *
 * Tailwind v4 is CSS-first, but this file is loaded from `src/app/globals.css`
 * via the `@config` directive so the design system lives in one typed place.
 *
 * Every color points at a CSS variable defined in `globals.css` (`:root`).
 * To rebrand, change the variable values there — no class names need to change.
 */
const scale = (name: string) =>
  Object.fromEntries(
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((step) => [
      step,
      `var(--${name}-${step})`,
    ]),
  );

const fontStack = [
  "var(--font-sans)",
  '"Plus Jakarta Sans"',
  "Roboto",
  "Arial",
  "sans-serif",
];

const config = {
  theme: {
    extend: {
      colors: {
        // Semantic tokens
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        ice: "var(--ice)",
        card: "var(--card)",
        charcoal: "var(--charcoal)",
        muted: "var(--muted)",
        border: "var(--border)",
        // Brand scales
        navy: scale("navy"),
        brand: scale("brand"),
        highlight: "var(--highlight)",
      },
      fontFamily: {
        sans: fontStack,
        display: fontStack,
      },
      maxWidth: {
        container: "90rem",
        prose: "68ch",
      },
      boxShadow: {
        card: "0 1px 2px rgb(10 18 34 / 0.04), 0 8px 24px -12px rgb(10 18 34 / 0.10)",
        "card-hover":
          "0 2px 4px rgb(10 18 34 / 0.05), 0 28px 56px -20px rgb(10 18 34 / 0.20)",
        premium:
          "inset 0 1px 0 rgb(255 255 255 / 0.55), 0 1px 2px rgb(10 18 34 / 0.04), 0 40px 80px -32px rgb(10 18 34 / 0.22)",
        button:
          "inset 0 1px 0 rgb(255 255 255 / 0.12), 0 1px 2px rgb(10 18 34 / 0.2), 0 8px 20px -8px rgb(10 18 34 / 0.45)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "grow-up": {
          from: { transform: "scaleY(0)" },
          to: { transform: "scaleY(1)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "grow-up": "grow-up 900ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
} satisfies Omit<Config, "content">;

export default config;
