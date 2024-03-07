/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Databrix - Die kollaborative Data-Science Plattform zum Lernen.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // Font
  const interSemiBold = await fetch(
    new URL("../assets/fonts/Inter/Inter-SemiBold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #bde1ff 75%)",
        }}
      >
        <img
          src={new URL(
            "../../public/favicon/apple-touch-icon.png",
            import.meta.url,
          ).toString()}
          alt="Databrix Logo"
          tw="w-20 h-20 mb-4 opacity-95"
        />
        <h1
          style={{
            fontSize: "100px",
            background:
              "linear-gradient(to bottom right, #1E2B3A 21.66%, #78716c 86.47%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Headless Streaming
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
        },
      ],
    },
  );
}
