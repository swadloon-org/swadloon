import webpackLodashPlugin from 'lodash-webpack-plugin';
import { WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';

/**
 * @see https://github.com/lodash/lodash-webpack-plugin
 */
export const getLodashPlugin: () => WebpackPluginInstance = () => {
  const features = {
    shorthands: true,
    cloning: true,
    currying: true,
    caching: true,
    collections: true,
    exotics: true,
    guards: true,
    metadata: true,
    deburring: true,
    unicode: true,
    chaining: true,
    memoizing: true,
    coercions: true,
    flattening: true,
    paths: true,
    placeholders: true,
  };

  return new webpackLodashPlugin(features);
};
