'use client';

import Link from 'next/link';

export default function BlogIndex() {
  const articles = [
    {
      slug: 'future-of-work',
      title: 'The Future of Work: How AI is Reshaping Career Paths',
      excerpt: 'Discover how artificial intelligence is transforming the job market and what skills will matter most in 2026 and beyond.',
      category: 'Career Trends',
      date: 'Feb 10, 2026',
      readTime: '15 min',
      author: 'Oliver Newth',
    },
    {
      slug: 'career-plateau',
      title: 'The Hidden Cost of Staying in the Wrong Job',
      excerpt: 'Most people lose $500k+ in lifetime earnings by staying in jobs just slightly below their market value. Here is how to fix it.',
      category: 'Career Strategy',
      date: 'Feb 8, 2026',
      readTime: '12 min',
      author: 'Oliver Newth',
    },
    {
      slug: 'promotion-no-raise',
      title: 'Why Your Promotion Came Without a Raise (And How to Fix It)',
      excerpt: 'Titles are cheap. Here\'s how to make sure your next promotion comes with a real increase in compensation.',
      category: 'Salary Negotiation',
      date: 'Feb 6, 2026',
      readTime: '10 min',
      author: 'Oliver Newth',
    },
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Career Intelligence Blog
          </h1>
          <p className="text-xl text-gray-600">
            Expert insights on career growth, salary negotiation, and navigating the future of work.
          </p>
        </div>
      </header>

      {/* Blog List */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="border-b border-gray-200 pb-8 last:border-0"
              >
                <Link href={`/blog/${article.slug}`} className="group">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition">
                    {article.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>By {article.author}</span>
                    <span>{article.date}</span>
                    <span>{article.readTime} read</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="py-16 px-4 bg-indigo-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Advance Your Career?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get personalized career recommendations and AI coaching with CareerIQ.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="mb-6">&copy; 2025 CareerIQ. All rights reserved.</p>
          <p className="text-sm">
            <Link href="#" className="hover:text-white">Privacy Policy</Link> • 
            <Link href="#" className="hover:text-white"> Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
