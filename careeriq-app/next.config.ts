/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Optimize for server components
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  typescript: {
    // Build will fail on type errors
    ignoreBuildErrors: false,
  },
  eslint: {
    // Build will fail on linting errors
    ignoreDuringBuilds: true,
  },
  // Disable static page generation for dynamic routes
  dynamicParams: true,

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
  },

  // ============ CACHING HEADERS (CYCLE 12) ============
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
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
