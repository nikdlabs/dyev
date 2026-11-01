import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProductShowcase } from "@/components/product-showcase";

export const metadata: Metadata = { title: "Dyev | Software for real-world work", description: "Explore Dyev projects for electrical planning, education management, and AI incident investigation." };

export default function HomePage() {
  return <>
    <section className="new-hero shell">
      <div className="new-hero-copy">
        <h1>Software for <em>real-world work.</em></h1>
        <p className="hero-intro">Dyev is where I build tools for electrical planning, education management, and software teams. Explore what is available now and the projects I am developing.</p>
        <div className="hero-links"><Link className="button button-primary" href="/products/">Explore projects <ArrowRight aria-hidden="true" /></Link><Link className="quiet-link" href="#what-we-do">See the approach <ArrowDown aria-hidden="true" /></Link></div>
      </div>
      <div className="hero-system" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-core"><span>D</span></div>
        <span className="hero-satellite satellite-one" /><span className="hero-satellite satellite-two" />
      </div>
      <div className="hero-bottom"><span>Dyev</span><span>Scroll to explore <ArrowDown aria-hidden="true" /></span></div>
    </section>

    <section id="what-we-do" className="statement-section">
      <div className="shell statement-inner" data-reveal>
        <h2>Every project starts with a problem someone faces.</h2>
        <p>Electrical.Dyev makes early calculations easier to review. Tutor Board aims to reduce the admin work around teaching. Sentinel is being planned to help engineers investigate application failures. Each project page explains the problem, the approach, and its current stage.</p>
      </div>
    </section>

    <section className="products-band" id="products"><div className="shell products-band-inner" data-reveal>
      <div className="products-band-copy"><h2>Products & Solutions</h2><p>Practical software for work that often gets spread across tools and notes. Start with a quick look here, then explore each project in detail below.</p><Link className="row-link" href="#product-details">See project details <ArrowDown aria-hidden="true" /></Link></div>
      <div className="products-motion" aria-hidden="true"><span className="products-motion-ring ring-a"/><span className="products-motion-ring ring-b"/><span className="products-motion-core"><i/></span><span className="products-motion-dot dot-a"/><span className="products-motion-dot dot-b"/></div>
      <div className="products-quick-links"><a href="#electrical-detail"><span>Electrical.Dyev</span><span>Available now <ArrowRight aria-hidden="true" /></span></a><a href="#tutor-detail"><span>Tutor Board</span><span>In development <ArrowRight aria-hidden="true" /></span></a></div>
    </div></section>

    <section className="labs-band"><div className="shell labs-band-inner" data-reveal><div><h2>Dyev Labs</h2><p>Labs shares the questions behind my projects: how to make electrical checks clearer, reduce tutor admin, and investigate software failures with evidence.</p><Link className="button button-light" href="/lab/">Explore Dyev Labs <ArrowRight aria-hidden="true" /></Link></div><div className="labs-graphic" aria-hidden="true"><div className="lab-node node-a" /><div className="lab-node node-b" /><div className="lab-node node-c" /><span className="lab-wire wire-a" /><span className="lab-wire wire-b" /></div></div></section>

    <section className="ai-band"><div className="shell ai-band-inner" data-reveal><div className="ai-signal" aria-hidden="true"><span/><span/><span/><span/><span/><span/><span/><span/><span/></div><div><h2>AI at Dyev</h2><p>Sentinel is an early AI project for incident investigation. The idea is to help engineers follow evidence across logs and API errors, then explain the most likely cause of a failure.</p><Link className="row-link" href="/ai/sentinel/">Explore Sentinel <ArrowUpRight aria-hidden="true" /></Link></div></div></section>

    <section className="home-product-details shell" id="product-details"><div className="home-product-heading" data-reveal><h2>Explore the products</h2><p>One product is ready to use. The other is still being built. Each page shows the problem it addresses, how it works or is planned to work, and its current stage.</p></div><div className="home-product-list"><ProductShowcase kind="electrical" id="electrical-detail" /><ProductShowcase kind="tutor" id="tutor-detail" /></div><Link className="section-exit" href="/products/">All products and solutions <ArrowRight aria-hidden="true" /></Link></section>

    <section className="final-invite shell" data-reveal><div><h2>Have something I should look at?</h2><p>Tell me about the task, the people doing it, and what is getting in their way. A short note is enough to start.</p></div><Link className="button button-primary" href="/contact/">Contact Dyev <ArrowRight aria-hidden="true" /></Link></section>
  </>;
}
