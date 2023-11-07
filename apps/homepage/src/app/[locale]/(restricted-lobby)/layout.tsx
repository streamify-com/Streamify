import { Header } from "@/components/layout/header";
import {
  FooterDeclarationLayout,
  FooterHomepageLayout,
  FooterPaymentLayout,
} from "@/components/layout/footer";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Cookie from "@/components/feature/cookie";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

export default async function RestrictedLobbyLayout({
  children,
}: PlatformLayoutProps) {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header user={user} />
      <main className="flex-1 my-10">{children}</main>
      <Cookie />
      <FooterHomepageLayout />
      <FooterPaymentLayout />
      <FooterDeclarationLayout />
    </div>
  );
}
