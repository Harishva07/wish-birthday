const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: [
      '--use-fake-ui-for-media-stream', 
      '--use-fake-device-for-media-stream',
      '--ignore-gpu-blocklist',
      '--use-gl=angle',
      '--use-angle=swiftshader'
    ]
  });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }
  });
  const page = await context.newPage();
  
  if (!fs.existsSync('scratch/screenshots')) {
    fs.mkdirSync('scratch/screenshots', { recursive: true });
  }

  page.on('console', msg => console.log('BROWSER:', msg.text()));

  await page.goto('http://localhost:8080/create');
  
  // Accept cookies
  await page.evaluate(() => localStorage.setItem("wishprise_cookie_consent", "true"));
  await page.reload();
  
  console.log("Step 1");
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'scratch/screenshots/step_1.png' });
  await page.locator('input').nth(0).fill('Sender');
  await page.locator('input').nth(1).fill('Receiver');
  
  await page.locator('button:has-text("Begin the Magic")').click();
  await page.waitForTimeout(1500);
  
  console.log("Step 2");
  await page.screenshot({ path: 'scratch/screenshots/step_2.png' });
  await page.locator('button:has-text("Looks Delicious")').click();
  await page.waitForTimeout(1500);
  
  console.log("Step 3");
  await page.screenshot({ path: 'scratch/screenshots/step_3.png' });
  await page.locator('button:has-text("Greeting Card")').click();
  await page.waitForTimeout(1500);
  
  console.log("Step 4");
  await page.screenshot({ path: 'scratch/screenshots/step_4.png' });
  await page.locator('button:has-text("Continue to Customize")').click();
  await page.waitForTimeout(1500);

  console.log("Step 5");
  await page.screenshot({ path: 'scratch/screenshots/step_5.png' });
  await page.locator('button:has-text("Add Sound Magic")').click();
  await page.waitForTimeout(1500);
  
  console.log("Step 6");
  await page.screenshot({ path: 'scratch/screenshots/step_6.png' });
  await page.locator('button:has-text("Character Style")').click();
  await page.waitForTimeout(1500);
  
  console.log("Step 7");
  await page.screenshot({ path: 'scratch/screenshots/step_7.png' });
  
  const pinInput = page.locator('#pin-input-react');
  if (await pinInput.count() > 0) {
      await pinInput.fill('1234');
      await page.waitForTimeout(500);
      await page.screenshot({ path: 'scratch/screenshots/step_7_filled.png' });
      await page.locator('#save-pin-btn').click();
      await page.waitForTimeout(1500);
  } else {
      console.log("ERROR: #pin-input-react not found in Step 7!");
      const html = await page.content();
      fs.writeFileSync('scratch/step7_html.txt', html);
  }

  console.log("Step 8");
  await page.screenshot({ path: 'scratch/screenshots/step_8.png' });

  // Start preview
  await page.locator('button:has-text("Preview how receiver sees it")').click();
  await page.waitForTimeout(500);
  
  await page.locator('button:has-text("Start Preview Experience")').click({ force: true });
  await page.waitForTimeout(4000);
  
  console.log("Landing Page");
  await page.screenshot({ path: 'scratch/screenshots/landing_page.png' });

  const startBtn = page.locator('button[aria-label="Start Interactive Experience"]');
  if (await startBtn.isVisible()) {
    await startBtn.evaluate(node => node.click());
    await page.waitForTimeout(5000);
    console.log("Interactive Experience Started");
    await page.screenshot({ path: 'scratch/screenshots/interactive_exp.png' });
  } else {
    console.log("Start Interactive Experience button not found!");
    const html = await page.content();
    fs.writeFileSync('scratch/landing_page_html.txt', html);
  }

  await browser.close();
  console.log("Done");
})();
