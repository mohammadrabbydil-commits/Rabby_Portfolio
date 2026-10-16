"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

type CopyStatus = "idle" | "copied" | "failed";

const RESET_AFTER_MS = 2000;

const labels: Record<CopyStatus, string> = {
  idle: "Copy email",
  copied: "Copied",
  failed: "Copy failed",
};

const announcements: Record<CopyStatus, string> = {
  idle: "",
  copied: "Email address copied to clipboard.",
  failed: "Could not copy. Please select the email address and copy it manually.",
};

interface CopyEmailButtonProps {
  email: string;
}

/** Copies the email address to the clipboard and announces the result. */
export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), RESET_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  const Icon = status === "copied" ? Check : Copy;

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-4 py-2 text-sm font-medium text-paper transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-ink"
      >
        <Icon aria-hidden="true" className="size-4" />
        {labels[status]}
      </button>
      <span role="status" className="sr-only">
        {announcements[status]}
      </span>
    </>
  );
}
