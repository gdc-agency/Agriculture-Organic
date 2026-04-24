const fs = require("fs");
const path = require("path");

const exts = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".scss", ".html"]);
const skipDirs = new Set(["node_modules", ".next", ".git"]);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (exts.has(path.extname(ent.name))) out.push(p);
  }
  return out;
}

const files = walk(process.cwd());
const re = /["'](\/?assets\/img\/[^"'()\s]+)["']/g;

const set = new Set();
for (const f of files) {
  const s = fs.readFileSync(f, "utf8");
  let m;
  while ((m = re.exec(s))) {
    const val = m[1].startsWith("/") ? m[1].slice(1) : m[1];
    set.add(val);
  }
}

const arr = [...set].sort();
process.stdout.write(arr.join("\n"));
