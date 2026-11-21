"use client";

import { useEffect } from "react";

/** Prevents the document from scrolling while `locked` is true (e.g. open mobile menu). */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [locked]);
}
