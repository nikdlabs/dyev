import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
    <section className="detail-hero shell" data-reveal><h1>Electrical checks you can follow.</h1><span className="status-line"><i /> Available now</span><p>Electrical.Dyev is a set of calculators for early low-voltage work. Enter your values, see how the result was calculated, and check the assumptions before you use it in a project discussion.</p><a className="button button-primary" href="https://electrical.dyev.in/" target="_blank" rel="noreferrer">Open Electrical.Dyev <ArrowUpRight aria-hidden="true" /></a></section>
    <section className="detail-flow"><div className="shell detail-flow-inner" data-reveal><span>Enter your values</span><i/><span>See the calculation</span><i/><span>Review the result</span></div></section>
    <section className="shell detail-tools"><div className="detail-tools-intro" data-reveal><h2>Choose the check you need.</h2><p>Each calculator focuses on one job. You can inspect the working instead of relying on an unexplained number.</p></div><div>{tools.map(([title, description], index) => <div className="detail-tool-row" key={title} data-reveal><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div>)}</div></section>
    <section className="detail-note shell" data-reveal><div><h2>Use the result as a starting point.</h2><p>These tools support early checks. Final design and safety decisions still need a qualified professional, current standards, manufacturer information, and the conditions of the project.</p></div><a className="button button-primary" href="https://electrical.dyev.in/" target="_blank" rel="noreferrer">Explore the calculators <ArrowRight aria-hidden="true" /></a></section>
  </>;
}
