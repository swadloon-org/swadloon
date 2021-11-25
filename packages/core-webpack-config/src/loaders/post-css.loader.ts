import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
// @ts-ignore
import postcssCustomMedia from 'postcss-custom-media';
// @ts-ignore
import postcssMediaVariables from 'postcss-media-variables';
import postcssPresetEnv from 'postcss-preset-env';
import { RuleSetUseItem } from 'webpack';

import { BROWSERLIST_MODERN } from '../other/browserlist-modern';

import { cssNanoConfig } from './css-nano.config';

export const postCssLoaderOptions = {
  sourceMap: true,
  ident: 'postcss',
  plugins: [
    // https://github.com/WolfgangKluge/postcss-media-variables
    postcssMediaVariables(),
    postcssCustomMedia(),
    postcssMediaVariables(),
    autoprefixer({ grid: true }),
    cssnano(cssNanoConfig),
    postcssPresetEnv({ browsers: BROWSERLIST_MODERN }),
  ],
};

export const postCssLoader: RuleSetUseItem = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: postCssLoaderOptions,
  },
};
