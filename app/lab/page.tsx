import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Dyev Labs", description: "Research, experiments, and upcoming solutions from Dyev.", alternates: { canonical: "/lab/" } };

const studies = [
  { number: "01", title: "Clearer estimation work", detail: "Exploring how project scope and quantities can be easier to organise and review.", stage: "Research" },
  { number: "02", title: "A simpler project view", detail: "Looking at ways to surface useful project information without adding more noise.", stage: "Early concept" },
  { number: "03", title: "Better boundaries for tools", detail: "Studying where a quick calculation helps and where expert review must take over.", stage: "Research" },
];

export default function LabPage() {
  return <>
    <section className="inner-hero lab-inner-hero shell" data-reveal><p className="section-kicker">Dyev Labs</p><h1>Ideas in progress, shown clearly.</h1><p>Labs is where we share research and early solutions. These are working ideas, so their direction may change as we learn more.</p></section>
    <section className="lab-process"><div className="shell lab-process-inner" data-reveal><div><p className="section-kicker">How ideas move</p><h2>Explore. Test. Build.</h2></div><p>We start with a problem, make a small version, and learn from it. When an idea becomes useful enough to release, it moves to Products & Solutions.</p><div className="process-track" aria-hidden="true"><span>Explore</span><i/><span>Test</span><i/><span>Build</span></div></div></section>
    <section className="shell study-section"><div className="study-intro" data-reveal><p className="section-kicker">Current research</p><h2>What we are looking at.</h2></div><div className="study-list">{studies.map((study) => <article className="study-row" key={study.number} data-reveal><span className="study-number">{study.number}</span><div><h3>{study.title}</h3><p>{study.detail}</p></div><span className="study-stage">{study.stage}</span></article>)}</div><div className="study-footer" data-reveal><p>Research here is not a release promise. We will update these notes as the work changes.</p><Link href="/products/">See released products <ArrowRight aria-hidden="true" /></Link></div></section>
  </>;
}
