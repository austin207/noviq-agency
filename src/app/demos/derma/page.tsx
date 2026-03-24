import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GlowDerm Skin & Hair — Demo | Noviq",
  description: "Sample dermatologist website built by Noviq.",
};

const TREATMENTS = [
  {
    title: "Acne & Scar Treatment",
    desc: "Clinical-grade peels, laser resurfacing, and targeted therapy. Clear skin, not just covered-up skin.",
  },
  {
    title: "Laser Hair Removal",
    desc: "FDA-approved diode laser. Permanent reduction in 6–8 sessions. Works on all skin tones.",
  },
  {
    title: "Hair Restoration",
    desc: "PRP therapy, GFC, and hair transplant consultations. Evidence-based treatments, not miracle cures.",
  },
  {
    title: "Dermal Fillers & Botox",
    desc: "Subtle enhancements by an experienced dermatologist. You'll look refreshed — not different.",
  },
  {
    title: "Skin Allergy & Eczema",
    desc: "Patch testing, immunotherapy, and long-term management plans. Treat the root cause, not just the itch.",
  },
  {
    title: "Pigmentation Correction",
    desc: "Melasma, dark spots, uneven tone. Customised protocols using the latest in dermatological science.",
  },
];

export default function DermaDemo() {
  return (
    <div className="min-h-dvh" style={{ background: "#FFF7ED", color: "#431407" }}>
      {/* noviq badge */}
      <Link
        href="/work"
        className="fixed top-4 right-4 z-50 rounded-full border border-black/10 bg-white/90 px-4 py-1.5 text-[11px] font-medium text-gray-600 shadow-sm backdrop-blur-md transition-colors hover:text-gray-900"
      >
        &larr; Noviq demo
      </Link>

      {/* nav */}
      <nav className="border-b border-orange-100" style={{ background: "#FFF7ED" }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">
            Glow<span style={{ color: "#C2662D" }}>Derm</span>
          </span>
          <div className="hidden gap-8 text-sm md:flex" style={{ color: "#9A7B6A" }}>
            <a href="#treatments" className="transition-colors hover:text-orange-900">Treatments</a>
            <a href="#about" className="transition-colors hover:text-orange-900">About</a>
            <a href="#contact" className="transition-colors hover:text-orange-900">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-sm font-medium text-white"
            style={{ background: "#C2662D" }}
          >
            Book consultation
          </a>
        </div>
      </nav>

      {/* hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "#C2662D" }}>
            Dermatologist — Panampilly Nagar, Kochi
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Your skin has a story. We help it look its best.
          </h1>
          <p className="mt-4 max-w-md text-base" style={{ color: "#9A7B6A" }}>
            Board-certified dermatologist with 14 years of clinical experience.
            Science-first treatments, honest advice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full px-7 py-3 text-sm font-medium text-white"
              style={{ background: "#C2662D" }}
            >
              Book a consultation
            </a>
            <a
              href="#treatments"
              className="rounded-full border px-7 py-3 text-sm"
              style={{ borderColor: "#FDBA74", color: "#C2662D" }}
            >
              View treatments
            </a>
          </div>
        </div>
      </section>

      {/* treatments */}
      <section id="treatments" className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "#C2662D" }}>
            Treatments
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Evidence-based. Results-driven.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TREATMENTS.map((t) => (
              <div key={t.title} className="rounded-xl border border-orange-50 p-6" style={{ background: "#FFFBF5" }}>
                <h3 className="font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#9A7B6A" }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* about / trust */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "#C2662D" }}>
                Your dermatologist
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Dr. Meera Krishnan
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: "#9A7B6A" }}>
                MD Dermatology (AIIMS), fellowship in cosmetic dermatology.
                14 years of clinical experience across leading hospitals in
                Kerala. Specialises in acne, pigmentation, and anti-ageing
                treatments.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-orange-200 px-4 py-1.5 text-xs" style={{ color: "#C2662D" }}>
                  MD Dermatology
                </span>
                <span className="rounded-full border border-orange-200 px-4 py-1.5 text-xs" style={{ color: "#C2662D" }}>
                  14 years experience
                </span>
                <span className="rounded-full border border-orange-200 px-4 py-1.5 text-xs" style={{ color: "#C2662D" }}>
                  10,000+ patients
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="rounded-xl p-6" style={{ background: "#FED7AA" }}>
                <p className="text-lg font-medium leading-relaxed" style={{ color: "#431407" }}>
                  &ldquo;She told me what would actually work instead of trying to
                  sell me expensive treatments. My skin has never been
                  better.&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium" style={{ color: "#C2662D" }}>
                  — Divya S., Ernakulam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="contact" className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Start with a consultation.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm" style={{ color: "#9A7B6A" }}>
            30-minute one-on-one with Dr. Krishnan. No commitment, no pressure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="rounded-full px-8 py-3.5 text-sm font-medium text-white" style={{ background: "#C2662D" }}>
              +91 98765 43210
            </span>
            <span className="rounded-full border px-8 py-3.5 text-sm" style={{ borderColor: "#FDBA74" }}>
              Panampilly Nagar, Kochi
            </span>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-orange-100 py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 text-xs" style={{ color: "#9A7B6A" }}>
          <span>GlowDerm Skin & Hair</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
