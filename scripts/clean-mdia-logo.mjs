import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoDir = join(__dirname, "..", "public", "logo");

const inPath = join(logoDir, "logo_mdia.jpg");
const outPath = join(logoDir, "logo_mdia.png");

const img = sharp(inPath).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

const threshold = 30;
const softness = 18;

const out = Buffer.from(data);
for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;

  if (lum < threshold) {
    out[i + 3] = 0;
  } else if (lum < threshold + softness) {
    const factor = (lum - threshold) / softness;
    out[i + 3] = Math.round(out[i + 3] * factor);
  }
}

await sharp(out, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(outPath);

console.log(`OK: logo_mdia.jpg -> logo_mdia.png (${info.width}x${info.height})`);
