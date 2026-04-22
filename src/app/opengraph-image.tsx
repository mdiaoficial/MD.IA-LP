import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MD.IA — O motor da sua clínica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(30,123,255,0.35), transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(184,69,232,0.25), transparent 50%), #000",
          color: "#fff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#E8C467",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <div style={{ width: 40, height: 2, background: "#D4A944" }} />
          MD.IA · Medical Intelligence
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            fontSize: 92,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          <div>
            O <i style={{ color: "#E8C467" }}>motor</i>
          </div>
          <div>da sua clínica.</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#B8B8C4",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ color: "#4DA3FF" }}>Dr. Daniel Dorta</div>
            <div
              style={{
                fontSize: 16,
                color: "#6B6B7A",
                fontFamily: "ui-monospace, monospace",
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Médico · Arquiteto de IA
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 14,
              color: "#6B6B7A",
              fontFamily: "ui-monospace, monospace",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            <span>Meta Business Partner</span>
            <span>·</span>
            <span>Google Partner</span>
            <span>·</span>
            <span>LGPD</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
