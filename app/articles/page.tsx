import type { Metadata } from "next";
import { ArticleGrid } from "@/components/filter-grids";
import { SubpageHero } from "@/components/subpage-hero";
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
    <SubpageHero eyebrow="Studio journal & observations" title="Notes from the work." copy="Practical observations on engineering tools, product design, working methods, and the ideas we are still figuring out." image="/images/dyev/articles-hero.jpg" imageAlt="Tracing paper, a graphite pencil, and a cobalt-blue ruler on a warm studio desk" />
    <section className="section articles-index-section"><div className="shell"><ArticleGrid articles={articles} /></div></section>
  </>;
}
