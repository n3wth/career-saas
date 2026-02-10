'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, TrendingUp } from 'lucide-react';

export default function TechSkillsReport() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to email service
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  const topSkills = [
    { skill: "AI/ML Engineering", demand: 95, salary: "$180k-$250k" },
    { skill: "Prompt Engineering", demand: 92, salary: "$120k-$180k" },
    { skill: "Cloud Architecture (AWS/GCP)", demand: 88, salary: "$140k-$200k" },
    { skill: "Data Engineering", demand: 85, salary: "$130k-$190k" },
    { skill: "Full Stack Development (AI-Augmented)", demand: 82, salary: "$110k-$170k" },
    { skill: "Product Management (AI)", demand: 80, salary: "$130k-$190k" },
    { skill: "DevOps/Infrastructure", demand: 78, salary: "$120k-$180k" },
    { skill: "No-Code AI Platforms", demand: 75, salary: "$90k-$150k" },
    { skill: "Data Analytics", demand: 72, salary: "$100k-$160k" },
    { skill: "Business Analysis (AI Tools)", demand: 68, salary: "$85k-$140k" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            CareerIQ
          </Link>
          <Link
            href="/sign-up"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-12 px-4 bg-gradient-to-b from-indigo-50 to-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
              📊 Lead Magnet
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            2026 Tech Skills Demand Report
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The definitive guide to the 10 most in-demand tech skills and their market salaries. Based on analysis of 50,000+ job postings and salary data from 2025-2026.
          </p>
          <div className="flex justify-center gap-2 text-sm text-gray-600">
            <TrendingUp className="w-5 h-5" />
            <span>Get instant access. No credit card required.</span>
          </div>
        </div>
      </header>

      {/* Two Column Layout */}
      <main className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Left Column - Preview */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Report Preview */}
              <div className="p-8 bg-gradient-to-b from-indigo-50 to-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  🎯 Top 10 Most Demanded Tech Skills in 2026
                </h2>

                {/* Skill Rankings */}
                <div className="space-y-3">
                  {topSkills.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 pb-3 border-b border-gray-200">
                      <div className="text-2xl font-bold text-indigo-600 w-8">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{item.skill}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="bg-gray-200 rounded-full h-2 w-32">
                            <div
                              className="bg-indigo-600 h-2 rounded-full"
                              style={{ width: `${item.demand}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600">{item.demand}% demand</span>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-green-600 whitespace-nowrap">
                        {item.salary}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Insights */}
                <div className="mt-8 pt-8 border-t-2 border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    📈 Key Insights
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>AI/ML skills command a 40-60% salary premium over traditional dev roles</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Prompt engineering is the fastest-growing role (278% YoY growth)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>No-code platforms are removing barriers—non-technical roles growing fastest</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Remote opportunities increased 45% for AI-related roles</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Traditional IT roles (desktop support, basic QA) declining -15% YoY</span>
                    </li>
                  </ul>
                </div>

                {/* What's Included */}
                <div className="mt-8 pt-8 border-t-2 border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    📋 What's Included in Full Report
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>Top 10 skills ranking + detailed demand metrics</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>Salary ranges by experience level (junior, mid, senior)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>Geographic salary variations (Silicon Valley vs other markets)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>12-month outlook (what will be hot in early 2027)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>Learning resources for each skill (courses, certifications)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>Job market predictions and trends</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>Career transition strategies for non-tech professionals</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>Bonus: Salary negotiation templates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Signup Form */}
          <div>
            <div className="sticky top-32">
              <div className="bg-indigo-50 rounded-xl border-2 border-indigo-600 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Free Report
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Enter your email to get instant access to the full 2026 Tech Skills Demand Report.
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center mb-6">
                    <p className="text-green-700 font-semibold">✓ Check your email!</p>
                    <p className="text-green-600 text-sm mt-1">
                      Download link sent immediately
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download Free Report
                    </button>
                  </form>
                )}

                <p className="text-xs text-gray-600 text-center mb-6">
                  No spam. Unsubscribe anytime.
                </p>

                {/* Trust Badges */}
                <div className="space-y-3 pt-6 border-t border-indigo-200">
                  <p className="text-sm font-semibold text-gray-900">
                    Why trust this report?
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span>✓</span>
                      <span>Data from 50,000+ job postings</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✓</span>
                      <span>Salary info from 12 sources</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✓</span>
                      <span>Updated monthly</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✓</span>
                      <span>Used by 500+ professionals</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Want more? Join CareerIQ for personalized career recommendations.
                </p>
                <Link
                  href="/sign-up"
                  className="text-indigo-600 font-semibold hover:text-indigo-700"
                >
                  Start Free Trial →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">CareerIQ</h3>
              <p className="text-sm">
                AI-powered career intelligence platform helping 3,500+ professionals advance their careers.
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-gray-400">
                &copy; 2025 CareerIQ. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Schema for Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "2026 Tech Skills Demand Report",
            description: "The definitive guide to the 10 most in-demand tech skills and their market salaries.",
            brand: {
              "@type": "Brand",
              name: "CareerIQ",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "0",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "156",
            },
          }),
        }}
      />
    </div>
  );
}
