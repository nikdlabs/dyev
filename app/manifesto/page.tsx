import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const lines = ["Curiosity needs consequences.", "Own the question long enough to make an answer useful.", "Make in public when it helps, and quietly when the work asks for quiet.", "Do not look large before doing something real.", "Build Dyev one clear decision at a time."];

export default function ManifestoPage() {
  return <section className="inner-page shell"><Reveal className="page-intro"><p className="eyebrow">A short manifesto</p><h1>Make a thing.<br />Learn from it.<br /><em>Repeat.</em></h1><p>This is the operating system behind every new Dyev direction.</p></Reveal><div className="manifesto-lines">{lines.map((line, index) => <Reveal key={line}><p><span>0{index + 1}</span>{line}</p></Reveal>)}</div><Link className="button button-secondary manifesto-link" href="/projects">See what is forming <ArrowRight aria-hidden="true" /></Link></section>;
}
