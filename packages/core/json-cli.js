const fs = require('fs').promises;
const path = require('path');

const svgFolderPath = './src/assets/icons/linear';
const outputFilePath = './src/assets/icons/linear-icons.json';

async function main() {
  const svgs = await getSvgFiles(svgFolderPath);
  const data = await Promise.all(svgs.map(parseSvgFile));
  await writeJsonToFile(outputFilePath, data);
  console.log(`Generated JSON file: ${outputFilePath}`);
}

async function getSvgFiles(folderPath) {
  const files = await fs.readdir(folderPath);
  return files.filter(file => path.extname(file) === '.svg');
}

async function parseSvgFile(fileName) {
  const filePath = path.join(svgFolderPath, fileName);
  const svgContent = await fs.readFile(filePath, 'utf-8');
  const label = path.basename(fileName, '.svg');

  return { label, icon: svgContent };
}

async function writeJsonToFile(filePath, data) {
  const jsonData = JSON.stringify(data, null, 2);
  await fs.writeFile(filePath, jsonData);
}

main().catch(error => {
  console.error(error);
});
