import { RuleSetRule } from 'webpack';

import { cssLoader } from './css-loader';
import { postCssLoader } from './post-css.loader';

export const inlineCssLoader: RuleSetRule = {
  test: /\.(css)$/,
  exclude: /\.vanilla\.css$/i,
  use: [
    {
      loader: 'style-loader',
    },
    { ...cssLoader, options: { ...cssLoader.options, modules: false, importLoaders: 1 } },
    postCssLoader,
  ],
};

/**
 * @see https://vanilla-extract.style/documentation/setup/
 */
export const inlineVanillaCssLibLoader: RuleSetRule = {
  test: /\.vanilla\.css$/i, // targets only CSS files generated by vanilla-extract
  use: [
    {
      loader: 'style-loader',
    },
    {
      ...cssLoader,
      options: {
        ...cssLoader.options,
        modules: false,
        importLoaders: 1,
        sourceMap: false,
        url: false, // required as image imports should be handled via JS/TS import statements
      },
    },
    postCssLoader,
  ],
};

export const inlineCssModuleLoader: RuleSetRule = {
  test: /module\.(css)$/,
  exclude: /\.vanilla\.css$/i,
  use: [
    {
      loader: 'style-loader',
    },
    {
      ...cssLoader,
      options: {
        ...cssLoader.options,
        modules: true,
        importLoaders: 1,
        sourceMap: false,
        url: false, // required as image imports should be handled via JS/TS import statements
      },
    },
    postCssLoader,
  ],
};
