// Walk all HTML files, extract every src/href, and verify the file exists.
import { readdirSync, statSync, readFileSync } from 'fs';
import { join, dirname, resolve, relative } from 'path';

const root = resolve('..');
const issues = [];
const refRegex = /(?:src|srcset|href)\s*=\s*["']([^"']+)["']/g;

function walkHtml(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'scripts') continue;
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(p);
    else if (entry.name.endsWith('.html')) checkHtml(p);
  }
}

function checkHtml(file) {
  const content = readFileSync(file, 'utf8');
  const fileDir = dirname(file);
  let m;
  while ((m = refRegex.exec(content))) {
    let ref = m[1];
    // Strip query string and hash
    ref = ref.split('?')[0].split('#')[0];
    if (!ref) continue;
    if (ref.startsWith('http://') || ref.startsWith('https://') || ref.startsWith('//') || ref.startsWith('mailto:') || ref.startsWith('tel:') || ref.startsWith('data:')) continue;
    if (ref.startsWith('#')) continue;
    // anchor-only nichos urls without extension are local routes — skip
    if (!ref.match(/\.[a-z0-9]{2,5}$/i)) continue;
    // Leading-slash refs are site-root-relative (Cloudflare serves from repo root),
    // not filesystem-root — resolve them against the project root, not the file's dir.
    const abs = ref.startsWith('/') ? join(root, ref) : resolve(fileDir, ref);
    try { statSync(abs); }
    catch {
      issues.push(`${relative(root, file)}: missing -> ${ref} (resolved to ${abs})`);
    }
  }
}

walkHtml(root);

if (issues.length === 0) {
  console.log('✓ All HTML refs resolve.');
} else {
  console.log(`✗ ${issues.length} broken refs:`);
  issues.forEach(i => console.log('  ' + i));
  process.exit(1);
}
