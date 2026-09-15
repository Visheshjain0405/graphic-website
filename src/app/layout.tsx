import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08080A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nuvora Studio — Quiet Premium Graphic Design & Creative Branding Atelier",
  description:
    "Nuvora Studio is a quiet luxury creative branding atelier crafting distinctive visual identity systems, editorial web experiences, and considered packaging design for ambitious businesses.",
  keywords: [
    "Nuvora Studio",
    "Creative Branding Atelier",
    "Graphic Design Agency",
    "Visual Identity",
    "Editorial Web Design",
    "Luxury Packaging",
    "Brand Strategy India",
    "Quiet Luxury Agency",
  ],
  authors: [{ name: "Nuvora Studio" }],
  openGraph: {
    title: "Nuvora Studio — Quiet Premium Graphic Design & Creative Branding Atelier",
    description:
      "Crafting distinctive visual identities, editorial experiences, and considered brand systems for businesses that aspire to be remembered.",
    url: "https://nuvorastudio.com",
    siteName: "Nuvora Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvora Studio — Creative Branding Atelier",
    description: "Design That Defines Your Brand.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#08080A] text-[#F9F8F6] selection:bg-[#B89357] selection:text-white font-sans overflow-x-hidden min-h-screen">
        <div className="noise-overlay" aria-hidden="true" />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
