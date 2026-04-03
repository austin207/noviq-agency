import { FadeIn } from "./fade-in";

const SERVICES = [
  {
    num: "01",
    title: "Websites",
    description:
      "From a clean five-page WordPress site to a full-stack Next.js build with ordering, accounts, and analytics. Mobile-first, fast, built to rank.",
    price: "From ₹10,000",
    span: "md:col-span-3 md:row-span-2",
  },
  {
    num: "02",
    title: "Mobile Apps",
    description:
      "Flutter apps for Android and iOS - delivery tracking, push notifications, customer accounts. One codebase, both platforms.",
    price: "From ₹75,000",
    span: "md:col-span-2",
  },
  {
    num: "03",
    title: "Instagram Content",
    description:
      "Reels scripted, edited, and posted. AI-assisted production - you send raw footage, we handle the rest.",
    price: "₹950 per Reel",
    span: "md:col-span-2",
  },
  {
    num: "04",
    title: "AI Receptionist",
    description:
      "AI-powered front desk that answers calls, handles FAQs, qualifies leads, and books appointments - 24/7, zero missed calls.",
    price: "From ₹18,000",
    span: "md:col-span-2",
  },
  {
    num: "05",
    title: "Automated Calls",
    description:
      "Outbound call automation for appointment reminders, order confirmations, and follow-ups. Reduce no-shows without manual effort.",
    price: "From ₹15,000",
    span: "md:col-span-3",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-12 flex items-center gap-4">
            <span className="font-mono text-xs text-muted">01</span>
            <span className="h-px w-8 bg-outline" />
            <span className="text-xs uppercase tracking-[0.2em] text-secondary">
              What we build
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {SERVICES.map((s, i) => (
            <FadeIn
              key={s.num}
              delay={i * 0.1}
              className={`group rounded-2xl border border-outline bg-surface p-8 transition-colors duration-300 hover:border-accent/40 ${s.span}`}
            >
              <div className="flex h-full flex-col">
                <span className="font-mono text-xs text-muted">{s.num}</span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-secondary">
                  {s.description}
                </p>
                <p className="mt-6 text-sm font-medium text-accent">
                  {s.price}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
