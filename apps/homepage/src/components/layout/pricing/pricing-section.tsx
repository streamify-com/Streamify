"use client";

import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { HomepageContainer } from "@shared-components/ui/container";
import { Icons } from "@shared-components/graphics/icons";
import Link from "next-intl/link";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { ExpandingArrowRight } from "@shared-components/graphics/icons";

type FrequencyProps = {
  value: string;
  label: string;
  priceSuffix: string;
};

type TierProps = {
  name: string;
  id: string;
  href: string;
  price: Record<string, string>;
  description: string;
  features: string[];
  mostPopular: boolean;
};

const frequencies: FrequencyProps[] = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually (save 15%)", priceSuffix: "/year" },
];

const tiers: TierProps[] = [
  {
    name: "BASIC",
    id: "tier-hobby",
    href: "#",
    price: { monthly: "€15", annually: "€144" },
    description:
      "The essentials to provide your best work for clients. Start with a minimal setup.",
    features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
    mostPopular: false,
  },
  {
    name: "PLUS",
    id: "tier-startup",
    href: "#",
    price: { monthly: "€60", annually: "€576" },
    description:
      "A plan that scales with your rapidly growing business and teams.",
    features: [
      "Everything in BASIC included",
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: { monthly: "Custom", annually: "Custom" },
    description:
      "Optimized infrastructure for sport clubs to increase fan engagement.",
    features: [
      "Everything in PLUS included",
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
    mostPopular: false,
  },
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingSection() {
  const t = useTranslations("pricing");
  const [frequency, setFrequency] = useState<FrequencyProps>(frequencies[0]!);

  return (
    <div className="bg-transparent py-10">
      <HomepageContainer>
        <div className="mx-auto">
          <div className="mx-auto text-center">
            <h2 className="font-special text-action text-4xl tracking-tight sm:text-5xl">
              {t("title")}
            </h2>
          </div>
          <p className="font-regular text-primary mx-auto mt-6 text-center text-lg">
            {t("subtitle")}
          </p>
          <p className="font-regular text-primary mx-auto mb-6 mt-2 text-center text-lg">
            {t("description")}
          </p>
          <div className="mt-16 flex justify-center">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="font-regular ring-separator grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-sm leading-5 ring-1 ring-inset"
            >
              <RadioGroup.Label className="sr-only">
                Payment frequency
              </RadioGroup.Label>
              {/* {frequencies.map((option) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    classNames(
                      checked
                        ? "bg-primary text-background font-regular"
                        : "text-primary font-regular",
                      "cursor-pointer rounded-full px-3 py-1",
                    )
                  }
                >
                  <span>{option.label}</span>
                </RadioGroup.Option>
              ))} */}
              <RadioGroup.Option
                value={t("monthly")}
                className={({ checked }) =>
                  classNames(
                    checked
                      ? "bg-primary text-background font-regular"
                      : "text-primary font-regular",
                    "cursor-pointer rounded-full px-3 py-1",
                  )
                }
              >
                <span>{t("monthly")}</span>
              </RadioGroup.Option>
              <RadioGroup.Option
                value={t("yearly")}
                className={({ checked }) =>
                  classNames(
                    checked
                      ? "bg-primary text-background font-regular"
                      : "text-primary font-regular",
                    "cursor-pointer rounded-full px-3 py-1",
                  )
                }
              >
                <span>{t("yearly")}</span>
              </RadioGroup.Option>
            </RadioGroup>
          </div>
          <div className="isolate mx-auto mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 lg:mx-0 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "border-primary border"
                    : "border-separator border",
                  "rounded-md p-8",
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? "text-primary" : "text-primary",
                    "text-lg font-bold uppercase",
                  )}
                >
                  {tier.name}
                </h3>
                <p className="text-md font-regular text-primary mt-4 h-20">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-primary text-4xl font-bold tracking-tight">
                    {tier.price[frequency.value]}
                  </span>
                  <span className="text-md text-primary">
                    {frequency.priceSuffix}
                  </span>
                </p>
                <Link
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-primary text-background sm:hover:text-primary border-primary sm:hover:bg-background-hover sm:hover:border-primary border"
                      : "text-primary sm:hover:text-primary border-separator sm:hover:bg-background-hover sm:hover:border-primary border bg-transparent",
                    "text-md focus-visible:ring-separator mt-6 inline-flex h-10 w-full items-center justify-center rounded-md px-4 py-2 text-center transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:w-full",
                  )}
                >
                  Choose plan
                </Link>
                <ul
                  role="list"
                  className="text-md font-regular text-primary mt-8 space-y-3"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Icons.check
                        className="text-primary h-6 w-5 flex-none"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="ring-separator mt-10 flex flex-col items-start gap-x-8 gap-y-6 rounded-md p-8 ring-1 sm:gap-y-10 sm:p-10 md:col-span-2 md:flex-row md:items-center">
            <div className="md:min-w-0 md:flex-1">
              <h3 className="text-primary text-lg font-bold uppercase leading-8 tracking-tight">
                Your are a sports club?
              </h3>
              <p className="font-regular text-primary mt-4 leading-7">
                Streamify Sports is the perfect solution for dedicated sports
                OTT with additional features to serve your content and optimzed
                for fan engagement.
              </p>
            </div>
            <Link
              href="/sports"
              className={cn(
                buttonVariants({
                  variant: "actionButton",
                  size: "fixedSize",
                }),
                "mt-4 w-full sm:w-64",
              )}
            >
              <span className="mr-2.5">Streamify Sports</span>
              <ExpandingArrowRight />
            </Link>
          </div>
        </div>
      </HomepageContainer>
    </div>
  );
}
