/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true }, // keeps Netlify happy for static export
  output: 'standalone'
};
export default nextConfig;
