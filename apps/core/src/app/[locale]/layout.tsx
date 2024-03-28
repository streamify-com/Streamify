interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function PlatformLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}
