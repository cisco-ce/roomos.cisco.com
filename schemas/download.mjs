import fs from 'fs/promises';
import path from 'path';

// Configuration
const INPUT_FILE = './schemas.json';
const BASE_URL = 'https://roomos.cisco.com/api/schema/';

async function downloadSchemas() {
  try {
    // 1. Read and parse the local JSON file
    const data = await fs.readFile(INPUT_FILE, 'utf-8');
    const schemas = JSON.parse(data);

    console.log(`🚀 Found ${schemas.length} schemas. Starting sequential download...\n`);

    for (const schema of schemas) {
      const { name } = schema;
      
      // Construct the URL (encoding spaces/special characters)
      const fileName = `${name}.json`;
      const url = `${BASE_URL}${encodeURIComponent(name)}`;
      const filePath = path.join(process.cwd(), fileName);

      try {
        console.log(`📥 Fetching: ${url}...`);
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch ${name}: ${response.statusText} (Status: ${response.status})`);
        }

        const jsonContent = await response.json();

        // 2. Save the file locally
        const apis = jsonContent?.objects?.length || '⛔️ 0'
        await fs.writeFile(filePath, JSON.stringify(jsonContent, null, 2));
        console.log(`✅ Saved: ${fileName} with ${apis} APIs`);

      } catch (err) {
        console.error(`❌ Error downloading ${name}:`, err.message);
      }
      
      // Optional: Add a tiny delay to be polite to the server
      // await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log('\n✨ All done!');

  } catch (error) {
    console.error('Critical Error:', error.message);
  }
}

downloadSchemas();