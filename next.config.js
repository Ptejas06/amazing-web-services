/** @type {import('next').NextConfig} */
const nextConfig = {
  // This brochure site is exported as static files for CDN hosting.
  output: 'export',
  trailingSlash: true,
};

module.exports = nextConfig;
