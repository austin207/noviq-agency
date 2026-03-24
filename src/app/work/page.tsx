import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Our Work — Noviq",
  description: "Sample websites built by Noviq for dental clinics, medical clinics, dermatologists, and restaurants.",
};

const PROJECTS = [
  {
    slug: "/demos/dental",
    name: "SmileCraft Dental",
    type: "Dental Clinic",
    location: "Thrippunithura, Kochi",
    description:
      "Appointment booking, treatment showcase, trust signals. Built to turn Google searches into booked visits.",
    colors: ["#0891B2", "#06B6D4", "#22D3EE"],
    bg: "bg-cyan-950/40",
  },
  {
    slug: "/demos/clinic",
    name: "MedCare Plus",
    type: "General Clinic",
    location: "Ernakulam, Kochi",
    description:
      "Service listing, doctor profiles, lab test booking. Clean, professional, gets straight to the point.",
    colors: ["#059669", "#10B981", "#34D399"],
    bg: "bg-emerald-950/40",
  },
  {
    slug: "/demos/derma",
    name: "GlowDerm Skin & Hair",
    type: "Dermatologist",
    location: "Panampilly Nagar, Kochi",
    description:
      "Treatment pages, before/after showcase, online consultation booking. Modern and trustworthy.",
    colors: ["#C2662D", "#E8845A", "#F4A87C"],
    bg: "bg-orange-950/30",
  },
  {
    slug: "/demos/restaurant",
    name: "Spice Garden",
    type: "Restaurant",
    location: "Fort Kochi",
    description:
      "Menu display, online ordering, table reservations, delivery tracking. Warm, appetising, easy to navigate.",
    colors: ["#D97706", "#F59E0B", "#FBBF24"],
    bg: "bg-amber-950/30",
  },
];

function BrowserFrame({
  colors,
  bg,
}: {
  colors: string[];
  bg: string;
}) {
  return (
    <div className={`rounded-lg ${bg} p-3`}>
      {/* browser chrome */}
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="ml-2 h-4 flex-1 rounded-sm bg-white/5" />
      </div>
      {/* abstract page mockup */}
      <div className="flex flex-col gap-2 px-2 pb-2">
        <div
          className="h-2 w-16 rounded-full opacity-60"
          style={{ background: colors[0] }}
        />
        <div className="h-1.5 w-full rounded-full bg-white/8" />
        <div className="h-1.5 w-4/5 rounded-full bg-white/8" />
        <div className="mt-1 flex gap-2">
          <div
            className="h-10 flex-1 rounded-md opacity-20"
            style={{ background: colors[1] }}
          />
          <div
            className="h-10 flex-1 rounded-md opacity-20"
            style={{ background: colors[2] }}
          />
          <div
            className="h-10 flex-1 rounded-md opacity-20"
            style={{ background: colors[0] }}
          />
        </div>
        <div className="h-1.5 w-3/4 rounded-full bg-white/5" />
        <div className="h-1.5 w-1/2 rounded-full bg-white/5" />
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs uppercase tracking-[0.2em] text-secondary">
                Our work
              </span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Sample sites we&apos;ve built.
            </h1>
            <p className="mt-4 max-w-lg text-secondary">
              Each demo is a fully working landing page — the kind of site your
              business would get. Tap any card to see it live.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.08}>
                <Link
                  href={project.slug}
                  className="group flex flex-col rounded-2xl border border-outline bg-surface p-5 transition-all duration-300 hover:border-accent/40 hover:bg-elevated"
                >
                  <BrowserFrame colors={project.colors} bg={project.bg} />

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                        {project.type}
                      </span>
                      <h2 className="mt-1 text-xl font-semibold tracking-tight">
                        {project.name}
                      </h2>
                      <p className="mt-0.5 text-xs text-muted">
                        {project.location}
                      </p>
                    </div>
                    <span className="mt-1 text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent">
                      &rarr;
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-secondary">
                    {project.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-16 rounded-2xl border border-outline bg-surface p-8 text-center">
              <p className="text-secondary">
                These are samples. Your site gets built from scratch — your
                brand, your content, your business.
              </p>
              <Link
                href="/#pricing"
                className="mt-4 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-hover"
              >
                See pricing
                <span>&rarr;</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
