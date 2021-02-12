import puppeteer from 'puppeteer';

export async function clickOnElementWithText({
  page,
  selector,
  text,
  useInnerHTML,
}: {
  page: puppeteer.Page;
  selector: string;
  text: string;
  useInnerHTML?: boolean;
}) {
  try {
    await page.evaluate(
      (selector, text, useInnerHTML) => {
        const elements = Array.from(document.querySelectorAll(selector));
        const targetElements = elements.filter(({ innerHTML, innerText, textContent }) => {
          const exp = new RegExp(text, 'gi');
          return useInnerHTML ? exp.test(innerHTML) : exp.test(innerText) || exp.test(textContent);
        });
        if (!(targetElements && targetElements.length)) {
          throw new Error('could not find element');
        }
        targetElements[0].click();
      },
      selector,
      text,
      useInnerHTML !== undefined ? useInnerHTML : false
    );
  } catch (error) {
    fail(`Could not click on element with selector '${selector}', error: ${error}`);
  }
}

export async function focusOnElementWithText({
  page,
  selector,
  text,
}: {
  page: puppeteer.Page;
  selector: string;
  text: string;
}) {
  try {
    await page.evaluate(
      (selector, text) => {
        const elements = Array.from(document.querySelectorAll(selector));
        const targetElements = elements.filter(({ innerHTML, innerText, textContent }) => {
          const exp = new RegExp(text, 'gi');
          return exp.test(innerText) || exp.test(textContent);
        });
        if (!(targetElements && targetElements.length)) {
          throw new Error('could not find element');
        }
        targetElements[0].focus();
      },
      selector,
      text
    );
  } catch (error) {
    fail(`Could not focus on element with selector '${selector}', error: ${error}`);
  }
}

export async function getElementText({ page, selector }: { page: puppeteer.Page; selector: string }) {
  try {
    return await page.evaluate((selector) => {
      return Array.from(document.querySelectorAll(selector)).map((element) => (element as any).innerText);
    }, selector);
  } catch (error) {
    fail(`Could not get text on element with selector '${selector}', error: ${error}`);
  }
}
