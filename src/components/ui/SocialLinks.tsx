import { ArrowUpRight } from "lucide-react";

import { BrandIcon } from "@/components/ui/BrandIcon";
import { socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  /** "light" for paper backgrounds, "dark" for the ink sections. */
  tone?: "light" | "dark";
  label: string;
  className?: string;
}

const tones = {
  light: "border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  dark: "border-paper/20 text-paper hover:border-accent-light hover:bg-paper hover:text-ink",
} as const;

/** Profile links shown as logo + name pills. */
export function SocialLinks({ tone = "light", label, className }: SocialLinksProps) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2.5", className)}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5",
              tones[tone],
            )}
          >
            <BrandIcon name={link.label} className="size-[1.0625rem]" />
            {link.label}
            <ArrowUpRight
              aria-hidden="true"
              className="-ml-0.5 size-3.5 opacity-50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
