const { chromium } = require('playwright');
const http = require('http');
const handler = require('serve-handler');

const server = http.createServer((request, response) => {
  return handler(request, response, { public: '.', rewrites: [{ source: '**', destination: '/index.html' }] });
});

server.listen(8083, async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:8083/create');
  console.log("Navigated to /create");
  await page.waitForTimeout(1000);
  
  // Accept cookies if present
  try {
    const acceptBtn = page.getByRole('button', { name: 'Accept' });
    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
      console.log("Clicked Accept cookies");
    }
  } catch(e) {}
  
  await page.getByPlaceholder(/their name/i).fill('Receiver');
  await page.getByPlaceholder(/your name/i).fill('Sender');
  await page.getByRole('button', { name: /Begin the Magic/i }).click();
  console.log("Clicked Begin the Magic");
  await page.waitForTimeout(500);
  
  await page.fill('textarea', 'Happy birthday!');
  await page.getByRole('button', { name: /Next/i }).click();
  await page.waitForTimeout(500);
  
  await page.getByRole('button', { name: /Next/i }).click();
  await page.waitForTimeout(500);
  
  await page.getByRole('button', { name: /Next/i }).click();
  await page.waitForTimeout(500);
  
  await page.getByRole('button', { name: /Next/i }).click();
  await page.waitForTimeout(500);
  
  const buildBtn = page.getByRole('button', { name: /Got it|Finish|Generate/i });
  await buildBtn.first().click();
  console.log("Clicked build/generate");
  
  await page.waitForSelector('text=/Baking the magic/i', { state: 'attached', timeout: 5000 }).catch(() => console.log("No loading screen attached"));
  console.log("Waiting for loader to disappear...");
  try {
    await page.waitForSelector('text=/Baking the magic/i', { state: 'detached', timeout: 15000 });
    console.log("Loader disappeared! URL:", page.url());
  } catch (e) {
    console.log("Loader did NOT disappear! Still stuck.", e.message);
    // Take screenshot of failure
    await page.screenshot({ path: 'fail.png' });
    process.exit(1);
  }
  
  console.log("Test passed!");
  await browser.close();
  process.exit(0);
});
