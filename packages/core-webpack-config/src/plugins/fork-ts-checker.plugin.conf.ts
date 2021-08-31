import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

/**
 * @see https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
 */
export function getForkTsCheckerWebpackPlugin() {
  return new ForkTsCheckerWebpackPlugin({
    typescript: {
      enabled: true,
      memoryLimit: 2048,
      configFile: 'tsconfig.json',
      mode: 'write-tsbuildinfo',
      build: true,
    },
  });
}
