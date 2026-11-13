import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "optional",
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
    <html lang="en" className={`${archivo.variable} motion-safe:scroll-smooth`}>
      <body className="min-h-full bg-fog font-serif text-cedar antialiased">{children}</body>
    </html>
  );
}
