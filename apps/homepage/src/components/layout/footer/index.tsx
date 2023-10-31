"use client";

import {
  FacebookIcon,
  TwitterIcon,
  GithubIcon,
  ThreadsIcon,
  TwitchIcon,
  YoutubeIcon,
  LinkedinIcon,
  DiscordIcon,
  InstagramIcon,
  TiktokIcon,
} from "@shared-components/graphics/icons";
import { buttonVariants } from "@shared-components/ui/button";
import { cn } from "@shared-components/lib/utils";
import { Icons } from "@shared-components/graphics/icons";
import { Input } from "@shared-components/ui/input";
import { PrimaryLogo } from "@shared-components/graphics/logo";
import { HomepageContainer } from "@shared-components/ui/container";
import { ModeSelection } from "@/components/mode-theme";
import LocaleSwitcher from "@/components/feature/locale-switcher";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shared-components/ui/accordion";

interface IconProps extends JSX.IntrinsicAttributes {
  className?: string;
}

const navigationWebsite = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Cookie Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Services", href: "#" },
    { name: "Imprint", href: "#" },
  ],
  social: [
    // {
    //   name: "Facebook",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <FacebookIcon {...props} />,
    // },
    {
      name: "Instagram",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <InstagramIcon {...props} />,
    },
    // {
    //   name: "Threads",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <ThreadsIcon {...props} />,
    // },
    {
      name: "Twitter",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <TwitterIcon {...props} />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <GithubIcon {...props} />,
    },
    // {
    //   name: "YouTube",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <YoutubeIcon {...props} />,
    // },
    // {
    //   name: "LinkedIn",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <LinkedinIcon {...props} />,
    // },
    // {
    //   name: "Discrod",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <DiscordIcon {...props} />,
    // },
    // {
    //   name: "Twitch",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <TwitchIcon {...props} />,
    // },
    // {
    //   name: "TikTok",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <TiktokIcon {...props} />,
    // },
  ],
};

export function FooterHomepageLayout() {
  const t = useTranslations("footer-homepage");
  return (
    <footer
      className="border-separator bg-background/75 bottom-0 z-0 border-t py-10 backdrop-blur-xl"
      aria-labelledby="footer-heading"
    >
      <HomepageContainer>
        <div className="item-center mt-5 flex justify-between">
          <PrimaryLogo className="text-primary h-8 w-auto" />
        </div>
        <div className="pb-8 pt-12 sm:pt-12 lg:pt-12">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="md:grid grid-cols-2 gap-8 xl:col-span-2 hidden">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md text-highlight font-bold leading-6 px-2">
                    {t("solutions.name")}
                  </h3>
                  {/* <ul role="list" className="mt-6 space-y-4"> */}
                  {/* {navigationWebsite.solutions.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        href={t("solutions.studio.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("solutions.studio.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("solutions.sports.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("solutions.sports.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("solutions.analytics.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("solutions.analytics.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("solutions.atlas.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("solutions.atlas.name")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md text-highlight font-bold leading-6 px-2">
                    {t("support.name")}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {/* {navigationWebsite.support.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={t("support.pricing.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("support.pricing.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("support.documentation.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("support.documentation.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("support.guides.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("support.guides.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("support.programs.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("support.programs.name")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md text-highlight font-bold leading-6 px-2">
                    {t("company.name")}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {/* {navigationWebsite.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={t("company.about-us.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("company.about-us.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("company.blog.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("company.blog.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("company.jobs.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("company.jobs.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("company.partners.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("company.partners.name")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md text-highlight font-bold leading-6 px-2">
                    {t("legal.name")}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {/* {navigationWebsite.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={t("legal.terms-of-services.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("legal.terms-of-services.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("legal.privacy-policy.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("legal.privacy-policy.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("legal.cookie-policy.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("legal.cookie-policy.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("legal.imprint.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("legal.imprint.name")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full md:hidden block"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md text-highlight leading-6 px-2">
                  {t("solutions.name")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        href={t("solutions.studio.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("solutions.studio.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("solutions.sports.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("solutions.sports.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("solutions.analytics.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("solutions.analytics.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("solutions.atlas.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("solutions.atlas.name")}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-md text-highlight leading-6 px-2">
                  {t("support.name")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul role="list" className="mt-6 space-y-4">
                    {/* {navigationWebsite.support.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={t("support.pricing.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("support.pricing.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("support.documentation.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("support.documentation.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("support.guides.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("support.guides.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("support.programs.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("support.programs.name")}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-md text-highlight leading-6 px-2">
                  {t("company.name")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul role="list" className="mt-6 space-y-4">
                    {/* {navigationWebsite.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={t("company.about-us.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("company.about-us.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("company.blog.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("company.blog.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("company.jobs.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("company.jobs.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("company.partners.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("company.partners.name")}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-transparent">
                <AccordionTrigger className="text-md text-highlight leading-6 px-2">
                  {t("legal.name")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul role="list" className="mt-6 space-y-4">
                    {/* {navigationWebsite.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={t("legal.terms-of-services.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("legal.terms-of-services.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("legal.privacy-policy.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("legal.privacy-policy.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("legal.cookie-policy.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("legal.cookie-policy.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("legal.imprint.href")}
                        className="font-regular text-md text-standard md:hover:text-highlight leading-6 p-2 rounded-md bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator"
                      >
                        {t("legal.imprint.name")}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-10 md:mt-0 md:ml-4">
              <h3 className="text-md text-highlight font-bold leading-6">
                {t("newsletter.title")}
              </h3>
              <p className="text-md text-standard mt-2 leading-6">
                {t("newsletter.description")}
              </p>
              <form className="mt-6">
                <div className="space-x-2mt-10 flex flex-col items-center gap-4 md:flex-row">
                  <Input
                    type="email"
                    placeholder={t("newsletter.placeholder")}
                  />
                  <Link
                    href="/"
                    className={cn(
                      buttonVariants({
                        variant: "primaryButton",
                        size: "defaultSize",
                      }),
                    )}
                  >
                    {t("newsletter.button")}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="item-center left-0 mt-5 flex gap-5">
          <Icons.GDPRIcon className="border-separator text-standard h-16 w-16 rounded-full border p-2 md:hover:border-white md:hover:bg-[#00349A] md:hover:text-[#FFCC00]" />
        </div> */}
      </HomepageContainer>
    </footer>
  );
}

export function FooterDeclarationLayout() {
  const t = useTranslations("footer-declaration");
  return (
    <footer className="border-separator bg-background/75 z-0 border-t py-6 backdrop-blur-xl">
      <HomepageContainer>
        <div className="md:flex md:justify-between">
          <div className="mt-3 md:order-2">
            <p className="font-regular text-standard text-center justify-center text-xs leading-5">
              &copy; {t("company")} {new Date().getFullYear()}.{" "}
              {t("all-rights-reserved")}
            </p>
          </div>
          <div className="mt-3 flex justify-center space-x-2 md:order-1">
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
          <div className="mt-5 flex flex-col gap-4 md:order-3 md:mt-0 md:flex-row">
            <LocaleSwitcher />
            <ModeSelection />
          </div>
        </div>
      </HomepageContainer>
    </footer>
  );
}
