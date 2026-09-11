import sharp from "sharp";

await Promise.all([320, 480, 640, 768, 960].map((width) =>
  sharp("public/images/portrait.png")
    .resize({ width })
    .webp({ quality: 88, alphaQuality: 100 })
    .toFile(`public/images/portrait-${width}.webp`),
));
