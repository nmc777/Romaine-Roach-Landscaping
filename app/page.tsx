'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SiteNav, SiteFooter } from '@/components/site-chrome'
import { areas, areaList, services, whyUs, MAP_EMBED, MAP_LINK } from '@/lib/site'
import { ArrowRight, CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3, Leaf, Menu, MessageCircle, Send, Snowflake, Sparkles, X } from 'lucide-react'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const dates = Array.from({ length: 35 }, (_, i) => i - 1)
const times = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM']
const reviews = [
  { name: 'Bea Miller', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2HSbWlikWAn2RjgM6KgQi6N8n3TYAi.png', quote: 'Amir, you go all out to please. You are very professional, amiable, have fair pricing, and leave everything so tidy.', meta: 'Verified Facebook review' },
  { name: 'Barb Gatehouse', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HG06lNaHdD8DtAVz71YNtUiAu3hAFJ.png', quote: 'Amir is amazing. Good work ethic, prompt with quote and appointment, super communication and very easy to work with.', meta: 'Verified Facebook review' },
  { name: 'Bob Smith', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uEa4OjbX4tg4CASOjTXEFMfloSfEZ4.png', quote: 'Amir did a great job cleaning up our gardens and yard. Excellent communication, punctual and quality work.', meta: 'Verified Facebook review' },
  { name: 'MaryAnne Buckland', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mq82EIw34GSTIPNBGHfBATFHtk6rL2.png', quote: 'You took what I thought was an impossible situation and turned it into a beautiful blank canvas. Your work ethic and love of your job are evident.', meta: 'Verified Facebook review' },
  { name: 'Sara Esmat', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tG8q8N790tvZsC5g0XYnxlnjKSF0Gf.png', quote: 'Very professional, helpful and honest. He always does more than required. Trustworthy.', meta: 'Verified Facebook recommendation' },
]

export default function Page() {
  const [selectedDate, setSelectedDate] = useState(12)
  const [selectedTime, setSelectedTime] = useState('10:30 AM')
  const [reviewStart, setReviewStart] = useState(0)
  const [chatOpen, setChatOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="site-shell">
      <SiteNav />

      <section id="top" className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">LANDSCAPING, CONSIDERED</p>
          <h1>Outside,<br /><em>elevated.</em></h1>
          <p className="hero-copy">Landscaping, lawn care and snow removal for Tecumseh and homes across Windsor-Essex.</p>
          <button className="button button-light" onClick={() => scrollTo('services')}>Explore our services <ArrowRight size={17} /></button>
        </div>
        <div className="hero-note"><span>Serving Windsor-Essex</span><span className="hero-line" /><span>Est. 2023</span></div>
      </section>

      <section className="services-section" id="services">
                <div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>Work worth<br /><em>coming home to.</em></h2></div><p className="section-aside">From first thaw to first frost, we make the outside of your home feel looked after.</p></div>
        <div className="service-grid">{services.map((service, index) => <article className={`service-card service-${index}`} key={service.name} style={{ backgroundImage: `url(${service.image})` }}><Link className="service-link" href={`/services/${service.slug}`} aria-label={service.name} /><div className="service-shade" /><div className="service-content"><span /><div><p className="eyebrow light">{service.kicker}</p><h3>{service.name}</h3><p className="service-copy">{service.copy}</p><Link className="circle-arrow" aria-label={`Learn more about ${service.name}`} href={`/services/${service.slug}`}><ArrowRight size={18} /></Link></div></div></article>)}</div>
      </section>

      <section className="story-section" id="story" aria-labelledby="story-heading">
        <div className="story-photo" role="img" aria-label="A freshly cut, striped lawn" />
        <div className="story-panel">
          <p className="eyebrow light">OUR APPROACH</p>
          <h2 id="story-heading">Rooted in<br /><em>the community.</em></h2>
          <p className="story-lead">For more than five years, AI The Yard Guy has helped neighbours across Windsor-Essex feel proud of where they live.</p>
          <p className="story-body">From the first tidy-up of spring to the last snowfall of winter, we bring dependable care, honest communication, and a sharp eye for the details that make an outdoor space feel like yours.</p>
          <div className="story-stats"><div><strong>5+</strong><span>Years serving our community</span></div><div><strong>100%</strong><span>Care in every visit</span></div></div>
          <Link className="button button-light" href="/#contact">Get a free quote <ArrowRight size={17} /></Link>
        </div>
      </section>

            <section className="areas-section" id="areas" aria-labelledby="areas-heading">
        <div className="areas-grid">
          <div><p className="eyebrow">AREAS WE SERVE</p><h2 id="areas-heading">Proudly local to<br /><em>Windsor-Essex.</em></h2></div>
          <div className="areas-copy"><p>AI The Yard Guy is a local landscaping and yard care company serving homeowners across Windsor-Essex. We work in {areaList}, and the communities in between.</p><p>Being local means we know the area: the soil, the seasons, and the lake-effect weather that shapes how a yard should be looked after. If you are not sure whether we cover your street, just ask.</p></div>
        </div>
        <div className="areas-list">{areas.map((a) => <div className="area-card" key={a.name}><h3>{a.name}</h3><p>{a.note}</p></div>)}</div>
              <div className="map-wrap"><iframe title="AI The Yard Guy service area map, Tecumseh and Windsor-Essex" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a className="map-link" href={MAP_LINK} target="_blank" rel="noopener noreferrer">Open in Google Maps <ArrowRight size={14} /></a></div>
      </section>

      <section className="reviews-section" aria-labelledby="reviews-heading">
        <div className="reviews-heading"><div><p className="eyebrow">WORD OF MOUTH</p><h2 id="reviews-heading">Good work<br /><em>travels.</em></h2></div></div>
        <div className="reviews-viewport"><div className="reviews-track" style={{ transform: `translateX(calc(-${reviewStart} * (33.333% + 7px))` }}>{reviews.map((review) => <article className="review-card" key={review.name}><div className="review-image"><img src={review.image} alt={`${review.name}'s Facebook review`} /></div></article>)}</div></div><div className="review-controls"><button onClick={() => setReviewStart(Math.max(0, reviewStart - 1))} disabled={reviewStart === 0} aria-label="Previous reviews"><ChevronLeft size={18} /></button><span>{String(reviewStart + 1).padStart(2, '0')} — {String(Math.min(reviewStart + 3, reviews.length)).padStart(2, '0')}</span><button onClick={() => setReviewStart(Math.min(reviews.length - 3, reviewStart + 1))} disabled={reviewStart >= reviews.length - 3} aria-label="Next reviews"><ChevronRight size={18} /></button></div>
      </section>

            <section className="faq-section" id="why-us" aria-labelledby="why-heading">
        <div className="faq-grid">
          <div><p className="eyebrow">WHY CHOOSE US</p><h2 id="why-heading">Why we&apos;re the best<br /><em>in Windsor-Essex.</em></h2><p className="faq-lead">Landscaping, lawn care and snow removal for Tecumseh, Windsor and the whole county, done properly.</p></div>
          <div className="faq-list">{whyUs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: whyUs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy"><p className="eyebrow light">LET&apos;S TALK</p><h2>Your best season<br /><em>starts here.</em></h2><p>Tell us a little about your space. We&apos;ll take it from there.</p><div className="contact-details"><span>hello@aitheyardguy.ca</span><span>Windsor-Essex, Ontario</span></div></div>
        <div className="booking-card"><div className="booking-top"><div><p className="eyebrow">CONTACT NOW</p><h3>Choose a time</h3></div><CalendarDays size={22} /></div><div className="booking-month"><button aria-label="Previous month"><ChevronLeft size={16} /></button><strong>October 2026</strong><button aria-label="Next month"><ChevronRight size={16} /></button></div><div className="weekdays">{days.map(day => <span key={day}>{day}</span>)}</div><div className="calendar-grid">{dates.map((date, i) => date < 1 || date > 31 ? <span key={i} className="empty-date" /> : <button key={i} className={`date-cell ${date === selectedDate ? 'selected' : ''} ${[3, 8, 17, 24].includes(date) ? 'unavailable' : ''}`} onClick={() => setSelectedDate(date)} disabled={[3, 8, 17, 24].includes(date)}>{date}</button>)}</div><div className="time-title"><Clock3 size={15} /> Available times</div><div className="time-grid">{times.map(time => <button key={time} className={time === selectedTime ? 'time-selected' : ''} onClick={() => setSelectedTime(time)}>{time}</button>)}</div><button className="button button-dark booking-button" onClick={() => alert(`Dummy booking held for October ${selectedDate}, 2026 at ${selectedTime}.`)}>Continue <ArrowRight size={16} /></button><p className="dummy-note">Demo calendar · no real booking will be made</p></div>
      </section>

      <section className="quote-section"><div className="quote-mark">“</div><blockquote>It is not about making a yard look perfect. It is about making it feel like yours.</blockquote><p>— AI THE YARD GUY</p></section>

      <SiteFooter />

      <button className="chat-trigger" onClick={() => setChatOpen(!chatOpen)} aria-label="Open chat"><MessageCircle size={21} /></button>
      {chatOpen && <div className="chat-window"><div className="chat-head"><div><strong>AI The Yard Guy</strong><span>Usually replies instantly</span></div><button onClick={() => setChatOpen(false)} aria-label="Close chat"><X size={17} /></button></div><div className="chat-body"><div className="chat-bubble">Hi there. How can we help make your outdoor space feel more like you?</div>{sent && <div className="chat-bubble user-bubble">{message}</div>}</div><div className="chat-compose"><input value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229 && message.trim()) { setSent(true); setMessage('') } }} placeholder="Type a message..." aria-label="Chat message" /><button onClick={() => { if (message.trim()) { setSent(true); setMessage('') } }} aria-label="Send message"><Send size={16} /></button></div></div>}
    </main>
  )
}
