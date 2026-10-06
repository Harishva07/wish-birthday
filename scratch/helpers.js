const { chromium } = require('playwright');
const http = require('http');
const handler = require('serve-handler');

async function startCreate(options = {}) {
  const port = options.port || 8090;
  const server = http.createServer((request, response) => {
    return handler(request, response, { public: '.', rewrites: [{ source: '**', destination: '/index.html' }] });
  });

  await new Promise((resolve) => server.listen(port, resolve));

  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext(options.viewport ? { viewport: options.viewport } : {});
  const page = await context.newPage();
  
  await context.addInitScript(() => { window.localStorage.setItem('wishprise_cookie_consent', 'true'); });

  if (options.initScript) {
    await page.addInitScript(options.initScript);
  }

  await page.goto(`http://localhost:${port}/create`);
  await page.waitForTimeout(2000);

  try {
    await page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Accept'));
      if(btn) btn.click();
    });
    await page.waitForTimeout(500);
  } catch(e) {}

  return { server, browser, context, page, port };
}

async function clickBtn(page, regex) {
  return await page.evaluate((r) => {
    const rx = new RegExp(r, 'i');
    const b = Array.from(document.querySelectorAll('button')).find(b => b.getBoundingClientRect().width > 0 && rx.test(b.textContent));
    if (b) {
      b.click();
      return true;
    }
    return false;
  }, regex.source);
}

async function setReactVal(page, selector, val) {
  await page.evaluate(({sel, v}) => {
    const els = Array.from(document.querySelectorAll(sel)).filter(i => i.getBoundingClientRect().width > 0);
    const setV = (el, val) => {
      let proto = Object.getPrototypeOf(el);
      let setter = null;
      while(proto && !setter) {
        let desc = Object.getOwnPropertyDescriptor(proto, 'value');
        if(desc && desc.set) setter = desc.set;
        proto = Object.getPrototypeOf(proto);
      }
      if(setter) {
        setter.call(el, val);
        el.dispatchEvent(new Event('input', {bubbles:true}));
      }
    };
    els.forEach(el => setV(el, v));
  }, {sel: selector, v: val});
}

async function walkToFinalStep(page) {
  // Step 1: Names
  await setReactVal(page, 'input[type="text"]', 'Test Name');
  await clickBtn(page, /Begin the Magic/);
  await page.waitForTimeout(500);

  // Step 2: Cake
  await clickBtn(page, /Looks Delicious|Next Step/);
  await page.waitForTimeout(500);

  // Step 3: Wheel of Wishes
  await clickBtn(page, /Next:/);
  await page.waitForTimeout(500);

  // Step 4: Greeting Card
  await clickBtn(page, /Continue/);
  await page.waitForTimeout(500);

  // Step 5: Words
  await setReactVal(page, 'textarea', 'Test text');
  await clickBtn(page, /Add Sound Magic/);
  await page.waitForTimeout(500);

  // Step 6: Sound
  await clickBtn(page, /Next: Character/);
  await page.waitForTimeout(500);

  // Step 7: PIN
  // Note: the step is likely just PIN or something else.
  // Wait! In the previous debug, step 7 had 'Save PIN & Continue'
  await setReactVal(page, 'input[type="tel"], input[type="password"], input[type="text"]', '1');
  // For the case where it's 1 input or 4 inputs, setting all to '1' will work for both!
  // Wait, if it's 1 input, it expects '1111'.
  await setReactVal(page, 'input[type="tel"]', '1111');
  await setReactVal(page, 'input[type="password"]', '1111');
  
  await clickBtn(page, /Save PIN|Final Step/);
  await page.waitForTimeout(500);

  // Step 8: Final Step
  // It has "Get My Surprise Link"
}

async function teardown({ browser, server }) {
  await browser.close();
  server.close();
}

module.exports = { startCreate, walkToFinalStep, teardown, clickBtn, setReactVal };
