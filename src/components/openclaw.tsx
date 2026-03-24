"use client";

import { useState } from "react";
import { FadeIn } from "./fade-in";
import { WHATSAPP_URL } from "@/lib/constants";

/* ─── types ────────────────────────────────────────── */

type Currency = "INR" | "USD";

type Feature = { text: string; included: boolean };

type Tier = {
  name: string;
  usd: number;
  inr: number;
  netUsd: number;
  delivery: string;
  badge: string | null;
  badgeStyle: string;
  includesLabel: string;
  features: Feature[];
  stats: { services: string; backup: string };
};

/* ─── data ─────────────────────────────────────────── */

const USD_TO_INR = 92;

/** Round to nearest "clean" number: <1000→nearest 50, <10000→nearest 500, else nearest 1000 */
function roundClean(n: number): number {
  if (n < 1_000) return Math.ceil(n / 50) * 50;
  if (n < 10_000) return Math.ceil(n / 500) * 500;
  return Math.ceil(n / 1_000) * 1_000;
}

const TIERS: Tier[] = [
  {
    name: "Basic",
    usd: 200,
    inr: roundClean(200 * USD_TO_INR),
    netUsd: 157,
    delivery: "3 day",
    badge: null,
    badgeStyle: "",
    includesLabel: "Includes",
    features: [
      { text: "Docker Compose setup", included: true },
      { text: "OpenClaw + SearXNG", included: true },
      { text: "Security hardening", included: true },
      { text: "1 channel", included: true },
      { text: "1 LLM provider", included: true },
      { text: "10 skills", included: true },
      { text: "Morning briefing cron", included: true },
      { text: "Browser automation", included: false },
      { text: "Multi-model fallback", included: false },
      { text: "Multi-agent routing", included: false },
      { text: "n8n integration", included: false },
    ],
    stats: { services: "4", backup: "\u2014" },
  },
  {
    name: "Standard",
    usd: 500,
    inr: roundClean(500 * USD_TO_INR),
    netUsd: 400,
    delivery: "5 day",
    badge: "most popular",
    badgeStyle: "text-accent border-accent/30 bg-accent/10",
    includesLabel: "Everything in Basic, plus",
    features: [
      { text: "3 channels", included: true },
      { text: "Multi-model fallback chain", included: true },
      { text: "Playwright browser automation", included: true },
      { text: "25 curated skills", included: true },
      { text: "3 cron templates", included: true },
      { text: "Tailscale remote access", included: true },
      { text: "Backup + restore scripts", included: true },
      { text: "Log rotation", included: true },
      { text: "Multi-agent routing", included: false },
      { text: "n8n integration", included: false },
    ],
    stats: { services: "5", backup: "yes" },
  },
  {
    name: "Premium",
    usd: 750,
    inr: roundClean(750 * USD_TO_INR),
    netUsd: 600,
    delivery: "7 day",
    badge: null,
    badgeStyle: "",
    includesLabel: "Everything in Standard, plus",
    features: [
      { text: "Multi-agent routing (4 agents)", included: true },
      { text: "Docker sandbox isolation", included: true },
      { text: "n8n workflow integration", included: true },
      { text: "NemoClaw security wrapper", included: true },
      { text: "1 custom skill built", included: true },
      { text: "WhatsApp watchdog", included: true },
      { text: "Session recovery automation", included: true },
      { text: "Full handover docs", included: true },
      { text: "30-day support", included: true },
    ],
    stats: { services: "6", backup: "yes + S3" },
  },
];

const AMC = { usd: 20, inr: roundClean(20 * USD_TO_INR) };

/* ─── helpers ──────────────────────────────────────── */

function fmt(n: number, c: Currency): string {
  if (c === "INR") return "\u20b9" + n.toLocaleString("en-IN");
  return "$" + n.toLocaleString("en-US");
}

/* ─── sub-components ───────────────────────────────── */

function CurrencyToggle({
  value,
  onChange,
}: {
  value: Currency;
  onChange: (c: Currency) => void;
}) {
  return (
    <div className="inline-flex rounded-lg border border-outline bg-surface p-0.5">
      {(["INR", "USD"] as const).map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`rounded-md px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 ${
            value === c
              ? "bg-accent/15 text-accent"
              : "text-muted hover:text-secondary"
          }`}
        >
          {c === "INR" ? "\u20b9 INR" : "$ USD"}
        </button>
      ))}
    </div>
  );
}

function TierCard({
  tier,
  currency,
}: {
  tier: Tier;
  currency: Currency;
}) {
  const price = currency === "INR" ? tier.inr : tier.usd;
  const isPopular = tier.badge === "most popular";

  return (
    <div
      className={`flex flex-col rounded-xl border p-6 transition-colors duration-200 ${
        isPopular
          ? "border-accent/50 bg-accent/[0.03]"
          : "border-outline bg-surface"
      }`}
    >
      {/* badge */}
      {tier.badge ? (
        <span
          className={`mb-3 inline-flex w-fit rounded-full border px-2.5 py-0.5 text-[10px] font-medium italic tracking-wider ${tier.badgeStyle}`}
        >
          {tier.badge}
        </span>
      ) : (
        <div className="mb-3 h-[22px]" />
      )}

      {/* name + price */}
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
        {tier.name}
      </span>
      <span className="mt-1 text-3xl font-semibold tabular-nums tracking-tight">
        {fmt(price, currency)}
      </span>
      <span className="mt-1 text-xs text-muted">
        {currency === "USD" && (
          <>~${tier.netUsd} net &middot; </>
        )}
        {tier.delivery} delivery
      </span>

      {/* features */}
      <div className="mt-6 border-t border-outline/50 pt-4">
        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted">
          {tier.includesLabel}
        </span>
        <ul className="mt-3 flex flex-col gap-2">
          {tier.features.map((f) => (
            <li
              key={f.text}
              className={`flex items-start gap-2.5 text-sm ${
                f.included ? "text-primary" : "text-muted/60"
              }`}
            >
              <span
                className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                  f.included ? "bg-accent" : "bg-muted/40"
                }`}
              />
              {f.text}
            </li>
          ))}
        </ul>
      </div>

      {/* stats */}
      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between border-t border-outline/50 py-3 text-sm">
          <span className="text-muted">Services</span>
          <span className="font-medium tabular-nums">{tier.stats.services}</span>
        </div>
        <div className="flex items-center justify-between border-t border-outline/50 py-3 text-sm">
          <span className="text-muted">Backup script</span>
          <span className="font-medium">{tier.stats.backup}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── main ─────────────────────────────────────────── */

export function OpenClaw() {
  const [currency, setCurrency] = useState<Currency>("INR");

  return (
    <section id="openclaw" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* header */}
        <FadeIn>
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-xs text-muted">04</span>
            <span className="h-px w-8 bg-outline" />
            <span className="text-xs uppercase tracking-[0.2em] text-secondary">
              OpenClaw AI Assistant
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-lg text-secondary">
              Done-for-you AI assistant on WhatsApp or Telegram - answers
              customer queries, manages bookings, runs automations. We deploy,
              configure, and maintain it.
            </p>
            <CurrencyToggle value={currency} onChange={setCurrency} />
          </div>
        </FadeIn>

        {/* tier cards */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {TIERS.map((tier) => (
              <TierCard key={tier.name} tier={tier} currency={currency} />
            ))}
          </div>
        </FadeIn>

        {/* amc note + cta */}
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Ongoing maintenance:{" "}
              <span className="text-secondary">
                {fmt(AMC[currency.toLowerCase() as "inr" | "usd"], currency)}/mo
              </span>{" "}
              - API monitoring, prompt updates, uptime checks.
            </p>
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-2 rounded-full border border-outline px-6 py-2.5 text-sm text-secondary transition-all duration-200 hover:border-accent hover:text-accent"
            >
              Get a setup quote
              <span className="text-xs">&rarr;</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
