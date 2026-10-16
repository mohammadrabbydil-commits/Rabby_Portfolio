import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TagProps {
  children: ReactNode;
  className?: string;
}

/** A small neutral chip for technologies and skills. */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-rule bg-card px-3 py-1 text-[0.8125rem] leading-5 text-ink-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}

interface TagListProps {
  items: string[];
  label: string;
  className?: string;
}

/** An accessible list of tags. `label` names the list for screen readers. */
export function TagList({ items, label, className }: TagListProps) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
