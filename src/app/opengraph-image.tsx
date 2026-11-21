import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

/**
 * Default Open Graph image for every route (generated at build time).
 * Add an `opengraph-image.tsx` inside a route segment — or pass `image`
 * to `buildMetadata()` with a file from /public/og — to override per page.
 */
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        // Light + #EBF5FB + #F4F4F4 backdrop with #232020 charcoal & #2674BC/#2AABE2 accents
        background: "linear-gradient(135deg, #ffffff 0%, #ebf5fb 52%, #f4f4f4 100%)",
        color: "#232020",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "#232020",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#2aabe2",
            fontSize: 36,
            fontWeight: 800,
          }}
        >
          ↗
        </div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800 }}>
          Rank<span style={{ color: "#2674bc" }}>Canyon</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, maxWidth: 960 }}>
          Profitable, predictable growth on Amazon.
        </div>
        <div style={{ fontSize: 30, color: "#575555" }}>
          PPC · DSP · Listing Optimization · Account Management
        </div>
      </div>
    </div>,
    size,
  );
}
