/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/create",
        destination: "https://docs.axelar.dev/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
