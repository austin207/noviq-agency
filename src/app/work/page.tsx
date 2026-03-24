import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Our Work — Noviq",
  description:
    "Sample websites built by Noviq for dental clinics, medical clinics, dermatologists, and restaurants.",
};

const PROJECTS = [
  {
    slug: "/demos/dental",
    name: "SmileCraft Dental",
    type: "Dental Clinic",
    accent: "#0891B2",
  },
  {
    slug: "/demos/clinic",
    name: "MedCare Plus",
    type: "General Clinic",
    accent: "#059669",
  },
  {
    slug: "/demos/derma",
    name: "GlowDerm Skin & Hair",
    type: "Dermatologist",
    accent: "#B85C38",
  },
  {
    slug: "/demos/restaurant",
    name: "Spice Garden",
    type: "Restaurant",
    accent: "#D97706",
  },
];

function PreviewCard({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  return (
    <Link href={project.slug} className="group flex flex-col">
      {/* live preview */}
      <div className="relative overflow-hidden rounded-xl border border-outline bg-surface transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_40px_rgba(255,107,44,0.06)]">
        <div className="relative h-[340px] overflow-hidden sm:h-[400px]">
          <iframe
            src={project.slug}
            title={`${project.name} preview`}
            className="pointer-events-none absolute left-0 top-0 origin-top-left"
            style={{
              width: "1440px",
              height: "1200px",
              transform: "scale(0.32)",
              transformOrigin: "top left",
            }}
            loading="lazy"
            tabIndex={-1}
          />
          {/* hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
            <span className="translate-y-2 rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Details
            </span>
          </div>
        </div>
      </div>

      {/* info */}
      <div className="mt-4 flex items-center gap-3">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ background: project.accent }}
        >
          {project.name[0]}
        </span>
        <div className="flex-1">
          <h2 className="text-sm font-semibold tracking-tight">
            {project.name}
          </h2>
          <p className="text-xs text-muted">{project.type}</p>
        </div>
      </div>
    </Link>
  );
}

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Our work
                </h1>
                <p className="mt-2 max-w-md text-secondary">
                  Live demos — click any preview to explore the full site.
                </p>
              </div>
              <Link
                href="/#pricing"
                className="text-sm text-accent transition-colors hover:text-accent-hover"
              >
                See pricing &rarr;
              </Link>
            </div>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {PROJECTS.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.08}>
                <PreviewCard project={project} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-20 text-center">
              <p className="text-sm text-muted">
                These are samples. Your site gets built from scratch — your
                brand, your content, your business.
              </p>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
