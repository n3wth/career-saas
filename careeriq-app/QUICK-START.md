# ⚡ 30-Minute Launch Checklist

## 🎯 Goal: Go from code to live SaaS in 30 minutes

---

## ☑️ Phase 1: Clerk Setup (5 minutes)

- [ ] Go to https://clerk.com/sign-up
- [ ] Create account
- [ ] Create new application: "CareerIQ"
- [ ] Enable Email + Password
- [ ] Enable Google OAuth
- [ ] Copy keys to `.env.local`:
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
  - `CLERK_SECRET_KEY`
- [ ] ✅ **Clerk ready!**

---

## ☑️ Phase 2: Supabase Setup (10 minutes)

- [ ] Go to https://supabase.com/dashboard
- [ ] Create new project: "careeriq"
- [ ] Wait for initialization (~2 mins)
- [ ] Go to Settings → API
- [ ] Copy keys to `.env.local`:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Go to SQL Editor
- [ ] Open `database/schema.sql`
- [ ] Copy contents → Paste → Run
- [ ] See "Success. No rows returned"
- [ ] (Optional) Run `database/seed.sql` for sample data
- [ ] ✅ **Database ready!**

---

## ☑️ Phase 3: Stripe Setup (10 minutes)

- [ ] Go to https://dashboard.stripe.com/register
- [ ] Create account (can skip business details)
- [ ] Toggle **Test mode** ON (top right)
- [ ] Go to Products → Add Product
- [ ] Name: "CareerIQ Pro"
- [ ] Price: $99/month recurring
- [ ] Save product
- [ ] Copy Price ID (starts with `price_`)
- [ ] Go to Developers → API Keys
- [ ] Copy keys to `.env.local`:
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - `STRIPE_SECRET_KEY`
  - `STRIPE_PRICE_ID`
- [ ] ✅ **Stripe ready!** (webhooks after deploy)

---

## ☑️ Phase 4: Deploy to Vercel (5 minutes)

- [ ] Open terminal
- [ ] Run: `npm install -g vercel`
- [ ] Run: `cd /Users/n3wth/.openclaw/workspace/revenue-sprint/career-saas/careeriq-app`
- [ ] Run: `vercel`
- [ ] Answer prompts:
  - Set up and deploy? **Y**
  - Link to existing project? **N**
  - Project name? **careeriq**
- [ ] Wait for deployment
- [ ] Copy production URL (e.g., `https://careeriq.vercel.app`)
- [ ] Go to Vercel dashboard → Project → Settings → Environment Variables
- [ ] Add ALL variables from `.env.local`
- [ ] Important: Set `NEXT_PUBLIC_APP_URL` to your Vercel URL
- [ ] Run: `vercel --prod` to redeploy with env vars
- [ ] ✅ **Deployed!**

---

## ☑️ Phase 5: Configure Webhooks (5 minutes)

### Clerk Webhook:
- [ ] Go to Clerk Dashboard → Webhooks
- [ ] Add endpoint: `https://your-domain.vercel.app/api/webhooks/clerk`
- [ ] Select events: `user.created`, `user.updated`, `user.deleted`
- [ ] Save

### Stripe Webhook:
- [ ] Go to Stripe Dashboard → Developers → Webhooks
- [ ] Add endpoint: `https://your-domain.vercel.app/api/webhooks/stripe`
- [ ] Select events:
  - `checkout.session.completed`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.payment_succeeded`
  - `invoice.payment_failed`
- [ ] Copy Signing Secret
- [ ] Add to Vercel env vars: `STRIPE_WEBHOOK_SECRET`
- [ ] Run: `vercel --prod` (final redeploy)
- [ ] ✅ **Webhooks configured!**

---

## ☑️ Phase 6: Test Everything (5 minutes)

- [ ] Visit your production URL
- [ ] Click "Sign Up"
- [ ] Create account (email or Google)
- [ ] ✅ Redirected to dashboard?
- [ ] Go to "Jobs" → Add Job
- [ ] Fill form → Save
- [ ] ✅ Job appears in list?
- [ ] Go to "AI Coach" → New Chat
- [ ] Send message: "How do I prepare for interviews?"
- [ ] ✅ Get streaming response?
- [ ] Go to "Salary" → Search "Software Engineer"
- [ ] ✅ See results? (if you ran seed.sql)
- [ ] Go to "Settings" → Start Free Trial
- [ ] Use test card: `4242 4242 4242 4242`
- [ ] ✅ Checkout works?
- [ ] Check Stripe dashboard
- [ ] ✅ Subscription created?

---

## 🎉 You're Live!

Your SaaS is now:
- ✅ Accepting signups
- ✅ Processing payments
- ✅ Providing AI coaching
- ✅ Tracking job applications
- ✅ Showing salary data

---

## 📋 Quick Reference

### Environment Variables Needed:
```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

# OpenAI (already set)
OPENAI_API_KEY=sk-proj-xxxxx

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
STRIPE_PRICE_ID=price_xxxxx

# App
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

---

## 🚨 Troubleshooting

**"Unauthorized" on dashboard:**
- Check Clerk keys are correct in Vercel
- Verify cookies aren't blocked
- Try incognito/private window

**Database errors:**
- Verify schema.sql ran successfully
- Check Supabase service role key
- Look at Supabase logs

**Stripe checkout fails:**
- Verify test mode is ON
- Check Price ID is correct
- Use test card: 4242 4242 4242 4242

**AI coach not responding:**
- Check OpenAI API key in Vercel
- Verify API has credits
- Check Vercel function logs

**Webhooks not firing:**
- Verify URLs match your domain
- Check webhook signing secrets
- Test delivery in Stripe/Clerk dashboard

---

## 📞 Help

- Full docs: `README.md`
- Setup guide: `DEPLOYMENT.md`
- Project overview: `PROJECT-COMPLETE.md`

---

## 🎯 You're Done!

Total time: **~30 minutes**

You now have:
- ✅ Live SaaS application
- ✅ User authentication
- ✅ Payment processing
- ✅ AI features
- ✅ Full dashboard

**Next step:** Get your first customer! 💰

---

## 🚀 Going to Production

When ready to accept real payments:

- [ ] Switch Stripe to **Live Mode**
- [ ] Get live API keys
- [ ] Create live product
- [ ] Update webhooks with live keys
- [ ] Add custom domain in Vercel
- [ ] Add Terms of Service page
- [ ] Add Privacy Policy page
- [ ] Set up monitoring (Sentry)
- [ ] Enable analytics

---

**Built:** ✅  
**Deployed:** ✅  
**Tested:** ✅  
**Ready to sell:** ✅  

**GO GET CUSTOMERS!** 🎉
