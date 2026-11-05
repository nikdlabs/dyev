import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import "./refresh.css";
import { SiteShell } from "@/components/site-shell";
import { AnalyticsConsent } from "@/components/analytics-consent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dyev.in";
const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Dyev | Useful tools and ideas", template: "%s | Dyev" },
  description: "Dyev is a portfolio of software projects for engineering, education, and incident investigation.",
  alternates: { canonical: "/" },
  verification: process.env.PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
  openGraph: { type: "website", siteName: "Dyev", title: "Dyev | Software for real-world work", description: "Software projects for engineering, education, and incident investigation.", images: [{ url: "/images/dyev/hero-ribbon.jpg", width: 1448, height: 1086, alt: "A cobalt-blue ribbon passing through a graphite grid" }] },
  twitter: { card: "summary_large_image", title: "Dyev | Software for real-world work", description: "Software projects for engineering, education, and incident investigation.", images: ["/images/dyev/hero-ribbon.jpg"] },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon-48.png", sizes: "48x48", type: "image/png" }], apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = { themeColor: "#fcfcfa", colorScheme: "light dark" };

const themeScript = `(() => { try { const theme = localStorage.getItem('dyev-theme') || 'light'; document.documentElement.dataset.theme = theme; document.documentElement.style.colorScheme = theme; } catch { document.documentElement.dataset.theme = 'light'; } })()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "Dyev", url: siteUrl, description: "Software projects for engineering, education, and incident investigation." };
  return <html lang="en" suppressHydrationWarning><head><Script id="dyev-theme" strategy="beforeInteractive">{themeScript}</Script><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /></head><body><SiteShell>{children}</SiteShell>{analyticsId && /^G-[A-Z0-9]+$/.test(analyticsId) ? <AnalyticsConsent measurementId={analyticsId} /> : null}</body></html>;
}
