import { RuleSetUse } from 'webpack/declarations/WebpackOptions';

/**
 * @see https://webpack.js.org/loaders/css-loader/
 */
export const cssLoader: RuleSetUse = {
  loader: 'css-loader',
  query: {
    modules: true,
    sourceMap: true,
    localIdentName: '[name]_[local]_[hash:base64:5]',
    camelCase: true,
  },
};
