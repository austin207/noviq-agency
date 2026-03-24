import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Pricing } from "@/components/pricing";
import { OpenClaw } from "@/components/openclaw";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-outline/50" />
        </div>
        <Process />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-outline/50" />
        </div>
        <Pricing />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-outline/50" />
        </div>
        <OpenClaw />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
