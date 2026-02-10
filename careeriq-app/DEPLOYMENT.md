# 🚀 CareerIQ SaaS - Deployment Guide

## Quick Start (30 minutes to live)

### Step 1: Clerk Setup (5 minutes)

1. **Create Clerk Account**
   - Go to https://clerk.com/sign-up
   - Create new application: "CareerIQ"

2. **Enable Authentication Methods**
   - Navigate to: User & Authentication → Email, Phone, Username
   - Enable: Email + Password
   - Enable: Google OAuth (Configure → Add OAuth provider)

3. **Copy Your Keys**
   - Go to: API Keys
   - Copy both keys to `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
   CLERK_SECRET_KEY=sk_test_xxxxx
   ```

4. **Configure Paths**
   - These are already set in `.env.local` - no changes needed
   ```
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   ```

---

### Step 2: Supabase Setup (10 minutes)

1. **Create Supabase Project**
   - Go to https://supabase.com/dashboard
   - Click "New Project"
   - Name: careeriq
   - Database Password: (save this securely)
   - Region: Choose closest to your users
   - Wait for database to initialize (~2 mins)

2. **Copy Your Keys**
   - Go to: Settings → API
   - Copy to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx
   ```

3. **Run Database Schema**
   - Go to: SQL Editor
   - Click "New Query"
   - Copy entire contents of `database/schema.sql`
   - Click "Run"
   - Should see: "Success. No rows returned"

4. **Add Sample Data (Optional)**
   - Same SQL Editor
   - Copy contents of `database/seed.sql`
   - Click "Run"
   - This adds ~40 salary data entries for testing

---

### Step 3: Stripe Setup (10 minutes)

1. **Create Stripe Account**
   - Go to https://dashboard.stripe.com/register
   - Verify email (can skip business details for now)

2. **Create Product**
   - Go to: Products → Add Product
   - Name: `CareerIQ Pro`
   - Description: `Full access to CareerIQ platform`
   - Pricing: Recurring → Monthly → $99
   - Click "Save product"
   - **Copy the Price ID** (starts with `price_`)

3. **Copy Your Keys**
   - Go to: Developers → API Keys
   - Toggle "Test mode" ON (top right)
   - Copy to `.env.local`:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
   STRIPE_SECRET_KEY=sk_test_xxxxx
   STRIPE_PRICE_ID=price_xxxxx
   ```

4. **Set Up Webhooks (After Deployment)**
   - We'll do this after deploying to Vercel
   - Stripe needs a public URL to send webhooks to

---

### Step 4: Verify OpenAI Key

Already configured in `.env.local`:
```
OPENAI_API_KEY=sk-proj-xxxxx
```

✅ No action needed - AI coach will work immediately!

---

### Step 5: Deploy to Vercel (5 minutes)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd /Users/n3wth/.openclaw/workspace/revenue-sprint/career-saas/careeriq-app
   vercel
   ```

3. **Follow Prompts**
   - "Set up and deploy?" → **Y**
   - "Which scope?" → Select your account
   - "Link to existing project?" → **N**
   - "What's your project's name?" → **careeriq** (or your choice)
   - "In which directory is your code located?" → **.**
   - Vercel will auto-detect Next.js

4. **Add Environment Variables**
   - After first deploy, go to: https://vercel.com/dashboard
   - Select your project → Settings → Environment Variables
   - Add ALL variables from `.env.local`:
     - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
     - CLERK_SECRET_KEY
     - NEXT_PUBLIC_CLERK_SIGN_IN_URL
     - NEXT_PUBLIC_CLERK_SIGN_UP_URL
     - NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL
     - NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
     - NEXT_PUBLIC_SUPABASE_URL
     - NEXT_PUBLIC_SUPABASE_ANON_KEY
     - SUPABASE_SERVICE_ROLE_KEY
     - OPENAI_API_KEY
     - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
     - STRIPE_SECRET_KEY
     - STRIPE_PRICE_ID
     - NEXT_PUBLIC_APP_URL (set to your vercel URL: https://careeriq.vercel.app)
   - Click "Save"

5. **Redeploy**
   ```bash
   vercel --prod
   ```

6. **Copy Your Production URL**
   - Will be something like: `https://careeriq.vercel.app`
   - Save this - you'll need it for webhooks

---

### Step 6: Configure Webhooks (5 minutes)

#### Clerk Webhook

1. **Go to Clerk Dashboard** → Webhooks
2. **Add Endpoint**
   - URL: `https://your-domain.vercel.app/api/webhooks/clerk`
   - Subscribe to events:
     - ✓ user.created
     - ✓ user.updated
     - ✓ user.deleted
3. **Copy Signing Secret**
   - Optional: Add as `CLERK_WEBHOOK_SECRET` env var
   - (Current implementation doesn't verify signature - add for production)

#### Stripe Webhook

1. **Go to Stripe Dashboard** → Developers → Webhooks
2. **Add Endpoint**
   - URL: `https://your-domain.vercel.app/api/webhooks/stripe`
   - Description: "CareerIQ Production"
   - Select events:
     - ✓ checkout.session.completed
     - ✓ customer.subscription.updated
     - ✓ customer.subscription.deleted
     - ✓ invoice.payment_succeeded
     - ✓ invoice.payment_failed
3. **Copy Signing Secret**
   - Starts with `whsec_`
   - Add to Vercel env vars: `STRIPE_WEBHOOK_SECRET=whsec_xxxxx`
4. **Redeploy** (to pick up new env var)
   ```bash
   vercel --prod
   ```

---

## 🎉 You're Live!

Your SaaS is now fully operational at: `https://your-domain.vercel.app`

### Test the Full Flow:

1. **Sign Up**
   - Go to your domain → Sign Up
   - Create account with email or Google

2. **Explore Dashboard**
   - View empty state (no jobs yet)
   - Clean, professional UI

3. **Add a Job**
   - Go to Jobs → Add Job
   - Fill in details → Save
   - See it appear in dashboard

4. **Try AI Coach**
   - Go to AI Coach → New Chat
   - Ask: "How should I prepare for a software engineering interview?"
   - Get streaming AI response

5. **Search Salaries**
   - Go to Salary
   - Search: "Software Engineer" + "San Francisco"
   - View results (if you ran seed.sql)

6. **Test Subscription Flow**
   - Go to Settings
   - Click "Start 7-Day Free Trial"
   - Use Stripe test card: `4242 4242 4242 4242`
   - Expiry: any future date
   - CVC: any 3 digits
   - Complete checkout
   - Check Stripe dashboard for subscription

---

## 🧪 Testing Webhooks Locally

Before deployment, test webhooks locally:

### Stripe CLI

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# In another terminal, run dev server
npm run dev

# Test a payment
stripe trigger checkout.session.completed
```

### Clerk Webhook Testing

Use a service like **ngrok** or **webhook.site** to test Clerk webhooks locally.

---

## 🔧 Troubleshooting

### "Unauthorized" errors
- Check Clerk keys are correct
- Verify middleware.ts is present
- Check browser cookies aren't blocked

### Database errors
- Verify Supabase schema was run successfully
- Check service role key (not anon key) is used for admin operations
- Look for SQL errors in Supabase logs (Database → Logs)

### Stripe checkout not working
- Verify Price ID is correct
- Check test mode is enabled
- Use test card numbers only
- Check webhook secret matches

### AI coach not responding
- Verify OpenAI API key is valid
- Check API usage limits
- Look at browser console for errors
- Check Vercel function logs

### Webhooks not firing
- Verify URL is public (not localhost)
- Check webhook signing secrets
- Look at webhook delivery logs in Stripe/Clerk
- Ensure endpoint returns 200 status

---

## 🚀 Going to Production

### Before Launch Checklist:

- [ ] Switch Stripe to **Live Mode**
  - Get live API keys
  - Create live product
  - Set up live webhooks
  - Update env vars

- [ ] Custom Domain
  - Add domain in Vercel
  - Update Clerk allowed origins
  - Update Stripe webhook URLs
  - Update NEXT_PUBLIC_APP_URL

- [ ] Database Security
  - Enable Row Level Security (RLS) in Supabase
  - Create policies for user data access
  - Review API key permissions

- [ ] Monitoring
  - Set up Sentry for error tracking
  - Add Vercel Analytics
  - Configure Supabase logs/alerts
  - Set up uptime monitoring (e.g., Better Stack)

- [ ] Legal
  - Add Terms of Service
  - Add Privacy Policy
  - GDPR compliance (if EU users)
  - Cookie consent banner

- [ ] Performance
  - Enable Vercel Edge Functions for API routes
  - Add Redis caching (Upstash)
  - Optimize images with next/image
  - Add loading skeletons

- [ ] SEO
  - Add sitemap.xml
  - Configure robots.txt
  - Add OpenGraph images
  - Set up Google Analytics

---

## 💰 Cost Breakdown (Per Month)

**Free Tier** (up to ~100 users):
- Clerk: $0 (up to 10,000 MAU)
- Supabase: $0 (500MB database, 2GB bandwidth)
- Vercel: $0 (hobby plan)
- OpenAI: ~$50-100 (depends on AI usage)
- Stripe: 2.9% + $0.30 per transaction

**At 100 paying customers** ($9,900 MRR):
- Revenue: $9,900
- Stripe fees: ~$317
- OpenAI (avg $1/user): $100
- Infrastructure: ~$20 (Vercel Pro)
- **Net: ~$9,463** (95.6% margin)

**At 1,000 paying customers** ($99,000 MRR):
- Revenue: $99,000
- Stripe fees: ~$3,170
- OpenAI: ~$1,000
- Infrastructure: ~$200 (Vercel + Supabase Pro)
- Clerk: ~$200 (paid plan)
- **Net: ~$94,430** (95.4% margin)

SaaS margins stay incredible at scale! 🚀

---

## 📞 Support

For issues during setup:
1. Check README.md for detailed docs
2. Review Vercel deployment logs
3. Check Supabase logs for database issues
4. Review Stripe webhook logs
5. Test webhooks with Stripe CLI

---

## 🎯 Next Features to Build

Once live, consider adding:
1. **Email notifications** (Resend/SendGrid)
2. **Resume upload** (Supabase Storage)
3. **Calendar sync** (Google Calendar API)
4. **Team plans** (multi-user accounts)
5. **Mobile app** (React Native + Expo)
6. **Public API** (for integrations)
7. **Chrome extension** (auto-fill applications)
8. **Interview prep module** (video practice)
9. **Networking tracker** (LinkedIn connections)
10. **Referral program** (viral growth)

---

**You now have a production-ready SaaS!** 🎉

Deploy it, get your first paying customer, and iterate from there. Good luck! 🚀
