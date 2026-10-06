const { chromium } = require('playwright');
const http = require('http');
const handler = require('serve-handler');

const server = http.createServer((request, response) => {
  return handler(request, response, { public: '.' });
});

server.listen(3000, async () => {
  console.log('Running test...');
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('BROWSER:', msg.text()));
    await page.goto('http://localhost:3000/test.html');
    
    await page.waitForSelector('h1', { timeout: 60000 });
    const result = await page.evaluate(() => document.querySelector('h1').innerText);
    console.log('Result:', result);
    
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
});
