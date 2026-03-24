import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MedCare Plus - Demo | Noviq",
  description: "Sample general clinic website built by Noviq.",
};

/* centered hero + process steps + horizontal doctor cards + emergency banner */

const SERVICES = [
  { icon: "🩺", title: "General Medicine", desc: "Walk-in consultations and chronic care management." },
  { icon: "👶", title: "Pediatrics", desc: "Child health, vaccinations, growth monitoring." },
  { icon: "🔬", title: "Lab Tests", desc: "Blood work, panels. Results in 24 hours to your phone." },
  { icon: "📋", title: "Health Check-ups", desc: "Annual check-ups for individuals and families." },
  { icon: "💊", title: "Pharmacy", desc: "In-house pharmacy. Get your prescription filled before you leave." },
  { icon: "🫀", title: "Cardiology", desc: "ECG, echo, and heart health consultations." },
];

const STEPS = [
  { num: "1", title: "Walk in or book", desc: "No referral needed. Book online or just show up." },
  { num: "2", title: "See a doctor", desc: "Average wait time under 15 minutes." },
  { num: "3", title: "Get treated", desc: "Prescription, lab tests, or referral - all handled in-house." },
];

const DOCTORS = [
  { name: "Dr. Rajesh Kumar", role: "General Physician", exp: "18 yrs" },
  { name: "Dr. Anitha Nair", role: "Pediatrician", exp: "12 yrs" },
  { name: "Dr. Sanjay Menon", role: "Internal Medicine", exp: "15 yrs" },
  { name: "Dr. Fathima Begum", role: "Cardiologist", exp: "10 yrs" },
];

export default function ClinicDemo() {
  return (
    <div className="min-h-dvh" style={{ background: "#FAFDFB", color: "#1A2E1A" }}>
      <Link
        href="/work"
        className="fixed top-4 right-4 z-50 rounded-full border border-black/10 bg-white/90 px-4 py-1.5 text-[11px] font-medium text-gray-600 shadow-sm backdrop-blur-md transition-colors hover:text-gray-900"
      >
        &larr; Noviq demo
      </Link>

      {/* emergency banner */}
      <div className="text-center text-xs font-medium py-2.5" style={{ background: "#059669", color: "#FFFFFF" }}>
        Emergency? Call +91 98765 43210 - we&apos;re open 24/7 for urgent care.
      </div>

      {/* nav */}
      <nav className="border-b" style={{ borderColor: "#E5F0E5" }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight">
            MedCare<span className="font-light" style={{ color: "#059669" }}>+</span>
          </span>
          <div className="hidden gap-8 text-sm md:flex" style={{ color: "#6B8F71" }}>
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="#contact">Visit us</a>
          </div>
          <a href="#contact" className="rounded-lg px-5 py-2 text-sm font-medium text-white" style={{ background: "#059669" }}>
            Book now
          </a>
        </div>
      </nav>

      {/* centered hero */}
      <section className="py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <span className="inline-block rounded-lg border px-3 py-1 text-[11px] font-medium" style={{ borderColor: "#BBF7D0", color: "#059669", background: "#F0FDF4" }}>
            Multi-speciality clinic &middot; Ernakulam
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Healthcare without<br />the hospital hassle.
          </h1>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed" style={{ color: "#6B8F71" }}>
            Walk-in consultations, lab tests, pharmacy, and specialist care - all under one roof.
            Open 7 days. No queues, no runaround.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="rounded-lg px-7 py-3 text-sm font-medium text-white" style={{ background: "#059669" }}>
              Book a consultation
            </a>
            <a href="#services" className="rounded-lg border px-7 py-3 text-sm" style={{ borderColor: "#BBF7D0", color: "#059669" }}>
              View all services
            </a>
          </div>
        </div>
      </section>

      {/* hero image */}
      <div className="mx-auto max-w-5xl px-6 pb-12">
        <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "21/9" }}>
          <Image
            src="/samples/clinic.jpeg"
            alt="Doctor checking patient blood pressure"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* process steps */}
      <section className="border-y py-12" style={{ borderColor: "#E5F0E5", background: "#F0FDF4" }}>
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-6 sm:flex-row">
          {STEPS.map((s, i) => (
            <div key={s.num} className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: "#059669" }}>
                  {s.num}
                </span>
                <div>
                  <span className="text-sm font-semibold">{s.title}</span>
                  <p className="text-xs" style={{ color: "#6B8F71" }}>{s.desc}</p>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <span className="hidden text-xl sm:block" style={{ color: "#BBF7D0" }}>&rarr;</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* services - 3x2 icon grid */}
      <section id="services" className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#059669" }}>Services</span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">Everything your family needs.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-xl border p-6" style={{ borderColor: "#E5F0E5", background: "#FFFFFF" }}>
                <span className="text-2xl">{s.icon}</span>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm" style={{ color: "#6B8F71" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* doctors - horizontal cards */}
      <section id="doctors" className="py-16" style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-5xl px-6">
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#059669" }}>Our team</span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">Experienced doctors.</h2>
          <div className="mt-10 flex flex-col gap-4">
            {DOCTORS.map((d) => (
              <div key={d.name} className="flex items-center gap-5 rounded-xl border p-5" style={{ borderColor: "#E5F0E5" }}>
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80&auto=format&fit=crop&facepad=2"
                    alt={d.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1">
                  <span className="font-semibold">{d.name}</span>
                  <span className="ml-2 text-sm" style={{ color: "#059669" }}>{d.role}</span>
                </div>
                <span className="hidden text-sm sm:block" style={{ color: "#6B8F71" }}>{d.exp} experience</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* hours + cta */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border p-8" style={{ borderColor: "#E5F0E5", background: "#FFFFFF" }}>
              <h3 className="font-bold text-lg">Clinic hours</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                {[
                  ["Mon – Fri", "8 AM – 9 PM"],
                  ["Saturday", "8 AM – 6 PM"],
                  ["Sunday", "9 AM – 1 PM"],
                  ["Emergency", "24/7"],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between border-b pb-2" style={{ borderColor: "#E5F0E5" }}>
                    <span>{day}</span>
                    <span style={{ color: day === "Emergency" ? "#059669" : "#6B8F71" }} className={day === "Emergency" ? "font-semibold" : ""}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-xl p-8 text-white" style={{ background: "#059669" }}>
              <h3 className="text-2xl font-bold">Walk in or book ahead.</h3>
              <p className="mt-3 text-sm" style={{ color: "#A7F3D0" }}>
                No referral needed. Pharmacy and lab on-site.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <span className="rounded-lg border border-white/20 px-6 py-3 text-center text-sm font-medium">
                  +91 98765 43210
                </span>
                <span className="rounded-lg border border-white/20 px-6 py-3 text-center text-sm">
                  Ernakulam, Kochi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-6" style={{ borderColor: "#E5F0E5" }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 text-xs" style={{ color: "#6B8F71" }}>
          <span>MedCare Plus &middot; Ernakulam</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
