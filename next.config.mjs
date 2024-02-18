/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/create",
        destination: "https://cosmiccowboys.cloud",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
