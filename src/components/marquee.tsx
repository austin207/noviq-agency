const ITEMS = [
  "websites",
  "mobile apps",
  "instagram reels",
  "branding",
  "seo",
  "ui design",
];

function MarqueeTrack() {
  return (
    <>
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="text-xs uppercase tracking-[0.25em] text-muted">
            {item}
          </span>
          <span className="text-accent/30" aria-hidden>
            &#x2022;
          </span>
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <div
      className="overflow-hidden border-y border-outline/50 py-4"
      aria-hidden
    >
      <div className="animate-marquee flex w-max gap-8">
        <MarqueeTrack />
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}
