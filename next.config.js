/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build to plain static files in `out/` so the site can be hosted on Cloudflare.
  output: 'export',
  images: {
    // Static hosting has no image server, so images are served as-is.
    unoptimized: true,
  },
};

module.exports = nextConfig;
