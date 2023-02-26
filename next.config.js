/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'cdn.cloudflare.steamstatic.com',
      'i.ytimg.com',
      'pyxis.nymag.com',
      'cdn1.epicgames.com',
      'photos.google.com',
    ],
  },
}

module.exports = nextConfig
