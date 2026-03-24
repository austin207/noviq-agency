import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MedCare Plus — Demo | Noviq",
  description: "Sample general clinic website built by Noviq.",
};

const SERVICES = [
  {
    title: "General Medicine",
    desc: "Consultations, prescriptions, chronic condition management. Walk in or book ahead.",
  },
  {
    title: "Pediatrics",
    desc: "Child health check-ups, vaccinations, growth monitoring. Gentle care for your little ones.",
  },
  {
    title: "Lab Tests",
    desc: "Blood work, urine tests, health panels. Results within 24 hours, sent straight to your phone.",
  },
  {
    title: "Health Check-ups",
    desc: "Comprehensive annual check-ups for individuals and families. Catch problems before they start.",
  },
];

const DOCTORS = [
  { name: "Dr. Rajesh Kumar", role: "General Physician", exp: "18 years" },
  { name: "Dr. Anitha Nair", role: "Pediatrician", exp: "12 years" },
  { name: "Dr. Sanjay Menon", role: "Internal Medicine", exp: "15 years" },
];

export default function ClinicDemo() {
  return (
    <div className="min-h-dvh" style={{ background: "#F0FDF4", color: "#14532D" }}>
      {/* noviq badge */}
      <Link
        href="/work"
        className="fixed top-4 right-4 z-50 rounded-full border border-black/10 bg-white/90 px-4 py-1.5 text-[11px] font-medium text-gray-600 shadow-sm backdrop-blur-md transition-colors hover:text-gray-900"
      >
        &larr; Noviq demo
      </Link>

      {/* nav */}
      <nav className="border-b border-emerald-100" style={{ background: "#F0FDF4" }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">MedCare<span style={{ color: "#059669" }}>+</span></span>
          <div className="hidden gap-8 text-sm md:flex" style={{ color: "#6B8F71" }}>
            <a href="#services" className="transition-colors hover:text-emerald-900">Services</a>
            <a href="#doctors" className="transition-colors hover:text-emerald-900">Doctors</a>
            <a href="#contact" className="transition-colors hover:text-emerald-900">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-sm font-medium text-white"
            style={{ background: "#059669" }}
          >
            Book now
          </a>
        </div>
      </nav>

      {/* hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "#059669" }}>
            Multi-speciality clinic — Ernakulam, Kochi
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Quality healthcare without the hospital hassle.
          </h1>
          <p className="mt-4 max-w-md text-base" style={{ color: "#6B8F71" }}>
            Walk-in consultations, lab tests, and health check-ups — all under
            one roof. No queues, no runaround.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full px-7 py-3 text-sm font-medium text-white"
              style={{ background: "#059669" }}
            >
              Book a consultation
            </a>
            <a
              href="#services"
              className="rounded-full border px-7 py-3 text-sm"
              style={{ borderColor: "#BBF7D0", color: "#059669" }}
            >
              View services
            </a>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="services" className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "#059669" }}>
            Our services
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Everything your family needs.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6B8F71" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* doctors */}
      <section id="doctors" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "#059669" }}>
            Our team
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Experienced doctors you can trust.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {DOCTORS.map((d) => (
              <div key={d.name} className="rounded-xl border border-emerald-100 p-6" style={{ background: "#ECFDF5" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold text-white" style={{ background: "#059669" }}>
                  {d.name.split(" ").slice(1).map(n => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-semibold">{d.name}</h3>
                <p className="text-sm" style={{ color: "#059669" }}>{d.role}</p>
                <p className="mt-1 text-xs" style={{ color: "#6B8F71" }}>{d.exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="contact" className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Walk in or book ahead.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm" style={{ color: "#6B8F71" }}>
            Open 7 days a week. No referral needed for any service.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="rounded-full px-8 py-3.5 text-sm font-medium text-white" style={{ background: "#059669" }}>
              +91 98765 43210
            </span>
            <span className="rounded-full border px-8 py-3.5 text-sm" style={{ borderColor: "#BBF7D0" }}>
              Ernakulam, Kochi
            </span>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-emerald-100 py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 text-xs" style={{ color: "#6B8F71" }}>
          <span>MedCare Plus</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
