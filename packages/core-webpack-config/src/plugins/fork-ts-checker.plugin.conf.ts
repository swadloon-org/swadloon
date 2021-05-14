import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

/**
 * @see https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
 */
export function getForkTsCheckerWebpackPlugin() {
  return new ForkTsCheckerWebpackPlugin({
    typescript: {
      enabled: true,
      configFile: 'tsconfig.build.json',
      build: true,
    },
  });
}
