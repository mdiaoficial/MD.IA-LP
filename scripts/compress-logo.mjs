import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { statSync, renameSync, unlinkSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const target = join(__dirname, "..", "public", "logo", "logo_mdia.png");
const tmp = target + ".tmp";

const before = statSync(target).size;

await sharp(target)
  .resize({ width: 800, withoutEnlargement: true })
  .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
  .toFile(tmp);

unlinkSync(target);
renameSync(tmp, target);

const after = statSync(target).size;
const pct = Math.round((1 - after / before) * 100);
console.log(
  `OK: logo_mdia.png ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${pct}%)`,
);
