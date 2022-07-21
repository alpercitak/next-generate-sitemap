const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  assetPrefix: isProduction ? '/next-generate-sitemap' : '',
  publicRuntimeConfig: {
    linkPrefix: isProduction ? '/next-generate-sitemap' : '',
  },
};

module.exports = nextConfig;
