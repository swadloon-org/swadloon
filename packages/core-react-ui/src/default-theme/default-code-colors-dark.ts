import { CodeColors } from '@newrade/core-design-system';

import { getColorFromHex } from '../utilities/colors.utilities';

/**
 * Inspired by Github dark dimmed theme
 *
 * @see https://github.com/primer/github-vscode-theme
 */

/**
 * Basics
 */

const colorForeground = getColorFromHex('#d1d9e0');
const colorComment = getColorFromHex('#768390');
const colorString = getColorFromHex('#fc4594');

/**
 * Functions
 */

const colorFunction = getColorFromHex('#dcbdfb');
const colorFunctionVar = getColorFromHex('#adbac7');

/**
 * Keyword and tag
 */

const colorKeyword = getColorFromHex('#7474f1');
const colorTag = colorKeyword;

/**
 * Code tokens
 */

const token1 = getColorFromHex('#36acaa');

/**
 * CSS
 */

const colorAtRule = getColorFromHex('#0a94c2');

export const defaultCodeColorsDark: CodeColors = {
  editorBackground: getColorFromHex('#1e2329'),
  editorForeground: colorForeground,
  editorSelectionBackground: getColorFromHex('#3392FF44'),
  editorHeaderBackground: getColorFromHex('#4a425c'),
  editorHeaderForeground: getColorFromHex('#fff'),
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

  codeOperator: getColorFromHex('#8e9084'),
  codePunctuation: getColorFromHex('#adbac7'),

  codeRegexSource: { h: 222, s: 60, l: 50 },
  codeSelectorFunctionArgument: { h: 222, s: 60, l: 50 },
  codeStringProperty: { h: 222, s: 60, l: 50 },

  codeString: colorString,
  codeAttrValue: colorString,

  codeStyle: { h: 222, s: 60, l: 50 },
  codeTemplatePunctuation: { h: 222, s: 60, l: 50 },
  codeTemplateString: { h: 222, s: 60, l: 50 },
  codeValue: { h: 222, s: 60, l: 50 },
  codeScript: colorForeground,

  codeVariable: token1,
  codeSymbol: token1,
  codeNumber: token1,
  codeUrl: token1,
  codeEntity: token1,
  codeBoolean: token1,
  codeConstant: token1,
  codeRegex: token1,
  codeProperty: token1,
  codeInserted: token1,
  codeUnit: colorAtRule,

  codeFunction: colorFunction,
  codeDeleted: colorFunction,

  codeTag: colorTag,

  codeFunctionVariable: colorFunctionVar,

  codeNamespace: colorForeground,

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
