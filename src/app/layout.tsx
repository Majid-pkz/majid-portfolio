import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { profile } from "@/lib/portfolio";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined)
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Majid Pourkazemi | Software Development Portfolio", template: "%s | Majid Pourkazemi" },
  description: "Explore Majid Pourkazemi's software development projects, qualifications, and practical experience. React, Next.js, TypeScript, GraphQL, and live API applications.",
  authors: [{ name: profile.name }],
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Majid Pourkazemi | Software Development Portfolio", description: "A collection of practical web applications, presented in a contemporary museum gallery.", type: "website", images: [{ url: "/social-cover.png", width: 1200, height: 630, alt: "Majid Pourkazemi software development portfolio" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><div className="portfolio-shell"><Header /><main id="main">{children}</main><footer className="site-footer"><div><span className="footer-name">{profile.name}</span><span>{profile.role} · Sydney</span></div><nav aria-label="Social links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><Link href="/about/">Background</Link></nav></footer></div></body></html>;
}
