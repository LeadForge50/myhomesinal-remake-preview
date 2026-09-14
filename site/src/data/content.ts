export const AGENT = {
  name: 'Ashley Stedham Mitchell',
  title: 'REALTOR®',
  brokerage: 'ERA King Real Estate',
  phone: '256-689-2688',
  phoneDisplay: '(256) 689-2688',
  phoneTel: 'tel:2566892688',
  phoneSms: 'sms:2566892688',
  email: 'ashley@eraking.com',
  listingsUrl: 'https://www.liveinalabama.com/listing/listingsearch.aspx?clear=1',
  listingsLabel: 'Alabama Home Search',
} as const

export const SOCIAL = {
  instagramUrl: '',
  facebookUrl: '',
} as const

export const AREAS = [
  {
    name: 'Calhoun County',
    blurb: 'Anniston, Oxford & Jacksonville — hometown living with JSU energy',
  },
  {
    name: 'Cleburne County',
    blurb: 'Heflin & Cheaha — mountain views, acreage, and small-town pace',
  },
  {
    name: 'Cherokee County',
    blurb: 'Centre, Cedar Bluff & Weiss Lake fishing retreats',
  },
  {
    name: 'Talladega County',
    blurb: 'Lincoln & Talladega — Honda-corridor commuting and racing heritage',
  },
  {
    name: 'St. Clair County',
    blurb: 'Pell City & Logan Martin — docks, weekends, and easy I-20 access',
  },
] as const

export const LAKES = [
  {
    name: 'Logan Martin Lake',
    blurb: 'Ski lakes, weekend docks, and year-round waterfront homes in St. Clair County.',
  },
  {
    name: 'Weiss Lake',
    blurb: 'Fishing capital vibes — calm mornings and Cherokee County retreats.',
  },
  {
    name: 'Coosa River',
    blurb: 'River lots, acreage, and quiet East Alabama escapes.',
  },
] as const

export const CREDENTIALS = [
  'Certified Home Stager',
  'ERA Marketing Excellence Award Winner 2025',
  'ERA Cre@tor',
] as const

export const COUNTIES = AREAS.map((area) => area.name)

/** Compact “areas served” line for banners, contact cards, and footers. */
export const COUNTIES_SHORT = 'Calhoun · Cleburne · Cherokee · Talladega · St. Clair'

export const COUNTIES_PROSE = 'Calhoun, Cleburne, Cherokee, Talladega, and St. Clair counties'

export type FaqItem = { q: string; a: string }

export const FAQ_HOME_BASICS: FaqItem[] = [
  {
    q: 'Do you help both buyers and sellers?',
    a: 'Yes. From first-time buyers and relocating families to sellers who want a staged, top-dollar launch — Ashley guides both sides of the transaction with clear communication.',
  },
  {
    q: 'How do I search current listings?',
    a: 'Use Search Listings (Alabama Home Search) in the navigation to browse live Greater Alabama MLS inventory. Prefer a curated shortlist? Reach out and Ashley will send options that match your goals.',
  },
  {
    q: 'Is there a fee for a consultation?',
    a: 'An initial conversation is complimentary. Call, text, or use the contact form — no pressure, just honest guidance.',
  },
]

export const FAQ_BUYERS: FaqItem[] = [
  {
    q: 'How do I get started as a buyer?',
    a: 'Start with a complimentary consult: share your budget, must-haves, and timeline. Ashley will help you get loan-ready, then tour with purpose across East Alabama — not every open house in a 40-mile radius.',
  },
  {
    q: 'Do I need a pre-approval before we tour?',
    a: 'A pre-approval from a trusted local lender turns you into a serious buyer and clarifies monthly payment. Ashley can introduce lenders who know East Alabama products, then help you interpret offers so you’re not guessing under pressure.',
  },
  {
    q: 'Will you help me compare neighborhoods?',
    a: 'Yes. Calhoun County (Anniston, Oxford, Jacksonville) often balances shopping, character homes, and university-town living. Cleburne County around Heflin brings Cheaha and acreage. Cherokee County is Weiss Lake and quieter waterfront. Talladega County (Lincoln and Talladega) fits Honda-corridor commuters. St. Clair County offers Logan Martin docks and Pell City access. Ashley helps you match the county to year-three living, not just the first showing.',
  },
  {
    q: 'How do I search current listings?',
    a: 'Browse live inventory on Greater Alabama MLS via Alabama Home Search (Search Listings in the nav). For a curated list — lake vs. in-town vs. land — text or email Ashley with your must-haves.',
  },
]

export const FAQ_SELLERS: FaqItem[] = [
  {
    q: 'What does Certified Home Stager mean for sellers?',
    a: 'Staging helps buyers see your home’s potential. Ashley advises on prep, presentation, and pricing strategy so your listing photographs and shows its best in East Alabama’s market — without a gut renovation.',
  },
  {
    q: 'Do I need a full remodel before listing?',
    a: 'Usually not. High-impact, practical prep — light, clutter, furniture flow, paint touch-ups, and curb appeal — often yields a stronger first impression than an expensive makeover.',
  },
  {
    q: 'How do you price a home in East Alabama?',
    a: 'Overpricing costs time and leverage; underpricing leaves money on the table. Ashley pairs local comps with current demand so your launch attracts serious buyers in the first critical weeks.',
  },
  {
    q: 'What does marketing include?',
    a: 'Professional presentation plus ERA King Real Estate reach across relocating families, lake seekers, and move-up buyers. You’ll get clear showing updates and advocacy from first offer through closing.',
  },
]

export const FAQ_AREAS: FaqItem[] = [
  {
    q: 'What areas do you serve?',
    a: 'Calhoun, Cleburne, Cherokee, Talladega, and St. Clair counties — plus waterfront communities on Logan Martin Lake, Weiss Lake, and the Coosa River. Towns like Anniston, Oxford, Jacksonville, Heflin, Centre, Lincoln, and Pell City sit inside those counties.',
  },
  {
    q: 'Do you work lake and land properties too?',
    a: 'Yes. Ashley helps with residential homes, acreage, and premier waterfront — from Logan Martin docks to Weiss Lake fishing retreats and Coosa River lots.',
  },
  {
    q: 'I’m relocating — can you help before I visit?',
    a: 'Absolutely. Expect honest area briefs, coordinated showings, and a shortlist so your trip (or virtual tour week) is efficient. Start with a call or the contact form even before your move date is firm.',
  },
]

export const FAQ_ABOUT: FaqItem[] = [
  {
    q: 'What credentials does Ashley hold?',
    a: 'Ashley is a Certified Home Stager, ERA Marketing Excellence Award Winner 2025, and ERA Cre@tor — recognition earned through client-centered work with ERA King Real Estate.',
  },
  {
    q: 'How does Ashley work with clients?',
    a: 'Expect straightforward communication, local market context, and respect for your timeline. Whether you’re relocating to Calhoun, Cleburne, Cherokee, Talladega, or St. Clair County — or listing a family home — the goal is a smooth process and a result you feel good about.',
  },
  {
    q: 'Is there a fee for a consultation?',
    a: 'An initial conversation is complimentary. Call, text, or use the contact form — no pressure, just honest guidance.',
  },
]

export const BUYER_STEPS = [
  {
    title: 'Clarify your goals',
    body: 'Budget, must-haves, commute, schools, lake access — we map what “home” means for you.',
  },
  {
    title: 'Get loan-ready',
    body: 'Connect with trusted local lenders so you can write competitive offers with confidence.',
  },
  {
    title: 'Tour with purpose',
    body: 'Targeted showings across Calhoun, Cleburne, Cherokee, Talladega, and St. Clair — not endless open houses.',
  },
  {
    title: 'Offer & negotiate',
    body: 'Strategy on price, contingencies, and timing so you don’t overpay or lose the right house.',
  },
  {
    title: 'Inspect & close',
    body: 'Walk-throughs, repairs, and closing coordination until the keys are in your hand.',
  },
] as const

export const SELLER_STEPS = [
  {
    title: 'Pricing strategy',
    body: 'Local comps and market timing so you list for top dollar without sitting too long.',
  },
  {
    title: 'Staging & prep',
    body: 'As a Certified Home Stager, Ashley helps your home photograph and show its best.',
  },
  {
    title: 'Marketing launch',
    body: 'Professional presentation plus ERA King reach across East Alabama buyers.',
  },
  {
    title: 'Offers & negotiation',
    body: 'Clear updates and strong advocacy from first showing through contract.',
  },
  {
    title: 'Closing day',
    body: 'Smooth coordination so you move on with confidence — and a solid net.',
  },
] as const

export type GuideSection = { heading: string; paragraphs: string[] }
export type GuideArticle = {
  slug: string
  title: string
  teaser: string
  readTime: string
  sections: GuideSection[]
}

export const FEATURED_GUIDES: GuideArticle[] = [
  {
    slug: 'chief-ladiga-trail',
    title: 'Living Near the Chief Ladiga Trail',
    teaser:
      'Rails-to-trails lifestyle from Anniston to Piedmont — what homebuyers should know about trail-side living in Calhoun County.',
    readTime: '8 min',
    sections: [
      {
        heading: 'Why the Chief Ladiga Trail matters for homebuyers',
        paragraphs: [
          'The Chief Ladiga Trail is one of East Alabama’s signature outdoor amenities — a paved rails-to-trails corridor that links communities from Anniston through Weaver, Jacksonville, Piedmont, and onward toward Georgia’s Silver Comet Trail. For buyers, that isn’t just recreation marketing; it’s a daily lifestyle feature that can influence which neighborhoods feel like home.',
          'Families who bike, walk, or run regularly often prioritize homes within a short drive (or ride) of a trailhead. Retirees and remote workers value quiet streets with easy access to green space. When you tour Anniston–Piedmont corridor properties with Ashley, trail access is part of the conversation — alongside schools, commute, and resale.',
        ],
      },
      {
        heading: 'Anniston, Weaver, Jacksonville & Piedmont corridor',
        paragraphs: [
          'Anniston offers historic character, museums, and mountain views with trail connections that make weekend rides easy without loading the car every time. Weaver and Jacksonville add university-town energy (Jacksonville State University) and a mix of established neighborhoods and newer builds.',
          'Piedmont and surrounding Calhoun County pockets lean quieter — often with more land, larger lots, and a small-town pace while still plugging into the same trail network. That range means first-time buyers and move-up buyers can both find a fit without leaving the corridor.',
          'Ashley grew up in Calhoun County. She can help you weigh trade-offs: downtown convenience versus acreage, newer construction versus character homes, and how close you really need to be to a preferred trailhead.',
        ],
      },
      {
        heading: 'What to ask when you tour trail-area homes',
        paragraphs: [
          'Ask about flood zones and drainage on lower lots, HOA rules if you’re in a subdivision, and how parking or street access works for loading bikes. For rural or semi-rural parcels near Piedmont, clarify driveway length, internet options for remote work, and outbuilding potential.',
          'Also think seasonally: trail traffic and weekend visitors can make nearby commercial corridors busier on nice Saturdays — usually a plus for amenity-minded buyers, something to note if you want maximum quiet.',
        ],
      },
      {
        heading: 'Pairing trail living with East Alabama amenities',
        paragraphs: [
          'Trail living pairs well with day trips to Cheaha State Park, McClellan trails, and Anniston’s cultural spots. Many buyers want “outdoor access without giving up grocery runs and schools” — the Anniston–Oxford–Jacksonville triangle often delivers that balance.',
          'Ready to shortlist homes near the Chief Ladiga Trail? Call or text Ashley at (256) 689-2688, or use the contact form with your must-haves (lot size, price range, trail proximity).',
        ],
      },
    ],
  },
  {
    slug: 'weiss-lake-living',
    title: 'Weiss Lake Living Guide',
    teaser:
      'Cherokee County waterfront, fishing culture, and practical tips for buying on Weiss Lake — docks, seasons, and year-round homes.',
    readTime: '9 min',
    sections: [
      {
        heading: 'Why buyers choose Weiss Lake',
        paragraphs: [
          'Weiss Lake in Cherokee County is known for fishing, quieter waterfront mornings, and a pace that feels different from busier metro lake markets. Buyers come for weekend docks, retirement waterfront, and full-time homes with a view — often comparing Weiss to Logan Martin and Coosa River options farther southwest.',
          'If you want water without a big-city commute every day, Weiss Lake communities can be a strong match. Ashley helps you clarify whether you need year-round primary living, a second home, or land with future dock potential.',
        ],
      },
      {
        heading: 'Waterfront vs. lake-access vs. nearby land',
        paragraphs: [
          'True waterfront with dock rights is a different product than a home a few minutes from a public launch. Lake-access communities and nearby acreage can stretch your budget while still delivering the lifestyle — especially if you trailer a boat.',
          'When you tour, ask early about pier/dock permits, shoreline rules, HOA or association fees, flood considerations, and whether the property is suitable for your boat size. Those details affect both enjoyment and resale.',
        ],
      },
      {
        heading: 'Seasonality and inventory',
        paragraphs: [
          'Weiss Lake inventory and showing activity can feel seasonal. Spring and early summer often bring more buyers and listings; cooler months can create negotiation windows. Working with a local agent who watches new listings daily matters — the right dock-ready home may not stay quiet for long.',
          'Ashley monitors Cherokee County and nearby Calhoun, Cleburne, Talladega, and St. Clair waterfront so you can move quickly when a fit appears — or take a patient approach if you’re targeting a specific cove or price band.',
        ],
      },
      {
        heading: 'Comparing Weiss, Logan Martin & the Coosa',
        paragraphs: [
          'Logan Martin (St. Clair County) often appeals to skiers and weekend hosts with a different energy. The Coosa River corridor can deliver privacy and acreage with water access. Weiss leans fishing-forward and Cherokee County quiet.',
          'There’s no single “best” lake — only the best match for how you spend Saturdays. A consult with Ashley can map your priorities to the right body of water before you burn weekends on mismatched tours.',
        ],
      },
      {
        heading: 'Next step',
        paragraphs: [
          'Tell Ashley your budget, boat plans, and whether you need a full-time address or a getaway. Call/text (256) 689-2688 or send a note through the contact form — she’ll help you shop Weiss Lake with clear eyes.',
        ],
      },
    ],
  },
  {
    slug: 'first-time-buyers-east-alabama',
    title: 'First-Time Buyers in Calhoun County & East Alabama',
    teaser:
      'A practical path for first-time buyers — budgeting, lenders, neighborhoods, and how Ashley guides Calhoun County purchases.',
    readTime: '8 min',
    sections: [
      {
        heading: 'Start with clarity, not endless scrolling',
        paragraphs: [
          'First-time buyers in Calhoun County and greater East Alabama often feel stuck between Zillow tabs and conflicting advice. The fix is a simple plan: define must-haves, get a realistic budget, and tour with purpose instead of every open house in a 40-mile radius.',
          'Ashley Stedham Mitchell works with first-time buyers regularly across Calhoun County — from Oxford subdivisions to Anniston character homes and Jacksonville’s university-adjacent streets — and neighboring Cleburne, Cherokee, Talladega, and St. Clair counties. You’ll get straight talk on what your budget buys today, not inflated hope.',
        ],
      },
      {
        heading: 'Get loan-ready before you fall in love',
        paragraphs: [
          'A pre-approval from a trusted local lender turns you into a serious buyer. It clarifies monthly payment, down payment options (including first-time programs when they fit), and how much room you have for repairs on an older home.',
          'Ashley can introduce lenders who know East Alabama products — then help you interpret offers so you’re not guessing under pressure.',
        ],
      },
      {
        heading: 'Neighborhood notes for first homes',
        paragraphs: [
          'Calhoun County often attracts buyers who want retail and newer homes in Oxford, character properties in Anniston, or Jacksonville’s college-town streets. Cleburne County around Heflin brings Cheaha access and more space per dollar.',
          'Cherokee County leans Weiss Lake and quieter waterfront. Talladega County (Lincoln and Talladega) fits Honda-corridor commuters. St. Clair County opens Pell City and Logan Martin living. Ashley helps you match commute and lifestyle so your first home still works in year three.',
        ],
      },
      {
        heading: 'Offers, inspections, and keeping calm',
        paragraphs: [
          'Competitive moments happen even in East Alabama. You’ll want a strategy on price, contingencies, and timing. After you’re under contract, inspections protect you — Ashley coordinates the process and helps you decide which repair requests matter.',
          'Closing isn’t the finish line alone: utilities, move logistics, and a final walk-through matter. You’ll have a local guide through each step — not a drive-by agent who disappears after the contract.',
        ],
      },
      {
        heading: 'Ready when you are',
        paragraphs: [
          'Complimentary consultations. Bring your questions about budget, neighborhoods, or timing. Call/text (256) 689-2688 or use the contact form — no pressure, just a clear first-buyer path.',
        ],
      },
    ],
  },
  {
    slug: 'sell-for-top-dollar',
    title: 'Sell Your East Alabama Home for Top Dollar',
    teaser:
      'Pricing, Certified Home Staging, and ERA King marketing — how Ashley helps sellers launch strong across Calhoun, Cleburne, Cherokee, Talladega & St. Clair.',
    readTime: '7 min',
    sections: [
      {
        heading: 'Top dollar starts with the right list price',
        paragraphs: [
          'Overpricing costs time and leverage. Underpricing leaves money on the table. Ashley pairs local comps with current East Alabama demand so your launch attracts serious buyers in the first critical weeks — when showing traffic and online attention peak.',
          'You’ll see the data behind the recommendation, not a vague “trust me.” That clarity helps families who need a certain net to buy their next home.',
        ],
      },
      {
        heading: 'Staging is strategy (not a full remodel)',
        paragraphs: [
          'As a Certified Home Stager, Ashley focuses on what buyers notice in photos and walk-throughs: light, clutter, furniture flow, and a handful of high-impact updates. You rarely need a gut renovation to compete.',
          'Practical prep — paint touch-ups, curb appeal, depersonalizing, and smart room purpose — often yields a cleaner first impression and stronger offers. Staging advice is part of the listing plan, not an upsell afterthought.',
        ],
      },
      {
        heading: 'Marketing that reaches real buyers',
        paragraphs: [
          'ERA King Real Estate visibility plus Ashley’s local relationships puts your home in front of relocating families, lake seekers, and move-up buyers across Calhoun, Cleburne, Cherokee, Talladega, and St. Clair counties.',
          'Expect professional presentation, clear communication on showings, and advocacy from first offer through appraisal and closing. You’ll know where you stand instead of chasing rumors.',
        ],
      },
      {
        heading: 'Negotiation and closing with confidence',
        paragraphs: [
          'Multiple offers, inspection requests, and appraisal gaps are manageable with a plan. Ashley keeps you updated and negotiates toward your goals — whether that’s maximum net, a preferred close date, or a smoother move for your family.',
          'Thinking about selling this season? Request a listing plan: call/text (256) 689-2688 or send details through the contact form. You’ll get honest pricing and staging guidance before you commit.',
        ],
      },
    ],
  },
]

export const MORE_GUIDES: GuideArticle[] = [
  {
    slug: 'buying-calhoun-county',
    title: 'Buying a Home in Calhoun County',
    teaser: 'Neighborhood notes for Anniston, Oxford, Jacksonville, and surrounding Calhoun County communities.',
    readTime: '6 min',
    sections: [
      {
        heading: 'Know the towns',
        paragraphs: [
          'Calhoun County offers a mix of historic downtown energy in Anniston, retail and schools around Oxford, and university-town living in Jacksonville. Piedmont and other Calhoun pockets add trail-town streets and more acreage.',
          'Ashley grew up here. That local lens helps you weigh commute times, school zones, and which streets hold value — and when Cleburne, Cherokee, Talladega, or St. Clair might be a better fit.',
        ],
      },
      {
        heading: 'What buyers should budget for',
        paragraphs: [
          'Beyond purchase price, plan for inspections, insurance, and potential updates on older homes. New construction and established neighborhoods each have trade-offs.',
          'A quick consult can clarify what your budget realistically buys in today’s East Alabama market.',
        ],
      },
      {
        heading: 'Next step',
        paragraphs: [
          'Ready to tour? Call or text Ashley at (256) 689-2688, or send a note through the contact form with your must-haves.',
        ],
      },
    ],
  },
  {
    slug: 'lake-living-weiss-logan-martin',
    title: 'Lake Living: Weiss & Logan Martin',
    teaser: 'Docks, weekends, and year-round waterfront — what to know before you buy.',
    readTime: '7 min',
    sections: [
      {
        heading: 'Logan Martin Lake',
        paragraphs: [
          'Popular with skiers and weekend hosts, Logan Martin (St. Clair County) mixes full-time homes with vacation properties.',
          'Ask about dock permits, HOA rules, and flood considerations early — they affect lifestyle and resale.',
        ],
      },
      {
        heading: 'Weiss Lake',
        paragraphs: [
          'Known for fishing and a quieter Cherokee County pace, Weiss Lake appeals to buyers who want water without a big-city commute.',
          'Inventory can move seasonally. Working with a local agent who watches new listings daily is a real advantage.',
        ],
      },
      {
        heading: 'River & land options',
        paragraphs: [
          'Prefer more privacy? Coosa River lots and acreage can deliver water access with room to roam.',
        ],
      },
    ],
  },
  {
    slug: 'selling-east-alabama',
    title: 'Selling Smart in East Alabama',
    teaser: 'Pricing, staging, and launch tactics that help East Alabama homes stand out.',
    readTime: '5 min',
    sections: [
      {
        heading: 'Price with the market, not hope',
        paragraphs: [
          'Overpricing costs time and leverage. Ashley pairs local comps with a clear launch plan so you attract serious buyers from day one.',
        ],
      },
      {
        heading: 'Staging is strategy',
        paragraphs: [
          'As a Certified Home Stager, Ashley focuses on what buyers notice in photos and walk-throughs — decluttering, light, and simple updates that pay off.',
          'You don’t need a full redesign. Targeted prep often yields a stronger first impression and cleaner offers.',
        ],
      },
      {
        heading: 'Marketing that reaches buyers',
        paragraphs: [
          'ERA King Real Estate visibility plus local relationships means your listing gets in front of relocating families, lake seekers, and move-up buyers across the region.',
        ],
      },
    ],
  },
  {
    slug: 'relocating-anniston-oxford-jacksonville',
    title: 'Relocating to Anniston, Oxford & Jacksonville',
    teaser: 'A practical welcome guide for families and professionals moving to East Alabama.',
    readTime: '6 min',
    sections: [
      {
        heading: 'Why people move here',
        paragraphs: [
          'Lower cost of living than larger metros, access to outdoor recreation, and close-knit communities draw relocating families and remote workers to Calhoun County’s Anniston–Oxford–Jacksonville corridor — with Cleburne, Cherokee, Talladega, and St. Clair as strong nearby options.',
        ],
      },
      {
        heading: 'Choosing a pocket',
        paragraphs: [
          'Oxford often wins for shopping and newer subdivisions. Anniston offers character homes and downtown amenities. Jacksonville attracts those who want a college-town feel and quieter streets.',
          'Ashley helps you match commute, schools, and lifestyle — then builds a shortlist so your trip (or virtual tour week) is efficient.',
        ],
      },
      {
        heading: 'How Ashley helps relocators',
        paragraphs: [
          'Expect honest area briefs, coordinated showings, and introductions to lenders, inspectors, and other local pros. Start with a call or the contact form — even before your move date is firm.',
        ],
      },
    ],
  },
]

export const ALL_GUIDES = [...FEATURED_GUIDES, ...MORE_GUIDES]

export function findGuide(slug: string | undefined) {
  if (!slug) return undefined
  return ALL_GUIDES.find((g) => g.slug === slug)
}

export const NAV = [
  { to: '/buyers', label: 'Buyers' },
  { to: '/sellers', label: 'Sellers' },
  { to: '/guide', label: 'Living Guide' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

export const INTERESTS = ['Buying', 'Selling', 'Relocating', 'FSBO Help', 'Investing', 'Just Exploring'] as const
export const CONTACT_TIMES = ['Morning', 'Afternoon', 'Evening', 'Anytime'] as const
