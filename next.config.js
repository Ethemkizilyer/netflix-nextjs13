/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org"],
    domains: ["rb.gy"],
  },
};

module.exports = nextConfig;
