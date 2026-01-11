import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Maid In Suva | Professional Cleaning Services in Fiji",
  description: "Professional housekeeping and cleaning services in Suva, Fiji. Our experienced team from 5-star resorts provides quality cleaning, babysitting, pet-sitting, and house-sitting services. 100% Fijian Owned.",
  keywords: "cleaning services, housekeeping, Suva, Fiji, maid service, babysitting, pet sitting, house sitting, professional cleaning",
  openGraph: {
    title: "Maid In Suva | Professional Cleaning Services in Fiji",
    description: "Professional housekeeping and cleaning services in Suva, Fiji. Experienced staff from 5-star resorts.",
    url: "https://www.maidinsuva.com",
    siteName: "Maid In Suva",
    locale: "en_FJ",
    type: "website",
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
      </body>
    </html>
  );
}
