const fs = require('fs');
const path = require('path');


function makeList() {
  const dir = __dirname;
  const files = fs.readdirSync(dir);

  const list = [];
  files.forEach((file) => {
    if (file.endsWith('.json') && ! file.includes('schemas.json')) {
      const name = file.replace('ce-', '').replace('.json', '');
      list.push({ name, url: file });
    }
  });
  console.log(JSON.stringify(list, null, 2));
}

makeList();

