/* node tools/page-test.js — drives the page in headless Brave or Chrome through the debugging protocol.
   No dependencies: Node's own WebSocket and fetch. Prints one line per check. */
const {spawn} = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const BROWSERS = [
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/brave-browser'
];
const browser = process.env.PYVIEL_BROWSER || BROWSERS.find(p => fs.existsSync(p));
if (!browser) { console.error('No Brave or Chrome found. Set PYVIEL_BROWSER.'); process.exit(2); }
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const server = spawn(process.execPath, [path.join(__dirname, 'serve.js'), '8781'], {stdio: 'ignore'});
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'pyviel-profile-'));
  const chrome = spawn(browser, ['--headless=new', '--remote-debugging-port=9334', '--user-data-dir=' + profile, '--no-sandbox', '--disable-gpu', '--no-first-run', 'http://127.0.0.1:8781/'], {stdio: 'ignore'});
  let failed = 0, total = 0;
  try {
    let target = null;
    for (let i = 0; i < 60 && !target; i++) {
      await sleep(250);
      try { target = (await (await fetch('http://127.0.0.1:9334/json/list')).json()).find(t => t.type === 'page' && t.url.startsWith('http://127.0.0.1:8781')); } catch (e) {}
    }
    if (!target) throw new Error('the browser did not start');
    const socket = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
    let id = 0;
    const pending = new Map();
    const logs = [];
    socket.onmessage = event => {
      const message = JSON.parse(event.data);
      if (message.id && pending.has(message.id)) { pending.get(message.id)(message); pending.delete(message.id); }
      else if (message.method === 'Runtime.exceptionThrown') logs.push('exception: ' + (message.params.exceptionDetails.exception && message.params.exceptionDetails.exception.description || message.params.exceptionDetails.text));
      else if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') logs.push('console.error: ' + message.params.args.map(a => a.value || a.description).join(' '));
    };
    const send = (method, params) => new Promise(resolve => { const n = ++id; pending.set(n, resolve); socket.send(JSON.stringify({id: n, method, params})); });
    await send('Runtime.enable');
    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {width: 1280, height: 900, deviceScaleFactor: 1, mobile: false});
    await send('Page.navigate', {url: 'http://127.0.0.1:8781/'});
    await sleep(1500);
    const script = fs.readFileSync(path.join(__dirname, 'page-checks.js'), 'utf8');
    const reply = await send('Runtime.evaluate', {expression: script, awaitPromise: true, returnByValue: true, timeout: 120000});
    if (reply.result.exceptionDetails) throw new Error(JSON.stringify(reply.result.exceptionDetails).slice(0, 600));
    for (const [name, ok, detail] of reply.result.result.value) {
      total++;
      if (!ok) failed++;
      console.log((ok ? 'PASS ' : 'FAIL ') + name + (ok || !detail ? '' : '\n     ' + detail));
    }
    total++;
    if (logs.length) { failed++; console.log('FAIL the page raised errors\n     ' + logs.join('\n     ')); } else console.log('PASS the page raised no errors');
    socket.close();
  } finally {
    chrome.kill('SIGKILL'); server.kill('SIGKILL');
    try { fs.rmSync(profile, {recursive: true, force: true}); } catch (e) {}
  }
  console.log(total - failed + ' passed, ' + failed + ' failed');
  process.exitCode = failed ? 1 : 0;
}
main().catch(e => { console.error(e); process.exit(1); });
