const fs = require('fs');
const path = require('path');

// Read the component.d.ts file
const componentDefs = fs.readFileSync('src/components.d.ts', 'utf8');

const componentNames = componentDefs.match(/"amalitech-\w+"/g);

componentNames.forEach(name => {
  const componentName = name.replace(/"/g, '');

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${componentName} Preview</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
    <script type="module" src="/build/amalitech-design-system.esm.js"></script>
    <script nomodule src="/build/build/amalitech-design-system.js"></script>
    <link rel="stylesheet" href="/build/amalitech-design-system.css" />
    <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  </head>
  <body>
    <${componentName}></${componentName}>
  </body>
  </html>
  `;

  // Write the HTML content to a new HTML file in the html directory
  // only if the file does not already exist
  fs.access(`${__dirname}/src/html/${componentName}.html`, fs.constants.F_OK, err => {
    if (err) {
      fs.writeFile(`${__dirname}/src/html/${componentName}.html`, htmlContent, err => {
        if (err) {
          console.error('Error creating file:', err);
        } else {
          console.log(`${componentName}.html created successfully!`);
        }
      });
    } else {
      // console.log('File already exists. Not overwriting.');
    }
  });
});
