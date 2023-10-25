import PlusSection from "@/components/section/plus-section";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus",
  description: "Plus",
};

export default function IndexPage() {
  return (
    <div>
      <PlusSection />
    </div>
  );
}
