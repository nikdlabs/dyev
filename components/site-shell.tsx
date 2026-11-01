"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Copy, Menu, MoonStar, SunMedium, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ScrollMotion } from "@/components/scroll-motion";

const navigation = [
  { href: "/products/", label: "Products & Solutions" },
  { href: "/lab/", label: "Dyev Labs" },
  { href: "/ai/", label: "AI" },
  { href: "/about/", label: "About" },
];

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => { setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light"); }, []);
  function change() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("dyev-theme", next);
  }
  return <button className="theme-icon-button" type="button" onClick={change} aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}>{theme === "light" ? <MoonStar aria-hidden="true" /> : <SunMedium aria-hidden="true" />}</button>;
}

function Wordmark() { return <Link className="wordmark" href="/" aria-label="Dyev home">Dyev<span aria-hidden="true" /></Link>; }

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  async function copy() { try { await navigator.clipboard.writeText("hello@dyev.in"); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { window.location.href = "mailto:hello@dyev.in"; } }
  return <button className="copy-email" type="button" onClick={copy}>{copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}{copied ? "Copied" : "Copy address"}</button>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { setMenuOpen(false); }, [path]);
  useEffect(() => { document.body.classList.toggle("menu-open", menuOpen); return () => document.body.classList.remove("menu-open"); }, [menuOpen]);
  useEffect(() => { if (!menuOpen) return; const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); }; window.addEventListener("keydown", closeOnEscape); return () => window.removeEventListener("keydown", closeOnEscape); }, [menuOpen]);

  return <>
    <ScrollMotion />
    <header className={"site-header" + (menuOpen ? " menu-open" : "")}><div className="site-header-inner">
      <Wordmark />
      <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map((item) => <Link key={item.href} href={item.href} className={path.startsWith(item.href) ? "is-active" : ""} aria-current={path.startsWith(item.href) ? "page" : undefined}>{item.label}</Link>)}</nav>
      <div className="header-actions"><ThemeToggle /><Link className="header-contact" href="/contact/" aria-label="Get in touch"><span>Get in touch</span><ArrowUpRight aria-hidden="true" /></Link><button type="button" className="menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button></div>
      <span className="header-progress" aria-hidden="true"><i /></span>
    </div></header>
    <div id="mobile-navigation" className={"mobile-sheet " + (menuOpen ? "is-open" : "")} aria-hidden={!menuOpen}><nav aria-label="Mobile navigation">{navigation.map((item) => <Link key={item.href} href={item.href} tabIndex={menuOpen ? 0 : -1} aria-current={path.startsWith(item.href) ? "page" : undefined}>{item.label}<ArrowUpRight aria-hidden="true" /></Link>)}<Link href="/contact/" tabIndex={menuOpen ? 0 : -1} aria-current={path.startsWith("/contact/") ? "page" : undefined}>Contact<ArrowUpRight aria-hidden="true" /></Link></nav><div className="mobile-sheet-footer"><p>Useful tools. Clear ideas. Better ways to work.</p><a href="mailto:hello@dyev.in" tabIndex={menuOpen ? 0 : -1}>hello@dyev.in <ArrowUpRight aria-hidden="true" /></a></div></div>
    <main>{children}</main>
    <footer className="site-footer"><div className="footer-grid">
      <div className="footer-brand"><Wordmark /><p>Useful tools. Clear ideas. Better ways to work.</p></div>
      <nav aria-label="Explore"><h2>Explore</h2><Link href="/products/">Products & Solutions</Link><Link href="/lab/">Dyev Labs</Link><Link href="/ai/">AI</Link><Link href="/about/">About</Link></nav>
      <div className="footer-contact"><h2>Say hello</h2><a href="mailto:hello@dyev.in">hello@dyev.in <ArrowUpRight aria-hidden="true" /></a></div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Dyev</span><span><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/disclaimer/">Disclaimer</Link></span></div></footer>
  </>;
}
