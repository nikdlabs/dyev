import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Article, LabEntry, Product } from "@/lib/content";
import { formatDate, readingTime } from "@/lib/content";

export function StatusBadge({ status }: { status: Product["status"] | LabEntry["status"] }) { return <span className={`status-badge status-${status.toLowerCase().replaceAll(" ", "-")}`}><i aria-hidden="true" />{status}</span>; }

export function ElectricalPreview() {
  return <div className="product-preview electrical-preview"><div className="electrical-preview-heading"><strong>Electrical.Dyev</strong><span>Preliminary tools</span></div><div className="electrical-preview-tools"><span>kW ↔ amps</span><span>Voltage drop</span><span>Cable candidates</span><span>Load schedule</span></div><p>Visible formulas · browser-private projects · preliminary only</p></div>;
}

export function ProductCard({ product }: { product: Product }) {
  const href = product.slug === "electricaldyev" ? "/products/electricaldyev/" : "/lab/";
  const label = product.slug === "electricaldyev" ? "Explore product" : "View in the Lab";
  return <article className={`product-card ${product.slug === "electricaldyev" ? "product-card-electrical" : ""}`}><div className="product-card-top"><StatusBadge status={product.status} /><span>{product.category}</span></div><Link href={href} className="card-visual-link" aria-label={`View ${product.name}`}>{product.slug === "electricaldyev" ? <ElectricalPreview /> : <div className="abstract-panel"><span>{product.slug === "boq-workspace" ? "01 / scope → quantity → estimate" : "Ideas in progress"}</span></div>}</Link><h2><Link href={href}>{product.name}</Link></h2><p>{product.summary}</p><Link href={href} className="text-link">{label}<ArrowRight aria-hidden="true" /></Link></article>;
}

export function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  const href = `/articles/${article.slug}/`;
  return <article className={`article-card ${compact ? "article-card-compact" : ""}`}><Link href={href} className="article-card-link" aria-label={`Read ${article.title}`}><span className="article-image"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 700px) 100vw, 33vw" /></span><span className="article-card-body"><span className="article-meta">{article.category} <span>·</span> {readingTime(article)} min read</span><span className="article-card-title">{article.title}</span><span className="article-card-description">{article.description}</span><span className="article-card-footer"><time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time><ArrowRight aria-hidden="true" /></span></span></Link></article>;
}

export function LabCard({ entry }: { entry: LabEntry }) { return <article className="lab-card"><Link href="/lab/" className="card-visual-link" aria-label={`View ${entry.title}`}><div className="lab-visual"><span className="lab-code">{entry.code}</span><div className="lab-lines" aria-hidden="true"><i /><i /><i /></div></div></Link><StatusBadge status={entry.status} /><h2><Link href="/lab/">{entry.title}</Link></h2><p>{entry.description}</p><span className="lab-detail">{entry.detail}</span><Link className="text-link" href="/lab/">{entry.status === "Question" ? "Read note" : "View study"}<ArrowRight aria-hidden="true" /></Link></article>; }

export function ExternalProductLink({ className = "button button-product", children = "Open Electrical.Dyev" }: { className?: string; children?: React.ReactNode }) { return <a className={className} href="https://electrical.dyev.in/" target="_blank" rel="noreferrer">{children}<ArrowUpRight aria-hidden="true" /></a>; }
