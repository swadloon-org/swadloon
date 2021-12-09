import { Compiler, WebpackPluginInstance } from 'webpack';

export class MiniCssExtractPluginCleanup {
  shouldDelete: RegExp;

  constructor(deleteWhere = /\.js$/) {
    this.shouldDelete = new RegExp(deleteWhere);
  }
  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync('MiniCssExtractPluginCleanup', (compilation, callback) => {
      Object.keys(compilation.assets).forEach((asset) => {
        if (this.shouldDelete.test(asset)) {
          delete compilation.assets[asset];
        }
      });
      callback();
    });
  }
}

/**
 * Small plugin to clean up files after webpack compilation
 * @see https://github.com/webpack/webpack/issues/7300#issuecomment-413959996
 */
export const getMiniCssCleanupPlugin: () => WebpackPluginInstance = function () {
  return new MiniCssExtractPluginCleanup();
};
