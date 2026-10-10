import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { SiteNav, SiteFooter } from '@/components/site-chrome'
import { areas, areaSlug, services } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return areas.map((a) => ({ area: areaSlug(a.name) }))
}

const find = (slug: string) => areas.find((a) => areaSlug(a.name) === slug)

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params
  const a = find(area)
  if (!a) return {}
  return {
    title: `${a.name} Landscaping, Lawn Care & Snow Removal | R.R Landscaping`,
    description: `${a.note} Landscaping, lawn care, garden beds and snow removal in ${a.name}, Ontario.`,
    keywords: [`${a.name} landscaping`, `${a.name} lawn care`, `${a.name} snow removal`, `landscaper ${a.name} Ontario`],
    alternates: { canonical: `/${area}` },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params
  const a = find(area)
  if (!a) notFound()
  const others = areas.filter((o) => o.name !== a.name)

  return (
    <main className="site-shell">
      <SiteNav />
      <section className="service-hero" style={{ backgroundImage: `url(${services[0].image})` }}>
        <div className="hero-overlay" />
        <div className="service-hero-content">
          <p className="eyebrow light">SERVING {a.name.toUpperCase()}</p>
          <h1>{a.name} Landscaping</h1>
          <p className="hero-copy">{a.note}</p>
          <Link className="button button-light" href="/#contact">Get a free quote <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="more-services">
        <p className="eyebrow">SERVICES IN {a.name.toUpperCase()}</p>
        <div className="more-grid">{services.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name} in {a.name}<ArrowRight size={15} /></Link>)}</div>
      </section>

      <section className="service-areas">
        <p className="eyebrow">NEARBY</p>
        <h2>We also serve <em>nearby.</em></h2>
        <p>R.R Landscaping looks after homes in {a.name} and across Windsor-Essex.</p>
        <div className="area-chips">{others.map((o) => <Link key={o.name} href={`/${areaSlug(o.name)}`}><span>{o.name}</span></Link>)}</div>
      </section>
      <SiteFooter />
    </main>
  )
}
