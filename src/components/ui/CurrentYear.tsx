"use client";

/**
 * Renders the visitor's current year. The page is statically generated, so the
 * server value is the build year; the client corrects it after hydration.
 */
export function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
