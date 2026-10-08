import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { projects, profile } from "@/lib/portfolio";

export default function HomePage() {
  return <><div className="page-intro"><p className="eyebrow">{profile.name} · Software development · Sydney</p><h1>A collection of practical<br className="desktop-break" /> web applications.</h1><p className="intro-description">From a useful idea to an application you can explore.</p><p className="intro-links"><Link href="/about/">Meet the developer <span aria-hidden="true">↗</span></Link><a href={`mailto:${profile.email}`}>Get in touch <span aria-hidden="true">↗</span></a></p></div><Carousel exhibits={projects} label="Project gallery" /><section className="portfolio-note"><p className="eyebrow">Behind the exhibits</p><h2>Practical projects. Continued learning.</h2><p>These applications bring together frontend development, APIs, databases, and deployment. The project stories explain the original work and recent improvements.</p><Link href="/qualifications/">Explore my qualifications <span aria-hidden="true">→</span></Link></section></>;
}
