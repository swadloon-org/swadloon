import { RuleSetRule } from 'webpack';
import { cssLoader } from './css-loader';
import { postCssLoader } from './post-css.loader';

export const inlineCssLoader: RuleSetRule = {
  test: /\.(css)$/,
  use: [
    {
      loader: 'style-loader',
    },
    { ...cssLoader, options: { ...cssLoader.options, modules: false, importLoaders: 1 } },
    postCssLoader,
  ],
};

export const inlineCssModuleLoader: RuleSetRule = {
  test: /\.(css)$/,
  use: [
    {
      loader: 'style-loader',
    },
    { ...cssLoader, options: { ...cssLoader.options, modules: true, importLoaders: 1 } },
    postCssLoader,
  ],
};
