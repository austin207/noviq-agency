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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-outline/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 text-primary">
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

        <a
          href={WHATSAPP_URL}
          className="rounded-full border border-outline bg-transparent px-5 py-2 text-sm text-primary transition-all duration-200 hover:border-accent hover:text-accent"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
