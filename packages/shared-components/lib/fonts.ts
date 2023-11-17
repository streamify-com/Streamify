import localFont from "next/font/local";

export const fontRegular = localFont({
  src: "../assets/fonts/Inter/Inter-Medium.ttf",
  variable: "--font-regular",
});

export const fontSemibold = localFont({
  src: "../assets/fonts/Inter/Inter-SemiBold.ttf",
  variable: "--font-semibold",
});

export const fontBold = localFont({
  src: "../assets/fonts/Inter/Inter-Bold.ttf",
  variable: "--font-bold",
});

export const fontItalic = localFont({
  src: "../assets/fonts/Inter/Inter-Italic.ttf",
  variable: "--font-italic",
});

export const fontHeading = localFont({
  src: "../assets/fonts/Hiragino/Hiragino-Mincho-ProN-W6.otf",
  variable: "--font-heading",
});
