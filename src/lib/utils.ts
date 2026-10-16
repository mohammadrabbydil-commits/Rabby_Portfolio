/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * The deployed site URL from NEXT_PUBLIC_SITE_URL, or undefined when it is not
 * configured or not a valid absolute URL. Canonical and absolute share URLs are
 * only emitted when this is known.
 */
export function getSiteUrl(): URL | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return undefined;
  try {
    return new URL(raw);
  } catch {
    return undefined;
  }
}
