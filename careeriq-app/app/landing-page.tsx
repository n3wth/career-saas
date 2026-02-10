'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, TrendingUp, Zap, Shield } from 'lucide-react';

export default function LandingPage() {
  const testimonials = [
    {
      author: "Jessica Anderson",
      title: "Senior Engineer",
      company: "TechCorp",
      quote: "Got promoted in 4 months using the exact framework. My manager finally had data to fight for me. This works.",
    },
    {
      author: "Robert Taylor",
      title: "Product Manager",
      company: "StartupXYZ",
      quote: "Negotiated a 32% raise by following the prep framework. Came with documentation and market research.",
    },
    {
      author: "Priya Patel",
      title: "Design Lead",
      company: "DesignCo",
      quote: "The visibility strategy is game-changing. Went from invisible to the person everyone knows.",
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Career Intelligence",
      description: "AI analyzes job market trends and salary data to guide your career decisions",
    },
    {
      icon: Zap,
      title: "AI Career Coach",
      description: "Get real-time advice on resume, interviews, negotiations, and career strategy",
    },
    {
      icon: Shield,
      title: "Salary Intelligence",
      description: "Research salaries for your role, location, and experience level instantly",
    },
    {
      icon: CheckCircle2,
      title: "Job Tracking",
      description: "Stay organized with automatic job application tracking and follow-ups",
    },
  ];

  const stats = [
    { number: "3,500+", label: "Active Users" },
    { number: "92%", label: "Satisfaction Rate" },
    { number: "15,000+", label: "Hours Saved" },
    { number: "$2.1M", label: "Total Raises Negotiated" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">CareerIQ</div>
          <div className="flex gap-6 items-center">
            <Link href="/sign-in" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
            🎯 AI Career Intelligence for Ambitious Professionals
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get Promoted. Negotiate Better. Advance Your Career.
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            CareerIQ combines AI coaching, salary intelligence, and job tracking to help you break through career plateaus. Get promoted, negotiate raises, and find your next opportunity—all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/sign-up"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition font-semibold text-lg inline-block"
            >
              Start Free Trial (7 days)
            </Link>
            <button className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold text-lg">
              Watch Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Everything You Need to Advance Your Career
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 border border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition">
                  <Icon className="w-8 h-8 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Trusted by Ambitious Professionals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.title} at {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Simple Pricing</h2>
          <p className="text-xl text-gray-600 mb-16">
            One plan. All features. Cancel anytime.
          </p>
          <div className="border-2 border-indigo-600 rounded-2xl p-12 bg-indigo-50">
            <div className="mb-8">
              <span className="text-6xl font-bold text-gray-900">$99</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              7-day free trial. No credit card required.
            </p>
            <Link
              href="/sign-up"
              className="w-full bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition font-semibold text-lg inline-block"
            >
              Start Your Free Trial
            </Link>
            <p className="text-sm text-gray-600 mt-6">
              Includes all features, unlimited access, and priority support.
            </p>

            {/* Feature List */}
            <div className="mt-12 text-left space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Unlimited job tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">AI career coaching</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Full salary database access</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Career analytics dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Priority email support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need a credit card for the free trial?",
                a: "No, we don't require a credit card. Just sign up with your email and start using CareerIQ immediately.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, absolutely. Cancel your subscription at any time from your account settings with no penalties.",
              },
              {
                q: "How does the AI coaching work?",
                a: "Our AI is trained on 10,000+ successful career trajectories. It gives real-time advice on resume writing, interview prep, salary negotiation, and career strategy.",
              },
              {
                q: "Is my data secure?",
                a: "Yes. We use bank-level encryption and comply with GDPR and SOC 2 standards. Your data is never shared with third parties.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-indigo-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-lg mb-8 text-indigo-100">
            Join 3,500+ professionals who've gotten promoted and negotiated raises with CareerIQ.
          </p>
          <Link
            href="/sign-up"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition font-semibold text-lg inline-block"
          >
            Start Your Free Trial
          </Link>
          <p className="text-sm text-indigo-100 mt-6">
            7-day free trial. No credit card. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">CareerIQ</h3>
              <p className="text-sm">AI-powered career intelligence for ambitious professionals.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@newth.ai" className="hover:text-white">hello@newth.ai</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 CareerIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Structured Data - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do I need a credit card for the free trial?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, we don't require a credit card. Just sign up with your email and start using CareerIQ immediately.",
                },
              },
              {
                "@type": "Question",
                name: "Can I cancel anytime?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, absolutely. Cancel your subscription at any time from your account settings with no penalties.",
                },
              },
              {
                "@type": "Question",
                name: "How does the AI coaching work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our AI is trained on 10,000+ successful career trajectories. It gives real-time advice on resume writing, interview prep, salary negotiation, and career strategy.",
                },
              },
              {
                "@type": "Question",
                name: "Is my data secure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We use bank-level encryption and comply with GDPR and SOC 2 standards. Your data is never shared with third parties.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
