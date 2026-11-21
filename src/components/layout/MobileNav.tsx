"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useHeaderMenuSync } from "@/components/layout/HeaderShell";
import { buttonStyles } from "@/components/ui/Button";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import type { NavItem, NavLink } from "@/types";
import { cn, isActivePath } from "@/lib/utils";

type MobileNavProps = {
  items: NavItem[];
  cta: NavLink;
};

export function MobileNav({ items, cta }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const syncHeaderMenu = useHeaderMenuSync();
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(open);

  useEffect(() => {
    syncHeaderMenu(open);
    return () => syncHeaderMenu(false);
  }, [open, syncHeaderMenu]);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => event.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    mql.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mql.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="relative z-30 inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-navy-950/15 bg-navy-950/[0.04] text-navy-950 transition-all duration-300 group-data-[surface=glass]/header:border-white/15 group-data-[surface=glass]/header:bg-black/45 group-data-[surface=glass]/header:text-white hover:border-navy-950/28 hover:bg-navy-950/[0.08] group-data-[surface=glass]/header:hover:border-white/28 group-data-[surface=glass]/header:hover:bg-black/65 sm:size-10"
      >
        {open ? (
          <X className="size-4 sm:size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-4 sm:size-5" aria-hidden="true" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Tap-outside backdrop (z-10 sits behind the z-20/z-30 pill bar) */}
            <m.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={close}
              className="fixed inset-0 z-10 bg-black/40 backdrop-blur-[2px]"
            />

            {/* Floating rounded dark black glass drawer beneath the stadium pill */}
            <m.div
              id="mobile-menu"
              ref={panelRef}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-3 top-[5.1rem] z-30 mx-auto max-h-[calc(100dvh-5.85rem)] max-w-container overflow-y-auto rounded-[1.75rem] border border-white/12 bg-[#0d0d0f]/86 p-4 text-white shadow-[0_28px_70px_-12px_rgba(0,0,0,0.68)] backdrop-blur-xl backdrop-saturate-150 sm:inset-x-5 sm:top-[5.85rem] sm:p-6"
            >
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {items.map((item) => (
                    <li key={item.href}>
                      {item.children ? (
                        <MobileAccordion
                          item={item}
                          pathname={pathname}
                          onNavigate={close}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          onClick={close}
                          aria-current={
                            isActivePath(pathname, item.href) ? "page" : undefined
                          }
                          className={cn(
                            "block rounded-2xl px-4 py-3 text-base font-bold transition-colors sm:text-lg",
                            isActivePath(pathname, item.href)
                              ? "bg-white/10 text-brand-400"
                              : "text-white/90 hover:bg-white/6 hover:text-white",
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Bottom action row */}
                <div className="mt-5 flex flex-col gap-2.5 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
                  <Link
                    href={cta.href}
                    onClick={close}
                    className={buttonStyles({ size: "lg", className: "w-full flex-1" })}
                  >
                    {cta.label}
                  </Link>
                </div>
              </nav>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(isActivePath(pathname, item.href));
  const panelId = `mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-base font-bold text-white/90 transition-colors hover:bg-white/6 hover:text-white sm:text-lg"
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-5 text-white/70 transition-transform duration-200",
            expanded && "rotate-180 text-white",
          )}
        />
      </button>
      <ul
        id={panelId}
        hidden={!expanded}
        className="mt-1 mb-2 ml-4 border-l border-white/12 pl-3"
      >
        <li>
          <Link
            href={item.href}
            onClick={onNavigate}
            className="block rounded-xl px-3 py-2 text-sm font-semibold text-brand-400 hover:text-brand-300"
          >
            All {item.label.toLowerCase()}
          </Link>
        </li>
        {item.children?.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              onClick={onNavigate}
              aria-current={pathname === child.href ? "page" : undefined}
              className={cn(
                "block rounded-xl px-3 py-2 text-sm transition-colors",
                pathname === child.href
                  ? "font-semibold text-white"
                  : "text-white/65 hover:text-white",
              )}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
