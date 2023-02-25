const isProduction = process.env.NODE_ENV === 'production';
const isDocker = process.env.BUILD_TYPE === 'docker';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
};

if (isProduction && !isDocker) {
  nextConfig.assetPrefix = '/next-generate-sitemap';
  nextConfig.publicRuntimeConfig = {
    linkPrefix: '/next-generate-sitemap',
  };
}

module.exports = nextConfig;
