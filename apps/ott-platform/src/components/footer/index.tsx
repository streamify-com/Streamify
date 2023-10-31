"use client";

import {
  FacebookIcon,
  TwitterIcon,
  ThreadsIcon,
  GithubIcon,
  TwitchIcon,
  YoutubeIcon,
  LinkedinIcon,
  DiscordIcon,
  InstagramIcon,
  TiktokIcon,
} from "@shared-components/graphics/icons";
import { PlatformContainer } from "@shared-components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shared-components/ui/accordion";
import { LocaleChoose, LocaleSwitcher } from "@/components/locale-switcher";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import {
  ApplepayLogo,
  GooglepayLogo,
  KlarnaLogo,
  MastercardLogo,
  PaypalLogo,
  SofortLogo,
  VisaLogo,
} from "@shared-components/graphics/logo";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { ThemeModeSelector } from "@/components/mode-theme";

interface IconProps extends JSX.IntrinsicAttributes {
  className?: string;
}

const navigationWebsite = {
  // solutions: [
  //   { name: "Marketing", href: "#" },
  //   { name: "Analytics", href: "#" },
  //   { name: "Commerce", href: "#" },
  //   { name: "Insights", href: "#" },
  // ],
  // support: [
  //   { name: "Pricing", href: "#" },
  //   { name: "Documentation", href: "#" },
  //   { name: "Guides", href: "#" },
  //   { name: "API Status", href: "#" },
  // ],
  // company: [
  //   { name: "About", href: "#" },
  //   { name: "Blog", href: "#" },
  //   { name: "Jobs", href: "#" },
  //   { name: "Partners", href: "#" },
  // ],
  // legal: [
  //   { name: "Cookie Policy", href: "#" },
  //   { name: "Privacy Policy", href: "#" },
  //   { name: "Terms of Services", href: "#" },
  //   { name: "Imprint", href: "#" },
  // ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <FacebookIcon {...props} />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <InstagramIcon {...props} />,
    },
    {
      name: "Threads",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <ThreadsIcon {...props} />,
    },
    // {
    //   name: "GitHub",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <GithubIcon {...props} />,
    // },
    {
      name: "YouTube",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <YoutubeIcon {...props} />,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <LinkedinIcon {...props} />,
    },
    // {
    //   name: "Discord",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <DiscordIcon {...props} />,
    // },
    {
      name: "Twitch",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <TwitchIcon {...props} />,
    },
    {
      name: "TikTok",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <TiktokIcon {...props} />,
    },
  ],
};

export function FooterDeclarationLayout() {
  const t = useTranslations("footer-declaration");
  return (
    <footer className="border-separator bg-background/75 z-0 border-t py-6 backdrop-blur-xl">
      <PlatformContainer>
        <div className="md:flex md:justify-between">
          <div className="flex flex-col gap-4 md:order-1 order-3 md:flex-row w-full">
            <ThemeModeSelector />
          </div>
          <div className="md:mt-2 my-4 md:my-0 md:order-2 order-2 w-full">
            <p className="font-regular text-standard text-center justify-center text-xs leading-5">
              &copy;&nbsp;{t("company")}&nbsp;{new Date().getFullYear()}.&nbsp;
              {t("all-rights-reserved")}
            </p>
          </div>
          <div className="flex justify-center md:justify-end space-x-2 md:order-3 order-1 w-full">
            {navigationWebsite.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-standard md:hover:text-highlight h-8 w-8 rounded-md bg-transparent md:hover:bg-hoverground flex justify-center items-center border border-transparent md:hover:border-separator"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon({ className: "h-4 w-4 md:h-5 md:w-5" } as IconProps)}
              </Link>
            ))}
          </div>
        </div>
      </PlatformContainer>
    </footer>
  );
}

export function FooterPlatformLayout() {
  const t = useTranslations("footer-platform");
  return (
    <footer className="border-separator bg-background/75 z-0 border-t backdrop-blur-xl">
      <PlatformContainer>
        <div className="mx-auto md:flex md:items-center md:justify-between">
          <nav
            className="text-center my-6 sm:flex sm:justify-center sm:space-x-10"
            aria-label="Footer"
          >
            {/* {navigationPlatform.main.map((item, index) => (
            <div key={index} className="pb-6">
              <Link
                href={item.href}
                className="font-regular text-md text-standard hover:text-highlight leading-6 p-2 rounded-md bg-transparent hover:bg-hoverground border border-transparent hover:border-separator"
              >
                {item.name}
              </Link>
            </div>
          ))} */}
            <div className="my-4 sm:my-0 sm:space-x-8 sm:flex hidden">
              <Link
                href={t("terms-of-services.href")}
                className="font-regular text-standard md:hover:text-highlight md:hover:bg-hoverground md:hover:border-separator rounded-md border border-transparent bg-transparent px-2 py-1 text-sm leading-6"
              >
                {t("terms-of-services.name")}
              </Link>
              <Link
                href={t("privacy-policy.href")}
                className="font-regular text-standard md:hover:text-highlight md:hover:bg-hoverground md:hover:border-separator rounded-md border border-transparent bg-transparent px-2 py-1 text-sm leading-6"
              >
                {t("privacy-policy.name")}
              </Link>
              <Link
                href={t("cookie-policy.href")}
                className="font-regular text-standard md:hover:text-highlight md:hover:bg-hoverground md:hover:border-separator rounded-md border border-transparent bg-transparent px-2 py-1 text-sm leading-6"
              >
                {t("cookie-policy.name")}
              </Link>
              <Link
                href={t("imprint.href")}
                className="font-regular text-standard md:hover:text-highlight md:hover:bg-hoverground md:hover:border-separator rounded-md border border-transparent bg-transparent px-2 py-1 text-sm leading-6"
              >
                {t("imprint.name")}
              </Link>
              <Link
                href={t("cancel-subscription.href")}
                className="font-regular text-standard md:hover:text-highlight md:hover:bg-hoverground md:hover:border-separator rounded-md border border-transparent bg-transparent px-2 py-1 text-sm leading-6"
              >
                {t("cancel-subscription.name")}
              </Link>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full md:hidden block"
            >
              <AccordionItem value="item-1" className="border-transparent">
                <AccordionTrigger className="text-md text-highlight font-bold leading-6">
                  {t("sitemap.name")}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col items-start">
                    <Link
                      href={t("terms-of-services.href")}
                      className="font-regular text-standard md:hover:text-highlight md:hover:bg-hoverground md:hover:border-separator rounded-md border border-transparent bg-transparent px-2 py-1 text-sm leading-6"
                    >
                      {t("terms-of-services.name")}
                    </Link>
                    <Link
                      href={t("privacy-policy.href")}
                      className="font-regular text-standard md:hover:text-highlight md:hover:bg-hoverground md:hover:border-separator rounded-md border border-transparent bg-transparent px-2 py-1 text-sm leading-6"
                    >
                      {t("privacy-policy.name")}
                    </Link>
                    <Link
                      href={t("cookie-policy.href")}
                      className="font-regular text-standard md:hover:text-highlight md:hover:bg-hoverground md:hover:border-separator rounded-md border border-transparent bg-transparent px-2 py-1 text-sm leading-6"
                    >
                      {t("cookie-policy.name")}
                    </Link>
                    <Link
                      href={t("imprint.href")}
                      className="font-regular text-standard md:hover:text-highlight md:hover:bg-hoverground md:hover:border-separator rounded-md border border-transparent bg-transparent px-2 py-1 text-sm leading-6"
                    >
                      {t("imprint.name")}
                    </Link>
                    <Link
                      href={t("cancel-subscription.href")}
                      className="font-regular text-standard md:hover:text-highlight md:hover:bg-hoverground md:hover:border-separator rounded-md border border-transparent bg-transparent px-2 py-1 text-sm leading-6"
                    >
                      {t("cancel-subscription.name")}
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
          <div className="mb-6 md:mb-0">
            <Link
              href={t("support.href")}
              className={cn(
                buttonVariants({
                  variant: "primaryButton",
                  size: "headerSize",
                }),
                "text-md h-12 w-full px-4 py-2 md:h-9",
              )}
            >
              {t("support.name")}
            </Link>
          </div>
        </div>
      </PlatformContainer>
    </footer>
  );
}

export function FooterPaymentLayout() {
  const t = useTranslations("footer-payment");

  const logos = [
    { logo: VisaLogo, className: "h-6 md:h-8 w-auto" },
    { logo: MastercardLogo, className: "h-4 md:h-6 w-auto" },
    { logo: PaypalLogo, className: "h-8 md:h-12 w-auto" },
    { logo: SofortLogo, className: "h-3 md:h-4 w-auto" },
    // { logo: KlarnaLogo, className: 'h-3 md:h-4 w-auto' },
    { logo: ApplepayLogo, className: "h-6 md:h-8 w-auto" },
    { logo: GooglepayLogo, className: "h-6 md:h-8 w-auto" },
  ];

  return (
    <footer className="bg-background/75 border-t border-separator z-0 py-6 backdrop-blur-xl">
      <PlatformContainer>
        <div className="mx-auto md:flex md:items-center md:justify-between">
          <div className="md:order-1 md:mt-0">
            <LocaleChoose />
          </div>
          <div className="flex gap-x-2 justify-between md:order-2 mt-4 md:mt-0">
            {logos.map((logoData, index) => (
              <div
                key={index}
                className="flex items-center h-10 w-20 rounded-md border border-separator bg-hoverground justify-center md:order-2"
              >
                <logoData.logo
                  className={logoData.className}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </PlatformContainer>
    </footer>
  );
}
