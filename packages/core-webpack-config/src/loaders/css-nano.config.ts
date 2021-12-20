import cssnano from 'cssnano';

import { svgoConfig } from './svgo.conf';

/**
 * CSS Nano Config
 *
 * This is a more conservative config than the default
 * see https://cssnano.co/docs/optimisations for all options' definition
 *
 * To know the config option for each plugin, refer to each package: https://github.com/cssnano/cssnano/tree/master/packages
 */
export const cssNanoConfig: cssnano.CssNanoOptions = {
  configFile: undefined,
  preset: [
    'default',
    {
      autoprefixer: false,
      cssDeclarationSorter: false,
      calc: false,
      colormin: false,
      convertValues: false,
      /**
       * @see https://github.com/cssnano/cssnano/tree/master/packages/postcss-discard-comments
       */
      discardComments: {
        removeAll: true,
      } as {
        remove: (comment: string) => boolean;
        removeAll: boolean;
        removeAllButFirst: boolean;
      },
      discardDuplicates: true,
      discardEmpty: false,
      discardOverridden: false,
      discardUnused: false,
      mergeIdents: false,
      mergeLonghand: false,
      mergeRules: true,
      minifyFontValues: false,
      minifyGradients: false,
      minifyParams: false,
      minifySelectors: false,
      normalizeCharset: false,
      normalizeDisplayValues: false,
      normalizePositions: false,
      normalizeRepeatStyle: false,
      normalizeString: false,
      normalizeTimingFunctions: false,
      normalizeUnicode: false,
      normalizeUrl: false,
      normalizeWhitespace: false,
      orderedValues: false,
      reduceIdents: false,
      reduceInitial: false,
      reduceTransforms: false,
      svgo: svgoConfig,
      uniqueSelectors: false,
      zindex: false,
    },
  ],
};
