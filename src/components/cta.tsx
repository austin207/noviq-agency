import { FadeIn } from "./fade-in";
import { EMAIL, WHATSAPP_URL } from "@/lib/constants";

export function CTA() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Ready to get online?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-4 max-w-md text-secondary">
            Tell us what you need. We&apos;ll get back to you within a day with
            a scope and a fixed price.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-[#0A0A0A] transition-colors duration-200 hover:bg-accent-hover"
            >
              Message us on WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full border border-outline px-8 py-3.5 text-sm text-secondary transition-all duration-200 hover:border-secondary hover:text-primary"
            >
              {EMAIL}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
