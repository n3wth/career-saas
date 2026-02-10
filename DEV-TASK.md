# Task: Career SaaS - Developer

## Objective
Build and deploy Career Intelligence SaaS MVP landing page with email capture + Stripe checkout.

## Sprint Goal (24 Hours)
NOT building the full product. Building the **landing page + waitlist** to validate demand.

## Landing Page Requirements

### Page Sections

#### 1. Hero
```
Headline: "The Career Intelligence System That Got Me to Google"
Subhead: "Track jobs, negotiate salaries, and get AI coaching from a $210k/year PM"

CTA: "Join Waitlist" (email capture)
Secondary CTA: "See How It Works" (scroll to demo)
```

#### 2. Problem Statement
```
Stop Using Spreadsheets for Your Career

Most people track their job search in:
❌ Random spreadsheets
❌ Browser bookmarks
❌ Email threads
❌ Their memory

Result: Missed opportunities, bad negotiation, random career moves.
```

#### 3. Solution
```
One System for Your Entire Career

✅ Job Tracker - Save & organize every opportunity
✅ Salary Intelligence - Know what you're worth
✅ AI Career Coach - Get advice from a Google PM
✅ Offer Analyzer - Compare & negotiate with confidence
```

#### 4. How It Works (3 Steps)
```
1. Track Everything
   Add jobs with 1 click. Track applications. Never lose an opportunity.

2. Get Intelligence
   Real salary data. Company insights. Interview prep.

3. Make Better Decisions
   AI-powered advice. Offer comparison. Negotiation scripts.
```

#### 5. Founder Story
```
"I used this system to go from Microsoft to Google and negotiate a $210k PM role.
Now I'm sharing it with you."

- Oliver
  Product Manager @ Google
  Previously: Microsoft
```

#### 6. Pricing Preview
```
Free Tier: Track 10 jobs, basic salary data
Pro: $49/month - Unlimited tracking, AI coach, full intelligence
Enterprise: $199/month - Includes 1:1 coaching with Oliver

(Stripe checkout links ready for early adopters)
```

#### 7. Early Access CTA
```
Get Early Access

📧 Email signup
✅ "I'm interested in..." (job tracking / salary data / AI coaching)
✅ "I'm currently..." (actively searching / passively looking / hiring)

Button: "Join 100+ Early Users"
```

#### 8. FAQ
```
Q: When does this launch?
A: Waitlist users get access first (within 2 weeks)

Q: Is this just for tech workers?
A: Designed for tech but works for any career

Q: Do you sell my data?
A: Never. Privacy-first, no BS.
```

#### 9. Footer
```
Built by Oliver | Google PM | o@newth.ai
LinkedIn | Twitter | GitHub
```

## Technical Implementation

### Option 1: Lovable Pro (Fastest)
- Use Oliver's Lenny's Newsletter Product Pass access
- AI-powered app builder
- Can ship in 2-4 hours

### Option 2: Carrd.co (Good Enough)
- Free tier
- Landing page only
- Integrates with email + Stripe
- Ship in 1-2 hours

### Option 3: Next.js + Vercel (Most Flexible)
- Free hosting
- Full control
- More work (4-6 hours)

### Email Capture
- **Loops** (free tier) or **ConvertKit** (free tier)
- Export list for followup

### Stripe Integration
- Payment links for:
  - $49/month Pro (early bird: $39/month)
  - $399/year Pro (save $189)
  - $199/month Enterprise

### Domain
- Use subdomain: career.newth.ai
- Or buy cheap: careeriq.ai / intelligentcareer.ai

## Deliverables

### 1. Live Landing Page
URL in `/revenue-sprint/career-saas/LANDING-URL.txt`

### 2. Email Sequence (3 emails)
`/revenue-sprint/career-saas/email-sequence.md`:
- Email 1: Welcome + what to expect
- Email 2: Founder story + how system works
- Email 3: Early access offer

### 3. Stripe Links
`/revenue-sprint/career-saas/stripe-links.json`

### 4. Analytics Setup
- PostHog tracking (from Lenny's pass)
- Track: page views, email signups, Stripe clicks

### 5. Source Code
`/revenue-sprint/career-saas/landing-page/` (if custom built)

## Copy Guidelines
- **Authentic:** Oliver's real story, not fake testimonials
- **Specific:** "$210k Google PM" not "successful career"
- **Problem-focused:** People hate spreadsheet job tracking
- **Credible:** Google + Microsoft + real expertise
- **Clear CTA:** Join waitlist or buy now (for early adopters)

## Design Guidelines
- **Simple:** One-page scroll
- **Mobile-first:** Most traffic will be mobile
- **Fast:** Load in <2 seconds
- **Professional:** Not startup-bro aesthetic
- **Trust signals:** Real photo of Oliver, LinkedIn link

## Launch Checklist
- [ ] Page loads fast
- [ ] Mobile responsive
- [ ] Email capture works
- [ ] Stripe links functional
- [ ] Analytics tracking
- [ ] SEO basics (title, description, OG image)
- [ ] Oliver approves copy + design

## Timeline
- Hours 0-2: Choose platform + setup
- Hours 2-4: Build page
- Hours 4-5: Email sequence + Stripe
- Hour 5-6: Oliver review + launch

## Success Metrics (24-Hour Target)
- 50+ email signups (from Oliver's network)
- 5+ Stripe checkouts (early adopters)
- $200-500 in revenue (pre-launch sales)

## Next Steps (After Launch)
- Share in Oliver's LinkedIn network
- Post in relevant subreddits
- DM warm connections
- Launch on Product Hunt (needs preparation)

Start now. Ship landing page ASAP. Real product comes later.
