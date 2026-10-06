const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch({ 
      headless: true,
      args: ['--disable-gpu', '--disable-software-rasterizer', '--no-sandbox']
    });
    const context = await browser.newContext({ 
      viewport: { width: 1280, height: 720 }
    });
    const page = await context.newPage();
    
    page.on('pageerror', (err) => console.log('PAGE ERROR:', err));
    page.on('console', (msg) => {
      console.log('CONSOLE:', msg.type(), msg.text());
    });
    
    await page.goto('http://localhost:8080/create', { waitUntil: 'networkidle' });
    
    // Accept cookies
    await page.evaluate(() => localStorage.setItem("wishprise_cookie_consent", "true"));
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(5000);
    
    // Check what rendered
    const inputCount = await page.locator('input').count();
    const btnCount = await page.locator('button').count();
    console.log('Inputs:', inputCount, 'Buttons:', btnCount);
    
    await page.screenshot({ path: 'scratch/s1_wide.png' });
    
    if (inputCount === 0) {
      console.log('No inputs rendered. Dumping HTML...');
      const html = await page.content();
      // Save first 5000 chars
      require('fs').writeFileSync('scratch/page_html.txt', html.substring(0, 5000));
      console.log('HTML saved to scratch/page_html.txt');
      
      // Try waiting longer
      await page.waitForTimeout(10000);
      const inputCount2 = await page.locator('input').count();
      console.log('After 10s more wait, inputs:', inputCount2);
      await page.screenshot({ path: 'scratch/s1_after_wait.png' });
    }
    
    // Try to directly set the React step to 7 via DOM manipulation
    console.log('\n--- Attempting to directly jump to step 7 ---');
    await page.evaluate(() => {
      // Find the React fiber root to change step state
      const rootEl = document.getElementById('root');
      if (rootEl && rootEl._reactRootContainer) {
        console.log('Found React root container');
      }
    });
    
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('ERROR:', error.message);
    process.exit(1);
  }
})();
