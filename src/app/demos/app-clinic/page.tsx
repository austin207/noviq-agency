import type { Metadata } from "next";
export const metadata: Metadata = { title: "MedBook - Clinic Booking App Demo", description: "Sample clinic booking app built with Flutter by Noviq. Doctor search, slot booking, push notifications." };

export default function ClinicApp() {
  const doctors = [
    { name: "Dr. Rajesh Kumar", role: "General Physician", time: "10:00 AM", avail: true },
    { name: "Dr. Anitha Nair", role: "Pediatrician", time: "11:30 AM", avail: true },
    { name: "Dr. Sanjay Menon", role: "Cardiologist", time: "2:00 PM", avail: false },
  ];
  const slots = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "2:00", "2:30"];

  return (
    <div className="no-scrollbar min-h-dvh" style={{ background: "#F0FDF4", color: "#14532D", fontFamily: "var(--font-outfit, system-ui)" }}>
      {/* status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px]" style={{ color: "#6B8F71" }}>
        <span>9:41</span>
        <div className="flex gap-1"><span>●●●●○</span><span>■</span></div>
      </div>

      {/* header */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs" style={{ color: "#6B8F71" }}>Good morning</p>
        <p className="text-xl font-semibold">Book a visit 👋</p>
      </div>

      {/* search */}
      <div className="px-5 py-3">
        <div className="rounded-xl border px-4 py-3 text-xs" style={{ background: "#FFFFFF", borderColor: "#D1FAE5", color: "#6B8F71" }}>
          Search doctors, specialities...
        </div>
      </div>

      {/* quick actions */}
      <div className="flex gap-3 px-5 pb-4 overflow-hidden">
        {[
          { icon: "🩺", label: "Consult" },
          { icon: "🔬", label: "Lab Test" },
          { icon: "💊", label: "Pharmacy" },
          { icon: "📋", label: "Records" },
        ].map((a) => (
          <div key={a.label} className="flex flex-1 flex-col items-center gap-1 rounded-xl border py-3" style={{ background: "#FFFFFF", borderColor: "#D1FAE5" }}>
            <span className="text-lg">{a.icon}</span>
            <span className="text-[10px] font-medium">{a.label}</span>
          </div>
        ))}
      </div>

      {/* upcoming */}
      <div className="mx-5 mb-4 rounded-xl border p-4" style={{ background: "#DCFCE7", borderColor: "#BBF7D0" }}>
        <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: "#059669" }}>Upcoming</p>
        <p className="mt-1 text-sm font-semibold">Dr. Rajesh Kumar</p>
        <p className="text-xs" style={{ color: "#6B8F71" }}>General checkup · Today, 10:00 AM</p>
        <div className="mt-2 flex gap-2">
          <span className="rounded-lg px-3 py-1 text-[10px] font-medium text-white" style={{ background: "#059669" }}>Reschedule</span>
          <span className="rounded-lg border px-3 py-1 text-[10px]" style={{ borderColor: "#BBF7D0", color: "#059669" }}>Cancel</span>
        </div>
      </div>

      {/* available doctors */}
      <div className="px-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "#059669" }}>Available today</p>
        <div className="flex flex-col gap-3">
          {doctors.map((d) => (
            <div key={d.name} className="flex items-center justify-between rounded-xl border p-3.5" style={{ background: "#FFFFFF", borderColor: "#D1FAE5" }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: "#059669" }}>
                  {d.name.split(" ").pop()?.[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{d.name}</p>
                  <p className="text-[11px]" style={{ color: "#6B8F71" }}>{d.role}</p>
                </div>
              </div>
              <span className={`rounded-lg px-3 py-1.5 text-[10px] font-medium ${d.avail ? "text-white" : ""}`} style={{ background: d.avail ? "#059669" : "#D1FAE5", color: d.avail ? "#fff" : "#6B8F71" }}>
                {d.avail ? d.time : "Full"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* time slots */}
      <div className="px-5 mt-5 pb-24">
        <p className="mb-2 text-xs font-semibold" style={{ color: "#059669" }}>Pick a slot</p>
        <div className="flex flex-wrap gap-2">
          {slots.map((s, i) => (
            <span key={s} className="rounded-lg border px-3 py-1.5 text-[11px]" style={{ background: i === 2 ? "#059669" : "#FFFFFF", color: i === 2 ? "#fff" : "#14532D", borderColor: i === 2 ? "#059669" : "#D1FAE5" }}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t py-2.5" style={{ background: "#F0FDF4", borderColor: "#D1FAE5" }}>
        {[
          { icon: "🏠", label: "Home", active: true },
          { icon: "📅", label: "Booking", active: false },
          { icon: "💬", label: "Chat", active: false },
          { icon: "👤", label: "Profile", active: false },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <span className="text-base">{tab.icon}</span>
            <span className="text-[9px]" style={{ color: tab.active ? "#059669" : "#6B8F71" }}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
