/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },

  /**
   * GitHub Pages serves from /<repo>. When deploying elsewhere, leave empty.
   * Example: /ATLAS-Advanced-Technology-Labs-for-Applied-Sciences
   */
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",

  /**
   * Enable fully static export (Next 13+).
   * Output will be written to `out/`.
   */
  output: "export",
};

module.exports = nextConfig;

