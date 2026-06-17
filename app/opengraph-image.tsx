import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Black Flag Galley — Fresh Local Seafood in Kitty Hawk, NC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "radial-gradient(ellipse at center, #1a1614 0%, #0b0d10 70%, #000 100%)",
          color: "#f2ebd7",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 22,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#a88438",
            marginBottom: 24,
          }}
        >
          <span style={{ display: "block", width: 60, height: 1, background: "#a88438" }} />
          Kitty Hawk · NC
          <span style={{ display: "block", width: 60, height: 1, background: "#a88438" }} />
        </div>
        <div
          style={{
            fontSize: 96,
            lineHeight: 1.02,
            textAlign: "center",
            fontWeight: 500,
            letterSpacing: -2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Black Flag Galley</span>
          <span style={{ fontStyle: "italic", color: "#a88438", fontSize: 60, marginTop: 18 }}>
            Seafood &amp; Spirits
          </span>
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 20,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#f2ebd7",
            opacity: 0.85,
          }}
        >
          Opening Soon · @blackflaggalleyobx
        </div>
      </div>
    ),
    { ...size },
  );
}
