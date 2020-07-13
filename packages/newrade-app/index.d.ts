import { Compiler } from './node_modules/diez-webpack-plugin/types/node_modules/webpack';
declare namespace DiezWebpackPlugin {
  /**
   * Options accepted by the plugin.
   */
  interface Options {
    sdk: string;
    projectPath?: string;
  }
}
/**
 * Integrates a Diez project with Webpack.
 */
declare class DiezWebpackPlugin {
  private readonly options;
  constructor(options: DiezWebpackPlugin.Options);
  private validateOptions;
  private get hotFilePath();
  private get isRunningHot();
  private setAlias;
  private setEnvironmentVariables;
  apply(compiler: Compiler): void;
}
export = DiezWebpackPlugin;
//# sourceMappingURL=index.d.ts.map
