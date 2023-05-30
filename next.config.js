/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_URL: "http://localhost:4200",
    },
    images: {
        domains: ['localhost'],
    }
};

module.exports = nextConfig;