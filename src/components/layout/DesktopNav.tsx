"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/types";
import { cn, isActivePath } from "@/lib/utils";

const linkBase =
  "relative px-3 py-2 xl:px-4 font-sans text-base font-bold text-navy-950/90 transition-colors duration-300 hover:text-navy-950 group-data-[surface=glass]/header:text-white/92 group-data-[surface=glass]/header:hover:text-white focus-visible:outline-2 focus-visible:outline-brand-500 after:absolute after:inset-x-3 xl:after:inset-x-4 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 hover:after:scale-x-100";

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1 xl:gap-3">
        {items.map((item) => (
          <li key={item.href}>
            {item.children ? (
              <NavDropdown item={item} active={isActivePath(pathname, item.href)} />
            ) : (
              <Link
                href={item.href}
                aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
                className={cn(
                  linkBase,
                  isActivePath(pathname, item.href) &&
                    "text-navy-950 group-data-[surface=glass]/header:text-white after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NavDropdown({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          linkBase,
          "inline-flex cursor-pointer items-center gap-1",
          (active || open) &&
            "text-navy-950 group-data-[surface=glass]/header:text-white after:scale-x-100",
        )}
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 text-navy-950/75 transition-transform duration-200 group-data-[surface=glass]/header:text-white/80",
            open &&
              "rotate-180 text-navy-950 group-data-[surface=glass]/header:text-white",
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            id={panelId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-0 z-50 w-[42rem] pt-4"
          >
            <div className="overflow-hidden rounded-3xl border border-white/12 bg-[#0d0d0f]/88 text-white shadow-[0_28px_70px_-14px_rgba(0,0,0,0.65)] backdrop-blur-xl backdrop-saturate-150">
              <ul className="grid grid-cols-2 gap-1.5 p-3.5">
                {item.children?.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="group block rounded-2xl p-3.5 transition-colors hover:bg-white/8 focus-visible:bg-white/8"
                    >
                      <span className="block font-display text-sm font-bold text-white transition-colors group-hover:text-brand-400">
                        {child.label}
                      </span>
                      {child.description && (
                        <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-white/65">
                          {child.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-t border-white/10 bg-black/35 px-6 py-3.5 font-display text-sm font-bold text-white transition-colors hover:text-brand-400"
              >
                View all services
                <ArrowRight aria-hidden="true" className="size-4 text-brand-500" />
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
