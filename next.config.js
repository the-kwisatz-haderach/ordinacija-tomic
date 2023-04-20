/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fastly.picsum.photos', 'picsum.photos'],
  },
}

module.exports = nextConfig
