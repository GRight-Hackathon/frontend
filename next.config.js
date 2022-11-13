/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['awv3node-homepage.surge.sh']
  }
}

module.exports = nextConfig
