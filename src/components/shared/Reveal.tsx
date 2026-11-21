"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds — handy for staggering items in a grid. */
  delay?: number;
  /** Vertical offset in px to animate from. */
  y?: number;
};

/**
 * Subtle fade-and-rise when the element scrolls into view (runs once).
 * Use for below-the-fold content only — never wrap the LCP element.
 */
export function Reveal({ children, className, delay = 0, y = 16 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
