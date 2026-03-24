import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SmileCraft Dental — Demo | Noviq",
  description: "Sample dental clinic website built by Noviq.",
};

/* split-hero + stats bar + horizontal scroll services + stacked testimonials */

const STATS = [
  { value: "12+", label: "Years" },
  { value: "8,000+", label: "Patients" },
  { value: "4", label: "Dentists" },
  { value: "4.9", label: "Google rating" },
];

const SERVICES = [
  {
    num: "01",
    title: "General Dentistry",
    desc: "Cleanings, fillings, check-ups — the essentials done gently and on time.",
  },
  {
    num: "02",
    title: "Cosmetic Dentistry",
    desc: "Whitening, veneers, and smile makeovers. Walk out looking better.",
  },
  {
    num: "03",
    title: "Orthodontics",
    desc: "Braces and clear aligners for all ages. Modern options, no metal mouth.",
  },
  {
    num: "04",
    title: "Root Canal",
    desc: "Pain-free treatment with modern equipment. Save the tooth, skip the anxiety.",
  },
  {
    num: "05",
    title: "Kids Dentistry",
    desc: "Gentle care for children. A fun, friendly clinic they won't dread visiting.",
  },
];

const REVIEWS = [
  {
    text: "First dentist visit where I didn't feel like I was being upsold. Honest and kind.",
    name: "Priya M.",
    area: "Thrippunithura",
  },
  {
    text: "My son actually asked to come back. That's never happened with any other dentist.",
    name: "Rahul T.",
    area: "Tripunithura",
  },
  {
    text: "Quick, clean, and professional. The whole experience took 30 minutes, not the whole morning.",
    name: "Sneha K.",
    area: "Ernakulam",
  },
];

export default function DentalDemo() {
  return (
    <div className="min-h-dvh" style={{ background: "#F8FAFB", color: "#1A2332" }}>
      <Link
        href="/work"
        className="fixed top-4 right-4 z-50 rounded-full border border-black/10 bg-white/90 px-4 py-1.5 text-[11px] font-medium text-gray-600 shadow-sm backdrop-blur-md transition-colors hover:text-gray-900"
      >
        &larr; Noviq demo
      </Link>

      {/* nav */}
      <nav className="border-b" style={{ borderColor: "#E8EDF2" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight">
            smile<span style={{ color: "#0891B2" }}>craft</span>
          </span>
          <div className="hidden items-center gap-8 text-sm md:flex" style={{ color: "#6B7A8D" }}>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="rounded-full px-5 py-2 text-sm font-medium text-white" style={{ background: "#0891B2" }}>
            Book appointment
          </a>
        </div>
      </nav>

      {/* split hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border px-3 py-1 text-[11px] font-medium" style={{ borderColor: "#B2EBF2", color: "#0891B2", background: "#E0F7FA" }}>
              Thrippunithura, Kochi
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Dental care<br />that respects<br />
              <span style={{ color: "#0891B2" }}>your time.</span>
            </h1>
            <p className="mt-5 max-w-md leading-relaxed" style={{ color: "#6B7A8D" }}>
              Modern clinic, honest pricing, appointments that actually run on
              schedule. For the whole family.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="rounded-full px-7 py-3 text-sm font-medium text-white" style={{ background: "#0891B2" }}>
                Book a visit
              </a>
              <a href="tel:+919876543210" className="rounded-full border px-7 py-3 text-sm font-medium" style={{ borderColor: "#B2EBF2", color: "#0891B2" }}>
                Call us
              </a>
            </div>
          </div>

          {/* hero image + stats */}
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop"
                alt="Modern dental clinic interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border p-3 text-center" style={{ borderColor: "#E8EDF2", background: "#FFFFFF" }}>
                  <span className="text-lg font-bold" style={{ color: "#0891B2" }}>{s.value}</span>
                  <span className="mt-0.5 block text-[10px] uppercase tracking-widest" style={{ color: "#6B7A8D" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* horizontal scroll services */}
      <section id="services" className="border-y py-16" style={{ borderColor: "#E8EDF2", background: "#FFFFFF" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#0891B2" }}>Services</span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">What we treat.</h2>
            </div>
            <span className="hidden text-xs sm:block" style={{ color: "#6B7A8D" }}>Scroll &rarr;</span>
          </div>
        </div>
        <div className="mt-8 flex gap-4 overflow-x-auto px-6 pb-4 xl:mx-auto xl:max-w-6xl">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="flex min-w-[260px] flex-shrink-0 flex-col rounded-2xl border p-6"
              style={{ borderColor: "#E8EDF2" }}
            >
              <span className="text-3xl font-light" style={{ color: "#D1D9E0" }}>{s.num}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6B7A8D" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* stacked reviews */}
      <section id="reviews" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#0891B2" }}>Reviews</span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">What patients say.</h2>

          <div className="mt-10 flex flex-col gap-4">
            {REVIEWS.map((r, i) => (
              <div key={i} className="flex flex-col justify-between gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center" style={{ borderColor: "#E8EDF2", background: "#FFFFFF" }}>
                <p className="flex-1 text-base leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <div className="flex-shrink-0 text-right">
                  <span className="block text-sm font-semibold">{r.name}</span>
                  <span className="text-xs" style={{ color: "#6B7A8D" }}>{r.area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="contact" className="border-t py-16" style={{ borderColor: "#E8EDF2", background: "#FFFFFF" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl p-8 text-center sm:p-12" style={{ background: "#E0F7FA" }}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: "#0891B2" }}>
              Book your appointment today.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm" style={{ color: "#4A7C7E" }}>
              Walk in, call, or WhatsApp. We usually fit you in within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="rounded-full px-8 py-3.5 text-sm font-medium text-white" style={{ background: "#0891B2" }}>
                +91 98765 43210
              </span>
              <span className="rounded-full border px-8 py-3.5 text-sm" style={{ borderColor: "#80DEEA" }}>
                Mon–Sat &middot; 9 AM – 8 PM
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-6" style={{ borderColor: "#E8EDF2" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-xs" style={{ color: "#6B7A8D" }}>
          <span>SmileCraft Dental &middot; Thrippunithura</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
