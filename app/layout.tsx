import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Cormorant_Garamond, IBM_Plex_Mono, Lora } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import PageTransition from "@/components/PageTransition";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display"
});

const body = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Cirque | Cinematic Video Essay Collective",
  description:
    "Cirque crafts cinematic video essays exploring history, philosophy, art, and forgotten ideas."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="grain-overlay relative bg-basalt text-glacial">
        <LenisProvider>
          <div className="relative flex min-h-screen flex-col">
            <Nav />
            <PageTransition>
              <main className="flex-1 pt-24">{children}</main>
            </PageTransition>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
