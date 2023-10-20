import localFont from "next/font/local";

export const fontRegular = localFont({
  src: "../assets/fonts/SF-Pro/SF-Pro-Text-Regular.otf",
  variable: "--font-regular",
});

export const fontBold = localFont({
  src: "../assets/fonts/SF-Pro/SF-Pro-Text-Bold.otf",
  variable: "--font-bold",
});

export const fontItalic = localFont({
  src: "../assets/fonts/SF-Pro/SF-Pro-Italic.ttf",
  variable: "--font-italic",
});

export const fontHeading = localFont({
  src: "../assets/fonts/Hiragino/Hiragino-Mincho-ProN-W6.otf",
  variable: "--font-heading",
});
