import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Studio Mascia — Commercialisti e Revisori Legali";

export default async function OpengraphImage() {
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
          background: "#0a1628",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 32, height: 1, background: "#c4a05a" }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#c4a05a",
            }}
          >
            Studio Mascia
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 300,
            color: "#fff",
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          Commercialisti e Revisori Legali
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "rgba(255,255,255,0.55)",
            marginTop: 28,
          }}
        >
          Palma Campania · Napoli · Dal 2012
        </div>
      </div>
    ),
    { ...size }
  );
}
