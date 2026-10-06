const { chromium } = require('playwright');
const http = require('http');
const handler = require('serve-handler');

const server = http.createServer((request, response) => {
  return handler(request, response, { public: '.', rewrites: [{ source: '**', destination: '/index.html' }] });
});

server.listen(8083, async () => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto('http://localhost:8083/create');
    await page.waitForTimeout(2000);
    
    // Fill name
    await page.fill('input[placeholder*="name"]', 'Test Name');
    
    // Click next
    const nextBtn = page.locator('button', { hasText: /Next/i }).first();
    await nextBtn.click();
    await page.waitForTimeout(500);
    
    // Message
    await page.fill('textarea', 'Happy birthday!');
    await nextBtn.click();
    await page.waitForTimeout(500);
    
    // Photo
    await nextBtn.click();
    await page.waitForTimeout(500);
    
    // Song
    await nextBtn.click();
    await page.waitForTimeout(500);
    
    // Voice
    await nextBtn.click();
    await page.waitForTimeout(500);
    
    // Passkey Iframe Step
    await page.waitForTimeout(1000);
    const frame = page.frameLocator('iframe');
    await frame.locator('#createPinInput').fill('1234');
    await frame.locator('#nextBtn').click();
    await page.waitForTimeout(1500);
    
    // Final Step (Flower)
    const finalBtn = page.locator('button').last();
    await finalBtn.click();
    
    await page.waitForURL('**/share/*', { timeout: 15000 });
    console.log('Success: Reached ' + page.url());
    
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
});
