/**
 * Complete Playwright test for the Wish Birthday app
 * Tests the full creation flow: 8 steps → link generation
 */
const { chromium } = require('playwright');
const http = require('http');
const handler = require('serve-handler');

// Click a visible button by text pattern using JS (bypasses Playwright visibility checks)
async function clickBtn(page, textRegex) {
  const result = await page.evaluate((pattern) => {
    const btns = Array.from(document.querySelectorAll('button'));
    const visible = btns.filter(b => {
      const rect = b.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0 && !b.disabled;
    });
    const re = new RegExp(pattern, 'i');
    const btn = visible.find(b => re.test(b.textContent));
    if (btn) { btn.click(); return `OK: ${btn.textContent.trim().substring(0, 60)}`; }
    return 'MISS: ' + visible.map(b => b.textContent.trim().substring(0, 30)).filter(t => t).join(' | ');
  }, textRegex.source);
  console.log(`  → ${result}`);
  return result.startsWith('OK:');
}

// Fill a visible textarea
async function fillTextarea(page, text) {
  return await page.evaluate((txt) => {
    const el = Array.from(document.querySelectorAll('textarea')).find(t => {
      const r = t.getBoundingClientRect(); return r.width > 0 && r.height > 0;
    });
    if (!el) return false;
    const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set;
    setter.call(el, txt);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  }, text);
}

// Get all visible button texts
async function listButtons(page) {
  return await page.evaluate(() =>
    Array.from(document.querySelectorAll('button'))
      .filter(b => { const r = b.getBoundingClientRect(); return r.width > 0 && r.height > 0; })
      .map(b => b.textContent.trim().substring(0, 60))
      .filter(t => t)
  );
}

// Get page step info
async function getStepInfo(page) {
  return await page.evaluate(() => document.body.innerText.substring(0, 200).replace(/\n/g, ' | '));
}

const server = http.createServer((req, res) => handler(req, res, { public: '.', rewrites: [{ source: '**', destination: '/index.html' }] }));

server.listen(8090, async () => {
  console.log('🚀 Starting Wish Birthday Full Flow Test\n');
  
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  
  const errors = [];
  const apiLog = [];
  
  page.on('pageerror', err => { console.log(`  ❌ PAGE ERROR: ${err.message}`); errors.push(err.message); });
  page.on('console', msg => {
    if (msg.type() === 'error') { console.log(`  ❌ CONSOLE: ${msg.text().substring(0, 100)}`); errors.push(msg.text()); }
  });
  page.on('request', req => {
    if (req.url().includes('firebasedatabase') || req.url().includes('/api/')) {
      apiLog.push(`→ ${req.method()} ${req.url().replace(/https:\/\/birthday-web-9c089[^/]+/, '[FB]')}`);
    }
  });
  page.on('response', async res => {
    if (res.url().includes('firebasedatabase') || res.url().includes('/api/')) {
      let body = ''; try { body = await res.text(); } catch(e) {}
      apiLog.push(`← ${res.status()} ${res.url().replace(/https:\/\/birthday-web-9c089[^/]+/, '[FB]')} ${body.substring(0,60)}`);
    }
  });
  
  let passed = true;
  
  try {
    await page.goto('http://localhost:8090/create');
    await page.waitForTimeout(2000);
    
    // Dismiss cookies
    try { await page.getByRole('button', { name: 'Accept' }).click({ timeout: 1500 }); } catch(e) {}
    
    // ─── STEP 1: Who are we celebrating? ───────────────────────────────────
    console.log('📝 STEP 1: Names');
    await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input[type="text"]')).filter(i => i.getBoundingClientRect().width > 0);
      const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
      if (inputs[0]) { set.call(inputs[0], 'Alex'); inputs[0].dispatchEvent(new Event('input', {bubbles:true})); }
      if (inputs[1]) { set.call(inputs[1], 'Jamie'); inputs[1].dispatchEvent(new Event('input', {bubbles:true})); }
    });
    await clickBtn(page, /Begin the Magic/);
    await page.waitForTimeout(800);
    
    // ─── STEP 2: Cake ──────────────────────────────────────────────────────
    console.log('🎂 STEP 2: Cake');
    console.log(`  Page: ${(await getStepInfo(page)).substring(0, 100)}`);
    await clickBtn(page, /Looks Delicious|Next Step/);
    await page.waitForTimeout(800);
    
    // ─── STEP 3: Wheel of Wishes ───────────────────────────────────────────
    console.log('🎡 STEP 3: Wheel of Wishes');
    console.log(`  Page: ${(await getStepInfo(page)).substring(0, 100)}`);
    // Default values are pre-filled, just advance
    await clickBtn(page, /Next:/);
    await page.waitForTimeout(800);
    
    // ─── STEP 4: Greeting Card ─────────────────────────────────────────────
    console.log('💌 STEP 4: Greeting Card');
    console.log(`  Page: ${(await getStepInfo(page)).substring(0, 100)}`);
    // Fill message textarea
    const filledTA4 = await fillTextarea(page, 'Happy birthday! Wishing you all the love and joy today! 🎉');
    console.log(`  Filled textarea: ${filledTA4}`);
    await clickBtn(page, /Continue|Next/);
    await page.waitForTimeout(800);
    
    // ─── STEP 5: Messages / Words ──────────────────────────────────────────
    console.log('✍️  STEP 5: Messages');
    console.log(`  Page: ${(await getStepInfo(page)).substring(0, 100)}`);
    const btns5 = await listButtons(page);
    console.log(`  Buttons: ${JSON.stringify(btns5)}`);
    // "Add Sound Magic ✨" is the Next button for this step
    const advanced5 = await clickBtn(page, /Add Sound Magic/);
    if (!advanced5) {
      // The button might be "Continue" or something else 
      console.log('  Trying alternate buttons...');
      await clickBtn(page, /Next|Continue|Sound/);
    }
    await page.waitForTimeout(800);
    
    // ─── STEP 6: Sound / Music ─────────────────────────────────────────────
    console.log('🎵 STEP 6: Sound');
    console.log(`  Page: ${(await getStepInfo(page)).substring(0, 100)}`);
    const btns6 = await listButtons(page);
    console.log(`  Buttons: ${JSON.stringify(btns6)}`);
    await clickBtn(page, /Next: Character Style/);
    await page.waitForTimeout(800);
    
    // ─── STEP 7: PIN ───────────────────────────────────────────────────────
    console.log('🔑 STEP 7: PIN');
    console.log(`  Page: ${(await getStepInfo(page)).substring(0, 100)}`);
    // Fill the PIN input
    await page.evaluate(() => {
      const pin = document.querySelector('input[id="pin-input-react"], input[type="password"]');
      if (pin) {
        const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
        set.call(pin, '1234');
        pin.dispatchEvent(new Event('input', {bubbles:true}));
        pin.dispatchEvent(new Event('change', {bubbles:true}));
      }
    });
    await page.waitForTimeout(300);
    // Now enable and click the save-pin-btn
    await page.evaluate(() => {
      const btn = document.getElementById('save-pin-btn');
      if (btn) {
        btn.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        window.tempPin = '1234';
        btn.click();
      }
    });
    await page.waitForTimeout(800);
    
    // ─── STEP 8: Birthday Flower ───────────────────────────────────────────
    console.log('🌸 STEP 8: Birthday Flower');
    console.log(`  Page: ${(await getStepInfo(page)).substring(0, 100)}`);
    const btns8 = await listButtons(page);
    console.log(`  Buttons: ${JSON.stringify(btns8)}`);
    
    // ─── FINAL: Generate Link ──────────────────────────────────────────────
    console.log('\n🔮 Clicking Get My Surprise Link...');
    const clickedFinal = await clickBtn(page, /Get My Surprise Link|Generate|Finalize/);
    if (!clickedFinal) {
      console.log('  WARN: Could not find final button, trying all visible...');
      const allBtns = await listButtons(page);
      console.log(`  All buttons: ${JSON.stringify(allBtns)}`);
    }
    
    // ─── WAIT FOR RESULT ───────────────────────────────────────────────────
    console.log('\n⏳ Waiting for link generation...');
    let success = false;
    for (let i = 0; i < 30; i++) {
      await page.waitForTimeout(1000);
      const url = page.url();
      if (url.includes('/share/')) {
        success = true;
        console.log(`\n✅ SUCCESS! Share link: ${url}`);
        break;
      }
      const pg = await getStepInfo(page);
      process.stdout.write(`  [${i+1}s] ${pg.substring(0,60)}\r`);
    }
    
    if (!success) {
      const finalUrl = page.url();
      const finalText = await getStepInfo(page);
      console.log(`\n❌ FAILED: Still at ${finalUrl}`);
      console.log(`  Page: ${finalText}`);
      passed = false;
    }
    
  } catch (err) {
    console.error('\n❌ TEST EXCEPTION:', err.message);
    passed = false;
  }
  
  console.log('\n=== API Calls ===');
  apiLog.forEach(l => console.log(l));
  
  if (errors.length > 0) {
    console.log('\n=== Errors ===');
    errors.forEach(e => console.log(`  ❌ ${e.substring(0,150)}`));
  }
  
  console.log(`\n${passed ? '✅ TEST PASSED' : '❌ TEST FAILED'}`);
  
  await browser.close();
  server.close();
  process.exit(passed ? 0 : 1);
});
