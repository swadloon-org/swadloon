import { MediaQueryType } from '../types.js';

export enum MEDIA_TYPE {
  all = 'all',
  screen = 'screen',
  print = 'print',
  speech = 'speech',
}

export enum MEDIA_FEATURE {
  displayMode = 'display-mode',
  height = 'height',
  width = 'width',
  minWidth = 'min-width',
  maxWidth = 'max-width',
  hover = 'hover',
  orientation = 'orientation',
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
  feature?: MEDIA_FEATURE;
  value?: number;
};

/**
 * Representation of a media query group.
 * @example for @media (min-width: 30em) and (orientation: landscape)
 */
export type MediaQueryGroup = {
  queryA: MediaQuery;
  operator?: MEDIA_OPERATOR;
  queryB?: MediaQuery | MediaQueryGroup;
};

/**
 * Predefined media queries
 */
export type MediaQueries<Override extends undefined | string = undefined> = {
  mobile: MediaQueryType<Override>;
  mobileOnly: MediaQueryType<Override>;
  tablet: MediaQueryType<Override>;
  tabletOnly: MediaQueryType<Override>;
  desktopSmall: MediaQueryType<Override>;
  desktopSmallOnly: MediaQueryType<Override>;
  desktopMedium: MediaQueryType<Override>;
  desktopMediumOnly: MediaQueryType<Override>;
  desktopLarge: MediaQueryType<Override>;
  desktopLargeOnly: MediaQueryType<Override>;
  desktopXLarge: MediaQueryType<Override>;
  desktopXLargeOnly: MediaQueryType<Override>;
};
