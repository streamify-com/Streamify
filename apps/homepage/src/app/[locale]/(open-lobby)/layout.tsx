import { Header } from "@/components/layout/header";
import {
  FooterDeclarationLayout,
  FooterHomepageLayout,
} from "@/components/layout/footer";
import { currentUser } from "@clerk/nextjs";
import Cookie from "@/components/feature/cookie";
import { redirect } from "next/navigation";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

export default async function OpenLobbyLayout({
  children,
}: PlatformLayoutProps) {
  const user = await currentUser();

  // if (user) {
  //   redirect("/dashboard");
  // }

  return (
    <div className="flex min-h-screen flex-col">
      <Header user={user} />
      <main className="flex-1">{children}</main>
      <Cookie />
      <FooterHomepageLayout />
      <FooterDeclarationLayout />
    </div>
  );
}
