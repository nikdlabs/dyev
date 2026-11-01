import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SentinelIllustration } from "@/components/project-illustrations";

export const metadata: Metadata = { title: "AI at Dyev", description: "Explore Sentinel, an early AI project for evidence-based incident investigation.", alternates: { canonical: "/ai/" } };

export default function AIPage() {
  return <>
    <section className="inner-hero ai-inner-hero shell" data-reveal><h1>AI at Dyev</h1><p>I am exploring how AI can help engineers investigate application failures. Sentinel is the first project in this area, with payment and external API failures as its initial focus.</p></section>
    <section className="ai-project-list shell">
      <article className="portfolio-card sentinel-portfolio" data-reveal>
        <div className="portfolio-copy">
          <h2>Sentinel</h2>
          <p className="portfolio-subtitle">An AI assistant for incident investigation.</p>
          <span className="status-line status-building"><i /> Concept · early development</span>
          <p className="portfolio-description">Sentinel is planned to help engineering teams follow evidence across logs, failed requests, and provider responses. Its goal is to identify a probable cause and produce a report that people can review.</p>
          <ul className="portfolio-tags" aria-label="Project categories"><li>Applied AI</li><li>Python</li><li>Developer tools</li></ul>
          <Link className="row-link" href="/ai/sentinel/">Explore project <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <SentinelIllustration />
      </article>
    </section>
    <section className="ai-principles shell" data-reveal><div><h2>How I approach AI work</h2><p>AI should help with a specific task and give people enough evidence to check its conclusions.</p></div><div className="ai-principle-lines"><p><strong>Begin with the failure.</strong> Identify what happened and what the engineer needs to know.</p><p><strong>Follow the evidence.</strong> Use logs, API responses, and context to guide each next step.</p><p><strong>Show the reasoning.</strong> Present a likely cause with supporting evidence and suggested next actions.</p></div></section>
    <section className="final-invite shell" data-reveal><div><h2>Investigating a difficult failure?</h2><p>Tell me what makes it hard to trace. I am interested in real incident workflows as this project develops.</p></div><Link className="button button-primary" href="/contact/">Contact Dyev <ArrowRight aria-hidden="true" /></Link></section>
  </>;
}
