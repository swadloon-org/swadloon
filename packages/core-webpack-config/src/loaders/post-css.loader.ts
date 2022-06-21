import autoprefixer from 'autoprefixer';
// @ts-ignore
import postcssCustomMedia from 'postcss-custom-media';
// @ts-ignore
import postcssMediaVariables from 'postcss-media-variables';
import postcssPresetEnv from 'postcss-preset-env';
import { RuleSetUseItem } from 'webpack';

import { BROWSERLIST_MODERN } from '../other/browserlist-modern.js';

//
// cssnano should not be used inside postcss loader see https://github.com/cssnano/cssnano/issues/659
//
// import cssnano from 'cssnano';
// import { cssNanoConfig } from './css-nano.config.js';

export const postCssLoaderOptions = {
  sourceMap: true,
  ident: 'postcss',
  plugins: [
    autoprefixer({ grid: true }),
    /**
     * @see https://github.com/WolfgangKluge/postcss-media-variables
     */
    postcssMediaVariables(),
    postcssCustomMedia(),
    postcssMediaVariables(),
    postcssPresetEnv({ browsers: BROWSERLIST_MODERN }),
  ],
};

export const postCssLoader: RuleSetUseItem = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: postCssLoaderOptions,
  },
};
