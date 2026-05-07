// Strategy: sharp extracts frames as PNGs → ffmpeg encodes to animated webp.
import sharp from 'sharp';
import { statSync, mkdirSync, rmSync } from 'fs';
import { execSync } from 'child_process';

const input = '../assets/logo-anim.webp';
const orig = statSync(input).size;
console.log('Original:', (orig / 1024).toFixed(1), 'KB');
const meta = await sharp(input, { animated: true, limitInputPixels: false }).metadata();
console.log(`  Frames: ${meta.pages}, ${meta.width}x${meta.pageHeight}, loop: ${meta.loop}\n`);

const tmpDir = './tmp-frames';

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

let counter = 0;
async function encode({ width, fps, quality, takeEvery = 1, preset = 'drawing', label }) {
  const out = `../assets/_t${counter++}.webp`;
  const inputPattern = `${tmpDir}/f%04d.png`;
  let filter = '';
  if (takeEvery > 1) filter = `-vf select='not(mod(n\\,${takeEvery}))',setpts=N/${fps}/TB`;
  const cmd = `ffmpeg -hide_banner -y -framerate ${fps * takeEvery} -i ${inputPattern} ${filter} -c:v libwebp_anim -loop 0 -lossless 0 -compression_level 6 -quality ${quality} -preset ${preset} -an "${out}"`;
  try {
    execSync(cmd, { stdio: ['ignore', 'ignore', 'pipe'] });
    const sz = statSync(out).size;
    console.log(`${label}: ${(sz / 1024).toFixed(1)} KB`);
  } catch (e) {
    const stderr = e.stderr?.toString() || '';
    const errLine = stderr.split('\n').filter(l => l.match(/Error|error|invalid/i)).slice(-2).join(' | ');
    console.log(`${label}: FAILED - ${errLine || e.message.slice(0, 100)}`);
  }
}

console.log('Extracting @ 480px...');
await extract(480);
await encode({ width: 480, fps: 30, quality: 60, label: 'q60 @480 30fps' });
await encode({ width: 480, fps: 30, quality: 40, label: 'q40 @480 30fps' });
await encode({ width: 480, fps: 30, quality: 30, label: 'q30 @480 30fps' });
await encode({ width: 480, fps: 30, quality: 20, label: 'q20 @480 30fps' });
await encode({ width: 480, fps: 15, quality: 50, takeEvery: 2, label: 'q50 @480 15fps' });
await encode({ width: 480, fps: 15, quality: 30, takeEvery: 2, label: 'q30 @480 15fps' });
await encode({ width: 480, fps: 10, quality: 50, takeEvery: 3, label: 'q50 @480 10fps' });
await encode({ width: 480, fps: 10, quality: 30, takeEvery: 3, label: 'q30 @480 10fps' });

console.log('\nExtracting @ 360px...');
await extract(360);
await encode({ width: 360, fps: 30, quality: 50, label: 'q50 @360 30fps' });
await encode({ width: 360, fps: 30, quality: 30, label: 'q30 @360 30fps' });
await encode({ width: 360, fps: 15, quality: 50, takeEvery: 2, label: 'q50 @360 15fps' });
await encode({ width: 360, fps: 15, quality: 30, takeEvery: 2, label: 'q30 @360 15fps' });
await encode({ width: 360, fps: 10, quality: 50, takeEvery: 3, label: 'q50 @360 10fps' });

// Cleanup test files
rmSync(tmpDir, { recursive: true, force: true });
console.log('\nTest files at ../assets/_t*.webp — review then cleanup with: rm assets/_t*.webp');
