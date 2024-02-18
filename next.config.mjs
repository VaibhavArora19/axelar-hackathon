/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/create",
        destination: "https://docs.axelar.dev/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
