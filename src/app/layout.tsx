import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maid-in-suva.vercel.app"),
  title: "Maid In Suva | Professional Cleaning Services in Fiji",
  description: "Professional housekeeping and cleaning services in Suva, Fiji. Our experienced team from 5-star resorts provides quality cleaning, babysitting, pet-sitting, and house-sitting services. 100% Fijian Owned.",
  keywords: "cleaning services, housekeeping, Suva, Fiji, maid service, babysitting, pet sitting, house sitting, professional cleaning",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Maid In Suva | Professional Cleaning Services in Fiji",
    description: "Professional housekeeping and cleaning services in Suva, Fiji. Experienced staff from 5-star resorts.",
    url: "https://maid-in-suva.vercel.app",
    siteName: "Maid In Suva",
    locale: "en_FJ",
    type: "website",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Maid In Suva Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Maid In Suva | Professional Cleaning Services in Fiji",
    description: "Professional housekeeping and cleaning services in Suva, Fiji. Experienced staff from 5-star resorts.",
    images: ["/icon-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
