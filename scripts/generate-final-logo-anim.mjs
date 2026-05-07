// Generate 3 final candidates for visual review.
import sharp from 'sharp';
import { statSync, mkdirSync, rmSync } from 'fs';
import { execSync } from 'child_process';

const input = '../assets/logo-anim.webp';
const tmpDir = './tmp-frames';
const meta = await sharp(input, { animated: true, limitInputPixels: false }).metadata();

async function extract(width) {
  rmSync(tmpDir, { recursive: true, force: true });
  mkdirSync(tmpDir, { recursive: true });
  for (let i = 0; i < meta.pages; i++) {
    const idx = String(i).padStart(4, '0');
    await sharp(input, { page: i, limitInputPixels: false })
      .resize({ width, kernel: 'lanczos3' })
      .png({ compressionLevel: 0 })
      .toFile(`${tmpDir}/f${idx}.png`);
  }
}

function encode({ width, fps, quality, takeEvery, name }) {
  const out = `../assets/${name}`;
  const inputPattern = `${tmpDir}/f%04d.png`;
  let filter = '';
  if (takeEvery > 1) filter = `-vf select='not(mod(n\\,${takeEvery}))',setpts=N/${fps}/TB`;
  const cmd = `ffmpeg -hide_banner -y -framerate ${fps * takeEvery} -i ${inputPattern} ${filter} -c:v libwebp_anim -loop 0 -lossless 0 -compression_level 6 -quality ${quality} -preset drawing -an "${out}"`;
  execSync(cmd, { stdio: ['ignore', 'ignore', 'pipe'] });
  return statSync(out).size;
}

console.log('Extracting @ 480px...');
await extract(480);
const a = encode({ width: 480, fps: 15, quality: 50, takeEvery: 2, name: 'logo-anim.candidate-A.webp' });
const b = encode({ width: 480, fps: 10, quality: 50, takeEvery: 3, name: 'logo-anim.candidate-B.webp' });

console.log('Extracting @ 360px...');
await extract(360);
const c = encode({ width: 360, fps: 15, quality: 50, takeEvery: 2, name: 'logo-anim.candidate-C.webp' });

rmSync(tmpDir, { recursive: true, force: true });

console.log('\nCandidates:');
console.log(`  A: 480px @15fps q50 = ${(a / 1024).toFixed(1)} KB`);
console.log(`  B: 480px @10fps q50 = ${(b / 1024).toFixed(1)} KB`);
console.log(`  C: 360px @15fps q50 = ${(c / 1024).toFixed(1)} KB`);
console.log(`\nOriginal: ${(statSync(input).size / 1024).toFixed(1)} KB`);
