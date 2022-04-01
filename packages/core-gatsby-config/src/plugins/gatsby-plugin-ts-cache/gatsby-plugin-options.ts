export type GatsbyPluginTsCacheOptions = {
  /**
   * Name of the package that runs this plugin
   * @example my-website
   */
  packageName: string;
  /**
   * Plugin name for logging purposes
   * @example gatsby-plugin-core
   */
  pluginName?: string;
  /**
   * Activate or desactivate custom webpack cache for Gatsby
   * @default true
   */
  cache?: boolean;
};
