const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, './dist');

fs.access(distPath, error => {
  if (!error) {
    fs.rm(distPath, { recursive: true }, error => {
      if (error) {
        console.error(`Error while removing ${distPath}.`, error);
      } else {
        console.log(`rm ${distPath} successful.`);
      }
    });
  } else {
    console.log(`${distPath} does not exist.`);
  }
});
