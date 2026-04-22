import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const casesDir = join(__dirname, "..", "public", "cases");

const jobs = [
  { src: "Volup.webp", out: "Volup-clean.png", threshold: 120 },
  { src: "WN.jpeg", out: "WN-clean.png", threshold: 80 },
];

for (const job of jobs) {
  const inPath = join(casesDir, job.src);
  const outPath = join(casesDir, job.out);

  const img = sharp(inPath).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

  const out = Buffer.from(data);
  const len = data.length;
  for (let i = 0; i < len; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum < job.threshold) {
      out[i + 3] = 0;
    } else {
      const softness = 20;
      if (lum < job.threshold + softness) {
        const factor = (lum - job.threshold) / softness;
        out[i + 3] = Math.round(out[i + 3] * factor);
      }
    }
  }

  await sharp(out, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toFile(outPath);

  console.log(`OK: ${job.src} -> ${job.out} (${info.width}x${info.height})`);
}
