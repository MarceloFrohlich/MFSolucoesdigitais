import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#f5f1e6",
          backgroundImage:
            "linear-gradient(rgba(22,20,15,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(22,20,15,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#a3e635",
              border: "3px solid #16140f",
              borderRadius: 12,
              padding: "8px 16px",
              fontSize: 32,
              fontWeight: 800,
              color: "#16140f",
            }}
          >
            {"</>"}
          </div>
          <span style={{ fontSize: 28, fontWeight: 700, color: "#16140f", letterSpacing: 2 }}>
            SOLUÇÕES DIGITAIS
          </span>
        </div>

        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, color: "#16140f", lineHeight: 1.1 }}>
          Tecnologia que resolve
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 30 }}>
          <span
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#16140f",
              background: "#a3e635",
              padding: "0 16px",
            }}
          >
            problemas reais
          </span>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#57534a" }}>
          Sistemas, sites, aplicativos e integrações sob medida
        </div>
      </div>
    ),
    { ...size }
  );
}
