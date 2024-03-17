import { cn } from "@shared-components/lib/utils";

interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  description?: string | null;
  size?: "default" | "sm";
}

export function SignOutForm({
  title,
  description,
  size = "default",
  className,
  ...props
}: HeaderProps) {
  return (
    <div className={cn("grid gap-2", className)} {...props}>
      <h1
        className={cn(
          "text-primary text-2xl font-special tracking-tight",
          size === "default" && "sm:text-4xl",
        )}
      >
        {title}
      </h1>
      {description ? (
        <p
          className={cn("text-primary-muted", size === "default" && "text-md")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
