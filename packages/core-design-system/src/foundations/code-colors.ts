import { ColorType } from '../types.js';

/**
 * All types of code markup. Taken from PrismJS.
 *
 * @see https://github.com/PrismJS/prism/issues/2849 for related issue
 */
export enum CodeMarkupType {
  Comment = 'comment',
  Cdata = 'cdata',
  Doctype = 'doctype',
  Prolog = 'prolog',

  Atrule = 'atrule',
  AttrName = 'attr-name',
  Selector = 'selector',

  Operator = 'operator',
  Punctuation = 'punctuation',

  RegexSource = 'regex-source',
  SelectorFunctionArgument = 'selector-function-argument',
  StringProperty = 'string-property',
  String = 'string',
  Style = 'style',
  TemplatePunctuation = 'template-punctuation',
  TemplateString = 'template-string',
  Value = 'value',

  Variable = 'variable',
  Symbol = 'symbol',
  Number = 'number',
  Url = 'url',
  Entity = 'entity',
  Boolean = 'boolean',
  Constant = 'constant',
  Regex = 'regex',
  Property = 'property',
  Inserted = 'inserted',

  Function = 'function',
  Tag = 'tag',
  Deleted = 'deleted',

  FunctionVariable = 'function-variable',

  Keyword = 'keyword',

  Namespace = 'namespace',

  AttrValue = 'attr-value',
  ClassName = 'class-name',
  MaybeClassName = 'maybe-class-name',
  Hashbang = 'hashbang',
  Important = 'important',
  IncludedCdata = 'included-cdata',
  InternalSubset = 'internal-subset',
  InterpolationPunctuation = 'interpolation-punctuation',
  Interpolation = 'interpolation',
  LiteralProperty = 'literal-property',
  Parameter = 'parameter',

  /**
   * Custom tokens below
   */

  Script = 'script',
  Unit = 'unit',
}

export type CodeMarkupValuesRecord = Record<CodeMarkupType, string>;
export type CodeMarkupValues = `${keyof CodeMarkupValuesRecord}`;

/**
 * Token colors used in highlighted code
 */
export type CodeMarkupColors<Override extends undefined | string = undefined> = {
  [key in `code${keyof typeof CodeMarkupType}`]: ColorType<Override>;
};

/**
 * Code for each tokens and additional UI colors for the editor. Inspired by VSCode's theming  system.
 *
 * @see https://code.visualstudio.com/api/references/theme-color
 */
export type CodeColors<Override extends undefined | string = undefined> =
  CodeMarkupColors<Override> & {
    editorBackground: ColorType<Override>;
    editorForeground: ColorType<Override>;
    editorSelectionBackground: ColorType<Override>;
    editorHeaderBackground: ColorType<Override>;
    editorHeaderForeground: ColorType<Override>;
    editorHeaderTagBackground: ColorType<Override>;
    editorHeaderTagForeground: ColorType<Override>;
  };
