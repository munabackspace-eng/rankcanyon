import { cn } from "@/lib/utils";

type MarketplaceLogoProps = {
  platform: string;
  className?: string;
};

export function MarketplaceBrandLogo({ platform, className }: MarketplaceLogoProps) {
  const key = platform.toLowerCase();

  return (
    <span
      title={platform}
      className={cn(
        "inline-flex h-11 min-w-[3.25rem] items-center justify-center rounded-xl border border-navy-950/10 bg-background px-3 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-sm sm:h-12 sm:px-3.5",
        className,
      )}
    >
      <span className="sr-only">{platform}</span>
      {renderBrandSvg(key)}
    </span>
  );
}

function renderBrandSvg(key: string) {
  if (key.includes("amazon")) {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="size-7 sm:size-[30px]"
      >
        {/* Iconic Amazon lowercase 'a' */}
        <path
          d="M22.6 18.2c0 2.1.05 3.8-.95 5.6-.8 1.4-2.1 2.3-3.55 2.3-1.95 0-3.1-1.5-3.1-3.7 0-4.3 3.85-5.1 7.6-5.1v.9Zm5.15 7.4c-.35.3-.85.35-1.25.15-1.75-1.45-2.05-2.1-3.05-3.5-2.9 2.95-4.95 3.85-8.7 3.85-4.45 0-7.9-2.75-7.9-8.25 0-4.3 2.35-7.2 5.65-8.65 2.9-1.25 6.9-1.5 9.95-1.85v-.7c0-1.3.1-2.85-.65-3.95-.65-1-1.95-1.4-3.1-1.4-2.1 0-3.95 1.05-4.4 3.3-.1.5-.45.95-.95 1l-5.15-.55c-.45-.1-.9-.45-.8-1.1C8.2 4.85 12.95 2.5 18.2 2.5c2.55 0 5.9.7 7.9 2.65 2.55 2.4 2.3 5.6 2.3 9.1v8.25c0 2.5 1.05 3.6 2 4.95.35.45.4 1-.05 1.35l-2.6 2.25v-.45Z"
          fill="#131921"
          transform="translate(1.5, 0.5) scale(0.84)"
        />
        {/* Amazon Smile Arrow */}
        <path
          d="M6.2 28.4C11.6 32.3 19.8 33.1 27.6 29.1"
          stroke="#FF9900"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M25.4 26.8C27.4 26.5 29.7 27.2 30.1 28.1C30.5 29 29.5 31.3 28.1 32.6"
          stroke="#FF9900"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (key.includes("ebay")) {
    return (
      <svg
        viewBox="0 0 64 28"
        fill="none"
        aria-hidden="true"
        className="h-6 w-auto sm:h-[26px]"
      >
        <text
          x="2"
          y="21.5"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="-1.2"
        >
          <tspan fill="#E53238">e</tspan>
          <tspan fill="#0064D2">b</tspan>
          <tspan fill="#F5AF02">a</tspan>
          <tspan fill="#86B817">y</tspan>
        </text>
      </svg>
    );
  }

  if (key.includes("walmart")) {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="size-7 sm:size-[30px]"
      >
        <circle cx="18" cy="18" r="15.5" fill="#0071DC" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <rect
            key={angle}
            x="16.4"
            y="5.2"
            width="3.2"
            height="7.6"
            rx="1.6"
            fill="#FFC220"
            transform={`rotate(${angle} 18 18)`}
          />
        ))}
      </svg>
    );
  }

  if (key.includes("shopify")) {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="size-7 sm:size-[30px]"
      >
        {/* Shopping bag body */}
        <path
          d="M26.8 9.6L29.6 31.2L10.4 33L7.2 30.2L9.8 9.6L26.8 9.6Z"
          fill="#95BF47"
        />
        <path d="M26.8 9.6L29.6 31.2L23.4 31.8V8.8L26.8 9.6Z" fill="#5E8E3E" />
        {/* Bag handle */}
        <path
          d="M14.2 9.6C14.2 6.4 16 4.4 18.4 4.4C20.8 4.4 22.4 6.4 22.4 9.6"
          stroke="#5E8E3E"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        {/* White 'S' monogram */}
        <path
          d="M20.4 15.8C19.6 15.2 18.5 14.9 17.4 15.1C15.9 15.4 15.2 16.4 15.4 17.4C15.6 18.6 17.1 19 18.5 19.6C20.2 20.3 21.1 21.3 20.8 23.1C20.4 25.1 18.6 26.2 16.3 26C14.9 25.9 13.8 25.3 13.2 24.8"
          stroke="#FFFFFF"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (key.includes("tiktok")) {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="size-7 sm:size-[30px]"
      >
        {/* Cyan layer */}
        <path
          d="M21.2 6.8V22.4C21.2 24.9 19.2 26.9 16.7 26.9C14.2 26.9 12.2 24.9 12.2 22.4C12.2 19.9 14.2 17.9 16.7 17.9"
          stroke="#25F4EE"
          strokeWidth="3.2"
          strokeLinecap="round"
          transform="translate(-1.3, -1)"
        />
        <path
          d="M21.2 6.8C22 10.2 24.5 12.6 28 13"
          stroke="#25F4EE"
          strokeWidth="3.2"
          strokeLinecap="round"
          transform="translate(-1.3, -1)"
        />
        {/* Pink layer */}
        <path
          d="M21.2 6.8V22.4C21.2 24.9 19.2 26.9 16.7 26.9C14.2 26.9 12.2 24.9 12.2 22.4C12.2 19.9 14.2 17.9 16.7 17.9"
          stroke="#FE2C55"
          strokeWidth="3.2"
          strokeLinecap="round"
          transform="translate(1.3, 1)"
        />
        <path
          d="M21.2 6.8C22 10.2 24.5 12.6 28 13"
          stroke="#FE2C55"
          strokeWidth="3.2"
          strokeLinecap="round"
          transform="translate(1.3, 1)"
        />
        {/* Core black musical note */}
        <path
          d="M21.2 6.8V22.4C21.2 24.9 19.2 26.9 16.7 26.9C14.2 26.9 12.2 24.9 12.2 22.4C12.2 19.9 14.2 17.9 16.7 17.9"
          stroke="#111113"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M21.2 6.8C22 10.2 24.5 12.6 28 13"
          stroke="#111113"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (key.includes("etsy")) {
    return (
      <svg
        viewBox="0 0 52 28"
        fill="none"
        aria-hidden="true"
        className="h-6 w-auto sm:h-[26px]"
      >
        <text
          x="26"
          y="21.5"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="700"
          fontSize="22"
          fill="#F1641E"
        >
          Etsy
        </text>
      </svg>
    );
  }

  // Target Plus
  return (
    <svg
      viewBox="0 0 38 36"
      fill="none"
      aria-hidden="true"
      className="size-7 sm:size-[30px]"
    >
      <circle cx="17" cy="18.5" r="11.5" stroke="#CC0000" strokeWidth="3.8" />
      <circle cx="17" cy="18.5" r="4.2" fill="#CC0000" />
      <path
        d="M31.5 6.5V12.5M28.5 9.5H34.5"
        stroke="#CC0000"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
