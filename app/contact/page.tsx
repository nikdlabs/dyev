import type { Metadata } from "next";
import { CopyEmail } from "@/components/site-shell";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Dyev about a product, idea, or problem worth solving.", alternates: { canonical: "/contact/" } };

export default function ContactPage() { return <section className="contact-new shell" data-reveal><div><h1>Contact Dyev</h1><p>Tell me what you are working on, who it is for, and what is getting in the way. You can also ask about a product or a project in development. A short email is enough to start.</p></div><div className="contact-method"><a href="mailto:hello@dyev.in">hello@dyev.in</a><CopyEmail /></div></section>; }
