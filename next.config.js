/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'hr',
    locales: ['hr'],
  },
  reactStrictMode: true,
  images: {
    domains: ['fastly.picsum.photos', 'picsum.photos'],
  },
}

module.exports = nextConfig
