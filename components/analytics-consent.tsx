"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./analytics-consent.module.css";

const storageKey = "dyev-analytics-choice";
type Choice = "loading" | "unset" | "accepted" | "declined" | "disabled";

function clearAnalyticsCookies() {
  for (const item of document.cookie.split(";")) {
    const name = item.trim().split("=")[0];
    if (!name.startsWith("_ga")) continue;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.dyev.in; SameSite=Lax`;
  }
}

export function AnalyticsConsent({ measurementId }: { measurementId: string }) {
  const [choice, setChoice] = useState<Choice>("loading");

  useEffect(() => {
    // Keep this GA4 property exclusive to the main Dyev hostname.
    if (window.location.hostname !== "dyev.in") {
      setChoice("disabled");
      return;
    }
    try {
      const saved = localStorage.getItem(storageKey);
      setChoice(saved === "accepted" || saved === "declined" ? saved : "unset");
    } catch {
      setChoice("unset");
    }
    const reopen = () => setChoice("unset");
    window.addEventListener("dyev:analytics-settings", reopen);
    return () => window.removeEventListener("dyev:analytics-settings", reopen);
  }, []);

  useEffect(() => {
    if (window.location.hostname !== "dyev.in" || choice !== "accepted" || document.getElementById("dyev-google-analytics")) return;

    const analyticsWindow = window as typeof window & { dataLayer?: unknown[][]; gtag?: (...args: unknown[]) => void };
    analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
    analyticsWindow.gtag = (...args: unknown[]) => analyticsWindow.dataLayer?.push(args);
    analyticsWindow.gtag("consent", "default", {
      analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
    });
    analyticsWindow.gtag("consent", "update", { analytics_storage: "granted" });
    analyticsWindow.gtag("js", new Date());
    analyticsWindow.gtag("config", measurementId);

    const script = document.createElement("script");
    script.id = "dyev-google-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }, [choice, measurementId]);

  function choose(next: "accepted" | "declined") {
    try { localStorage.setItem(storageKey, next); } catch { /* Choice still applies to this visit. */ }
    if (next === "declined" && document.getElementById("dyev-google-analytics")) {
      const analyticsWindow = window as typeof window & { gtag?: (...args: unknown[]) => void };
      analyticsWindow.gtag?.("consent", "update", { analytics_storage: "denied" });
      clearAnalyticsCookies();
      window.location.reload();
      return;
    }
    setChoice(next);
  }

  if (choice !== "unset") return null;

  return <aside className={styles.notice} aria-label="Analytics choice">
    <div><strong>Help us improve Dyev</strong><p>With your permission, we use Google Analytics to see which pages are useful. You can say no and still use the whole site. <Link href="/privacy/">Read our privacy notice</Link>.</p></div>
    <div className={styles.actions}><button type="button" onClick={() => choose("declined")}>No thanks</button><button type="button" onClick={() => choose("accepted")}>Allow analytics</button></div>
  </aside>;
}

export function AnalyticsSettings() {
  return <button className={styles.settingsButton} type="button" onClick={() => window.dispatchEvent(new Event("dyev:analytics-settings"))}>Change analytics choice</button>;
}
