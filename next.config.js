/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_API_HOST,
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
