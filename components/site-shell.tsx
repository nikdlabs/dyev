"use client";

import Link from "next/link";
import { ArrowUpRight, Compass, Layers3, Mail, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const navigation = [
  { href: "/#work", label: "What we make", icon: Layers3, match: "/" },
  { href: "/manifesto", label: "Manifesto", icon: Sparkles, match: "/manifesto" },
  { href: "/projects", label: "Projects", icon: Compass, match: "/projects" },
];

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <Link className={`brand-logo${footer ? " brand-logo-footer" : ""}`} href="/" aria-label="Dyev home">
      <img src="/brand/dyev-wordmark-midnight.png" alt="Dyev" />
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const activePath = pathname === "/" ? "/" : pathname;

  return (
    <>
      <header className="site-header">
        <BrandLogo />
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map(({ href, label, icon: Icon, match }) => (
            <Link key={href} href={href} className={activePath === match ? "is-active" : ""} aria-label={label}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <span className="header-balance" aria-hidden="true" />
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-grid">
          <section className="footer-brand">
            <BrandLogo footer />
            <p>Independent studio for ideas with somewhere useful to go.</p>
            <a className="footer-email" href="mailto:hello@dyev.in"><Mail aria-hidden="true" />hello@dyev.in <ArrowUpRight aria-hidden="true" /></a>
          </section>
          <nav className="footer-column" aria-label="Explore"><h2>Explore</h2><Link href="/#work">What we make</Link><Link href="/manifesto">Manifesto</Link><Link href="/projects">Projects</Link></nav>
          <nav className="footer-column" aria-label="Build"><h2>Build</h2><Link href="/projects">Digital products</Link><Link href="/projects">New ventures</Link><Link href="/projects">Useful systems</Link></nav>
          <nav className="footer-column" aria-label="Thinking"><h2>Thinking</h2><Link href="/manifesto">Own the question</Link><Link href="/manifesto">Build the proof</Link><Link href="/manifesto">Keep becoming</Link></nav>
          <section className="footer-column footer-signal"><h2>Signal</h2><span>India / worldwide</span><span>Ideas becoming things.</span></section>
        </div>
        <div className="footer-bottom"><small>(c) {new Date().getFullYear()} Dyev. All rights reserved.</small><small>Built from the inside out.</small></div>
      </footer>
    </>
  );
}
