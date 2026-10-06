const { chromium, webkit } = require('playwright');
const http = require('http');
const handler = require('serve-handler');

const SURPRISE_DATA = {
  "id": "test-id",
  "receiver": "Test Receiver",
  "sender": "Test Sender",
  "cakeImage": "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  "fortune": "Test Fortune",
  "cardType": "standard",
  "message": "Happy Birthday! Have a great day!",
  "bgm": "audio/bgm-1.mp3",
  "character": "dog",
  "pin": "1111"
};

async function testReveal(browserType, viewport, name) {
  console.log(`\n--- Running Share Reveal Test: ${name} ---`);
  
  const server = http.createServer((request, response) => {
      return handler(request, response, {
          public: '.',
          rewrites: [ { source: '**', destination: '/index.html' } ]
      });
  });
  
  await new Promise(resolve => server.listen(0, resolve));
  const port = server.address().port;
  
  const browser = await browserType.launch();
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

  // Set up local storage
  await page.goto(`http://localhost:${port}`);
  await page.evaluate((data) => {
      localStorage.setItem('surprise_test-id', JSON.stringify(data));
  }, SURPRISE_DATA);

  // Navigate to share page
  await page.goto(`http://localhost:${port}/share/test-id`);
  await page.waitForTimeout(1000);
  
  console.log("Screenshot: opening (pin screen)");
  await page.screenshot({ path: `scratch/reveal_${name}_1_opening.png` });

  // Enter PIN
  const pinInputs = await page.$$('input[type="tel"], input[type="password"]');
  if (pinInputs.length === 4) {
      for (let i = 0; i < 4; i++) {
          await pinInputs[i].fill('1');
      }
  } else if (pinInputs.length === 1) {
      await pinInputs[0].fill('1111');
  }
  
  await page.waitForSelector('button');
  const btn = await page.$('button');
  await btn.click();
  
  await page.waitForTimeout(2000);
  console.log("Screenshot: gift box");
  await page.screenshot({ path: `scratch/reveal_${name}_2_gift_box.png` });

  // Click gift box
  await page.mouse.click(viewport.width/2, viewport.height/2); // approximate center
  await page.waitForTimeout(2000);
  console.log("Screenshot: cake");
  await page.screenshot({ path: `scratch/reveal_${name}_3_cake.png` });

  // Click to cut cake
  await page.mouse.click(viewport.width/2, viewport.height/2);
  await page.waitForTimeout(2000);
  console.log("Screenshot: card floating out");
  await page.screenshot({ path: `scratch/reveal_${name}_4_card.png` });

  // Click card
  await page.mouse.click(viewport.width/2, viewport.height/2);
  await page.waitForTimeout(2000);
  console.log("Screenshot: final message");
  await page.screenshot({ path: `scratch/reveal_${name}_5_final.png` });

  await browser.close();
  server.close();
  console.log(`Finished ${name}`);
}

(async () => {
    try {
        await testReveal(chromium, { width: 1280, height: 720 }, 'desktop');
        await testReveal(chromium, { width: 390, height: 844 }, 'mobile');
        await testReveal(webkit, { width: 1280, height: 720 }, 'webkit');
    } catch(e) {
        console.log("Reveal tests failed:", e);
    }
})();
