import { CodeColors } from '@newrade/core-design-system';

import { getColorFromHex } from '../utilities-theme/colors.utilities.js';

/**
 * Inspired by Github default light theme
 *
 * @see https://github.com/primer/github-vscode-theme
 */

/**
 * Basics
 */

const colorForeground = getColorFromHex('#24292f');
const colorComment = getColorFromHex('#999988');
const colorString = getColorFromHex('#e3116c');

/**
 * Functions
 */

const colorFunction = getColorFromHex('#c83cd7');
const colorFunctionVar = getColorFromHex('#d73a49');

/**
 * Keyword and tag
 */

const colorKeyword = getColorFromHex('#1414b8');
const colorTag = colorKeyword;

/**
 * Code tokens
 */

const token1 = getColorFromHex('#1f8483');

/**
 * CSS
 */

const colorAtRule = getColorFromHex('#087aa0');

export const defaultCodeColors: CodeColors = {
  editorBackground: getColorFromHex('#f6f8fa'),
  editorForeground: colorForeground,
  editorSelectionBackground: getColorFromHex('#0366d625'),
  editorHeaderBackground: getColorFromHex('#CCC0E9'),
  editorHeaderForeground: getColorFromHex('#393A34'),
  editorHeaderTagBackground: getColorFromHex('#FF9EDA'),
  editorHeaderTagForeground: getColorFromHex('#393A34'),

  codeComment: colorComment,
  codeCdata: colorComment,
  codeDoctype: colorComment,
  codeProlog: colorComment,

  codeKeyword: colorKeyword,
  codeAtrule: colorAtRule,
  codeAttrName: colorAtRule,
  codeSelector: colorAtRule,

  codeOperator: getColorFromHex('#207e77'),
  codePunctuation: getColorFromHex('#393A34'),

  codeRegexSource: getColorFromHex('#393A34'),
  codeSelectorFunctionArgument: getColorFromHex('#393A34'),
  codeStringProperty: getColorFromHex('#393A34'),

  codeString: colorString,
  codeAttrValue: colorString,

  codeStyle: getColorFromHex('#393A34'),
  codeTemplatePunctuation: getColorFromHex('#393A34'),
  codeTemplateString: getColorFromHex('#393A34'),
  codeValue: getColorFromHex('#393A34'),
  codeScript: colorForeground,

  codeVariable: getColorFromHex('#953800'),
  codeSymbol: token1,
  codeNumber: token1,
  codeUrl: token1,
  codeEntity: token1,
  codeBoolean: token1,
  codeConstant: colorTag,
  codeRegex: token1,
  codeProperty: token1,
  codeInserted: token1,
  codeUnit: colorAtRule,

  codeFunction: colorFunction,
  codeDeleted: colorFunction,

  codeTag: colorTag,

  codeFunctionVariable: colorFunctionVar,

  codeNamespace: getColorFromHex('#393A34'),

  codeClassName: colorKeyword,
  codeMaybeClassName: getColorFromHex('#238052'),

  codeHashbang: colorForeground,
  codeImportant: colorForeground,
  codeIncludedCdata: colorForeground,
  codeInternalSubset: colorForeground,
  codeInterpolationPunctuation: colorForeground,
  codeInterpolation: colorForeground,
  codeLiteralProperty: colorForeground,
  codeParameter: colorFunctionVar,
};
