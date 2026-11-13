import type { Metadata, Viewport } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Naoki Takami — Backend Engineer (PHP / Laravel)",
  description: "Backend engineer in Vancouver with 9+ years of PHP/Laravel experience building high-traffic web systems.",
};

export const viewport: Viewport = {
  themeColor: "#e6ebea", // --color-fog
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${sourceSerif.variable} motion-safe:scroll-smooth`}>
      <body className="min-h-full bg-fog font-serif text-cedar antialiased">{children}</body>
    </html>
  );
}
