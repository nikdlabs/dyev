import type { Metadata } from "next";
import { CopyEmail } from "@/components/site-shell";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Dyev about a product, idea, or problem worth solving.", alternates: { canonical: "/contact/" } };

export default function ContactPage() { return <section className="contact-new shell" data-reveal><div><p className="section-kicker">Contact Dyev</p><h1>Let’s talk about your idea.</h1><p>Tell us what you are trying to do or what feels harder than it should. A short email is enough to start.</p></div><div className="contact-method"><span>Email us</span><a href="mailto:hello@dyev.in">hello@dyev.in</a><CopyEmail /></div></section>; }
