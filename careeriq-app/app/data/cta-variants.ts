// CTA Variant A: Free Trial Focus (Low-Risk Entry)
export const variantA = {
  name: "Free Trial",
  headline: "Start Your Free Trial",
  description: "No credit card required. Cancel anytime.",
  buttonText: "Try Free for 7 Days",
  buttonColor: "bg-indigo-600 hover:bg-indigo-700",
  emphasis: "risk-free",
  expectedCTR: "8-12%",
  conversionLift: "+0%",
};

// CTA Variant B: Value Prop (Success Metrics)
export const variantB = {
  name: "Value Proposition",
  headline: "Get Promoted. Negotiate Better. Advance Your Career.",
  description: "Join 3,500+ professionals who've gotten raises and promotions using CareerIQ.",
  buttonText: "See How It Works",
  buttonColor: "bg-green-600 hover:bg-green-700",
  emphasis: "social-proof",
  expectedCTR: "12-16%",
  conversionLift: "+40%",
};

// CTA Variant C: Urgency + Scarcity (FOMO)
export const variantC = {
  name: "Limited Offer",
  headline: "Early Access: $99/Month, Forever",
  description: "Founding members lock in lifetime pricing. No price increases.",
  buttonText: "Claim Your Spot",
  buttonColor: "bg-red-600 hover:bg-red-700",
  emphasis: "scarcity",
  expectedCTR: "14-18%",
  conversionLift: "+60%",
};

export const ctaVariants = [variantA, variantB, variantC];

export default ctaVariants;
