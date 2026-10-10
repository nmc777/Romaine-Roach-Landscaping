'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { services } from '@/lib/site'

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const close = () => { setMenuOpen(false); setServicesOpen(false) }

  return (
    <>
    <div className="top-bar">Proudly serving Windsor-Essex</div>
    <nav className="nav-wrap" aria-label="Main navigation">
      <Link className="brand" href="/" onClick={close} aria-label="AI The Yard Guy home"><span className="brand-mark">AI</span><span>THE YARD GUY</span></Link>
      <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        <div className={`services-menu ${servicesOpen ? 'services-menu-open' : ''}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
          <button className="services-menu-trigger" onClick={() => setServicesOpen(!servicesOpen)} aria-haspopup="true" aria-expanded={servicesOpen}>Services <ChevronDown size={13} /></button>
          <div className="services-dropdown" role="menu" aria-label="Landscaping services">
            {services.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} onClick={close} role="menuitem">{s.name}<ArrowRight size={13} /></Link>)}
          </div>
        </div>
        <Link href="/#story" onClick={close}>Our approach</Link>
        <Link href="/#areas" onClick={close}>Areas</Link>
        <Link href="/#contact" onClick={close}>Contact</Link>
        <Link className="nav-cta" href="/#contact" onClick={close}>Contact Now <ArrowRight size={15} /></Link>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
    </nav>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand"><div className="brand"><span className="brand-mark">AI</span><span>THE YARD GUY</span></div><p>Thoughtful landscaping for considered homes across Windsor-Essex.</p></div>
        <div className="footer-col"><h4>Services</h4>{services.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}</div>
        <div className="footer-col"><h4>Company</h4><Link href="/">Home</Link><Link href="/#story">Our approach</Link><Link href="/#areas">Areas we serve</Link><Link href="/#contact">Contact</Link></div>
        <div className="footer-col"><h4>Get in touch</h4><a href="mailto:hello@aitheyardguy.ca">hello@aitheyardguy.ca</a><span>Windsor-Essex, Ontario</span></div>
      </div>
      <div className="footer-bottom"><span className="footer-copy">© 2026 AI The Yard Guy</span><span className="footer-copy">Est. 2023</span></div>
    </footer>
  )
}
