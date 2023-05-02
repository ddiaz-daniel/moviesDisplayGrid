/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    BEARER_TOKEN: process.env.BEARER_TOKEN,
  }
}

module.exports = nextConfig
