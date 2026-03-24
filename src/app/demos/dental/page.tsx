import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SmileCraft Dental — Demo | Noviq",
  description: "Sample dental clinic website built by Noviq.",
};

const SERVICES = [
  {
    title: "General Dentistry",
    desc: "Cleanings, fillings, check-ups — the essentials to keep your smile healthy, done gently and on time.",
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening, veneers, and smile makeovers. Walk out looking better than you walked in.",
  },
  {
    title: "Orthodontics",
    desc: "Braces and clear aligners for all ages. Straighten your teeth without the old-school look.",
  },
  {
    title: "Root Canal",
    desc: "Pain-free root canal treatment with modern equipment. Save your tooth, skip the anxiety.",
  },
];

const HOURS = [
  { day: "Mon – Fri", time: "9:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
];

export default function DentalDemo() {
  return (
    <div className="min-h-dvh" style={{ background: "#F0FDFA", color: "#134E4A" }}>
      {/* noviq badge */}
      <Link
        href="/work"
        className="fixed top-4 right-4 z-50 rounded-full border border-black/10 bg-white/90 px-4 py-1.5 text-[11px] font-medium text-gray-600 shadow-sm backdrop-blur-md transition-colors hover:text-gray-900"
      >
        &larr; Noviq demo
      </Link>

      {/* nav */}
      <nav className="border-b border-teal-100" style={{ background: "#F0FDFA" }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">SmileCraft</span>
          <div className="hidden gap-8 text-sm md:flex" style={{ color: "#5B8A86" }}>
            <a href="#services" className="transition-colors hover:text-teal-900">Services</a>
            <a href="#hours" className="transition-colors hover:text-teal-900">Hours</a>
            <a href="#contact" className="transition-colors hover:text-teal-900">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-sm font-medium text-white transition-colors"
            style={{ background: "#0891B2" }}
          >
            Book appointment
          </a>
        </div>
      </nav>

      {/* hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "#0891B2" }}>
            Dental clinic — Thrippunithura, Kochi
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Your smile deserves better than &ldquo;okay.&rdquo;
          </h1>
          <p className="mt-4 max-w-md text-base" style={{ color: "#5B8A86" }}>
            Modern dental care for the whole family. Gentle hands, honest
            pricing, and a clinic that actually runs on time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full px-7 py-3 text-sm font-medium text-white"
              style={{ background: "#0891B2" }}
            >
              Book a visit
            </a>
            <a
              href="#services"
              className="rounded-full border px-7 py-3 text-sm"
              style={{ borderColor: "#B2DFDB", color: "#0891B2" }}
            >
              Our services
            </a>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="services" className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "#0891B2" }}>
            What we do
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Treatments
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#5B8A86" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* hours + trust */}
      <section id="hours" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "#0891B2" }}>
                Clinic hours
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                We&apos;re open when you need us.
              </h2>
              <div className="mt-6 flex flex-col gap-3">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-teal-100 pb-3 text-sm">
                    <span>{h.day}</span>
                    <span style={{ color: "#5B8A86" }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="rounded-xl p-6" style={{ background: "#CCFBF1" }}>
                <p className="text-lg font-medium leading-relaxed">
                  &ldquo;First dentist visit where I didn&apos;t feel like I was being
                  upsold. Honest, clean, and the team is genuinely kind.&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium" style={{ color: "#0891B2" }}>
                  — Priya M., Thrippunithura
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
            Ready to book?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm" style={{ color: "#5B8A86" }}>
            Call us, WhatsApp us, or just walk in. No referral needed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="rounded-full px-8 py-3.5 text-sm font-medium text-white" style={{ background: "#0891B2" }}>
              +91 98765 43210
            </span>
            <span className="rounded-full border px-8 py-3.5 text-sm" style={{ borderColor: "#B2DFDB" }}>
              Thrippunithura, Ernakulam
            </span>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-teal-100 py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 text-xs" style={{ color: "#5B8A86" }}>
          <span>SmileCraft Dental</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
