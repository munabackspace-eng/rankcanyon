import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/shared/Logo";
import {
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/shared/SocialIcons";
import { footerLegalLinks, footerNav } from "@/data/navigation";
import { SITE, SOCIAL } from "@/lib/constants";

const socials = [
  { label: "X (Twitter)", href: SOCIAL.x, icon: XIcon },
  { label: "LinkedIn", href: SOCIAL.linkedin, icon: LinkedInIcon },
  { label: "Instagram", href: SOCIAL.instagram, icon: InstagramIcon },
  { label: "YouTube", href: SOCIAL.youtube, icon: YouTubeIcon },
  { label: "TikTok", href: SOCIAL.tiktok, icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="w-full bg-black pt-16 pb-12 text-white sm:pt-20 sm:pb-14">
      <Container>
        {/* Top multi-column layout: Brand summary on left + 4 link columns on right */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left column: Logo, concise mission copy & minimal social icons */}
          <div className="lg:col-span-4 lg:pr-10">
            <Logo tone="dark" size="lg" />

            <p className="mt-5 max-w-sm text-base leading-relaxed text-white">
              The full-funnel growth partner brands use to scale profitably on Amazon,
              from first product launch to category leadership.
            </p>

            <ul
              className="mt-6 flex flex-wrap items-center gap-4"
              aria-label="Social media"
            >
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${SITE.name} on ${label}`}
                    className="inline-flex items-center justify-center text-white transition-colors duration-200 hover:text-brand-400"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right columns: Services, Company, Resources, Solutions */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="font-display text-lg font-extrabold text-white [-webkit-text-stroke:0.25px_currentColor]">
                  {group.title}
                </h2>

                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => {
                    const isHash = link.href.startsWith("#");
                    const linkClass =
                      "inline-block text-base text-white transition-colors duration-200 hover:text-brand-400";

                    return (
                      <li key={link.label}>
                        {isHash ? (
                          <a href={link.href} className={linkClass}>
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className={linkClass}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom hairline divider + copyright (left) & legal links (right) */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-white">
            © {SITE.copyrightYear} {SITE.legalName}. All rights reserved.
          </p>

          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {footerLegalLinks.map((link) => {
                const isHash = link.href.startsWith("#");
                const linkClass =
                  "inline-block text-base text-white transition-colors duration-200 hover:text-brand-400";

                return (
                  <li key={link.label}>
                    {isHash ? (
                      <a href={link.href} className={linkClass}>
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
