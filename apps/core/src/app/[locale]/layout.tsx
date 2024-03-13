interface RootLayoutProps {
  children: React.ReactNode;
}

export default function LocaleLayout({ children }: RootLayoutProps) {
  return <>{children}</>;
}
