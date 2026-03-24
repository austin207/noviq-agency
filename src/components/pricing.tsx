"use client";

import { useState, useMemo } from "react";
import { FadeIn } from "./fade-in";
import { WHATSAPP_URL } from "@/lib/constants";

/* ─── data ─────────────────────────────────────────── */

const PACKAGES = [
  {
    name: "Starter",
    price: 10_000,
    badge: null,
    badgeStyle: "",
    type: "One-time build",
    features: [
      "5-page static website",
      "Mobile responsive",
      "WhatsApp + Maps",
      "Basic contact form",
      "1 round of revisions",
    ],
    buildHours: 20,
  },
  {
    name: "Standard",
    price: 20_000,
    badge: "Most popular",
    badgeStyle: "text-accent border-accent/30 bg-accent/10",
    type: "One-time build",
    features: [
      "Up to 10 pages",
      "CMS (edit yourself)",
      "Enquiry + booking forms",
      "Basic SEO setup",
      "Instagram feed embed",
      "3 rounds of revisions",
    ],
    buildHours: 32,
  },
  {
    name: "Business",
    price: 35_000,
    badge: null,
    badgeStyle: "",
    type: "One-time build",
    features: [
      "Unlimited pages",
      "Online ordering system",
      "Custom order workflows",
      "Delivery tracking page",
      "Customer accounts",
      "Full SEO + analytics",
    ],
    buildHours: 56,
  },
  {
    name: "App + Web",
    price: 75_000,
    badge: "Premium",
    badgeStyle: "text-accent border-accent/30 bg-accent/10",
    type: "One-time build",
    features: [
      "Everything in Business",
      "Android + iOS app",
      "Live delivery tracking",
      "Push notifications",
      "Admin dashboard",
      "Unlimited revisions",
    ],
    buildHours: 160,
  },
  {
    name: "Content Studio",
    price: 95_000,
    badge: "New",
    badgeStyle: "text-accent border-accent/30 bg-accent/10",
    type: "Build + 3 months content",
    features: [
      "Everything in App + Web",
      "8 Reels/month \u00d7 3 months",
      "AI script + voiceover",
      "Branded templates",
      "Scheduled auto-posting",
      "Monthly analytics report",
    ],
    buildHours: 160,
  },
];

const ADDONS = [
  { name: "Google Business setup", price: 2_000, suffix: "" },
  { name: "Logo design", price: 3_500, suffix: "" },
  { name: "WhatsApp Business API", price: 4_000, suffix: "" },
  { name: "SEO audit report", price: 3_000, suffix: "" },
  { name: "Custom email (5 IDs)", price: 1_500, suffix: "/yr" },
  { name: "Monthly content updates", price: 800, suffix: "/mo" },
];

const AMC_PLANS = [
  { name: "No AMC", price: 0 },
  { name: "Basic AMC", price: 900 },
  { name: "Standard AMC", price: 1_500 },
  { name: "Premium AMC", price: 2_200 },
];

const REEL_PRICE_INR = 950;
const REEL_PRICE_USD = 10;
const REEL_PRESETS = [4, 8, 12, 16];
const COST_PER_HOUR = 200;
const HOSTING_COST = 500;
const DOMAIN_COST = 800;
const AI_TOOL_COST_PER_REEL = 150;

/* ─── helpers ──────────────────────────────────────── */

function inr(n: number): string {
  return "\u20b9" + n.toLocaleString("en-IN");
}

/* ─── sub-components ───────────────────────────────── */

function PackageCard({
  pkg,
  selected,
  onSelect,
}: {
  pkg: (typeof PACKAGES)[number];
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`flex min-w-[200px] flex-shrink-0 snap-start flex-col rounded-xl border p-5 text-left transition-all duration-200 lg:min-w-0 lg:flex-1 ${
        selected
          ? "border-accent/60 bg-accent/5"
          : "border-outline bg-surface hover:border-secondary/50"
      }`}
    >
      {pkg.badge && (
        <span
          className={`mb-3 inline-flex w-fit rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${pkg.badgeStyle}`}
        >
          {pkg.badge}
        </span>
      )}
      {!pkg.badge && <div className="mb-3 h-[22px]" />}

      <span className="text-sm font-semibold">{pkg.name}</span>
      <span className="mt-1.5 text-2xl font-semibold tabular-nums tracking-tight">
        {inr(pkg.price)}
      </span>
      <span className="mt-0.5 text-xs text-muted">{pkg.type}</span>

      <ul className="mt-4 flex flex-col gap-1.5">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-secondary">
            <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-secondary/60" />
            {f}
          </li>
        ))}
      </ul>
    </button>
  );
}

function ReelsSelector({
  count,
  onChange,
}: {
  count: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="rounded-xl border border-outline bg-surface p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">Reels per month</span>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent">
              ${REEL_PRICE_USD} / reel
            </span>
          </div>
          <p className="mt-1 text-xs text-muted">
            {inr(REEL_PRICE_INR)}/reel &middot; AI-assisted script, edit &amp;
            voiceover
          </p>
        </div>

        {/* counter */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onChange(Math.max(0, count - 1))}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-outline text-sm text-secondary transition-colors hover:border-secondary hover:text-primary"
            aria-label="Decrease reels"
          >
            &minus;
          </button>
          <span className="w-8 text-center text-lg font-semibold tabular-nums">
            {count}
          </span>
          <button
            onClick={() => onChange(count + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-outline text-sm text-secondary transition-colors hover:border-secondary hover:text-primary"
            aria-label="Increase reels"
          >
            +
          </button>
        </div>
      </div>

      {/* monthly cost */}
      <div className="mt-3 flex flex-wrap items-center gap-6 text-xs">
        <span className="text-secondary">
          Monthly cost:{" "}
          <span className="font-semibold text-primary">
            {inr(count * REEL_PRICE_INR)}/mo
          </span>
        </span>
        <span className="text-secondary">
          USD equivalent:{" "}
          <span className="font-semibold text-primary">
            ${count * REEL_PRICE_USD}/mo
          </span>
        </span>
      </div>

      {/* presets */}
      <div className="mt-4 flex flex-wrap gap-2">
        {REEL_PRESETS.map((n) => (
          <button
            key={n}
            onClick={() => onChange(n)}
            className={`rounded-lg border px-3.5 py-1.5 text-xs transition-colors ${
              count === n
                ? "border-accent/60 bg-accent/10 text-accent"
                : "border-outline text-secondary hover:border-secondary hover:text-primary"
            }`}
          >
            {n} reels
          </button>
        ))}
      </div>
    </div>
  );
}

function AddonsGrid({
  selected,
  onToggle,
}: {
  selected: Set<number>;
  onToggle: (i: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {ADDONS.map((addon, i) => {
        const active = selected.has(i);
        return (
          <button
            key={addon.name}
            onClick={() => onToggle(i)}
            className={`flex items-center justify-between rounded-xl border px-5 py-3.5 text-left text-sm transition-all duration-200 ${
              active
                ? "border-accent/60 bg-accent/5"
                : "border-outline bg-surface hover:border-secondary/50"
            }`}
          >
            <span className={active ? "text-primary" : "text-secondary"}>
              {addon.name}
            </span>
            <span className="ml-4 flex-shrink-0 tabular-nums text-muted">
              +{inr(addon.price)}
              {addon.suffix}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function AMCSelector({
  selected,
  onSelect,
}: {
  selected: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {AMC_PLANS.map((plan, i) => {
        const active = selected === i;
        return (
          <button
            key={plan.name}
            onClick={() => onSelect(i)}
            className={`flex items-center justify-between rounded-xl border px-5 py-3.5 text-left text-sm transition-all duration-200 ${
              active
                ? "border-accent/60 bg-accent/5"
                : "border-outline bg-surface hover:border-secondary/50"
            }`}
          >
            <span className={active ? "text-primary" : "text-secondary"}>
              {plan.name}
            </span>
            <span className="tabular-nums text-muted">
              {inr(plan.price)}/mo
            </span>
          </button>
        );
      })}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
      {children}
    </h3>
  );
}

/* ─── main ─────────────────────────────────────────── */

export function Pricing() {
  const [pkgIndex, setPkgIndex] = useState(1);
  const [reels, setReels] = useState(0);
  const [addons, setAddons] = useState<Set<number>>(new Set());
  const [amcIndex, setAmcIndex] = useState(1);

  function toggleAddon(i: number) {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const summary = useMemo(() => {
    const pkg = PACKAGES[pkgIndex];
    const amcPrice = AMC_PLANS[amcIndex].price;

    let oneTimeAddons = 0;
    let monthlyAddons = 0;
    let yearlyAddons = 0;
    addons.forEach((i) => {
      const a = ADDONS[i];
      if (a.suffix === "/mo") monthlyAddons += a.price;
      else if (a.suffix === "/yr") yearlyAddons += a.price;
      else oneTimeAddons += a.price;
    });

    const oneTimeTotal = pkg.price + oneTimeAddons;
    const monthlyRecurring = reels * REEL_PRICE_INR + amcPrice + monthlyAddons;

    // cost breakdown
    const buildCost = pkg.buildHours * COST_PER_HOUR;
    const reelToolsCost = reels * AI_TOOL_COST_PER_REEL;
    const totalCost = buildCost + HOSTING_COST + DOMAIN_COST + reelToolsCost;
    const margin =
      pkg.price > 0
        ? Math.round(((pkg.price - totalCost) / pkg.price) * 100)
        : 0;

    return {
      pkg,
      oneTimeTotal,
      monthlyRecurring,
      yearlyAddons,
      buildCost,
      reelToolsCost,
      margin,
    };
  }, [pkgIndex, reels, addons, amcIndex]);

  function generateQuoteText(): string {
    const lines = [`Package: ${summary.pkg.name} — ${inr(summary.pkg.price)}`];
    if (reels > 0)
      lines.push(`Reels: ${reels}/month — ${inr(reels * REEL_PRICE_INR)}/mo`);
    addons.forEach((i) => {
      const a = ADDONS[i];
      lines.push(`Add-on: ${a.name} — ${inr(a.price)}${a.suffix}`);
    });
    if (amcIndex > 0)
      lines.push(
        `AMC: ${AMC_PLANS[amcIndex].name} — ${inr(AMC_PLANS[amcIndex].price)}/mo`
      );
    lines.push("");
    lines.push(`One-time total: ${inr(summary.oneTimeTotal)}`);
    if (summary.monthlyRecurring > 0)
      lines.push(`Monthly recurring: ${inr(summary.monthlyRecurring)}/mo`);
    return lines.join("\n");
  }

  const quoteUrl = WHATSAPP_URL.includes("wa.me")
    ? `${WHATSAPP_URL.split("?")[0]}?text=${encodeURIComponent(generateQuoteText())}`
    : "#contact";

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* header */}
        <FadeIn>
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-xs text-muted">03</span>
            <span className="h-px w-8 bg-outline" />
            <span className="text-xs uppercase tracking-[0.2em] text-secondary">
              Pricing
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="mb-10 max-w-md text-secondary">
            One-time build fee. No monthly lock-in unless you want maintenance.
          </p>
        </FadeIn>

        {/* packages */}
        <FadeIn delay={0.1}>
          <SectionLabel>Choose a base package</SectionLabel>
          <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-4 snap-x lg:mx-0 lg:px-0">
            {PACKAGES.map((pkg, i) => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                selected={pkgIndex === i}
                onSelect={() => setPkgIndex(i)}
              />
            ))}
          </div>
        </FadeIn>

        {/* reels */}
        <FadeIn delay={0.15}>
          <div className="mt-10">
            <SectionLabel>Instagram Reels retainer</SectionLabel>
            <ReelsSelector count={reels} onChange={setReels} />
          </div>
        </FadeIn>

        {/* add-ons */}
        <FadeIn delay={0.2}>
          <div className="mt-10">
            <SectionLabel>Other add-ons</SectionLabel>
            <AddonsGrid selected={addons} onToggle={toggleAddon} />
          </div>
        </FadeIn>

        {/* amc */}
        <FadeIn delay={0.25}>
          <div className="mt-10">
            <SectionLabel>Maintenance plan (AMC)</SectionLabel>
            <AMCSelector selected={amcIndex} onSelect={setAmcIndex} />
          </div>
        </FadeIn>

        {/* summary */}
        <FadeIn delay={0.3}>
          <div className="mt-12 rounded-xl border border-outline bg-surface p-6">
            {/* totals */}
            <div className="flex items-center justify-between border-b border-outline/60 pb-4 text-sm text-secondary">
              <span>Base package</span>
              <span className="tabular-nums">{inr(summary.pkg.price)}</span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold">One-time total</span>
              <span className="text-xl font-semibold tabular-nums">
                {inr(summary.oneTimeTotal)}
              </span>
            </div>

            {summary.monthlyRecurring > 0 && (
              <div className="mt-1 flex items-center justify-between text-sm">
                <span className="text-accent">Monthly recurring</span>
                <span className="tabular-nums text-accent">
                  {inr(summary.monthlyRecurring)}/mo
                </span>
              </div>
            )}

            {summary.yearlyAddons > 0 && (
              <div className="mt-1 flex items-center justify-between text-sm">
                <span className="text-secondary">Yearly add-ons</span>
                <span className="tabular-nums text-secondary">
                  {inr(summary.yearlyAddons)}/yr
                </span>
              </div>
            )}

            {/* cost breakdown */}
            <div className="mt-6 border-t border-outline/60 pt-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                Your cost breakdown
              </span>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-secondary">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                    Build time (@ {inr(COST_PER_HOUR)}/hr)
                  </span>
                  <span className="tabular-nums text-secondary">
                    {inr(summary.buildCost)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-secondary">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
                    Hosting (reseller)
                  </span>
                  <span className="tabular-nums text-secondary">
                    {inr(HOSTING_COST)}/yr
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-secondary">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
                    Domain
                  </span>
                  <span className="tabular-nums text-secondary">
                    {inr(DOMAIN_COST)}/yr
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-secondary">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
                    AI tools / reel (CapCut, Runway)
                  </span>
                  <span className="tabular-nums text-secondary">
                    {inr(summary.reelToolsCost)}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-accent">Your gross margin</span>
                <span className="font-semibold tabular-nums text-accent">
                  ~{summary.margin}%
                </span>
              </div>
            </div>

            {/* generate quote */}
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-outline py-3.5 text-sm font-medium text-primary transition-all duration-200 hover:border-secondary hover:bg-elevated"
            >
              Generate client quote
              <span className="text-xs">&#8599;</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
