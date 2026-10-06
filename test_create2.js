const { chromium } = require('playwright');
const http = require('http');
const handler = require('serve-handler');

const server = http.createServer((request, response) => {
  return handler(request, response, { public: '.', rewrites: [{ source: '**', destination: '/index.html' }] });
});

server.listen(8085, async () => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto('http://localhost:8085/create');
    await page.waitForTimeout(2000);
    
    // Fill name
    await page.locator('input').nth(0).fill('Sender');
    await page.locator('input').nth(1).fill('Receiver');
    
    // Click next
    const btn1 = page.locator('button', { hasText: /Magic|Next/i }).first();
    await btn1.click();
    await page.waitForTimeout(500);
    
    // Cake/Next
    const btn2 = page.locator('button', { hasText: /Next/i }).last();
    await btn2.click();
    await page.waitForTimeout(500);
    
    // Message
    const textareas = await page.locator('textarea').count();
    if (textareas > 0) {
      await page.fill('textarea', 'Happy birthday!');
    }
    const btn3 = page.locator('button', { hasText: /Next|Continue/i }).last();
    await btn3.click();
    await page.waitForTimeout(500);
    
    // Skip Photo/Song/Voice etc
    for(let i=0; i<4; i++) {
        const next = page.locator('button', { hasText: /Next|Skip|Continue/i }).last();
        if (await next.isVisible()) {
           await next.click();
           await page.waitForTimeout(500);
        }
    }
    
    // Generate/Finish
    const finalBtn = page.locator('button', { hasText: /Create|Finish|Got it|Let's build it/i }).last();
    if (await finalBtn.isVisible()) {
        await finalBtn.click();
    }
    
    console.log('Waiting for share link generation...');
    await page.waitForURL('**/share/*', { timeout: 15000 });
    console.log('SUCCESS! Reached ' + page.url());
    
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
});
