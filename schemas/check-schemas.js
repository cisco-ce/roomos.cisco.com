const fs = require('fs');
const path = require('path');

function check(file) {
  const data = JSON.parse(fs.readFileSync(file));
  const nodes = data.objects;
  const internal = nodes.filter(n => n.attributes.access === 'internal');
  console.log(`\nSchema: ${file}`);
  console.log(`Total nodes: ${nodes.length}`);
  console.log(`Internal nodes: ${internal.length}`);

  if (internal.length) {
    console.log(`\nTHIS SCHEMA CONTAINS internal APIs!!!\n`);
    process.exit(1);
  }
}

function checkAll() {
  const files = fs.readdirSync('.');

  files.forEach((file) => {
    if (file.endsWith('.json') && ! file.includes('schemas.json')) {
      const schema = path.join('.', file);
      check(schema);
    }
  });
}

checkAll();
