import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naoki Takami — Backend Engineer (PHP / Laravel)",
  description: "Backend engineer in Vancouver with 9+ years of PHP/Laravel experience building high-traffic web systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
