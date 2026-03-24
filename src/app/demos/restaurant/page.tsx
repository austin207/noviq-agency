import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spice Garden - Demo | Noviq",
  description: "Sample restaurant website built by Noviq.",
};

/* immersive dark - full-bleed hero, menu with category headers, featured dishes, reservation CTA */

const FEATURED = [
  { dish: "Kerala Fish Curry", desc: "Fresh karimeen in coconut gravy, the way it's meant to taste.", price: "₹350" },
  { dish: "Malabar Biryani", desc: "Fragrant basmati with slow-cooked meat, fried onions, and whole spices.", price: "₹320" },
  { dish: "Beef Ularthiyathu", desc: "Dry-roasted beef with coconut, curry leaves, and a serious kick.", price: "₹280" },
];

const MENU = {
  Starters: [
    { dish: "Prawn Fry", price: "₹320" },
    { dish: "Chicken 65", price: "₹240" },
    { dish: "Paneer Tikka", price: "₹220" },
    { dish: "Fish Cutlet", price: "₹200" },
  ],
  Mains: [
    { dish: "Chicken Biryani", price: "₹300" },
    { dish: "Parotta + Beef Curry", price: "₹320" },
    { dish: "Vegetable Thali", price: "₹240" },
    { dish: "Appam + Stew", price: "₹260" },
  ],
  Desserts: [
    { dish: "Palada Payasam", price: "₹150" },
    { dish: "Elaneer Pudding", price: "₹180" },
    { dish: "Double Ka Meetha", price: "₹160" },
  ],
};

const HOURS = [
  { label: "Lunch", time: "12:00 – 3:00 PM" },
  { label: "Dinner", time: "6:30 – 11:00 PM" },
  { label: "Bar", time: "5:00 PM – midnight" },
];

export default function RestaurantDemo() {
  return (
    <div className="min-h-dvh" style={{ background: "#0C0A09", color: "#FAFAF9" }}>
      <Link
        href="/work"
        className="fixed top-4 right-4 z-50 rounded-full border border-white/10 bg-black/80 px-4 py-1.5 text-[11px] font-medium text-gray-400 backdrop-blur-md transition-colors hover:text-white"
      >
        &larr; Noviq demo
      </Link>

      {/* nav - transparent, blends into hero */}
      <nav className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-xl font-light tracking-widest uppercase">
            Spice<span className="font-bold" style={{ color: "#D97706" }}> Garden</span>
          </span>
          <div className="hidden gap-8 text-sm md:flex" style={{ color: "#A8A29E" }}>
            <a href="#menu" className="transition-colors hover:text-white">Menu</a>
            <a href="#story" className="transition-colors hover:text-white">Our Story</a>
            <a href="#reserve" className="transition-colors hover:text-white">Reserve</a>
          </div>
          <a href="#reserve" className="rounded-none border px-5 py-2 text-xs font-medium uppercase tracking-widest transition-colors hover:bg-white hover:text-black" style={{ borderColor: "#D97706", color: "#D97706" }}>
            Reserve
          </a>
        </div>
      </nav>

      {/* full-viewport hero */}
      <section className="relative flex min-h-[90vh] items-end overflow-hidden">
        {/* background image */}
        <Image
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&q=80&auto=format&fit=crop"
          alt="Indian food spread"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #0C0A09 0%, #0C0A09 30%, rgba(12,10,9,0.6) 60%, rgba(12,10,9,0.4) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em]" style={{ color: "#D97706" }}>
            Fort Kochi, Kerala
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Food that tastes like<br />someone&apos;s{" "}
            <span className="font-bold italic" style={{ color: "#D97706" }}>amma</span>{" "}
            made it.
          </h1>
          <p className="mt-5 max-w-md" style={{ color: "#A8A29E" }}>
            Traditional Kerala recipes. Fresh from Ernakulam market every morning.
            A kitchen that takes its time.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#menu" className="border-b-2 pb-1 text-sm font-medium" style={{ borderColor: "#D97706", color: "#D97706" }}>
              See the menu
            </a>
            <a href="#reserve" className="border-b-2 pb-1 text-sm" style={{ borderColor: "#44403C", color: "#A8A29E" }}>
              Reserve a table
            </a>
          </div>
        </div>
      </section>

      {/* featured dishes - large cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#D97706" }}>
              Chef&apos;s picks
            </span>
            <div className="relative h-48 w-full overflow-hidden rounded-xl sm:h-32 sm:w-64">
              <Image
                src="https://images.unsplash.com/photo-1626515405415-d7b6371941b8?w=600&q=80&auto=format&fit=crop"
                alt="Kerala fish curry"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 256px"
              />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURED.map((f) => (
              <div key={f.dish} className="group rounded-xl border p-6 transition-colors hover:border-amber-800/50" style={{ borderColor: "#292524", background: "#1C1917" }}>
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{f.dish}</h3>
                  <span className="text-lg font-light tabular-nums" style={{ color: "#D97706" }}>
                    {f.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#A8A29E" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* full menu */}
      <section id="menu" className="border-y py-16 sm:py-24" style={{ borderColor: "#292524", background: "#1C1917" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#D97706" }}>
              Full menu
            </span>
            <h2 className="mt-2 text-3xl font-light tracking-tight sm:text-4xl">
              What&apos;s <span className="font-semibold">cooking.</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
            {Object.entries(MENU).map(([category, items]) => (
              <div key={category}>
                <h3 className="border-b pb-3 text-xs font-medium uppercase tracking-[0.3em]" style={{ borderColor: "#44403C", color: "#D97706" }}>
                  {category}
                </h3>
                <div className="mt-4 flex flex-col">
                  {items.map((item) => (
                    <div key={item.dish} className="flex items-center justify-between border-b py-3 text-sm" style={{ borderColor: "#292524" }}>
                      <span>{item.dish}</span>
                      <span className="tabular-nums" style={{ color: "#78716C" }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* story / quote */}
      <section id="story" className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote className="text-2xl font-light leading-relaxed sm:text-3xl">
            &ldquo;The fish curry here is the real thing. No shortcuts, no
            fusion nonsense. This is the kind of food you remember.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm" style={{ color: "#D97706" }}>
            Thomas K. &middot; Fort Kochi
          </p>
        </div>
      </section>

      {/* reserve */}
      <section id="reserve" className="py-16" style={{ background: "#1C1917" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#D97706" }}>
                Visit us
              </span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Hungry yet?</h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#A8A29E" }}>
                Walk in, call ahead, or order online. We&apos;re at Fort Kochi,
                right off the waterfront. Parking available.
              </p>
              <div className="mt-8">
                <span className="inline-block border-b-2 px-8 py-3.5 text-lg font-medium" style={{ borderColor: "#D97706", color: "#D97706" }}>
                  +91 98765 43210
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {HOURS.map((h) => (
                <div key={h.label} className="flex items-center justify-between rounded-lg border p-5" style={{ borderColor: "#292524" }}>
                  <span className="text-sm font-medium">{h.label}</span>
                  <span className="text-sm tabular-nums" style={{ color: "#A8A29E" }}>{h.time}</span>
                </div>
              ))}
              <a
                href="#"
                className="mt-2 flex items-center justify-center rounded-lg py-4 text-sm font-medium uppercase tracking-widest text-black transition-colors hover:opacity-90"
                style={{ background: "#D97706" }}
              >
                Order online &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-6" style={{ borderColor: "#292524" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-xs" style={{ color: "#78716C" }}>
          <span>Spice Garden &middot; Fort Kochi</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
