import type { Metadata } from "next";
import Link from "next/link";

const APPS: Record<string, { name: string; type: string; accent: string }> = {
  "app-food": { name: "FoodDash", type: "Food Delivery", accent: "#D97706" },
  "app-clinic": { name: "MedBook", type: "Clinic Booking", accent: "#059669" },
  "app-salon": { name: "StylePro", type: "Salon & Beauty", accent: "#EC4899" },
  "app-grocery": { name: "FreshMart", type: "Grocery Delivery", accent: "#16A34A" },
};

export function generateStaticParams() {
  return Object.keys(APPS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = APPS[slug];
  return {
    title: app ? `${app.name} — App Demo | Noviq` : "App Demo | Noviq",
    description: app ? `Sample ${app.type.toLowerCase()} app built by Noviq.` : "",
  };
}

export default async function AppViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = APPS[slug];

  if (!app) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#0A0A0A] text-white">
        <p>App not found.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col items-center bg-[#0A0A0A] px-4 py-8 sm:py-12">
      {/* back link */}
      <div className="mb-6 flex w-full max-w-md items-center justify-between">
        <Link
          href="/work"
          className="text-sm text-[#888] transition-colors hover:text-white"
        >
          &larr; Back to work
        </Link>
        <div className="text-right">
          <p className="text-sm font-semibold text-white">{app.name}</p>
          <p className="text-xs text-[#666]">{app.type}</p>
        </div>
      </div>

      {/* phone frame with interactive iframe */}
      <div className="relative overflow-hidden rounded-[3rem] border-[4px] border-[#2A2A2A] bg-[#111] p-2 shadow-2xl">
        {/* notch */}
        <div className="absolute left-1/2 top-0 z-10 h-7 w-28 -translate-x-1/2 rounded-b-2xl bg-[#111]" />

        {/* screen — interactive, user can scroll */}
        <div
          className="overflow-y-auto overflow-x-hidden rounded-[2.4rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ width: "320px", height: "693px" }}
        >
          <iframe
            src={`/demos/${slug}`}
            title={`${app.name} interactive demo`}
            className="h-full w-full border-0"
            style={{ width: "320px", height: "693px" }}
          />
        </div>

        {/* home indicator */}
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-[#333]" />
      </div>

      {/* hint */}
      <p className="mt-6 text-xs text-[#555]">
        Scroll and tap inside the phone to explore the app.
      </p>
    </div>
  );
}
