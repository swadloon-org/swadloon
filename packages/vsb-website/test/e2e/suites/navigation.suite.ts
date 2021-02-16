import 'expect-puppeteer';
import puppeteer, { Browser, Page } from 'puppeteer';
import { HomePage } from '../pages/home.page';
import { puppeteerConfig } from '../puppeteer.config';
import { getElementText } from '../utilities';

describe('in the navigation test suite', () => {
  let page: Page;
  let browser: Browser;

  beforeAll(async () => {
    browser = await puppeteer.launch(puppeteerConfig.launchOptions);
    page = await browser.newPage();
  });

  it('should have a functional navigation', async () => {
    await page.goto(puppeteerConfig.appURL);

    const navigation = await page.waitFor(`nav`, {
      visible: true,
    });

    await page.click(`nav a[href="/vasectomie/"]`);
    await page.click(`nav a[href="/examen-pour-transport-canada/"]`);
    await page.click(`nav a[href="/equipe/"]`);
    await page.click(`nav a[href="/contact/"]`);

    await page.click(`footer a[href="/vasectomie/"]`);
    await page.click(`footer a[href="/formulaire-vasectomie/"]`);
    await page.click(`footer a[href="/examen-pour-transport-canada/"]`);

    expect(navigation).toBeTruthy();
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

  it('should have a the current status online', async () => {
    await page.goto(`${puppeteerConfig.appURL}/formulaire-vasectomie/`);

    const status = await page.waitFor(`div[class*="online-indicator"]`, {
      visible: true,
      timeout: 10000,
    });

    await expect(status).toBeTruthy();

    const statusBox = await getElementText({ page, selector: `div[class*="online-indicator"]` });

    await expect(statusBox.join(' ')).toMatch(/système en ligne/gi);
  });

  it('should have the recaptcha error message', async () => {
    await page.goto(`${puppeteerConfig.appURL}/formulaire-vasectomie/`);

    const form = await page.waitFor(`form`, {
      visible: true,
    });

    await expect(form).toBeTruthy();

    await page.type(`#firstName`, `Joe Test`);
    await page.type(`#lastName`, `Snow`);
    await page.type(`#dateOfBirth`, `01011999`);
    await page.type(`#medicare`, `FFFF99999999`);
    await page.type(`#medicareExpiryDate`, `0123`);
    await page.type(`#patientPhoneNumber`, `5555555555`);

    await page.type(`#email`, `emailtest@email.com`);
    await page.type(`#emailConfirmation`, `emailtest@email.com`);

    await page.type(`#address1`, `1040 rue fake`);
    await page.type(`#city`, `Estrie-Ouest`);
    await page.type(`#state`, `Québec`);
    await page.type(`#postCode`, `J0E 6E6`);
    await page.type(`#country`, `Canada`);

    await page.click(`button[type="submit"]`);

    const errorRecaptcha = await page.waitFor(`#formError`, {
      visible: true,
      timeout: 10000,
    });

    await expect(errorRecaptcha).toBeTruthy();

    const errorMessage = await getElementText({ page, selector: `#formError > p` });

    await expect(errorMessage.join(' ')).toMatch(/Le recaptcha est manquant/gi);
  });
  afterAll(async () => {
    await browser.close();
  });
});
