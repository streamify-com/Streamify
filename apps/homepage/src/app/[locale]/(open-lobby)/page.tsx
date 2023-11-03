import StartPageForm from "@/components/form/start-page-form";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Streamify",
  description: "Streamify",
};

export default function StartPage() {
  return <StartPageForm />;
}
