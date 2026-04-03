"use client";

import { useState, useMemo } from "react";
import { FadeIn } from "./fade-in";
import { WHATSAPP_URL } from "@/lib/constants";

/* ─── data ─────────────────────────────────────────── */

type Category = "website" | "app" | "bundle" | "openclaw" | "all-in-one";

const WEB_PACKAGES = [
  { name: "Starter", price: 10_000, desc: "5 pages, WhatsApp, Maps, contact form, 1 revision", delivery: "1-2 weeks" },
  { name: "Standard", price: 30_000, desc: "10 pages, CMS, booking forms, SEO, Instagram embed, email setup", delivery: "2-3 weeks" },
  { name: "Business", price: 50_000, desc: "Unlimited pages, online ordering, delivery tracking, accounts, Razorpay, analytics", delivery: "4-6 weeks" },
];

const APP_PACKAGES = [
  { name: "Android App", price: 100_000, desc: "Flutter app - browse, order, track, push notifications, Razorpay", delivery: "6-8 weeks" },
  { name: "Android + iOS App", price: 130_000, desc: "Everything above + iOS build and App Store submission", delivery: "8-10 weeks" },
  { name: "Admin Dashboard", price: 35_000, desc: "Owner app - manage orders, update status, sales summary", delivery: "3-4 weeks", isAddon: true },
];

const BUNDLES = [
  { name: "Business + Android", price: 130_000, separate: 150_000, desc: "Full website + Android app", saving: 20_000 },
  { name: "Business + Android + iOS", price: 155_000, separate: 180_000, desc: "Full website + both platforms", saving: 25_000 },
  { name: "Full Stack + Admin", price: 180_000, separate: 215_000, desc: "Website + both apps + admin dashboard", saving: 35_000 },
  { name: "Content Studio", price: 175_000, separate: 202_800, desc: "Full Stack + 8 Reels/month x 3 months included", saving: 27_800, badge: "Best value" },
];

const OPENCLAW_TIERS_PRICING = [
  {
    name: "Basic",
    price: 19_000,
    amc: 2_000,
    delivery: "3 days",
    badge: null,
    desc: "Docker Compose, OpenClaw + SearXNG, 1 channel, 10 skills, morning cron",
  },
  {
    name: "Standard",
    price: 46_000,
    amc: 2_000,
    delivery: "5 days",
    badge: "most popular",
    desc: "3 channels, browser automation, 25 skills, Tailscale, backup scripts",
  },
  {
    name: "Premium",
    price: 69_000,
    amc: 2_000,
    delivery: "7 days",
    badge: null,
    desc: "Multi-agent routing, n8n integration, Docker sandbox, 30-day support",
  },
];

const ALL_IN_ONE = {
  price: 200_000,
  separate: 246_000,
  saving: 46_000,
  monthlyBase: 8_000,
  delivery: "12-16 weeks",
  includes: [
    "Business website (Next.js, ordering, accounts, Razorpay)",
    "Android + iOS Flutter app",
    "OpenClaw AI assistant (Standard tier)",
    "AI Receptionist setup",
    "Automated Calls setup",
  ],
};

const ADDONS = [
  { name: "Google Business Profile setup", desc: "Get found on Google Maps", price: 2_000, suffix: "" },
  { name: "Logo design", desc: "3 concepts, 2 revisions", price: 3_500, suffix: "" },
  { name: "WhatsApp Business API", desc: "Automated WhatsApp messaging", price: 4_000, suffix: "" },
  { name: "SEO audit report", desc: "Keyword & ranking analysis", price: 3_000, suffix: "" },
  { name: "Custom business email (5 IDs)", desc: "you@yourbusiness.in", price: 1_500, suffix: "/yr" },
  { name: "Monthly content updates", desc: "1-2 page updates per month", price: 800, suffix: "/mo" },
];

const AMC_PLANS = [
  { name: "Basic AMC", price: 900, desc: "Hosting, uptime, 1 edit/month" },
  { name: "Standard AMC", price: 1_500, desc: "Above + 2 content updates, plugin updates, report" },
  { name: "Premium AMC", price: 2_200, desc: "Above + priority support, 5 edits, SEO check" },
  { name: "No AMC", price: 0, desc: "Self-managed (not recommended)" },
];

const REEL_PRICE = 950;
const REEL_PRESETS = [4, 8, 12, 16];
const DOMAIN_DURATIONS = [
  { label: "1 year", years: 1 },
  { label: "2 years", years: 2 },
  { label: "5 years", years: 5 },
];

/* ─── helpers ──────────────────────────────────────── */

function inr(n: number): string {
  return "\u20b9" + n.toLocaleString("en-IN");
}

/* ─── shared ui ────────────────────────────────────── */

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-accent" : "bg-outline"}`} />
      ))}
    </div>
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button role="switch" aria-checked={checked} onClick={onChange}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ${checked ? "bg-accent" : "bg-[#333]"}`}>
      <span className={`pointer-events-none inline-block h-5 w-5 translate-y-0.5 rounded-full bg-white shadow transition-transform duration-200 ${checked ? "translate-x-[22px]" : "translate-x-0.5"}`} />
    </button>
  );
}

function NavButtons({ step, setStep, total }: { step: number; setStep: (n: number) => void; total: number }) {
  const isLast = step === total - 1;
  const isSecondLast = step === total - 2;
  return (
    <div className={`mt-8 grid gap-3 ${step === 0 ? "grid-cols-1" : "grid-cols-2"}`}>
      {step > 0 && (
        <button onClick={() => setStep(step - 1)} className="rounded-xl border border-outline py-3.5 text-sm font-medium text-primary transition-colors hover:bg-surface">
          &larr; Back
        </button>
      )}
      {!isLast && (
        <button onClick={() => setStep(step + 1)} className="rounded-xl border border-outline py-3.5 text-sm font-medium text-primary transition-colors hover:bg-surface">
          {isSecondLast ? "See my quote \u2192" : "Next \u2192"}
        </button>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">{children}</h3>;
}

/* ─── steps ────────────────────────────────────────── */

function StepCategory({ value, onChange }: { value: Category; onChange: (c: Category) => void }) {
  const options: { key: Category; title: string; desc: string; badge?: string }[] = [
    { key: "website", title: "Website only", desc: "Landing page, business site, or online store" },
    { key: "app", title: "Mobile App", desc: "Android/iOS app (requires Business website backend)" },
    { key: "bundle", title: "Website + App", desc: "Full package with bundle discount" },
    { key: "openclaw", title: "OpenClaw AI Assistant", desc: "AI-powered WhatsApp/Telegram bot - deployed and managed for you", badge: "AI" },
    { key: "all-in-one", title: "Everything", desc: "Website + App + OpenClaw + AI Receptionist + Automated Calls", badge: "best value" },
  ];
  return (
    <div className="flex flex-col gap-3">
      {options.map((o) => (
        <button key={o.key} onClick={() => onChange(o.key)}
          className={`rounded-xl border p-5 text-left transition-all duration-200 ${value === o.key ? "border-accent/60 bg-accent/5" : "border-outline bg-surface hover:border-secondary/40"}`}>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">{o.title}</span>
            {o.badge && (
              <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent">
                {o.badge}
              </span>
            )}
          </div>
          <span className="mt-1 block text-xs text-muted">{o.desc}</span>
        </button>
      ))}
    </div>
  );
}

function StepWebPackage({ selected, onSelect }: { selected: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex flex-col gap-3">
      {WEB_PACKAGES.map((pkg, i) => (
        <button key={pkg.name} onClick={() => onSelect(i)}
          className={`rounded-xl border p-5 text-left transition-all duration-200 ${selected === i ? "border-accent/60 bg-accent/5" : "border-outline bg-surface hover:border-secondary/40"}`}>
          <span className="text-sm font-semibold">{pkg.name}</span>
          <span className="mt-1 block text-2xl font-semibold tabular-nums tracking-tight">{inr(pkg.price)}</span>
          <span className="mt-1 block text-xs text-muted">{pkg.desc}</span>
          <span className="mt-2 block text-[10px] text-muted">Delivery: {pkg.delivery}</span>
        </button>
      ))}
    </div>
  );
}

function StepAppPackage({ selected, adminDash, onSelect, onToggleAdmin }: { selected: number; adminDash: boolean; onSelect: (i: number) => void; onToggleAdmin: () => void }) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {APP_PACKAGES.filter((p) => !p.isAddon).map((pkg, i) => (
          <button key={pkg.name} onClick={() => onSelect(i)}
            className={`rounded-xl border p-5 text-left transition-all duration-200 ${selected === i ? "border-accent/60 bg-accent/5" : "border-outline bg-surface hover:border-secondary/40"}`}>
            <span className="text-sm font-semibold">{pkg.name}</span>
            <span className="mt-1 block text-2xl font-semibold tabular-nums tracking-tight">{inr(pkg.price)}</span>
            <span className="mt-1 block text-xs text-muted">{pkg.desc}</span>
            <span className="mt-2 block text-[10px] text-muted">Delivery: {pkg.delivery}</span>
          </button>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between rounded-xl border border-outline bg-surface p-5">
        <div>
          <span className="text-sm font-semibold">+ Admin Dashboard</span>
          <span className="ml-2 text-sm tabular-nums text-muted">{inr(35_000)}</span>
          <span className="mt-1 block text-xs text-muted">Owner app to manage orders & track sales</span>
        </div>
        <Toggle checked={adminDash} onChange={onToggleAdmin} />
      </div>
      <p className="mt-4 text-xs text-muted">
        Note: Apps connect to a Business-tier website backend (Supabase). iOS requires Apple Developer account ($99/yr) paid by client.
      </p>
    </div>
  );
}

function StepBundlePackage({ selected, onSelect }: { selected: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex flex-col gap-3">
      {BUNDLES.map((b, i) => (
        <button key={b.name} onClick={() => onSelect(i)}
          className={`rounded-xl border p-5 text-left transition-all duration-200 ${selected === i ? "border-accent/60 bg-accent/5" : "border-outline bg-surface hover:border-secondary/40"}`}>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">{b.name}</span>
            {b.badge && <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent">{b.badge}</span>}
          </div>
          <span className="mt-1 block text-2xl font-semibold tabular-nums tracking-tight">{inr(b.price)}</span>
          <span className="mt-1 block text-xs text-muted">{b.desc}</span>
          <span className="mt-2 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent">
            Save {inr(b.saving)} vs separate
          </span>
        </button>
      ))}
    </div>
  );
}

function StepOpenClawTier({ selected, onSelect }: { selected: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex flex-col gap-3">
      {OPENCLAW_TIERS_PRICING.map((tier, i) => (
        <button key={tier.name} onClick={() => onSelect(i)}
          className={`rounded-xl border p-5 text-left transition-all duration-200 ${selected === i ? "border-accent/60 bg-accent/5" : "border-outline bg-surface hover:border-secondary/40"}`}>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">{tier.name}</span>
            {tier.badge && (
              <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent">
                {tier.badge}
              </span>
            )}
          </div>
          <span className="mt-1 block text-2xl font-semibold tabular-nums tracking-tight">{inr(tier.price)}</span>
          <span className="mt-1 block text-xs text-muted">{tier.desc}</span>
          <span className="mt-2 block text-[10px] text-muted">
            Delivery: {tier.delivery} &middot; AMC: {inr(tier.amc)}/mo
          </span>
        </button>
      ))}
    </div>
  );
}

function StepAllInOnePreview() {
  return (
    <div>
      <div className="rounded-xl border border-accent/40 bg-accent/[0.03] p-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-sm font-semibold">Complete Business Stack</span>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent">
            save {inr(ALL_IN_ONE.saving)}
          </span>
        </div>
        <span className="block text-3xl font-semibold tabular-nums tracking-tight">{inr(ALL_IN_ONE.price)}</span>
        <span className="mt-1 block text-xs text-muted">one-time setup &middot; {ALL_IN_ONE.delivery} delivery</span>
        <ul className="mt-5 flex flex-col gap-2.5">
          {ALL_IN_ONE.includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-muted">
          + {inr(ALL_IN_ONE.monthlyBase)}/mo covers hosting, AI services AMC, and uptime monitoring. Instagram Reels can be added in the next step.
        </p>
      </div>
      <p className="mt-3 text-xs text-muted">
        Separately this would cost {inr(ALL_IN_ONE.separate)}. Bundle saves you {inr(ALL_IN_ONE.saving)}.
      </p>
    </div>
  );
}

function StepAddons({ selected, onToggle }: { selected: Set<number>; onToggle: (i: number) => void }) {
  return (
    <div className="flex flex-col divide-y divide-outline/50">
      {ADDONS.map((addon, i) => (
        <div key={addon.name} className="flex items-center justify-between gap-4 py-5">
          <div className="flex-1">
            <span className="text-sm font-semibold">{addon.name}</span>
            <span className="mt-0.5 block text-xs text-muted">{addon.desc}</span>
          </div>
          <span className="flex-shrink-0 text-sm tabular-nums text-secondary">+{inr(addon.price)}{addon.suffix}</span>
          <Toggle checked={selected.has(i)} onChange={() => onToggle(i)} />
        </div>
      ))}
    </div>
  );
}

function StepReels({ count, onChange }: { count: number; onChange: (n: number) => void }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="text-sm font-semibold">Reels per month</span>
          <span className="mt-0.5 block text-xs text-muted">{inr(count * REEL_PRICE)}/month &middot; {count} Reels &times; {inr(REEL_PRICE)}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => onChange(Math.max(0, count - 1))} className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline text-sm text-secondary hover:text-primary" aria-label="Decrease">&minus;</button>
          <span className="w-10 text-center text-lg font-semibold tabular-nums">{count}</span>
          <button onClick={() => onChange(count + 1)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline text-sm text-secondary hover:text-primary" aria-label="Increase">+</button>
        </div>
      </div>
      <hr className="my-5 border-outline/50" />
      <div className="flex flex-wrap gap-2">
        {REEL_PRESETS.map((n) => (
          <button key={n} onClick={() => onChange(n)}
            className={`rounded-full border px-4 py-2 text-xs transition-colors ${count === n ? "border-accent/60 bg-accent/10 text-accent" : "border-outline text-secondary hover:text-primary"}`}>
            {n}/mo - {inr(n * REEL_PRICE)}
          </button>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted">Each Reel includes: AI script, voiceover, editing, captions, branded template, scheduled posting.</p>
    </div>
  );
}

function StepMaintenance({ amcIndex, setAmcIndex, domainCost, setDomainCost, domainYears, setDomainYears }: {
  amcIndex: number; setAmcIndex: (i: number) => void; domainCost: number; setDomainCost: (n: number) => void; domainYears: number; setDomainYears: (n: number) => void;
}) {
  return (
    <div>
      <SectionLabel>Annual Maintenance Contract (AMC)</SectionLabel>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {AMC_PLANS.map((plan, i) => (
          <button key={plan.name} onClick={() => setAmcIndex(i)}
            className={`rounded-xl border p-5 text-left transition-all duration-200 ${amcIndex === i ? "border-accent/60 bg-accent/5" : "border-outline bg-surface hover:border-secondary/40"}`}>
            <span className="text-sm font-semibold">{plan.name}</span>
            <span className="mt-1 block text-2xl font-semibold tabular-nums tracking-tight">{inr(plan.price)}/mo</span>
            <span className="mt-1 block text-xs text-muted">{plan.desc}</span>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <SectionLabel>Domain registration</SectionLabel>
        <div className="flex gap-2">
          {DOMAIN_DURATIONS.map((d) => (
            <button key={d.years} onClick={() => setDomainYears(d.years)}
              className={`rounded-lg border px-4 py-2 text-xs transition-colors ${domainYears === d.years ? "border-accent/60 bg-accent/10 text-accent" : "border-outline text-secondary hover:text-primary"}`}>
              {d.label}
            </button>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <div>
            <span className="text-sm font-semibold">Total for {domainYears} {domainYears === 1 ? "year" : "years"}</span>
            <span className="mt-0.5 block text-xs text-muted">Domain up to &#8377;4,000/yr included. Excess charged separately.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted">&#8377;</span>
            <input type="number" value={domainCost} onChange={(e) => setDomainCost(Number(e.target.value) || 0)}
              className="w-24 rounded-lg border border-outline bg-surface px-3 py-2.5 text-center text-sm tabular-nums text-primary outline-none focus:border-accent/60" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── quote ────────────────────────────────────────── */

function StepQuote({ category, webIndex, appIndex, adminDash, bundleIndex, openClawIndex, addons, reels, amcIndex, domainCost, domainYears, quoteUrl, setStep }: {
  category: Category; webIndex: number; appIndex: number; adminDash: boolean; bundleIndex: number;
  openClawIndex: number; addons: Set<number>; reels: number; amcIndex: number;
  domainCost: number; domainYears: number; quoteUrl: string; setStep: (n: number) => void;
}) {
  const oneTimeItems: { label: string; amount: number }[] = [];
  const monthlyItems: { label: string; amount: number }[] = [];
  const yearlyItems: { label: string; amount: number }[] = [];

  if (category === "website") {
    const pkg = WEB_PACKAGES[webIndex];
    oneTimeItems.push({ label: `${pkg.name} website`, amount: pkg.price });
  } else if (category === "app") {
    oneTimeItems.push({ label: "Business website (required)", amount: 50_000 });
    const app = APP_PACKAGES[appIndex];
    oneTimeItems.push({ label: app.name, amount: app.price });
    if (adminDash) oneTimeItems.push({ label: "Admin Dashboard", amount: 35_000 });
  } else if (category === "bundle") {
    const bundle = BUNDLES[bundleIndex];
    oneTimeItems.push({ label: `${bundle.name} bundle`, amount: bundle.price });
  } else if (category === "openclaw") {
    const tier = OPENCLAW_TIERS_PRICING[openClawIndex];
    oneTimeItems.push({ label: `OpenClaw ${tier.name} setup`, amount: tier.price });
    monthlyItems.push({ label: "OpenClaw AMC", amount: tier.amc });
  } else if (category === "all-in-one") {
    oneTimeItems.push({ label: "Complete Business Stack bundle", amount: ALL_IN_ONE.price });
    monthlyItems.push({ label: "Hosting + AI services maintenance", amount: ALL_IN_ONE.monthlyBase });
  }

  // Add-ons: legacy categories only
  if (category === "website" || category === "app" || category === "bundle") {
    addons.forEach((i) => {
      const a = ADDONS[i];
      if (a.suffix === "/mo") monthlyItems.push({ label: a.name, amount: a.price });
      else if (a.suffix === "/yr") yearlyItems.push({ label: a.name, amount: a.price });
      else oneTimeItems.push({ label: a.name, amount: a.price });
    });
  }

  // Reels: all except openclaw, and not content studio bundle
  if (reels > 0 && category !== "openclaw" && !(category === "bundle" && bundleIndex === 3)) {
    monthlyItems.push({ label: `Instagram Reels (${reels}/mo)`, amount: reels * REEL_PRICE });
  }

  // AMC: legacy categories only
  if (category === "website" || category === "app" || category === "bundle") {
    const amc = AMC_PLANS[amcIndex];
    if (amc.price > 0) monthlyItems.push({ label: amc.name, amount: amc.price });
  }

  // Domain: legacy categories only
  if (domainCost > 0 && (category === "website" || category === "app" || category === "bundle")) {
    yearlyItems.push({ label: `Domain (${domainYears}yr)`, amount: domainCost });
  }

  const oneTimeTotal = oneTimeItems.reduce((s, i) => s + i.amount, 0);
  const monthlyTotal = monthlyItems.reduce((s, i) => s + i.amount, 0);
  const yearlyTotal = yearlyItems.reduce((s, i) => s + i.amount, 0);
  const upfront = Math.ceil(oneTimeTotal / 2);

  return (
    <div className="flex flex-col gap-4">
      {/* one-time */}
      <div className="rounded-xl border border-outline p-5">
        <SectionLabel>One-time payment</SectionLabel>
        <div className="flex flex-col gap-2.5">
          {oneTimeItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-accent/60" />{item.label}</span>
              <span className="tabular-nums text-secondary">{inr(item.amount)}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-outline/50 pt-3">
          <span className="font-semibold">Total due on start</span>
          <span className="text-lg font-semibold tabular-nums">{inr(oneTimeTotal)}</span>
        </div>
      </div>

      {/* monthly */}
      {monthlyTotal > 0 && (
        <div className="rounded-xl border border-outline p-5">
          <SectionLabel>Monthly recurring</SectionLabel>
          <div className="flex flex-col gap-2.5">
            {monthlyItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-accent/60" />{item.label}</span>
                <span className="tabular-nums text-secondary">{inr(item.amount)}/mo</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-outline/50 pt-3">
            <span className="font-semibold text-accent">Total per month</span>
            <span className="text-lg font-semibold tabular-nums text-accent">{inr(monthlyTotal)}/mo</span>
          </div>
        </div>
      )}

      {/* yearly */}
      {yearlyTotal > 0 && (
        <div className="rounded-xl border border-outline p-5">
          <SectionLabel>Yearly charges</SectionLabel>
          {yearlyItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-sm">
              <span>{item.label}</span>
              <span className="tabular-nums text-secondary">{inr(item.amount)}</span>
            </div>
          ))}
        </div>
      )}

      {/* payment terms */}
      <div className="rounded-xl border border-outline p-5">
        <SectionLabel>Payment terms</SectionLabel>
        <div className="flex flex-col gap-2.5 text-sm">
          <div className="flex justify-between"><span>Due now (50% upfront)</span><span className="tabular-nums font-medium">{inr(upfront)}</span></div>
          <div className="flex justify-between"><span>Due on delivery (50%)</span><span className="tabular-nums font-medium">{inr(oneTimeTotal - upfront)}</span></div>
          {monthlyTotal > 0 && <div className="flex justify-between"><span>Monthly from day 1</span><span className="tabular-nums font-medium text-accent">{inr(monthlyTotal)}/mo</span></div>}
        </div>
      </div>

      {/* actions */}
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => setStep(0)} className="rounded-xl border border-outline py-3.5 text-sm font-medium text-primary transition-colors hover:bg-surface">&larr; Edit</button>
        <a href={quoteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-outline py-3.5 text-sm font-medium text-primary transition-colors hover:bg-surface">
          Get formal quote &#8599;
        </a>
      </div>
    </div>
  );
}

/* ─── step titles ───────────────────────────────────── */

const STEP_TITLES: Record<Category, { title: string; sub: string }[]> = {
  website: [
    { title: "What do you need?", sub: "Choose your project type" },
    { title: "Pick a website package", sub: "All include domain, hosting, and SSL" },
    { title: "Any extras?", sub: "Toggle what you need - prices are one-time unless marked" },
    { title: "Instagram Reels?", sub: "\u20b9950 per Reel (~$10) - AI-assisted production" },
    { title: "Hosting & maintenance", sub: "Keep your site fast, secure and updated" },
    { title: "Your quote", sub: "Full breakdown of what you'll pay" },
  ],
  app: [
    { title: "What do you need?", sub: "Choose your project type" },
    { title: "Choose your app", sub: "Apps require a Business website backend (included in quote)" },
    { title: "Any extras?", sub: "Toggle what you need" },
    { title: "Instagram Reels?", sub: "\u20b9950 per Reel (~$10) - AI-assisted production" },
    { title: "Hosting & maintenance", sub: "Keep your site fast, secure and updated" },
    { title: "Your quote", sub: "Full breakdown of what you'll pay" },
  ],
  bundle: [
    { title: "What do you need?", sub: "Choose your project type" },
    { title: "Pick a bundle", sub: "Website + app together - discounted" },
    { title: "Any extras?", sub: "Toggle what you need" },
    { title: "Instagram Reels?", sub: "\u20b9950 per Reel (~$10) - AI-assisted production" },
    { title: "Hosting & maintenance", sub: "Keep your site fast, secure and updated" },
    { title: "Your quote", sub: "Full breakdown of what you'll pay" },
  ],
  openclaw: [
    { title: "What do you need?", sub: "Choose your project type" },
    { title: "OpenClaw AI Assistant", sub: "Done-for-you AI on WhatsApp or Telegram - pick a tier" },
    { title: "Your quote", sub: "Full breakdown of what you'll pay" },
  ],
  "all-in-one": [
    { title: "What do you need?", sub: "Choose your project type" },
    { title: "Complete Business Stack", sub: "Every Noviq service bundled - save \u20b946,000" },
    { title: "Instagram Reels?", sub: "\u20b9950 per Reel (~$10) - AI-assisted production" },
    { title: "Your quote", sub: "Full breakdown of what you'll pay" },
  ],
};

/* ─── main ──────────────────────────────────────────── */

export function Pricing() {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState<Category>("website");
  const [webIndex, setWebIndex] = useState(1);
  const [appIndex, setAppIndex] = useState(0);
  const [adminDash, setAdminDash] = useState(false);
  const [bundleIndex, setBundleIndex] = useState(1);
  const [openClawIndex, setOpenClawIndex] = useState(1); // default Standard
  const [reels, setReels] = useState(0);
  const [addons, setAddons] = useState<Set<number>>(new Set());
  const [amcIndex, setAmcIndex] = useState(0);
  const [domainCost, setDomainCost] = useState(800);
  const [domainYears, setDomainYears] = useState(1);

  const toggleAddon = (i: number) => setAddons((prev) => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });

  const handleCategoryChange = (c: Category) => {
    setCategory(c);
    setStep(0);
  };

  const titles = STEP_TITLES[category];
  const totalSteps = titles.length;
  const current = titles[step] ?? titles[0];

  const quoteUrl = useMemo(() => {
    const lines: string[] = [];
    if (category === "website") {
      lines.push(`Website: ${WEB_PACKAGES[webIndex].name} - ${inr(WEB_PACKAGES[webIndex].price)}`);
    } else if (category === "app") {
      lines.push(`App: ${APP_PACKAGES[appIndex].name} - ${inr(APP_PACKAGES[appIndex].price)}`);
      if (adminDash) lines.push("+ Admin Dashboard - \u20b935,000");
    } else if (category === "bundle") {
      lines.push(`Bundle: ${BUNDLES[bundleIndex].name} - ${inr(BUNDLES[bundleIndex].price)}`);
    } else if (category === "openclaw") {
      const t = OPENCLAW_TIERS_PRICING[openClawIndex];
      lines.push(`OpenClaw ${t.name} setup - ${inr(t.price)}`);
      lines.push(`OpenClaw AMC - ${inr(t.amc)}/mo`);
    } else if (category === "all-in-one") {
      lines.push(`All-in-One Bundle - ${inr(ALL_IN_ONE.price)}`);
      lines.push(`Monthly maintenance - ${inr(ALL_IN_ONE.monthlyBase)}/mo`);
    }
    if (category === "website" || category === "app" || category === "bundle") {
      addons.forEach((i) => { const a = ADDONS[i]; lines.push(`Add-on: ${a.name} - ${inr(a.price)}${a.suffix}`); });
      if (AMC_PLANS[amcIndex].price > 0) lines.push(`AMC: ${AMC_PLANS[amcIndex].name} - ${inr(AMC_PLANS[amcIndex].price)}/mo`);
    }
    if (reels > 0 && category !== "openclaw") lines.push(`Reels: ${reels}/mo - ${inr(reels * REEL_PRICE)}/mo`);
    return WHATSAPP_URL.includes("wa.me") ? `${WHATSAPP_URL.split("?")[0]}?text=${encodeURIComponent(lines.join("\n"))}` : "#contact";
  }, [category, webIndex, appIndex, adminDash, bundleIndex, openClawIndex, addons, reels, amcIndex]);

  const legacyCat = category === "website" || category === "app" || category === "bundle";

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <FadeIn>
          <div className="mb-12 flex items-center gap-4">
            <span className="font-mono text-xs text-muted">03</span>
            <span className="h-px w-8 bg-outline" />
            <span className="text-xs uppercase tracking-[0.2em] text-secondary">Pricing</span>
          </div>
        </FadeIn>

        <div>
          <ProgressBar step={step} total={totalSteps} />
          <div className="mt-6">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{current.title}</h2>
            <p className="mt-1 text-sm text-muted">{current.sub}</p>
          </div>

          <div className="mt-8">
            {step === 0 && <StepCategory value={category} onChange={handleCategoryChange} />}

            {/* legacy flows */}
            {step === 1 && category === "website" && <StepWebPackage selected={webIndex} onSelect={setWebIndex} />}
            {step === 1 && category === "app" && <StepAppPackage selected={appIndex} adminDash={adminDash} onSelect={setAppIndex} onToggleAdmin={() => setAdminDash(!adminDash)} />}
            {step === 1 && category === "bundle" && <StepBundlePackage selected={bundleIndex} onSelect={setBundleIndex} />}
            {step === 2 && legacyCat && <StepAddons selected={addons} onToggle={toggleAddon} />}
            {step === 3 && legacyCat && <StepReels count={reels} onChange={setReels} />}
            {step === 4 && legacyCat && <StepMaintenance amcIndex={amcIndex} setAmcIndex={setAmcIndex} domainCost={domainCost} setDomainCost={setDomainCost} domainYears={domainYears} setDomainYears={setDomainYears} />}
            {step === 5 && legacyCat && <StepQuote category={category} webIndex={webIndex} appIndex={appIndex} adminDash={adminDash} bundleIndex={bundleIndex} openClawIndex={openClawIndex} addons={addons} reels={reels} amcIndex={amcIndex} domainCost={domainCost} domainYears={domainYears} quoteUrl={quoteUrl} setStep={setStep} />}

            {/* openclaw flow */}
            {step === 1 && category === "openclaw" && <StepOpenClawTier selected={openClawIndex} onSelect={setOpenClawIndex} />}
            {step === 2 && category === "openclaw" && <StepQuote category={category} webIndex={webIndex} appIndex={appIndex} adminDash={adminDash} bundleIndex={bundleIndex} openClawIndex={openClawIndex} addons={addons} reels={reels} amcIndex={amcIndex} domainCost={domainCost} domainYears={domainYears} quoteUrl={quoteUrl} setStep={setStep} />}

            {/* all-in-one flow */}
            {step === 1 && category === "all-in-one" && <StepAllInOnePreview />}
            {step === 2 && category === "all-in-one" && <StepReels count={reels} onChange={setReels} />}
            {step === 3 && category === "all-in-one" && <StepQuote category={category} webIndex={webIndex} appIndex={appIndex} adminDash={adminDash} bundleIndex={bundleIndex} openClawIndex={openClawIndex} addons={addons} reels={reels} amcIndex={amcIndex} domainCost={domainCost} domainYears={domainYears} quoteUrl={quoteUrl} setStep={setStep} />}
          </div>

          {step < totalSteps - 1 && <NavButtons step={step} setStep={setStep} total={totalSteps} />}
        </div>
      </div>
    </section>
  );
}
