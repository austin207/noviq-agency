import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noviq — Web Development Studio",
  description:
    "Websites, apps, and Instagram content for businesses in Kochi. Clean work, fair prices.",
  metadataBase: new URL("https://noviq.website"),
  openGraph: {
    title: "Noviq — Web Development Studio",
    description:
      "Websites, apps, and Instagram content for businesses in Kochi.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
