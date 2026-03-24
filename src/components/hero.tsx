"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function AnimLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden">
      {/* warm glow */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full opacity-20 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,44,0.5) 0%, rgba(255,138,87,0.2) 40%, transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-32">
        {/* label */}
        <motion.div
          className="mb-8 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs uppercase tracking-[0.2em] text-secondary">
            Web development studio — Kochi
          </span>
        </motion.div>

        {/* headline */}
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <AnimLine delay={0.3}>We build the website.</AnimLine>
          <AnimLine delay={0.45}>
            <span className="text-accent">You run the business.</span>
          </AnimLine>
        </h1>

        {/* description */}
        <motion.p
          className="mt-6 max-w-lg text-base leading-relaxed text-secondary sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
        >
          Websites, apps, and Instagram content for local businesses.
          <br className="hidden sm:block" />
          Clean work. Fair prices. No&nbsp;nonsense.
        </motion.p>

        {/* ctas */}
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease }}
        >
          <a
            href={WHATSAPP_URL}
            className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-[#0A0A0A] transition-colors duration-200 hover:bg-accent-hover"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="rounded-full border border-outline px-7 py-3 text-sm text-secondary transition-all duration-200 hover:border-secondary hover:text-primary"
          >
            See what we do
          </a>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <motion.div
          className="h-8 w-px bg-muted"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
