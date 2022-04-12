import { log } from './utilities';

export function createOrUpdateFigmaTextStyle(name: string): TextStyle {
  const found = figma.getLocalTextStyles().find((style) => style.name === name);

  if (found) {
    log(`found text style: ${found.name}`);
    found.name = name;
    return found as TextStyle;
  }

  log(`text style ${name} not found, creating new one`);
  const newStyle = figma.createTextStyle();
  newStyle.name = name;
  return newStyle;
}
