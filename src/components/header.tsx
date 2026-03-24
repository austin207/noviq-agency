"use client";

import { BRAND, WHATSAPP_URL } from "@/lib/constants";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "OpenClaw", href: "/#openclaw" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change / resize
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-outline/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* logo */}
        <a href="/" className="flex items-center gap-2.5 text-primary">
          <svg
            viewBox="0 0 40 48"
            fill="currentColor"
            className="h-6 w-auto"
            aria-hidden="true"
          >
            <path d="M0,48 V20 A20,20 0 0,1 40,20 V48 H30 V20 A10,10 0 0,0 10,20 V48 Z" />
          </svg>
          <span className="text-lg font-semibold tracking-tight">{BRAND}</span>
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA - hidden on very small screens when menu toggle is needed */}
          <a
            href={WHATSAPP_URL}
            className="hidden rounded-full border border-outline bg-transparent px-5 py-2 text-sm text-primary transition-all duration-200 hover:border-accent hover:text-accent sm:inline-flex"
          >
            Start a project
          </a>

          {/* hamburger - mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-primary md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="transition-transform duration-200">
              {menuOpen ? (
                <>
                  <line x1="2" y1="2" x2="18" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="2" y1="12" x2="18" y2="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="0" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="border-t border-outline/30 px-6 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-secondary transition-colors hover:bg-surface hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex w-full items-center justify-center rounded-full border border-outline py-3 text-sm font-medium text-primary transition-all hover:border-accent hover:text-accent"
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}
