import path from "node:path";
import type { NextConfig } from "next";

// This app lives in a sub-folder of the repository (next to another Next.js
// project). Pin the project root so Turbopack and file tracing don't pick the
// parent folder's lockfile.
const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
  images: {
    qualities: [75, 85],
  },
};

export default nextConfig;
