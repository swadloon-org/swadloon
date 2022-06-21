import { log } from './log.code.utilities.js';

export function createOrUpdateFigmaFrame(name: string): FrameNode {
  const found = figma.currentPage.findOne((node) => node.name === name);

  if (found) {
    log(`found frame node: ${found.name}`);
    found.name = name;
    return found as FrameNode;
  }

  log(`frame ${name} not found, creating new one`);
  const newNode = figma.createFrame();
  newNode.name = name;
  return newNode;
}

export function createOrUpdateFigmaTextNode(name: string): TextNode {
  const found = figma.currentPage.findOne((node) => node.name === name);

  if (found) {
    log(`found text node: ${found.name}`);
    found.name = name;
    return found as TextNode;
  }

  log(`text node ${name} not found, creating new one`);
  const newNode = figma.createText();
  newNode.name = name;
  return newNode;
}
