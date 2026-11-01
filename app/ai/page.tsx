import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "AI at Dyev", description: "Explore the AI ideas and solutions Dyev is building, including Sentinal.", alternates: { canonical: "/ai/" } };

export default function AIPage() {
  return <>
    <section className="inner-hero ai-inner-hero shell" data-reveal><p className="section-kicker">AI at Dyev</p><h1>AI that helps with a real task.</h1><p>We are building and testing AI ideas at Dyev. This space will show what each project is for, where it stands, and what is ready to use.</p></section>
    <section className="ai-feature-wrap"><div className="shell ai-feature" data-reveal><div><span className="status-line status-building"><i /> In development</span><h2>Sentinal</h2><p>An AI project in progress. We’ll share what it does, how it works, and when it is available as the project develops.</p><Link className="row-link" href="/contact/">Ask about Sentinal <ArrowUpRight aria-hidden="true" /></Link></div><div className="sentinal-visual" aria-hidden="true"><div className="sentinal-ring ring-one"/><div className="sentinal-ring ring-two"/><div className="sentinal-center"><span>S</span></div><div className="sentinal-pulse pulse-one"/><div className="sentinal-pulse pulse-two"/></div></div></section>
    <section className="ai-principles shell" data-reveal><div><p className="section-kicker">Our approach</p><h2>A clear purpose comes first.</h2></div><div className="ai-principle-lines"><p><strong>Start with the task.</strong> Understand what a person needs help with.</p><p><strong>Check the output.</strong> Make room for review and correction.</p><p><strong>Explain the stage.</strong> Say whether an idea is being tested or ready to use.</p></div></section>
    <section className="final-invite shell" data-reveal><div><p className="section-kicker">Stay in touch</p><h2>Interested in our AI work?</h2><p>We’re happy to hear about a problem you think AI could help with.</p></div><Link className="button button-primary" href="/contact/">Contact Dyev <ArrowRight aria-hidden="true" /></Link></section>
  </>;
}
