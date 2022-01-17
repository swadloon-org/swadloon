import { StyleRule } from '@vanilla-extract/css';
import { Property } from 'csstype';
// @ts-ignore
import GithubSlugger from 'github-slugger';

import { CapsizeTextStyle, TextDecoration, TextStyle } from '@newrade/core-design-system';

import { pxStringToNumber } from '../utilities-iso/utilities';

import { getCSSFonts } from './font.utilities';

/**
 *
 * Text utility functions.
 *
 */

type TextStyleOptions = { baseFontSize: number } & TextStyle;

export function createCSSTextStyle({
  baseFontSize,
  font,
  fontFamily,
  fontWeight,
  fontStyle,
  letterSpacing,
  textTransform,
  textDecoration,
}: TextStyleOptions): TextStyle<string> {
  if (fontFamily || font?.length) {
    return {
      fontFamily: fontFamily ? fontFamily : font?.length ? getCSSFonts(font) : undefined,
      font: getCSSFonts(font),
      fontWeight: fontWeight ? fontWeight.toString() : `400`,
      fontStyle,
      letterSpacing: letterSpacing ? `${letterSpacing / 100}em` : '0px',
      textTransform,
      textDecoration: getCSSTextDecoration(textDecoration),
    };
  }

  return {
    fontWeight: fontWeight ? fontWeight.toString() : `400`,
    fontStyle,
    letterSpacing: letterSpacing ? `${letterSpacing / 100}em` : '0px',
    textTransform,
    textDecoration: getCSSTextDecoration(textDecoration),
  };
}

/**
 * Converts capsize styles from px to rem.
 */
export function convertLetterSpacingToPercent({
  letterSpacing,
  fontSize,
}: {
  letterSpacing: number | undefined;
  fontSize: string;
}): string {
  if (letterSpacing === undefined) {
    return `0px`;
  }

  const fontSizeNumber = pxStringToNumber({ value: fontSize });

  if (fontSizeNumber === undefined) {
    return `0px`;
  }
  const percent = (letterSpacing / 100) * fontSizeNumber;
  return `${percent}px`;
}

/**
 * Convert px letter spacing value to em units
 */
export function convertLetterSpacingToEM({
  value,
  fontSize,
}: {
  value: string;
  fontSize: string;
}): string | undefined {
  const exp = /(^\d+(\.\d+)?)/;

  const match = exp.exec(value);
  if (!match) {
    console.warn(`${value}, did not match`);
    return undefined;
  }

  const numbericValue = match[0];
  if (!numbericValue) {
    return undefined;
  }

  const convertedValue = Number(numbericValue);
  if (!convertedValue) {
    return undefined;
  }

  const numericFontSize = pxStringToNumber({ value: fontSize });

  if (!numericFontSize) {
    return undefined;
  }

  return `${convertedValue / 100}em`;
}

/**
 * Return a CSS compatible style object from a theme text style
 */
export function getCSSTextStyles(
  textStyle?: Partial<TextStyle<string> & CapsizeTextStyle<string>>,
  options?: CSSTextStyleOptions
): StyleRule {
  if (!textStyle) {
    return {};
  }
  return {
    ...getCSSFontTextStyles(textStyle),
    ...getCSSSizeTextStyles(textStyle, options),
  };
}

export function getCSSFontTextStyles(
  textStyle?: Partial<TextStyle<string> & CapsizeTextStyle<string>>,
  options?: CSSTextStyleOptions
): StyleRule {
  if (!textStyle) {
    return {};
  }
  return {
    fontWeight: textStyle.fontWeight as Property.FontWeight, // we need string to satisfy vanilla extract
    textTransform: textStyle.textTransform as Property.TextTransform,
    fontFamily: textStyle.fontFamily as string,
    fontStyle: textStyle.fontStyle as string,
    letterSpacing: textStyle.letterSpacing as string,
    textDecoration: textStyle.textDecoration as string,
  };
}

type CSSTextStyleOptions = {
  disablePseudo?: boolean;
  stylePseudoElements?: {
    display: Property.Display;
  };
};

export function getCSSSizeTextStyles(
  textStyle?: Partial<TextStyle<string> & CapsizeTextStyle<string>>,
  options?: CSSTextStyleOptions
): StyleRule {
  if (!textStyle) {
    return {};
  }

  if (options?.disablePseudo) {
    return {
      ...textStyle.capsize,
      padding: 'inherit',
      '::before': {},
      '::after': {},
    };
  }

  if (options?.stylePseudoElements) {
    return {
      ...textStyle.capsize,
      '::before': {
        ...textStyle.capsize?.['::before'],
        ...options.stylePseudoElements,
      },
      '::after': {
        ...textStyle.capsize?.['::after'],
        ...options.stylePseudoElements,
      },
    };
  }

  return {
    ...textStyle.capsize,
  };
}

/**
 * Return a CSS compatible style object from a theme text style
 */
export function getCSSTextDecoration(textDecoration?: TextDecoration): string | undefined {
  if (!textDecoration) {
    return undefined;
  }
  // text-decoration: underline dotted red;
  return `${textDecoration.line} ${textDecoration.style} ${textDecoration.color}`;
}

/**
 * Normalize and format anchor id.
 *
 * It removes leading digit since vanilla document.querySelector does not accept ids starting with number
 *
 * @see https://www.w3.org/TR/html401/types.html#type-name
 * @see https://github.com/Flet/github-slugger
 */
export function getFormattedAnchorId(value?: string | null): string {
  const validHtmlIdValue = value ? (/^\d/.test(value) ? `id-${value}` : value) : '';
  return GithubSlugger.slug(validHtmlIdValue);
}
