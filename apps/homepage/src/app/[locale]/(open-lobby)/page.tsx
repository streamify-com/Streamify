import StartPageForm from "@/components/form/start-page-form";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Build your own streaming platform",
  description: "Build your own streaming platform",
};

export default function StartPage() {
  return <StartPageForm />;
}
