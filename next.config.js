/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'd2inkdea9euelz.cloudfront.net',
      'comunal-live.s3.us-east-2.amazonaws.com',
      'upload.wikimedia.org',
    ],
  },
  output: 'standalone',
};

module.exports = nextConfig;
