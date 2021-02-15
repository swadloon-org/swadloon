import puppeteer from 'puppeteer';

export async function navigateToApp(page: puppeteer.Page, appURL: string) {
  await page.goto(appURL, {
    waitUntil: 'networkidle0',
  });
}
