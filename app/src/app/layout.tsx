/**
 * ROOT LAYOUT COMPONENT
 * 
 * Top-level layout wrapper for the entire application.
 * 
 * Responsibilities:
 * - HTML document structure
 * - Global metadata (SEO)
 * - Global fonts and styles
 * - Layout structure (html, body, etc.)
 * 
 * All pages and experiences render inside the {children} slot.
 */

import ErudaLoader from '@/components/ErudaLoader'
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

/**
 * SEO Metadata for the portfolio
 * Update these values to match your personal branding
 */
export const metadata: Metadata = {
  title: "El Canah Zossou - 3D Developer",
  description: "Portfolio showcasing 3D development, real-time graphics, VR/AR experiences, and software engineering projects.",
  keywords: ["3D Developer", "Game Engine", "Unity", "Unreal Engine", "Three.js", "VR", "AR"],
  authors: [{ name: "El Canah Zossou" }],
  creator: "El Canah Zossou",
  metadataBase: new URL("https://elcanahzossou.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elcanahzossou.com",
    title: "El Canah Zossou - 3D Developer",
    description: "Portfolio showcasing 3D development, real-time graphics, VR/AR experiences, and software engineering projects.",
    siteName: "El Canah Zossou Portfolio",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <ErudaLoader />
        {children}
      </body>
    </html>
  );
}
