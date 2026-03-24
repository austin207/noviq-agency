import type { Metadata } from "next";
export const metadata: Metadata = { title: "FoodDash - Food Delivery App Demo", description: "Sample food delivery app built with Flutter by Noviq. Online ordering, live tracking, push notifications." };

export default function FoodApp() {
  const items = [
    { name: "Kerala Fish Curry", desc: "Karimeen in coconut gravy", price: "₹350", tag: "Popular" },
    { name: "Malabar Biryani", desc: "Fragrant basmati, slow-cooked meat", price: "₹320", tag: null },
    { name: "Beef Ularthiyathu", desc: "Dry-roasted with coconut & spices", price: "₹280", tag: "Spicy" },
    { name: "Appam + Stew", desc: "Soft hoppers with chicken stew", price: "₹260", tag: null },
    { name: "Prawn Fry", desc: "Crispy Malabar-style prawns", price: "₹320", tag: "Popular" },
  ];

  return (
    <div className="no-scrollbar min-h-dvh" style={{ background: "#0C0A09", color: "#FAFAF9", fontFamily: "var(--font-outfit, system-ui)" }}>
      {/* status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px]" style={{ color: "#A8A29E" }}>
        <span>9:41</span>
        <div className="flex gap-1">
          <span>●●●●○</span>
          <span>■</span>
        </div>
      </div>

      {/* header */}
      <div className="px-5 pt-4 pb-3">
        <p className="text-xs" style={{ color: "#A8A29E" }}>Deliver to</p>
        <p className="text-sm font-semibold">Fort Kochi, Kerala ▾</p>
      </div>

      {/* search */}
      <div className="px-5 pb-4">
        <div className="rounded-xl px-4 py-3 text-xs" style={{ background: "#1C1917", color: "#78716C" }}>
          Search dishes, restaurants...
        </div>
      </div>

      {/* categories */}
      <div className="flex gap-2 px-5 pb-5 overflow-hidden">
        {["All", "Meals", "Starters", "Biryani", "Desserts"].map((c, i) => (
          <span
            key={c}
            className="flex-shrink-0 rounded-full px-4 py-1.5 text-[11px] font-medium"
            style={{
              background: i === 0 ? "#D97706" : "#1C1917",
              color: i === 0 ? "#0C0A09" : "#A8A29E",
            }}
          >
            {c}
          </span>
        ))}
      </div>

      {/* restaurant banner */}
      <div className="mx-5 mb-5 rounded-xl p-4" style={{ background: "linear-gradient(135deg, #44403C 0%, #1C1917 100%)" }}>
        <p className="text-lg font-semibold">Spice Garden</p>
        <p className="text-[11px]" style={{ color: "#A8A29E" }}>Kerala Cuisine · 25 min · ₹100 for two</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-md px-2 py-0.5 text-[10px] font-medium" style={{ background: "#D97706", color: "#0C0A09" }}>
            4.5 ★
          </span>
          <span className="text-[10px]" style={{ color: "#78716C" }}>Free delivery above ₹300</span>
        </div>
      </div>

      {/* menu items */}
      <div className="px-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "#D97706" }}>Menu</p>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-xl p-3" style={{ background: "#1C1917" }}>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{item.name}</span>
                  {item.tag && (
                    <span className="rounded-md px-1.5 py-0.5 text-[9px] font-medium" style={{ background: "#292524", color: "#D97706" }}>
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-[11px]" style={{ color: "#78716C" }}>{item.desc}</p>
              </div>
              <div className="flex flex-col items-end gap-1.5 ml-3">
                <span className="text-sm font-semibold tabular-nums">{item.price}</span>
                <span className="rounded-lg px-3 py-1 text-[10px] font-semibold" style={{ background: "#D97706", color: "#0C0A09" }}>
                  ADD
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t py-2.5" style={{ background: "#0C0A09", borderColor: "#1C1917" }}>
        {[
          { icon: "🏠", label: "Home", active: true },
          { icon: "🔍", label: "Search", active: false },
          { icon: "🛒", label: "Cart", active: false },
          { icon: "👤", label: "Profile", active: false },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <span className="text-base">{tab.icon}</span>
            <span className="text-[9px]" style={{ color: tab.active ? "#D97706" : "#78716C" }}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
