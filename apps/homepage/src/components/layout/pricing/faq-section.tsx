"use client";

import React from "react";
import { HomepageContainer } from "@shared-components/ui/container";
import { Disclosure } from "@headlessui/react";
import { Icons } from "@shared-components/graphics/icons";

const faqs = [
  {
    question:
      "Can I find matches on other platforms like YouTube, Twitch, etc.?",
    answer:
      "In short, no. There is a regulation which contains that specific video content must be under conditions of a paywall. Those content must be monetized by the provider.",
  },
  {
    question: "On which devices can I watch?",
    answer:
      "On every device with a stable internet connection and a browser. We recommend smartphones, PCs or tablets.",
  },
  {
    question: "What if I'm not interested anymore?",
    answer:
      "You can pause your subscription or cancel your subscription anytime.",
  },
];

export default function FaqSection() {
  return (
    <div className="bg-transparent">
      <HomepageContainer>
        <div className="mx-auto py-20">
          <div className="divide-separator mx-auto divide-y">
            <h2 className="text-primary text-2xl font-bold leading-10 tracking-tight">
              Frequently asked questions
            </h2>
            <dl className="divide-separator mt-10 space-y-6 divide-y">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="text-primary flex w-full items-start justify-between text-left">
                          <span className="text-primary leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <Icons.chevronUp
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <Icons.chevronDown
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-primary leading-7">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </HomepageContainer>
    </div>
  );
}
