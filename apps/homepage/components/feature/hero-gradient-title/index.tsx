import "./home.css";

interface HeroGradientTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeroGradientTitle({
  children,
  className,
}: HeroGradientTitleProps) {
  const combinedClassName = `gradient text-transparent ${className || ""}`;

  return <p className={combinedClassName}>{children}</p>;
}
