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
};

export default nextConfig;
