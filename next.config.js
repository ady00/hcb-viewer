/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bank.hackclub.com",
      },
    ],
    domains: ['hcb.hackclub.com'],
  },
};

module.exports = nextConfig;
