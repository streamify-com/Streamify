"use client";

import React, { useState } from "react";
import { Fragment } from "react";
import { Icons } from "@shared-components/graphics/icons";
import { HomepageContainer } from "@shared-components/ui/container";
import { cn } from "@shared-components/lib/utils";
import { Button, buttonVariants } from "@shared-components/ui/button";

interface Tier {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  description: string;
  mostPopular: boolean;
}

interface Feature {
  name: string;
  tiers: {
    Basic?: boolean | string;
    Essential?: boolean | string;
    Premium?: boolean | string;
  };
}

const tiers = [
  {
    name: "Basic",
    id: "basic",
    href: "#",
    priceMonthly: "$9",
    description: "Quis suspendisse ut fermentum neque vivamus non tellus.",
    mostPopular: false,
  },
  {
    name: "Plus",
    id: "plus",
    href: "#",
    priceMonthly: "$29",
    description: "Quis eleifend a tincidunt pellentesque. A tempor in sed.",
    mostPopular: false,
  },
  {
    name: "Enterprise",
    id: "tier-premium",
    href: "#",
    priceMonthly: "$59",
    description:
      "Orci volutpat ut sed sed neque, dui eget. Quis tristique non.",
    mostPopular: false,
  },
];
const sections: { name: string; features: Feature[] }[] = [
  {
    name: "Features",
    features: [
      {
        name: "Integrations",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Shared links",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Importing and exporting",
        tiers: { Essential: true, Premium: true },
      },
      {
        name: "Team members",
        tiers: { Essential: "Up to 20 users", Premium: "Up to 50 users" },
      },
    ],
  },
  {
    name: "Reporting",
    features: [
      {
        name: "Advanced analytics",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      { name: "Basic reports", tiers: { Essential: true, Premium: true } },
      { name: "Professional reports", tiers: { Premium: true } },
      { name: "Custom report builder", tiers: { Premium: true } },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "24/7 online support",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Quarterly product workshops",
        tiers: { Essential: true, Premium: true },
      },
      {
        name: "Priority phone support",
        tiers: { Essential: true, Premium: true },
      },
      { name: "1:1 onboarding tour", tiers: { Premium: true } },
    ],
  },
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

const ComparisonSection: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const buttonLabel = showContent ? "Hide comparison" : "Show comparison";

  return (
    <div className="bg-background mt-6 hidden md:block">
      <HomepageContainer>
        <div className="flex flex-col items-center justify-center">
          <Button
            onClick={toggleContent}
            className={cn(
              buttonVariants({
                variant: "secondaryButton",
                size: "defaultSize",
              }),
            )}
          >
            {buttonLabel}
          </Button>
        </div>
        {showContent && (
          <div>
            <p className="text-highlight mt-10 text-2xl font-bold tracking-tight sm:text-2xl">
              Compare all plan features
            </p>
            <p className="text-md text-standard mx-auto mt-6 text-left leading-8">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
              quasi iusto modi velit ut non voluptas in. Explicabo id ut
              laborum.
            </p>
            <div className="mx-auto">
              <div className="isolate mt-20 hidden lg:block">
                <div className="relative -mx-8">
                  {tiers.some((tier) => tier.mostPopular) ? (
                    <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                      <div
                        className="flex w-1/4 px-4"
                        aria-hidden="true"
                        style={{
                          marginLeft: `${
                            (tiers.findIndex((tier) => tier.mostPopular) + 1) *
                            25
                          }%`,
                        }}
                      >
                        <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5" />
                      </div>
                    </div>
                  ) : null}
                  <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
                    <caption className="sr-only">
                      Pricing plan comparison
                    </caption>
                    <colgroup>
                      <col className="w-1/4" />
                      <col className="w-1/4" />
                      <col className="w-1/4" />
                      <col className="w-1/4" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <span className="sr-only">Price</span>
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 pt-2 xl:px-8">
                            <div className="inline-flex items-center justify-center w-full uppercase font-bold text-xl text-highlight">
                              {tier.name}
                            </div>
                            <a
                              href={tier.href}
                              className={classNames(
                                tier.mostPopular
                                  ? "bg-primary text-background md:hover:text-highlight border-primary md:hover:bg-background md:hover:border-highlight font-regular border"
                                  : "text-standard md:hover:text-highlight border-separator md:hover:bg-hoverground md:hover:border-highlight border bg-transparent",
                                "text-md font-regular focus-visible:ring-separator mt-6 inline-flex h-12 w-full items-center justify-center rounded-md px-4 py-2 text-center transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 md:h-12 md:w-full",
                              )}
                            >
                              Choose plan
                            </a>
                          </td>
                        ))}
                      </tr>
                      {sections.map((section, sectionIdx) => (
                        <Fragment key={section.name}>
                          <tr>
                            <th
                              scope="colgroup"
                              colSpan={4}
                              className={classNames(
                                sectionIdx === 0 ? "pt-8" : "pt-16",
                                "pb-4 text-md leading-6 text-highlight",
                              )}
                            >
                              {section.name}
                              <div className="absolute inset-x-8 mt-4 h-px bg-standard" />
                            </th>
                          </tr>
                          {section.features.map((feature) => (
                            <tr key={feature.name}>
                              <th
                                scope="row"
                                className="py-4 text-md leading-6 text-standard"
                              >
                                {feature.name}
                                <div className="absolute inset-x-8 mt-4 h-px bg-separator" />
                              </th>
                              {tiers.map((tier) => (
                                <td key={tier.id} className="px-6 py-4 xl:px-8">
                                  {typeof (feature.tiers as any)[tier.name] ===
                                  "string" ? (
                                    <div className="text-center text-sm leading-6 text-highlight">
                                      {(feature.tiers as any)[tier.name]}
                                    </div>
                                  ) : (
                                    <>
                                      {(feature.tiers as any)[tier.name] ===
                                      true ? (
                                        <Icons.check
                                          className="mx-auto h-5 w-5 text-primary"
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <Icons.minus
                                          className="mx-auto h-5 w-5 text-standard"
                                          aria-hidden="true"
                                        />
                                      )}
                                      <span className="sr-only">
                                        {(feature.tiers as any)[tier.name] ===
                                        true
                                          ? "Included"
                                          : "Not included"}{" "}
                                        in {tier.name}
                                      </span>
                                    </>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </HomepageContainer>
    </div>
  );
};

export default ComparisonSection;
