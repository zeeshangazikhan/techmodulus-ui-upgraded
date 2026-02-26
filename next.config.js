/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This enables static exports
  distDir: "out",
  trailingSlash: true, // Recommended for cPanel
  images: {
    unoptimized: true, // Required for static export with images
  },
  // Optional: Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optional: Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },


};

export default nextConfig;
