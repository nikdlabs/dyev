import Link from "next/link";
import { ArrowRight, CircleDashed, FlaskConical, Layers3 } from "lucide-react";
import { Reveal } from "@/components/reveal";

const states = [["01", "In formation", "The first set of Dyev projects is taking shape.", CircleDashed], ["02", "In the lab", "Ideas are being made testable before they become visible.", FlaskConical], ["03", "In the system", "A future collection of products, ventures, and tools.", Layers3]];

export default function ProjectsPage() {
  return <section className="inner-page shell projects-page"><Reveal className="page-intro"><p className="eyebrow">Projects / 00</p><h1>Nothing here is finished <em>yet.</em></h1><p>Dyev will earn this page through shipped work, not promises.</p></Reveal><div className="project-states">{states.map(([number, title, text, Icon]) => { const StateIcon = Icon as typeof CircleDashed; return <Reveal key={number as string}><article><span>{number as string}</span><StateIcon aria-hidden="true" /><h2>{title as string}</h2><p>{text as string}</p></article></Reveal>; })}</div><Reveal><Link className="inline-link manifesto-link" href="/manifesto">Read the thinking behind it <ArrowRight aria-hidden="true" /></Link></Reveal></section>;
}
