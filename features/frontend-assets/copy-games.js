/**
 * DIYAA Games Frontend Sync Script
 * 
 * Run this script to copy Phaser game folders and React components directly
 * into your React frontend project directory.
 * 
 * Usage:
 *   node copy-games.js <path-to-your-react-frontend>
 * 
 * Example:
 *   node copy-games.js ../diyaa-frontend
 */

const fs = require('fs');
const path = require('path');

const targetProject = process.argv[2];

if (!targetProject) {
  console.error('\x1b[31mError: Please provide the path to your React frontend directory.\x1b[0m');
  console.log('Usage: node copy-games.js <path-to-react-project>');
  process.exit(1);
}

const targetPath = path.resolve(targetProject);
if (!fs.existsSync(targetPath)) {
  console.error(`\x1b[31mError: Target directory does not exist: ${targetPath}\x1b[0m`);
  process.exit(1);
}

// Helper to recursively copy directories
function copyFolderRecursiveSync(source, target) {
  let files = [];

  // Check if folder needs to be created or exists
  const targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        fs.copyFileSync(curSource, path.join(targetFolder, file));
      }
    });
  }
}

console.log(`\n\x1b[36m🚀 Starting integration sync to: ${targetPath}\x1b[0m`);

// 1. Copy games catalog to public/games
const sourceGames = path.join(__dirname, '..', 'games');
const targetPublicGames = path.join(targetPath, 'public', 'games');

console.log(`\n1. Copying Phaser game levels to React public folder...`);
console.log(`   Source: ${sourceGames}`);
console.log(`   Target: ${targetPublicGames}`);

if (!fs.existsSync(sourceGames)) {
  console.error(`\x1b[31mError: Source games folder not found: ${sourceGames}\x1b[0m`);
  process.exit(1);
}

// Make sure target public/games exists
fs.mkdirSync(targetPublicGames, { recursive: true });

// Copy contents of features/games directly into public/games
const gameItems = fs.readdirSync(sourceGames);
gameItems.forEach(item => {
  const itemPath = path.join(sourceGames, item);
  if (fs.lstatSync(itemPath).isDirectory()) {
    copyFolderRecursiveSync(itemPath, path.join(targetPath, 'public'));
  } else {
    fs.copyFileSync(itemPath, path.join(targetPublicGames, item));
  }
});
console.log(`   \x1b[32m✔ Games copied successfully!\x1b[0m`);

// 2. Copy React components and catalog JSON to src/components/games (or src/components)
const targetComponentsDir = path.join(targetPath, 'src', 'components');
console.log(`\n2. Copying React Integration Components to target...`);
console.log(`   Target Directory: ${targetComponentsDir}`);

fs.mkdirSync(targetComponentsDir, { recursive: true });

const filesToCopy = [
  { src: 'games_catalog.json', dest: 'games_catalog.json' },
  { src: 'GameIframe.tsx', dest: 'GameIframe.tsx' },
  { src: 'GamesShowcase.tsx', dest: 'GamesShowcase.tsx' }
];

filesToCopy.forEach(file => {
  const srcFilePath = path.join(__dirname, file.src);
  const destFilePath = path.join(targetComponentsDir, file.dest);
  
  if (fs.existsSync(srcFilePath)) {
    fs.copyFileSync(srcFilePath, destFilePath);
    console.log(`   \x1b[32m✔ Copied ${file.src} -> ${destFilePath}\x1b[0m`);
  } else {
    console.warn(`   \x1b[33m⚠ Warning: Source file not found: ${srcFilePath}\x1b[0m`);
  }
});

console.log(`\n\x1b[32m🎉 Success! Integration assets synced successfully.\x1b[0m`);
console.log(`\nNext Steps:`);
console.log(`1. In your React App, make sure to add VITE_GAMES_URL=local to your .env file to load games from public folder.`);
console.log(`2. Import and render the <GamesShowcase /> component in your page or app layout.`);
console.log(`3. Ensure you have Outfit or Inter font installed, or adjust fonts in GamesShowcase.tsx style definitions.\n`);
