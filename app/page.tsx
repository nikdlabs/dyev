import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Box, Orbit, Sparkles, Waypoints } from "lucide-react";
import { Reveal } from "@/components/reveal";

const fields = [
  ["01", "Digital products", "Tools with a real job to do", Box],
  ["02", "New ventures", "Small starts with room to compound", Orbit],
  ["03", "Useful systems", "Better ways for people and work to move", Waypoints],
  ["04", "Experiments", "Questions worth making visible", Sparkles],
];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Image className="hero-image" src="/images/dyev-kinetic-hero.png" alt="A chrome and blue-glass structure moving forward" fill priority sizes="100vw" />
        <div className="hero-lines" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-copy">
          <p className="eyebrow">Independent studio / India</p>
          <h1 id="hero-title">Make the <em>next</em> thing real.</h1>
          <p>Dyev builds products, systems, ventures, and useful experiments from first question to working thing.</p>
          <Link className="button button-primary" href="#work">Enter the work <ArrowDown aria-hidden="true" /></Link>
        </div>
        <div className="hero-index" aria-hidden="true">18.5204 / 73.8567<br />BUILD / TEST / BECOME</div>
      </section>
      <div className="ticker" aria-label="Dyev principles"><div><span>Own the question</span><b>+</b><span>Build the system</span><b>+</b><span>Ship the object</span><b>+</b><span>Keep becoming</span><b>+</b><span>Own the question</span><b>+</b><span>Build the system</span></div></div>
      <section id="work" className="statement shell">
        <Reveal className="statement-grid"><div><p className="eyebrow">01 / A working point of view</p><h2>Not a holding page.<br />A starting signal.</h2></div><p>We turn restlessness into things with shape: software, businesses, media, tools, and whatever else earns its place in the world. The output matters. So does learning how to make it.</p></Reveal>
      </section>
      <section className="proof-section"><div className="proof-copy"><Reveal><p className="eyebrow">02 / The material of an idea</p><h2>Build a proof.<br />Then build a world around it.</h2><Link className="button button-secondary" href="/manifesto">Read the manifesto <ArrowRight aria-hidden="true" /></Link></Reveal></div><div className="proof-visual"><Image src="/images/dyev-prototypes.png" alt="Silver, blue and gold prototype objects on a technical workbench" fill sizes="(max-width: 900px) 100vw, 50vw" /><span>Prototypes are promises with edges.</span></div></section>
      <section className="fields shell"><Reveal><p className="eyebrow">03 / Fields of play</p><div className="field-list">{fields.map(([number, name, detail, Icon]) => { const FieldIcon = Icon as typeof Box; return <Link href="/projects" key={number as string} className="field-row"><span>{number as string}</span><strong>{name as string}</strong><em>{detail as string}</em><b><FieldIcon aria-hidden="true" /></b></Link>; })}</div></Reveal></section>
      <section className="bridge"><Image src="/images/dyev-bridge.png" alt="A luminous blue bridge across a midnight technical landscape" fill sizes="100vw" /><div className="bridge-shade" /><Reveal className="bridge-copy"><p className="eyebrow">04 / The long game</p><h2>Make the path before it is obvious.</h2><p>Momentum is not noise. It is the compound effect of deciding, building, learning, and going again.</p></Reveal><span className="bridge-index" aria-hidden="true">D/04</span></section>
      <section className="artifact shell"><Reveal><div><p className="eyebrow">05 / The Dyev object</p><h2>A place for unreasonable clarity.</h2><p>Every project begins with a small spark of intent. We give it structure, velocity, and somewhere useful to go.</p></div></Reveal><Reveal className="artifact-image"><Image src="/images/dyev-ribbon.png" alt="A blue ribbon passing through a metal frame around a gold core" width={900} height={1100} sizes="(max-width: 900px) 100vw, 42vw" /></Reveal></section>
      <section className="closing"><div className="closing-frame" aria-hidden="true" /><Reveal><p>Ideas do not become things<br />by staying <em>ideas.</em></p><a className="button button-light" href="mailto:hello@dyev.in">Say hello <ArrowUpRight aria-hidden="true" /></a></Reveal></section>
    </>
  );
}
