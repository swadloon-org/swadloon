import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';
import { RuleSetUseItem } from 'webpack';
import { BROWSERLIST_MODERN } from '../browserlist-modern';
import { cssNanoConfig } from './css-nano.config';

export const postCssLoaderOptions = {
  sourceMap: true,
  ident: 'postcss',
  plugins: [
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
