/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  basePath: "/my-portfolio",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
