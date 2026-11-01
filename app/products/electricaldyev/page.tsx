import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Electrical.Dyev", description: "Electrical calculators for early checks, with visible inputs and working.", alternates: { canonical: "/products/electricaldyev/" } };

const tools = [
  ["Load and current", "Convert between power and current for an early load check."],
  ["Voltage drop", "Estimate how much voltage may be lost along a cable."],
  ["Cable check", "Compare a cable option with your current and voltage-drop limits."],
  ["Breaker check", "Review the basic relationship between load, breaker, and cable rating."],
  ["Load schedule", "Keep circuit information together in a local project."],
];

export default function ElectricalDyevPage() {
  return <>
    <section className="detail-hero shell" data-reveal><Link className="detail-back" href="/products/"><ArrowLeft aria-hidden="true" /> Products & Solutions</Link><span className="status-line"><i /> Available now</span><h1>Electrical checks you can follow.</h1><p>Electrical.Dyev gives you focused calculators for early electrical work. It shows the inputs and steps behind a result so you can review it before using it in a decision.</p><a className="button button-primary" href="https://electrical.dyev.in/" target="_blank" rel="noreferrer">Open Electrical.Dyev <ArrowUpRight aria-hidden="true" /></a></section>
    <section className="detail-flow"><div className="shell detail-flow-inner" data-reveal><span>Enter your values</span><i/><span>See the calculation</span><i/><span>Review the result</span></div></section>
    <section className="shell detail-tools"><div className="detail-tools-intro" data-reveal><p className="section-kicker">What you can do</p><h2>Choose the check you need.</h2></div><div>{tools.map(([title, description], index) => <div className="detail-tool-row" key={title} data-reveal><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div>)}</div></section>
    <section className="detail-note shell" data-reveal><div><p className="section-kicker">Before you use a result</p><h2>These are early checks.</h2><p>Electrical.Dyev helps you work through a calculation. Final design and safety decisions still need a qualified professional, current standards, manufacturer information, and the conditions of the project.</p></div><a className="button button-primary" href="https://electrical.dyev.in/" target="_blank" rel="noreferrer">Explore the calculators <ArrowRight aria-hidden="true" /></a></section>
  </>;
}
