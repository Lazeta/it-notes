// src/scripts/generate-test-index.js
const fs = require("fs");
const path = require("path");

// Проектный корень: предполагаем, что npm run запускается из корня проекта.
// __dirname указывает на src/scripts
const projectRoot = path.resolve(__dirname, "..", ".."); // .../src/scripts -> проектный корень
const dataDir = path.join(projectRoot, "src", "data"); // .../src/data
const testsDir = path.join(dataDir, "tests"); // .../src/data/tests
const outFile = path.join(dataDir, "testIndex.json");

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const full = path.join(dir, d.name);
    return d.isDirectory() ? walk(full) : full;
  });
}

const files = walk(testsDir).filter(
  (f) => f.endsWith(".js") || f.endsWith(".jsx")
);

const index = {};

files.forEach((file) => {
  const relFromData =
    "./" +
    path
      .relative(dataDir, file)
      .replace(/\\/g, "/")
      .replace(/\.jsx?$/, "");
  const content = fs.readFileSync(file, "utf8");
  const exportMatch = content.match(
    /export\s+const\s+([A-Za-z0-9_$]+)\s*=\s*{([\s\S]{0,1200})/
  );
  if (!exportMatch) return;
  const exportName = exportMatch[1];
  const after = exportMatch[2];
  const idMatch = after.match(/id\s*:\s*(\d{3,})/);
  const titleMatch = after.match(
    /title\s*:\s*['"`]\s*([^'"`]{1,200}?)\s*['"`]/
  );
  if (!idMatch) return;
  const id = idMatch[1];
  index[id] = {
    path: relFromData, // пример "./tests/Common/GeneralPrinciples/testProgrammingParadigms"
    exportName,
    title: titleMatch ? titleMatch[1] : null,
  };
});

fs.writeFileSync(outFile, JSON.stringify(index, null, 2));
console.log("Wrote", outFile, "entries:", Object.keys(index).length);
