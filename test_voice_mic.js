const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream']
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('http://localhost:8080/create');
  
  // Fill the form and proceed
  await page.fill('input[placeholder="e.g. Sarah"]', 'Receiver');
  await page.fill('input[placeholder="e.g. Alex"]', 'Sender');
  
  await page.click('button:has-text("Start Your Magic")');
  await page.waitForTimeout(1000);
  
  // Skip to step 4 (voice message)
  await page.click('button:has-text("Continue")');
  await page.waitForTimeout(500);
  
  await page.click('button:has-text("Continue")');
  await page.waitForTimeout(500);
  
  // Record voice
  const recordButton = await page.locator('button:has-text("Record")');
  await recordButton.click();
  await page.waitForTimeout(2000);
  const stopButton = await page.locator('button:has-text("Stop Recording")');
  await stopButton.click();
  await page.waitForTimeout(1000);
  
  // Let's get the page state or check if the audio tag exists
  const audioTags = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('audio')).map(a => a.src);
  });
  console.log('Audio tags after recording in Create:', audioTags);
  
  // Preview
  await page.click('button:has-text("Preview Experience")');
  await page.waitForTimeout(2000);
  
  // Let's check state inside preview window
  const previewAudioTags = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('audio')).map(a => a.src);
  });
  console.log('Audio tags in Preview:', previewAudioTags);
  
  await browser.close();
})();
