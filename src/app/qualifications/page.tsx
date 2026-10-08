import type { Metadata } from "next";
import { Carousel } from "@/components/Carousel";
import { qualifications } from "@/lib/portfolio";

export const metadata: Metadata = { title: "Qualifications", description: "Majid Pourkazemi's completed IT degree, web development boot camp, and Certificate III in Information Technology." };

export default function QualificationsPage() {
  return <><div className="page-intro"><p className="eyebrow">Education &amp; qualifications</p><h1>The foundations<br className="desktop-break" /> behind the work.</h1><p className="intro-description">Formal study, practical web development training, and a habit of learning by building.</p></div><Carousel exhibits={qualifications} label="Qualifications gallery" /></>;
}
