import type { Metadata } from "next";
import "@fontsource-variable/geist";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Parth Pancholi — Quantitative Developer",
  description:
    "Portfolio of Parth Pancholi, Quantitative Developer at Ksan Relay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="grid-bg" aria-hidden="true" />
        <Navbar />
        <main id="main" style={{ position: "relative", zIndex: 1, paddingTop: 100 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
