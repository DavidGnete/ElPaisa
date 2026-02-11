import type { Metadata } from "next";
import { HeadTitle } from "@/components/modalSlider/head-title/HeadTitle";

import "./globals.css";



export const metadata: Metadata = {
  title: "El Paisita",
  description: "Diseños & Acabados",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        <div className="relative h-screen text-neutral-900">
      <HeadTitle />
        {children}
        </div>
      </body>
    </html>
  );
}
