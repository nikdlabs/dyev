import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductShowcase } from "@/components/product-showcase";

export const metadata: Metadata = { title: "Products & Solutions", description: "Explore Electrical.Dyev and Tutor Board, two Dyev projects for engineering and education.", alternates: { canonical: "/products/" } };

export default function ProductsPage() {
  return <>
    <section className="inner-hero products-inner-hero shell" data-reveal><h1>Products & Solutions</h1><p>Two tools for different kinds of daily work. Electrical.Dyev is available for early electrical checks. Tutor Board is being developed for independent educators.</p></section>
    <section className="product-list shell" aria-label="Dyev products">
      <ProductShowcase kind="electrical" />
      <ProductShowcase kind="tutor" />
      <div className="product-end-note" data-reveal><p>Want to know more about a project?</p><Link href="/contact/">Get in touch <ArrowRight aria-hidden="true" /></Link></div>
    </section>
  </>;
}
