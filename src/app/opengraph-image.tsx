import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.developerName} — WordPress Developer`;
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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b1120",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#e5590e",
            fontSize: 24,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          WordPress Development
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 28,
            fontSize: 68,
            fontWeight: 900,
            lineHeight: 1.08,
            color: "#ffffff",
            maxWidth: 1000,
          }}
        >
          Websites that turn visitors into&nbsp;
          <span
            style={{
              display: "flex",
              backgroundColor: "#e5590e",
              color: "#201007",
              padding: "0 14px",
              borderRadius: 10,
            }}
          >
            customers.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 30,
            color: "#cbd2e1",
          }}
        >
          {siteConfig.developerName} — WordPress Developer
        </div>
      </div>
    ),
    { ...size }
  );
}
