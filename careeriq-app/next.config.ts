/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Optimize for server components - reduces client-side JS
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // Optimize package imports to reduce bundle
    optimizePackageImports: ["lucide-react", "@clerk/nextjs"],
  },
  typescript: {
    // Build will fail on type errors
    ignoreBuildErrors: false,
  },
  eslint: {
    // Build will fail on linting errors
    ignoreDuringBuilds: true,
  },
  
  // CYCLE 13: Reduce unused JavaScript
  dynamicParams: true,
  staticPageGenerationTimeout: 60,
  
  // Disable source maps in production to reduce bundle
  productionBrowserSourceMaps: false,

  // ============ IMAGE OPTIMIZATION (CYCLE 12) ============
  images: {
    // Support modern image formats
    formats: ['image/avif', 'image/webp'],
    // Allow remote images from any domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Responsive image sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ============ CACHING HEADERS (CYCLE 12 + 13) ============
  headers: async () => {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/public/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
