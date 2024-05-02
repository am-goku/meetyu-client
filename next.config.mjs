/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    port: 3021,
  },
  images: {
    domains: ["as1.ftcdn.net", "images.unsplash.com"],
  },
};

export default nextConfig;
