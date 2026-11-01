import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "About", description: "Dyev is a personal portfolio for practical software projects in engineering, education, and AI.", alternates: { canonical: "/about/" } };

export default function AboutPage() {
  return <>
    <section className="inner-hero shell" data-reveal><h1>About Dyev</h1><p>Dyev is the home for my software projects. I build tools for engineering and education, explore new ideas in Dyev Labs, and work on AI systems for practical technical problems.</p></section>
    <section className="about-story shell" data-reveal><div><h2>How I work</h2><p>I start with a task that feels harder than it should. I look at the steps, make a focused first version, and improve it through use and feedback.</p><p>A project stays in Labs while I am researching it. When it is ready for people to use, it moves to Products & Solutions. I keep those stages clear across the site.</p></div></section>
    <section className="about-path shell" data-reveal><Link href="/products/"><span>Explore products</span><ArrowRight aria-hidden="true" /></Link><Link href="/lab/"><span>See Dyev Labs</span><ArrowRight aria-hidden="true" /></Link><Link href="/ai/"><span>Explore AI work</span><ArrowRight aria-hidden="true" /></Link></section>
  </>;
}
