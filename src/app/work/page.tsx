import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Our Work — Noviq",
  description:
    "Sample websites and apps built by Noviq for clinics, restaurants, salons, and more.",
};

const WEBSITES = [
  { slug: "/demos/dental", name: "SmileCraft Dental", type: "Dental Clinic", accent: "#0891B2" },
  { slug: "/demos/clinic", name: "MedCare Plus", type: "General Clinic", accent: "#059669" },
  { slug: "/demos/derma", name: "GlowDerm Skin & Hair", type: "Dermatologist", accent: "#B85C38" },
  { slug: "/demos/restaurant", name: "Spice Garden", type: "Restaurant", accent: "#D97706" },
];

const APPS = [
  { slug: "/demos/app-food", name: "FoodDash", type: "Food Delivery", accent: "#D97706" },
  { slug: "/demos/app-clinic", name: "MedBook", type: "Clinic Booking", accent: "#059669" },
  { slug: "/demos/app-salon", name: "StylePro", type: "Salon & Beauty", accent: "#EC4899" },
  { slug: "/demos/app-grocery", name: "FreshMart", type: "Grocery Delivery", accent: "#16A34A" },
];

/* ─── website preview (browser frame) ──────────────── */

function WebPreview({ project }: { project: (typeof WEBSITES)[number] }) {
  return (
    <Link href={project.slug} className="group flex flex-col">
      <div className="relative overflow-hidden rounded-xl border border-outline bg-surface transition-all duration-300 group-hover:border-accent/40">
        <div className="relative h-[340px] overflow-hidden sm:h-[400px]">
          <iframe
            src={project.slug}
            title={`${project.name} preview`}
            className="pointer-events-none absolute left-0 top-0 origin-top-left"
            style={{ width: "1440px", height: "1200px", transform: "scale(0.32)", transformOrigin: "top left" }}
            loading="lazy"
            tabIndex={-1}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
            <span className="translate-y-2 rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Details
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: project.accent }}>
          {project.name[0]}
        </span>
        <div>
          <h3 className="text-sm font-semibold tracking-tight">{project.name}</h3>
          <p className="text-xs text-muted">{project.type}</p>
        </div>
      </div>
    </Link>
  );
}

/* ─── app preview (phone frame) ────────────────────── */

function PhonePreview({ app }: { app: (typeof APPS)[number] }) {
  const viewerHref = `/demos/app-viewer/${app.slug.replace("/demos/", "")}`;
  return (
    <Link href={viewerHref} className="group flex flex-col items-center">
      {/* phone shell */}
      <div className="relative overflow-hidden rounded-[2.5rem] border-[3px] border-[#333] bg-[#111] p-1.5 shadow-xl transition-all duration-300 group-hover:border-accent/40">
        {/* inner screen */}
        <div className="relative overflow-hidden rounded-[2rem]" style={{ width: "220px", height: "476px" }}>
          {/* notch */}
          <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-[#111]" />
          {/* iframe */}
          <iframe
            src={app.slug}
            title={`${app.name} preview`}
            className="pointer-events-none absolute left-0 top-0 origin-top-left"
            style={{ width: "375px", height: "812px", transform: "scale(0.587)", transformOrigin: "top left" }}
            loading="lazy"
            tabIndex={-1}
          />
          {/* hover overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
            <span className="translate-y-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View App
            </span>
          </div>
        </div>
        {/* home indicator */}
        <div className="mx-auto mt-1.5 h-1 w-20 rounded-full bg-[#333]" />
      </div>
      {/* label */}
      <div className="mt-5 flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl text-[10px] font-bold text-white" style={{ background: app.accent }}>
          {app.name[0]}
        </span>
        <div>
          <h3 className="text-sm font-semibold tracking-tight">{app.name}</h3>
          <p className="text-xs text-muted">{app.type}</p>
        </div>
      </div>
    </Link>
  );
}

/* ─── page ─────────────────────────────────────────── */

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* heading */}
          <FadeIn>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Our work</h1>
                <p className="mt-2 max-w-md text-secondary">
                  Live demos — click any preview to explore the full site or app.
                </p>
              </div>
              <Link href="/#pricing" className="text-sm text-accent transition-colors hover:text-accent-hover">
                See pricing &rarr;
              </Link>
            </div>
          </FadeIn>

          {/* websites */}
          <FadeIn delay={0.05}>
            <div className="mt-12 flex items-center gap-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">Websites</span>
              <span className="h-px flex-1 bg-outline" />
            </div>
          </FadeIn>

          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {WEBSITES.map((project, i) => (
              <FadeIn key={project.slug} delay={0.08 + i * 0.06}>
                <WebPreview project={project} />
              </FadeIn>
            ))}
          </div>

          {/* apps */}
          <FadeIn delay={0.1}>
            <div className="mt-20 flex items-center gap-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">Mobile Apps</span>
              <span className="h-px flex-1 bg-outline" />
            </div>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 justify-items-center gap-10 min-[480px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {APPS.map((app, i) => (
              <FadeIn key={app.slug} delay={0.14 + i * 0.06}>
                <PhonePreview app={app} />
              </FadeIn>
            ))}
          </div>

          {/* footer note */}
          <FadeIn delay={0.5}>
            <div className="mt-20 text-center">
              <p className="text-sm text-muted">
                These are samples. Your site or app gets built from scratch — your brand, your content, your business.
              </p>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
