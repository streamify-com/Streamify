import { PrimaryFavicon } from "@shared-components/graphics/streamify";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 500,
  height: 500,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div tw="flex h-full w-full items-center justify-center">
        <PrimaryFavicon />
      </div>
    ),
    {
      ...size,
    },
  );
}
