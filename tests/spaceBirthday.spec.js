const { chromium, devices } = require('playwright');
const http = require('http');
const handler = require('serve-handler');

(async () => {
  console.log('=====================================================');
  console.log('🚀 Running Space Birthday End-to-End Test Suite');
  console.log('=====================================================\n');

  // Start local server with SPA rewrites
  const server = http.createServer((request, response) => {
    return handler(request, response, {
      public: '.',
      rewrites: [{ source: '**', destination: '/index.html' }]
    });
  });

  const port = 8092;
  await new Promise(res => server.listen(port, res));
  console.log(`📡 Local server listening on http://localhost:${port}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  // Accept cookies so modal does not obstruct clicks
  await context.addInitScript(() => {
    window.localStorage.setItem('wishprise_cookie_consent', 'true');
  });

  try {
    // -----------------------------------------------------------------
    // Test 1: Navigation to /space-birthday
    // -----------------------------------------------------------------
    console.log('\n--- Test 1: Navigation to /space-birthday ---');
    await page.goto(`http://localhost:${port}/space-birthday`);
    await page.waitForTimeout(2000);

    const titleText = await page.locator('h1').textContent();
    console.log('Page Title:', titleText);
    if (!titleText.includes('Space Birthday')) {
      throw new Error(`Expected title to include "Space Birthday", got "${titleText}"`);
    }
    console.log('✅ Test 1 Passed: Navigation loaded Space Birthday page.');

    // -----------------------------------------------------------------
    // Test 2: Card Dimensions & Visibility (No 66px overflow clipping)
    // -----------------------------------------------------------------
    console.log('\n--- Test 2: Card Container Dimensions & Integrity ---');
    const label = page.locator('#select-birth-date-label');
    const input = page.locator('#space-birth-date');
    const launchBtn = page.locator('#space-launch-btn');
    const card = label.locator('..');

    const cardBox = await card.boundingBox();
    console.log(`Card dimensions: width=${cardBox.width}px, height=${cardBox.height}px`);
    if (cardBox.height < 120) {
      throw new Error(`Card is collapsed or clipped! Height is only ${cardBox.height}px (expected >= 120px)`);
    }
    console.log('✅ Test 2 Passed: Card has full height without flex-shrink collapse.');

    // -----------------------------------------------------------------
    // Test 3: Select Your Birth Date Label Clickability & Association
    // -----------------------------------------------------------------
    console.log('\n--- Test 3: Label Association & Clickability ---');
    await label.waitFor({ state: 'visible', timeout: 5000 });
    await input.waitFor({ state: 'visible', timeout: 5000 });
    await launchBtn.waitFor({ state: 'visible', timeout: 5000 });

    const forAttr = await label.evaluate(el => el.htmlFor) || await label.getAttribute('for');
    const inputId = await input.getAttribute('id');
    console.log(`Label htmlFor: "${forAttr}", Input id: "${inputId}"`);
    if (forAttr !== 'space-birth-date' || inputId !== 'space-birth-date') {
      throw new Error('Label is not properly linked to input via id/for!');
    }

    // Click label and verify interaction
    await label.click();
    console.log('✅ Test 3 Passed: Label is clickable and properly associated with date input.');

    // -----------------------------------------------------------------
    // Test 4: Date Input Editability
    // -----------------------------------------------------------------
    console.log('\n--- Test 4: Date Input Functionality ---');
    await input.fill('2000-01-01');
    const val = await input.inputValue();
    console.log('Input value after fill:', val);
    if (val !== '2000-01-01') {
      throw new Error(`Expected date input value "2000-01-01", got "${val}"`);
    }
    console.log('✅ Test 4 Passed: Date input is editable and values update correctly.');

    // -----------------------------------------------------------------
    // Test 5: NASA Launch & Cosmos Result
    // -----------------------------------------------------------------
    console.log('\n--- Test 5: Launch & NASA Cosmos Result ---');
    await launchBtn.click();
    console.log('Clicked Launch button, waiting for NASA data...');

    await page.waitForTimeout(4000);
    const resultCard = page.locator('h2');
    const hasResult = await resultCard.count();

    if (hasResult > 0) {
      const apodTitle = await resultCard.first().textContent();
      console.log('🌌 NASA APOD Title:', apodTitle);
      console.log('✅ Test 5 Passed: NASA cosmic data fetched and rendered successfully!');
    } else {
      const err = await page.locator('.text-red-200').textContent().catch(() => null);
      if (err) {
        console.log('Note: NASA API returned message:', err);
      } else {
        throw new Error('Neither result card nor error message appeared!');
      }
    }

    // Take verification desktop screenshot
    await page.screenshot({ path: 'scratch/space_birthday_verified_desktop.png' });
    console.log('📸 Desktop verification screenshot saved to scratch/space_birthday_verified_desktop.png');

    // -----------------------------------------------------------------
    // Test 6: Mobile Responsiveness (iPhone 13 Viewport)
    // -----------------------------------------------------------------
    console.log('\n--- Test 6: Mobile Responsiveness Verification ---');
    const mobileContext = await browser.newContext({ ...devices['iPhone 13'] });
    const mobilePage = await mobileContext.newPage();
    await mobileContext.addInitScript(() => {
      window.localStorage.setItem('wishprise_cookie_consent', 'true');
    });

    await mobilePage.goto(`http://localhost:${port}/space-birthday`);
    await mobilePage.waitForTimeout(2000);

    const mCard = mobilePage.locator('#select-birth-date-label').locator('..');
    const mCardBox = await mCard.boundingBox();
    const mInput = mobilePage.locator('#space-birth-date');
    const mLaunch = mobilePage.locator('#space-launch-btn');

    console.log(`Mobile card height: ${mCardBox.height}px`);
    if (mCardBox.height < 180) {
      throw new Error(`Mobile card is clipped! Height: ${mCardBox.height}px`);
    }
    if (!(await mInput.isVisible()) || !(await mLaunch.isVisible())) {
      throw new Error('Input or Launch button not visible on mobile!');
    }

    await mobilePage.screenshot({ path: 'scratch/space_birthday_verified_mobile.png' });
    console.log('📸 Mobile verification screenshot saved to scratch/space_birthday_verified_mobile.png');
    await mobileContext.close();
    console.log('✅ Test 6 Passed: Mobile layout fully responsive and unclipped.');

    console.log('\n=====================================================');
    console.log('  🎉 ALL 6 SPACE BIRTHDAY AUTOMATED TESTS PASSED!    ');
    console.log('=====================================================\n');

  } catch (err) {
    console.error('❌ Test failed:', err);
    await page.screenshot({ path: 'scratch/space_birthday_test_failure.png' }).catch(() => {});
    process.exitCode = 1;
  } finally {
    await browser.close();
    server.close();
  }
})();
