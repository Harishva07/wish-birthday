const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/thank/demo-123');
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'scratch/thank_you.png'});
  console.log('Screenshot taken');
  await browser.close();
})();
