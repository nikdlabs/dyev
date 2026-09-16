"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X, ArrowUpRight, Copy, Check } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

const navigation = [{ href: "/products/", label: "Products" }, { href: "/articles/", label: "Articles" }, { href: "/lab/", label: "Lab" }, { href: "/about/", label: "About" }];

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => { setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light"); }, []);
  function change(next: "light" | "dark") { setTheme(next); document.documentElement.dataset.theme = next; document.documentElement.style.colorScheme = next; localStorage.setItem("dyev-theme", next); }
  return <div className="theme-toggle" aria-label="Colour theme"><button type="button" className={theme === "light" ? "is-current" : ""} onClick={() => change("light")} aria-pressed={theme === "light"}><Sun aria-hidden="true" /> <span>Light</span></button><button type="button" className={theme === "dark" ? "is-current" : ""} onClick={() => change("dark")} aria-pressed={theme === "dark"}><Moon aria-hidden="true" /> <span>Dark</span></button></div>;
}

function Wordmark() { return <Link className="wordmark" href="/" aria-label="Dyev home">Dyev<span aria-hidden="true" /></Link>; }

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  async function copy() { try { await navigator.clipboard.writeText("hello@dyev.in"); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { window.location.href = "mailto:hello@dyev.in"; } }
  return <button className="copy-email" type="button" onClick={copy}>{copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}{copied ? "Copied" : "Copy address"}</button>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const path = usePathname(); const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { setMenuOpen(false); }, [path]);
  useEffect(() => { document.body.classList.toggle("menu-open", menuOpen); return () => document.body.classList.remove("menu-open"); }, [menuOpen]);
  return <><header className="site-header"><div className="site-header-inner"><Wordmark /><nav className="desktop-nav" aria-label="Primary navigation">{navigation.map((item) => <Link key={item.href} href={item.href} className={path.startsWith(item.href) ? "is-active" : ""}>{item.label}</Link>)}</nav><div className="header-actions"><ThemeToggle /><Link className="button button-primary header-cta" href="/products/">Explore work <ArrowUpRight aria-hidden="true" /></Link><button type="button" className="menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button></div></div></header>
  <div className={`mobile-sheet ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}><div><p className="eyebrow">Navigate Dyev</p><nav aria-label="Mobile navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}<ArrowUpRight aria-hidden="true" /></Link>)}</nav><Link className="button button-primary mobile-work" href="/products/">Explore our work <ArrowUpRight aria-hidden="true" /></Link><div className="mobile-contact"><p>Have a useful problem in mind?</p><a href="mailto:hello@dyev.in">hello@dyev.in</a></div></div></div>
  <main>{children}</main><footer className="site-footer"><div className="footer-grid"><section><Wordmark /><p className="footer-statement">Build useful things. Explore better ideas.</p><p className="footer-copy">Independent product studio creating practical tools, software products, and experiments.</p></section><nav aria-label="Footer explore"><h2>Explore</h2><Link href="/products/">Products</Link><Link href="/articles/">Articles</Link><Link href="/lab/">Lab</Link><Link href="/about/">About</Link></nav><nav aria-label="Footer products"><h2>Products</h2><Link href="/products/electricaldyev/">ElectricalDyev</Link><Link href="/products/">Product studies</Link></nav><section><h2>Connect</h2><a href="mailto:hello@dyev.in">hello@dyev.in</a><Link href="/contact/">Contact</Link></section></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Dyev. Independent product studio.</span><span><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/disclaimer/">Disclaimer</Link></span></div></footer></>;
}
