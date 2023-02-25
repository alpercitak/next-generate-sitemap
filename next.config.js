const isProduction = process.env.NODE_ENV === 'production';
const isDocker = process.env.BUILD_TYPE === 'docker';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  assetPrefix: isProduction && !isDocker ? '/next-generate-sitemap' : '',
  publicRuntimeConfig: {
    linkPrefix: isProduction && !isDocker ? '/next-generate-sitemap' : '',
  },
};

module.exports = nextConfig;
