import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack/declarations/WebpackOptions';
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
