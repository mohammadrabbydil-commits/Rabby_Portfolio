"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types/portfolio";

const MOBILE_MENU_ID = "mobile-navigation";

/** Watches the page sections and returns the id of the one currently in view. */
function useActiveSection(ids: SectionId[]): SectionId | null {
  const [activeId, setActiveId] = useState<SectionId | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = ids.find((id) => id === entry.target.id);
            if (match) setActiveId(match);
          }
        }
      },
      // A thin band across the middle of the viewport decides the active section.
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isScrolled || isOpen
          ? "border-rule bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-paper/0",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="group flex items-baseline gap-2" onClick={closeMenu}>
          <span className="font-display text-2xl leading-none tracking-tight">{profile.name}</span>
          <span className="sr-only">— back to top</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative rounded-full px-3 py-2 text-sm transition-colors duration-200",
                      isActive ? "text-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 bottom-1 h-px origin-left bg-accent transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume.href}
            download={profile.resume.fileName}
            className="hidden items-center gap-2 rounded-full border border-ink/25 px-4 py-2 text-sm font-medium transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper sm:inline-flex"
          >
            <Download aria-hidden="true" className="size-4" />
            Résumé
            <span className="sr-only">(PDF)</span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-paper md:hidden"
            aria-expanded={isOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </Container>

      <nav
        id={MOBILE_MENU_ID}
        aria-label="Mobile"
        hidden={!isOpen}
        className="border-t border-rule bg-paper md:hidden"
      >
        <Container className="py-4">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  aria-current={activeId === item.id ? "location" : undefined}
                  className={cn(
                    "flex items-center justify-between border-b border-rule py-3.5 font-display text-2xl",
                    activeId === item.id ? "text-accent" : "text-ink",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume.href}
            download={profile.resume.fileName}
            onClick={closeMenu}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
          >
            <Download aria-hidden="true" className="size-4" />
            Download résumé (PDF)
          </a>
        </Container>
      </nav>
    </header>
  );
}
