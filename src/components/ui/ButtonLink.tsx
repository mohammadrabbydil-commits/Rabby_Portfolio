import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "inverse" | "inverse-outline";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 active:translate-y-px";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink text-paper hover:bg-accent",
  secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  inverse: "bg-paper text-ink hover:bg-accent-light",
  "inverse-outline":
    "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

/** An anchor styled as a button. Used for in-page links, downloads and mailto. */
export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </a>
  );
}
