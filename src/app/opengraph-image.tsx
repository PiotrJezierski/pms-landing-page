import { ImageResponse } from "next/og";

export const alt = "PropertyPMS — AI-native zarządzanie wynajmem krótkoterminowym";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090B",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,214,160,0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #6366F1 0%, #06D6A0 100%)",
            marginBottom: "32px",
            fontSize: "36px",
            fontWeight: 900,
            color: "white",
          }}
        >
          P
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "56px",
            fontWeight: 900,
            color: "white",
            letterSpacing: "-1px",
            marginBottom: "16px",
          }}
        >
          Property
          <span style={{ color: "#818CF8" }}>PMS</span>
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#A1A1AA",
            textAlign: "center",
            maxWidth: "700px",
          }}
        >
          AI-native zarządzanie wynajmem krótkoterminowym
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #6366F1 0%, #06D6A0 50%, #6366F1 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
