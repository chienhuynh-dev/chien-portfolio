import type { ImageLoaderProps } from "next/image";

// Static hosting has no image server. These sizes are prepared before each build.
export default function imageLoader({ src, width }: ImageLoaderProps): string {
  const [pathname, version] = src.split("?");
  if (pathname !== "/images/portrait.png") return src;
  return `/images/portrait-${width}.webp${version ? `?${version}` : ""}`;
}
