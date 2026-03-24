export default function GroceryApp() {
  const products = [
    { name: "Banana (1 kg)", price: "₹45", tag: null },
    { name: "Tomato (500g)", price: "₹30", tag: "Fresh" },
    { name: "Coconut Oil (1L)", price: "₹210", tag: null },
    { name: "Rice (5 kg)", price: "₹380", tag: "Best price" },
    { name: "Eggs (12)", price: "₹84", tag: null },
    { name: "Curd (500g)", price: "₹35", tag: "Fresh" },
  ];

  return (
    <div className="min-h-dvh" style={{ background: "#FAFDF7", color: "#1A2E1A", fontFamily: "var(--font-outfit, system-ui)" }}>
      {/* status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px]" style={{ color: "#6B8F6B" }}>
        <span>9:41</span>
        <div className="flex gap-1"><span>●●●●○</span><span>■</span></div>
      </div>

      {/* header */}
      <div className="flex items-center justify-between px-5 pt-3 pb-2">
        <div>
          <p className="text-xs" style={{ color: "#6B8F6B" }}>Deliver in 15 min</p>
          <p className="text-sm font-semibold">Home · Ernakulam ▾</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "#DCFCE7" }}>
          <span className="text-sm">🛒</span>
        </div>
      </div>

      {/* search */}
      <div className="px-5 py-3">
        <div className="rounded-xl border px-4 py-3 text-xs" style={{ background: "#FFFFFF", borderColor: "#D1FAE5", color: "#6B8F6B" }}>
          Search groceries...
        </div>
      </div>

      {/* banner */}
      <div className="mx-5 mb-4 rounded-xl p-4" style={{ background: "linear-gradient(135deg, #16A34A 0%, #15803D 100%)", color: "#fff" }}>
        <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: "#BBF7D0" }}>Today</p>
        <p className="mt-1 text-base font-semibold">Fresh vegetables just arrived!</p>
        <p className="text-[11px]" style={{ color: "#BBF7D0" }}>From Ernakulam market · Free delivery above ₹199</p>
      </div>

      {/* categories */}
      <div className="flex gap-2 px-5 pb-4 overflow-hidden">
        {["All", "Fruits", "Veggies", "Dairy", "Grains", "Oil"].map((c, i) => (
          <span
            key={c}
            className="flex-shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-medium"
            style={{
              background: i === 0 ? "#16A34A" : "#FFFFFF",
              color: i === 0 ? "#fff" : "#1A2E1A",
              borderColor: i === 0 ? "#16A34A" : "#D1FAE5",
            }}
          >
            {c}
          </span>
        ))}
      </div>

      {/* products grid */}
      <div className="px-5 pb-24">
        <div className="grid grid-cols-2 gap-3">
          {products.map((p) => (
            <div key={p.name} className="rounded-xl border p-3" style={{ background: "#FFFFFF", borderColor: "#E5F0E5" }}>
              <div className="flex h-16 items-center justify-center rounded-lg text-2xl" style={{ background: "#F0FDF4" }}>
                🥬
              </div>
              <div className="mt-2">
                {p.tag && (
                  <span className="rounded-md px-1.5 py-0.5 text-[8px] font-medium" style={{ background: "#DCFCE7", color: "#16A34A" }}>
                    {p.tag}
                  </span>
                )}
                <p className="mt-1 text-xs font-semibold leading-tight">{p.name}</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-sm font-semibold tabular-nums">{p.price}</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg text-xs font-bold text-white" style={{ background: "#16A34A" }}>
                    +
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t py-2.5" style={{ background: "#FAFDF7", borderColor: "#D1FAE5" }}>
        {[
          { icon: "🏠", label: "Home", active: true },
          { icon: "📦", label: "Orders", active: false },
          { icon: "🛒", label: "Cart", active: false },
          { icon: "👤", label: "Profile", active: false },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <span className="text-base">{tab.icon}</span>
            <span className="text-[9px]" style={{ color: tab.active ? "#16A34A" : "#6B8F6B" }}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
