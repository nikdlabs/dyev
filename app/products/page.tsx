import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TutorIllustration } from "@/components/project-illustrations";

export const metadata: Metadata = { title: "Products & Solutions", description: "Explore Electrical.Dyev and Tutor Board, two Dyev projects for engineering and education.", alternates: { canonical: "/products/" } };

export default function ProductsPage() {
  return <>
    <section className="inner-hero shell" data-reveal><h1>Products & Solutions</h1><p>These projects are built around everyday work. Electrical.Dyev is available now. Tutor Board is in development and product validation.</p></section>
    <section className="product-list shell">
      <article className="product-feature" data-reveal>
        <div className="product-feature-copy"><h2>Electrical.Dyev</h2><span className="status-line"><i /> Available now</span><p>Early electrical checks need to be quick, but they also need to be understandable. Electrical.Dyev helps you convert load and current, estimate voltage drop, compare cable options, and organise a load schedule. Each tool shows its inputs and method so you can review the result.</p><div className="product-actions"><Link className="button button-primary" href="/products/electricaldyev/">Explore project <ArrowRight aria-hidden="true" /></Link><a className="quiet-link" href="https://electrical.dyev.in/" target="_blank" rel="noreferrer">Open the tool <ArrowUpRight aria-hidden="true" /></a></div></div>
        <div className="product-schematic" aria-label="Illustration of the Electrical.Dyev calculation flow"><div className="schematic-title">Electrical.Dyev</div><div className="schematic-steps"><span>01<br/><strong>Input</strong></span><i/><span>02<br/><strong>Calculate</strong></span><i/><span>03<br/><strong>Review</strong></span></div><div className="schematic-rule" /></div>
      </article>
      <article className="portfolio-card tutor-portfolio" data-reveal>
        <div className="portfolio-copy">
          <h2>Tutor Board</h2>
          <p className="portfolio-subtitle">One workspace for independent educators.</p>
          <span className="status-line status-building"><i /> In development · product validation</span>
          <p className="portfolio-description">Tutor Board is a subscription platform I am building for tutors and small coaching centres. It aims to bring student records, batches, attendance, fees, assessments, homework, and parent updates into one place.</p>
          <ul className="portfolio-tags" aria-label="Project categories"><li>SaaS</li><li>EdTech</li><li>Full-stack</li></ul>
          <Link className="row-link" href="/products/tutor-board/">Explore project <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <TutorIllustration />
      </article>
      <div className="product-end-note" data-reveal><p>Have a question about a Dyev project?</p><Link href="/contact/">Get in touch <ArrowUpRight aria-hidden="true" /></Link></div>
    </section>
  </>;
}
