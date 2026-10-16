"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Wraps content with a soft accent glow that follows the pointer on hover. */
export function Spotlight({ children, className }: { children: ReactNode; className?: string }) {
  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      onPointerMove={onMove}
      style={{ "--spot-x": "50%", "--spot-y": "50%" } as CSSProperties}
      className={cn("group/spot relative isolate", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-sm opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--spot-x) var(--spot-y), rgba(166,58,28,0.09), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
