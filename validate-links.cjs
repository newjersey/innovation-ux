const fs = require('fs');
const path = require('path');
const root = path.resolve('dist');
const htmlFiles = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walk(p);
    else if (name.isFile() && p.endsWith('.html')) htmlFiles.push(p);
  }
}
walk(root);
const re = /(?:href|src)=(["'])([^"']+)\1/g;
const broken = [];
const ok = (t) => fs.existsSync(t);
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = re.exec(html))) {
    let url = m[2].trim();
    if (!url || url.startsWith('http:') || url.startsWith('https:') || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('javascript:')) continue;
    if (url.startsWith('#')) continue;
    const href = url.split('#')[0];
    if (!href) continue;
    let target;
    if (href.startsWith('/')) target = path.join(root, href.replace(/^\//, ''));
    else target = path.join(path.dirname(file), href);
    if (target.endsWith(path.sep)) target = path.join(target, 'index.html');
    if (!path.extname(target)) {
      const ind = path.join(target, 'index.html');
      if (ok(ind)) target = ind;
      else target = target + '.html';
    }
    if (!ok(target)) broken.push({ file: path.relative(root, file), href, target: path.relative(root, target) });
  }
}
if (broken.length) {
  console.error('Broken links found:');
  broken.forEach((b) => console.error(`${b.file} -> ${b.href} (resolved to ${b.target})`));
  process.exit(1);
}
console.log('No broken local internal links found in dist output.');
