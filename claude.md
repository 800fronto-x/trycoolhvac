# CoolHVAC — Project Context

## Company

**Legal Entity:** JMO HVAC Service Inc.
**DBA:** CoolHVAC
**Website:** trycoolhvac.com
**Phone:** 202-455-0020
**Email:** service@trycoolhvac.com
**Years in Business:** 15+ (rebranding from established operation)

**Parent Organization:** 800fronto.ai (voice-first, multilingual AI agent platform)
- Owner: YB Baak (hello@800fronto.ai)
- CTO: Martin Taheri
- CRO: Gary Fingerhut
- CMO: Chris Finefield

CoolHVAC is a client project of 800fronto.ai and serves as a vertical proof-of-concept for AI-powered home services businesses. The 800fronto.ai GTM Agent Team (10+ autonomous Claude agents) powers CoolHVAC's back-office, marketing, and lead operations.

---

## Service Area (DMV)

**163+ locations across:**
- **Washington DC:** 42 neighborhoods (Georgetown, Capitol Hill, Dupont Circle, Adams Morgan, etc.)
- **Maryland:** 38 cities across Montgomery, Prince George's, Anne Arundel, Howard, Frederick counties
- **Virginia:** 70+ cities across Arlington, Fairfax, Loudoun, Prince William, Stafford, Spotsylvania, Fauquier, Culpeper, Warren, Frederick counties

---

## Services

1. **Air Conditioning Repair** (highest demand)
2. **Heating & Furnace Repair**
3. **HVAC System Installation**
4. **Preventive Maintenance** (best margin)
5. **Indoor Air Quality Solutions**
6. **Commercial HVAC Services**

**Supported Brands:** Carrier, Lennox, Trane, Rheem, Goodman, Daikin, York, Bryant

---

## Positioning & Differentiators

| Advantage | Detail |
|-----------|--------|
| Upfront pricing | Quoted by job, not hourly — no surprise fees |
| AI-first operations | 24/7 instant response via 800fronto.ai agents (no call center) |
| No franchise overhead | 5-7pt lower cost structure vs. Aire Serv, Service Experts |
| Local ownership | Community-rooted, not franchise-dependent |
| 4.9-star reviews | 500+ Google reviews (inherited from previous brand) |
| 24/7 emergency | Same-day service availability |
| NATE-certified techs | Background-checked, licensed, insured |
| 100% satisfaction guarantee | Done Right Promise |

---

## Competitive Landscape

**Top 10 Competitors (DC Metro):**
1. F.H. Furr
2. John C. Flood
3. CroppMetcalfe / Service Experts
4. Magnolia Companies
5. Aire Serv (Neighborly franchise — primary battlecard target)
6. Polar Bear Air Conditioning
7. Tuckers AC, Heating & Plumbing
8. Vernon Heating & Cooling
9. Riley Heat & Air
10. DC Heating and Air Conditioning

**Key insight:** Aire Serv has national brand (Neighborly, 12M+ customers) but only 2.6-star Trustpilot. CoolHVAC wins on local trust, AI speed, and no franchise markup.

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | Next.js 14.2.5 |
| UI | React 18.3.1 |
| Styling | Tailwind CSS 3.4.4 |
| Deployment | Vercel |
| CRM | HubSpot Starter |
| Data Enrichment | Clay |
| Email Outreach | Gmail API (via Agent 8) |
| Voice AI | Newo.ai |
| Marketing Nurture | Klaviyo (opted-in only) |
| LinkedIn Outreach | HeyReach.io |
| Visitor Deanon | Bullseye.so |
| Video Personalization | Gan.ai |
| Workspace | Google Workspace CLI (`gw`) |
| Orchestration | Claude Agent SDK + MCP connectors |

---

## Design System

**Colors (Tailwind config):**
- Navy (primary): `#0a1628` → `#1a3a6b`
- Red (CTA/accent): `#cc0000` → `#b30000`
- Blue (secondary): `#003087` → `#0050c8`

**Typography:** Inter (Google Fonts), weights 400-900

**Patterns:** Hero sections with animated gradients, card-based layouts, sticky nav, mobile-first responsive, semantic HTML with ARIA labels.

---

## App Structure

```
app/
├── page.js                    # Homepage (hero, stats, services, reviews, CTA)
├── layout.js                  # Root layout + SEO metadata
├── globals.css                # Global styles
├── robots.js                  # Robots.txt
├── sitemap.js                 # XML sitemap generation
├── services/page.js           # Services catalog (6 types)
├── quote/page.js              # Multi-step quote calculator
├── contact/page.js            # Contact form + scheduling
├── locations/page.js          # Service areas overview
└── locations/[slug]/page.js   # Dynamic location pages (163+ cities)

components/
├── Navbar.js                  # Sticky header, mobile menu
├── Footer.js                  # Newsletter, links, social
└── QuoteCalculator.js         # Pricing logic (base × size × age × efficiency × urgency)

data/
└── locations.js               # 163+ DMV location objects

SEO Research/                  # Market research, competitor data, plans
```

---

## Quote Calculator Pricing Logic

```
estimate = base_price × home_size_multiplier × system_age_multiplier × efficiency_multiplier × urgency_multiplier
```

- **Home size:** <1K sqft (0.8x) → 3K+ sqft (1.5x)
- **System age:** <5 years (0.9x) → 15+ years (1.3x)
- **Efficiency:** Standard (1.0x) → Premium (1.45x)
- **Urgency:** Flexible (1.0x) → Emergency (+25%)

---

## SEO Strategy (90-Day Plan)

### Phase 1: Technical Foundation (Days 1-30)
- Core Web Vitals (LCP <2.5s, CLS <0.1)
- Google Business Profile optimization
- Local Business + Review schema markup
- Title tags, meta descriptions, H1 optimization
- GA4 + Google Search Console setup

### Phase 2: Content Engine (Days 31-60)
- 6 service pages targeting transactional keywords
- 8 flagship location pages ("AC repair [City]")
- 6 blog posts (seasonal maintenance, energy efficiency, equipment guides)
- FAQ schema markup

### Phase 3: Authority Building (Days 61-90)
- AI-driven review solicitation (target 50+ new reviews)
- Case studies and before/after photos
- Expand to 155+ remaining location pages
- AEO (Answer Engine Optimization) for AI search
- A/B test CTAs and conversion paths

### Top Keywords (by opportunity)

| Keyword | Monthly Volume | Intent |
|---------|---------------|--------|
| AC repair near me | 135,000 | Transactional |
| HVAC repair near me | 90,500 | Transactional |
| AC repair Washington DC | 2,400 | Transactional |
| heating and cooling near me | 90,500 | Commercial |
| HVAC contractor near me | 60,500 | Transactional |
| furnace repair near me | 135,000 | Transactional |
| AC installation near me | 60,500 | Transactional |
| emergency AC repair | 6,600 | Transactional |
| heat pump installation cost | 14,800 | Commercial |

---

## Conversion Architecture

**Primary CTAs:**
1. Homepage → Schedule Service Form (30-min callback guarantee)
2. Quote Page → Dynamic Estimate → Schedule In-Home Visit
3. Services Page → Service Detail → Get a Quote
4. Location Pages → Local CTA → Contact

**Trust signals:** 4.9-star rating, 500+ reviews, licensed/insured badges, 100% satisfaction guarantee, NATE certification, background-checked techs.

---

## 800fronto.ai Agent Integration

CoolHVAC is powered by the 800fronto.ai GTM Agent Team:

| Agent | Role | Relevance to CoolHVAC |
|-------|------|----------------------|
| Agent 1 | Content Marketing | Blog posts, email campaigns, seasonal content |
| Agent 2 | SEO & Organic | Keyword tracking, on-page audits, SERP analysis |
| Agent 3 | Demand Gen | Google Ads, lead magnets, campaign planning |
| Agent 6 | Visitor Intelligence | Bullseye.so deanonymization → lead routing |
| Agent 7 | Prospect Qualification | ICP scoring for commercial HVAC leads |
| Agent 8 | Email Outreach | Cold sequences to property managers, facilities directors |
| Agent 8b | UX Audit | Mystery-shop competitor HVAC websites |
| Agent 9 | LinkedIn Outreach | B2B commercial HVAC prospecting |
| Agent 10 | Voice SDR | Outbound calls + 24/7 inbound via Newo.ai |

**ICP Scoring (Home Services):**
- Call volume estimate: High weight (field service = frequent estimate requests)
- Missed call risk: High weight (after-hours, limited staff)
- Vertical fit: HVAC, plumbing, roofing, bathroom remodeling
- Thresholds: ≥70 PURSUE → 40-69 NURTURE → <40 PASS

---

## Compliance

- **CAN-SPAM:** Unsubscribe + physical address in all emails; suppression list synced HubSpot ↔ Klaviyo
- **TCPA:** Prior express consent for automated calls/SMS; DNC list scrub; calling hours 8AM-9PM local
- **AI Disclosure:** Required at start of every AI-placed call
- **Cold outbound:** Gmail API + HeyReach + Newo.ai only (never Klaviyo)
- **Marketing nurture:** Klaviyo only for opted-in contacts

---

## Key Files (Google Drive)

Located in `800fronto.ai/Client-[TryCoolHVAC.com]/`:
- `CoolHVAC_90Day_SEO_AEO_Plan.html` — Detailed SEO/AEO roadmap
- `Aire_Serv_Competitive_Analysis.html` — Primary competitor battlecard
- `Cool_HVAC_Business_Plan.docx/pdf/pptx` — Full business strategy
- `Cool_HVAC_Digital_Marketing_Plan.docx/pdf` — Marketing playbook
- `800fronto_hvac_market_opportunity_dmv.docx/pdf` — Market research
- `HVAC_Financial_Model_Baseline_vs_AI.xlsx` — Financial projections (baseline vs. AI ops)

---

## Seasonal Calendar

| Season | Focus | Priority Services |
|--------|-------|-------------------|
| Spring (Mar-May) | AC tune-up promos ($79 special) | AC maintenance, installation |
| Summer (Jun-Aug) | Emergency AC repair surge | AC repair, air quality |
| Fall (Sep-Nov) | Heating prep campaigns | Furnace maintenance, heating install |
| Winter (Dec-Feb) | Emergency heating repair | Furnace repair, heating emergency |

---

## Development Notes

- **Deployment:** Vercel (auto-deploy from main branch)
- **Node version:** Check `.nvmrc` or use latest LTS
- **Dev server:** `npm run dev` (port 3000)
- **Build:** `npm run build` → `npm start`
- **No test suite yet** — priority addition
- **No CMS yet** — blog content currently static; HubSpot CMS planned for Phase 2
