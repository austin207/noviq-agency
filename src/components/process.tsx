import { FadeIn } from "./fade-in";

const STEPS = [
  {
    num: "01",
    title: "Brief",
    body: "You tell us what you need - pages, features, timeline. We scope it and send a fixed quote. No surprises.",
  },
  {
    num: "02",
    title: "Build",
    body: "We design and develop. You see progress at every stage and tell us what to change. Revisions are built into the price.",
  },
  {
    num: "03",
    title: "Launch",
    body: "Your business goes online. We handle hosting, domain, and handoff. You get the keys to everything.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-16 flex items-center gap-4">
            <span className="font-mono text-xs text-muted">02</span>
            <span className="h-px w-8 bg-outline" />
            <span className="text-xs uppercase tracking-[0.2em] text-secondary">
              How it works
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.12}>
              <div className="relative pl-12">
                <span className="absolute left-0 top-0 font-mono text-3xl font-light text-outline">
                  {step.num}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-secondary">
                  {step.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
