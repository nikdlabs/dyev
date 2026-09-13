import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Dyev | Ideas become things",
  description: "Dyev is an independent studio building products, systems, ventures, and useful experiments.",
  icons: { icon: "/favicon.svg?v=3" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
