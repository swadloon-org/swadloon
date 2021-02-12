import 'expect-puppeteer';
import puppeteer, { Browser, Page } from 'puppeteer';
import { puppeteerConfig } from '../puppeteer.config';
import { HomePage } from '../pages/home.page';

describe('in the navigation test suite', () => {
  let page: Page;
  let browser: Browser;

  beforeAll(async () => {
    browser = await puppeteer.launch(puppeteerConfig.launchOptions);
    page = await browser.newPage();
  });

  it('should have a footer', async () => {
    await page.goto(puppeteerConfig.appURL);

    const footer = await page.waitFor(HomePage.footer, {
      visible: true,
    });

    await expect(footer).toBeTruthy();
  });

  afterAll(async () => {
    await browser.close();
  });
});
