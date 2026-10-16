import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

import { cn } from "@/lib/utils";

/** Brand logos for the profile links, keyed by the `label` in `socialLinks`. */
const icons: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  LeetCode: SiLeetcode,
  HackerRank: SiHackerrank,
};

export function BrandIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon aria-hidden="true" className={cn("shrink-0", className ?? "size-4")} />;
}
