/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/index.html" }],
    };
  },
  async redirects() {
    return [
      { source: "/products/doodlenest", destination: "/index.html#doodlenest", permanent: false },
      { source: "/products/nena-ai", destination: "/index.html#nena", permanent: false },
      { source: "/products/autoflow", destination: "/index.html#autoflow", permanent: false },
      { source: "/products/:path*", destination: "/index.html#products", permanent: false },
      { source: "/products", destination: "/index.html#products", permanent: false },
      { source: "/services", destination: "/index.html#services", permanent: false },
      { source: "/solutions", destination: "/index.html#products", permanent: false },
      { source: "/contact", destination: "/index.html#contact", permanent: false },
    ];
  },
};

export default nextConfig;
