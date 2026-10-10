import fs from 'fs/promises';

async function fileOperations() {
  try {
    // 1. File banao aur text likho
    await fs.writeFile('example.txt', 'Hello! This is created using Node.js fs module.\n');
    console.log('File written successfully.');

    // 2. Usi file me aur text jodo
    await fs.appendFile('example.txt', 'Adding a new line using appendFile.\n');
    console.log('File appended successfully.');

    // 3. File ko read karke terminal me print karo
    const data = await fs.readFile('example.txt', 'utf-8');
    console.log('\n--- Reading File Content ---');
    console.log(data);
  } catch (err) {
    console.error('Error during file operations:', err);
  }
}

fileOperations();