
const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? ''

console.log({ DOCS_URL, 'a': 'd' })
/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_URL}/docs/:path*`,
      },
    ];
  },
};
