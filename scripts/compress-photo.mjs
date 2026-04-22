import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { statSync, renameSync, unlinkSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const target = join(publicDir, "dr-dan.jpg");
const tmp = join(publicDir, "dr-dan.compressed.jpg");

const before = statSync(target).size;

await sharp(target)
  .resize({ width: 1800, withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toFile(tmp);

unlinkSync(target);
renameSync(tmp, target);

const after = statSync(target).size;
const pct = Math.round((1 - after / before) * 100);
console.log(
  `OK: dr-dan.jpg ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${pct}%)`,
);
