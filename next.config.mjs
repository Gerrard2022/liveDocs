/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'img.clerk.com' }]
  },
  typescript: {
    ignoreBuildErrors: false,  // Ensures TypeScript errors fail the build
  },
  eslint: {
    ignoreDuringBuilds: false, // Runs ESLint during builds to catch any issues
  },
};

export default nextConfig;

