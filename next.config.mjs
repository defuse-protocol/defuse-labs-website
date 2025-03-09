/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        pathname: "/136591/**",
      },
    ],
  },
}

export default nextConfig
