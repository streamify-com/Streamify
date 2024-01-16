import Header from "@/components/header";
import {
  FooterDeclarationLayout,
  FooterPaymentLayout,
  FooterPlatformLayout,
} from "@/components/footer";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Cookie from "@/components/cookie";

interface PlatformLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function PlatformLayout({
  children,
  params: { locale },
}: PlatformLayoutProps) {
  const user = await currentUser();

  if (!user) {
    redirect(`/${locale}/subscribe`);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header user={user} />
      <main className="flex-1 my-10">{children}</main>
      <Cookie />
      <FooterPlatformLayout />
      <FooterPaymentLayout />
      <FooterDeclarationLayout />
    </div>
  );
}
