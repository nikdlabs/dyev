import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "About", description: "Dyev is an independent studio building practical tools and exploring new ideas.", alternates: { canonical: "/about/" } };

export default function AboutPage() {
  return <>
    <section className="inner-hero shell" data-reveal><p className="section-kicker">About Dyev</p><h1>We make useful things easier to use.</h1><p>Dyev is an independent studio for digital products, research, and AI projects. We start with a real problem and build a clear way through it.</p></section>
    <section className="about-story shell" data-reveal><span className="chapter-number">Our way of working</span><div><h2>Start small. Learn. Improve.</h2><p>We look closely at the work people need to do. Then we make a focused first version, test what is useful, and improve it.</p><p>Some ideas become products. Others stay in Labs while we learn. We show that difference clearly so you know what is available and what is still in progress.</p></div></section>
    <section className="about-path shell" data-reveal><Link href="/products/"><span>Explore products</span><ArrowRight aria-hidden="true" /></Link><Link href="/lab/"><span>See our research</span><ArrowRight aria-hidden="true" /></Link><Link href="/ai/"><span>Explore AI work</span><ArrowRight aria-hidden="true" /></Link></section>
  </>;
}
