import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for choosing Noviq. We'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#0A0A0A] px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-accent" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          Thank you!
        </h1>
        <p className="mt-3 text-secondary">
          Your payment was successful. We&apos;ll reach out within 24 hours to
          kick things off.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-outline px-6 py-2.5 text-sm text-primary transition-all hover:border-accent hover:text-accent"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
