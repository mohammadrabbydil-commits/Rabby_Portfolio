"use client";

import { Award, Download, ExternalLink, Eye, ShieldCheck, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

import { certifications } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { Certification } from "@/types/portfolio";

const ALL = "All";

const pillButton =
  "inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper";

function CertificateViewer({ cert, onClose }: { cert: Certification; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, []);

  const titleId = "certificate-viewer-title";

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        // A click on the backdrop targets the dialog element itself.
        if (event.target === event.currentTarget) onClose();
      }}
      className="m-auto h-[min(88dvh,60rem)] w-[min(94vw,64rem)] overflow-hidden rounded-sm border border-rule bg-card p-0 text-ink shadow-2xl backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4 border-b border-rule px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <h3 id={titleId} className="truncate font-display text-xl sm:text-2xl">
              {cert.name}
            </h3>
            <p className="font-mono text-xs text-muted">
              {[cert.issuer, cert.platform, cert.date].filter(Boolean).join(" · ")}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {cert.file ? (
              <a href={cert.file} download className={cn(pillButton, "hidden sm:inline-flex")}>
                <Download aria-hidden="true" className="size-4" />
                Download
              </a>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate viewer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              <X aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>
        <div className="min-h-0 flex-1 bg-paper-deep">
          <object
            data={`${cert.file}#view=FitH&toolbar=0`}
            type="application/pdf"
            aria-label={`${cert.name} certificate (PDF)`}
            className="size-full"
          >
            <p className="p-6 text-sm text-muted">
              Your browser can’t display PDFs inline.{" "}
              <a href={cert.file} className="font-medium text-accent underline underline-offset-4">
                Open the certificate PDF
              </a>
              .
            </p>
          </object>
        </div>
      </div>
    </dialog>
  );
}

export function Certificates() {
  const [filter, setFilter] = useState<string>(ALL);
  const [active, setActive] = useState<Certification | null>(null);

  const years = useMemo(
    () => [
      ALL,
      ...Array.from(new Set(certifications.map((cert) => cert.year)))
        .sort()
        .reverse(),
    ],
    [],
  );
  const visible = certifications.filter((cert) => filter === ALL || cert.year === filter);
  const viewable = certifications.filter((cert) => cert.file).length;

  return (
    <div className="grid gap-4 lg:grid-cols-[13rem_1fr] lg:gap-10">
      <div>
        <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase lg:pt-1">
          Certifications
        </h3>
        <p className="mt-2 font-mono text-xs text-muted">
          {certifications.length} earned · {viewable} viewable
        </p>
      </div>

      <div className="max-w-4xl">
        <div
          role="group"
          aria-label="Filter certifications by year"
          className="flex flex-wrap gap-2"
        >
          {years.map((year) => (
            <button
              key={year}
              type="button"
              aria-pressed={filter === year}
              onClick={() => setFilter(year)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                filter === year
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 text-ink-soft hover:border-ink",
              )}
            >
              {year}
            </button>
          ))}
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((cert) => (
              <motion.li
                key={cert.name}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col justify-between gap-5 rounded-sm border border-rule bg-card p-5 transition-[border-color,box-shadow] duration-200 hover:border-ink/40 hover:shadow-[0_18px_36px_-24px_rgba(18,20,23,0.45)]"
              >
                <div>
                  <p className="flex items-start gap-2.5 leading-snug font-medium">
                    <Award aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                    {cert.name}
                  </p>
                  <p className="mt-2 font-mono text-xs text-muted">
                    {[cert.issuer, cert.platform].filter(Boolean).join(" · ")}
                    {cert.issuer || cert.platform ? " — " : ""}
                    {cert.date}
                  </p>
                </div>
                {cert.file || cert.verifyUrl ? (
                  <div className="flex flex-wrap gap-2">
                    {cert.file ? (
                      <button
                        type="button"
                        onClick={() => setActive(cert)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
                      >
                        <Eye aria-hidden="true" className="size-4" />
                        View
                        <span className="sr-only">: {cert.name} certificate</span>
                      </button>
                    ) : null}
                    {cert.file ? (
                      <a href={cert.file} download className={pillButton}>
                        <Download aria-hidden="true" className="size-4" />
                        PDF
                        <span className="sr-only">: {cert.name} certificate</span>
                      </a>
                    ) : null}
                    {cert.verifyUrl ? (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={pillButton}
                      >
                        <ShieldCheck aria-hidden="true" className="size-4" />
                        Verify
                        <ExternalLink aria-hidden="true" className="size-3 opacity-60" />
                        <span className="sr-only">: {cert.name} (opens in a new tab)</span>
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>

      {active ? <CertificateViewer cert={active} onClose={() => setActive(null)} /> : null}
    </div>
  );
}
