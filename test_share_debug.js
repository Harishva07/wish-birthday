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
    
    await page.goto('http://localhost:3000');
    console.log('Navigated to homepage');
    
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'playwright-homepage.png' });
    console.log('Saved screenshot to playwright-homepage.png');
    
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
});
