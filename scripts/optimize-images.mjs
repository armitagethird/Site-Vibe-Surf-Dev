// Generate AVIF + WebP variants of all PNGs in assets/work/ and assets/logo.png.
// Recompress favicon-512.png in-place.
import sharp from 'sharp';
import { statSync, readdirSync } from 'fs';
import { join, parse } from 'path';

async function genVariants(input) {
  const { dir, name } = parse(input);
  const orig = statSync(input).size;
  const avif = join(dir, `${name}.avif`);
  const webp = join(dir, `${name}.webp`);
  await sharp(input).avif({ quality: 55, effort: 9 }).toFile(avif);
  await sharp(input).webp({ quality: 80, effort: 6 }).toFile(webp);
  const a = statSync(avif).size, w = statSync(webp).size;
  console.log(`  ${name}.png ${(orig / 1024).toFixed(0)}KB → avif ${(a / 1024).toFixed(0)}KB / webp ${(w / 1024).toFixed(0)}KB`);
}

console.log('Carousel images (assets/work/):');
const workDir = '../assets/work';
for (const f of readdirSync(workDir).filter(f => f.toLowerCase().endsWith('.png'))) {
  await genVariants(join(workDir, f));
}

console.log('\nFooter logo (assets/logo.png):');
await genVariants('../assets/logo.png');

console.log('\nFavicon recompression:');
const favIn = '../assets/favicon-512.png';
const origFav = statSync(favIn).size;
// Recompress in-place to PNG with palette quantization for size.
await sharp(favIn)
  .png({ quality: 80, compressionLevel: 9, palette: true })
  .toFile('../assets/favicon-512.tmp.png');
const newSz = statSync('../assets/favicon-512.tmp.png').size;
console.log(`  favicon-512.png ${(origFav / 1024).toFixed(0)}KB → ${(newSz / 1024).toFixed(0)}KB`);
console.log('  → tmp file at favicon-512.tmp.png; review then mv over.');
