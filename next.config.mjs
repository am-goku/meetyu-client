/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    port: 3021,
  },
  images: {
    domains: ["cdn-icons-png.flaticon.com", "as1.ftcdn.net", "images.unsplash.com", "expertphotography.b-cdn.net", "i.pinimg.com", ],
  },
  env: {
    SOCKET_URL: process.env.SOCKET_URL,
    SERVER_URL: process.env.SERVER_URL,
  }
};

export default nextConfig;
