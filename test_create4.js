const { chromium } = require('playwright');
const http = require('http');
const handler = require('serve-handler');

const server = http.createServer((request, response) => {
  return handler(request, response, { public: '.', rewrites: [{ source: '**', destination: '/index.html' }] });
});

server.listen(8087, async () => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto('http://localhost:8087/create');
    await page.waitForTimeout(3000);
    
    const bodyText = await page.evaluate(() => document.body.innerText);
    console.log("Body TEXT:\\n", bodyText);
    
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
});
