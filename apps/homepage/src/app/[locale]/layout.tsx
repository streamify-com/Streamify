import "@shared-components/styles/globals.css";
import type { Metadata } from "next";
import { cn } from "@shared-components/lib/utils";
import { ThemeProvider } from "@/components/feature/theme-provider";
import { VercelPerformanceAnalytics } from "@shared-components/components/vercel-analytics";
import { Toaster } from "@shared-components/ui/sonner-toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { siteConfig } from "@/config/site";
import {
  fontBold,
  fontSpecial,
  fontItalic,
  fontMedium,
  fontSemibold,
} from "@shared-components/lib/fonts";
import { env } from "@/env.mjs";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  manifest: "../../../public/manifest.json",
  themeColor: "#000000",
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "All-in-One",
    "B2B",
    "Club TV",
    "Content Business",
    "Content Creators",
    "Content Monetization",
    "Creators Economy",
    "Fan Engagement",
    "Fan Loyalty",
    "Headless Streaming",
    "Live streaming",
    "OTT",
    "SaaS",
    "Sports Streaming",
    "Sports TV",
    "Streaming",
    "Streaming Platform",
    "Video CMS",
    "Video on demand",
    "Video Platform",
    "White Label",
  ],
  authors: [
    {
      name: "Tin Votan",
      url: "https://github.com/Vintotan",
    },
  ],
  creator: "streamify",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://d2fplzddl6myl4.cloudfront.net/card/streamify-card.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages(locale);

  return (
    <>
      <ClerkProvider>
        <html lang={locale} suppressHydrationWarning>
          <head />
          <link rel="manifest" href="/manifest.json" />
          <body
            className={cn(
              "bg-background font-medium min-h-screen antialiased",
              fontMedium.variable,
              fontItalic.variable,
              fontSemibold.variable,
              fontBold.variable,
              fontSpecial.variable,
            )}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
              </NextIntlClientProvider>
            </ThemeProvider>
            <Toaster />
            <VercelPerformanceAnalytics />
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
