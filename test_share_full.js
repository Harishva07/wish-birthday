const { chromium } = require('playwright');
const http = require('http');
const handler = require('serve-handler');
const fs = require('fs');

const server = http.createServer((request, response) => {
  return handler(request, response, { public: '.', rewrites: [{ source: '**', destination: '/index.html' }] });
});

server.listen(8081, async () => {
  console.log('Running test...');
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto('http://localhost:8081');
    console.log('Navigated to homepage');
    
    // Wait for the app to render
    await page.waitForTimeout(2000);
    
    // Check what the text is on the page
    const bodyText = await page.evaluate(() => document.body.innerText);
    console.log('Page text snapshot:', bodyText.substring(0, 500));
    
    // Find the create button by looking for all buttons
    const buttons = await page.evaluate(() => Array.from(document.querySelectorAll('button')).map(b => b.innerText));
    console.log('Available buttons:', buttons);
    
    // Wait for "Create My Surprise" button using a very flexible selector
    const createBtn = page.locator('a[href="/create"]').first();
    await createBtn.click();
    console.log('Clicked Create My Surprise');
    
    // Wait for the name input
    await page.waitForTimeout(1000); // Wait for transition
    await page.waitForSelector('input[placeholder*="name"]', { timeout: 10000 });
    await page.fill('input[placeholder*="name"]', 'Playwright Automation Test');
    console.log('Filled name');
    
    // Next Step
    const nextBtn = page.locator('button', { hasText: /Next/i }).first();
    await nextBtn.click();
    await page.waitForTimeout(1000);
    
    // Message Step
    await page.fill('textarea', 'This is a test message from Playwright automation.');
    console.log('Filled message');
    await nextBtn.click();
    await page.waitForTimeout(1000);
    
    // Photo Step
    // Let's create a dummy file and upload it
    fs.writeFileSync('dummy.jpg', 'fake image content');
    await page.setInputFiles('input[type="file"]', 'dummy.jpg');
    console.log('Uploaded image');
    
    await nextBtn.click();
    await page.waitForTimeout(1000);
    
    // Song Step
    await nextBtn.click();
    await page.waitForTimeout(1000);
    
    // Voice Step
    await nextBtn.click();
    await page.waitForTimeout(1000);
    
    // Cake/Final Step
    const generateBtn = page.locator('button', { hasText: /Let's build it|Got it|Finish|Create/i }).last();
    await generateBtn.click();
    console.log('Clicked Generate button');
    
    // Wait for the share link (url changes to /share/...)
    console.log('Waiting for share link generation...');
    await page.waitForURL('**/share/*', { timeout: 80810 });
    console.log('SUCCESS! Navigated to Share page:', page.url());
    
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
});
