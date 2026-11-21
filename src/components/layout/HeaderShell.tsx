"use client";

import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NavSurface = "transparent" | "glass";

type NavState = {
  hidden: boolean;
  surface: NavSurface;
};

const HeaderMenuContext = createContext<(open: boolean) => void>(() => {});

export function useHeaderMenuSync() {
  return useContext(HeaderMenuContext);
}

const HERO_THRESHOLD = 40;
const DIRECTION_DELTA = 6;

/**
 * Smart-hiding floating stadium-pill header shell:
 * 1. At top / in Hero (`scrollY <= 40`): Visible with 100% transparent background.
 * 2. Scrolling down (`scrollY > 40`): Smoothly hides upward out of view.
 * 3. Scrolling backward / up (`scrollY > 40`): Appears with dark black glass blur.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const [navState, setNavState] = useState<NavState>({
    hidden: false,
    surface: "transparent",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = Math.max(0, window.scrollY);
    let ticking = false;

    const setIfChanged = (next: NavState) => {
      setNavState((prev) =>
        prev.hidden === next.hidden && prev.surface === next.surface ? prev : next,
      );
    };

    const update = () => {
      ticking = false;
      const currentY = Math.max(0, window.scrollY);
      const delta = currentY - lastScrollY;

      if (document.body.style.overflow === "hidden") {
        lastScrollY = currentY;
        return;
      }

      if (currentY <= HERO_THRESHOLD) {
        setIfChanged({ hidden: false, surface: "transparent" });
        lastScrollY = currentY;
        return;
      }

      if (delta > DIRECTION_DELTA) {
        setIfChanged({ hidden: true, surface: "glass" });
        lastScrollY = currentY;
      } else if (delta < -DIRECTION_DELTA) {
        setIfChanged({ hidden: false, surface: "glass" });
        lastScrollY = currentY;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    const initFrame = window.requestAnimationFrame(() => {
      const initialY = Math.max(0, window.scrollY);
      lastScrollY = initialY;
      if (initialY > HERO_THRESHOLD) {
        setIfChanged({ hidden: false, surface: "glass" });
      }
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(initFrame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const effectiveHidden = navState.hidden && !mobileMenuOpen;
  const effectiveSurface: NavSurface = mobileMenuOpen ? "glass" : navState.surface;

  return (
    <HeaderMenuContext.Provider value={setMobileMenuOpen}>
      <header
        data-surface={effectiveSurface}
        className={cn(
          "group/header pointer-events-none fixed inset-x-0 top-3 z-50 px-3 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:top-4 sm:px-5 lg:px-8",
          effectiveHidden && "-translate-y-[150%] opacity-0",
        )}
      >
        <div
          className={cn(
            "relative mx-auto flex h-16 max-w-container items-center justify-between sm:h-[4.5rem] lg:h-[4.85rem]",
            effectiveHidden ? "pointer-events-none" : "pointer-events-auto",
          )}
        >
          {/* Separate pill surface layer so backdrop-blur never traps fixed descendants */}
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 z-20 rounded-full border transition-all duration-300",
              effectiveSurface === "glass"
                ? "border-white/12 bg-[#0d0d0f]/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_50px_-12px_rgba(0,0,0,0.58)] backdrop-blur-xl backdrop-saturate-150"
                : "border-transparent bg-transparent shadow-none backdrop-blur-none",
            )}
          />
          {children}
        </div>
      </header>
    </HeaderMenuContext.Provider>
  );
}
