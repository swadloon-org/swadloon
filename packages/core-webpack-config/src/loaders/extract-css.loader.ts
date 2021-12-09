/// <reference types="../types/core-types" />

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

import { cssLoader } from './css-loader';
import { postCssLoader } from './post-css.loader';

export const extractCssLoader: RuleSetRule = {
  test: /\.(css)$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    { ...cssLoader, options: { ...cssLoader.options, modules: false, importLoaders: 1 } },
    postCssLoader,
  ],
};

/**
 * @see https://vanilla-extract.style/documentation/setup/
 */
export const extractVanillaCssLibLoader: RuleSetRule = {
  test: /\.(css)$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      ...cssLoader,
      options: {
        ...cssLoader.options,
        modules: false,
        importLoaders: 1,
        sourceMap: false,
        url: false, // Required as image imports should be handled via JS/TS import statements
      },
    },
    postCssLoader,
  ],
};

export const extractCssModuleLoader: RuleSetRule = {
  test: /\.(css)$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    { ...cssLoader, options: { ...cssLoader.options, modules: true, importLoaders: 1 } },
    postCssLoader,
  ],
};
