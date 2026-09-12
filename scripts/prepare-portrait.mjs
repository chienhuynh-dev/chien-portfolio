import sharp from "sharp";

await Promise.all([280, 320, 390, 480, 544, 640, 768, 960, 1117].map((width) =>
  sharp("public/images/portrait.png")
    .resize({ width })
    .webp({ quality: 88, alphaQuality: 100 })
    .toFile(`public/images/portrait-${width}.webp`),
));
