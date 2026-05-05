import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import PageTransition from "@/components/PageTransition";
import CursorUnderline from "@/components/CursorUnderline";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Johnny Modest — Zero-nonsense product consulting",
  },
  description:
    "Senior product leadership. I parachute in, fix the thing, and leave before I become furniture. From $80/hr.",
  metadataBase: new URL("https://johnnymodest.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      style={
        {
          "--font-body": `var(--font-display)`,
        } as React.CSSProperties
      }
    >
      <body>
        <Nav />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <StickyBar />
        <CursorUnderline />
      </body>
    </html>
  );
}
