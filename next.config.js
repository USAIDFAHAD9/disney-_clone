/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
      },
      {
        protocol: 'http',
        hostname: 'image.tmdb.org',
      },
    ],
  },
}

module.exports = nextConfig

// /** @type {import('next').NextConfig} */

// module.exports = {
//   images: {
//     domains: ['links.papareact.com', 'image.tmdb.org'],
//   },
// }
