import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  ClipboardList,
  Clock3,
  Files,
  IndianRupee,
  MessageCircle,
  Users,
  Wallet,
  Eye,
} from "lucide-react";
import { FeedbackShareActions } from "@/components/feedback-share-actions";
import styles from "./feedback.module.css";

const pageUrl = "https://dyev.in/products/tutor-board/feedback";
const pageTitle = "Tutor Board Feedback | Help Shape Better Tuition Management — Dyev";
const pageDescription = "Are you a tutor or coaching centre owner? Share your experience and help Dyev explore simpler ways to manage attendance, fees, students, homework, and parent communication.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/products/tutor-board/feedback/" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Dyev",
    type: "website",
    images: [{ url: "/images/dyev/hero-ribbon.jpg", width: 1448, height: 1086, alt: "Dyev blue brand illustration" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/images/dyev/hero-ribbon.jpg"] },
};

const challenges = [
  { icon: Files, title: "Scattered student records", description: "Student details, attendance, marks, and fees may be kept in different places." },
  { icon: Wallet, title: "Manual fee follow-ups", description: "Checking what is paid, what is pending, and who needs a reminder takes time." },
  { icon: MessageCircle, title: "Repeated parent messages", description: "Homework, results, attendance, and updates often need separate messages." },
  { icon: CalendarDays, title: "Managing more batches", description: "Schedules and student information become harder to organise as classes grow." },
  { icon: BarChart3, title: "Limited progress visibility", description: "Without consistent records, it is harder to see how a student is doing over time." },
  { icon: Clock3, title: "Time lost to admin", description: "Small daily tasks add up and take attention away from teaching." },
];

const capabilities = [
  { icon: Users, title: "Students and batches", description: "Keep student details and class groups organised." },
  { icon: ClipboardList, title: "Attendance", description: "Record and review attendance in one place." },
  { icon: IndianRupee, title: "Fees and payments", description: "See paid and pending fees with clearer records." },
  { icon: BarChart3, title: "Tests and progress", description: "Keep marks together and follow academic progress." },
  { icon: BookOpen, title: "Homework and updates", description: "Share assignments and important announcements." },
  { icon: Eye, title: "Family access", description: "Let parents and students view relevant information." },
];

const surveys = [
  {
    title: "Independent tutors and small tuition centres",
    audience: "For individual tutors, home and online teachers, and small centre owners or teachers.",
    topics: "Students, attendance, fees, homework, parent communication, and everyday challenges.",
    action: "Take survey — independent tutors",
    href: "https://forms.gle/DLrRbfxhXNTEQgmw6",
    featured: true,
  },
  {
    title: "Medium coaching centres",
    audience: "For owners, administrators, and teaching teams managing multiple batches or teachers.",
    topics: "Schedules, teacher coordination, fee collection, reporting, and software needs.",
    action: "Take survey — coaching centres",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdUoHtgyrkt7hKJv8hpEdyX1z1ERkgrhtsSv6d89NTt_0PVjg/viewform",
    featured: false,
  },
  {
    title: "Large institutes and tutor networks",
    audience: "For larger institutes, multi-branch providers, tutor networks, and decision-makers.",
    topics: "Coordination, reporting, existing systems, integrations, and organisational challenges.",
    action: "Take survey — institutes and networks",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSccTJ8cG8ez93JqfNwC9SUkxCpJ8r26upDNnFe4fd1ksO3hoQ/viewform",
    featured: false,
  },
];

export default function TutorBoardFeedbackPage() {
  return <div className={styles.page}>
    <section className={`${styles.hero} shell`} data-reveal>
      <div className={styles.heroCopy}>
        <h1>Helping tutors teach more and manage less.</h1>
        <p className={styles.heroLead}>We&apos;re exploring a simpler way to manage students, attendance, fees, homework, tests, and parent updates in one place.</p>
        <p className={styles.heroSupport}>Before building further, we want to hear from the educators who handle these tasks every day. Whether you teach a few students or manage a coaching institute, your experience can help shape Tutor Board.</p>
        <div className={styles.heroActions}><a className="button button-primary" href="#surveys">Share your feedback <ArrowRight aria-hidden="true" /></a><a className={styles.textAction} href="#vision">Explore the idea <ArrowDown aria-hidden="true" /></a></div>
        <p className={styles.trustNote}>Free survey <span aria-hidden="true">·</span> Around 5 minutes <span aria-hidden="true">·</span> No purchase or commitment</p>
      </div>
      <div className={styles.heroVisual} aria-hidden="true">
        <div className={`${styles.visualNote} ${styles.noteOne}`}><ClipboardList /><span>Attendance register</span></div>
        <div className={`${styles.visualNote} ${styles.noteTwo}`}><IndianRupee /><span>Fee records</span></div>
        <div className={`${styles.visualNote} ${styles.noteThree}`}><MessageCircle /><span>Parent updates</span></div>
        <div className={styles.visualCentre}><span>Tutor Board</span><strong>One clearer place for daily work</strong><i /></div>
      </div>
    </section>

    <section className={styles.problemSection}>
      <div className="shell">
        <div className={styles.sectionIntro} data-reveal><h2>Teaching is already a full-time job. Managing everything else shouldn&apos;t be.</h2><p>Teaching also means keeping records, collecting fees, setting homework, and staying in touch with parents. Many tutors do this across notebooks, spreadsheets, and messages. These methods can work, but the work gets harder as classes grow.</p></div>
        <div className={styles.challengeGrid}>{challenges.map(({ icon: Icon, title, description }) => <article className={styles.challenge} key={title} data-reveal><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div>
        <p className={styles.problemClose} data-reveal>Educators deserve tools that make these responsibilities easier without adding more complexity.</p>
      </div>
    </section>

    <section className={styles.visionSection} id="vision"><div className="shell">
      <div className={styles.visionIntro} data-reveal><h2>One simple place for everyday tuition management.</h2><div><p>Imagine starting your day with a clear view of classes, students, pending fees, homework, and important updates.</p><p>Tutor Board aims to bring those essentials into one organised workspace that works on mobile and desktop.</p></div></div>
      <div className={styles.capabilityGrid}>{capabilities.map(({ icon: Icon, title, description }) => <article className={styles.capability} key={title} data-reveal><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div>
      <p className={styles.visionNote} data-reveal><strong>Still being shaped:</strong> These are proposed capabilities. Educator feedback will help decide what matters most, and the plan may change.</p>
    </div></section>

    <section className={styles.futureSection}><div className={`${styles.futureInner} shell`} data-reveal><div><h2>Modern tools should make teaching simpler, not harder.</h2><p>Independent tutors and small centres should be able to benefit from useful digital tools too. The first goal is clear information, less repeated admin work, and better communication.</p></div><div className={styles.futureAside}><p>Over time, we may explore helpful automation and AI for routine tasks and progress summaries. These are future possibilities, not features available today.</p><strong>Technology should support the teacher. The teacher remains at the centre of learning.</strong></div></div></section>

    <section className={`${styles.surveySection} shell`} id="surveys">
      <div className={styles.surveyIntro} data-reveal><h2>Your experience can help us build the right solution.</h2><p>We&apos;re inviting tutors and education providers across India to tell us what works, what takes too much time, and what they would improve. Choose the survey that best matches your teaching setup.</p></div>
      <p className={styles.surveyGuidance} data-reveal>Please complete the survey that best matches your role. If you work across different types of education organisations, choose the closest fit.</p>
      <div className={styles.surveyGrid}>{surveys.map((survey) => <article className={`${styles.surveyCard}${survey.featured ? ` ${styles.surveyFeatured}` : ""}`} key={survey.title} data-reveal><div><h3>{survey.title}</h3><p>{survey.audience}</p><p className={styles.surveyTopics}><strong>We&apos;ll ask about:</strong> {survey.topics}</p></div><a href={survey.href} target="_blank" rel="noopener noreferrer">{survey.action} <ArrowUpRight aria-hidden="true" /></a></article>)}</div>
      <p className={styles.externalNote}>Each survey opens in a new tab as a Google Form. You do not need a Dyev account.</p>
    </section>

    <section className={styles.processSection}><div className="shell">
      <div className={styles.processIntro} data-reveal><h2>What will we do with your feedback?</h2><p>We&apos;ll use responses to understand real workflows before making product decisions.</p></div>
      <div className={styles.processList}><div data-reveal><span>01</span><h3>Listen</h3><p>Understand the challenges educators face in daily work.</p></div><div data-reveal><span>02</span><h3>Learn</h3><p>See which problems matter most and how educators solve them now.</p></div><div data-reveal><span>03</span><h3>Build thoughtfully</h3><p>Use those insights to guide priorities, design, and future improvements.</p></div></div>
      <p className={styles.privacyNote} data-reveal>Survey responses are for product research. If you choose to share contact information, it may be used to follow up about your feedback or future product evaluation. Taking part does not create any purchase obligation.</p>
    </div></section>

    <section className={`${styles.shareSection} shell`} data-reveal><div><h2>Know a tutor or coaching centre owner?</h2><p>Different teaching styles and class sizes bring different challenges. Please share this page with an educator whose experience could help shape Tutor Board.</p></div><FeedbackShareActions /></section>

    <section className={`${styles.closingSection} shell`} data-reveal><h2>Let&apos;s build something that helps educators.</h2><p>We&apos;re still learning. Your feedback can help us focus on the problems that matter most.</p><a className="button button-primary" href="#surveys">Share your experience <ArrowRight aria-hidden="true" /></a><div className={styles.closingLinks}><span>Tutor Board is a product initiative by Dyev.</span><Link href="/products/tutor-board/">About Tutor Board <ArrowRight aria-hidden="true" /></Link><Link href="/">Dyev home <ArrowRight aria-hidden="true" /></Link></div></section>
  </div>;
}
