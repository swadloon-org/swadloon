import 'expect-puppeteer';
import puppeteer, { Browser, Page } from 'puppeteer';
import { puppeteerConfig } from '../puppeteer.config';
import { HomePage } from '../pages/home.page';
import { getElementText } from '../utilities';

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

  it('should have a form page with a submit button', async () => {
    await page.goto(`${puppeteerConfig.appURL}/formulaire-vasectomie/`);
    const buttonSubmit = await page.waitFor(`button[type="submit"]`, {
      visible: true,
    });
    await expect(buttonSubmit).toBeTruthy();
    const buttonText = await getElementText({ page, selector: `button[type="submit"]` });
    await expect(buttonText.join(' ')).toMatch(/soumettre/gi);
  });

  afterAll(async () => {
    await browser.close();
  });
});
