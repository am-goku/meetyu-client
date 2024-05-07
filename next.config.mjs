/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    port: 3021,
  },
  images: {
    domains: ["as1.ftcdn.net", "images.unsplash.com"],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
    SOCKET_URL: process.env.SOCKET_URL,
  }
};

export default nextConfig;
