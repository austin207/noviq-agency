import { BRAND, LOCATION } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-outline/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <span className="text-sm font-medium tracking-tight text-primary">
          {BRAND}
        </span>
        <span className="text-xs text-muted">
          &copy; {new Date().getFullYear()} &middot; {LOCATION}
        </span>
      </div>
    </footer>
  );
}
