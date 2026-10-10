export const areas = [
  { name: 'Windsor', note: 'From Walkerville and Riverside to South Windsor, we keep city lots and larger yards looking sharp.' },
  { name: 'Tecumseh', note: 'Reliable lawn care, beds and seasonal clean-ups for neighbourhoods across Tecumseh.' },
  { name: 'LaSalle', note: 'Tidy, dependable yard work for LaSalle homes, from new builds to established gardens.' },
  { name: 'Amherstburg', note: 'Gardens and lawns that suit Amherstburg properties, big and small.' },
  { name: 'Essex', note: 'Care for Essex town lots and the larger properties around it.' },
  { name: 'Kingsville', note: 'Landscaping and seasonal upkeep for homes across Kingsville and the lakeshore.' },
  { name: 'Leamington', note: 'Dependable service for Leamington homes and the surrounding countryside.' },
  { name: 'Lakeshore', note: 'Yard care for Lakeshore, Belle River and Stoney Point homeowners.' },
]

export const areaList = 'Windsor, Tecumseh, LaSalle, Amherstburg, Essex, Kingsville, Leamington, Lakeshore'

export type Service = {
  slug: string
  name: string
  kicker: string
  image: string
  copy: string
  intro: string
  includes: string[]
  body: string
  season: string
}

export const services: Service[] = [
  {
    slug: 'mulching', name: 'Mulching', kicker: 'Groundwork, refined',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=85',
    copy: 'A considered finish that protects your beds and sharpens every line.',
    intro: 'Fresh mulch is the quickest way to make a garden look finished. It also protects your plants, holds moisture through Windsor-Essex summers, and keeps weeds down.',
    includes: ['Bed edging and clean-up before mulching', 'Weed removal', 'Even spreading at the right depth', 'Careful placement around plants, trees and borders', 'Tidy-up of walkways and driveways when we leave'],
    body: 'We prepare each bed properly before the mulch goes down, so the result looks crisp and lasts. Whether you have a single front bed or a whole property of gardens, we keep the lines clean and the finish even.',
    season: 'Best in spring, with a refresh in fall.',
  },
  {
    slug: 'garden-building', name: 'Garden Building', kicker: 'Spaces that belong',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=85',
    copy: 'Purposeful outdoor rooms built for long lunches, late evenings, and quiet mornings.',
    intro: 'We design and build garden beds and outdoor spaces that suit how you actually use your yard, and that are straightforward to look after.',
    includes: ['Planning the layout with you', 'Bed shaping and soil preparation', 'Planting and placement', 'Edging and finishing', 'Advice on keeping it healthy'],
    body: 'From a first new bed to a full front-yard refresh, we start with a conversation about your space, your sun and your budget. Then we do the work carefully and leave the site clean.',
    season: 'Most projects run from spring through early fall.',
  },
  {
    slug: 'lawn-cutting', name: 'Lawn Cutting', kicker: 'The weekly ritual',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=85',
    copy: 'A meticulous cut and clean edge, delivered with the same care every time.',
    intro: 'A regular cut keeps your lawn thick, even and healthy. We show up when we say we will, and the lawn looks right when we leave.',
    includes: ['Mowing at the correct height', 'Trimming along fences, beds and structures', 'Clean edging along walks and driveways', 'Blowing clippings off hard surfaces', 'Weekly or bi-weekly visits'],
    body: 'Consistent care matters more than anything else for a good lawn. We keep a steady schedule so you never have to think about it.',
    season: 'Regular visits from spring through late fall.',
  },
  {
    slug: 'sod-installation', name: 'Sod Installation', kicker: 'Instant composure',
    image: 'https://images.unsplash.com/photo-1599685315640-5b6c5ccf5e0e?auto=format&fit=crop&w=1600&q=85',
    copy: 'Fresh, seamless turf installed with an eye for healthy roots and lasting colour.',
    intro: 'New sod gives you a full, green lawn in a day. Getting the preparation right is what makes it take root and last.',
    includes: ['Removing old turf and debris', 'Grading and soil preparation', 'Laying sod with tight, staggered seams', 'Rolling for good soil contact', 'Watering guidance to help it establish'],
    body: 'We handle the whole job, from clearing the area to laying the final piece. We leave you with clear instructions so your new lawn gets the best start.',
    season: 'Best in spring and early fall, when it is cooler.',
  },
  {
    slug: 'snow-shoveling', name: 'Snow Shoveling', kicker: 'Winter, handled',
    image: 'https://images.unsplash.com/photo-1548777123-5dbe8a4f7a3e?auto=format&fit=crop&w=1600&q=85',
    copy: 'Quiet, dependable clearing that keeps your home welcoming through every storm.',
    intro: 'When the snow falls, we clear your driveway, walkways and steps so you can get out safely and your home stays welcoming.',
    includes: ['Driveway and walkway clearing', 'Steps and entrances', 'Clear paths to your door and mailbox', 'Reliable response after snowfall', 'Seasonal or per-visit options'],
    body: 'Winter in Windsor-Essex can change quickly. We keep an eye on the forecast so your property is looked after when you need it most.',
    season: 'Winter, after snowfall.',
  },
]

export type Faq = { q: string; a: string }

// Keywords chosen from Local Falcon research: strong volume with manageable difficulty.
export const serviceSeo: Record<string, { title: string; keywords: string[]; faqs: Faq[] }> = {
  mulching: {
    title: 'Mulching & Yard Cleanup in Tecumseh and Windsor-Essex',
    keywords: ['landscaping services Tecumseh ON', 'yard cleanup services', 'mulching Windsor-Essex'],
    faqs: [
      { q: 'Do you offer reliable yard cleanup services in Tecumseh and nearby?', a: 'Yes. We clear beds, remove weeds and debris, and edge borders before we mulch, then leave your property tidy. We serve Tecumseh, Windsor, LaSalle, Lakeshore and the surrounding area.' },
      { q: 'When is the best time to mulch in Windsor-Essex?', a: 'Spring is the most popular time, once beds are cleaned up. A fall top-up helps protect plants through winter.' },
    ],
  },
  'garden-building': {
    title: 'Garden Design, Planting & Backyard Renovation in Windsor-Essex',
    keywords: ['garden design and planting', 'backyard renovation Windsor-Essex', 'landscaper for backyard patio Tecumseh'],
    faqs: [
      { q: 'Who is the best landscaper in Tecumseh for a backyard makeover?', a: 'We plan every garden around how you actually use your space, and our customers consistently mention our communication, tidiness and fair pricing in their verified Facebook reviews. Tell us about your yard and we will talk through what is possible.' },
      { q: 'Do you handle backyard renovation across Windsor-Essex?', a: 'Yes. We design and build garden beds and planted outdoor spaces across Windsor-Essex, from Tecumseh to Kingsville and Leamington.' },
      { q: 'Can you help improve my home’s curb appeal?', a: 'Yes. Fresh beds, clean edging, healthy planting and a well-kept lawn are the fastest ways to lift curb appeal. We can suggest a plan that suits your home and budget.' },
    ],
  },
  'lawn-cutting': {
    title: 'Lawn Care & Maintenance in Tecumseh and Windsor-Essex',
    keywords: ['lawn care maintenance', 'affordable lawn mowing Tecumseh', 'lawn mowing Windsor-Essex'],
    faqs: [
      { q: 'Who does affordable lawn mowing in Tecumseh, ON?', a: 'We offer fair, straightforward pricing for weekly and bi-weekly lawn care in Tecumseh and across Windsor-Essex. Contact us for a quote.' },
      { q: 'What does your lawn care maintenance include?', a: 'Mowing at the right height, trimming along fences and beds, clean edging, and blowing clippings off hard surfaces.' },
    ],
  },
  'sod-installation': {
    title: 'Sod Installation Near You in Windsor-Essex',
    keywords: ['sod installation near me', 'sod installation Tecumseh', 'new lawn Windsor-Essex'],
    faqs: [
      { q: 'Do you offer sod installation near me?', a: 'If you are in Windsor-Essex, probably yes. We install sod in Tecumseh, Windsor, LaSalle, Amherstburg, Essex, Kingsville, Leamington and Lakeshore.' },
      { q: 'When is the best time to install sod?', a: 'Spring and early fall are ideal because cooler temperatures help new sod root well.' },
    ],
  },
  'snow-shoveling': {
    title: 'Snow Removal & Shoveling in Tecumseh and Windsor-Essex',
    keywords: ['landscaping company that does snow removal in winter', 'snow shoveling Tecumseh', 'snow removal Windsor-Essex'],
    faqs: [
      { q: 'Which landscaping companies also do snow removal in winter?', a: 'We do. The same crew that looks after your yard in summer clears your driveway, walkways and steps after snowfall.' },
      { q: 'Do you offer seasonal or per-visit snow clearing?', a: 'We offer both. Contact us to discuss which option suits your property.' },
    ],
  },
}

export const whyUs: Faq[] = [
  { q: 'Why are we the best landscaper in Windsor-Essex?', a: 'We keep it simple: we show up when we say we will, communicate clearly, price fairly and leave every property tidy. Our customers say so themselves in their verified Facebook reviews, which describe us as professional, punctual, and easy to work with.' },
  { q: 'What landscaping services do you offer in Tecumseh, ON?', a: 'Lawn care and maintenance, mulching, garden design and planting, sod installation, yard cleanup and winter snow removal, all from a single local team.' },
  { q: 'Who does affordable lawn mowing in Tecumseh and Windsor-Essex?', a: 'We do. Our lawn care is fairly priced, reliable, and carried out with the same care every visit.' },
  { q: 'Do you offer landscaping companies’ one-stop service, including snow removal in winter?', a: 'Yes. One company handles your yard from first thaw to first frost, and clears your snow in between.' },
  { q: 'How can I improve my home’s curb appeal in Tecumseh?', a: 'Start with a clean lawn edge, fresh mulch and healthy planting. Those three things make the biggest difference for the least effort. We can do all of them.' },
  { q: 'Which areas do you serve?', a: 'Tecumseh, Windsor, LaSalle, Amherstburg, Essex, Kingsville, Leamington, Lakeshore and the communities around them.' },
]

// Swap these for your Google Business Profile map (Share > Embed a map) to pin your exact listing.
export const MAP_QUERY = 'Tecumseh, Ontario'
export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=10&output=embed`
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`
