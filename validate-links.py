import re
from pathlib import Path
root = Path('dist')
html_files = list(root.rglob('*.html'))
broken = []
for file in html_files:
    html = file.read_text(encoding='utf-8')
    for m in re.finditer(r'(?:href|src)=(?:"|\')([^"\']+)(?:"|\')', html):
        url = m.group(1).strip()
        if not url or url.startswith(('http:','https:','mailto:','tel:','javascript:')):
            continue
        if url.startswith('#'):
            continue
        href = url.split('#',1)[0]
        if not href:
            continue
        if href.startswith('/'):
            target = root / href.lstrip('/')
        else:
            target = file.parent / href
        if target.is_dir():
            target = target / 'index.html'
        if target.suffix == '':
            ind = target / 'index.html'
            if ind.exists():
                target = ind
            else:
                target = target.with_suffix('.html')
        if not target.exists():
            broken.append((file.relative_to(root), href, target.relative_to(root)))
if broken:
    print('Broken links found:')
    for b in broken:
        print(f'{b[0]} -> {b[1]} (resolved to {b[2]})')
    raise SystemExit(1)
print('No broken local internal links found in dist output.')
