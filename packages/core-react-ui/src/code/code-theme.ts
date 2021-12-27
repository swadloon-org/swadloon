import { Language } from 'prism-react-renderer';

import { CodeMarkupValues } from '@newrade/core-design-system';

import { colorVars } from '../theme';

/**
 * Extracted type from 'prism-react-renderer' since it is not exported
 */
type PrismThemeEntry = {
  color?: string;
  backgroundColor?: string;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  opacity?: number;
  [styleKey: string]: string | number | void;
};

/**
 * Augmented prism theme with our enum for `types`
 */
type ExtendedPrismTheme = {
  plain: PrismThemeEntry;
  styles: Array<{
    types: CodeMarkupValues[];
    style: PrismThemeEntry;
    languages?: Language[];
  }>;
};

export const prismTheme: ExtendedPrismTheme = {
  plain: {
    color: '#393A34',
    backgroundColor: '#f6f8fa',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: colorVars.colors.code.codeComment,
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: colorVars.colors.code.codeString,
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: colorVars.colors.code.codeOperator,
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: colorVars.colors.code.codeEntity,
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: colorVars.colors.code.codeAtrule,
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: colorVars.colors.code.codeFunction,
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: colorVars.colors.code.codeFunctionVariable,
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: colorVars.colors.code.codeTag,
      },
    },
  ],
};
