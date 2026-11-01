import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Dyev | Useful tools and ideas", description: "Dyev builds practical tools, explores new solutions, and develops AI projects." };

export default function HomePage() {
  return <>
    <section className="new-hero shell">
      <div className="new-hero-copy">
        <p className="section-kicker hero-kicker">The Dyev studio</p>
        <h1>Good ideas should be <em>easy to use.</em></h1>
        <p className="hero-intro">We build practical digital tools and explore better ways to work. Some projects are ready to use. Others are still taking shape.</p>
        <div className="hero-links"><Link className="button button-primary" href="/products/">Explore our work <ArrowRight aria-hidden="true" /></Link><Link className="quiet-link" href="#what-we-do">See what we do <ArrowDown aria-hidden="true" /></Link></div>
      </div>
      <div className="hero-system" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-core"><span>D</span></div>
        <span className="hero-satellite satellite-one" /><span className="hero-satellite satellite-two" />
        <div className="hero-system-label"><span>Dyev</span><span>Ideas → useful things</span></div>
      </div>
      <div className="hero-bottom"><span>Independent product studio</span><span>Scroll to explore <ArrowDown aria-hidden="true" /></span></div>
    </section>

    <section id="what-we-do" className="statement-section">
      <div className="shell statement-inner" data-reveal>
        <p className="section-kicker">What we do</p>
        <h2>We turn a useful idea into something people can actually use.</h2>
        <p>That might be a focused tool, a new way to work, or an AI project. We keep the purpose clear and show where each project stands.</p>
      </div>
    </section>

    <section className="chapter-section shell" id="products">
      <div className="chapter-head" data-reveal><div><span className="chapter-number">01 / 03</span><p className="section-kicker">Products & Solutions</p><h2>Tools for real work.</h2></div><p>Explore what is available now and what we are building next.</p></div>
      <div className="work-row work-row-featured" data-reveal>
        <div className="work-row-content"><span className="status-line"><i /> Available now</span><h3>Electrical.Dyev</h3><p>Electrical calculators that make early checks easier to work through and review.</p><Link className="row-link" href="/products/electricaldyev/">Explore Electrical.Dyev <ArrowUpRight aria-hidden="true" /></Link></div>
        <div className="electrical-stage" aria-hidden="true"><div className="stage-top"><span>Electrical.Dyev</span><span>Calculation workspace</span></div><div className="stage-equation"><span>Input</span><i /><strong>Calculate</strong><i /><span>Review</span></div><div className="stage-bottom"><span>Load</span><span>Current</span><span>Voltage drop</span><span>More</span></div></div>
      </div>
      <div className="work-row work-row-simple" data-reveal><div><span className="status-line status-building"><i /> In development</span><h3>Tutor Board</h3><p>A learning project in progress. We’ll share more as it develops.</p></div><span className="row-index">02 <ArrowRight aria-hidden="true" /></span></div>
      <Link className="section-exit" href="/products/">View all products and solutions <ArrowRight aria-hidden="true" /></Link>
    </section>

    <section className="labs-band"><div className="shell labs-band-inner" data-reveal><div><span className="chapter-number">02 / 03</span><p className="section-kicker">Dyev Labs</p><h2>Where new ideas take shape.</h2><p>Labs is where we share research, early experiments, and solutions still in progress. You can see what we are exploring without mistaking it for a finished product.</p><Link className="button button-light" href="/lab/">Explore Dyev Labs <ArrowRight aria-hidden="true" /></Link></div><div className="labs-graphic" aria-hidden="true"><div className="lab-node node-a">Idea</div><div className="lab-node node-b">Test</div><div className="lab-node node-c">Build</div><span className="lab-wire wire-a" /><span className="lab-wire wire-b" /></div></div></section>

    <section className="ai-band"><div className="shell ai-band-inner" data-reveal><div className="ai-signal" aria-hidden="true"><span/><span/><span/><span/><span/><span/><span/><span/><span/></div><div><span className="chapter-number">03 / 03</span><p className="section-kicker">AI at Dyev</p><h2>AI projects with a clear purpose.</h2><p>We are developing AI ideas and solutions, including Sentinal. This space will show the work as it becomes ready to share.</p><Link className="row-link" href="/ai/">Explore our AI work <ArrowUpRight aria-hidden="true" /></Link></div></div></section>

    <section className="final-invite shell" data-reveal><div><p className="section-kicker">Get in touch</p><h2>Have a problem worth solving?</h2><p>Tell us what you are working on. A simple note is enough.</p></div><Link className="button button-primary" href="/contact/">Contact Dyev <ArrowRight aria-hidden="true" /></Link></section>
  </>;
}
