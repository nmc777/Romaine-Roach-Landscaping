import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowRight, Check } from 'lucide-react'
import { SiteNav, SiteFooter } from '@/components/site-chrome'
import { areas, areaList, services, serviceSeo } from '@/lib/site'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${serviceSeo[slug].title} | AI The Yard Guy`,
    description: `${service.copy} Serving ${areaList}.`,
    keywords: serviceSeo[slug].keywords,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()
  const seo = serviceSeo[slug]
  const others = services.filter((s) => s.slug !== slug)

  return (
    <main className="site-shell">
      <SiteNav />
      <section className="service-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="hero-overlay" />
        <div className="service-hero-content">
          <p className="eyebrow light">{service.kicker}</p>
          <h1>{service.name}</h1>
          <p className="hero-copy">{service.copy}</p>
          <Link className="button button-light" href="/#contact">Contact now <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="service-detail">
        <div>
          <p className="eyebrow">ABOUT THIS SERVICE</p>
          <h2>{seo.title.split(' in ')[0]}<br /><em>in Windsor-Essex.</em></h2>
        </div>
        <div className="service-detail-copy">
          <p>{service.intro}</p>
          <p>{service.body}</p>
          <p className="service-season">{service.season}</p>
          <h4>What is included</h4>
          <ul>{service.includes.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
        </div>
      </section>

      <section className="service-areas">
        <p className="eyebrow">WHERE WE WORK</p>
        <h2>{service.name} in <em>your neighbourhood.</em></h2>
        <p>We provide {service.name.toLowerCase()} across {areaList}, and nearby communities.</p>
        <div className="area-chips">{areas.map((a) => <span key={a.name}>{a.name}</span>)}</div>
      </section>

            <section className="faq-section service-faq">
        <p className="eyebrow">QUESTIONS</p>
        <h2>{service.name} <em>FAQs.</em></h2>
        <div className="faq-list">{seo.faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: seo.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
      </section>

      <section className="more-services">
        <p className="eyebrow">MORE SERVICES</p>
        <div className="more-grid">{others.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}<ArrowRight size={15} /></Link>)}</div>
      </section>
      <SiteFooter />
    </main>
  )
}
