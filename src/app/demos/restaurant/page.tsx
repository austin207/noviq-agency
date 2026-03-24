import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spice Garden — Demo | Noviq",
  description: "Sample restaurant website built by Noviq.",
};

const MENU_CATEGORIES = [
  {
    name: "Starters",
    items: [
      { dish: "Malabar Prawn Fry", price: "₹320" },
      { dish: "Beef Ularthiyathu", price: "₹280" },
      { dish: "Paneer Tikka", price: "₹220" },
      { dish: "Fish Mappas Croquettes", price: "₹260" },
    ],
  },
  {
    name: "Mains",
    items: [
      { dish: "Kerala Fish Curry + Rice", price: "₹350" },
      { dish: "Chicken Biryani", price: "₹300" },
      { dish: "Malabar Parotta + Beef Curry", price: "₹320" },
      { dish: "Vegetable Thali", price: "₹240" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { dish: "Palada Payasam", price: "₹150" },
      { dish: "Elaneer Pudding", price: "₹180" },
    ],
  },
];

const FEATURES = [
  { title: "Order Online", desc: "Skip the wait. Order for pickup or delivery straight from our site." },
  { title: "Reserve a Table", desc: "Book your spot for dinner — especially on weekends, we fill up fast." },
  { title: "Catering", desc: "Weddings, parties, office events. Kerala cuisine at scale, done right." },
];

export default function RestaurantDemo() {
  return (
    <div className="min-h-dvh" style={{ background: "#0C0A09", color: "#FAFAF9" }}>
      {/* noviq badge */}
      <Link
        href="/work"
        className="fixed top-4 right-4 z-50 rounded-full border border-white/10 bg-black/80 px-4 py-1.5 text-[11px] font-medium text-gray-400 backdrop-blur-md transition-colors hover:text-white"
      >
        &larr; Noviq demo
      </Link>

      {/* nav */}
      <nav className="border-b border-white/5">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">
            Spice <span style={{ color: "#D97706" }}>Garden</span>
          </span>
          <div className="hidden gap-8 text-sm md:flex" style={{ color: "#A8A29E" }}>
            <a href="#menu" className="transition-colors hover:text-white">Menu</a>
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-sm font-medium text-black"
            style={{ background: "#D97706" }}
          >
            Order now
          </a>
        </div>
      </nav>

      {/* hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "#D97706" }}>
            Authentic Kerala cuisine — Fort Kochi
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Food that tastes like someone&apos;s amma made it.
          </h1>
          <p className="mt-4 max-w-md text-base" style={{ color: "#A8A29E" }}>
            Traditional recipes. Fresh ingredients from Ernakulam market every
            morning. A kitchen that takes its time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-full px-7 py-3 text-sm font-medium text-black"
              style={{ background: "#D97706" }}
            >
              See the menu
            </a>
            <a
              href="#contact"
              className="rounded-full border px-7 py-3 text-sm"
              style={{ borderColor: "#44403C", color: "#D97706" }}
            >
              Reserve a table
            </a>
          </div>
        </div>
      </section>

      {/* menu */}
      <section id="menu" className="py-20" style={{ background: "#1C1917" }}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "#D97706" }}>
            Our menu
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            What&apos;s cooking.
          </h2>

          <div className="mt-10 flex flex-col gap-10">
            {MENU_CATEGORIES.map((cat) => (
              <div key={cat.name}>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "#D97706" }}>
                  {cat.name}
                </h3>
                <div className="flex flex-col">
                  {cat.items.map((item) => (
                    <div
                      key={item.dish}
                      className="flex items-center justify-between border-b py-4 text-sm"
                      style={{ borderColor: "#292524" }}
                    >
                      <span>{item.dish}</span>
                      <span className="tabular-nums" style={{ color: "#A8A29E" }}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* features */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-xl border p-6" style={{ borderColor: "#292524", background: "#1C1917" }}>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#A8A29E" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section className="py-20" style={{ background: "#1C1917" }}>
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-xl p-8" style={{ background: "#292524" }}>
            <p className="text-lg font-medium leading-relaxed">
              &ldquo;The fish curry here is the real thing. No shortcuts, no
              fusion nonsense. This is the kind of food you remember.&rdquo;
            </p>
            <p className="mt-4 text-sm font-medium" style={{ color: "#D97706" }}>
              — Thomas K., Fort Kochi
            </p>
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Hungry yet?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm" style={{ color: "#A8A29E" }}>
            Walk in, call ahead, or order online. We&apos;re open for lunch and dinner, every day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="rounded-full px-8 py-3.5 text-sm font-medium text-black" style={{ background: "#D97706" }}>
              +91 98765 43210
            </span>
            <span className="rounded-full border px-8 py-3.5 text-sm" style={{ borderColor: "#44403C" }}>
              Fort Kochi, Kerala
            </span>
          </div>
          <p className="mt-4 text-xs" style={{ color: "#78716C" }}>
            Open 12:00 PM – 3:00 PM &middot; 6:30 PM – 11:00 PM
          </p>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t py-6" style={{ borderColor: "#292524" }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 text-xs" style={{ color: "#78716C" }}>
          <span>Spice Garden</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
