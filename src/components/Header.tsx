"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  return <header className="site-header"><Link href="/" className="wordmark" aria-label="Majid Pourkazemi home">Majid<span>.</span></Link><nav aria-label="Main navigation"><Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Projects</Link><Link href="/qualifications/" aria-current={pathname.startsWith("/qualifications") ? "page" : undefined}>Qualifications</Link><Link href="/about/" aria-current={pathname.startsWith("/about") ? "page" : undefined}>About</Link><a href="mailto:majid.computing@gmail.com">Contact <span aria-hidden="true">↗</span></a></nav></header>;
}
