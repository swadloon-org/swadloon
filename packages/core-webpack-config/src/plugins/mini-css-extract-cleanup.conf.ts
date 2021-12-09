import { Compilation, Compiler, WebpackPluginInstance } from 'webpack';

export class MiniCssExtractPluginCleanup {
  shouldDelete: RegExp;

  constructor(deleteWhere = /\.js$/) {
    this.shouldDelete = new RegExp(deleteWhere);
  }
  apply(compiler: Compiler) {
    compiler.hooks.compilation.tap('MiniCssExtractPluginCleanup', (compilation) => {
      const logger = compilation.getLogger('MiniCssExtractPluginCleanup'); // TODO: how to use webpack loggers?
      console.log(`removing assets that matches: ${this.shouldDelete.toString()}`);
      compilation.hooks.processAssets.tap(
        {
          name: 'MiniCssExtractPluginCleanup',
          stage: Compilation.PROCESS_ASSETS_STAGE_PRE_PROCESS,
          additionalAssets: true,
        },
        (assets) => {
          const assetKeys = Object.keys(assets);
          console.log(`processing ${assetKeys.length} assets...`);

          assetKeys.forEach((asset) => {
            if (this.shouldDelete.test(asset)) {
              console.log(`deleting ${asset}`);
              delete assets[asset];
            }
          });
        }
      );
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
