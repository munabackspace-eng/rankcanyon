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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.2 8.8C10 5.2 13.6 3.4 18.2 3.4C23.2 3.4 25.8 5.6 25.8 10.2L25.8 18.6C25.8 20.3 26.5 21.2 27.4 22.3C27.7 22.7 27.6 23.1 27.2 23.4L25.1 25.1C24.7 25.4 24.3 25.3 23.9 25C22.9 24.1 22.3 23.3 21.7 22.2C19.6 24.4 17.6 25.3 14.6 25.3C10.8 25.3 8.2 22.9 8.2 18.9C8.2 15.2 10.4 12.9 13.8 11.7C16.4 10.8 19.2 10.5 21.2 10.3L21.2 9.6C21.2 7.6 20.1 6.6 17.9 6.6C15.9 6.6 14.5 7.6 14.1 9.4C14 9.9 13.6 10.2 13.1 10.1L9.8 9.6C9.3 9.5 9.1 9.2 9.2 8.8ZM21.2 13.6C18 13.7 13.2 14.4 13.2 18.2C13.2 20.2 14.4 21.4 16.2 21.4C17.8 21.4 19.3 20.4 20.2 18.9C21.1 17.4 21.2 15.9 21.2 14.3Z"
          fill="#131921"
        />
        {/* Tapered Amazon Smile Arrow */}
        <path
          d="M5 27.2C10.5 30.6 17.5 31.8 23.8 30.9C26.8 30.5 29.4 29.5 31.2 28.4C31.7 28.1 32.1 28.6 31.6 29.1C28.5 32.1 23.4 34 17.8 34C11.6 34 6.8 31.4 4.5 27.9C4.2 27.5 4.6 27 5 27.2Z"
          fill="#FF9900"
        />
        <path
          d="M27.6 26.8C29.8 26.4 32.8 26.6 33.3 27.3C33.8 28 33.1 31.2 31.2 32.8C30.9 33.1 30.5 32.9 30.7 32.5C31.4 30.9 32 28.7 31.5 28.1C31 27.5 29 27.5 27.6 27.6C27.2 27.6 27.2 26.9 27.6 26.8Z"
          fill="#FF9900"
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
