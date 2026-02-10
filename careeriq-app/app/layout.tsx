import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";

export const metadata: Metadata = {
  title: "CareerIQ - AI Career Intelligence Platform | Get Promoted, Negotiate Raises",
  description: "AI-powered career coaching, salary intelligence, and job tracking. Get promoted, negotiate raises, and advance your career with data-driven insights. Trusted by 500+ professionals.",
  keywords: ["career intelligence", "AI career advisor", "job market insights", "skill assessment", "career coaching", "salary negotiation", "career growth"],
  authors: [{ name: "Oliver Newth" }],
  creator: "Oliver Newth",
  openGraph: {
    title: "CareerIQ - AI Career Intelligence Platform",
    description: "Get promoted, negotiate raises, and advance your career with AI-powered insights. Track jobs, get coaching, discover salary benchmarks.",
    url: "https://career-saas.vercel.app",
    siteName: "CareerIQ",
    images: [
      {
        url: "https://career-saas.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CareerIQ - Career Intelligence Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareerIQ - AI Career Intelligence Platform",
    description: "Get promoted, negotiate raises, and advance your career with AI insights.",
    images: ["https://career-saas.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Canonical URL */}
          <link rel="canonical" href="https://career-saas.vercel.app" />
          
          {/* Structured Data - Organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "CareerIQ",
                url: "https://career-saas.vercel.app",
                logo: "https://career-saas.vercel.app/logo.png",
                description: "AI-powered career intelligence platform helping professionals get promoted and negotiate better salaries",
                foundingDate: "2025",
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Sales",
                  email: "hello@newth.ai",
                },
                sameAs: [
                  "https://twitter.com/newth",
                  "https://linkedin.com/company/careeriq",
                ],
              }),
            }}
          />
          {/* Structured Data - SoftwareApplication */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "CareerIQ",
                description: "AI-powered career coaching and salary intelligence platform",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: "99",
                  priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  ratingCount: "247",
                  bestRating: "5",
                  worstRating: "1",
                },
              }),
            }}
          />
          {/* Structured Data - BreadcrumbList */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://career-saas.vercel.app",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Dashboard",
                    item: "https://career-saas.vercel.app/dashboard",
                  },
                ],
              }),
            }}
          />
        </head>
        <body className="antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
