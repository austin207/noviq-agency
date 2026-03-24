import type { Metadata } from "next";
export const metadata: Metadata = { title: "StylePro — Salon Booking App Demo", description: "Sample salon and beauty booking app built with Flutter by Noviq. Services, stylists, offers." };

export default function SalonApp() {
  const services = [
    { name: "Haircut & Styling", time: "45 min", price: "₹500" },
    { name: "Hair Color", time: "90 min", price: "₹1,800" },
    { name: "Facial (Gold)", time: "60 min", price: "₹1,200" },
    { name: "Manicure + Pedicure", time: "75 min", price: "₹900" },
    { name: "Bridal Package", time: "180 min", price: "₹8,500" },
  ];

  return (
    <div className="no-scrollbar min-h-dvh" style={{ background: "#1A1215", color: "#FAF5F7", fontFamily: "var(--font-outfit, system-ui)" }}>
      {/* status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px]" style={{ color: "#9E8A91" }}>
        <span>9:41</span>
        <div className="flex gap-1"><span>●●●●○</span><span>■</span></div>
      </div>

      {/* header */}
      <div className="px-5 pt-4 pb-3 flex items-center justify-between">
        <div>
          <p className="text-xs" style={{ color: "#9E8A91" }}>Welcome back</p>
          <p className="text-xl font-semibold">StylePro Salon</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "#2D1F24" }}>
          <span className="text-sm">🔔</span>
        </div>
      </div>

      {/* promo card */}
      <div className="mx-5 mb-5 rounded-xl p-5" style={{ background: "linear-gradient(135deg, #831843 0%, #500724 100%)" }}>
        <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: "#F9A8D4" }}>This week</p>
        <p className="mt-1 text-lg font-semibold">20% off all facials</p>
        <p className="mt-1 text-xs" style={{ color: "#F9A8D4" }}>Valid till Sunday · Use code GLOW20</p>
      </div>

      {/* categories */}
      <div className="flex gap-3 px-5 pb-5 overflow-hidden">
        {[
          { icon: "✂️", label: "Hair" },
          { icon: "💅", label: "Nails" },
          { icon: "✨", label: "Skin" },
          { icon: "💄", label: "Makeup" },
        ].map((c, i) => (
          <div
            key={c.label}
            className="flex flex-1 flex-col items-center gap-1.5 rounded-xl py-3"
            style={{ background: i === 0 ? "#831843" : "#2D1F24" }}
          >
            <span className="text-lg">{c.icon}</span>
            <span className="text-[10px] font-medium">{c.label}</span>
          </div>
        ))}
      </div>

      {/* services */}
      <div className="px-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "#EC4899" }}>Services</p>
        <div className="flex flex-col gap-2.5">
          {services.map((s) => (
            <div key={s.name} className="flex items-center justify-between rounded-xl p-3.5" style={{ background: "#2D1F24" }}>
              <div>
                <p className="text-sm font-semibold">{s.name}</p>
                <p className="text-[11px]" style={{ color: "#9E8A91" }}>{s.time}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold tabular-nums">{s.price}</span>
                <span className="rounded-lg px-3 py-1.5 text-[10px] font-semibold" style={{ background: "#EC4899", color: "#1A1215" }}>
                  Book
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* stylist */}
      <div className="px-5 mt-5 pb-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "#EC4899" }}>Top stylists</p>
        <div className="flex gap-3 overflow-hidden">
          {["Meera", "Priya", "Arun"].map((n) => (
            <div key={n} className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold" style={{ background: "#831843" }}>
                {n[0]}
              </div>
              <span className="text-[10px]">{n}</span>
            </div>
          ))}
        </div>
      </div>

      {/* bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t py-2.5" style={{ background: "#1A1215", borderColor: "#2D1F24" }}>
        {[
          { icon: "🏠", label: "Home", active: true },
          { icon: "📅", label: "Bookings", active: false },
          { icon: "💝", label: "Offers", active: false },
          { icon: "👤", label: "Profile", active: false },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <span className="text-base">{tab.icon}</span>
            <span className="text-[9px]" style={{ color: tab.active ? "#EC4899" : "#9E8A91" }}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
