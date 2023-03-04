/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.sanity.io"]
  },
  experimental: {
    appDir: true
  }
}
