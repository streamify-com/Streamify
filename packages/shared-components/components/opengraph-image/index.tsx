import { TestLogo } from "@shared-components/graphics/logo";
import { ImageResponse } from "next/og";
import { OpengraphFontPath } from "@shared-components/lib/fonts";

export type Props = {
  title?: string;
};

export const size = {
  width: 1200,
  height: 630,
};

// export const alt = siteConfig.description;

export default async function OpengraphImage(
  props?: Props,
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.PROJECT_NAME,
    },
    ...props,
  };

  // Font
  const ogFont = await fetch(
    new URL(OpengraphFontPath.semibold, import.meta.url),
  ).then((res) => res.arrayBuffer());

  // const interSemiBold = await fetch(
  //   new URL("../assets/fonts/Inter/Inter-SemiBold.ttf", import.meta.url),
  // ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl">
          <TestLogo width="64" height="58" />
        </div>
        <p tw="mt-12 text-6xl font-bold text-white">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: ogFont,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
