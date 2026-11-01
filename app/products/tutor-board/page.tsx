import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TutorIllustration } from "@/components/project-illustrations";

export const metadata: Metadata = { title: "Tutor Board", description: "Tutor Board is an education management platform in development for independent tutors and coaching centres.", alternates: { canonical: "/products/tutor-board/" } };

const teacherWork = [
  "Manage batches, classes, student profiles, and enrolment.",
  "Keep attendance, fee records, tests, and homework together.",
  "Share announcements and see activity across students and batches.",
];
const familyView = [
  "See attendance and test results.",
  "Check homework, fee information, and teacher announcements.",
  "Follow a student's progress without editing teacher records.",
];

export default function TutorBoardPage() {
  return <>
    <section className="project-detail-hero shell" data-reveal>
      <div className="project-detail-intro"><h1>Tutor Board</h1><p className="project-detail-subtitle">One workspace for independent educators.</p><span className="status-line status-building"><i /> In development · product validation</span><p>Tutor Board is a subscription-based education platform I am building for independent tutors, coaching centres, and small educational institutions. It aims to replace scattered records and manual follow-ups with one organised place to run daily work.</p><ul className="portfolio-tags" aria-label="Project categories"><li>SaaS</li><li>EdTech</li><li>Full-stack development</li></ul></div>
      <TutorIllustration />
    </section>
    <section className="project-story shell" data-reveal><h2>The problem</h2><div><p>Small education teams often use separate spreadsheets, notebooks, and chat messages for student records, fees, attendance, tests, and homework. The same information gets entered more than once, payment follow-ups can be missed, and parents may have little visibility into progress.</p><p>Tutor Board is designed to bring those routine tasks into one application while keeping the experience affordable for independent educators.</p></div></section>
    <section className="project-solution"><div className="shell project-solution-inner" data-reveal><h2>What Tutor Board is planned to do</h2><p>Teachers will manage the day-to-day information. Parents and students will have a mainly read-only view of the updates that matter to them.</p><div className="capability-panels"><div><h3>For teachers</h3><ul>{teacherWork.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>For parents and students</h3><ul>{familyView.map((item) => <li key={item}>{item}</li>)}</ul></div></div></div></section>
    <section className="project-story shell" data-reveal><h2>Product and technical approach</h2><div><p>The planned product is a responsive web application with different experiences for teachers, parents, and students. Teachers or coaching centres would subscribe; their students and parents would receive access without a separate subscription.</p><p>The design centres on shared educational records, clear roles, and support for multiple educators, classes, and batches. These are product goals while development and validation continue.</p></div></section>
    <section className="project-status shell" data-reveal><div><h2>Where it stands</h2><p>Tutor Board is in active development and product validation. It is not presented here as a finished service, and there is no public demo link yet.</p></div><div><h2>Where it could go</h2><p>The long-term goal is a practical operating platform that gives independent educators less admin work and gives families clearer updates about learning.</p></div></section>
    <section className="project-detail-footer shell" data-reveal><Link href="/products/">All products <ArrowRight aria-hidden="true" /></Link><Link href="/contact/">Ask about Tutor Board <ArrowRight aria-hidden="true" /></Link></section>
  </>;
}
