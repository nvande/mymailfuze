import type { NextConfig } from "next";

const repo = "mymailfuze";
const onPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: onPages ? `/${repo}` : "",
  assetPrefix: onPages ? `/${repo}/` : "",
};

export default nextConfig;
