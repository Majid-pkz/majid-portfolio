import Link from "next/link";

export default function NotFound() {
  return <div className="page-intro not-found"><p className="eyebrow">404 · Outside the collection</p><h1>This exhibit<br />isn’t here.</h1><p className="intro-description">Return to the project gallery to explore the collection.</p><Link href="/">Back to projects →</Link></div>;
}
