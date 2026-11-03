import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

// Preview image shown when the site is shared on WhatsApp, Facebook, LinkedIn, etc.
export const dynamic = "force-static";
export const alt = "Markhor Extreme Inc. — Wholesale Pokémon Supplier, Exporting Worldwide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logo = readFileSync(join(process.cwd(), "public", "logo-icon.svg"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0284c7 0%, #075985 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "48px" }}>
          <img src={`data:image/svg+xml;base64,${logo}`} width={96} height={96} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: 2 }}>MARKHOR</div>
            <div style={{ fontSize: 24, fontWeight: 600, opacity: 0.85 }}>EXTREME INC.</div>
          </div>
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1 }}>Wholesale Pokémon Supplier</div>
        <div style={{ fontSize: 56, fontWeight: 800, color: "#fde047", marginTop: 8 }}>Exporting Worldwide</div>
        <div style={{ fontSize: 30, marginTop: 40, opacity: 0.9 }}>Booster Boxes · ETBs · Sealed Cases · Graded Cards</div>
        <div style={{ fontSize: 30, marginTop: 8, fontWeight: 700, color: "#86efac" }}>Bulk deals on WhatsApp</div>
      </div>
    ),
    size
  );
}
