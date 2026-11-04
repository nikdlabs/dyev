"use client";

import { useState } from "react";
import { Check, Copy, MessageCircle } from "lucide-react";
import styles from "@/app/products/tutor-board/feedback/feedback.module.css";

const feedbackUrl = "https://dyev.in/products/tutor-board/feedback";
const shareText = `Hi! Dyev is researching ways to make everyday tuition management easier for educators. If you teach students or manage a tuition/coaching centre, your feedback would be really helpful. You can read about the idea and choose a short survey here: ${feedbackUrl}`;
const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

export function FeedbackShareActions() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(feedbackUrl);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2500);
    } catch {
      setCopyState("failed");
    }
  }

  return <div className={styles.shareActions}><button className={`button button-primary ${styles.copyButton}`} type="button" onClick={copyLink}>{copyState === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}{copyState === "copied" ? "Link copied" : "Copy feedback page link"}</button><a className={styles.whatsappButton} href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Share on WhatsApp</a><span className={styles.copyStatus} role="status" aria-live="polite">{copyState === "failed" ? "Could not copy the link. Please try again." : copyState === "copied" ? "Link copied to clipboard." : ""}</span></div>;
}
