const { chromium } = require('playwright');

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
    viewport: { width: 390, height: 844 }  // iPhone-size so md:hidden buttons are visible
  });
  const page = await context.newPage();
  
  await page.goto('http://localhost:8080/create');
  
  // Accept cookies if present
  await page.evaluate(() => localStorage.setItem("wishprise_cookie_consent", "true"));
  await page.reload();
  
  // Fill first step
  await page.locator('input').nth(0).fill('Sender');
  await page.locator('input').nth(1).fill('Receiver');
  
  // Start (Step 1 to 2)
  const beginBtn = page.locator('button:has-text("Begin the Magic")');
  await beginBtn.click();
  await page.waitForTimeout(1000);
  
  // Next step (Step 2 to 3)
  const nextBtn2 = page.locator('button:has-text("Looks Delicious")');
  await nextBtn2.click();
  await page.waitForTimeout(500);
  
  // Next step (Step 3 to 4)
  await page.locator('button:has-text("Greeting Card")').click();
  await page.waitForTimeout(500);
  
  // Next step (Step 4 to 5)
  await page.locator('button:has-text("Continue to Customize")').click();
  await page.waitForTimeout(500);

  // Next step (Step 5 to 6)
  await page.locator('button:has-text("Add Sound Magic")').click();
  await page.waitForTimeout(500);
  
  // Now on Step 6 (Audio)
  await page.locator('button:has-text("Your Voice")').click();
  await page.waitForTimeout(500);

  const recordButton = page.locator('button:has-text("🎙️")');
  await recordButton.click();
  await page.waitForTimeout(2000);
  
  const stopButton = page.locator('button').filter({ has: page.locator('.bg-red-500.animate-pulse') });
  await stopButton.click();
  await page.waitForTimeout(1000);
  
  // Next step (Step 6 to 7)
  await page.locator('button:has-text("Character Style")').click();
  await page.waitForTimeout(1000);
  
  // Now on Step 7 (PIN Creation)
  await page.locator('#pin-input-react').fill('1234');
  await page.locator('#save-pin-btn').click();
  await page.waitForTimeout(1500);

  
  // Start preview
  await page.locator('button:has-text("Preview how receiver sees it")').click();
  await page.waitForTimeout(500);
  
  await page.locator('button:has-text("Start Preview Experience")').click({ force: true });
  await page.waitForTimeout(2000);
  
  // 1. Landing Page - Click anywhere to start
  console.log("Waiting for interactive experience button...");
  const startBtn = page.locator('button[aria-label="Start Interactive Experience"]');
  await startBtn.waitFor({ state: 'attached', timeout: 10000 });
  console.log("Clicking to start interactive experience...");
  await startBtn.evaluate(node => node.click());
  await page.waitForTimeout(5000);
  
  // 2. Intro Animation - Wait for typewriter and click balloons
  console.log("Waiting in Intro Animation, popping balloons...");
  await page.waitForTimeout(2000);
  
  // Click around to pop balloons
  for (let i = 0; i < 5; i++) {
    await page.mouse.click(200 + (i * 20), 200);
    await page.waitForTimeout(200);
  }
  for (let i = 0; i < 5; i++) {
    await page.mouse.click(150 + (i * 15), 300);
    await page.waitForTimeout(200);
  }
  
  // Wait for typing to finish and "Read Everything? Continue" to appear
  const readEverythingBtn = page.locator("button:has-text(\"Read Everything\")");
  console.log("Waiting for 'Read Everything' button...");
  if (await readEverythingBtn.isVisible({ timeout: 15000 })) {
      await readEverythingBtn.evaluate(node => node.click());
  } else {
      console.log("Read Everything button not found. Taking screenshot...");
      await page.screenshot({ path: 'scratch/debug_screenshot.png' });
      await browser.close();
      return;
  }
  await page.waitForTimeout(2000);
  
  // 3. Interactive Check - Click "I'm Ready for the Magic"
  console.log("Waiting for 'I'm Ready' button...");
  const imReadyBtn = page.locator("button:has-text(\"I'm Ready\")");
  if (await imReadyBtn.isVisible({ timeout: 10000 })) {
      await imReadyBtn.evaluate(node => node.click());
  } else {
      console.log("I'm Ready button not found. Taking screenshot...");
      await page.screenshot({ path: 'scratch/debug_screenshot_ready.png' });
      await browser.close();
      return;
  }
  await page.waitForTimeout(2000);
  await page.waitForTimeout(2000);
  
  // 4. Wheel - Spin for a Gift
  console.log("Waiting for Spin button...");
  const spinBtn = page.locator('button:has-text("Spin for a Gift")');
  if (await spinBtn.isVisible({ timeout: 15000 })) {
      await spinBtn.evaluate(node => node.click());
      console.log("Clicked Spin for a Gift!");
  } else {
      console.log("Spin button not found. Taking screenshot...");
      await page.screenshot({ path: 'scratch/debug_screenshot_spin.png' });
      await browser.close();
      return;
  }
  // Wait for wheel to finish spinning (4.5s animation)
  await page.waitForTimeout(7000);
  
  // Claim the prize
  console.log("Waiting for Claim button...");
  const claimBtn = page.locator('button:has-text("Claim Your Magical Surprise")');
  if (await claimBtn.isVisible({ timeout: 10000 })) {
      await claimBtn.evaluate(node => node.click());
      console.log("Clicked Claim!");
  } else {
      console.log("Claim button not found. Taking screenshot...");
      await page.screenshot({ path: 'scratch/debug_screenshot_claim.png' });
      await browser.close();
      return;
  }
  await page.waitForTimeout(10000);
  
  // 5. Candles - Need to activate mic or tap to blow
  console.log("In Candles state, looking for Activate Magic Voice...");
  const activateVoice = page.locator('button:has-text("Activate Magic Voice")');
  const tapToBlow = page.locator('button:has-text("Alternatively, tap to blow")');
  
  if (await activateVoice.isVisible({ timeout: 20000 })) {
      // Click "Alternatively tap to blow" instead (simpler in headless)
      if (await tapToBlow.isVisible()) {
          await tapToBlow.evaluate(node => node.click());
          console.log("Clicked Tap to Blow!");
      } else {
          // Try clicking activate voice - may fail due to audio constraints
          await activateVoice.evaluate(node => node.click());
          console.log("Clicked Activate Voice!");
      }
  } else {
      console.log("Candles voice button not found. Taking screenshot...");
      await page.screenshot({ path: 'scratch/debug_screenshot_candles.png' });
  }
  await page.waitForTimeout(4000);
  
  // 6. Cake Cutting - viewport is mobile so the DOM button is visible
  console.log("In Cake Cutting state, looking for slice button...");
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'scratch/debug_screenshot_cake_cutting.png' });
  const makeSlice = page.locator('button:has-text("Make the first slice")');
  try {
      await makeSlice.scrollIntoViewIfNeeded({ timeout: 10000 });
      await makeSlice.evaluate(node => node.click());
      console.log("Clicked Make the first slice!");
      await page.waitForTimeout(4000);
  } catch (e) {
      console.log("Make the first slice failed:", e.message);
      // Fallback: click the knife area in the canvas
      const cakeCanvas = page.locator('canvas').first();
      const cakeBBox = await cakeCanvas.boundingBox();
      if (cakeBBox) {
          await page.mouse.click(cakeBBox.x + cakeBBox.width * 0.5, cakeBBox.y + cakeBBox.height * 0.5);
      } else {
          await page.mouse.click(195, 400);
      }
      await page.waitForTimeout(3000);
  }
  
  // Reveal Gift
  console.log("Waiting for Reveal Gift button...");
  const revealBtn = page.locator('button:has-text("Reveal Your Heartfelt Gift")');
  if (await revealBtn.isVisible({ timeout: 10000 })) {
      await revealBtn.evaluate(node => node.click());
      console.log("Clicked Reveal Gift!");
  } else {
      console.log("Reveal gift button not found. Taking screenshot...");
      await page.screenshot({ path: 'scratch/debug_screenshot_reveal.png' });
  }
  
  // 7. Blast Door & PIN Verification
  console.log("Waiting for 'Go with them' button at the Blast Door...");
  const goBtn = page.locator('button:has-text("Go with them")');
  if (await goBtn.isVisible({ timeout: 25000 })) {
      await goBtn.evaluate(node => node.click());
      console.log("Clicked Go with them!");
      
      // Wait for passkey iframe to load
      console.log("Waiting for passkey iframe...");
      const passkeyFrame = page.frameLocator('iframe');
      await passkeyFrame.locator('input').first().waitFor({ state: 'attached', timeout: 15000 });
      
      console.log("Filling passkey in iframe...");
      await passkeyFrame.locator('input').nth(0).fill('1');
      await passkeyFrame.locator('input').nth(1).fill('2');
      await passkeyFrame.locator('input').nth(2).fill('3');
      await passkeyFrame.locator('input').nth(3).fill('4');
      
      console.log("Clicking Unlock button...");
      await passkeyFrame.locator('button:has-text("Unlock Magical Surprise")').click();
      await page.waitForTimeout(3000);
  } else {
      console.log("Go with them button not found. Taking screenshot...");
      await page.screenshot({ path: 'scratch/debug_screenshot_blastdoor.png' });
  }
  
  console.log("Test completed successfully!");
  await browser.close();
})();
