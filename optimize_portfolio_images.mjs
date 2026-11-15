import { readdir, mkdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(root, 'public', 'images', 'portfolio');
const originalsDir = path.join(root, 'assets', 'source-images');
await mkdir(publicDir, { recursive: true });
const images = (await readdir(originalsDir)).filter((name) => /\.(jpe?g|png)$/i.test(name));
let before = 0;
let after = 0;
for (const name of images) {
  const input = path.join(originalsDir, name);
  const output = path.join(publicDir, `${path.parse(name).name}.webp`);
  const meta = await sharp(input).metadata();
  before += (await stat(input)).size;
  await sharp(input).rotate().resize({ width: 1800, height: 1800, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 84, effort: 5, ...(meta.format === 'png' ? { alphaQuality: 95 } : {}) }).toFile(output);
  after += (await stat(output)).size;
}
console.log(`Optimized ${images.length} images: ${Math.round(before / 1024 / 1024)} MB → ${Math.round(after / 1024 / 1024)} MB. Originals retained in assets/source-images.`);
