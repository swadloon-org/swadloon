import { RuleSetRule } from 'webpack';

import { isDevelopment } from '../utilities/webpack-dev-server.utilities.js';

type Options = { hmr?: boolean };

const defaultOptions: Options = {
  hmr: isDevelopment(),
};

/**
 * See https://github.com/privatenumber/esbuild-loader
 */
export function getEsBuildLoader(options: Options = defaultOptions): RuleSetRule {
  return {
    test: /\.tsx?$/,
    loader: 'esbuild-loader',
    options: {
      loader: 'tsx',
      target: 'es2015',
    },
  };
}
