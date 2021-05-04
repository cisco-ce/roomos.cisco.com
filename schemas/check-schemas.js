const fs = require('fs');
const path = require('path');

function check(file) {
  const data = JSON.parse(fs.readFileSync(file));
  const nodes = data.objects;
  const internal = nodes.filter(n => n.attributes.access === 'internal');
  // console.log(`\nSchema: ${file}`);
  // console.log(`Total nodes: ${nodes.length}`);
  // console.log(`Internal nodes: ${internal.length}`);

  if (internal.length) {
    console.log(`\nTHIS SCHEMA CONTAINS INTERNAL APIs!!!\n`);
    console.log(`\nDO NOT COMMIT TO GIT!!!\n`);
    process.exit(1);
  }
  else {
    console.log(`Testing schema ${file}: OK`);
  }
}

function checkAll() {
  const dir = __dirname;
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (file.endsWith('.json') && ! file.includes('schemas.json')) {
      const schema = path.join(dir, file);
      check(schema);
    }
  });
}

checkAll();
