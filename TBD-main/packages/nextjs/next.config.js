// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  images: {
    domains: ["assets.aceternity.com", "s2.coinmarketcap.com", "assets.coingecko.com", "readi.fi", "assets.coingecko.com"],
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  transpilePackages: ["@uniswap/widgets", "@uniswap/conedison"],
  webpack: config => {
    config.optimization.minimize = false;
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;
