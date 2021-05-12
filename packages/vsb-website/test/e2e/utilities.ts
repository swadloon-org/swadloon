import puppeteer from 'puppeteer';

export async function findElementWithText({
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
    let foundItems: HTMLElement[];
    await page.evaluate(
      (selector, text, useInnerHTML) => {
        const elements: HTMLElement[] = Array.from(document.querySelectorAll(selector));
        const targetElements = elements.filter(({ innerHTML, innerText, textContent }) => {
          const exp = new RegExp(text, 'gi');
          if (useInnerHTML) {
            return exp.test(innerHTML);
          }
          if (useInnerHTML == false && !textContent) {
            return exp.test(innerText);
          }
          if (useInnerHTML == false && textContent) {
            return exp.test(textContent);
          }
        });
        if (!(targetElements && targetElements.length)) {
          throw new Error('could not find element');
        }
        foundItems = targetElements;
      },
      selector,
      text,
      useInnerHTML !== undefined ? useInnerHTML : false
    );

    // return foundItems;
  } catch (error) {
    fail(`Could not found on element with selector '${selector}', error: ${error}`);
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

export async function getElementText({
  page,
  selector,
}: {
  page: puppeteer.Page;
  selector: string;
}) {
  try {
    return await page.evaluate((selector) => {
      return Array.from(document.querySelectorAll(selector)).map(
        (element) => (element as any).innerText
      );
    }, selector);
  } catch (error) {
    fail(`Could not get text on element with selector '${selector}', error: ${error}`);
  }
}
