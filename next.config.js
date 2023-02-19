/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'stingray-app-gukxi.ondigitalocean.app',
      'justben.uk',
      'www.justben.uk',
      "res.cloudinary.com",
    ],
  },
}

module.exports = nextConfig
