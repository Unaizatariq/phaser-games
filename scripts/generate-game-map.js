const fs = require('fs');
const path = require('path');

// Correct path to the catalog JSON file
const catalogPath = path.resolve(__dirname, '..', 'features', 'games_catalog.json');
const outputPath = path.resolve(__dirname, '..', 'features', 'frontend-assets', 'gameMap.json');

if (!fs.existsSync(catalogPath)) {
  console.error('Catalog file not found at', catalogPath);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

// Structure: grade -> subject -> skill -> level -> topic
const map = {};

data.forEach(item => {
  const { grade, subject, skill, level, topic } = item;
  if (!map[grade]) map[grade] = {};
  if (!map[grade][subject]) map[grade][subject] = {};
  if (!map[grade][subject][skill]) map[grade][subject][skill] = {};
  map[grade][subject][skill][`level${level}`] = topic;
});

fs.writeFileSync(outputPath, JSON.stringify(map, null, 2), 'utf8');
console.log('Game map generated at', outputPath);
