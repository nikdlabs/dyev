import type { Metadata } from "next";
import { ArticleGrid } from "@/components/filter-grids";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Articles",
  description: "Practical observations on product design, engineering, workflow design, and building useful tools.",
  alternates: { canonical: "/articles/" },
  openGraph: { title: "Articles | Dyev", description: "Practical observations on product design, engineering, workflow design, and building useful tools.", url: "/articles/" },
  twitter: { card: "summary_large_image", title: "Articles | Dyev", description: "Practical observations on product design, engineering, workflow design, and building useful tools." },
};

export default function ArticlesPage() {
  return <>
    <section className="page-hero"><div className="shell"><p className="eyebrow">Studio journal & observations</p><h1>Notes from the work.</h1><p className="lead">Practical observations on engineering tools, product design, working methods, and the ideas we are still figuring out.</p></div></section>
    <section className="section articles-index-section"><div className="shell"><div className="article-index-intro"><div><p className="eyebrow">The collection</p><h2>Useful thinking, written down.</h2></div><p>Short, practical notes about the choices behind a clearer tool: assumptions, local data, focused software, and the work that happens before a result is trusted.</p></div><ArticleGrid articles={articles} /></div></section>
  </>;
}
