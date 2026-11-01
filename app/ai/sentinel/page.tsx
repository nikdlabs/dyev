import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SentinelIllustration } from "@/components/project-illustrations";

export const metadata: Metadata = { title: "Sentinel", description: "Sentinel is an early AI project for evidence-based investigation of application failures.", alternates: { canonical: "/ai/sentinel/" } };

const investigation = [
  ["Describe the incident", "An engineer provides a failed transaction, error, or incident description."],
  ["Collect evidence", "Connected tools would gather relevant logs, API responses, error messages, and context."],
  ["Choose the next check", "The AI agent would decide which investigation step to take based on the evidence found so far."],
  ["Find a likely cause", "Sentinel would connect the findings and identify the most probable source of the failure."],
  ["Report the findings", "The output would explain the likely cause, show supporting evidence, and suggest next steps."],
];

export default function SentinelPage() {
  return <>
    <section className="project-detail-hero sentinel-detail-hero shell" data-reveal>
      <div className="project-detail-intro"><h1>Sentinel</h1><p className="project-detail-subtitle">An AI assistant for incident investigation.</p><span className="status-line status-building"><i /> Concept · early development</span><p>Sentinel is an agentic AI project I am planning to help engineering teams investigate application failures. The first focus is payment failures and problems involving external payment providers.</p><ul className="portfolio-tags" aria-label="Project categories"><li>Applied AI</li><li>Python</li><li>Developer tools</li></ul></div>
      <SentinelIllustration />
    </section>
    <section className="project-story shell" data-reveal><h2>The problem</h2><div><p>When a payment or API call fails, engineers may need to search logs, trace a request across services, read provider errors, and work out whether the cause is inside their application or outside it. The evidence is often spread across different tools.</p><p>Sentinel aims to make that investigation more systematic and reduce the manual work needed to reach a useful explanation.</p></div></section>
    <section className="project-solution sentinel-solution"><div className="shell project-solution-inner" data-reveal><h2>How the investigation is intended to work</h2><p>The key idea is that an AI agent chooses its next check from the evidence it has found. This is a planned workflow, not a deployed system.</p><div className="investigation-list">{investigation.map(([title, description], index) => <div className="investigation-step" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div>)}</div></div></section>
    <section className="project-story shell" data-reveal><h2>Technical direction</h2><div><p>The planned implementation starts with Python, connected investigation tools, and LLM APIs. The system would be modular so evidence collection, agent decisions, and reporting can be developed and tested separately.</p><p>Context retrieval, guardrails, and observability are part of the design work. Retrieval from past incidents may later use RAG or vector search where that is useful; those are options being explored, not completed features.</p></div></section>
    <section className="project-status shell" data-reveal><div><h2>Where it stands</h2><p>Sentinel is at the concept and early implementation-planning stage. The full agentic investigation system is not built or available to use yet.</p></div><div><h2>Where it could go</h2><p>The goal is an investigation assistant that can work with real application telemetry, help engineers understand failures, and produce findings they can verify.</p></div></section>
    <section className="project-detail-footer shell" data-reveal><Link href="/ai/">All AI work <ArrowRight aria-hidden="true" /></Link><Link href="/contact/">Ask about Sentinel <ArrowRight aria-hidden="true" /></Link></section>
  </>;
}
