/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['nextamplifiedbe99f4eb8bc546319f3ef453fd40066a82343-dev.s3.ap-northeast-1.amazonaws.com'],
  },
}

module.exports = nextConfig
