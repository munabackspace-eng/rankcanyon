import Link from "next/link";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { HeaderShell } from "@/components/layout/HeaderShell";
import { MobileNav } from "@/components/layout/MobileNav";
import { Logo } from "@/components/shared/Logo";
import { mainNav } from "@/data/navigation";
import { PRIMARY_CTA } from "@/lib/constants";

/**
 * Floating stadium-pill site header (Server Component).
 * Transparent in Hero -> hides on scroll down -> appears with dark black blur on scroll up.
 */
export function Header() {
  return (
    <HeaderShell>
      {/* Left: Brand logo + full-height vertical hairline divider */}
      <div className="relative z-30 flex h-full shrink-0 items-center border-r border-navy-950/12 pr-4 pl-5 transition-colors duration-300 group-data-[surface=glass]/header:border-white/12 sm:pr-6 sm:pl-7 xl:pr-7 xl:pl-8">
        <Logo tone="adaptive" />
      </div>

      {/* Middle-left: Primary desktop navigation */}
      <div className="relative z-30 hidden flex-1 items-center pl-4 lg:flex xl:pl-7">
        <DesktopNav items={mainNav} />
      </div>

      {/* Right: Bold CTA text link + mobile menu toggle */}
      <div className="flex items-center gap-2.5 pr-3 sm:gap-3 sm:pr-5 lg:pr-6 xl:pr-7">
        <Link
          href={PRIMARY_CTA.href}
          className="relative z-30 hidden px-2 py-2 font-sans text-sm font-bold text-navy-950/90 transition-colors duration-300 group-data-[surface=glass]/header:text-white/92 after:absolute after:inset-x-2 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 hover:text-brand-600 group-data-[surface=glass]/header:hover:text-brand-400 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-brand-500 min-[400px]:inline-block sm:px-3 sm:text-base"
        >
          Free Audit
        </Link>

        <MobileNav items={mainNav} cta={PRIMARY_CTA} />
      </div>
    </HeaderShell>
  );
}
