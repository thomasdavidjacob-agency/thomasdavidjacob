import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Sans_Condensed } from "next/font/google";
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

// Headline face: closest Google Font to the thomas+david+jacob logo
// (heavy, condensed, angled stroke cuts).
const logoFace = Fira_Sans_Condensed({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["800", "900"],
});

export const metadata: Metadata = {
  title: 'Thomas David Jacob | Digital Agency Oregon City, OR',
  description:
    'Full-service digital creative agency in Oregon City, OR — AI-powered web design, SEO & marketing for the Portland metro and Oregon statewide.',
  verification: {
    google: 'xNLWk1ytCymhdvAE0_UZPd4MpUCwOVCEJa9VljWA5_4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${logoFace.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-base text-white">
        {children}
        <div className="grain" />
        <Analytics />
      </body>
    </html>
  );
}
