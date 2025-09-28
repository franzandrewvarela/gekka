/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/gekka',
  assetPrefix: '/gekka/',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}

module.exports = nextConfig
