/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "raw.githubusercontent.com"],
  },
  experimental: {
    instrumentationHook: true,
  },
};

module.exports = nextConfig;
