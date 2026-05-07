import sharp from 'sharp';

const m = await sharp('../assets/logo-anim.webp', { animated: true }).metadata();
console.log(JSON.stringify({
  width: m.width,
  height: m.height,
  pages: m.pages,
  pageHeight: m.pageHeight,
  format: m.format,
  delay: m.delay,
  loop: m.loop,
  size: m.size,
}, null, 2));
