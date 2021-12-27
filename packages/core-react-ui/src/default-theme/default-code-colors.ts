import { CodeColors } from '@newrade/core-design-system';

import { getColorFromHex } from '../utilities/colors.utilities';

/**
 * Inspired by Github default theme
 *
 * @see https://github.com/PrismJS/prism-themes/blob/master/themes/prism-ghcolors.css
 */

const token1 = getColorFromHex('#36acaa');
const colorComment = getColorFromHex('#999988');
const colorString = getColorFromHex('#e3116c');
const colorOperator = getColorFromHex('#393A34');
const colorAtRule = getColorFromHex('#00a4db');
const colorFunction = getColorFromHex('#d73a49');
const colorFunctionVar = getColorFromHex('#6f42c1');
const colorTag = getColorFromHex('#00009f');

export const defaultCodeColors: CodeColors = {
  codeComment: colorComment,
  codeCdata: colorComment,
  codeDoctype: colorComment,
  codeProlog: colorComment,

  codeKeyword: colorAtRule,
  codeAtrule: colorAtRule,
  codeAttrName: colorAtRule,
  codeSelector: colorAtRule,

  codeOperator: colorOperator,
  codePunctuation: colorOperator,

  codeRegexSource: { h: 222, s: 60, l: 50 },
  codeSelectorFunctionArgument: { h: 222, s: 60, l: 50 },
  codeStringProperty: { h: 222, s: 60, l: 50 },

  codeString: colorString,
  codeAttrValue: colorString,

  codeStyle: { h: 222, s: 60, l: 50 },
  codeTemplatePunctuation: { h: 222, s: 60, l: 50 },
  codeTemplateString: { h: 222, s: 60, l: 50 },
  codeValue: { h: 222, s: 60, l: 50 },

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

  codeFunction: colorFunction,
  codeDeleted: colorFunction,

  codeTag: colorTag,

  codeFunctionVariable: colorFunctionVar,

  codeNamespace: { h: 222, s: 60, l: 50 },

  codeClassName: { h: 222, s: 60, l: 50 },
  codeHashbang: { h: 222, s: 60, l: 50 },
  codeImportant: { h: 222, s: 60, l: 50 },
  codeIncludedCdata: { h: 222, s: 60, l: 50 },
  codeInternalSubset: { h: 222, s: 60, l: 50 },
  codeInterpolationPunctuation: { h: 222, s: 60, l: 50 },
  codeInterpolation: { h: 222, s: 60, l: 50 },
  codeLiteralProperty: { h: 222, s: 60, l: 50 },
  codeParameter: { h: 222, s: 60, l: 50 },
};
