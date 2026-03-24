"use client";

import { useState, useMemo } from "react";
import { FadeIn } from "./fade-in";
import { WHATSAPP_URL } from "@/lib/constants";

/* ─── data ─────────────────────────────────────────── */

const PACKAGES = [
  { name: "Starter", price: 10_000, desc: "5-page site, WhatsApp, Maps, contact form", badge: null, hours: 20 },
  { name: "Standard", price: 20_000, desc: "10 pages, CMS, SEO, booking forms, Instagram embed", badge: null, hours: 32 },
  { name: "Business", price: 35_000, desc: "Online ordering, delivery tracking, customer accounts", badge: null, hours: 56 },
  { name: "App + Web", price: 75_000, desc: "Full website + Android & iOS app with live tracking", badge: null, hours: 160 },
  { name: "Content Studio", price: 95_000, desc: "App + Web + 8 Instagram Reels/month for 3 months included", badge: "Best value", hours: 160 },
];

const ADDONS = [
  { name: "Google Business Profile setup", desc: "Get found on Google Maps", price: 2_000, suffix: "" },
  { name: "Logo design", desc: "Custom brand logo", price: 3_500, suffix: "" },
  { name: "WhatsApp Business API", desc: "Automated WhatsApp messaging", price: 4_000, suffix: "" },
  { name: "SEO audit report", desc: "Detailed keyword & ranking analysis", price: 3_000, suffix: "" },
  { name: "Custom business email (5 IDs)", desc: "e.g. you@yourbusiness.in", price: 1_500, suffix: "/yr" },
  { name: "Monthly website content updates", desc: "1\u20132 page updates per month", price: 800, suffix: "/mo" },
];

const AMC_PLANS = [
  { name: "Basic AMC", price: 900, desc: "Hosting, uptime, 1 edit/month" },
  { name: "Standard AMC", price: 1_500, desc: "Above + 2 content updates, plugin updates, report" },
  { name: "Premium AMC", price: 2_200, desc: "Above + priority support, 5 edits, SEO check" },
  { name: "No AMC", price: 0, desc: "Self-managed (not recommended)" },
];

const REEL_PRICE = 950;
const REEL_PRESETS = [4, 8, 12, 16];
const STEP_TITLES = [
  { title: "What do you need?", sub: "Pick the package that matches your business" },
  { title: "Any extras?", sub: "Toggle what you need \u2014 prices are one-time unless marked monthly" },
  { title: "Instagram Reels?", sub: `We produce AI-assisted Reels for your business \u2014 \u20b9${REEL_PRICE.toLocaleString("en-IN")} per Reel (~$10)` },
  { title: "Hosting & maintenance", sub: "Keep your site fast, secure and updated" },
  { title: "Your quote", sub: "Full breakdown of what you\u2019ll pay" },
];

/* ─── helpers ──────────────────────────────────────── */

function inr(n: number): string {
  return "\u20b9" + n.toLocaleString("en-IN");
}

/* ─── sub-components ───────────────────────────────── */

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex gap-2">
      {STEP_TITLES.map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
            i <= step ? "bg-accent" : "bg-outline"
          }`}
        />
      ))}
    </div>
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ${
        checked ? "bg-accent" : "bg-[#333]"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 translate-y-0.5 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

function NavButtons({
  step,
  setStep,
  totalSteps,
  lastLabel,
}: {
  step: number;
  setStep: (n: number) => void;
  totalSteps: number;
  lastLabel: string;
}) {
  return (
    <div className={`mt-8 grid gap-3 ${step === 0 ? "grid-cols-1" : "grid-cols-2"}`}>
      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          className="rounded-xl border border-outline py-3.5 text-sm font-medium text-primary transition-colors hover:bg-surface"
        >
          &larr; Back
        </button>
      )}
      <button
        onClick={() => setStep(Math.min(step + 1, totalSteps - 1))}
        className="rounded-xl border border-outline py-3.5 text-sm font-medium text-primary transition-colors hover:bg-surface"
      >
        {step === totalSteps - 2
          ? "See my quote \u2192"
          : step === totalSteps - 1
            ? lastLabel
            : "Next \u2192"}
      </button>
    </div>
  );
}

/* ─── steps ────────────────────────────────────────── */

function StepPackages({
  selected,
  onSelect,
}: {
  selected: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {/* row 1: Starter + Standard */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {PACKAGES.slice(0, 2).map((pkg, i) => (
          <button
            key={pkg.name}
            onClick={() => onSelect(i)}
            className={`rounded-xl border p-5 text-left transition-all duration-200 ${
              selected === i
                ? "border-accent/60 bg-accent/5"
                : "border-outline bg-surface hover:border-secondary/40"
            }`}
          >
            <span className="text-sm font-semibold">{pkg.name}</span>
            <span className="mt-1 block text-2xl font-semibold tabular-nums tracking-tight">
              {inr(pkg.price)}
            </span>
            <span className="mt-1 block text-xs text-muted">{pkg.desc}</span>
          </button>
        ))}
      </div>
      {/* row 2: Business + App+Web */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {PACKAGES.slice(2, 4).map((pkg, i) => (
          <button
            key={pkg.name}
            onClick={() => onSelect(i + 2)}
            className={`rounded-xl border p-5 text-left transition-all duration-200 ${
              selected === i + 2
                ? "border-accent/60 bg-accent/5"
                : "border-outline bg-surface hover:border-secondary/40"
            }`}
          >
            <span className="text-sm font-semibold">{pkg.name}</span>
            <span className="mt-1 block text-2xl font-semibold tabular-nums tracking-tight">
              {inr(pkg.price)}
            </span>
            <span className="mt-1 block text-xs text-muted">{pkg.desc}</span>
          </button>
        ))}
      </div>
      {/* row 3: Content Studio (full width) */}
      {(() => {
        const pkg = PACKAGES[4];
        return (
          <button
            onClick={() => onSelect(4)}
            className={`rounded-xl border p-5 text-left transition-all duration-200 ${
              selected === 4
                ? "border-accent/60 bg-accent/5"
                : "border-outline bg-surface hover:border-secondary/40"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">{pkg.name}</span>
              {pkg.badge && (
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent">
                  {pkg.badge}
                </span>
              )}
            </div>
            <span className="mt-1 block text-2xl font-semibold tabular-nums tracking-tight">
              {inr(pkg.price)}
            </span>
            <span className="mt-1 block text-xs text-muted">{pkg.desc}</span>
          </button>
        );
      })()}
    </div>
  );
}

function StepAddons({
  selected,
  onToggle,
}: {
  selected: Set<number>;
  onToggle: (i: number) => void;
}) {
  return (
    <div className="flex flex-col divide-y divide-outline/50">
      {ADDONS.map((addon, i) => (
        <div
          key={addon.name}
          className="flex items-center justify-between gap-4 py-5"
        >
          <div className="flex-1">
            <span className="text-sm font-semibold">{addon.name}</span>
            <span className="mt-0.5 block text-xs text-muted">{addon.desc}</span>
          </div>
          <span className="flex-shrink-0 text-sm tabular-nums text-secondary">
            +{inr(addon.price)}{addon.suffix}
          </span>
          <Toggle
            checked={selected.has(i)}
            onChange={() => onToggle(i)}
          />
        </div>
      ))}
    </div>
  );
}

function StepReels({
  count,
  onChange,
}: {
  count: number;
  onChange: (n: number) => void;
}) {
  const monthly = count * REEL_PRICE;
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="text-sm font-semibold">Reels per month</span>
          <span className="mt-0.5 block text-xs text-muted">
            {inr(monthly)}/month &middot; {count} Reels &times; {inr(REEL_PRICE)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onChange(Math.max(0, count - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline text-sm text-secondary transition-colors hover:text-primary"
            aria-label="Decrease"
          >
            &minus;
          </button>
          <span className="w-10 text-center text-lg font-semibold tabular-nums">
            {count}
          </span>
          <button
            onClick={() => onChange(count + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline text-sm text-secondary transition-colors hover:text-primary"
            aria-label="Increase"
          >
            +
          </button>
        </div>
      </div>

      <hr className="my-5 border-outline/50" />

      <div className="flex flex-wrap gap-2">
        {REEL_PRESETS.map((n) => (
          <button
            key={n}
            onClick={() => onChange(n)}
            className={`rounded-full border px-4 py-2 text-xs transition-colors ${
              count === n
                ? "border-accent/60 bg-accent/10 text-accent"
                : "border-outline text-secondary hover:text-primary"
            }`}
          >
            {n}/mo &mdash; {inr(n * REEL_PRICE)}
          </button>
        ))}
      </div>

      <p className="mt-5 text-xs text-muted">
        Each Reel includes: AI script writing, voiceover, editing, captions,
        branded template, and scheduled posting.
      </p>
    </div>
  );
}

const DOMAIN_DURATIONS = [
  { label: "1 year", years: 1 },
  { label: "2 years", years: 2 },
  { label: "5 years", years: 5 },
];

function StepMaintenance({
  amcIndex,
  setAmcIndex,
  domainCost,
  setDomainCost,
  domainYears,
  setDomainYears,
}: {
  amcIndex: number;
  setAmcIndex: (i: number) => void;
  domainCost: number;
  setDomainCost: (n: number) => void;
  domainYears: number;
  setDomainYears: (n: number) => void;
}) {
  const perYear = domainYears > 0 ? Math.round(domainCost / domainYears) : 0;
  return (
    <div>
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
        Annual Maintenance Contract (AMC)
      </span>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {AMC_PLANS.map((plan, i) => (
          <button
            key={plan.name}
            onClick={() => setAmcIndex(i)}
            className={`rounded-xl border p-5 text-left transition-all duration-200 ${
              amcIndex === i
                ? "border-accent/60 bg-accent/5"
                : "border-outline bg-surface hover:border-secondary/40"
            }`}
          >
            <span className="text-sm font-semibold">{plan.name}</span>
            <span className="mt-1 block text-2xl font-semibold tabular-nums tracking-tight">
              {inr(plan.price)}/mo
            </span>
            <span className="mt-1 block text-xs text-muted">{plan.desc}</span>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
          Domain registration
        </span>

        {/* duration selector */}
        <div className="mt-4">
          <span className="text-sm font-semibold">Registration duration</span>
          <div className="mt-2 flex gap-2">
            {DOMAIN_DURATIONS.map((d) => (
              <button
                key={d.years}
                onClick={() => setDomainYears(d.years)}
                className={`rounded-lg border px-4 py-2 text-xs transition-colors ${
                  domainYears === d.years
                    ? "border-accent/60 bg-accent/10 text-accent"
                    : "border-outline text-secondary hover:text-primary"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* cost input */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <span className="text-sm font-semibold">
              Total cost for {domainYears} {domainYears === 1 ? "year" : "years"}
            </span>
            <span className="mt-0.5 block text-xs text-muted">
              Enter the price from Namecheap for {domainYears}yr registration
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted">{"₹"}</span>
            <input
              type="number"
              value={domainCost}
              onChange={(e) => setDomainCost(Number(e.target.value) || 0)}
              className="w-24 rounded-lg border border-outline bg-surface px-3 py-2.5 text-center text-sm tabular-nums text-primary outline-none focus:border-accent/60"
            />
          </div>
        </div>

        {domainCost > 0 && domainYears > 1 && (
          <p className="mt-2 text-xs text-muted">
            That{"'"}s {inr(perYear)}/year over {domainYears} years
          </p>
        )}
      </div>
    </div>
  );
}

function StepQuote({
  pkg,
  addons,
  reels,
  amc,
  domainCost,
  domainYears,
  quoteUrl,
  setStep,
}: {
  pkg: (typeof PACKAGES)[number];
  addons: Set<number>;
  reels: number;
  amc: (typeof AMC_PLANS)[number];
  domainCost: number;
  domainYears: number;
  quoteUrl: string;
  setStep: (n: number) => void;
}) {
  // calculate totals
  let oneTimeTotal = pkg.price;
  let monthlyTotal = amc.price;
  let yearlyTotal = 0;
  const oneTimeItems: { label: string; amount: string; color: string }[] = [
    { label: `${pkg.name} package`, amount: inr(pkg.price), color: "bg-green-400" },
  ];
  const monthlyItems: { label: string; amount: string; color: string }[] = [];
  const yearlyItems: { label: string; amount: string; color: string }[] = [];

  addons.forEach((i) => {
    const a = ADDONS[i];
    if (a.suffix === "/mo") {
      monthlyTotal += a.price;
      monthlyItems.push({ label: a.name, amount: inr(a.price) + "/mo", color: "bg-accent" });
    } else if (a.suffix === "/yr") {
      yearlyTotal += a.price;
      yearlyItems.push({ label: `${a.name} (yearly)`, amount: inr(a.price) + "/yr", color: "bg-accent" });
    } else {
      oneTimeTotal += a.price;
      oneTimeItems.push({ label: a.name, amount: inr(a.price), color: "bg-purple-400" });
    }
  });

  // domain — recurring per duration
  if (domainCost > 0) {
    const domainLabel = domainYears === 1
      ? "Domain registration (yearly)"
      : `Domain registration (${domainYears}-year)`;
    const domainSuffix = domainYears === 1 ? "/yr" : `/${domainYears}yr`;
    yearlyItems.push({ label: domainLabel, amount: inr(domainCost) + domainSuffix, color: "bg-blue-400" });
    yearlyTotal += domainYears === 1 ? domainCost : domainCost;
  }

  if (reels > 0) {
    const reelMonthly = reels * REEL_PRICE;
    monthlyTotal += reelMonthly;
    monthlyItems.push({ label: `Instagram Reels (${reels}/mo)`, amount: inr(reelMonthly) + "/mo", color: "bg-accent" });
  }

  if (amc.price > 0) {
    monthlyItems.unshift({ label: amc.name, amount: inr(amc.price) + "/mo", color: "bg-green-400" });
  }

  const upfront = Math.ceil(oneTimeTotal / 2);
  const onDelivery = oneTimeTotal - upfront;

  return (
    <div className="flex flex-col gap-4">
      {/* one-time */}
      <div className="rounded-xl border border-outline p-5">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
          One-time payment
        </span>
        <div className="mt-3 flex flex-col gap-2.5">
          {oneTimeItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2.5">
                <span className={`h-1.5 w-1.5 rounded-full ${item.color}`} />
                {item.label}
              </span>
              <span className="tabular-nums text-secondary">{item.amount}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-outline/50 pt-3">
          <span className="font-semibold">Total due on start</span>
          <span className="text-lg font-semibold tabular-nums">{inr(oneTimeTotal)}</span>
        </div>
      </div>

      {/* monthly recurring */}
      {monthlyTotal > 0 && (
        <div className="rounded-xl border border-outline p-5">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            Monthly recurring
          </span>
          <div className="mt-3 flex flex-col gap-2.5">
            {monthlyItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${item.color}`} />
                  {item.label}
                </span>
                <span className="tabular-nums text-secondary">{item.amount}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-outline/50 pt-3">
            <span className="font-semibold text-accent">Total per month</span>
            <span className="text-lg font-semibold tabular-nums text-accent">
              {inr(monthlyTotal)}/mo
            </span>
          </div>
        </div>
      )}

      {/* yearly */}
      {yearlyTotal > 0 && (
        <div className="rounded-xl border border-outline p-5">
          <div className="flex items-center justify-between text-sm">
            <span>Yearly charges</span>
            <span className="tabular-nums text-secondary">{inr(yearlyTotal)}/yr</span>
          </div>
        </div>
      )}

      {/* payment terms */}
      <div className="rounded-xl border border-outline p-5">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
          Payment terms
        </span>
        <div className="mt-3 flex flex-col gap-2.5 text-sm">
          <div className="flex items-center justify-between">
            <span>Due now (50% upfront)</span>
            <span className="tabular-nums font-medium">{inr(upfront)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Due on delivery (50%)</span>
            <span className="tabular-nums font-medium">{inr(onDelivery)}</span>
          </div>
          {monthlyTotal > 0 && (
            <div className="flex items-center justify-between">
              <span>Monthly from day 1</span>
              <span className="tabular-nums font-medium text-accent">
                {inr(monthlyTotal)}/mo
              </span>
            </div>
          )}
        </div>
      </div>

      {/* actions */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setStep(0)}
          className="rounded-xl border border-outline py-3.5 text-sm font-medium text-primary transition-colors hover:bg-surface"
        >
          &larr; Edit
        </button>
        <a
          href={quoteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-outline py-3.5 text-sm font-medium text-primary transition-colors hover:bg-surface"
        >
          Get formal quote &#8599;
        </a>
      </div>
    </div>
  );
}

/* ─── main ─────────────────────────────────────────── */

export function Pricing() {
  const [step, setStep] = useState(0);
  const [pkgIndex, setPkgIndex] = useState(1);
  const [reels, setReels] = useState(0);
  const [addons, setAddons] = useState<Set<number>>(new Set());
  const [amcIndex, setAmcIndex] = useState(0);
  const [domainCost, setDomainCost] = useState(800);
  const [domainYears, setDomainYears] = useState(1);

  function toggleAddon(i: number) {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const quoteUrl = useMemo(() => {
    const pkg = PACKAGES[pkgIndex];
    const lines = [`Package: ${pkg.name} — ${inr(pkg.price)}`];
    addons.forEach((i) => {
      const a = ADDONS[i];
      lines.push(`Add-on: ${a.name} — ${inr(a.price)}${a.suffix}`);
    });
    if (reels > 0) lines.push(`Reels: ${reels}/month — ${inr(reels * REEL_PRICE)}/mo`);
    const amc = AMC_PLANS[amcIndex];
    if (amc.price > 0) lines.push(`AMC: ${amc.name} — ${inr(amc.price)}/mo`);
    if (domainCost > 0) lines.push(`Domain: ${inr(domainCost)} for ${domainYears} ${domainYears === 1 ? "year" : "years"}`);

    return WHATSAPP_URL.includes("wa.me")
      ? `${WHATSAPP_URL.split("?")[0]}?text=${encodeURIComponent(lines.join("\n"))}`
      : "#contact";
  }, [pkgIndex, addons, reels, amcIndex, domainCost, domainYears]);

  const current = STEP_TITLES[step];

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        {/* section header */}
        <FadeIn>
          <div className="mb-12 flex items-center gap-4">
            <span className="font-mono text-xs text-muted">03</span>
            <span className="h-px w-8 bg-outline" />
            <span className="text-xs uppercase tracking-[0.2em] text-secondary">
              Pricing
            </span>
          </div>
        </FadeIn>

        {/* wizard */}
        <div>
          <ProgressBar step={step} />

          <div className="mt-6">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {current.title}
            </h2>
            <p className="mt-1 text-sm text-muted">{current.sub}</p>
          </div>

          <div className="mt-8">
            {step === 0 && (
              <StepPackages selected={pkgIndex} onSelect={setPkgIndex} />
            )}
            {step === 1 && (
              <StepAddons selected={addons} onToggle={toggleAddon} />
            )}
            {step === 2 && (
              <StepReels count={reels} onChange={setReels} />
            )}
            {step === 3 && (
              <StepMaintenance
                amcIndex={amcIndex}
                setAmcIndex={setAmcIndex}
                domainCost={domainCost}
                setDomainCost={setDomainCost}
                domainYears={domainYears}
                setDomainYears={setDomainYears}
              />
            )}
            {step === 4 && (
              <StepQuote
                pkg={PACKAGES[pkgIndex]}
                addons={addons}
                reels={reels}
                amc={AMC_PLANS[amcIndex]}
                domainCost={domainCost}
                domainYears={domainYears}
                quoteUrl={quoteUrl}
                setStep={setStep}
              />
            )}
          </div>

          {step < 4 && (
            <NavButtons
              step={step}
              setStep={setStep}
              totalSteps={5}
              lastLabel="Get formal quote &#8599;"
            />
          )}
        </div>
      </div>
    </section>
  );
}
