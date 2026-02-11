'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function ResourcesPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState('')

  const leadMagnets = [
    {
      title: '5-Year Career Plan Template',
      description: 'The career intelligence framework broken down into 5-year blocks. Includes milestone planning and skill roadmaps.',
      benefit: 'Go from "what\'s next" to a real plan',
      type: 'Template',
      download: '5-year-plan',
    },
    {
      title: 'Job Transition Checklist',
      description: '34-point checklist for career changes. Covers prep, interview, negotiation, and onboarding.',
      benefit: 'Make your next job transition your last',
      type: 'Checklist',
      download: 'job-transition-checklist',
    },
    {
      title: 'Salary Negotiation Toolkit',
      description: 'Negotiate like a CEO. Scripts, frameworks, and data for 50+ job titles.',
      benefit: 'Add $5-20K to your offer',
      type: 'Toolkit',
      download: 'salary-negotiation-kit',
    },
    {
      title: 'Skill Development Roadmap',
      description: 'Identify high-ROI skills for your role. Includes learning resources and timelines.',
      benefit: 'Skill up in half the time',
      type: 'Roadmap',
      download: 'skill-roadmap',
    },
    {
      title: 'Career Risk Assessment',
      description: 'Evaluate your job security and market position. Identifies blind spots before they become problems.',
      benefit: 'Know if you should be worried',
      type: 'Assessment',
      download: 'career-risk-assessment',
    },
    {
      title: 'Leadership Transition Guide',
      description: 'Step into a leadership role successfully. Covers people management, delegation, and communication.',
      benefit: 'Go from IC to leader without falling',
      type: 'Guide',
      download: 'leadership-guide',
    },
  ]

  const handleDownload = async (resource: string) => {
    if (!email.trim()) {
      setSubmitted('error')
      setTimeout(() => setSubmitted(''), 3000)
      return
    }

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          resource,
          source: 'resources-page',
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmitted('success')
        setEmail('')
        setTimeout(() => setSubmitted(''), 3000)
      }
    } catch (error) {
      setSubmitted('error')
      setTimeout(() => setSubmitted(''), 3000)
    }
  }

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            CareerIQ
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold"
          >
            Try Free Trial
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Career Intelligence Resources
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Take control of your career. Free tools and templates used by 10,000+ professionals to plan moves that matter.
          </p>
          <p className="text-sm text-gray-500">
            From salary negotiation to leadership transitions. Everything you need for strategic career planning.
          </p>
        </div>

        {/* Email Capture */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <h2 className="text-xl font-bold mb-4 text-white">Get All Resources Free</h2>
            <p className="text-gray-400 mb-6">
              Enter your email to download instantly. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={() => handleDownload('all')}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold whitespace-nowrap transition-colors"
              >
                Download Now
              </button>
            </div>
            {submitted === 'success' && (
              <p className="text-green-500 text-sm mt-3">Check your email for the download link!</p>
            )}
            {submitted === 'error' && (
              <p className="text-red-500 text-sm mt-3">Please enter a valid email address.</p>
            )}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
          {leadMagnets.map((item, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors group cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  {item.type}
                </span>
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.description}</p>
              <div className="mb-4 p-3 bg-gray-800/50 rounded border-l-2 border-blue-600">
                <p className="text-sm text-blue-400 font-medium">💡 {item.benefit}</p>
              </div>
              <button
                onClick={() => handleDownload(item.download)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 hover:bg-blue-600 text-white text-sm font-semibold transition-colors"
              >
                Download Free
              </button>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">Trusted by Career Professionals</h3>
          <div className="grid grid-cols-3 gap-6 text-center mb-8">
            <div>
              <p className="text-3xl font-bold text-blue-400">10K+</p>
              <p className="text-gray-400 text-sm">Professionals Using CareerIQ</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">+$250M</p>
              <p className="text-gray-400 text-sm">Salary Negotiated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">4.8★</p>
              <p className="text-gray-400 text-sm">Average User Rating</p>
            </div>
          </div>
          <p className="text-gray-400 mb-8">
            "I went from lost to having a real 5-year plan. Got a 35% raise in the process." - Jamie R., Software Engineer at Tech Unicorn
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Get Personalized Guidance - Try Free Trial →
          </Link>
        </div>
      </div>
    </main>
  )
}
