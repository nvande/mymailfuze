import type { NextConfig } from "next";

const repo = "mymailfuze";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.GITHUB_ACTIONS === "true" ? `/${repo}` : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
