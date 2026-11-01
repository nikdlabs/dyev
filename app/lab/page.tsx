import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Dyev Labs", description: "Research, experiments, and upcoming solutions from Dyev.", alternates: { canonical: "/lab/" } };

const studies = [
  { title: "Electrical checks people can review", detail: "Electrical.Dyev shows the inputs and method behind early calculations. I am interested in making those checks easier to follow without hiding the engineering judgement they require.", stage: "Ongoing exploration", href: "/products/electricaldyev/", link: "Explore Electrical.Dyev" },
  { title: "Less admin for independent educators", detail: "Tutor Board is being developed around the daily records, fee follow-ups, and learning updates that tutors and small coaching centres manage across different tools.", stage: "Product validation", href: "/products/tutor-board/", link: "Explore Tutor Board" },
  { title: "Incident investigation guided by evidence", detail: "Sentinel is an early concept for following logs and API errors step by step, then giving engineers a probable cause they can verify.", stage: "Concept", href: "/ai/sentinel/", link: "Explore Sentinel" },
];

export default function LabPage() {
  return <>
    <section className="inner-hero lab-inner-hero shell" data-reveal><h1>Dyev Labs</h1><p>This is where I share the questions behind Dyev projects, the problems I am studying, and the ideas still taking shape.</p></section>
    <section className="lab-process"><div className="shell lab-process-inner" data-reveal><div><h2>From a question to a useful tool.</h2></div><p>I start by understanding a real task and the people doing it. Then I test a focused approach, learn from the result, and decide what is worth building further.</p></div></section>
    <section className="shell study-section"><div className="study-intro" data-reveal><h2>What I am exploring</h2><p>These ideas are at different stages. Each project page explains what exists now and what is still planned.</p></div><div className="study-list">{studies.map((study) => <article className="study-row" key={study.title} data-reveal><div><h3>{study.title}</h3><p>{study.detail}</p><span className="study-stage">{study.stage}</span><Link className="row-link" href={study.href}>{study.link} <ArrowRight aria-hidden="true" /></Link></div></article>)}</div><div className="study-footer" data-reveal><p>Explore the project pages for a closer look at the problem, approach, and progress.</p><Link href="/products/">See products and solutions <ArrowRight aria-hidden="true" /></Link></div></section>
  </>;
}
