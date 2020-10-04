import { VIEWPORT } from './layout';

export enum MEDIA_TYPE {
  all = 'all',
  screen = 'screen',
  print = 'print',
  speech = 'speech',
}

export enum MEDIA_FEATURE {
  'display-mode' = 'display-mode',
  'height' = 'height',
  'width' = 'width',
  'min-width' = 'min-width',
  'max-width' = 'max-width',
  'hover' = 'hover',
  'orientation' = 'orientation',
}

export enum MEDIA_OPERATOR {
  'and' = 'and',
  'not' = 'not',
  'only' = 'only',
  ',' = ',',
}

/**
 * Representation of a media query.
 */
export type MediaQuery = {
  type?: MEDIA_TYPE;
  feature: MEDIA_FEATURE;
  value: string;
};

/**
 * Representation of a media query group.
 * @example for @media (min-width: 30em) and (orientation: landscape)
 */
export type MediaQueryGroup = {
  queryA: MediaQuery;
  operator?: MEDIA_OPERATOR;
  queryB?: MediaQuery;
};
/**
 * Breakpoints values in pixel.
 */

export type MediaQueries<MediaQueryType = MediaQueryGroup> = {
  [key in keyof typeof VIEWPORT]: MediaQueryType;
} & {
  tabletPlus: MediaQuery;
};
