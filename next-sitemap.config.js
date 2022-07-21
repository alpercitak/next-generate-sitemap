/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://alpercitak.github.io/next-generate-sitemap',
  generateRobotsTxt: true,
};

module.exports = config;
