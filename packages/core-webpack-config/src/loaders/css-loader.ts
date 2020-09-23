import { RuleSetUseItemObject } from '../webpack-config-types';

/**
 * @see https://webpack.js.org/loaders/css-loader/
 */
export const cssLoader: RuleSetUseItemObject = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[name]_[local]_[hash:base64:5]',
    camelCase: true,
  },
};
