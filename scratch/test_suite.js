const { chromium } = require('playwright');
const http = require('http');
const handler = require('serve-handler');
const fs = require('fs');

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
  return result.startsWith('OK:');
}

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

async function getStepInfo(page) {
  return await page.evaluate(() => document.body.innerText.substring(0, 1000).replace(/\n/g, ' | '));
}

const server = http.createServer((req, res) => handler(req, res, { public: '.', rewrites: [{ source: '**', destination: '/index.html' }] }));

async function runTests() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const results = [];
  
  const takeScreenshot = async (page, name) => {
    await page.screenshot({ path: `scratch/${name}.png` });
  };

  // --- Test A: Maintenance Mode ---
  try {
    console.log('--- Running Test A: Maintenance Mode ---');
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // Mock true
    // Mock true
    await page.addInitScript(() => { window.__TEST_MAINTENANCE__ = true; });
    await page.goto('http://localhost:8091/create');
    await page.waitForTimeout(2000);
    const textTrue = await getStepInfo(page);
    let passTrue = textTrue.toLowerCase().includes('maintenance') || textTrue.toLowerCase().includes('soon');
    if (!passTrue) await takeScreenshot(page, 'test_a_fail_true');
    
    // Mock false
    await page.addInitScript(() => { window.__TEST_MAINTENANCE__ = false; });
    await page.goto('http://localhost:8091/create');
    await page.waitForTimeout(2000);
    const textFalse = await getStepInfo(page);
    let passFalse = textFalse.toLowerCase().includes('begin the magic') || textFalse.toLowerCase().includes('names');
    if (!passFalse) await takeScreenshot(page, 'test_a_fail_false');
    
    results.push({ test: 'A: Maintenance Mode', pass: passTrue && passFalse, notes: `Maintenance=${passTrue}, Normal=${passFalse}` });
    await context.close();
  } catch(e) {
    results.push({ test: 'A: Maintenance Mode', pass: false, notes: e.message });
  }

  // --- Test B: Firestore Blocked ---
  try {
    console.log('--- Running Test B: Firestore Blocked ---');
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.route('**/*firebaseio.com/**', route => route.abort());
    await page.route('**/*firebasedatabase.app/**', route => route.abort());
    
    await page.goto('http://localhost:8091/create');
    await page.waitForTimeout(2000);
    
    // Quick run to final step
    await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input[type="text"]')).filter(i => i.getBoundingClientRect().width > 0);
      const setV = (e,v) => { Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set.call(e,v); e.dispatchEvent(new Event('input',{bubbles:true})); }; if(inputs[0]) setV(inputs[0],'Alex'); if(inputs[1]) setV(inputs[1],'Jamie');
      
      
    });
    await clickBtn(page, /Begin the Magic/); await page.waitForTimeout(500);
    await clickBtn(page, /Looks Delicious|Next Step/); await page.waitForTimeout(500);
    await clickBtn(page, /Next:/); await page.waitForTimeout(500);
    await fillTextarea(page, 'Happy birthday!'); await clickBtn(page, /Continue|Next/); await page.waitForTimeout(500);
    await clickBtn(page, /Add Sound Magic/); await page.waitForTimeout(500);
    await clickBtn(page, /Next: Character Style/); await page.waitForTimeout(500);
    await page.evaluate(() => {
      const pin = document.querySelector('input[type="password"]');
      if (pin) { pin.value = '1234'; pin.dispatchEvent(new Event('input', {bubbles:true})); }
    });
    await page.evaluate(() => {
      const btn = document.getElementById('save-pin-btn');
      if (btn) { btn.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none'); window.tempPin = '1234'; btn.click(); }
    });
    await page.waitForTimeout(500);
    await clickBtn(page, /Get My Surprise Link|Generate/);
    
    let errorShown = false;
    let hung = true;
    for(let i=0; i<20; i++) {
      await page.waitForTimeout(1000);
      const txt = await getStepInfo(page);
      if (txt.toLowerCase().includes('error') || txt.toLowerCase().includes('failed') || txt.toLowerCase().includes('try again') || await page.evaluate(() => document.querySelector('.error-toast, .error-message') !== null)) {
        errorShown = true;
        hung = false;
        break;
      }
      if (txt.toLowerCase().includes('share')) {
        hung = false; break;
      }
    }
    if (!errorShown) await takeScreenshot(page, 'test_b_fail');
    results.push({ test: 'B: DB Blocked', pass: errorShown, notes: errorShown ? 'Showed error' : (hung ? 'Hung loading' : 'Unexpected state') });
    await context.close();
  } catch(e) {
    results.push({ test: 'B: DB Blocked', pass: false, notes: e.message });
  }

  // --- Test C: Validation ---
  try {
    console.log('--- Running Test C: Validation ---');
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:8091/create');
    await page.waitForTimeout(2000);
    
    // Empty names
    await clickBtn(page, /Begin the Magic/);
    await page.waitForTimeout(500);
    const step1Txt = await getStepInfo(page);
    let passNames = !step1Txt.toLowerCase().includes('cake'); // should not advance
    
    await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input[type="text"]')).filter(i => i.getBoundingClientRect().width > 0);
      if(inputs[0]) { inputs[0].value = 'A'; inputs[0].dispatchEvent(new Event('input', {bubbles:true})); }
      if(inputs[1]) { inputs[1].value = 'B'; inputs[1].dispatchEvent(new Event('input', {bubbles:true})); }
    });
    await clickBtn(page, /Begin the Magic/); await page.waitForTimeout(500);
    await clickBtn(page, /Looks Delicious|Next Step/); await page.waitForTimeout(500);
    await clickBtn(page, /Next:/); await page.waitForTimeout(500);
    
    // Empty message
    await fillTextarea(page, '');
    await clickBtn(page, /Continue|Next/);
    await page.waitForTimeout(500);
    const step4Txt = await getStepInfo(page);
    let passMsg = !step4Txt.toLowerCase().includes('sound magic') && !step4Txt.toLowerCase().includes('pour your heart'); // should not advance to step 5
    
    if (!(passNames && passMsg)) await takeScreenshot(page, 'test_c_fail');
    results.push({ test: 'C: Validation', pass: passNames && passMsg, notes: `Empty Names=${passNames}, Empty Msg=${passMsg}` });
    await context.close();
  } catch(e) {
    results.push({ test: 'C: Validation', pass: false, notes: e.message });
  }

  // --- Test D: Go Back ---
  try {
    console.log('--- Running Test D: Go Back ---');
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:8091/create');
    await page.waitForTimeout(2000);
    
    await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input[type="text"]')).filter(i => i.getBoundingClientRect().width > 0);
      const setV = (e,v) => { Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set.call(e,v); e.dispatchEvent(new Event('input',{bubbles:true})); }; if(inputs[0]) setV(inputs[0],'Alex'); if(inputs[1]) setV(inputs[1],'Jamie');
      
      
    });
    await clickBtn(page, /Begin the Magic/); await page.waitForTimeout(500);
    await clickBtn(page, /Looks Delicious|Next Step/); await page.waitForTimeout(500);
    
    // Step 3
    await clickBtn(page, /Go Back/); await page.waitForTimeout(500);
    // Back to Step 2? Wait, Step 3 Go Back goes to Step 2
    const step2Back = await getStepInfo(page);
    let passStep3Back = step2Back.toLowerCase().includes('cake');
    
    await clickBtn(page, /Looks Delicious|Next Step/); await page.waitForTimeout(500); // step 2 -> 3
    await clickBtn(page, /Next:/); await page.waitForTimeout(500); // step 3 -> 4
    await clickBtn(page, /Continue/); await page.waitForTimeout(500); // step 4 -> 5
    
    // Step 5
    await fillTextarea(page, 'Test Msg'); await page.waitForTimeout(500);
    await clickBtn(page, /Go Back/); await page.waitForTimeout(500); // Back to Step 4
    await clickBtn(page, /Continue/); await page.waitForTimeout(500); // Forward to Step 5
    
    const textVal = await page.evaluate(() => {
      const el = Array.from(document.querySelectorAll('textarea')).find(t => t.getBoundingClientRect().width > 0);
      return el ? el.value : '';
    });
    let passStep5Back = (textVal === 'Test Msg');
    
    if (!(passStep3Back && passStep5Back)) await takeScreenshot(page, 'test_d_fail');
    results.push({ test: 'D: Go Back', pass: passStep3Back && passStep5Back, notes: `S3Back=${passStep3Back}, S5BackMsgKept=${passStep5Back}` });
    await context.close();
  } catch(e) {
    results.push({ test: 'D: Go Back', pass: false, notes: e.message });
  }

  // --- Test E: Page Refresh ---
  try {
    console.log('--- Running Test E: Page Refresh ---');
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:8091/create');
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input[type="text"]')).filter(i => i.getBoundingClientRect().width > 0);
      const setV = (e,v) => { Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set.call(e,v); e.dispatchEvent(new Event('input',{bubbles:true})); }; if(inputs[0]) setV(inputs[0],'Alex'); if(inputs[1]) setV(inputs[1],'Jamie');
      
      
    });
    await clickBtn(page, /Begin the Magic/); await page.waitForTimeout(500);
    await clickBtn(page, /Looks Delicious|Next Step/); await page.waitForTimeout(500);
    
    await page.reload();
    await page.waitForTimeout(1000);
    
    const txt = await getStepInfo(page);
    let state = 'Unknown';
    if(txt.toLowerCase().includes('cake')) state = 'Stayed on Step 2';
    else if(txt.toLowerCase().includes('names')) state = 'Reset to Step 1';
    
    results.push({ test: 'E: Page Refresh', pass: true, notes: state }); // Just reporting behavior
    await context.close();
  } catch(e) {
    results.push({ test: 'E: Page Refresh', pass: false, notes: e.message });
  }

  // --- Test F: Mobile Size ---
  try {
    console.log('--- Running Test F: Mobile Size ---');
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto('http://localhost:8091/create');
    await page.waitForTimeout(2000);
    
    await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input[type="text"]')).filter(i => i.getBoundingClientRect().width > 0);
      const setV = (e,v) => { Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set.call(e,v); e.dispatchEvent(new Event('input',{bubbles:true})); }; if(inputs[0]) setV(inputs[0],'Alex'); if(inputs[1]) setV(inputs[1],'Jamie');
      
      
    });
    let s1 = await clickBtn(page, /Begin the Magic/); await page.waitForTimeout(500);
    let s2 = await clickBtn(page, /Looks Delicious|Next Step/); await page.waitForTimeout(500);
    let s3 = await clickBtn(page, /Next:/); await page.waitForTimeout(500);
    
    if (!(s1 && s2 && s3)) await takeScreenshot(page, 'test_f_fail');
    results.push({ test: 'F: Mobile Size', pass: s1 && s2 && s3, notes: `Advanced to S4: ${s1&&s2&&s3}` });
    await context.close();
  } catch(e) {
    results.push({ test: 'F: Mobile Size', pass: false, notes: e.message });
  }

  // --- Test G: Share Page ---
  try {
    console.log('--- Running Test G: Share Page ---');
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // Valid ID (we mock the API)
    await page.route('**/*.json*', route => {
      if (route.request().url().includes('doesnotexist')) {
        route.fulfill({ status: 200, contentType: 'application/json', body: 'null' });
      } else if (route.request().url().includes('firebaseio.com') || route.request().url().includes('firebasedatabase.app')) {
        route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ cakeFlavor: 'vanilla', receiverName: 'Alice' }) });
      } else {
        route.continue();
      }
    });
    
    await page.goto('http://localhost:8091/share/123456');
    await page.waitForTimeout(2000);
    const validTxt = await getStepInfo(page);
    let passValid = !validTxt.toLowerCase().includes('not found') && !validTxt.toLowerCase().includes('error');
    if (!passValid) await takeScreenshot(page, 'test_g_fail_valid');
    
    await page.goto('http://localhost:8091/share/doesnotexist');
    await page.waitForTimeout(2000);
    const invalidTxt = await getStepInfo(page);
    let passInvalid = invalidTxt.toLowerCase().includes('different path') || invalidTxt.toLowerCase().includes('couldn\'t find') || invalidTxt.toLowerCase().includes('404');
    if (!passInvalid) { await takeScreenshot(page, 'test_g_fail_invalid'); console.log('INVALID_TXT:', invalidTxt); }
    
    results.push({ test: 'G: Share Page', pass: passValid && passInvalid, notes: `Valid=${passValid}, Invalid=${passInvalid}` });
    await context.close();
  } catch(e) {
    results.push({ test: 'G: Share Page', pass: false, notes: e.message });
  }

  console.log('\n=======================================');
  console.log('            TEST RESULTS               ');
  console.log('=======================================');
  console.table(results);
  
  await browser.close();
  process.exit(0);
}

server.listen(8091, () => {
  runTests();
});

