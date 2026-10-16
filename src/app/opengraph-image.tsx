import { ImageResponse } from "next/og";

import { profile } from "@/data/portfolio";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social sharing card, generated at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#f5f3ee",
        color: "#121417",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 26,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#5a5f68",
          borderTop: "3px solid #121417",
          paddingTop: 24,
        }}
      >
        <span style={{ color: "#a63a1c" }}>{profile.title}</span>
        <span>{profile.location}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 124, lineHeight: 1, letterSpacing: -4 }}>{profile.name}</div>
        <div
          style={{ marginTop: 28, fontSize: 38, lineHeight: 1.3, color: "#24272d", maxWidth: 940 }}
        >
          {`${profile.headline.lead} ${profile.headline.emphasis}`}
        </div>
      </div>
    </div>,
    size,
  );
}
