/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true
    }
  },
  transpilePackages: ['jotai-devtools'],
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript:{
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
