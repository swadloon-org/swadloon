/// <reference types="@figma/plugin-typings" />

import { FigmaTextStyleList } from '../common/figma-text.model';

/**
 *
 * Utility functions to manipulate text with the Figma Plugin API
 *
 */

/**
 * Retrieve all used TextStyle in a list format (assuming that the first part of the name is the family name)
 *
 * @example 'Desktop/Paragraph/Large/Bold' => ['Desktop', 'Paragraph', 'Large', 'Bold'] where 'Desktop' is the family
 */
export function getFigmaTextStyleList(): FigmaTextStyleList {
  const currentTextStyles = figma.getLocalTextStyles();

  return currentTextStyles.reduce((previous, current) => {
    const name = current.name;
    if (!name.length) {
      return previous;
    }
    const parts = name.split('/'); // 'Desktop/Paragraph/Large/Bold' => ['Desktop', 'Paragraph', 'Large', 'Bold']

    const textStyleFamily = parts[0]; // 'Desktop'

    if (!textStyleFamily) {
      return previous;
    }

    //
    // ignore private text styles
    //
    if (textStyleFamily.startsWith('_')) {
      return previous;
    }

    if (!previous[textStyleFamily]) {
      previous[textStyleFamily] = [];
    }

    if (current.name.startsWith(textStyleFamily)) {
      previous[textStyleFamily] = [...previous[textStyleFamily], current];
    }

    return previous;
  }, {} as FigmaTextStyleList);
}

/**
 * Create a new Figma TextStyle based on the one passed
 */
export function createFigmaTextStyle(figmaTextStyle: TextStyle) {
  /**
   *
   * Create the basic text style
   *
   */

  const newFigmaTextStyle = figma.createTextStyle();

  newFigmaTextStyle.name = figmaTextStyle.name;

  /**
   * Font family & weight
   */
  if (figmaTextStyle.fontName) {
    newFigmaTextStyle.fontName = {
      family: figmaTextStyle.fontName.family,
      style: figmaTextStyle.fontName.style,
    };
  }

  /**
   * Font size
   */
  if (figmaTextStyle.fontSize !== undefined) {
    newFigmaTextStyle.fontSize = figmaTextStyle.fontSize;
  }
  if (figmaTextStyle.paragraphSpacing !== undefined) {
    newFigmaTextStyle.paragraphSpacing = figmaTextStyle.paragraphSpacing;
  }

  /**
   * Line height
   */
  if (figmaTextStyle.lineHeight !== undefined) {
    newFigmaTextStyle.lineHeight = figmaTextStyle.lineHeight;
  }

  /**
   * Letter spacing
   */
  if (figmaTextStyle.letterSpacing !== undefined) {
    newFigmaTextStyle.letterSpacing = figmaTextStyle.letterSpacing;
  }

  /**
   * Text styles
   */
  if (figmaTextStyle.textCase) {
    newFigmaTextStyle.textCase = figmaTextStyle.textCase;
  }

  return newFigmaTextStyle;
}
