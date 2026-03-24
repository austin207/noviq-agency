import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GlowDerm Skin & Hair - Demo | Noviq",
  description: "Sample dermatologist website built by Noviq.",
};

/* editorial/magazine layout - large type, alternating sections, asymmetric grid */

const TREATMENTS = [
  { title: "Acne & Scars", desc: "Clinical peels, laser resurfacing, targeted therapy." },
  { title: "Laser Hair Removal", desc: "FDA-approved diode. Works on all skin tones." },
  { title: "Hair Restoration", desc: "PRP, GFC therapy, transplant consultations." },
  { title: "Fillers & Botox", desc: "Subtle enhancements. You look refreshed, not different." },
  { title: "Pigmentation", desc: "Melasma, dark spots, uneven tone. Custom protocols." },
  { title: "Allergy & Eczema", desc: "Patch testing, immunotherapy, long-term plans." },
];

const CREDENTIALS = [
  "MD Dermatology (AIIMS)",
  "14 years clinical experience",
  "Fellowship in cosmetic dermatology",
  "10,000+ patients treated",
];

export default function DermaDemo() {
  return (
    <div className="min-h-dvh" style={{ background: "#FFFAF5", color: "#2D1810" }}>
      <Link
        href="/work"
        className="fixed top-4 right-4 z-50 rounded-full border border-black/10 bg-white/90 px-4 py-1.5 text-[11px] font-medium text-gray-600 shadow-sm backdrop-blur-md transition-colors hover:text-gray-900"
      >
        &larr; Noviq demo
      </Link>

      {/* minimal nav - just wordmark and CTA */}
      <nav className="py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <span className="text-xl font-light tracking-tight">
            glow<span className="font-semibold" style={{ color: "#B85C38" }}>derm</span>
          </span>
          <a href="#book" className="text-sm font-medium underline underline-offset-4" style={{ color: "#B85C38" }}>
            Book consultation
          </a>
        </div>
      </nav>

      {/* editorial hero - oversized type */}
      <section className="pb-16 pt-12 sm:pb-24 sm:pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: "#B85C38" }}>
                Dermatologist &middot; Panampilly Nagar, Kochi
              </p>
              <h1 className="mt-4 text-5xl font-light leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                Your skin has<br />a story. We help it<br />
                <span className="font-semibold italic" style={{ color: "#B85C38" }}>look its best.</span>
              </h1>
            </div>
            <div className="flex flex-col gap-6 lg:col-span-4">
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&auto=format&fit=crop"
                  alt="Skincare treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
              <p className="leading-relaxed" style={{ color: "#8C7060" }}>
                Board-certified dermatologist with 14 years of experience.
                Science-first treatments. Honest advice. No upselling.
              </p>
              <a
                href="#book"
                className="inline-flex w-fit rounded-full px-7 py-3 text-sm font-medium text-white"
                style={{ background: "#B85C38" }}
              >
                Book a consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* horizontal divider with text */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4 border-t pt-6" style={{ borderColor: "#E8D5C4" }}>
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#B85C38" }}>
            Treatments
          </span>
          <span className="h-px flex-1" style={{ background: "#E8D5C4" }} />
        </div>
      </div>

      {/* treatments - asymmetric 2-col grid */}
      <section id="treatments" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {TREATMENTS.map((t, i) => (
              <div
                key={t.title}
                className={`${i % 2 === 1 ? "md:mt-12" : ""}`}
              >
                <div className="border-l-2 pl-6" style={{ borderColor: "#B85C38" }}>
                  <h3 className="text-xl font-semibold tracking-tight">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#8C7060" }}>
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* doctor - full-width tinted block */}
      <section className="py-16" style={{ background: "#F5EDE6" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80&auto=format&fit=crop&facepad=2"
                  alt="Dr. Meera Krishnan"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#B85C38" }}>
                Your dermatologist
              </span>
              <h2 className="mt-2 text-3xl font-light tracking-tight sm:text-4xl">
                Dr. Meera<br /><span className="font-semibold">Krishnan</span>
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {CREDENTIALS.map((c) => (
                  <span key={c} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: "#D4B8A0", color: "#8C7060" }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <blockquote className="text-2xl font-light leading-relaxed sm:text-3xl" style={{ color: "#2D1810" }}>
                &ldquo;She told me what would actually work instead of selling
                expensive treatments. My skin has never been better.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm font-medium" style={{ color: "#B85C38" }}>
                Divya S. &middot; Ernakulam
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* approach */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Evidence-based. Results-driven.
            </h2>
            <p className="mx-auto mt-4 leading-relaxed" style={{ color: "#8C7060" }}>
              Every treatment plan starts with a proper diagnosis. We use
              dermoscopy, patch testing, and clinical-grade tools - not
              guesswork. If something won&apos;t work for your skin, we&apos;ll
              tell you.
            </p>
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="book" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-2xl" style={{ background: "#B85C38" }}>
            <div className="p-8 text-center text-white sm:p-12">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Start with a consultation.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm" style={{ color: "#F4C9B0" }}>
                30-minute one-on-one with Dr. Krishnan. No commitment, no pressure.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium">
                  +91 98765 43210
                </span>
                <span className="rounded-full border border-white/30 px-8 py-3.5 text-sm">
                  Panampilly Nagar, Kochi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-xs" style={{ color: "#8C7060" }}>
          <span>GlowDerm Skin & Hair</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
