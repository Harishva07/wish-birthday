const { chromium } = require('playwright');
const http = require('http');
const handler = require('serve-handler');

const server = http.createServer((request, response) => {
  return handler(request, response, { public: '.' });
});

server.listen(8082, async () => {
  console.log('Running test...');
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto('http://localhost:8082');
    console.log('Navigated to homepage');
    
    // Find the Create My Surprise button and click it
    await page.getByText(/Create My Surprise/i).click();
    console.log('Clicked Create My Surprise');
    
    // Wait for the name input
    await page.waitForSelector('input[placeholder*="name"]', { timeout: 10000 });
    await page.fill('input[placeholder*="name"]', 'Playwright Tester');
    
    // Click through the form steps
    // Step 2: Message
    const nextBtn = page.getByText(/Next Magic Step/i);
    await nextBtn.click();
    await page.waitForTimeout(500); // animations
    
    // Fill message
    await page.fill('textarea', 'This is a test message from Playwright automation.');
    await nextBtn.click();
    await page.waitForTimeout(500);
    
    // Step 3: Photo (optional)
    await nextBtn.click();
    await page.waitForTimeout(500);
    
    // Step 4: Music (optional)
    await nextBtn.click();
    await page.waitForTimeout(500);
    
    // Step 5: Voice (optional)
    await nextBtn.click();
    await page.waitForTimeout(500);
    
    // Step 6: Cake
    // It says "Got it! Let's build it" or similar?
    // In Create-CbT8H4t9.js we have a "Generate link" or similar button at the end.
    // Let's just look for "Got it! Let's build it" or "Generate link"
    
    const generateBtn = page.getByRole('button', { name: /Got it|Let's build it|Generate link|Finish/i });
    if (await generateBtn.isVisible()) {
        await generateBtn.click();
    } else {
        await page.getByText(/Finish/i).click();
    }
    console.log('Clicked submit');
    
    // Wait for the share link or loading to disappear
    await page.waitForSelector('text=/Baking the magic/i', { state: 'attached', timeout: 5000 }).catch(() => {});
    await page.waitForSelector('text=/Baking the magic/i', { state: 'detached', timeout: 15000 });
    console.log('Loading screen disappeared');
    
    // Should navigate to /share/...
    await page.waitForURL('**/share/*', { timeout: 10000 });
    console.log('Successfully navigated to Share page:', page.url());
    
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
});
