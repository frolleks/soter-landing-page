import { ImageResponse } from "next/og";

export const alt = "Soter — Discord moderation that watches so you don't have to";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori needs raw TTF data, so pull Instrument Serif straight from Google Fonts at build time.
const css = await fetch(
  "https://fonts.googleapis.com/css2?family=Instrument+Serif",
).then((res) => res.text());
const fontUrl = css.match(/src: url\((.+?)\) format\('truetype'\)/)![1];
const instrumentSerif = await fetch(fontUrl).then((res) => res.arrayBuffer());

export default function Image() {
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
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at center, #1c1c1c 0%, #0a0a0a 55%)",
          color: "#fafafa",
          fontFamily: "Instrument Serif",
        }}
      >
        {[360, 560, 760, 960].map((d) => (
          <div
            key={d}
            style={{
              position: "absolute",
              left: (size.width - d) / 2,
              top: (size.height - d) / 2,
              width: d,
              height: d,
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          />
        ))}
        <svg
          width="112"
          height="112"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        <div
          style={{
            marginTop: 32,
            maxWidth: 920,
            fontSize: 84,
            lineHeight: 1.05,
            textAlign: "center",
          }}
        >
          Moderation that watches so you don&apos;t have to
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 36,
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          Soter · Discord moderation bot
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Instrument Serif", data: instrumentSerif, weight: 400 }],
    },
  );
}
