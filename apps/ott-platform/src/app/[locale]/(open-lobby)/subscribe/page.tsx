import SubscribeSection from "@/components/section/subscribe-section";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Subscribe",
};

export default function SubscribePage() {
  return (
    <>
      <div>
        <SubscribeSection />
      </div>
    </>
  );
}
