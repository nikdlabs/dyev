import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Products & Solutions", description: "Explore Dyev products and solutions, including Electrical.Dyev and Tutor Board.", alternates: { canonical: "/products/" } };

export default function ProductsPage() {
  return <>
    <section className="inner-hero shell" data-reveal><p className="section-kicker">Products & Solutions</p><h1>Tools built to make work easier.</h1><p>See what you can use today and what we are still building. We’ll add new products here as they are ready.</p></section>
    <section className="product-list shell">
      <article className="product-feature" data-reveal>
        <div className="product-feature-copy"><span className="status-line"><i /> Available now</span><h2>Electrical.Dyev</h2><p>Simple electrical calculators for early checks. See the inputs and working behind each result, then review it with the right professional before making a final decision.</p><div className="product-actions"><Link className="button button-primary" href="/products/electricaldyev/">Learn about it <ArrowRight aria-hidden="true" /></Link><a className="quiet-link" href="https://electrical.dyev.in/" target="_blank" rel="noreferrer">Open the tool <ArrowUpRight aria-hidden="true" /></a></div></div>
        <div className="product-schematic" aria-label="Diagram showing the steps input, calculate and review"><div className="schematic-title">Electrical.Dyev</div><div className="schematic-steps"><span>01<br/><strong>Input</strong></span><i/><span>02<br/><strong>Calculate</strong></span><i/><span>03<br/><strong>Review</strong></span></div><div className="schematic-rule" /></div>
      </article>
      <article className="product-line" data-reveal><div><span className="status-line status-building"><i /> In development</span><h2>Tutor Board</h2><p>A learning project in progress. We’ll add details and a link when it is ready to share.</p></div><div className="product-line-mark" aria-hidden="true"><span>TB</span><i/></div></article>
      <div className="product-end-note" data-reveal><p>Have a question about a Dyev product?</p><Link href="/contact/">Get in touch <ArrowUpRight aria-hidden="true" /></Link></div>
    </section>
  </>;
}
