import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  devIndicators: false,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [280, 320, 390, 480, 544, 640, 768, 960, 1280],
    imageSizes: [],
  },
};

export default nextConfig;
