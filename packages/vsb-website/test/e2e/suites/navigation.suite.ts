import 'expect-puppeteer';
import puppeteer, { Browser, Page } from 'puppeteer';
import { HomePage } from '../pages/home.page';
import { puppeteerConfig } from '../puppeteer.config';
import { clickElement, clickNavigationLink, getElementText } from '../utilities';

describe('in the navigation test suite', () => {
  let page: Page;
  let browser: Browser;

  beforeAll(async () => {
    browser = await puppeteer.launch(puppeteerConfig.launchOptions);
    page = await browser.newPage();
    jest.setTimeout(10000);
  });

  it('should have a functional navigation', async () => {
    await page.goto(puppeteerConfig.appURL);

    await page.waitForSelector(`header nav`, {
      visible: true,
    });
  });

  it('should have a vasectomie page', async () => {
    await clickNavigationLink(page, 'header nav a[href="/vasectomie/"]');
    await expect(page.url()).toMatch(/vasectomie/gi);
  });

  it('should have a examen-pour-transports-canada page', async () => {
    await clickNavigationLink(page, `header nav a[href="/examen-pour-transports-canada/"]`);
    await expect(page.url()).toMatch(/examen-pour-transports-canada/gi);
  });

  it('should have a equipe page', async () => {
    await clickNavigationLink(page, `header nav a[href="/equipe/"]`);
    await expect(page.url()).toMatch(/equipe/gi);
  });

  it('should have a contact page', async () => {
    await clickNavigationLink(page, `header nav a[href="/contact/"]`);
    await expect(page.url()).toMatch(/contact/gi);
  });

  it('should have a vasectomie page in the footer', async () => {
    await clickNavigationLink(page, `footer a[href="/vasectomie/"]`);
    await expect(page.url()).toMatch(/vasectomie/gi);
  });

  it('should have a formulaire page in the footer', async () => {
    await clickNavigationLink(page, `footer a[href="/examen-pour-transports-canada/"]`);
    await expect(page.url()).toMatch(/examen-pour-transports-canada/gi);
  });

  it('should have a contact page in the footer', async () => {
    await clickNavigationLink(page, `footer a[href="/contact/"]`);
    await expect(page.url()).toMatch(/contact/gi);
  });

  it('should have a footer', async () => {
    const footer = await page.waitForSelector(HomePage.footer, {
      visible: true,
    });

    expect(footer).toBeTruthy();
  });

  it('should have a form page with a submit button', async () => {
    await page.goto(`${puppeteerConfig.appURL}/formulaire-vasectomie-cliniko/`);
    const buttonSubmit = await page.waitForSelector(`button[type="submit"]`, {
      visible: true,
    });

    expect(buttonSubmit).toBeTruthy();

    const buttonText = await getElementText({ page, selector: `button[type="submit"]` });
    expect(buttonText.join(' ')).toMatch(/soumettre/gi);
  });

  it('should have the recaptcha error message', async () => {
    const form = await page.waitForSelector(`form`, {
      visible: true,
    });

    expect(form).toBeTruthy();

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

    await clickElement(page, `button[type="submit"]`);

    const errorRecaptcha = await page.waitForSelector(`#formerror`, {
      visible: true,
      timeout: 10000,
    });

    expect(errorRecaptcha).toBeTruthy();

    const errorMessage = await getElementText({ page, selector: `#formerror > p` });

    await expect(errorMessage.join(' ')).toMatch(/Le recaptcha est manquant/gi);
  });

  it('should have a the current status online', async () => {
    await page.waitForSelector(`#e2e-online-indicator`, {
      visible: true,
      timeout: 10000,
    });

    const statusBox = await getElementText({ page, selector: `#e2e-online-indicator` });

    expect(statusBox.join(' ')).toMatch(/système : en ligne/gi);
  });

  afterAll(async () => {
    await browser.close();
  });
});
