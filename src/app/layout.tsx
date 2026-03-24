import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Noviq — Web Development Studio | Kochi, India",
    template: "%s | Noviq",
  },
  description:
    "Websites, mobile apps, and Instagram content for local businesses in Kochi, Kerala. WordPress, Next.js, Flutter. Clean work, fair prices.",
  metadataBase: new URL("https://noviq.website"),
  keywords: [
    "web development Kochi",
    "website design Kerala",
    "mobile app development Kochi",
    "Flutter app developer India",
    "WordPress website Kerala",
    "Next.js developer Kochi",
    "Instagram Reels business",
    "small business website India",
    "restaurant website Kochi",
    "clinic website Kerala",
    "Noviq",
  ],
  authors: [{ name: "Noviq", url: "https://noviq.website" }],
  creator: "Noviq",
  publisher: "Noviq",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: "Noviq — Web Development Studio",
    description:
      "Websites, mobile apps, and Instagram content for local businesses in Kochi, Kerala.",
    url: "https://noviq.website",
    siteName: "Noviq",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noviq — Web Development Studio",
    description:
      "Websites, apps, and Instagram content for businesses in Kochi.",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  alternates: { canonical: "https://noviq.website" },
  other: { "theme-color": "#0A0A0A" },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Noviq",
  description:
    "Web development, mobile app development, and Instagram content creation for local businesses in Kochi, Kerala.",
  url: "https://noviq.website",
  logo: "https://noviq.website/logo.svg",
  telephone: "+919048281078",
  email: "hello@noviq.website",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kochi",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.9312,
    longitude: 76.2673,
  },
  areaServed: [
    { "@type": "City", name: "Kochi" },
    { "@type": "City", name: "Ernakulam" },
    { "@type": "City", name: "Thrippunithura" },
  ],
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "Instagram Content Creation",
    "WordPress Website Design",
    "UI/UX Design",
  ],
  priceRange: "₹10,000 - ₹1,80,000",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "21:00",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
