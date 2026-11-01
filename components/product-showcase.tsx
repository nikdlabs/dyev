import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ElectricalIllustration, TutorIllustration } from "@/components/project-illustrations";

export function ProductShowcase({ kind, id }: { kind: "electrical" | "tutor"; id?: string }) {
  const electrical = kind === "electrical";
  return <article id={id} className={`portfolio-card product-showcase ${electrical ? "electrical-portfolio" : "tutor-portfolio"}`} data-reveal>
    <div className="portfolio-copy">
      <h2>{electrical ? "Electrical.Dyev" : "Tutor Board"}</h2>
      <p className="portfolio-subtitle">{electrical ? "Clearer electrical checks for early planning." : "One workspace for independent educators."}</p>
      <span className={`status-line${electrical ? "" : " status-building"}`}><i /> {electrical ? "Available now" : "In development · product validation"}</span>
      <p className="portfolio-description">{electrical ? "Convert load and current, estimate voltage drop, compare cable options, and organise a load schedule. The inputs and method stay visible so each early result is easier to review." : "A subscription platform in development for tutors and small coaching centres. It aims to bring student records, batches, attendance, fees, assessments, homework, and parent updates into one place."}</p>
      <ul className="portfolio-tags" aria-label="Project categories">{(electrical ? ["Engineering", "Calculators", "Planning"] : ["SaaS", "EdTech", "Full-stack"]).map(tag => <li key={tag}>{tag}</li>)}</ul>
      <div className="showcase-actions"><Link className="row-link" href={electrical ? "/products/electricaldyev/" : "/products/tutor-board/"}>Explore project <ArrowUpRight aria-hidden="true" /></Link>{electrical && <a className="showcase-secondary" href="https://electrical.dyev.in/" target="_blank" rel="noreferrer">Open the tool <ArrowUpRight aria-hidden="true" /></a>}</div>
    </div>
    {electrical ? <ElectricalIllustration /> : <TutorIllustration />}
  </article>;
}
