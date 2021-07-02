import fsp from 'fs/promises';
import puppeteer from 'puppeteer';

/**
 * Uses puppeteer to capture the index.html file of a react app and output
 * a html file that can be use as an application shell (displayed while app is loading)
 */
async function generateReactAppShellPlugin() {
  await generateReactSSRRoot('https://localhost:9000/index-shell.html');
}

async function generateReactSSRRoot(url: string) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  const html = await page.$eval('#index', (e) => e.outerHTML); // serialized HTML of page DOM.
  try {
    await fsp.writeFile('./src/client/index-shell.html', html);
  } catch (error: any) {
    console.error(error);
  }
  await browser.close();
  return html;
}

generateReactAppShellPlugin();
