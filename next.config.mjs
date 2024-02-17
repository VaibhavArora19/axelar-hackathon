/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/cosmiccowboys",
        destination: "https://cosmiccowboyws.cloud",
        permanent: false,
      },
      {
        source: "/pinatacloud",
        destination: "https://pinata.cloud/blog",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
